### Roster Details<br />
Team Name: ALGO Esports<br />
Roster: anber, Dengzoe, Griller, nukkye, Scr0b<br />
Global Rank: [171](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [102]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  639.2<br />
<br />
Final Rank Value (639.2) = Starting Rank Value (662.5) + Head To Head Adjustments (-23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.023[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.247[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.5
- 400 + ( ( 0.134 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 662.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      137 | 2025-09-28 | Mousquetaires                             | L   | 1.000      | -            | -                | -                | -         |   -13.87 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           26 |      192 | 2025-09-27 | THE (Russian team)                        | L   | 1.000      | -            | -                | -                | -         |   -15.05 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           25 |      248 | 2025-09-26 | Mousquetaires                             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.237 (0.034)    | 0 (0.000) |    15.97 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           24 |      427 | 2025-09-18 | M1X                                       | L   | 1.000      | -            | -                | -                | -         |   -12.28 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|           23 |      477 | 2025-09-17 | Square Sausages                           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.094 (0.013)    | 0 (0.000) |    14.40 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|           22 |      555 | 2025-09-14 | NIP Impact                                | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.066 (0.009)    | 0 (0.000) |    14.68 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|           21 |      609 | 2025-09-13 | Mousquetaires                             | L   | 1.000      | -            | -                | -                | -         |   -14.58 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|           20 |      846 | 2025-09-07 | Zero Tenacity                             | L   | 1.000      | -            | -                | -                | -         |    -1.81 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|           19 |      954 | 2025-09-01 | FACEITPLAYERS                             | L   | 0.963      | -            | -                | -                | -         |   -13.28 | anber, Dengzoe, doto, Scr0b, St0m4k    |
|           18 |     1066 | 2025-08-28 | Reason Gaming                             | L   | 0.937      | -            | -                | -                | -         |    -4.25 | anber, Dengzoe, doto, Scr0b, St0m4k    |
|           17 |     1263 | 2025-08-18 | Betera Esports                            | L   | 0.869      | -            | -                | -                | -         |    -2.95 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           16 |     1297 | 2025-08-17 | Imperial Female                           | W   | 0.864      | 0.143        | 0.000 (0.000)    | 0.035 (0.004)    | 0 (0.000) |     7.76 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           15 |     1426 | 2025-08-14 | NIP Impact                                | W   | 0.844      | 0.143        | 0.021 (0.003)    | 0.066 (0.008)    | 0 (0.000) |    13.70 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           14 |     1457 | 2025-08-13 | Eternal Fire                              | L   | 0.839      | -            | -                | -                | -         |   -12.74 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           13 |     2210 | 2025-07-08 | Y5 Esports                                | L   | 0.599      | -            | -                | -                | -         |   -10.37 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           12 |     2234 | 2025-07-06 | Marius                                    | L   | 0.583      | -            | -                | -                | -         |    -8.25 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|           11 |     2244 | 2025-07-04 | ALGO Esports                              | W   | 0.569      | 0.483        | 0.000 (0.000)    | 0.290 (0.080)    | 0 (0.000) |     7.78 | anber, Dengzoe, doto, fnl, Scr0b       |
|           10 |     2269 | 2025-07-01 | SENZA Esports                             | L   | 0.549      | -            | -                | -                | -         |    -6.23 | anber, Dengzoe, doto, fnl, Scr0b       |
|            9 |     2485 | 2025-06-14 | Nexus Gaming                              | L   | 0.436      | -            | -                | -                | -         |    -1.79 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            8 |     2540 | 2025-06-12 | Partizan Esports                          | L   | 0.425      | -            | -                | -                | -         |    -0.71 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            7 |     2561 | 2025-06-11 | Gentle Mates                              | L   | 0.418      | -            | -                | -                | -         |    -0.13 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            6 |     2588 | 2025-06-09 | QMISTRY                                   | W   | 0.405      | 0.384        | 0.008 (0.001)    | 0.343 (0.053)    | 0 (0.000) |     6.69 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            5 |     2629 | 2025-06-07 | Copenhagen Wolves (American organization) | W   | 0.391      | 0.384        | 0.020 (0.003)    | 0.769 (0.116)    | 0 (0.000) |     9.11 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            4 |     2642 | 2025-06-06 | -72C                                      | W   | 0.383      | 0.384        | 0.001 (0.000)    | 0.028 (0.004)    | -         |     5.36 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            3 |     3436 | 2025-04-27 | Tricked Esport                            | L   | 0.117      | -            | -                | -                | -         |    -1.91 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            2 |     3444 | 2025-04-27 | Preasy Esport                             | W   | 0.116      | 0.321        | 0.000 (0.000)    | -                | 1 (0.116) |     0.70 | anber, Dengzoe, fnl, Scr0b, St0m4k     |
|            1 |     3464 | 2025-04-26 | WOPA Esport                               | W   | 0.112      | 0.321        | -                | 0.012 (0.000)    | 1 (0.112) |     0.70 | anber, Dengzoe, fnl, Scr0b, St0m4k     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($178.76)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      0.117 | $1,522.25      | $178.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
