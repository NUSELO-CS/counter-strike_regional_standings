### Roster Details<br />
Team Name: Sashi Esport<br />
Roster: Beccie, Cabbi, Lucky, MistR, Zyphon<br />
Global Rank: [45](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [31]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  1058.1<br />
<br />
Final Rank Value (1058.1) = Starting Rank Value (1002.4) + Head To Head Adjustments (55.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.420[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.279[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.308<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1002.4
- 400 + ( ( 0.308 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1002.4


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
|          100 |       41 | 2025-08-10 | BetBoom Team                              | L   | 1.000      | -            | -                | -                | -         |    -4.64 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           99 |       48 | 2025-08-10 | Inner Circle Esports                      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.89 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           98 |       70 | 2025-08-08 | Fnatic                                    | L   | 1.000      | -            | -                | -                | -         |    -8.60 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           97 |      107 | 2025-08-05 | Betclic Apogee Esports                    | W   | 1.000      | 0.435        | 0.042 (0.018)    | 0.432 (0.188)    | 0 (0.000) |    14.33 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           96 |      144 | 2025-08-02 | Nexus Gaming                              | W   | 1.000      | 0.435        | 0.154 (0.067)    | 0.767 (0.333)    | 0 (0.000) |    13.68 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           95 |      187 | 2025-07-31 | ARCRED                                    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.07 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           94 |      422 | 2025-07-16 | PARIVISION                                | L   | 0.992      | -            | -                | -                | -         |   -11.92 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           93 |      432 | 2025-07-16 | FUT Esports                               | W   | 0.991      | 0.143        | 0.304 (0.043)    | -                | 0 (0.000) |    21.94 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           92 |      443 | 2025-07-15 | TEAM NEXT LEVEL                           | L   | 0.985      | -            | -                | -                | -         |    -7.69 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           91 |      454 | 2025-07-15 | Fnatic                                    | W   | 0.984      | 0.143        | 0.128 (0.018)    | -                | 0 (0.000) |    25.45 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           90 |      472 | 2025-07-14 | Team Liquid                               | W   | 0.978      | 0.143        | 0.251 (0.035)    | -                | -         |    26.87 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           89 |      480 | 2025-07-14 | 1win Team                                 | W   | 0.976      | -            | -                | -                | -         |     7.59 | Beccie, Cabbi, Lucky, Patti, Zyphon   |
|           88 |      795 | 2025-06-17 | PARIVISION                                | L   | 0.797      | -            | -                | -                | -         |    -9.52 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           87 |      816 | 2025-06-16 | CYBERSHOKE Esports                        | L   | 0.789      | -            | -                | -                | -         |   -12.78 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           86 |      851 | 2025-06-14 | Passion UA                                | L   | 0.779      | -            | -                | -                | -         |    -7.40 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           85 |      858 | 2025-06-14 | Metizport                                 | W   | 0.778      | -            | -                | -                | 1 (0.778) |    10.53 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           84 |      878 | 2025-06-14 | EYEBALLERS                                | W   | 0.776      | -            | -                | -                | 1 (0.776) |     6.55 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           83 |      887 | 2025-06-13 | 9INE                                      | L   | 0.772      | -            | -                | -                | -         |    -9.07 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           82 |      939 | 2025-06-12 | Nexus Gaming                              | W   | 0.763      | 0.485        | 0.154 (0.057)    | 0.767 (0.284)    | -         |    12.11 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           81 |      963 | 2025-06-10 | Iberian Soul                              | L   | 0.751      | -            | -                | -                | -         |    -3.65 | Beccie, Cabbi, kiR, Lucky, Zyphon     |
|           80 |     1111 | 2025-05-28 | Iberian Soul                              | L   | 0.664      | -            | -                | -                | -         |    -2.63 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           79 |     1126 | 2025-05-26 | SAW                                       | W   | 0.652      | 0.435        | 0.328 (0.093)    | 0.487 (0.138)    | -         |    18.81 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           78 |     1129 | 2025-05-26 | ENCE                                      | L   | 0.652      | -            | -                | -                | -         |    -5.66 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           77 |     1137 | 2025-05-26 | Sangal Esports                            | L   | 0.650      | -            | -                | -                | -         |   -10.90 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           76 |     1140 | 2025-05-26 | PARIVISION                                | L   | 0.649      | -            | -                | -                | -         |    -7.54 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           75 |     1147 | 2025-05-25 | Ninjas in Pyjamas                         | L   | 0.643      | -            | -                | -                | -         |    -1.11 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           74 |     1175 | 2025-05-23 | TPuDCATb TPu                              | W   | 0.631      | 0.344        | -                | 0.805 (0.175)    | -         |     7.43 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           73 |     1178 | 2025-05-23 | Passion UA                                | L   | 0.629      | -            | -                | -                | -         |    -5.29 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           72 |     1188 | 2025-05-22 | Dynamo Eclot                              | W   | 0.625      | 0.435        | 0.083 (0.023)    | 0.597 (0.162)    | -         |     7.47 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           71 |     1194 | 2025-05-22 | FAVBET Team                               | W   | 0.624      | -            | -                | -                | -         |     7.55 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           70 |     1221 | 2025-05-21 | Monte                                     | W   | 0.617      | 0.435        | -                | 0.719 (0.193)    | -         |     7.16 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           69 |     1230 | 2025-05-20 | Reason Gaming                             | W   | 0.612      | -            | -                | -                | -         |     5.58 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           68 |     1251 | 2025-05-20 | Fire Flux Esports                         | W   | 0.609      | -            | -                | -                | -         |     5.50 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           67 |     1276 | 2025-05-19 | 9INE                                      | L   | 0.603      | -            | -                | -                | -         |    -5.52 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           66 |     1295 | 2025-05-17 | Zero Tenacity                             | L   | 0.592      | -            | -                | -                | -         |   -10.63 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           65 |     1337 | 2025-05-15 | Dynamo Eclot                              | L   | 0.579      | -            | -                | -                | -         |   -10.70 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           64 |     1351 | 2025-05-15 | Passion UA                                | L   | 0.576      | -            | -                | -                | -         |    -4.16 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           63 |     1373 | 2025-05-14 | Dynamo Eclot                              | W   | 0.570      | -            | -                | -                | -         |     7.65 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           62 |     1396 | 2025-05-13 | Passion UA                                | L   | 0.565      | -            | -                | -                | -         |    -3.93 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           61 |     1408 | 2025-05-13 | CYBERSHOKE Esports                        | L   | 0.563      | -            | -                | -                | -         |   -10.95 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           60 |     1455 | 2025-05-11 | CYBERSHOKE Esports                        | W   | 0.550      | 0.435        | -                | 0.696 (0.167)    | -         |     6.76 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           59 |     1525 | 2025-05-08 | JANO Esports                              | W   | 0.532      | -            | -                | -                | -         |     2.32 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           58 |     1532 | 2025-05-08 | Zero Tenacity                             | W   | 0.530      | -            | -                | -                | -         |     7.19 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           57 |     1552 | 2025-05-07 | Nexus Gaming                              | W   | 0.525      | 0.435        | 0.154 (0.035)    | 0.767 (0.175)    | -         |     7.81 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           56 |     1561 | 2025-05-07 | SPARTA Esports                            | W   | 0.524      | -            | -                | -                | -         |     2.18 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           55 |     1580 | 2025-05-06 | Partizan Esports                          | L   | 0.519      | -            | -                | -                | -         |    -8.40 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           54 |     1601 | 2025-05-06 | UNiTY esports                             | W   | 0.517      | -            | -                | -                | -         |     1.47 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           53 |     1616 | 2025-05-05 | Nexus Gaming                              | W   | 0.511      | 0.361        | 0.154 (0.028)    | 0.767 (0.142)    | -         |     7.76 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           52 |     1623 | 2025-05-05 | Zero Tenacity                             | L   | 0.510      | -            | -                | -                | -         |    -9.50 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           51 |     1628 | 2025-05-05 | FUT Esports                               | L   | 0.509      | -            | -                | -                | -         |    -5.28 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           50 |     1663 | 2025-05-03 | Alliance                                  | W   | 0.499      | -            | -                | -                | -         |    11.16 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           49 |     1676 | 2025-05-03 | SINNERS Esports                           | W   | 0.497      | -            | -                | -                | -         |     6.99 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           48 |     1694 | 2025-05-02 | CYBERSHOKE Esports                        | L   | 0.490      | -            | -                | -                | -         |    -9.36 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           47 |     1703 | 2025-05-01 | Modeame                                   | W   | 0.485      | -            | -                | -                | -         |     3.33 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           46 |     1722 | 2025-05-01 | Dynamo Eclot                              | L   | 0.483      | -            | -                | -                | -         |    -8.38 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           45 |     1739 | 2025-04-30 | Copenhagen Wolves (American organization) | W   | 0.478      | -            | -                | -                | -         |     4.55 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           44 |     1763 | 2025-04-29 | Imperial Female                           | W   | 0.471      | -            | -                | -                | -         |     4.26 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           43 |     1764 | 2025-04-29 | FUT Esports                               | L   | 0.471      | -            | -                | -                | -         |    -4.80 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           42 |     1774 | 2025-04-29 | Portuguese Family                         | W   | 0.470      | -            | -                | -                | -         |     1.23 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           41 |     1781 | 2025-04-28 | FUT Esports                               | L   | 0.465      | -            | -                | -                | -         |    -4.89 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           40 |     1795 | 2025-04-27 | 9Pandas                                   | W   | 0.459      | -            | -                | -                | -         |     5.65 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           39 |     1811 | 2025-04-27 | Tricked Esport                            | L   | 0.456      | -            | -                | -                | -         |    -7.52 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           38 |     1833 | 2025-04-26 | Prestige Esport                           | W   | 0.452      | -            | -                | -                | 1 (0.452) |     0.53 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           37 |     1878 | 2025-04-24 | 9INE                                      | W   | 0.438      | -            | -                | -                | -         |     9.38 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           36 |     1886 | 2025-04-23 | Passion UA                                | L   | 0.432      | -            | -                | -                | -         |    -2.67 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           35 |     1903 | 2025-04-22 | Eternal Fire                              | W   | 0.424      | -            | -                | -                | -         |     3.65 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           34 |     1914 | 2025-04-21 | PARIVISION                                | L   | 0.419      | -            | -                | -                | -         |    -5.11 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           33 |     2008 | 2025-04-17 | SINNERS Esports                           | W   | 0.389      | -            | -                | -                | -         |     5.92 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           32 |     2023 | 2025-04-16 | NOVAQ                                     | W   | 0.385      | -            | -                | -                | -         |     1.40 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           31 |     2088 | 2025-04-13 | Johnny Speeds                             | L   | 0.365      | -            | -                | -                | -         |    -9.73 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           30 |     2092 | 2025-04-13 | 9INE                                      | L   | 0.364      | -            | -                | -                | -         |    -3.53 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           29 |     2097 | 2025-04-13 | EYEBALLERS                                | W   | 0.363      | -            | -                | -                | 1 (0.363) |     0.42 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           28 |     2130 | 2025-04-11 | ECSTATIC                                  | L   | 0.350      | -            | -                | -                | -         |    -2.10 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           27 |     2280 | 2025-04-05 | OG                                        | L   | 0.311      | -            | -                | -                | -         |    -2.80 | Beccie, Cabbi, IceBerg, Lucky, Zyphon |
|           26 |     2422 | 2025-04-01 | KOLESIE                                   | L   | 0.285      | -            | -                | -                | -         |    -2.42 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           25 |     2469 | 2025-03-30 | ECSTATIC                                  | L   | 0.271      | -            | -                | -                | -         |    -1.70 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           24 |     2537 | 2025-03-29 | PARIVISION                                | L   | 0.264      | -            | -                | -                | -         |    -3.44 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           23 |     2607 | 2025-03-28 | Roler Coaster                             | W   | 0.256      | -            | -                | -                | -         |     0.59 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           22 |     2671 | 2025-03-27 | CYBERSHOKE Esports                        | L   | 0.250      | -            | -                | -                | -         |    -5.09 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           21 |     2759 | 2025-03-25 | Passion UA                                | L   | 0.239      | -            | -                | -                | -         |    -1.40 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           20 |     2814 | 2025-03-22 | Alliance                                  | W   | 0.217      | -            | -                | -                | -         |     5.15 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           19 |     2852 | 2025-03-20 | ECSTATIC                                  | W   | 0.203      | -            | -                | -                | -         |     5.24 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           18 |     2915 | 2025-03-18 | TPuDCATb TPu                              | L   | 0.192      | -            | -                | -                | -         |    -4.32 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           17 |     2973 | 2025-03-14 | TPuDCATb TPu                              | W   | 0.165      | -            | -                | -                | -         |     1.49 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           16 |     2990 | 2025-03-13 | Alliance                                  | W   | 0.158      | -            | -                | -                | -         |     3.86 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           15 |     3025 | 2025-03-11 | Sangal Esports                            | W   | 0.145      | -            | -                | -                | -         |     1.76 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           14 |     3098 | 2025-03-09 | SINNERS Esports                           | L   | 0.132      | -            | -                | -                | -         |    -2.36 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           13 |     3133 | 2025-03-09 | Zero Tenacity                             | L   | 0.130      | -            | -                | -                | -         |    -2.58 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           12 |     3197 | 2025-03-08 | ARCRED                                    | W   | 0.124      | -            | -                | -                | -         |     1.33 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           11 |     3205 | 2025-03-08 | The Last Resort                           | L   | 0.123      | -            | -                | -                | -         |    -3.08 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|           10 |     3242 | 2025-03-07 | Team Spirit Academy                       | L   | 0.119      | -            | -                | -                | -         |    -1.83 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            9 |     3252 | 2025-03-07 | Betclic Apogee Esports                    | L   | 0.118      | -            | -                | -                | -         |    -1.47 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            8 |     3318 | 2025-03-06 | Zero Tenacity                             | L   | 0.111      | -            | -                | -                | -         |    -2.27 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            7 |     3405 | 2025-03-03 | Partizan Esports                          | W   | 0.090      | -            | -                | -                | -         |     1.32 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            6 |     3422 | 2025-03-02 | PARIVISION                                | L   | 0.083      | -            | -                | -                | -         |    -1.12 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            5 |     3467 | 2025-02-28 | Zero Tenacity                             | L   | 0.071      | -            | -                | -                | -         |    -1.44 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            4 |     3528 | 2025-02-26 | Portuguese Family                         | L   | 0.058      | -            | -                | -                | -         |    -1.69 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            3 |     3590 | 2025-02-24 | Nemiga Gaming                             | L   | 0.045      | -            | -                | -                | -         |    -0.28 | Cabbi, IceBerg, Lucky, niko, Zyphon   |
|            2 |     3663 | 2025-02-20 | 9Pandas                                   | L   | 0.017      | -            | -                | -                | -         |    -0.39 | Altekz, Cabbi, IceBerg, Lucky, Zyphon |
|            1 |     3703 | 2025-02-18 | CYBERSHOKE Esports                        | W   | 0.006      | -            | -                | -                | -         |     0.06 | Cabbi, IceBerg, Lucky, niko, Zyphon   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,133.13)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-15 |      0.786 | $316.32        | $248.54         |
| 2025-06-04 |      0.712 | $910.71        | $648.31         |
| 2025-05-31 |      0.683 | $1,500.00      | $1,024.90       |
| 2025-05-27 |      0.658 | $1,000.00      | $658.26         |
| 2025-05-11 |      0.552 | $1,500.00      | $828.23         |
| 2025-05-01 |      0.483 | $1,500.00      | $724.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
