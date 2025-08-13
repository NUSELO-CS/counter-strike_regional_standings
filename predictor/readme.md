# HOW TO RUN VRS PREDICTIONS

First and foremostly, please note this is not absolutely accurate. This is using a near 1:1 matchdata.json to what HLTV and Valve are using but there can be discrepancies.
Even small discrepancies like match start time (which currently there is a small bug on the Valve model) will create a rippling effect across the model.

When simulated against the most recent Valve update, nearly all teams were within 1%. Its close, but always take a margin of error.

The primary focus for this is to provide an education and testing tool for teams / persons, the simulations here are not a guarantee. Particularly with how stakes will change in the future as well as roster changes / disbandments.

## Assumptions

If you are simulating an event it is assumed to run the day after the most recent available match data. Event simulations are run on what would their current effect be. Future simulation is not possible as you would have to simulate every single match in the ecoysystem correctly.

For an event, sample matches are created in which the higher ranked team or specified team is expected to win the match. A SE bracket is generated when possible to meet the wins requirement, otherwise seeding rounds are generated (to simulate groups)

The wins value you should be inputting is the maximum amount of wins possible in the tournament. If the tournament is an 8 team single elimination bracket it is 3.

# Prerequisites 

Install VS Code
Download and install from https://code.visualstudio.com.

Install Node.js (includes npm)
Download and install from https://nodejs.org.
Verify installation in your terminal:

```
node -v
npm -v
```

Install Git (for cloning the repo)
Download and install from https://git-scm.com.
Verify installation:

```
git --version
```

Make a new folder in which you want to have the repository

Open that folder in vs code

Clone the repository

```
git clone https://github.com/NUSELO-CS/counter-strike_regional_standings.git
```

This will create a new counter-strike_regional_standings folder in your new folder, open this counter-strike_regional_standings folder in vs code.

# How to run

Firstly, in the /data/ folder rename the most recent matchdata_sample_{date}.json to matchdata.json

Then prepare the event you want to simulate within /predictor/input.js. An example setup is available in example_input.js

i.e

```js
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
    overrideEventTime: 	-1, 

    // leave as -1 to simulate match as next day (recommended).
    // NOTE: If you set a rankings time and do not set an overrided event time, the event time will be set as 1 day before the rankings time.
    overrideRankingsTime: -1, 

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
```

In your terminal you can then run either
```
npm run predict
```
Predict will simulate what effect the rankings would have on fnatic winning this event A folder will be created at /predictor/predicted with the rankings outcome


or 
```
npm run multi
```

Multi will create a csv of the changes for all teams in the event if they were simulated to get the amount of wins and prizepool specified for first place.


If you would like to simulate a single match, set up your input.js as shown

```js
module.exports = {
    // base event settings
    baseEvent: {
        lan: true, // true or false
        prizePool: 10000, // total prizepool / stakes of the event / stage. ALWAYS have as minimum 1
        teamEarnings: 5500, // earnings a team will gain from the event. If you want to simulate without prizepool set 0
        wins: 1, 
        prizeDistribution: [7500, 2500] // set prizepool winning team gets and prizepool losing team gets
    },

    primaryTeamId: "fnatic 2020", // if only running one team, set this as the team you want to run

    // leave as -1 to simulate match as next day (recommended)
    // Note: If you only set an overrided event time, and do not override the rankings time. The rankings will be generated immediately after the last match in the system.
    overrideEventTime: 	-1, 

    // leave as -1 to simulate match as next day (recommended).
    // NOTE: If you set a rankings time and do not set an overrided event time, the event time will be set as 1 day before the rankings time.
    overrideRankingsTime: -1,

    // list all teams competing in an event by their given team id. team ids are defined in teams.json
    targetTeamIds: [
        "fnatic 2020",
        "9ine 2022"
    ],
};
```

this would simnulate a LAN match between fnatic and 9ine for a $10,000 prizepool event.


# Final notes

This is not a crystal ball, this is a tool for teams to be more able to simulate situations then trying to plug numbers into google sheets. The only official source is Valve's repo. Validate the outputs.

This is also not a future prediction tool. All VRS matches are tied together through H2H recalculations. This means its not to simulate an event in the future as you cannot account for the matches between now and then, this is simply just a tool to assess what would be the outcomes if the event happened tomorrow.

You can simulate some more complex situations, use the matchdata.json with your own tweaks and Ill provide some more common simulations soon too.

# Support

On the github there is the Discussion, Issues and Pull requests tabs. 

Additionally if you need any assistance contact `mischiefcs` on discord
