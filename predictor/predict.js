"use strict";

const Ranking = require('../model/ranking');
const P_Ranking = require('./model/p_ranking');
const { predictionGenerator } = require('./model/predictionGenerator');
const { primaryTeamId, targetTeamIds, baseEvent } = require('./input');
const RegionList = ['Europe', 'Americas', 'Asia'];
const P_Report = require('./model/p_report');

const TEAM_OVERLAP_TO_SHARE_ROSTER = 3;

function sharesRoster(oldTeam, newTeam) {
    let overlap = 0;
    newTeam.activeRoster.forEach(pNew => {
        if (oldTeam.activeRoster.some(pOld => pOld.playerId === pNew.playerId)) {
            overlap += 1;
        }
    });
    return overlap >= TEAM_OVERLAP_TO_SHARE_ROSTER;
}

function run() {
    let regions = [0, 1, 2];
    if (process.argv[2] !== undefined) regions = JSON.parse(process.argv[2]);

    let filename = '../data/matchdata.json';
    if (process.argv[3] !== undefined) filename = process.argv[3];

    let [matches, teams] = Ranking.generateRanking(-1, filename);

    let maxTimestamp = Math.max(...matches.map(m => m.matchStartTime));

    // 86400s
    let nextDayTimestamp = maxTimestamp + 86400;

    // Build predictionEvent using supplied team id, excluding it from the other competitors in case it has been included
    const predictionEvent = {
        events: [
            {
                ...baseEvent,
                teamId: primaryTeamId,
                teams: targetTeamIds.filter(
                    id => id !== primaryTeamId
                )
            }
        ]
    };

    let { matches: newMatches, events: newEvents } = predictionGenerator(teams, predictionEvent, nextDayTimestamp);

    let [updateMatches, updatedTeams] = P_Ranking.generateRanking(-1, filename, newMatches, newEvents);

    updatedTeams.forEach(newTeam => {
        // Find old team with shared roster
        const oldTeam = teams.find(t => sharesRoster(t, newTeam));

        if (oldTeam) {
            const oldRank = oldTeam.globalRank ?? 0;  
            const newRank = newTeam.globalRank ?? 0;
            newTeam.rankChange = oldRank - newRank; 
        } else {
            newTeam.rankChange = null; 
        }
    });


    let strDate = Math.floor(Date.now() / 1000);

    let standings = 'Standings';
    if (regions.length === 1) standings = `Regional Standings for ${RegionList[regions[0]]}`;

    if (process.argv[4] !== undefined) strDate = process.argv[4];

    //console.log(teams[0])                    // I'd recommend uncommenting this and looking at the output. Its very interesting to see how a team is constructed. This will be a team pre simulation
    // You can also do this uncommenting in the main /model section for fully unaffected data.

    P_Report.generateOutput( updatedTeams, regions, strDate );

}

run();
