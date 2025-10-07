### Roster Details<br />
Team Name: EYEBALLERS<br />
Roster: HEAP, JW, Peppzor, Sapec, SHiNE<br />
Global Rank: [93](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [69]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  836.7<br />
<br />
Final Rank Value (836.7) = Starting Rank Value (874.8) + Head To Head Adjustments (-38.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.233[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.609[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 874.8
- 400 + ( ( 0.245 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 874.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |      163 | 2023-08-22 | OG                   | L   | 1.000      | -            | -                | -                | -         |    -7.74 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           61 |      222 | 2023-08-18 | Sampi                | L   | 1.000      | -            | -                | -                | -         |   -13.30 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           60 |      259 | 2023-08-16 | 9 Pandas             | L   | 1.000      | -            | -                | -                | -         |   -11.09 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           59 |      272 | 2023-08-15 | los kogutos          | L   | 1.000      | -            | -                | -                | -         |   -14.61 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           58 |      293 | 2023-08-14 | Aurora               | W   | 1.000      | 0.435        | 0.173 (0.075)    | 0.990 (0.430)    | 0 (0.000) |    26.05 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           57 |      317 | 2023-08-13 | Sampi                | W   | 1.000      | 0.435        | 0.087 (0.038)    | 1.000 (0.435)    | 0 (0.000) |    20.16 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           56 |      354 | 2023-08-12 | Virtus.pro           | L   | 1.000      | -            | -                | -                | -         |    -0.21 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           55 |      498 | 2023-08-09 | 9 Pandas             | L   | 1.000      | -            | -                | -                | -         |    -7.48 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           54 |      503 | 2023-08-08 | Endpoint             | L   | 1.000      | -            | -                | -                | -         |   -10.88 | HEAP, JW, Peppzor, Sapec, SHiNE   |
|           53 |      553 | 2023-08-06 | Romania              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.73 | flusha, JW, Sapec, SHiNE, slap    |
|           52 |      580 | 2023-08-04 | SAW                  | L   | 1.000      | -            | -                | -                | -         |    -4.07 | flusha, JW, Peppzor, Sapec, SHiNE |
|           51 |      588 | 2023-08-04 | MOUZ NXT             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.31 | flusha, JW, Peppzor, Sapec, SHiNE |
|           50 |      594 | 2023-08-03 | Eternal Fire         | L   | 1.000      | -            | -                | -                | -         |    -6.96 | flusha, JW, Peppzor, Sapec, SHiNE |
|           49 |      609 | 2023-08-03 | Aurora               | L   | 1.000      | -            | -                | -                | -         |    -5.54 | flusha, JW, Peppzor, Sapec, SHiNE |
|           48 |      625 | 2023-08-02 | B8                   | L   | 1.000      | -            | -                | -                | -         |   -18.92 | flusha, JW, Peppzor, Sapec, SHiNE |
|           47 |      640 | 2023-08-01 | Sangal               | L   | 1.000      | -            | -                | -                | -         |   -20.20 | flusha, JW, Peppzor, Sapec, SHiNE |
|           46 |      731 | 2023-07-27 | ThunderFlash         | W   | 0.980      | 0.384        | -                | 0.724 (0.273)    | 0 (0.000) |    16.09 | flusha, JW, Peppzor, Sapec, SHiNE |
|           45 |     1265 | 2023-06-10 | ex-Copenhagen Flames | L   | 0.665      | -            | -                | -                | -         |   -10.83 | flusha, JW, Peppzor, Sapec, SHiNE |
|           44 |     1320 | 2023-06-08 | 500                  | L   | 0.655      | -            | -                | -                | -         |    -7.76 | flusha, JW, Peppzor, Sapec, SHiNE |
|           43 |     1341 | 2023-06-08 | Monte                | W   | 0.653      | 0.384        | 0.318 (0.080)    | 1.000 (0.251)    | 0 (0.000) |    19.48 | flusha, JW, Peppzor, Sapec, SHiNE |
|           42 |     1401 | 2023-06-06 | JANO                 | W   | 0.639      | 0.384        | -                | 0.427 (0.105)    | 0 (0.000) |     6.84 | flusha, JW, Peppzor, Sapec, SHiNE |
|           41 |     1447 | 2023-06-04 | Illuminar            | L   | 0.626      | -            | -                | -                | -         |   -13.19 | flusha, JW, Peppzor, Sapec, SHiNE |
|           40 |     1474 | 2023-06-03 | Nexus                | L   | 0.619      | -            | -                | -                | -         |   -15.18 | flusha, JW, Peppzor, Sapec, SHiNE |
|           39 |     1547 | 2023-06-01 | Looking4Org          | W   | 0.605      | 0.384        | 0.065 (0.015)    | 0.882 (0.205)    | 0 (0.000) |    12.46 | flusha, JW, Peppzor, Sapec, SHiNE |
|           38 |     1563 | 2023-05-31 | ENCE Academy         | W   | 0.601      | 0.435        | 0.014 (0.004)    | 0.580 (0.152)    | 0 (0.000) |     8.86 | flusha, JW, Peppzor, Sapec, SHiNE |
|           37 |     1590 | 2023-05-31 | ex-Copenhagen Flames | L   | 0.598      | -            | -                | -                | -         |   -10.49 | flusha, JW, Peppzor, Sapec, SHiNE |
|           36 |     1617 | 2023-05-30 | PORTUGAL             | L   | 0.593      | -            | -                | -                | -         |   -16.02 | flusha, JW, Peppzor, Sapec, SHiNE |
|           35 |     1823 | 2023-05-24 | SAW                  | L   | 0.554      | -            | -                | -                | -         |    -2.73 | flusha, JW, Peppzor, Sapec, SHiNE |
|           34 |     1848 | 2023-05-24 | OG                   | L   | 0.552      | -            | -                | -                | -         |    -3.81 | flusha, JW, Peppzor, Sapec, SHiNE |
|           33 |     1868 | 2023-05-23 | K23                  | W   | 0.547      | -            | -                | -                | 0 (0.000) |     3.39 | flusha, JW, Peppzor, Sapec, SHiNE |
|           32 |     1880 | 2023-05-23 | Ignis Serpens        | W   | 0.546      | 0.384        | 0.030 (0.006)    | -                | -         |     4.72 | flusha, JW, Peppzor, Sapec, SHiNE |
|           31 |     1910 | 2023-05-22 | ALTERNATE aTTaX      | W   | 0.539      | 0.435        | 0.046 (0.011)    | 0.884 (0.207)    | -         |    10.39 | flusha, JW, Peppzor, Sapec, SHiNE |
|           30 |     2050 | 2023-05-12 | Monte                | L   | 0.474      | -            | -                | -                | -         |    -0.67 | flusha, JW, Peppzor, Sapec, SHiNE |
|           29 |     2188 | 2023-05-04 | ENCE Academy         | W   | 0.419      | -            | -                | -                | -         |     6.66 | flusha, JW, Peppzor, Sapec, SHiNE |
|           28 |     2202 | 2023-05-03 | HAVU                 | L   | 0.412      | -            | -                | -                | -         |    -5.35 | flusha, JW, Peppzor, Sapec, SHiNE |
|           27 |     2208 | 2023-05-02 | ex-iNation           | W   | 0.408      | -            | -                | -                | -         |     2.91 | flusha, JW, Peppzor, Sapec, SHiNE |
|           26 |     2279 | 2023-04-29 | Looking4Org          | L   | 0.386      | -            | -                | -                | -         |    -4.90 | flusha, JW, Peppzor, Sapec, SHiNE |
|           25 |     2310 | 2023-04-28 | Evil Geniuses        | W   | 0.378      | -            | -                | -                | -         |     2.88 | flusha, JW, Peppzor, Sapec, SHiNE |
|           24 |     2377 | 2023-04-25 | Endpoint             | W   | 0.360      | 0.435        | 0.046 (0.007)    | 0.790 (0.124)    | -         |     6.20 | flusha, JW, Peppzor, Sapec, SHiNE |
|           23 |     2406 | 2023-04-24 | HAVU                 | L   | 0.352      | -            | -                | -                | -         |    -4.61 | flusha, JW, Peppzor, Sapec, SHiNE |
|           22 |     2411 | 2023-04-23 | LDLC                 | W   | 0.348      | -            | -                | -                | -         |     2.80 | flusha, JW, Peppzor, Sapec, SHiNE |
|           21 |     2427 | 2023-04-22 | Sampi                | W   | 0.341      | 0.435        | 0.087 (0.013)    | 1.000 (0.148)    | -         |     6.89 | flusha, JW, Peppzor, Sapec, SHiNE |
|           20 |     2448 | 2023-04-21 | THE FREE             | W   | 0.333      | -            | -                | -                | -         |     3.91 | flusha, JW, Peppzor, Sapec, SHiNE |
|           19 |     2468 | 2023-04-20 | Illuminar            | W   | 0.325      | -            | -                | -                | -         |     3.08 | flusha, JW, Peppzor, Sapec, SHiNE |
|           18 |     2488 | 2023-04-19 | ex-Partizan          | W   | 0.319      | -            | -                | -                | -         |     2.45 | flusha, JW, Peppzor, Sapec, SHiNE |
|           17 |     2498 | 2023-04-18 | Movistar Riders      | W   | 0.314      | 0.435        | 0.089 (0.012)    | -                | -         |     6.14 | flusha, JW, Peppzor, Sapec, SHiNE |
|           16 |     2509 | 2023-04-18 | BIG Academy          | W   | 0.312      | -            | -                | -                | -         |     3.53 | flusha, JW, Peppzor, Sapec, SHiNE |
|           15 |     2814 | 2023-04-06 | LDLC                 | L   | 0.233      | -            | -                | -                | -         |    -5.41 | flusha, JW, Peppzor, Sapec, SHiNE |
|           14 |     2924 | 2023-03-30 | ex-iNation           | W   | 0.186      | -            | -                | -                | -         |     1.48 | flusha, JW, Peppzor, Sapec, SHiNE |
|           13 |     3124 | 2023-03-23 | SAW                  | L   | 0.141      | -            | -                | -                | -         |    -0.57 | flusha, JW, Peppzor, Sapec, SHiNE |
|           12 |     3202 | 2023-03-21 | Let us cook          | W   | 0.128      | -            | -                | -                | -         |     1.23 | flusha, JW, Peppzor, Sapec, SHiNE |
|           11 |     3238 | 2023-03-20 | Apeks                | L   | 0.121      | -            | -                | -                | -         |    -0.25 | flusha, JW, Peppzor, Sapec, SHiNE |
|           10 |     3246 | 2023-03-20 | Enterprise           | W   | 0.119      | -            | -                | -                | -         |     0.84 | flusha, JW, Peppzor, Sapec, SHiNE |
|            9 |     3293 | 2023-03-18 | Prosapia             | L   | 0.106      | -            | -                | -                | -         |    -3.00 | flusha, JW, Peppzor, Sapec, SHiNE |
|            8 |     3298 | 2023-03-18 | ECSTATIC             | L   | 0.106      | -            | -                | -                | -         |    -1.08 | flusha, JW, Peppzor, Sapec, SHiNE |
|            7 |     3322 | 2023-03-17 | JANO                 | W   | 0.101      | -            | -                | -                | -         |     1.31 | flusha, JW, Peppzor, Sapec, SHiNE |
|            6 |     3414 | 2023-03-15 | undefined            | W   | 0.086      | -            | -                | -                | -         |     0.31 | flusha, JW, Peppzor, Sapec, SHiNE |
|            5 |     3448 | 2023-03-13 | Nexus                | L   | 0.075      | -            | -                | -                | -         |    -1.94 | flusha, JW, Peppzor, Sapec, SHiNE |
|            4 |     3499 | 2023-03-12 | los kogutos          | L   | 0.065      | -            | -                | -                | -         |    -0.84 | flusha, JW, Peppzor, Sapec, SHiNE |
|            3 |     3593 | 2023-03-09 | ex-BLUEJAYS          | W   | 0.045      | -            | -                | -                | -         |     0.13 | flusha, JW, Peppzor, Sapec, SHiNE |
|            2 |     3645 | 2023-03-07 | HAVU                 | L   | 0.033      | -            | -                | -                | -         |    -0.41 | flusha, JW, Peppzor, Sapec, SHiNE |
|            1 |     3699 | 2023-03-05 | Anonymo              | L   | 0.019      | -            | -                | -                | -         |    -0.29 | flusha, JW, Peppzor, Sapec, SHiNE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,708.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-10 |      0.667 | $1,500.00      | $1,001.16       |
| 2023-05-28 |      0.581 | $1,250.00      | $725.74         |
| 2023-05-25 |      0.561 | $2,000.00      | $1,121.61       |
| 2023-05-04 |      0.420 | $2,000.00      | $839.32         |
| 2023-04-30 |      0.395 | $2,000.00      | $789.63         |
| 2023-03-26 |      0.160 | $1,250.00      | $199.98         |
| 2023-03-11 |      0.061 | $500.00        | $30.56          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
