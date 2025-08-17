### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, makazze, w0nderful<br />
Global Rank: [5](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [4]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  1790.0<br />
<br />
Final Rank Value (1790.0) = Starting Rank Value (1799.0) + Head To Head Adjustments (-8.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.820[<sup>1</sup>](#table2)
- Bounty Collected: 0.694[<sup>2</sup>](#table1)
- Opponent Network: 0.413[<sup>2</sup>](#table1)
- LAN Wins: 0.938[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.425[<sup>2</sup>](#table1)

The average of these factors is 0.716<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1799.0
- 400 + ( ( 0.716 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1799.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |       66 | 2025-08-09 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -18.16 | Aleksib, b1t, iM, makazze, w0nderful |
|           30 |       99 | 2025-08-06 | TEAM NEXT LEVEL   | W   | 1.000      | -            | -                | -                | -         |     1.25 | Aleksib, b1t, iM, makazze, w0nderful |
|           29 |      149 | 2025-08-02 | Team Spirit       | L   | 1.000      | -            | -                | -                | -         |    -8.00 | Aleksib, b1t, iM, makazze, w0nderful |
|           28 |      171 | 2025-08-01 | The MongolZ       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.492 (0.492)    | 1 (1.000) |    16.73 | Aleksib, b1t, iM, makazze, w0nderful |
|           27 |      201 | 2025-07-29 | FaZe Clan         | W   | 1.000      | 1.000        | 0.510 (0.510)    | 0.538 (0.538)    | 1 (1.000) |    12.91 | Aleksib, b1t, iM, makazze, w0nderful |
|           26 |      207 | 2025-07-29 | Ninjas in Pyjamas | W   | 1.000      | 1.000        | 0.211 (0.211)    | 0.692 (0.692)    | 1 (1.000) |     4.86 | Aleksib, b1t, iM, makazze, w0nderful |
|           25 |      222 | 2025-07-28 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -9.87 | Aleksib, b1t, iM, makazze, w0nderful |
|           24 |      264 | 2025-07-26 | FaZe Clan         | W   | 1.000      | 1.000        | 0.510 (0.510)    | 0.538 (0.538)    | 1 (1.000) |    13.14 | Aleksib, b1t, iM, makazze, w0nderful |
|           23 |      744 | 2025-06-20 | Team Vitality     | L   | 0.819      | -            | -                | -                | -         |    -4.80 | Aleksib, b1t, iM, jL, w0nderful      |
|           22 |      849 | 2025-06-14 | G2 Esports        | W   | 0.779      | 1.000        | 0.465 (0.363)    | 0.334 (0.260)    | 1 (0.779) |     6.78 | Aleksib, b1t, iM, jL, w0nderful      |
|           21 |      898 | 2025-06-13 | Team Spirit       | L   | 0.772      | -            | -                | -                | -         |    -5.66 | Aleksib, b1t, iM, jL, w0nderful      |
|           20 |      921 | 2025-06-12 | 3DMAX             | W   | 0.766      | 1.000        | 0.401 (0.307)    | 0.475 (0.364)    | 1 (0.766) |     9.84 | Aleksib, b1t, iM, jL, w0nderful      |
|           19 |      926 | 2025-06-12 | Nemiga Gaming     | W   | 0.765      | 1.000        | -                | 0.583 (0.446)    | 1 (0.765) |     1.50 | Aleksib, b1t, iM, jL, w0nderful      |
|           18 |     1329 | 2025-05-16 | Astralis          | L   | 0.583      | -            | -                | -                | -         |    -9.36 | Aleksib, b1t, iM, jL, w0nderful      |
|           17 |     1407 | 2025-05-13 | Aurora Gaming     | W   | 0.563      | 1.000        | 0.603 (0.340)    | 0.415 (0.234)    | 1 (0.563) |     5.65 | Aleksib, b1t, iM, jL, w0nderful      |
|           16 |     1428 | 2025-05-12 | The MongolZ       | L   | 0.557      | -            | -                | -                | -         |    -7.37 | Aleksib, b1t, iM, jL, w0nderful      |
|           15 |     1460 | 2025-05-11 | BIG               | W   | 0.550      | 1.000        | 0.189 (0.104)    | 0.352 (0.193)    | 1 (0.550) |     0.71 | Aleksib, b1t, iM, jL, w0nderful      |
|           14 |     1483 | 2025-05-10 | M80               | W   | 0.544      | 1.000        | -                | 0.680 (0.370)    | 1 (0.544) |     0.81 | Aleksib, b1t, iM, jL, w0nderful      |
|           13 |     1889 | 2025-04-23 | Team Liquid       | L   | 0.430      | -            | -                | -                | -         |   -12.56 | Aleksib, b1t, iM, jL, w0nderful      |
|           12 |     1894 | 2025-04-22 | FlyQuest          | W   | 0.428      | -            | -                | -                | -         |     1.10 | Aleksib, b1t, iM, jL, w0nderful      |
|           11 |     1906 | 2025-04-22 | Team Falcons      | L   | 0.423      | -            | -                | -                | -         |    -8.44 | Aleksib, b1t, iM, jL, w0nderful      |
|           10 |     1918 | 2025-04-21 | MIBR              | W   | 0.417      | -            | -                | -                | -         |     0.87 | Aleksib, b1t, iM, jL, w0nderful      |
|            9 |     2579 | 2025-03-28 | Team Spirit       | L   | 0.259      | -            | -                | -                | -         |    -2.12 | Aleksib, b1t, iM, jL, w0nderful      |
|            8 |     2782 | 2025-03-24 | Aurora Gaming     | L   | 0.231      | -            | -                | -                | -         |    -5.11 | Aleksib, b1t, iM, jL, w0nderful      |
|            7 |     2804 | 2025-03-22 | The MongolZ       | W   | 0.220      | 0.715        | 1.000 (0.157)    | -                | -         |     3.96 | Aleksib, b1t, iM, jL, w0nderful      |
|            6 |     2840 | 2025-03-20 | FURIA             | W   | 0.206      | -            | -                | -                | -         |     3.42 | Aleksib, b1t, iM, jL, w0nderful      |
|            5 |     2971 | 2025-03-14 | The MongolZ       | L   | 0.165      | -            | -                | -                | -         |    -2.21 | Aleksib, b1t, iM, jL, w0nderful      |
|            4 |     3054 | 2025-03-10 | G2 Esports        | W   | 0.139      | -            | -                | -                | -         |     0.92 | Aleksib, b1t, iM, jL, w0nderful      |
|            3 |     3118 | 2025-03-09 | PaiN Gaming       | W   | 0.131      | -            | -                | -                | -         |     1.10 | Aleksib, b1t, iM, jL, w0nderful      |
|            2 |     3208 | 2025-03-08 | TYLOO             | W   | 0.123      | 1.000        | 1.000 (0.123)    | -                | -         |     2.37 | Aleksib, b1t, iM, jL, w0nderful      |
|            1 |     3261 | 2025-03-07 | SAW               | L   | 0.118      | -            | -                | -                | -         |    -3.20 | Aleksib, b1t, iM, jL, w0nderful      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($222,470.52)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.60) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-10 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-08-03 |      1.000 | $108,000.00    | $108,000.00     |
| 2025-06-22 |      0.833 | $45,000.00     | $37,465.63      |
| 2025-05-18 |      0.597 | $62,500.00     | $37,322.05      |
| 2025-04-26 |      0.456 | $47,000.00     | $21,414.38      |
| 2025-03-30 |      0.271 | $20,000.00     | $5,429.17       |
| 2025-03-16 |      0.178 | $58,000.00     | $10,339.31      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
