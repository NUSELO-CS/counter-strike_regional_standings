// input.js
module.exports = {
    // base event settings
    baseEvent: {
        lan: true, // true or false
        prizePool: 10000, // total prizepool / stakes of the event / stage. ALWAYS have as minimum 1
        teamEarnings: 5500, // earnings a team will get from the event
        wins: 4, // total wins in the event
        prizeDistribution: [5500, 2500, 1300, 700] // set numeric prize distribution of all prize placings of the event. if theres a shared prize duplicate it. i.e this means 1st - $5500, 2nd is $2500, 3rd-4th is $1000
    },

    primaryTeamId: "nrg 2024", // if only running one team, set this as the team you want to run

    // leave as -1 to simulate match as next day (recommended)
    // Note: If you only set an overrided event time, and do not override the rankings time. The rankings will be generated immediately after the last match in the system.
    overrideEventTime: 	1757278800, 

    // leave as -1 to simulate match as next day (recommended).
    // NOTE: If you set a rankings time and do not set an overrided event time, the event time will be set as 1 day before the rankings time.
    overrideRankingsTime: 1759784400, 

    // list all teams competing in an event by their given team id. team ids are defined in teams.json
    targetTeamIds: [
        "ninjas in pyjamas 2021",
        "complexity 2025",
        "chicken coop esports",
        "mythic 2017",
        "bluejays 2015",
        "nrg 2024",
        "fluxo",
        "game hunters",
        "getting info",
        "ghost gaming 2017",
        "marsborne",
        "oddik",
        "supernova comets",
        "Unranked",
        "Unranked",
        "Unranked"
    ],

};
