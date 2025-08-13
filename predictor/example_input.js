// input.js
module.exports = {
    // base event settings
    baseEvent: {
        lan: true, // true or false
        prizePool: 10000, // total prizepool / stakes of the event / stage. ALWAYS have as minimum 1
        teamEarnings: 5500, // earnings a team will get from the event
        wins: 7, // total wins in the event
        prizeDistribution: [5500, 2500, 1000, 1000] // set numeric prize distribution of all prize placings of the event. if theres a shared prize duplicate it. i.e this means 1st - $5500, 2nd is $2500, 3rd-4th is $1000
    },

    primaryTeamId: "fnatic 2020", // if only running one team, set this as the team you want to run

    // list all teams competing in an event by their given team id. team ids are defined in teams.json
    targetTeamIds: [
        "500 2024",
        "9ine 2022",
        "9z team 2024",
        "bestia",
        "big 2020",
        "bounty hunters esports",
        "complexity 2025",
        "copenhagen wolves (american organization)",
        "ence 2020",
        "eyeballers 2023",
        "fnatic 2020",
        "aab esport",
        "Unranked",
        "kolesie",
        "marsborne",
        "metizport 2023",
        "might 2025",
        "ninjas in pyjamas 2021",
        "og",
        "saw 2021",
        "sharks esports 2023",
        "wanted goons",
        "wildcard 2024",
        "zero tenacity 2022",
    ],

};
