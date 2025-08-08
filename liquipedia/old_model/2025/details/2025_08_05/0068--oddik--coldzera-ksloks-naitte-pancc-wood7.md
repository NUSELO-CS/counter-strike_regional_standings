### Roster Details<br />
Team Name: ODDIK<br />
Roster: coldzera, ksloks, naitte, pancc, WOOD7<br />
Global Rank: [68](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [15]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  917.9<br />
<br />
Final Rank Value (917.9) = Starting Rank Value (933.7) + Head To Head Adjustments (-15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.469[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.130[<sup>2</sup>](#table1)
- LAN Wins: 0.138[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.623[<sup>2</sup>](#table1)

The average of these factors is 0.281<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 933.7
- 400 + ( ( 0.281 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 933.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |        4 | 2025-08-04 | 9z Team                  | L   | 1.000      | -            | -                | -                | -         |   -14.73 | coldzera, ksloks, naitte, pancc, WOOD7  |
|           52 |        8 | 2025-08-03 | Game Hunters             | W   | 1.000      | 0.143        | -                | 0.431 (0.062)    | 0 (0.000) |     8.24 | coldzera, ksloks, naitte, pancc, WOOD7  |
|           51 |       21 | 2025-08-02 | Imperial Esports         | L   | 1.000      | -            | -                | -                | -         |    -9.72 | coldzera, ksloks, naitte, pancc, WOOD7  |
|           50 |       31 | 2025-08-01 | DESEMPREGUEIDOS          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.75 | coldzera, ksloks, naitte, pancc, WOOD7  |
|           49 |      253 | 2025-07-17 | RED Canids               | L   | 1.000      | -            | -                | -                | -         |   -19.25 | ksloks, naitte, pancc, t9rnay, WOOD7    |
|           48 |      257 | 2025-07-17 | 9z Team                  | L   | 1.000      | -            | -                | -                | -         |   -15.69 | ksloks, naitte, pancc, t9rnay, WOOD7    |
|           47 |      273 | 2025-07-16 | DESEMPREGUEIDOS          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.19 | ksloks, naitte, pancc, t9rnay, WOOD7    |
|           46 |      347 | 2025-07-13 | 9z Team                  | L   | 1.000      | -            | -                | -                | -         |   -17.26 | ksloks, naitte, pancc, t9rnay, WOOD7    |
|           45 |      350 | 2025-07-13 | Fluxo                    | W   | 1.000      | 0.384        | 0.041 (0.016)    | 0.420 (0.162)    | 0 (0.000) |    18.29 | ksloks, naitte, pancc, t9rnay, WOOD7    |
|           44 |      372 | 2025-07-12 | Flamengo Esports         | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.620 (0.238)    | 0 (0.000) |     9.49 | ksloks, naitte, pancc, t9rnay, WOOD7    |
|           43 |      395 | 2025-07-11 | LargadosyPelados         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.74 | ksloks, naitte, pancc, t9rnay, WOOD7    |
|           42 |      450 | 2025-07-09 | Players (Brazilian team) | W   | 1.000      | 0.143        | -                | 0.327 (0.047)    | 0 (0.000) |     5.04 | ksloks, naitte, pancc, t9rnay, WOOD7    |
|           41 |      466 | 2025-07-09 | LargadosyPelados         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.29 | ksloks, naitte, pancc, t9rnay, WOOD7    |
|           40 |      515 | 2025-07-02 | Imperial Esports         | L   | 0.960      | -            | -                | -                | -         |   -11.22 | ksloks, naitte, pancc, togs, WOOD7      |
|           39 |      516 | 2025-07-02 | Flamengo Esports         | W   | 0.959      | 0.384        | 0.007 (0.002)    | 0.620 (0.229)    | -         |     9.75 | ksloks, naitte, pancc, togs, WOOD7      |
|           38 |      528 | 2025-07-01 | RED Canids               | W   | 0.951      | 0.384        | 0.014 (0.005)    | 0.605 (0.221)    | -         |    10.18 | ksloks, naitte, pancc, togs, WOOD7      |
|           37 |      564 | 2025-06-24 | Bounty Hunters Esports   | L   | 0.905      | -            | -                | -                | -         |   -20.65 | ksloks, naitte, pancc, togs, WOOD7      |
|           36 |     1239 | 2025-05-14 | Aurora Gaming            | L   | 0.629      | -            | -                | -                | -         |    -0.38 | ksloks, matios, naitte, pancc, WOOD7    |
|           35 |     1275 | 2025-05-12 | FURIA                    | L   | 0.622      | -            | -                | -                | -         |    -0.24 | ksloks, matios, naitte, pancc, WOOD7    |
|           34 |     1299 | 2025-05-11 | PaiN Gaming              | W   | 0.616      | 1.000        | 0.300 (0.185)    | 0.367 (0.226)    | 1 (0.616) |    18.61 | ksloks, matios, naitte, pancc, WOOD7    |
|           33 |     1313 | 2025-05-11 | G2 Esports               | W   | 0.611      | 1.000        | 0.048 (0.030)    | 0.063 (0.039)    | 1 (0.611) |     8.48 | ksloks, matios, naitte, pancc, WOOD7    |
|           32 |     1354 | 2025-05-09 | Astralis                 | L   | 0.602      | -            | -                | -                | -         |    -0.23 | ksloks, matios, naitte, pancc, WOOD7    |
|           31 |     1846 | 2025-04-17 | Legacy                   | L   | 0.452      | -            | -                | -                | -         |    -1.79 | ksloks, matios, naitte, pancc, WOOD7    |
|           30 |     1886 | 2025-04-16 | SELVA                    | W   | 0.445      | -            | -                | -                | -         |     4.64 | ksloks, matios, naitte, pancc, WOOD7    |
|           29 |     1908 | 2025-04-15 | Imperial Esports         | L   | 0.438      | -            | -                | -                | -         |    -5.21 | ksloks, matios, naitte, pancc, WOOD7    |
|           28 |     2019 | 2025-04-09 | KRÜ Esports              | W   | 0.400      | -            | -                | -                | -         |     2.90 | ksloks, matios, naitte, pancc, WOOD7    |
|           27 |     2023 | 2025-04-09 | KRÜ Esports              | W   | 0.400      | -            | -                | -                | -         |     2.98 | ksloks, matios, naitte, pancc, WOOD7    |
|           26 |     2139 | 2025-04-05 | Fluxo                    | L   | 0.372      | -            | -                | -                | -         |    -3.81 | ksloks, matios, naitte, pancc, WOOD7    |
|           25 |     2161 | 2025-04-04 | Crashers                 | W   | 0.364      | -            | -                | -                | -         |     1.86 | ksloks, matios, naitte, pancc, WOOD7    |
|           24 |     2190 | 2025-04-03 | Fluxo                    | L   | 0.357      | -            | -                | -                | -         |    -3.53 | ksloks, matios, naitte, pancc, WOOD7    |
|           23 |     2225 | 2025-04-02 | Fluxo                    | L   | 0.353      | -            | -                | -                | -         |    -3.58 | ksloks, matios, naitte, pancc, WOOD7    |
|           22 |     2226 | 2025-04-02 | Fluxo                    | L   | 0.352      | -            | -                | -                | -         |    -3.68 | ksloks, matios, naitte, pancc, WOOD7    |
|           21 |     2278 | 2025-04-01 | Bad Luck                 | L   | 0.347      | -            | -                | -                | -         |    -9.92 | ksloks, matios, naitte, pancc, WOOD7    |
|           20 |     2279 | 2025-04-01 | Bad Luck                 | L   | 0.347      | -            | -                | -                | -         |   -10.02 | ksloks, matios, naitte, pancc, WOOD7    |
|           19 |     2285 | 2025-04-01 | Imperial Esports         | W   | 0.345      | 0.143        | 0.121 (0.006)    | 0.691 (0.034)    | -         |     6.29 | ksloks, matios, naitte, pancc, WOOD7    |
|           18 |     2304 | 2025-03-31 | Fluxo                    | W   | 0.340      | 0.143        | 0.041 (0.002)    | -                | -         |     7.07 | ksloks, matios, naitte, pancc, WOOD7    |
|           17 |     2321 | 2025-03-30 | BESTIA                   | W   | 0.333      | 0.143        | 0.046 (0.002)    | -                | -         |     3.49 | ksloks, matios, naitte, pancc, WOOD7    |
|           16 |     2326 | 2025-03-30 | 2Game Esports            | W   | 0.332      | 0.143        | 0.023 (0.001)    | -                | -         |     3.22 | ksloks, matios, naitte, pancc, WOOD7    |
|           15 |     2374 | 2025-03-29 | BESTIA                   | L   | 0.326      | -            | -                | -                | -         |    -6.94 | ksloks, matios, naitte, pancc, WOOD7    |
|           14 |     2425 | 2025-03-28 | Elevate                  | W   | 0.320      | -            | -                | -                | -         |     0.98 | ksloks, matios, naitte, pancc, WOOD7    |
|           13 |     2509 | 2025-03-27 | X7 Team                  | W   | 0.313      | -            | -                | -                | -         |     0.48 | ksloks, matios, naitte, pancc, WOOD7    |
|           12 |     2573 | 2025-03-26 | Bounty Hunters Esports   | W   | 0.307      | -            | -                | -                | -         |     2.51 | ksloks, matios, naitte, pancc, WOOD7    |
|           11 |     2576 | 2025-03-26 | Bounty Hunters Esports   | W   | 0.307      | -            | -                | -                | -         |     2.56 | ksloks, matios, naitte, pancc, WOOD7    |
|           10 |     2617 | 2025-03-25 | Keyd Stars               | W   | 0.300      | -            | -                | -                | -         |     2.34 | ksloks, matios, naitte, pancc, WOOD7    |
|            9 |     2618 | 2025-03-25 | Keyd Stars               | W   | 0.300      | -            | -                | -                | -         |     2.38 | ksloks, matios, naitte, pancc, WOOD7    |
|            8 |     2829 | 2025-03-14 | Yawara E-Sports          | L   | 0.227      | -            | -                | -                | -         |    -5.71 | ksloks, matios, naitte, pancc, WOOD7    |
|            7 |     2830 | 2025-03-14 | Yawara E-Sports          | W   | 0.227      | -            | -                | -                | -         |     1.45 | ksloks, matios, naitte, pancc, WOOD7    |
|            6 |     2926 | 2025-03-10 | Fluxo                    | L   | 0.198      | -            | -                | -                | -         |    -4.99 | Ceruttera, matios, naitte, pancc, WOOD7 |
|            5 |     2944 | 2025-03-09 | 2Game Esports            | L   | 0.194      | -            | -                | -                | -         |    -4.33 | Ceruttera, matios, naitte, pancc, WOOD7 |
|            4 |     2954 | 2025-03-09 | ShindeN                  | W   | 0.192      | -            | -                | -                | -         |     1.30 | Ceruttera, matios, naitte, pancc, WOOD7 |
|            3 |     3002 | 2025-03-08 | Flamengo Esports         | W   | 0.188      | 0.371        | -                | 0.620 (0.043)    | -         |     1.75 | Ceruttera, matios, naitte, pancc, WOOD7 |
|            2 |     3050 | 2025-03-08 | AdalYamigos              | W   | 0.185      | -            | -                | -                | -         |     0.88 | Ceruttera, matios, naitte, pancc, WOOD7 |
|            1 |     3120 | 2025-03-07 | Flamengo Esports         | L   | 0.178      | -            | -                | -                | -         |    -4.00 | Ceruttera, matios, naitte, pancc, WOOD7 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,237.24)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-05 |      1.000 | $750.00        | $750.00         |
| 2025-07-13 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-07-02 |      0.960 | $5,000.00      | $4,797.92       |
| 2025-05-18 |      0.657 | $31,250.00     | $20,533.85      |
| 2025-03-11 |      0.207 | $750.00        | $155.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
