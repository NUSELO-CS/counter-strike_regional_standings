### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Global Rank: [124](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [86]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  759.9<br />
<br />
Final Rank Value (759.9) = Starting Rank Value (903.5) + Head To Head Adjustments (-143.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.915[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 903.5
- 400 + ( ( 0.260 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 903.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |       26 | 2023-08-27 | RedPack           | L   | 1.000      | -            | -                | -                | -         |   -22.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           67 |       61 | 2023-08-26 | Jake Bube         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           66 |       64 | 2023-08-26 | allStars          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.41 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           65 |       68 | 2023-08-26 | Jake Bube         | L   | 1.000      | -            | -                | -                | -         |   -25.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           64 |      192 | 2023-08-20 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -9.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           63 |      214 | 2023-08-18 | Pompa             | L   | 1.000      | -            | -                | -                | -         |    -8.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           62 |      225 | 2023-08-18 | Pompa             | L   | 1.000      | -            | -                | -                | -         |    -9.11 | brutmonster, Cjoffo, kdaN, nEMANHA, simke |
|           61 |      245 | 2023-08-17 | los kogutos       | L   | 1.000      | -            | -                | -                | -         |   -12.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           60 |      262 | 2023-08-16 | los kogutos       | W   | 1.000      | 0.333        | 0.038 (0.013)    | 0.950 (0.317)    | 0 (0.000) |    18.88 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           59 |      282 | 2023-08-15 | Space             | W   | 1.000      | 0.435        | 0.099 (0.043)    | 0.904 (0.393)    | 0 (0.000) |    21.91 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           58 |      297 | 2023-08-14 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -25.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           57 |      343 | 2023-08-12 | Sangal            | W   | 1.000      | 0.143        | -                | 0.409 (0.058)    | 0 (0.000) |    14.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           56 |      487 | 2023-08-09 | Sashi             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           55 |      508 | 2023-08-08 | JANO              | L   | 1.000      | -            | -                | -                | -         |   -19.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           54 |      514 | 2023-08-08 | desenchantee      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.71 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           53 |      544 | 2023-08-06 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -3.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           52 |      556 | 2023-08-05 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -1.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           51 |      618 | 2023-08-02 | Into the Breach   | W   | 1.000      | 0.589        | 0.169 (0.100)    | 0.530 (0.312)    | 0 (0.000) |    26.91 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           50 |      720 | 2023-07-28 | Falcons           | L   | 0.987      | -            | -                | -                | -         |   -17.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           49 |      797 | 2023-07-22 | PACT              | L   | 0.945      | -            | -                | -                | -         |   -14.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           48 |      834 | 2023-07-20 | Espionage         | L   | 0.932      | -            | -                | -                | -         |    -7.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           47 |      865 | 2023-07-18 | Lazer Cats        | W   | 0.918      | -            | -                | -                | 0 (0.000) |     7.43 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           46 |      904 | 2023-07-16 | BRUTE             | W   | 0.904      | -            | -                | -                | -         |     4.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           45 |      914 | 2023-07-15 | Aurora Young Blud | L   | 0.901      | -            | -                | -                | -         |   -23.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           44 |      926 | 2023-07-15 | Lazer Cats        | W   | 0.899      | -            | -                | -                | -         |     7.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           43 |      944 | 2023-07-14 | Espionage         | L   | 0.892      | -            | -                | -                | -         |    -8.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           42 |      983 | 2023-07-12 | ThunderFlash      | L   | 0.878      | -            | -                | -                | -         |   -13.32 | aVN, brutmonster, DiMKE, nEMANHA, simke   |
|           41 |     1078 | 2023-06-26 | Singularity       | L   | 0.773      | -            | -                | -                | -         |   -14.80 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           40 |     1082 | 2023-06-25 | Question Mark     | L   | 0.767      | -            | -                | -                | -         |   -10.79 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           39 |     1084 | 2023-06-25 | Singularity       | W   | 0.766      | 0.333        | 0.041 (0.011)    | 0.384 (0.098)    | -         |     8.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           38 |     1091 | 2023-06-24 | Hungary           | W   | 0.760      | 0.338        | 0.040 (0.010)    | 0.746 (0.192)    | -         |    14.23 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           37 |     1095 | 2023-06-24 | Enterprise        | W   | 0.758      | -            | -                | -                | -         |     6.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           36 |     1106 | 2023-06-20 | HOTU              | W   | 0.734      | 0.338        | 0.034 (0.008)    | 0.290 (0.072)    | -         |    11.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           35 |     1136 | 2023-06-18 | Enterprise        | W   | 0.718      | -            | -                | -                | -         |     6.69 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           34 |     1156 | 2023-06-17 | los kogutos       | W   | 0.712      | 0.338        | 0.038 (0.009)    | 0.950 (0.229)    | -         |    11.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           33 |     1224 | 2023-06-11 | Jake Bube         | W   | 0.673      | -            | -                | -                | 1 (0.673) |     3.64 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           32 |     1254 | 2023-06-10 | Jake Bube         | L   | 0.666      | -            | -                | -                | -         |   -11.94 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           31 |     1367 | 2023-06-07 | Bad News Eagles   | L   | 0.647      | -            | -                | -                | -         |    -3.30 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           30 |     1395 | 2023-06-06 | beers             | W   | 0.641      | -            | -                | -                | -         |     3.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           29 |     1403 | 2023-06-06 | Let us cook       | L   | 0.639      | -            | -                | -                | -         |   -13.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           28 |     1433 | 2023-06-04 | Jake Bube         | W   | 0.628      | 0.299        | 0.020 (0.004)    | -                | -         |     8.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           27 |     1453 | 2023-06-04 | GTZ               | W   | 0.625      | 0.435        | 0.025 (0.007)    | 0.229 (0.062)    | -         |    11.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           26 |     1506 | 2023-06-02 | RUR               | W   | 0.613      | -            | -                | -                | -         |     1.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           25 |     1511 | 2023-06-02 | Websterz          | L   | 0.612      | -            | -                | -                | -         |    -7.04 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           24 |     1548 | 2023-06-01 | Sangal            | L   | 0.605      | -            | -                | -                | -         |   -11.26 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           23 |     1592 | 2023-05-31 | Question Mark     | L   | 0.598      | -            | -                | -                | -         |    -9.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           22 |     1665 | 2023-05-29 | Unluko5           | W   | 0.586      | -            | -                | -                | -         |     3.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           21 |     1739 | 2023-05-27 | PROSPECTS         | L   | 0.571      | -            | -                | -                | -         |    -6.47 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           20 |     1768 | 2023-05-26 | ex-Genk           | W   | 0.565      | -            | -                | -                | -         |     4.54 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           19 |     1790 | 2023-05-25 | MOUZ NXT          | L   | 0.560      | -            | -                | -                | -         |    -8.17 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           18 |     2095 | 2023-05-09 | sYnck             | L   | 0.451      | -            | -                | -                | -         |    -7.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           17 |     2134 | 2023-05-07 | Sampi             | L   | 0.438      | -            | -                | -                | -         |    -4.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           16 |     2299 | 2023-04-28 | LDLC              | L   | 0.380      | -            | -                | -                | -         |    -8.74 | aVN, brutmonster, fajkus, nEMANHA, simke  |
|           15 |     2329 | 2023-04-27 | Endpoint          | L   | 0.373      | -            | -                | -                | -         |    -5.35 | aVN, brutmonster, fajkus, nEMANHA, simke  |
|           14 |     2434 | 2023-04-22 | THE FREE          | W   | 0.339      | 0.435        | -                | 0.425 (0.063)    | -         |     3.81 | aVN, brutmonster, fajkus, nEMANHA, simke  |
|           13 |     2457 | 2023-04-20 | Websterz          | L   | 0.327      | -            | -                | -                | -         |    -4.46 | aVN, brutmonster, fajkus, nEMANHA, simke  |
|           12 |     2466 | 2023-04-20 | Looking4Org       | L   | 0.325      | -            | -                | -                | -         |    -4.20 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|           11 |     2507 | 2023-04-18 | ENCE Academy      | L   | 0.312      | -            | -                | -                | -         |    -4.94 | aVN, brutmonster, fajkus, nEMANHA, simke  |
|           10 |     2529 | 2023-04-17 | PROSPECTS         | L   | 0.306      | -            | -                | -                | -         |    -3.77 | aVN, brutmonster, fajkus, nEMANHA, simke  |
|            9 |     2608 | 2023-04-14 | Enterprise        | W   | 0.285      | -            | -                | -                | -         |     1.75 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|            8 |     2668 | 2023-04-12 | sYnck             | W   | 0.273      | 0.371        | 0.023 (0.002)    | -                | -         |     3.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|            7 |     2718 | 2023-04-11 | NAVI Youth        | W   | 0.264      | -            | -                | -                | -         |     1.60 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|            6 |     2788 | 2023-04-07 | Astralis Talent   | L   | 0.238      | -            | -                | -                | -         |    -2.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|            5 |     2859 | 2023-04-02 | undefined         | W   | 0.206      | -            | -                | -                | -         |     0.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|            4 |     2913 | 2023-03-30 | Insilio           | W   | 0.187      | -            | -                | -                | -         |     1.44 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|            3 |     2942 | 2023-03-29 | GHR               | L   | 0.181      | -            | -                | -                | -         |    -5.15 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|            2 |     2948 | 2023-03-29 | Into the Bin      | W   | 0.180      | -            | -                | -                | -         |     0.92 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |
|            1 |     2994 | 2023-03-28 | ENCE Academy      | L   | 0.171      | -            | -                | -                | -         |    -2.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,175.92)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-26 |      0.773 | $3,000.00      | $2,318.40       |
| 2023-06-25 |      0.767 | $3,000.00      | $2,301.11       |
| 2023-06-11 |      0.673 | $3,744.00      | $2,520.99       |
| 2023-06-10 |      0.666 | $4,416.00      | $2,942.87       |
| 2023-03-30 |      0.185 | $500.00        | $92.55          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
