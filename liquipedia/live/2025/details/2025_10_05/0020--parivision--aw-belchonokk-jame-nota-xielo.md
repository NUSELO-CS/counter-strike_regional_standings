### Roster Details<br />
Team Name: PARIVISION<br />
Roster: AW, BELCHONOKK, Jame, nota, xiELO<br />
Global Rank: [20](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  1457.9<br />
<br />
Final Rank Value (1457.9) = Starting Rank Value (1396.0) + Head To Head Adjustments (61.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.627[<sup>1</sup>](#table2)
- Bounty Collected: 0.501[<sup>2</sup>](#table1)
- Opponent Network: 0.378[<sup>2</sup>](#table1)
- LAN Wins: 0.531[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.877[<sup>2</sup>](#table1)

The average of these factors is 0.509<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1396.0
- 400 + ( ( 0.509 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1396.0


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
|           75 |      151 | 2025-09-28 | BetBoom Team                              | W   | 1.000      | 0.435        | 0.440 (0.191)    | 0.885 (0.385)    | 1 (1.000) |    13.94 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           74 |      200 | 2025-09-27 | TPuDCATb TPu                              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.99 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           73 |      235 | 2025-09-26 | 9BoomPro                                  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.35 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           72 |      274 | 2025-09-25 | Nuclear TigeRES                           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.97 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           71 |      387 | 2025-09-20 | Gentle Mates                              | L   | 1.000      | -            | -                | -                | -         |   -15.68 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           70 |      407 | 2025-09-19 | Ninjas in Pyjamas                         | L   | 1.000      | -            | -                | -                | -         |   -15.90 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           69 |      446 | 2025-09-18 | B8                                        | W   | 1.000      | 0.769        | 0.262 (0.201)    | -                | 1 (1.000) |    14.79 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           68 |      695 | 2025-09-11 | 9z Team                                   | L   | 1.000      | -            | -                | -                | -         |   -26.23 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           67 |      790 | 2025-09-09 | ECSTATIC                                  | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.37 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           66 |      946 | 2025-09-01 | BetBoom Team                              | W   | 0.965      | 0.384        | 0.440 (0.163)    | 0.885 (0.328)    | 0 (0.000) |    16.08 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           65 |      958 | 2025-08-31 | 9INE                                      | W   | 0.959      | 0.384        | -                | 1.000 (0.368)    | 0 (0.000) |    11.46 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           64 |     1017 | 2025-08-29 | Zero Tenacity                             | W   | 0.945      | -            | -                | -                | 0 (0.000) |     4.90 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           63 |     1057 | 2025-08-28 | OG                                        | W   | 0.939      | 0.384        | 0.132 (0.048)    | 1.000 (0.361)    | -         |    16.87 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           62 |     1083 | 2025-08-27 | 9INE                                      | L   | 0.932      | -            | -                | -                | -         |   -17.48 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           61 |     1288 | 2025-08-17 | ECSTATIC                                  | W   | 0.865      | 0.624        | 0.086 (0.046)    | 0.632 (0.341)    | -         |    11.79 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           60 |     1317 | 2025-08-16 | ENCE                                      | W   | 0.859      | 0.384        | 0.178 (0.059)    | 1.000 (0.330)    | -         |    14.13 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           59 |     1404 | 2025-08-14 | Gentle Mates                              | W   | 0.845      | 0.384        | 0.234 (0.076)    | 1.000 (0.325)    | -         |    16.68 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           58 |     1453 | 2025-08-13 | ENCE                                      | W   | 0.839      | 0.624        | 0.178 (0.093)    | 1.000 (0.524)    | -         |    15.71 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           57 |     1472 | 2025-08-13 | Fnatic                                    | W   | 0.838      | 0.624        | 0.148 (0.078)    | 0.907 (0.474)    | -         |    17.59 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           56 |     1511 | 2025-08-12 | Sashi Esport                              | W   | 0.832      | -            | -                | -                | -         |     4.20 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           55 |     1599 | 2025-08-10 | OG                                        | L   | 0.818      | -            | -                | -                | -         |    -9.41 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           54 |     1616 | 2025-08-10 | Fnatic                                    | W   | 0.817      | 0.435        | 0.148 (0.053)    | -                | -         |    17.80 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           53 |     1625 | 2025-08-09 | Partizan Esports                          | W   | 0.812      | 0.435        | -                | 0.984 (0.347)    | -         |     7.92 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           52 |     1654 | 2025-08-08 | CYBERSHOKE Esports                        | W   | 0.803      | -            | -                | -                | -         |     4.31 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           51 |     1992 | 2025-07-17 | Inner Circle Esports                      | L   | 0.658      | -            | -                | -                | -         |   -12.60 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           50 |     1996 | 2025-07-17 | Nemiga Gaming                             | W   | 0.657      | -            | -                | -                | -         |     5.25 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           49 |     2013 | 2025-07-16 | Sashi Esport                              | W   | 0.652      | -            | -                | -                | -         |     3.12 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           48 |     2024 | 2025-07-16 | Passion UA                                | W   | 0.651      | -            | -                | -                | -         |     4.38 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           47 |     2035 | 2025-07-15 | Nemiga Gaming                             | L   | 0.645      | -            | -                | -                | -         |   -15.23 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           46 |     2042 | 2025-07-15 | FUT Esports                               | W   | 0.644      | -            | -                | -                | -         |     5.24 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           45 |     2058 | 2025-07-14 | ENCE                                      | W   | 0.639      | -            | -                | -                | -         |    13.41 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           44 |     2081 | 2025-07-13 | Gentle Mates                              | L   | 0.632      | -            | -                | -                | -         |    -5.56 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           43 |     2088 | 2025-07-13 | GUN5 Esports                              | W   | 0.630      | -            | -                | -                | -         |     1.90 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           42 |     2111 | 2025-07-12 | Marius                                    | W   | 0.624      | -            | -                | -                | -         |     0.70 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           41 |     2142 | 2025-07-11 | QMISTRY                                   | W   | 0.618      | -            | -                | -                | -         |     0.53 | AW, BELCHONOKK, Jame, nota, xiELO      |
|           40 |     2316 | 2025-06-23 | Copenhagen Wolves (American organization) | L   | 0.498      | -            | -                | -                | -         |   -14.72 | BELCHONOKK, Jame, nota, Qikert, xiELO  |
|           39 |     2328 | 2025-06-22 | Team Venom                                | W   | 0.490      | -            | -                | -                | -         |     3.59 | BELCHONOKK, Jame, nota, Qikert, xiELO  |
|           38 |     2352 | 2025-06-20 | Roler Coaster                             | W   | 0.479      | -            | -                | -                | -         |     0.18 | BELCHONOKK, Jame, nota, Qikert, xiELO  |
|           37 |     2373 | 2025-06-19 | BIG                                       | L   | 0.471      | -            | -                | -                | -         |    -6.21 | BELCHONOKK, Jame, nota, Qikert, xiELO  |
|           36 |     2404 | 2025-06-17 | Sashi Esport                              | W   | 0.458      | -            | -                | -                | -         |     1.62 | BELCHONOKK, Jame, nota, Qikert, xiELO  |
|           35 |     2424 | 2025-06-16 | Dynamo Eclot                              | W   | 0.450      | -            | -                | -                | -         |     1.53 | BELCHONOKK, Jame, nota, Qikert, xiELO  |
|           34 |     2517 | 2025-06-13 | Zero Tenacity                             | L   | 0.431      | -            | -                | -                | -         |   -11.37 | BELCHONOKK, Jame, nota, Qikert, xiELO  |
|           33 |     2593 | 2025-06-09 | Partizan Esports                          | L   | 0.404      | -            | -                | -                | -         |    -9.40 | BELCHONOKK, Jame, nota, Qikert, xiELO  |
|           32 |     2608 | 2025-06-08 | Marius                                    | W   | 0.398      | -            | -                | -                | -         |     0.32 | BELCHONOKK, Jame, nota, Qikert, xiELO  |
|           31 |     2702 | 2025-05-31 | Nexus Gaming                              | L   | 0.343      | -            | -                | -                | -         |    -9.43 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           30 |     2710 | 2025-05-30 | Gentle Mates                              | W   | 0.337      | -            | -                | -                | -         |     7.50 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           29 |     2714 | 2025-05-29 | Partizan Esports                          | L   | 0.332      | -            | -                | -                | -         |    -7.96 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           28 |     2719 | 2025-05-29 | ENCE                                      | W   | 0.330      | -            | -                | -                | -         |     6.69 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           27 |     2738 | 2025-05-27 | Sangal Esports                            | L   | 0.317      | -            | -                | -                | -         |    -9.30 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           26 |     2752 | 2025-05-26 | TPuDCATb TPu                              | W   | 0.311      | -            | -                | -                | -         |     0.75 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           25 |     2757 | 2025-05-26 | Sashi Esport                              | W   | 0.309      | -            | -                | -                | -         |     0.87 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           24 |     2885 | 2025-05-19 | Sangal Esports                            | W   | 0.265      | -            | -                | -                | -         |     0.50 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           23 |     2905 | 2025-05-18 | ENCE                                      | L   | 0.258      | -            | -                | -                | -         |    -3.04 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           22 |     2912 | 2025-05-18 | OG                                        | W   | 0.257      | -            | -                | -                | -         |     5.63 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           21 |     2928 | 2025-05-17 | RUBY                                      | W   | 0.250      | -            | -                | -                | -         |     0.59 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           20 |     2951 | 2025-05-16 | Inner Circle Esports                      | W   | 0.244      | -            | -                | -                | -         |     2.08 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           19 |     2996 | 2025-05-14 | 500                                       | W   | 0.231      | -            | -                | -                | -         |     1.10 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           18 |     3037 | 2025-05-13 | AMKAL ESPORTS                             | W   | 0.224      | -            | -                | -                | -         |     0.08 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           17 |     3078 | 2025-05-11 | B8                                        | L   | 0.212      | -            | -                | -                | -         |    -2.40 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           16 |     3104 | 2025-05-10 | SINNERS Esports                           | W   | 0.206      | -            | -                | -                | -         |     0.80 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           15 |     3131 | 2025-05-09 | Betera Esports                            | W   | 0.199      | -            | -                | -                | -         |     0.70 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           14 |     3154 | 2025-05-08 | Zero Tenacity                             | W   | 0.192      | -            | -                | -                | -         |     1.03 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           13 |     3180 | 2025-05-07 | SINNERS Esports                           | L   | 0.186      | -            | -                | -                | -         |    -5.12 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           12 |     3195 | 2025-05-07 | ARCRED                                    | L   | 0.184      | -            | -                | -                | -         |    -5.41 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           11 |     3215 | 2025-05-06 | FUT Esports                               | W   | 0.179      | -            | -                | -                | -         |     0.92 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           10 |     3231 | 2025-05-06 | Team Spirit Academy                       | L   | 0.177      | -            | -                | -                | -         |    -5.12 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            9 |     3244 | 2025-05-05 | Sangal Esports                            | W   | 0.172      | -            | -                | -                | 1 (0.172) |     0.28 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            8 |     3434 | 2025-04-27 | GUN5 Esports                              | L   | 0.118      | -            | -                | -                | -         |    -3.61 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            7 |     3547 | 2025-04-21 | Sashi Esport                              | W   | 0.079      | -            | -                | -                | -         |     0.18 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            6 |     3578 | 2025-04-19 | Fire Flux Esports                         | W   | 0.065      | -            | -                | -                | -         |     0.05 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            5 |     3691 | 2025-04-15 | B8                                        | L   | 0.036      | -            | -                | -                | -         |    -0.43 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            4 |     3698 | 2025-04-14 | Astralis                                  | L   | 0.032      | -            | -                | -                | -         |    -0.12 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            3 |     3711 | 2025-04-14 | HEROIC                                    | L   | 0.030      | -            | -                | -                | -         |    -0.51 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            2 |     3728 | 2025-04-13 | Nexus Gaming                              | W   | 0.024      | -            | -                | -                | -         |     0.08 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            1 |     3753 | 2025-04-11 | CYBERSHOKE Esports                        | L   | 0.013      | -            | -                | -                | -         |    -0.35 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($96,424.66)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-28 |      1.000 | $30,000.00     | $30,000.00      |
| 2025-09-21 |      1.000 | $20,000.00     | $20,000.00      |
| 2025-09-01 |      0.965 | $12,000.00     | $11,583.33      |
| 2025-08-10 |      0.818 | $10,000.00     | $8,183.33       |
| 2025-07-13 |      0.632 | $23,380.77     | $14,781.84      |
| 2025-06-24 |      0.503 | $4,000.00      | $2,013.33       |
| 2025-05-31 |      0.343 | $11,000.00     | $3,776.67       |
| 2025-05-27 |      0.318 | $3,000.00      | $955.00         |
| 2025-05-18 |      0.258 | $10,000.00     | $2,584.49       |
| 2025-05-11 |      0.212 | $12,000.00     | $2,546.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
