### Roster Details<br />
Team Name: Aurora<br />
Roster: KENSI, Lack1, lattykk, Norwi, SELLTER<br />
Global Rank: [39](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [36]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1031.8<br />
<br />
Final Rank Value (1031.8) = Starting Rank Value (1151.0) + Head To Head Adjustments (-119.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.568[<sup>1</sup>](#table2)
- Bounty Collected: 0.451[<sup>2</sup>](#table1)
- Opponent Network: 0.358[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.990[<sup>2</sup>](#table1)

The average of these factors is 0.388<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1151.0
- 400 + ( ( 0.388 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1151.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           74 |       35 | 2023-08-27 | Bad News Eagles      | L   | 1.000      | -            | -                | -                | -         |   -14.24 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           73 |       63 | 2023-08-26 | 9 Pandas             | L   | 1.000      | -            | -                | -                | -         |   -18.83 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           72 |       90 | 2023-08-25 | BSMPEEK              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.70 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           71 |       96 | 2023-08-25 | RedPack              | L   | 1.000      | -            | -                | -                | -         |   -29.63 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           70 |       99 | 2023-08-25 | BSMPEEK              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.33 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           69 |      117 | 2023-08-24 | Virtus.pro           | L   | 1.000      | -            | -                | -                | -         |    -1.01 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           68 |      128 | 2023-08-24 | 9 Pandas             | W   | 1.000      | 0.435        | 0.074 (0.032)    | 1.000 (0.435)    | 1 (1.000) |    10.27 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           67 |      180 | 2023-08-21 | Eternal Fire         | L   | 1.000      | -            | -                | -                | -         |   -14.33 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           66 |      215 | 2023-08-18 | 500                  | L   | 1.000      | -            | -                | -                | -         |   -21.13 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           65 |      261 | 2023-08-16 | ARCRED               | W   | 1.000      | 0.435        | -                | 0.588 (0.256)    | 0 (0.000) |     4.63 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           64 |      270 | 2023-08-15 | 9 Pandas             | L   | 1.000      | -            | -                | -                | -         |   -22.27 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           63 |      293 | 2023-08-14 | EYEBALLERS           | L   | 1.000      | -            | -                | -                | -         |   -26.05 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           62 |      360 | 2023-08-12 | Ukraine              | W   | 1.000      | 0.435        | -                | 0.487 (0.212)    | 0 (0.000) |     3.67 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           61 |      460 | 2023-08-10 | Espionage            | L   | 1.000      | -            | -                | -                | -         |   -21.14 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           60 |      492 | 2023-08-09 | Virtus.pro           | L   | 1.000      | -            | -                | -                | -         |    -1.22 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           59 |      496 | 2023-08-09 | Virtus.pro           | L   | 1.000      | -            | -                | -                | -         |    -1.23 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           58 |      499 | 2023-08-08 | SAW                  | W   | 1.000      | 0.589        | 0.240 (0.141)    | 0.968 (0.570)    | 0 (0.000) |    17.29 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           57 |      515 | 2023-08-08 | MIBR                 | W   | 1.000      | 0.589        | 0.150 (0.088)    | 0.596 (0.351)    | 0 (0.000) |    10.43 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           56 |      526 | 2023-08-08 | Websterz             | W   | 1.000      | 0.435        | 0.044 (0.019)    | 0.489 (0.212)    | 0 (0.000) |     5.88 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           55 |      540 | 2023-08-07 | SINNERS              | W   | 1.000      | 0.589        | 0.069 (0.040)    | 1.000 (0.589)    | -         |    13.62 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           54 |      551 | 2023-08-06 | Into the Breach      | W   | 1.000      | 0.589        | 0.169 (0.100)    | 0.530 (0.312)    | -         |    15.06 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           53 |      562 | 2023-08-05 | OG                   | L   | 1.000      | -            | -                | -                | -         |   -18.14 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           52 |      609 | 2023-08-03 | EYEBALLERS           | W   | 1.000      | 0.589        | -                | 0.609 (0.359)    | -         |     5.54 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           51 |      614 | 2023-08-02 | Falcons              | W   | 1.000      | 0.384        | 0.055 (0.021)    | -                | -         |     3.74 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           50 |      696 | 2023-07-30 | Sashi                | W   | 0.998      | -            | -                | -                | -         |     1.12 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           49 |      974 | 2023-07-12 | 9INE                 | L   | 0.880      | -            | -                | -                | -         |   -12.01 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           48 |     1001 | 2023-07-11 | Sashi Mix            | W   | 0.875      | -            | -                | -                | -         |     0.94 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           47 |     1016 | 2023-07-11 | B8                   | W   | 0.874      | -            | -                | -                | -         |     4.48 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           46 |     1330 | 2023-06-08 | Endpoint             | W   | 0.654      | -            | -                | -                | -         |     6.26 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           45 |     1338 | 2023-06-08 | ex-Coalesce          | W   | 0.653      | -            | -                | -                | -         |     2.29 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           44 |     1393 | 2023-06-06 | SINNERS              | L   | 0.641      | -            | -                | -                | -         |   -13.72 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           43 |     1414 | 2023-06-05 | ARCRED               | W   | 0.634      | -            | -                | -                | -         |     3.40 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           42 |     1429 | 2023-06-04 | ex-Coalesce          | W   | 0.628      | -            | -                | -                | -         |     2.13 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           41 |     1463 | 2023-06-03 | The Prodigies        | W   | 0.621      | -            | -                | -                | -         |     1.82 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           40 |     1505 | 2023-06-02 | Websterz             | W   | 0.613      | -            | -                | -                | -         |     4.92 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           39 |     1568 | 2023-05-31 | MOUZ NXT             | L   | 0.601      | -            | -                | -                | -         |   -14.96 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           38 |     1583 | 2023-05-31 | 1WIN                 | L   | 0.599      | -            | -                | -                | -         |    -6.92 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           37 |     1607 | 2023-05-30 | ARCRED               | W   | 0.594      | -            | -                | -                | -         |     2.49 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           36 |     1623 | 2023-05-30 | FORZE                | W   | 0.592      | 0.548        | 0.364 (0.118)    | -                | -         |    11.88 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           35 |     1688 | 2023-05-28 | BIG                  | W   | 0.579      | 0.548        | 0.080 (0.025)    | -                | -         |     6.18 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           34 |     1710 | 2023-05-27 | MOUZ NXT             | W   | 0.574      | -            | -                | -                | -         |     3.61 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           33 |     1728 | 2023-05-27 | Endpoint             | L   | 0.572      | -            | -                | -                | -         |   -13.28 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           32 |     1800 | 2023-05-25 | Meta                 | W   | 0.559      | -            | -                | -                | -         |     1.85 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           31 |     1817 | 2023-05-24 | Into the Breach      | L   | 0.555      | -            | -                | -                | -         |    -6.45 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           30 |     1839 | 2023-05-24 | Astralis             | L   | 0.552      | -            | -                | -                | -         |    -0.73 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           29 |     1899 | 2023-05-22 | Anonymo              | W   | 0.541      | -            | -                | -                | -         |     3.24 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           28 |     1958 | 2023-05-18 | 9 Pandas             | W   | 0.512      | 0.548        | 0.074 (0.021)    | 1.000 (0.281)    | -         |     7.87 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           27 |     2130 | 2023-05-07 | Looking4Org          | L   | 0.440      | -            | -                | -                | -         |    -9.48 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           26 |     2177 | 2023-05-04 | Looking For Org      | L   | 0.420      | -            | -                | -                | -         |   -12.84 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           25 |     2184 | 2023-05-04 | BIG Academy          | W   | 0.419      | -            | -                | -                | -         |     1.36 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           24 |     2201 | 2023-05-03 | Fake Natty           | W   | 0.413      | -            | -                | -                | -         |     2.23 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           23 |     2599 | 2023-04-14 | FaZe                 | L   | 0.287      | -            | -                | -                | -         |    -0.65 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           22 |     2607 | 2023-04-14 | FORZE                | L   | 0.285      | -            | -                | -                | -         |    -3.18 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           21 |     2635 | 2023-04-13 | Eternal Fire         | W   | 0.279      | -            | -                | -                | 1 (0.279) |     2.50 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           20 |     2675 | 2023-04-12 | G2                   | L   | 0.271      | -            | -                | -                | -         |    -0.08 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           19 |     2702 | 2023-04-11 | Heroic               | L   | 0.266      | -            | -                | -                | -         |    -0.15 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           18 |     2713 | 2023-04-11 | Spirit               | W   | 0.265      | -            | -                | -                | 1 (0.265) |     0.67 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           17 |     2922 | 2023-03-30 | Spirit               | L   | 0.186      | -            | -                | -                | -         |    -1.15 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           16 |     2951 | 2023-03-29 | K23                  | W   | 0.180      | -            | -                | -                | -         |     0.40 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           15 |     3010 | 2023-03-27 | Apeks                | L   | 0.168      | -            | -                | -                | -         |    -1.35 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           14 |     3467 | 2023-03-13 | ex-Copenhagen Flames | W   | 0.071      | -            | -                | -                | -         |     0.29 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           13 |     3488 | 2023-03-12 | VOYVODA              | L   | 0.067      | -            | -                | -                | -         |    -2.04 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           12 |     3538 | 2023-03-10 | ex-DomiNation        | W   | 0.054      | -            | -                | -                | -         |     0.12 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           11 |     3548 | 2023-03-10 | Cloud9               | L   | 0.054      | -            | -                | -                | -         |    -0.12 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|           10 |     3551 | 2023-03-10 | Monte                | W   | 0.053      | -            | -                | -                | -         |     1.40 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            9 |     3573 | 2023-03-09 | FORZE                | L   | 0.048      | -            | -                | -                | -         |    -0.58 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            8 |     3582 | 2023-03-09 | 1WIN                 | W   | 0.047      | -            | -                | -                | -         |     0.91 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            7 |     3609 | 2023-03-08 | ECSTATIC             | L   | 0.041      | -            | -                | -                | -         |    -0.90 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            6 |     3621 | 2023-03-08 | Apeks                | W   | 0.040      | -            | -                | -                | -         |     0.94 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            5 |     3635 | 2023-03-07 | Bad News Eagles      | W   | 0.034      | -            | -                | -                | -         |     0.56 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            4 |     3643 | 2023-03-07 | 9INE                 | W   | 0.033      | -            | -                | -                | -         |     0.55 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            3 |     3660 | 2023-03-06 | 500                  | W   | 0.028      | -            | -                | -                | -         |     0.22 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            2 |     3662 | 2023-03-06 | 1WIN                 | W   | 0.027      | -            | -                | -                | -         |     0.53 | KENSI, Lack1, lattykk, Norwi, SELLTER |
|            1 |     3723 | 2023-03-04 | Monte                | W   | 0.013      | -            | -                | -                | -         |     0.34 | KENSI, Lack1, lattykk, Norwi, SELLTER |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,193.78)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-10 |      1.000 | $25,000.00     | $25,000.00      |
| 2023-06-07 |      0.648 | $3,000.00      | $1,944.13       |
| 2023-05-31 |      0.599 | $30,000.00     | $17,984.32      |
| 2023-05-25 |      0.561 | $2,000.00      | $1,121.61       |
| 2023-03-31 |      0.194 | $2,000.00      | $387.91         |
| 2023-03-07 |      0.034 | $22,000.00     | $755.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
