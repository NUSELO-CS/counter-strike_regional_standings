### Roster Details<br />
Team Name: ECSTATIC<br />
Roster: kraghen, Nodios, Patti, Queenix, salazar<br />
Global Rank: [36](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [33]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1042.2<br />
<br />
Final Rank Value (1042.2) = Starting Rank Value (1002.5) + Head To Head Adjustments (39.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.404[<sup>2</sup>](#table1)
- Opponent Network: 0.168[<sup>2</sup>](#table1)
- LAN Wins: 0.164[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.478[<sup>2</sup>](#table1)

The average of these factors is 0.312<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1002.5
- 400 + ( ( 0.312 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1002.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      160 | 2023-08-22 | 00NATION             | L   | 1.000      | -            | -                | -                | -         |   -19.64 | kraghen, Nodios, Patti, Queenix, salazar |
|           44 |      366 | 2023-08-12 | ORKS                 | W   | 1.000      | 0.435        | -                | 0.228 (0.099)    | 0 (0.000) |     4.66 | kraghen, Nodios, Patti, Queenix, salazar |
|           43 |      411 | 2023-08-11 | 9 Pandas             | W   | 1.000      | 0.435        | 0.074 (0.032)    | 1.000 (0.435)    | 0 (0.000) |    13.17 | kraghen, Nodios, Patti, Queenix, salazar |
|           42 |      490 | 2023-08-09 | ENCE Academy         | W   | 1.000      | 0.435        | -                | 0.580 (0.252)    | 0 (0.000) |     6.80 | kraghen, Nodios, Patti, Queenix, salazar |
|           41 |     1252 | 2023-06-10 | 9z                   | L   | 0.667      | -            | -                | -                | -         |    -8.74 | kraghen, maNkz, Nodios, Queenix, salazar |
|           40 |     1286 | 2023-06-09 | paiN                 | W   | 0.661      | 0.500        | 0.085 (0.028)    | 0.404 (0.133)    | 1 (0.661) |     8.72 | kraghen, maNkz, Nodios, Queenix, salazar |
|           39 |     1303 | 2023-06-09 | FORZE                | L   | 0.659      | -            | -                | -                | -         |    -5.02 | kraghen, maNkz, Nodios, Queenix, salazar |
|           38 |     1527 | 2023-06-01 | PROSPECTS            | L   | 0.608      | -            | -                | -                | -         |   -12.06 | kraghen, maNkz, Nodios, Queenix, salazar |
|           37 |     1609 | 2023-05-30 | FORZE                | L   | 0.594      | -            | -                | -                | -         |    -4.97 | kraghen, maNkz, Nodios, Queenix, salazar |
|           36 |     1624 | 2023-05-30 | L&G                  | W   | 0.592      | -            | -                | -                | 0 (0.000) |     1.11 | kraghen, maNkz, Nodios, Queenix, salazar |
|           35 |     1641 | 2023-05-29 | FORZE                | W   | 0.588      | 0.589        | 0.364 (0.126)    | 0.409 (0.142)    | 0 (0.000) |    14.02 | kraghen, maNkz, Nodios, Queenix, salazar |
|           34 |     1675 | 2023-05-28 | Sharks               | W   | 0.581      | 0.589        | 0.117 (0.040)    | 0.718 (0.246)    | 0 (0.000) |     7.53 | kraghen, maNkz, Nodios, Queenix, salazar |
|           33 |     1746 | 2023-05-26 | BIG                  | W   | 0.568      | 0.589        | 0.080 (0.027)    | 0.312 (0.104)    | 0 (0.000) |     8.28 | kraghen, maNkz, Nodios, Queenix, salazar |
|           32 |     1849 | 2023-05-24 | Movistar Riders      | W   | 0.552      | 0.589        | 0.089 (0.029)    | 0.249 (0.081)    | -         |     6.86 | kraghen, maNkz, Nodios, Queenix, salazar |
|           31 |     1900 | 2023-05-22 | BIG                  | W   | 0.541      | 0.143        | 0.080 (0.006)    | -                | -         |     8.38 | kraghen, maNkz, Nodios, Queenix, salazar |
|           30 |     1919 | 2023-05-21 | GODSENT              | W   | 0.533      | -            | -                | -                | -         |     3.22 | kraghen, maNkz, Nodios, Queenix, salazar |
|           29 |     1929 | 2023-05-20 | HOTU                 | W   | 0.526      | -            | -                | -                | -         |     4.50 | kraghen, maNkz, Nodios, Queenix, salazar |
|           28 |     1934 | 2023-05-20 | Movistar Riders      | W   | 0.525      | 0.143        | 0.089 (0.007)    | -                | -         |     7.40 | kraghen, maNkz, Nodios, Queenix, salazar |
|           27 |     2169 | 2023-05-04 | HOTU                 | L   | 0.421      | -            | -                | -                | -         |    -9.95 | kraghen, maNkz, Nodios, Queenix, salazar |
|           26 |     2181 | 2023-05-04 | Space                | W   | 0.420      | -            | -                | -                | -         |     6.27 | kraghen, maNkz, Nodios, Queenix, salazar |
|           25 |     2259 | 2023-04-29 | Movistar Riders      | L   | 0.390      | -            | -                | -                | -         |    -6.81 | kraghen, maNkz, Nodios, Queenix, salazar |
|           24 |     2281 | 2023-04-29 | Complexity           | W   | 0.385      | 0.500        | 0.120 (0.023)    | -                | 1 (0.385) |     8.04 | kraghen, maNkz, Nodios, Queenix, salazar |
|           23 |     2286 | 2023-04-28 | Evil Geniuses        | W   | 0.383      | 0.500        | 0.077 (0.015)    | 0.580 (0.111)    | 1 (0.383) |     4.01 | kraghen, maNkz, Nodios, Queenix, salazar |
|           22 |     2317 | 2023-04-27 | Complexity           | L   | 0.376      | -            | -                | -                | -         |    -3.85 | kraghen, maNkz, Nodios, Queenix, salazar |
|           21 |     2926 | 2023-03-30 | Monte                | L   | 0.185      | -            | -                | -                | -         |    -0.45 | kraghen, maNkz, Nodios, Queenix, salazar |
|           20 |     2996 | 2023-03-28 | 500                  | W   | 0.171      | 0.435        | -                | 1.000 (0.074)    | -         |     2.35 | kraghen, maNkz, Nodios, Queenix, salazar |
|           19 |     3069 | 2023-03-25 | BIG Academy          | W   | 0.153      | -            | -                | -                | -         |     0.88 | kraghen, maNkz, Nodios, Queenix, salazar |
|           18 |     3089 | 2023-03-24 | ex-Partizan          | L   | 0.148      | -            | -                | -                | -         |    -4.04 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|           17 |     3122 | 2023-03-23 | BIG Academy          | L   | 0.141      | -            | -                | -                | -         |    -3.68 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|           16 |     3145 | 2023-03-23 | Illuminar            | W   | 0.140      | -            | -                | -                | -         |     0.44 | kraghen, maNkz, Nodios, Queenix, salazar |
|           15 |     3251 | 2023-03-20 | THE FREE             | W   | 0.118      | -            | -                | -                | -         |     0.95 | kraghen, maNkz, Nodios, Queenix, salazar |
|           14 |     3266 | 2023-03-19 | ex-Copenhagen Flames | L   | 0.114      | -            | -                | -                | -         |    -2.68 | kraghen, maNkz, Nodios, Queenix, salazar |
|           13 |     3269 | 2023-03-19 | HAVU                 | W   | 0.113      | -            | -                | -                | -         |     1.53 | kraghen, maNkz, Nodios, Queenix, salazar |
|           12 |     3297 | 2023-03-18 | ex-Copenhagen Flames | W   | 0.106      | -            | -                | -                | -         |     0.85 | kraghen, maNkz, Nodios, Queenix, salazar |
|           11 |     3298 | 2023-03-18 | EYEBALLERS           | W   | 0.106      | -            | -                | -                | -         |     1.08 | kraghen, maNkz, Nodios, Queenix, salazar |
|           10 |     3304 | 2023-03-18 | Endpoint             | L   | 0.105      | -            | -                | -                | -         |    -2.01 | kraghen, maNkz, Nodios, Queenix, salazar |
|            9 |     3463 | 2023-03-13 | GamerLegion          | L   | 0.072      | -            | -                | -                | -         |    -0.09 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|            8 |     3535 | 2023-03-10 | Anonymo              | W   | 0.055      | -            | -                | -                | -         |     0.58 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|            7 |     3552 | 2023-03-10 | FORZE                | W   | 0.053      | -            | -                | -                | -         |     1.32 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|            6 |     3575 | 2023-03-09 | Anonymo              | L   | 0.048      | -            | -                | -                | -         |    -1.00 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|            5 |     3609 | 2023-03-08 | Aurora               | W   | 0.041      | -            | -                | -                | -         |     0.90 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|            4 |     3620 | 2023-03-08 | Sprout               | W   | 0.040      | -            | -                | -                | -         |     0.40 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|            3 |     3624 | 2023-03-08 | MOUZ NXT             | W   | 0.039      | -            | -                | -                | -         |     0.41 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|            2 |     3669 | 2023-03-06 | THE FREE             | W   | 0.026      | -            | -                | -                | -         |     0.21 | Cabbi, kraghen, maNkz, Queenix, salazar  |
|            1 |     3727 | 2023-03-04 | HAVU                 | L   | 0.013      | -            | -                | -                | -         |    -0.23 | Cabbi, kraghen, maNkz, Queenix, salazar  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,078.35)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-11 |      0.674 | $3,000.00      | $2,021.79       |
| 2023-05-30 |      0.594 | $40,000.00     | $23,760.73      |
| 2023-04-30 |      0.391 | $10,000.00     | $3,907.92       |
| 2023-03-31 |      0.194 | $2,000.00      | $387.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
