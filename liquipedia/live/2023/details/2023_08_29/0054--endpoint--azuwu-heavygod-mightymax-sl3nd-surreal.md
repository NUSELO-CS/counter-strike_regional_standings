### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal<br />
Global Rank: [54](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [44]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  959.1<br />
<br />
Final Rank Value (959.1) = Starting Rank Value (926.4) + Head To Head Adjustments (32.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.428[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.278[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.790[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 926.4
- 400 + ( ( 0.272 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 926.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           67 |      122 | 2023-08-24 | BIG                  | L   | 1.000      | -            | -                | -                | -         |    -7.96 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           66 |      182 | 2023-08-21 | los kogutos          | W   | 1.000      | 0.435        | 0.038 (0.017)    | 0.950 (0.413)    | 0 (0.000) |    12.55 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           65 |      200 | 2023-08-19 | B8                   | L   | 1.000      | -            | -                | -                | -         |   -20.87 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           64 |      236 | 2023-08-17 | Romania              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.62 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           63 |      283 | 2023-08-15 | Into the Breach      | L   | 1.000      | -            | -                | -                | -         |   -10.08 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           62 |      298 | 2023-08-14 | ThunderFlash         | W   | 1.000      | 0.435        | -                | 0.724 (0.315)    | 0 (0.000) |    11.08 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           61 |      503 | 2023-08-08 | EYEBALLERS           | W   | 1.000      | 0.435        | 0.017 (0.008)    | 0.609 (0.265)    | 0 (0.000) |    10.88 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           60 |      537 | 2023-08-07 | Hungary              | L   | 1.000      | -            | -                | -                | -         |   -18.04 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           59 |      601 | 2023-08-03 | Sampi                | W   | 1.000      | 0.435        | 0.087 (0.038)    | 1.000 (0.435)    | 0 (0.000) |    16.80 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           58 |      608 | 2023-08-03 | 500                  | L   | 1.000      | -            | -                | -                | -         |   -13.23 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           57 |      646 | 2023-08-01 | MASONIC              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.87 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           56 |      682 | 2023-07-30 | PGE Turow            | W   | 1.000      | 0.384        | 0.045 (0.017)    | 0.521 (0.200)    | 0 (0.000) |    10.52 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           55 |      996 | 2023-07-11 | Space                | L   | 0.875      | -            | -                | -                | -         |   -11.09 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           54 |     1007 | 2023-07-11 | NOVA                 | W   | 0.874      | -            | -                | -                | 0 (0.000) |     1.08 | AZUWU, HeavyGod, MiGHTYMAX, sl3nd, Surreal  |
|           53 |     1250 | 2023-06-10 | MOUZ NXT             | L   | 0.667      | -            | -                | -                | -         |   -11.68 | CacaNito, HeavyGod, mhL, MiGHTYMAX, Surreal |
|           52 |     1284 | 2023-06-09 | The Prodigies        | L   | 0.661      | -            | -                | -                | -         |   -16.87 | HeavyGod, mhL, MiGHTYMAX, Rejin, Surreal    |
|           51 |     1295 | 2023-06-09 | 9 Pandas             | W   | 0.659      | -            | -                | -                | 0 (0.000) |    13.19 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           50 |     1305 | 2023-06-09 | Anonymo              | W   | 0.658      | 0.435        | 0.035 (0.010)    | 0.712 (0.204)    | 0 (0.000) |     9.50 | CacaNito, HeavyGod, mhL, MiGHTYMAX, Surreal |
|           49 |     1330 | 2023-06-08 | Aurora               | L   | 0.654      | -            | -                | -                | -         |    -6.26 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           48 |     1335 | 2023-06-08 | Websterz             | W   | 0.653      | -            | -                | -                | -         |     8.93 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           47 |     1363 | 2023-06-07 | ex-Copenhagen Flames | W   | 0.648      | -            | -                | -                | -         |     7.60 | CacaNito, HeavyGod, mhL, MiGHTYMAX, Surreal |
|           46 |     1440 | 2023-06-04 | Into the Breach      | L   | 0.627      | -            | -                | -                | -         |    -3.69 | Frazehh, HeavyGod, mhL, MiGHTYMAX, Surreal  |
|           45 |     1462 | 2023-06-03 | Nexus                | W   | 0.621      | -            | -                | -                | -         |     3.34 | CacaNito, HeavyGod, mhL, MiGHTYMAX, Surreal |
|           44 |     1473 | 2023-06-03 | ex-Coalesce          | W   | 0.619      | -            | -                | -                | -         |     4.73 | Frazehh, HeavyGod, mhL, MiGHTYMAX, Surreal  |
|           43 |     1540 | 2023-06-01 | Anonymo              | W   | 0.606      | 0.435        | 0.035 (0.009)    | 0.712 (0.188)    | -         |     7.92 | CacaNito, HeavyGod, mhL, MiGHTYMAX, Surreal |
|           42 |     1650 | 2023-05-29 | Dripmen              | W   | 0.587      | -            | -                | -                | -         |     2.65 | Frazehh, HeavyGod, mhL, MiGHTYMAX, Surreal  |
|           41 |     1697 | 2023-05-28 | BIG                  | L   | 0.578      | -            | -                | -                | -         |    -7.87 | CacaNito, HeavyGod, mhL, MiGHTYMAX, Surreal |
|           40 |     1728 | 2023-05-27 | Aurora               | W   | 0.572      | 0.589        | 0.173 (0.058)    | 0.990 (0.333)    | -         |    13.28 | CacaNito, HeavyGod, mhL, MiGHTYMAX, Surreal |
|           39 |     1769 | 2023-05-26 | Sharks               | L   | 0.565      | -            | -                | -                | -         |    -8.44 | HeavyGod, meztal, mhL, MiGHTYMAX, Surreal   |
|           38 |     1794 | 2023-05-25 | Eternal Fire         | L   | 0.560      | -            | -                | -                | -         |    -7.81 | HeavyGod, meztal, mhL, MiGHTYMAX, Surreal   |
|           37 |     1815 | 2023-05-24 | 500                  | W   | 0.555      | 0.435        | 0.075 (0.018)    | 1.000 (0.241)    | -         |     8.78 | HeavyGod, meztal, mhL, MiGHTYMAX, Surreal   |
|           36 |     1824 | 2023-05-24 | Astralis Talent      | W   | 0.554      | 0.589        | 0.110 (0.036)    | 0.582 (0.190)    | -         |    11.02 | HeavyGod, meztal, mhL, MiGHTYMAX, Surreal   |
|           35 |     1870 | 2023-05-23 | Bad News Eagles      | W   | 0.547      | 0.435        | 0.135 (0.032)    | -                | -         |    13.65 | HeavyGod, meztal, mhL, MiGHTYMAX, Surreal   |
|           34 |     2002 | 2023-05-16 | FORZE                | L   | 0.500      | -            | -                | -                | -         |    -2.22 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           33 |     2238 | 2023-05-01 | Spirit               | L   | 0.398      | -            | -                | -                | -         |    -0.87 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           32 |     2248 | 2023-04-30 | ex-Copenhagen Flames | W   | 0.394      | -            | -                | -                | -         |     4.55 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           31 |     2304 | 2023-04-28 | BLINK                | W   | 0.379      | -            | -                | -                | -         |     2.22 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           30 |     2329 | 2023-04-27 | Zero Tenacity        | W   | 0.373      | -            | -                | -                | -         |     5.35 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           29 |     2362 | 2023-04-26 | KS                   | W   | 0.365      | -            | -                | -                | -         |     0.59 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           28 |     2377 | 2023-04-25 | EYEBALLERS           | L   | 0.360      | -            | -                | -                | -         |    -6.20 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           27 |     2395 | 2023-04-24 | Question Mark        | L   | 0.354      | -            | -                | -                | -         |    -6.47 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           26 |     2595 | 2023-04-14 | BIG Academy          | L   | 0.287      | -            | -                | -                | -         |    -6.68 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           25 |     2897 | 2023-03-31 | Spirit               | L   | 0.192      | -            | -                | -                | -         |    -0.41 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           24 |     2916 | 2023-03-30 | Young Ninjas         | W   | 0.187      | -            | -                | -                | -         |     2.59 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           23 |     2957 | 2023-03-29 | ex-iNation           | W   | 0.179      | -            | -                | -                | -         |     1.08 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           22 |     3120 | 2023-03-23 | PROSPECTS            | W   | 0.141      | -            | -                | -                | -         |     2.55 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           21 |     3153 | 2023-03-23 | Apeks                | L   | 0.138      | -            | -                | -                | -         |    -0.40 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           20 |     3170 | 2023-03-22 | ex-iNation           | W   | 0.134      | -            | -                | -                | -         |     0.82 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           19 |     3208 | 2023-03-21 | SAW                  | L   | 0.127      | -            | -                | -                | -         |    -0.70 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           18 |     3225 | 2023-03-21 | Young Ninjas         | W   | 0.125      | -            | -                | -                | -         |     1.75 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           17 |     3242 | 2023-03-20 | 500                  | W   | 0.120      | -            | -                | -                | -         |     2.04 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           16 |     3304 | 2023-03-18 | ECSTATIC             | W   | 0.105      | -            | -                | -                | -         |     2.01 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           15 |     3367 | 2023-03-16 | los kogutos          | W   | 0.094      | -            | -                | -                | -         |     1.55 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           14 |     3400 | 2023-03-15 | Apeks                | L   | 0.088      | -            | -                | -                | -         |    -0.24 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           13 |     3427 | 2023-03-14 | Into the Breach      | L   | 0.081      | -            | -                | -                | -         |    -0.41 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           12 |     3472 | 2023-03-12 | Nexus                | W   | 0.068      | -            | -                | -                | -         |     0.30 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           11 |     3567 | 2023-03-09 | Young Ninjas         | W   | 0.048      | -            | -                | -                | -         |     0.69 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|           10 |     3623 | 2023-03-08 | Bad News Eagles      | L   | 0.039      | -            | -                | -                | -         |    -0.26 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|            9 |     3638 | 2023-03-07 | 1WIN                 | L   | 0.034      | -            | -                | -                | -         |    -0.16 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|            8 |     3668 | 2023-03-06 | ATK                  | W   | 0.026      | -            | -                | -                | -         |     0.22 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|            7 |     3673 | 2023-03-06 | Let us cook          | L   | 0.025      | -            | -                | -                | -         |    -0.60 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|            6 |     3696 | 2023-03-05 | 9INE                 | L   | 0.019      | -            | -                | -                | -         |    -0.13 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|            5 |     3711 | 2023-03-04 | Into the Bin         | W   | 0.014      | -            | -                | -                | -         |     0.07 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|            4 |     3716 | 2023-03-04 | GamerLegion          | L   | 0.014      | -            | -                | -                | -         |    -0.01 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|            3 |     3721 | 2023-03-04 | Into the Bin         | W   | 0.013      | -            | -                | -                | -         |     0.06 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|            2 |     3737 | 2023-03-03 | MOUZ NXT             | L   | 0.008      | -            | -                | -                | -         |    -0.14 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |
|            1 |     3765 | 2023-03-02 | Illuminar            | L   | 0.000      | -            | -                | -                | -         |    -0.00 | Fessor, HeavyGod, mhL, MiGHTYMAX, Surreal   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,527.32)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-10 |      0.668 | $5,000.00      | $3,337.82       |
| 2023-06-04 |      0.627 | $2,787.00      | $1,746.64       |
| 2023-05-30 |      0.594 | $5,000.00      | $2,970.09       |
| 2023-05-25 |      0.561 | $5,000.00      | $2,804.02       |
| 2023-03-31 |      0.194 | $5,000.00      | $969.77         |
| 2023-03-23 |      0.140 | $5,000.00      | $698.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
