const fs = require('fs');
const path = require('path');

function nearestPowerOfTwo(n) {
    return Math.pow(2, Math.ceil(Math.log2(n)));
}

// Generate a random team ID
function randomTeamId() {
    return 'team_' + Math.random().toString(36).substring(2, 10);
}

// Generate a fake UK roster of 5 players
function generateFakeRoster() {
    let roster = [];
    for (let i = 1; i <= 5; i++) {
        roster.push({
            playerId: `Player${Math.floor(Math.random() * 10000)}`,
            nick: `Player${i}`,
            country: 'United Kingdom',
            countryIso: 'GB',
            steamIds: [],
            totalMatches: 0,
            mostRecentMatch: 0
        });
    }
    return roster;
}

function generateEventId() {
    let id = '';
    for (let i = 0; i < 4; i++) {
        const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); 
        const number = Math.floor(Math.random() * 10); 
        id += letter + number;
    }
    return id;
}

function generateRandomTeamName() {
  const vals1 = ['Birmingham', 'Ruby', 'Kettering', 'drip', 'EPIC', 'Reason', 'The', 'The', 'Team', 'London'];
  const vals2 = ['Salvo', 'League', 'Massive', 'men', 'LAN', 'Gaming', 'Binmen', 'LastResort', 'Perilous', 'Mint'];

  const val1 = vals1[Math.floor(Math.random() * vals1.length)];
  const val2 = vals2[Math.floor(Math.random() * vals2.length)];
  return `${val1} ${val2}`;
}

function predictionGenerator(teams, inputData, matchTimes) {
    try {
        let predictionData = inputData;
        let numberWins = 0;
        const predictionEvents = predictionData.events || [];

        let allMatches = [];
        let allEvents = [];

        for (const e of predictionEvents) {
            const eventId = generateEventId();
            numberWins = e.wins;
            const mainTeamId = e.teamId;
            const allTeamIds = [mainTeamId, ...e.teams];
            const totalTeams = allTeamIds.length;
            const bracketSize = nearestPowerOfTwo(totalTeams);

            let warmupRounds = Math.max(0, 7 - Math.log2(bracketSize));

            // Map teamIds to full teams
            const fullTeams = allTeamIds.map(teamId => {
                let match = teams.find(t => t.teamId === teamId);

                if (!match || teamId === 'Unranked') {
                    match = {
                        teamId: randomTeamId(),
                        name: generateRandomTeamName(),
                        startingRankValue: 400,
                        activeRoster: generateFakeRoster()
                    };
                }

                return match;
            });

            // Sort highest to low rank
            const seededTeams = [...fullTeams].sort((a, b) => b.startingRankValue - a.startingRankValue);

            let matches = [];

            if (bracketSize <= numberWins) {
                matches = simulateElimination(seededTeams, mainTeamId, numberWins, matchTimes, eventId, e.lan);
            } else {
                const { warmupMatches } = simulateWarmup(seededTeams, warmupRounds, matchTimes, eventId, e.lan, mainTeamId);
                const eliminationMatches = simulateElimination(seededTeams, mainTeamId, numberWins, matchTimes, eventId, e.lan);
                matches = [...warmupMatches, ...eliminationMatches];
            }

            // Count wins per team
            const teamWins = {};
            matches.forEach(m => {
                const winnerId = (m.winningTeam === 1) ? m.team1Id : m.team2Id;
                teamWins[winnerId] = (teamWins[winnerId] || 0) + 1;
            });

            // Sort all teams by wins (desc)
            const sortedTeamsByWins = Object.keys(teamWins)
                .sort((a, b) => teamWins[b] - teamWins[a]);


            let prizeList = [...e.prizeDistribution].map(v => parseFloat(v) || 0);

            // Remove the selected team from the wins rankings
            const otherTeams = sortedTeamsByWins.filter(teamId => teamId !== mainTeamId);

            // Then remove said corresponding prize for given supplied team
            const mainPrizeValue = parseFloat(e.teamEarnings) || 0;
            const prizeIndexToRemove = prizeList.findIndex(p => p === mainPrizeValue);
            if (prizeIndexToRemove !== -1) {
                prizeList.splice(prizeIndexToRemove, 1); 
            }

            // Assign prizes to other teams
            let prizeDistribution = otherTeams.map((teamId, index) => {
                return {
                    placement: "",
                    teamId,
                    prize: prizeList[index] || 0,
                    clubShare: 0,
                    qualifiedEvents: []
                };
            });

            //Finally add supplied team
            prizeDistribution.push({
                placement: "", 
                teamId: mainTeamId,
                prize: mainPrizeValue,
                clubShare: 0,
                qualifiedEvents: []
            });

            // Create the event
            const eventObj = {
                eventId,
                eventName: eventId,
                prizepool: `${e.prizePool}`,
                lan: e.lan,
                valveRanked: true,
                finished: true,
                prizeDistribution
            };

            allEvents.push(eventObj);
            allMatches.push(...matches);
        }

        return { events: allEvents, matches: allMatches };

    } catch (err) {
        console.error('Error with prediction generator', err);
        return { events: [], matches: [] };
    }
}


