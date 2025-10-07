### Roster Details<br />
Team Name: Wildcard<br />
Roster: F1KU, JBa, Peeping, phzy, stanislaw<br />
Global Rank: [55](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [14]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  1111.9<br />
<br />
Final Rank Value (1111.9) = Starting Rank Value (1189.9) + Head To Head Adjustments (-78.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.445[<sup>1</sup>](#table2)
- Bounty Collected: 0.380[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.603[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.840[<sup>2</sup>](#table1)

The average of these factors is 0.404<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1189.9
- 400 + ( ( 0.404 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1189.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |       14 | 2025-10-04 | OG                                        | L   | 1.000      | -            | -                | -                | -         |    -5.51 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           48 |       24 | 2025-10-04 | Copenhagen Wolves (American organization) | W   | 1.000      | 0.333        | 0.020 (0.007)    | 0.769 (0.256)    | 1 (1.000) |     7.25 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           47 |      230 | 2025-09-26 | Betclic Apogee Esports                    | L   | 1.000      | -            | -                | -                | -         |   -23.36 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           46 |      249 | 2025-09-26 | Phantom Esports                           | L   | 1.000      | -            | -                | -                | -         |   -28.80 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           45 |      270 | 2025-09-26 | MOUZ NXT                                  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.73 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           44 |      325 | 2025-09-22 | Marsborne                                 | W   | 1.000      | 0.363        | 0.030 (0.011)    | 0.545 (0.198)    | 0 (0.000) |    10.27 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           43 |      338 | 2025-09-21 | Getting Info                              | W   | 1.000      | 0.363        | 0.019 (0.007)    | 0.407 (0.148)    | 0 (0.000) |     6.15 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           42 |      392 | 2025-09-19 | SkinRave Esports                          | W   | 1.000      | 0.363        | 0.037 (0.013)    | 0.535 (0.194)    | -         |    13.29 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           41 |      423 | 2025-09-18 | Team Aether                               | W   | 1.000      | -            | -                | -                | -         |     2.55 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           40 |      452 | 2025-09-17 | Getting Info                              | L   | 1.000      | -            | -                | -                | -         |   -25.17 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           39 |      528 | 2025-09-14 | Marsborne                                 | L   | 1.000      | -            | -                | -                | -         |   -22.94 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           38 |      532 | 2025-09-14 | BOSS                                      | W   | 1.000      | 0.303        | -                | 0.427 (0.129)    | -         |     3.37 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           37 |      577 | 2025-09-13 | Barry pickers                             | W   | 1.000      | -            | -                | -                | -         |     0.41 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           36 |      662 | 2025-09-11 | Akimbo Esports                            | W   | 1.000      | -            | -                | -                | -         |     2.46 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           35 |      751 | 2025-09-09 | Nocturnal Esports                         | W   | 1.000      | -            | -                | -                | -         |     1.10 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           34 |      840 | 2025-09-07 | ODDIK                                     | W   | 1.000      | 0.333        | 0.077 (0.026)    | 0.545 (0.182)    | 1 (1.000) |    19.17 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           33 |      843 | 2025-09-07 | Ninjas in Pyjamas                         | L   | 1.000      | -            | -                | -                | -         |    -4.20 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           32 |      861 | 2025-09-06 | Fluxo                                     | W   | 1.000      | 0.333        | 0.065 (0.022)    | 0.687 (0.229)    | 1 (1.000) |    21.21 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           31 |      873 | 2025-09-06 | PowerFinesse                              | W   | 0.999      | -            | -                | -                | 1 (0.999) |     0.51 | F1KU, JBa, Peeping, phzy, stanislaw   |
|           30 |      976 | 2025-08-30 | Getting Info                              | L   | 0.954      | -            | -                | -                | -         |   -24.38 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           29 |     1053 | 2025-08-28 | Regain                                    | W   | 0.940      | -            | -                | -                | -         |     1.52 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           28 |     1182 | 2025-08-21 | Getting Info                              | W   | 0.894      | -            | -                | -                | -         |     4.47 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           27 |     1235 | 2025-08-19 | BOSS                                      | W   | 0.881      | -            | -                | -                | -         |     3.13 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           26 |     1301 | 2025-08-16 | Getting Info                              | L   | 0.861      | -            | -                | -                | -         |   -23.80 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           25 |     1345 | 2025-08-15 | NRG                                       | L   | 0.854      | -            | -                | -                | -         |   -11.22 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           24 |     1396 | 2025-08-14 | M80                                       | W   | 0.847      | 0.333        | 0.165 (0.046)    | 0.695 (0.196)    | -         |    16.16 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           23 |     1443 | 2025-08-13 | True Synergy Gaming                       | W   | 0.840      | -            | -                | -                | -         |     0.58 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           22 |     1495 | 2025-08-12 | Chicken Coop Esports                      | W   | 0.834      | -            | -                | -                | -         |     2.24 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           21 |     1735 | 2025-08-01 | M80                                       | L   | 0.760      | -            | -                | -                | -         |   -10.01 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           20 |     1747 | 2025-08-01 | Marsborne                                 | L   | 0.758      | -            | -                | -                | -         |   -18.90 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           19 |     1761 | 2025-07-31 | NRG                                       | W   | 0.754      | 0.384        | 0.077 (0.022)    | 0.601 (0.174)    | -         |    13.75 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           18 |     1771 | 2025-07-30 | Life's A Game                             | W   | 0.747      | 0.384        | -                | 0.610 (0.175)    | -         |     1.93 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           17 |     1815 | 2025-07-27 | SkinRave Esports                          | L   | 0.726      | -            | -                | -                | -         |   -16.29 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           16 |     1841 | 2025-07-26 | MIGHT                                     | W   | 0.721      | -            | -                | -                | -         |     0.46 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           15 |     2636 | 2025-06-06 | Legacy                                    | L   | 0.386      | -            | -                | -                | -         |    -4.17 | JBa, phzy, Sonic, stanislaw, susp     |
|           14 |     2645 | 2025-06-05 | BetBoom Team                              | L   | 0.379      | -            | -                | -                | -         |    -2.21 | JBa, phzy, Sonic, stanislaw, susp     |
|           13 |     2659 | 2025-06-04 | B8                                        | L   | 0.372      | -            | -                | -                | -         |    -1.88 | JBa, phzy, Sonic, stanislaw, susp     |
|           12 |     2674 | 2025-06-03 | Lynn Vision Gaming                        | W   | 0.367      | 0.624        | 0.207 (0.047)    | -                | 1 (0.367) |     8.00 | JBa, phzy, Sonic, stanislaw, susp     |
|           11 |     2678 | 2025-06-03 | Metizport                                 | W   | 0.366      | -            | -                | -                | 1 (0.366) |     1.22 | JBa, phzy, Sonic, stanislaw, susp     |
|           10 |     2957 | 2025-05-15 | Legacy                                    | L   | 0.241      | -            | -                | -                | -         |    -2.65 | JBa, phzy, Sonic, stanislaw, susp     |
|            9 |     2980 | 2025-05-14 | Anything else                             | W   | 0.234      | -            | -                | -                | -         |     0.14 | JBa, phzy, Sonic, stanislaw, susp     |
|            8 |     3318 | 2025-05-02 | Team Spirit                               | L   | 0.152      | -            | -                | -                | -         |    -0.17 | JBa, phzy, Sonic, stanislaw, susp     |
|            7 |     3352 | 2025-05-01 | PaiN Gaming                               | W   | 0.143      | 0.687        | 0.341 (0.034)    | -                | 1 (0.143) |     3.88 | JBa, phzy, Sonic, stanislaw, susp     |
|            6 |     3368 | 2025-04-30 | Team Vitality                             | L   | 0.138      | -            | -                | -                | -         |    -0.13 | JBa, phzy, Sonic, stanislaw, susp     |
|            5 |     3484 | 2025-04-26 | HEROIC                                    | L   | 0.109      | -            | -                | -                | -         |    -0.93 | JBa, phzy, Sonic, stanislaw, susp     |
|            4 |     3497 | 2025-04-25 | 500                                       | W   | 0.104      | -            | -                | -                | -         |     1.07 | JBa, phzy, Sonic, stanislaw, susp     |
|            3 |     3512 | 2025-04-24 | BetBoom Team                              | L   | 0.098      | -            | -                | -                | -         |    -0.50 | JBa, phzy, Sonic, stanislaw, susp     |
|            2 |     3646 | 2025-04-16 | NRG                                       | W   | 0.047      | -            | -                | -                | -         |     0.86 | JBa, phzy, Sonic, stanislaw, susp     |
|            1 |     3673 | 2025-04-15 | Marsborne                                 | W   | 0.040      | -            | -                | -                | -         |     0.25 | JBa, phzy, Sonic, stanislaw, susp     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,308.80)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-22 |      1.000 | $8,000.00      | $8,000.00       |
| 2025-09-14 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-09-07 |      1.000 | $1,300.00      | $1,300.00       |
| 2025-09-02 |      0.974 | $1,000.00      | $973.94         |
| 2025-08-15 |      0.854 | $2,000.00      | $1,707.50       |
| 2025-08-01 |      0.760 | $5,000.00      | $3,802.08       |
| 2025-05-04 |      0.164 | $25,000.00     | $4,111.11       |
| 2025-04-27 |      0.118 | $3,500.00      | $414.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
