### Roster Details<br />
Team Name: ENCE<br />
Roster: gla1ve, myltsi, Neityu, podi, sdy<br />
Global Rank: [40](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [29]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  1086.5<br />
<br />
Final Rank Value (1086.5) = Starting Rank Value (1046.8) + Head To Head Adjustments (39.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.539[<sup>1</sup>](#table2)
- Bounty Collected: 0.423[<sup>2</sup>](#table1)
- Opponent Network: 0.231[<sup>2</sup>](#table1)
- LAN Wins: 0.167[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.721[<sup>2</sup>](#table1)

The average of these factors is 0.340<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1046.8
- 400 + ( ( 0.340 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1046.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |      329 | 2025-07-14 | PARIVISION                     | L   | 1.000      | -            | -                | -                | -         |   -17.40 | gla1ve, myltsi, Neityu, podi, sdy     |
|           67 |      436 | 2025-07-10 | SENZA Esports                  | L   | 1.000      | -            | -                | -                | -         |   -26.50 | gla1ve, myltsi, Neityu, podi, sdy     |
|           66 |      904 | 2025-06-04 | M1 Gaming                      | W   | 0.772      | -            | -                | -                | 0 (0.000) |     3.10 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           65 |      934 | 2025-06-01 | Fnatic                         | L   | 0.752      | -            | -                | -                | -         |    -9.00 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           64 |      940 | 2025-05-31 | Fnatic                         | W   | 0.745      | 0.405        | 0.108 (0.033)    | 0.621 (0.188)    | 1 (0.745) |    14.70 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           63 |      953 | 2025-05-30 | 500                            | W   | 0.738      | -            | -                | -                | 1 (0.738) |     3.71 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           62 |      964 | 2025-05-29 | PARIVISION                     | L   | 0.730      | -            | -                | -                | -         |   -13.47 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           61 |      982 | 2025-05-27 | Passion UA                     | W   | 0.717      | 0.435        | 0.098 (0.030)    | 1.000 (0.312)    | 0 (0.000) |    12.56 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           60 |      991 | 2025-05-26 | Sashi Esport                   | W   | 0.712      | 0.393        | -                | 1.000 (0.280)    | 0 (0.000) |     6.44 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           59 |     1080 | 2025-05-21 | 1win Team                      | W   | 0.677      | -            | -                | -                | 0 (0.000) |     2.69 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           58 |     1133 | 2025-05-19 | Nexus Gaming                   | W   | 0.664      | 0.393        | 0.151 (0.039)    | 0.883 (0.230)    | 0 (0.000) |     6.24 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           57 |     1143 | 2025-05-18 | PARIVISION                     | W   | 0.658      | 0.435        | 0.124 (0.035)    | 1.000 (0.286)    | 0 (0.000) |     9.25 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           56 |     1146 | 2025-05-18 | Nemiga Gaming                  | W   | 0.657      | 0.435        | 0.075 (0.022)    | 0.730 (0.209)    | 0 (0.000) |    12.15 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           55 |     1162 | 2025-05-17 | SAW                            | W   | 0.651      | 0.435        | 0.286 (0.081)    | -                | 0 (0.000) |    16.43 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           54 |     1177 | 2025-05-16 | Nexus Gaming                   | W   | 0.645      | 0.435        | 0.151 (0.042)    | 0.883 (0.248)    | -         |     7.08 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           53 |     1221 | 2025-05-14 | Passion UA                     | L   | 0.632      | -            | -                | -                | -         |    -6.90 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           52 |     1222 | 2025-05-14 | LA MASIA                       | W   | 0.632      | -            | -                | -                | -         |     1.59 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           51 |     1259 | 2025-05-13 | KOMNATA                        | W   | 0.625      | -            | -                | -                | -         |     1.14 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           50 |     1282 | 2025-05-12 | CYBERSHOKE Esports             | W   | 0.618      | 0.435        | -                | 0.741 (0.199)    | -         |     5.61 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           49 |     1306 | 2025-05-11 | KOMNATA                        | L   | 0.612      | -            | -                | -                | -         |   -18.28 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           48 |     1312 | 2025-05-11 | ECSTATIC                       | L   | 0.611      | -            | -                | -                | -         |    -5.65 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           47 |     1344 | 2025-05-10 | Team Spirit Academy            | W   | 0.604      | -            | -                | -                | -         |     8.41 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           46 |     1407 | 2025-05-07 | Partizan Esports               | W   | 0.586      | -            | -                | -                | -         |     6.37 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           45 |     1432 | 2025-05-07 | ECSTATIC                       | L   | 0.583      | -            | -                | -                | -         |    -5.11 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           44 |     1449 | 2025-05-06 | Eternal Fire                   | L   | 0.579      | -            | -                | -                | -         |   -15.31 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           43 |     1464 | 2025-05-06 | Fnatic                         | W   | 0.577      | 0.384        | 0.108 (0.024)    | -                | -         |    13.02 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           42 |     1487 | 2025-05-05 | CYBERSHOKE Esports             | W   | 0.570      | 0.384        | -                | 0.741 (0.162)    | -         |     5.12 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           41 |     1498 | 2025-05-04 | 9INE                           | W   | 0.564      | -            | -                | -                | -         |     9.53 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           40 |     1624 | 2025-04-29 | TPuDCATb TPu                   | W   | 0.532      | -            | -                | -                | -         |     4.05 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           39 |     1630 | 2025-04-29 | M1 Gaming                      | L   | 0.530      | -            | -                | -                | -         |   -14.34 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           38 |     1666 | 2025-04-27 | Zero Tenacity                  | W   | 0.517      | -            | -                | -                | -         |     4.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           37 |     1691 | 2025-04-26 | FUT Esports                    | L   | 0.512      | -            | -                | -                | -         |    -7.56 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           36 |     1722 | 2025-04-25 | 500                            | W   | 0.505      | -            | -                | -                | -         |     2.94 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           35 |     1761 | 2025-04-22 | Maestro Esports (Belgian team) | W   | 0.485      | -            | -                | -                | -         |     0.59 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           34 |     1791 | 2025-04-20 | FUT Esports                    | L   | 0.472      | -            | -                | -                | -         |    -7.14 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           33 |     1797 | 2025-04-20 | BetBoom Team                   | W   | 0.470      | 0.657        | 0.326 (0.101)    | 0.625 (0.193)    | -         |    12.31 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           32 |     1808 | 2025-04-19 | 9Pandas                        | W   | 0.465      | -            | -                | -                | -         |     4.27 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           31 |     1821 | 2025-04-18 | BetBoom Team                   | L   | 0.458      | -            | -                | -                | -         |    -2.36 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           30 |     1826 | 2025-04-18 | Metizport                      | L   | 0.457      | -            | -                | -                | -         |    -9.99 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           29 |     1836 | 2025-04-18 | Team Spirit Academy            | W   | 0.456      | -            | -                | -                | -         |     5.75 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           28 |     1843 | 2025-04-17 | LA MASIA                       | W   | 0.452      | -            | -                | -                | -         |     1.32 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           27 |     1845 | 2025-04-17 | Nexus Gaming                   | L   | 0.452      | -            | -                | -                | -         |    -9.63 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           26 |     1863 | 2025-04-17 | B8                             | L   | 0.450      | -            | -                | -                | -         |    -4.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           25 |     1882 | 2025-04-16 | SAW                            | W   | 0.445      | -            | -                | -                | -         |    11.85 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           24 |     1897 | 2025-04-16 | Fnatic                         | W   | 0.443      | -            | -                | -                | -         |    10.15 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           23 |     1911 | 2025-04-15 | Astralis                       | L   | 0.437      | -            | -                | -                | -         |    -0.32 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           22 |     1931 | 2025-04-14 | HEROIC                         | L   | 0.431      | -            | -                | -                | -         |    -1.11 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           21 |     1942 | 2025-04-14 | 500                            | W   | 0.429      | -            | -                | -                | -         |     2.73 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           20 |     2181 | 2025-04-03 | Dynamo Eclot                   | W   | 0.358      | -            | -                | -                | -         |     4.05 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           19 |     2187 | 2025-04-03 | Nexus Gaming                   | W   | 0.358      | 0.471        | 0.151 (0.025)    | -                | -         |     4.13 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           18 |     2230 | 2025-04-02 | Partizan Esports               | W   | 0.352      | -            | -                | -                | -         |     3.91 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           17 |     2233 | 2025-04-02 | LA MASIA                       | W   | 0.351      | -            | -                | -                | -         |     1.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           16 |     2256 | 2025-04-02 | BetBoom Team                   | L   | 0.350      | -            | -                | -                | -         |    -1.68 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           15 |     2405 | 2025-03-29 | B8                             | L   | 0.323      | -            | -                | -                | -         |    -2.63 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           14 |     2463 | 2025-03-28 | ECSTATIC                       | W   | 0.317      | -            | -                | -                | -         |     7.56 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           13 |     2516 | 2025-03-27 | PARIVISION                     | L   | 0.312      | -            | -                | -                | -         |    -5.10 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           12 |     2810 | 2025-03-16 | 500                            | L   | 0.237      | -            | -                | -                | -         |    -5.93 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           11 |     2824 | 2025-03-15 | 9Pandas                        | W   | 0.231      | -            | -                | -                | -         |     1.82 | gla1ve, Neityu, podi, sdy, xKacpersky |
|           10 |     2858 | 2025-03-13 | ECSTATIC                       | W   | 0.216      | -            | -                | -                | -         |     5.24 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            9 |     2968 | 2025-03-09 | FUT Esports                    | L   | 0.192      | -            | -                | -                | -         |    -2.91 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            8 |     2989 | 2025-03-09 | BIG                            | W   | 0.190      | -            | -                | -                | -         |     4.20 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            7 |     3028 | 2025-03-08 | BC.Game Esports                | W   | 0.185      | -            | -                | -                | -         |     1.45 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            6 |     3068 | 2025-03-08 | FUT Esports                    | L   | 0.183      | -            | -                | -                | -         |    -2.81 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            5 |     3128 | 2025-03-07 | OG                             | L   | 0.177      | -            | -                | -                | -         |    -3.18 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            4 |     3514 | 2025-02-21 | FUT Esports                    | L   | 0.083      | -            | -                | -                | -         |    -1.32 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            3 |     3618 | 2025-02-15 | Partizan Esports               | L   | 0.044      | -            | -                | -                | -         |    -0.87 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            2 |     3638 | 2025-02-14 | Passion UA                     | W   | 0.039      | -            | -                | -                | -         |     0.96 | gla1ve, Neityu, podi, sdy, xKacpersky |
|            1 |     3686 | 2025-02-12 | Alliance                       | W   | 0.025      | -            | -                | -                | -         |     0.55 | gla1ve, Neityu, podi, sdy, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,032.88)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-04 |      0.772 | $13,262.15     | $10,235.80      |
| 2025-06-01 |      0.752 | $7,375.93      | $5,543.22       |
| 2025-05-31 |      0.743 | $1,500.00      | $1,114.79       |
| 2025-05-18 |      0.658 | $22,000.00     | $14,482.82      |
| 2025-05-11 |      0.611 | $4,603.54      | $2,813.91       |
| 2025-04-20 |      0.472 | $42,000.00     | $19,830.42      |
| 2025-04-03 |      0.359 | $10,000.00     | $3,590.51       |
| 2025-03-16 |      0.239 | $5,000.00      | $1,193.40       |
| 2025-02-15 |      0.046 | $5,000.00      | $228.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