function simulateElimination(teams, targetId, winsLeft, matchTimes, eventId, isLan) {
    let round = 1;
    let activeTeams = [...teams];
    let matches = [];

    // Determine bracket size
    const bracketSize = Math.pow(2, Math.ceil(Math.log2(activeTeams.length)));
    const byesCount = bracketSize - activeTeams.length;

    // Sort by rank
    activeTeams.sort((a, b) => b.startingRankValue - a.startingRankValue);

    // Assign byes to top seeds
    let byes = [];
    if (byesCount > 0) {
        byes = activeTeams.slice(0, byesCount);
        activeTeams = activeTeams.slice(byesCount);
    }

    while (activeTeams.length + byes.length > 1) {
        const nextRound = [];

        // Carry over byes to the progressed round
        if (byes.length > 0) {
            nextRound.push(...byes);
            byes = [];
        }

        for (let i = 0; i < activeTeams.length; i += 2) {
            if (i + 1 >= activeTeams.length) {
                nextRound.push(activeTeams[i]);
                continue;
            }

            const t1 = activeTeams[i];
            const t2 = activeTeams[i + 1];

            let winner, loser, matchWinnerNum;

            // Normal process
            if (t1.startingRankValue >= t2.startingRankValue) {
                winner = t1;
                loser = t2;
                matchWinnerNum = 1;
            } else {
                winner = t2;
                loser = t1;
                matchWinnerNum = 2;
            }

            // Force win if target is in the match
            if ((t1.teamId === targetId || t2.teamId === targetId) && winsLeft > 0) {
                winner = (t1.teamId === targetId) ? t1 : t2;
                loser = (winner === t1) ? t2 : t1;
                matchWinnerNum = (winner === t1) ? 1 : 2;
                winsLeft--;
            }

            matches.push({
                matchStartTime: matchTimes + (round - 1) * 3600, // have all matches run at offset
                team1Id: t1.teamId,
                team2Id: t2.teamId,
                team1Name: t1.name,
                team2Name: t2.name,
                team1Players: t1.activeRoster || [],
                team2Players: t2.activeRoster || [],
                winningTeam: matchWinnerNum,
                eventId: eventId,
                forfeited: false,
                valveRanked: true,
                lan: isLan,
                prediction: true
            });

            nextRound.push(winner);
        }

        activeTeams = nextRound;
        round++;
    }

    return matches;
}


function simulateWarmup(teams, warmupRounds, matchTimes, eventId, isLan, targetId) {
    let activeTeams = [...teams];
    let matches = [];

    for (let round = 1; round <= warmupRounds; round++) {
        activeTeams = activeTeams.sort(() => Math.random() - 0.5);

        for (let i = 0; i < activeTeams.length; i += 2) {
            if (i + 1 < activeTeams.length) {
                const t1 = activeTeams[i];
                const t2 = activeTeams[i + 1];
                let winnerNum;

                if (t1.teamId === targetId) {
                    winnerNum = 1; 
                } else if (t2.teamId === targetId) {
                    winnerNum = 2; 
                } else {
                    winnerNum = Math.random() < 0.5 ? 1 : 2; // random for non force team
                }

                matches.push({
                    team1Id: t1.teamId,
                    matchStartTime: matchTimes,
                    team2Id: t2.teamId,
                    team1Name: t1.name,
                    team2Name: t2.name,
                    team1Players: t1.activeRoster || [],
                    team2Players: t2.activeRoster || [],
                    winningTeam: winnerNum,
                    eventId: eventId,
                    forfeited: false,
                    valveRanked: true,
                    lan: isLan,
                    prediction: true
                });
            }
        }
    }

    return { warmupMatches: matches };
}

module.exports = { predictionGenerator };
