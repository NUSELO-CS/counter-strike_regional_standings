### Roster Details<br />
Team Name: The Last Resort<br />
Roster: b0denmaster, b0RUP, birdfromsky, Keoz, Vegi<br />
Global Rank: [121](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [79]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  728.3<br />
<br />
Final Rank Value (728.3) = Starting Rank Value (729.9) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.216[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.207[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.146[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.9
- 400 + ( ( 0.173 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 729.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      215 | 2025-07-19 | NXT                    | L   | 1.000      | -            | -                | -                | -         |   -13.60 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           19 |      220 | 2025-07-19 | AimerLegion            | W   | 1.000      | 0.300        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     4.05 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           18 |      243 | 2025-07-18 | Iberian Soul           | L   | 1.000      | -            | -                | -                | -         |    -1.72 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           17 |      723 | 2025-06-14 | TEAM NEXT LEVEL        | L   | 0.838      | -            | -                | -                | -         |    -2.07 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           16 |      742 | 2025-06-14 | Eternal Fire           | W   | 0.836      | 0.360        | 0.002 (0.000)    | 0.485 (0.146)    | 1 (0.836) |    16.87 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           15 |      752 | 2025-06-13 | Fnatic                 | L   | 0.832      | -            | -                | -                | -         |    -1.50 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           14 |     2149 | 2025-04-05 | BC.Game Esports        | L   | 0.370      | -            | -                | -                | -         |    -3.73 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           13 |     2345 | 2025-03-30 | 9INE                   | L   | 0.329      | -            | -                | -                | -         |    -1.14 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           12 |     2397 | 2025-03-29 | NOVAQ                  | L   | 0.324      | -            | -                | -                | -         |    -7.15 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           11 |     2443 | 2025-03-28 | 9INE                   | L   | 0.319      | -            | -                | -                | -         |    -1.13 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           10 |     2525 | 2025-03-27 | Dynamo Eclot           | W   | 0.311      | 0.143        | 0.081 (0.004)    | 0.725 (0.032)    | 0 (0.000) |     7.65 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|            9 |     2672 | 2025-03-22 | Zero Tenacity          | W   | 0.278      | 0.362        | 0.012 (0.001)    | 0.785 (0.079)    | 0 (0.000) |     6.09 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            8 |     2685 | 2025-03-21 | Zero Tenacity          | L   | 0.272      | -            | -                | -                | -         |    -2.63 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            7 |     2741 | 2025-03-19 | Inputprayers           | W   | 0.258      | 0.396        | 0.000 (0.000)    | 0.058 (0.006)    | 0 (0.000) |     1.78 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            6 |     2803 | 2025-03-16 | Betclic Apogee Esports | L   | 0.238      | -            | -                | -                | -         |    -1.03 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            5 |     2811 | 2025-03-16 | Monte                  | L   | 0.237      | -            | -                | -                | -         |    -3.81 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            4 |     2875 | 2025-03-12 | 9INE                   | L   | 0.211      | -            | -                | -                | -         |    -0.73 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            3 |     3067 | 2025-03-08 | Sashi Esport           | W   | 0.183      | 0.362        | 0.011 (0.001)    | 1.000 (0.066)    | 0 (0.000) |     4.57 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            2 |     3429 | 2025-02-25 | Fire Flux Esports      | L   | 0.110      | -            | -                | -                | -         |    -1.44 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            1 |     3448 | 2025-02-24 | Sangal Esports         | L   | 0.105      | -            | -                | -                | -         |    -0.94 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100.58)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      1.000 | $100.58        | $100.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
