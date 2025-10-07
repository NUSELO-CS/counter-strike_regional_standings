### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, KalubeR, niki1, Patrick, REDSTAR<br />
Global Rank: [55](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [45]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  958.9<br />
<br />
Final Rank Value (958.9) = Starting Rank Value (955.7) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.471[<sup>1</sup>](#table2)
- Bounty Collected: 0.397[<sup>2</sup>](#table1)
- Opponent Network: 0.250[<sup>2</sup>](#table1)
- LAN Wins: 0.031[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.287<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 955.7
- 400 + ( ( 0.287 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 955.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |       54 | 2023-08-26 | Into the Breach      | L   | 1.000      | -            | -                | -                | -         |   -11.43 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           64 |       67 | 2023-08-26 | Pompa                | L   | 1.000      | -            | -                | -                | -         |   -16.91 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           63 |      193 | 2023-08-20 | Sampi                | L   | 1.000      | -            | -                | -                | -         |   -18.25 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           62 |      207 | 2023-08-19 | Question Mark        | W   | 1.000      | 0.435        | 0.032 (0.014)    | 0.689 (0.300)    | 0 (0.000) |    14.46 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           61 |      215 | 2023-08-18 | Aurora               | W   | 1.000      | 0.435        | 0.173 (0.075)    | 0.990 (0.430)    | 0 (0.000) |    21.13 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           60 |      296 | 2023-08-14 | Insilio              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.26 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           59 |      377 | 2023-08-12 | ThunderFlash         | W   | 1.000      | 0.435        | -                | 0.724 (0.315)    | 0 (0.000) |    11.53 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           58 |      398 | 2023-08-11 | MOUZ                 | L   | 1.000      | -            | -                | -                | -         |    -1.86 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           57 |      439 | 2023-08-10 | BetBoom              | L   | 1.000      | -            | -                | -                | -         |   -26.30 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           56 |      445 | 2023-08-10 | THE FREE             | L   | 1.000      | -            | -                | -                | -         |   -25.52 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           55 |      456 | 2023-08-10 | The Prodigies        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.03 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           54 |      502 | 2023-08-08 | FURIA                | W   | 1.000      | 0.384        | 0.108 (0.042)    | -                | 0 (0.000) |    12.04 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           53 |      539 | 2023-08-07 | NAVI Youth           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.08 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           52 |      545 | 2023-08-06 | ALTERNATE aTTaX      | L   | 1.000      | -            | -                | -                | -         |   -15.84 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           51 |      578 | 2023-08-04 | Sampi                | L   | 1.000      | -            | -                | -                | -         |   -16.44 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           50 |      593 | 2023-08-03 | SINNERS              | L   | 1.000      | -            | -                | -                | -         |   -14.91 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           49 |      608 | 2023-08-03 | Endpoint             | W   | 1.000      | 0.384        | 0.046 (0.018)    | 0.790 (0.304)    | 0 (0.000) |    13.23 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           48 |      659 | 2023-07-31 | Nemiga               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.50 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           47 |      726 | 2023-07-28 | JANO                 | W   | 0.986      | 0.384        | -                | 0.427 (0.162)    | -         |     5.66 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           46 |     1003 | 2023-07-11 | Looking4Org          | L   | 0.875      | -            | -                | -                | -         |   -13.41 | dennyslaw, KalubeR, niki1, Patrick, REDSTAR   |
|           45 |     1054 | 2023-07-02 | Katuna               | W   | 0.815      | -            | -                | -                | -         |     4.80 | dennyslaw, Grashog, niki1, Patrick, REDSTAR   |
|           44 |     1063 | 2023-07-01 | ECLOT                | W   | 0.807      | 0.354        | 0.114 (0.032)    | 0.710 (0.203)    | -         |    13.41 | dennyslaw, Grashog, niki1, Patrick, REDSTAR   |
|           43 |     1066 | 2023-06-29 | Ukraine              | W   | 0.794      | 0.354        | -                | 0.487 (0.137)    | -         |     6.79 | dennyslaw, Grashog, niki1, Patrick, REDSTAR   |
|           42 |     1068 | 2023-06-29 | SINNERS Academy      | W   | 0.793      | -            | -                | -                | -         |     1.46 | dennyslaw, Grashog, niki1, Patrick, REDSTAR   |
|           41 |     1230 | 2023-06-11 | SAW                  | L   | 0.672      | -            | -                | -                | -         |    -5.18 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           40 |     1261 | 2023-06-10 | 9INE                 | W   | 0.666      | 0.435        | 0.265 (0.077)    | 0.734 (0.212)    | -         |    15.11 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           39 |     1290 | 2023-06-09 | 9 Pandas             | L   | 0.660      | -            | -                | -                | -         |    -7.79 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           38 |     1298 | 2023-06-09 | MOUZ                 | L   | 0.659      | -            | -                | -                | -         |    -1.63 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           37 |     1320 | 2023-06-08 | EYEBALLERS           | W   | 0.655      | 0.435        | -                | 0.609 (0.173)    | -         |     7.76 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           36 |     1339 | 2023-06-08 | ex-Copenhagen Flames | W   | 0.653      | -            | -                | -                | -         |     7.08 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           35 |     1373 | 2023-06-07 | HAVU                 | W   | 0.646      | -            | -                | -                | -         |     8.93 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           34 |     1423 | 2023-06-05 | MASONIC              | W   | 0.632      | -            | -                | -                | -         |     8.12 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           33 |     1501 | 2023-06-02 | 9 Pandas             | W   | 0.613      | 0.435        | 0.074 (0.020)    | 1.000 (0.267)    | -         |    13.49 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           32 |     1587 | 2023-05-31 | THE FREE             | W   | 0.599      | -            | -                | -                | -         |     4.71 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           31 |     1625 | 2023-05-30 | Sangal               | W   | 0.592      | -            | -                | -                | -         |     5.32 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           30 |     1666 | 2023-05-29 | MOUZ NXT             | L   | 0.586      | -            | -                | -                | -         |   -10.90 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           29 |     1815 | 2023-05-24 | Endpoint             | L   | 0.555      | -            | -                | -                | -         |    -8.78 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           28 |     1889 | 2023-05-23 | JANO                 | W   | 0.545      | -            | -                | -                | -         |     5.36 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           27 |     1905 | 2023-05-22 | Websterz             | W   | 0.540      | 0.435        | 0.044 (0.010)    | -                | -         |     8.21 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           26 |     1961 | 2023-05-18 | fnatic               | L   | 0.511      | -            | -                | -                | -         |    -2.19 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           25 |     1968 | 2023-05-17 | Anonymo              | W   | 0.508      | -            | -                | -                | -         |     7.04 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           24 |     1972 | 2023-05-17 | PROSPECTS            | W   | 0.508      | -            | -                | -                | -         |     8.83 | dennyslaw, niki1, Patrick, Rainwaker, REDSTAR |
|           23 |     2204 | 2023-05-03 | ex-iNation           | W   | 0.412      | -            | -                | -                | -         |     2.48 | dennyslaw, Grashog, niki1, Patrick, Rainwaker |
|           22 |     2233 | 2023-05-01 | ex-Coalesce          | L   | 0.400      | -            | -                | -                | -         |    -9.42 | dennyslaw, Grashog, niki1, Patrick, Rainwaker |
|           21 |     2306 | 2023-04-28 | Looking4Org          | L   | 0.379      | -            | -                | -                | -         |    -5.66 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           20 |     2382 | 2023-04-25 | ECLOT                | L   | 0.359      | -            | -                | -                | -         |    -2.88 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           19 |     2633 | 2023-04-13 | ENCE                 | L   | 0.279      | -            | -                | -                | -         |    -0.03 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           18 |     2674 | 2023-04-12 | BIG                  | L   | 0.271      | -            | -                | -                | -         |    -4.04 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           17 |     2697 | 2023-04-11 | Spirit               | W   | 0.267      | -            | -                | -                | 1 (0.267) |     1.78 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           16 |     2716 | 2023-04-11 | Heroic               | L   | 0.264      | -            | -                | -                | -         |    -0.05 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           15 |     2976 | 2023-03-28 | GODSENT              | L   | 0.174      | -            | -                | -                | -         |    -4.23 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           14 |     2984 | 2023-03-28 | 9INE                 | W   | 0.173      | 0.143        | 0.265 (0.007)    | -                | -         |     4.18 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           13 |     2996 | 2023-03-28 | ECSTATIC             | L   | 0.171      | -            | -                | -                | -         |    -2.35 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           12 |     3035 | 2023-03-26 | ex-Partizan          | L   | 0.160      | -            | -                | -                | -         |    -4.20 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           11 |     3061 | 2023-03-25 | Insilio              | W   | 0.154      | -            | -                | -                | -         |     0.92 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|           10 |     3091 | 2023-03-24 | Spirit               | L   | 0.147      | -            | -                | -                | -         |    -0.35 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|            9 |     3125 | 2023-03-23 | THE FREE             | W   | 0.141      | -            | -                | -                | -         |     1.37 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|            8 |     3242 | 2023-03-20 | Endpoint             | L   | 0.120      | -            | -                | -                | -         |    -2.04 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|            7 |     3369 | 2023-03-16 | Astralis Talent      | L   | 0.094      | -            | -                | -                | -         |    -1.20 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|            6 |     3417 | 2023-03-15 | 9INE                 | W   | 0.085      | 0.435        | 0.265 (0.010)    | -                | -         |     2.05 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|            5 |     3423 | 2023-03-14 | FORZE                | L   | 0.081      | -            | -                | -                | -         |    -0.45 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|            4 |     3454 | 2023-03-13 | VOYVODA              | W   | 0.074      | -            | -                | -                | -         |     0.18 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|            3 |     3457 | 2023-03-13 | Sprout               | W   | 0.073      | -            | -                | -                | -         |     0.87 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|            2 |     3660 | 2023-03-06 | Aurora               | L   | 0.028      | -            | -                | -                | -         |    -0.22 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |
|            1 |     3689 | 2023-03-05 | Into the Breach      | W   | 0.020      | -            | -                | -                | -         |     0.51 | dennyslaw, niki1, Patrick, Rainwaker, SHiPZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,548.16)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $2,000.00      | $2,000.00       |
| 2023-08-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-07-02 |      0.815 | $8,000.00      | $6,517.47       |
| 2023-06-11 |      0.673 | $5,000.00      | $3,365.19       |
| 2023-06-10 |      0.668 | $2,000.00      | $1,335.13       |
| 2023-06-10 |      0.667 | $1,000.00      | $667.44         |
| 2023-05-25 |      0.561 | $2,000.00      | $1,121.61       |
| 2023-03-16 |      0.095 | $5,000.00      | $472.62         |
| 2023-03-07 |      0.034 | $2,000.00      | $68.71          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
