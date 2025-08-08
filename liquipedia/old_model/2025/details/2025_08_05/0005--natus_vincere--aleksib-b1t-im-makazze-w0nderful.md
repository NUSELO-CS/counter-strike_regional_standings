### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, makazze, w0nderful<br />
Global Rank: [5](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [4]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  1788.1<br />
<br />
Final Rank Value (1788.1) = Starting Rank Value (1791.5) + Head To Head Adjustments (-3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.795[<sup>1</sup>](#table2)
- Bounty Collected: 0.699[<sup>2</sup>](#table1)
- Opponent Network: 0.492[<sup>2</sup>](#table1)
- LAN Wins: 0.940[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.455[<sup>2</sup>](#table1)

The average of these factors is 0.731<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1791.5
- 400 + ( ( 0.731 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1791.5


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
|           29 |       27 | 2025-08-02 | Team Spirit       | L   | 1.000      | -            | -                | -                | -         |    -8.08 | Aleksib, b1t, iM, makazze, w0nderful |
|           28 |       45 | 2025-08-01 | The MongolZ       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.528 (0.528)    | 1 (1.000) |    16.84 | Aleksib, b1t, iM, makazze, w0nderful |
|           27 |       66 | 2025-07-29 | FaZe Clan         | W   | 1.000      | 1.000        | 0.493 (0.493)    | 0.593 (0.593)    | 1 (1.000) |    11.54 | Aleksib, b1t, iM, makazze, w0nderful |
|           26 |       71 | 2025-07-29 | Ninjas in Pyjamas | W   | 1.000      | 1.000        | 0.196 (0.196)    | 0.842 (0.842)    | 1 (1.000) |     3.96 | Aleksib, b1t, iM, makazze, w0nderful |
|           25 |       84 | 2025-07-28 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -9.89 | Aleksib, b1t, iM, makazze, w0nderful |
|           24 |      126 | 2025-07-26 | FaZe Clan         | W   | 1.000      | 1.000        | 0.493 (0.493)    | 0.593 (0.593)    | 1 (1.000) |    11.51 | Aleksib, b1t, iM, makazze, w0nderful |
|           23 |      606 | 2025-06-20 | Team Vitality     | L   | 0.879      | -            | -                | -                | -         |    -4.75 | Aleksib, b1t, iM, jL, w0nderful      |
|           22 |      711 | 2025-06-14 | G2 Esports        | W   | 0.839      | 1.000        | 0.446 (0.374)    | 0.353 (0.297)    | 1 (0.839) |     7.69 | Aleksib, b1t, iM, jL, w0nderful      |
|           21 |      760 | 2025-06-13 | Team Spirit       | L   | 0.832      | -            | -                | -                | -         |    -6.21 | Aleksib, b1t, iM, jL, w0nderful      |
|           20 |      783 | 2025-06-12 | 3DMAX             | W   | 0.826      | 1.000        | 0.378 (0.312)    | 0.571 (0.471)    | 1 (0.826) |     8.56 | Aleksib, b1t, iM, jL, w0nderful      |
|           19 |      788 | 2025-06-12 | Nemiga Gaming     | W   | 0.825      | 1.000        | -                | 0.730 (0.602)    | 1 (0.825) |     1.15 | Aleksib, b1t, iM, jL, w0nderful      |
|           18 |     1191 | 2025-05-16 | Astralis          | L   | 0.643      | -            | -                | -                | -         |   -11.62 | Aleksib, b1t, iM, jL, w0nderful      |
|           17 |     1269 | 2025-05-13 | Aurora Gaming     | W   | 0.623      | 1.000        | 0.591 (0.368)    | 0.455 (0.284)    | 1 (0.623) |     6.79 | Aleksib, b1t, iM, jL, w0nderful      |
|           16 |     1290 | 2025-05-12 | The MongolZ       | L   | 0.617      | -            | -                | -                | -         |    -8.00 | Aleksib, b1t, iM, jL, w0nderful      |
|           15 |     1322 | 2025-05-11 | BIG               | W   | 0.610      | 1.000        | 0.182 (0.111)    | -                | 1 (0.610) |     0.79 | Aleksib, b1t, iM, jL, w0nderful      |
|           14 |     1345 | 2025-05-10 | M80               | W   | 0.604      | 1.000        | -                | 0.780 (0.471)    | 1 (0.604) |     0.77 | Aleksib, b1t, iM, jL, w0nderful      |
|           13 |     1751 | 2025-04-23 | Team Liquid       | L   | 0.490      | -            | -                | -                | -         |   -14.39 | Aleksib, b1t, iM, jL, w0nderful      |
|           12 |     1756 | 2025-04-22 | FlyQuest          | W   | 0.488      | 1.000        | -                | 0.485 (0.237)    | -         |     0.93 | Aleksib, b1t, iM, jL, w0nderful      |
|           11 |     1768 | 2025-04-22 | Team Falcons      | L   | 0.483      | -            | -                | -                | -         |    -9.46 | Aleksib, b1t, iM, jL, w0nderful      |
|           10 |     1780 | 2025-04-21 | MIBR              | W   | 0.476      | -            | -                | -                | -         |     0.76 | Aleksib, b1t, iM, jL, w0nderful      |
|            9 |     2441 | 2025-03-28 | Team Spirit       | L   | 0.319      | -            | -                | -                | -         |    -2.70 | Aleksib, b1t, iM, jL, w0nderful      |
|            8 |     2644 | 2025-03-24 | Aurora Gaming     | L   | 0.291      | -            | -                | -                | -         |    -6.14 | Aleksib, b1t, iM, jL, w0nderful      |
|            7 |     2666 | 2025-03-22 | The MongolZ       | W   | 0.279      | 0.715        | 1.000 (0.200)    | -                | -         |     5.19 | Aleksib, b1t, iM, jL, w0nderful      |
|            6 |     2702 | 2025-03-20 | FURIA             | W   | 0.266      | -            | -                | -                | -         |     3.83 | Aleksib, b1t, iM, jL, w0nderful      |
|            5 |     2833 | 2025-03-14 | The MongolZ       | L   | 0.225      | -            | -                | -                | -         |    -2.89 | Aleksib, b1t, iM, jL, w0nderful      |
|            4 |     2916 | 2025-03-10 | G2 Esports        | W   | 0.199      | -            | -                | -                | -         |     1.42 | Aleksib, b1t, iM, jL, w0nderful      |
|            3 |     2980 | 2025-03-09 | PaiN Gaming       | W   | 0.191      | -            | -                | -                | -         |     1.25 | Aleksib, b1t, iM, jL, w0nderful      |
|            2 |     3070 | 2025-03-08 | TYLOO             | W   | 0.183      | 1.000        | 0.889 (0.163)    | -                | -         |     2.85 | Aleksib, b1t, iM, jL, w0nderful      |
|            1 |     3123 | 2025-03-07 | SAW               | L   | 0.178      | -            | -                | -                | -         |    -5.09 | Aleksib, b1t, iM, jL, w0nderful      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($233,904.38)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.55) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $108,000.00    | $108,000.00     |
| 2025-06-22 |      0.892 | $45,000.00     | $40,162.50      |
| 2025-05-18 |      0.657 | $62,500.00     | $41,067.71      |
| 2025-04-26 |      0.516 | $47,000.00     | $24,231.11      |
| 2025-03-30 |      0.331 | $20,000.00     | $6,627.78       |
| 2025-03-16 |      0.238 | $58,000.00     | $13,815.28      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
