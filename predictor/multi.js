"use strict";

const fs = require('fs');
const Ranking = require('../model/ranking');
const P_Ranking = require('./model/p_ranking');
const { predictionGenerator } = require('./model/predictionGenerator');


const { targetTeamIds, baseEvent, overrideRankingsTime, overrideEventTime } = require('./input');

const TEAM_OVERLAP_TO_SHARE_ROSTER = 3;

function sharesRoster(oldTeam, newTeam) {
    let overlap = 0;
    newTeam.players.forEach(pNew => {
        if (oldTeam.players.some(pOld => pOld.playerId === pNew.playerId)) {
            overlap += 1;
        }
    });
    return overlap >= TEAM_OVERLAP_TO_SHARE_ROSTER;
}

function extractRegionalRank(regionalRanks) {
    if (!regionalRanks || !Array.isArray(regionalRanks)) return -1;
    const val = regionalRanks.find(rank => rank !== -1);
    return val !== undefined ? val : -1;
}

function run() {
    let filename = '../data/matchdata.json';
    let rankingsTime = -1;
    if(overrideRankingsTime !== undefined && overrideRankingsTime !== -1 && overrideEventTime >1) {
        rankingsTime = overrideEventTime;
    }


    let [matches, teams] = Ranking.generateRanking(-1, filename, rankingsTime);

    let maxTimestamp = Math.max(...matches.map(m => m.matchStartTime));

    // 86400s
    let nextDayTimestamp;

    if (overrideEventTime !== undefined && overrideEventTime !== -1 && overrideEventTime > 1) {
        nextDayTimestamp = overrideEventTime;
    } else {
        if(overrideRankingsTime !== undefined && overrideRankingsTime !== -1 && overrideEventTime >1) {
            nextDayTimestamp = rankingsTime - 86400;
        } else {
            nextDayTimestamp = maxTimestamp + 86400;
        }
    }

    let csvOutput = "team,beforeGlobal,afterGlobal,beforeRegional,afterRegional,beforeRankValue,afterRankValue\n";
    for (const teamId of targetTeamIds) {
        if (teamId.toLowerCase() === "unranked") continue;

        const beforeInstances = teams.filter(t => t.teamId === teamId);
        if (beforeInstances.length === 0) {
            csvOutput += `${teamId},N/A,N/A,N/A,N/A,N/A,N/A\n`;
            continue;
        }

        const before = beforeInstances.reduce((best, curr) =>
            !best || curr.startingRankValue > best.startingRankValue ? curr : best
        );

        const beforeGlobal = before.globalRank ?? "N/A";
        const beforeRegional = extractRegionalRank(before.regionalRank);
        const beforeRankValue = before.startingRankValue ?? "N/A";

        const predictionEvent = {
            events: [
                {
                    ...baseEvent,
                    teamId,
                    teams: targetTeamIds.filter(id => id !== teamId && id.toLowerCase() !== "unranked")
                }
            ]
        };

        const { matches: newMatches, events: newEvents } = predictionGenerator(teams, predictionEvent, nextDayTimestamp);
        const [updateMatches, updatedTeams] = P_Ranking.generateRanking(-1, filename, newMatches, newEvents, rankingsTime);

        // find updated teams that share roster
        const afterInstances = updatedTeams.filter(t => sharesRoster(before, t));

        if (afterInstances.length === 0) {
            csvOutput += `${teamId},${before.globalRank ?? "N/A"},N/A,${extractRegionalRank(before.regionalRank)},N/A,${before.startingRankValue ?? "N/A"},N/A\n`;
            continue;
        }

        const after = afterInstances.reduce((best, curr) =>
            !best || curr.startingRankValue > best.startingRankValue ? curr : best
        );

        const afterGlobal = after.globalRank ?? "N/A";
        const afterRegional = extractRegionalRank(after.regionalRank);
        const afterRankValue = after.startingRankValue ?? "N/A";

        csvOutput += `${teamId},${beforeGlobal},${afterGlobal},${beforeRegional},${afterRegional},${beforeRankValue},${afterRankValue}\n`;
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const filePath = `predict_${timestamp}.csv`;
    fs.writeFileSync(filePath, csvOutput, 'utf8');
    console.log(`CSV saved as ${filePath}`);
}

run();
