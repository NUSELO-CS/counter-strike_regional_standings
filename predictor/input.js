// input.js
module.exports = {
    // base event settings
    baseEvent: {
        lan: false, // true or false
        prizePool: 1, // total prizepool / stakes of the event / stage. ALWAYS have as minimum 1
        teamEarnings: 1, // earnings a team will get from the event
        wins: 4, // total wins in the event
        prizeDistribution: [1, 1, 1, 1] // set numeric prize distribution of all prize placings of the event. if theres a shared prize duplicate it. i.e this means 1st - $5500, 2nd is $2500, 3rd-4th is $1000
    },

    primaryTeamId: "nrg 2024", // if only running one team, set this as the team you want to run

    // leave as -1 to simulate match as next day (recommended)
    // Note: If you only set an overrided event time, and do not override the rankings time. The rankings will be generated immediately after the last match in the system.
    // To grab unixtimestmap dates, use https://www.unixtimestamp.com/
    overrideEventTime: 	-1, 

    // leave as -1 to simulate match as next day (recommended).
    // NOTE: If you set a rankings time and do not set an overrided event time, the event time will be set as 1 day before the rankings time.
    overrideRankingsTime: -1, 

    // list all teams competing in an event by their given team id. team ids are defined in teams.json
    targetTeamIds: [
        
    ],

};
