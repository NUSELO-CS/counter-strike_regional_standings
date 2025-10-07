### Roster Details<br />
Team Name: GTZ<br />
Roster: aragornN, Icarus, pr, rafaxF, Shr<br />
Global Rank: [71](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [55]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  914.1<br />
<br />
Final Rank Value (914.1) = Starting Rank Value (931.5) + Head To Head Adjustments (-17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.330[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.229[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 931.5
- 400 + ( ( 0.275 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 931.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     1145 | 2023-06-17 | SAW             | L   | 0.714      | -            | -                | -                | -         |    -3.68 | aragornN, Icarus, pr, rafaxF, Shr    |
|           23 |     1221 | 2023-06-11 | FTW             | W   | 0.674      | 0.337        | 0.019 (0.004)    | 0.198 (0.045)    | 1 (0.674) |     8.33 | aragornN, Icarus, pr, rafaxF, Shr    |
|           22 |     1256 | 2023-06-10 | FTW             | W   | 0.666      | 0.337        | 0.019 (0.004)    | 0.198 (0.044)    | 1 (0.666) |     8.53 | aragornN, Icarus, pr, rafaxF, Shr    |
|           21 |     1269 | 2023-06-10 | Skrill Ogres    | W   | 0.665      | 0.337        | 0.004 (0.001)    | 0.032 (0.007)    | 1 (0.665) |     4.88 | aragornN, Icarus, pr, rafaxF, Shr    |
|           20 |     1406 | 2023-06-06 | 9 Pandas        | L   | 0.638      | -            | -                | -                | -         |    -5.26 | aragornN, Icarus, pr, rafaxF, Shr    |
|           19 |     1444 | 2023-06-04 | B8              | W   | 0.626      | 0.435        | 0.003 (0.001)    | 0.561 (0.153)    | 0 (0.000) |     8.64 | aragornN, Icarus, pr, rafaxF, Shr    |
|           18 |     1448 | 2023-06-04 | Sampi           | L   | 0.626      | -            | -                | -                | -         |    -7.49 | aragornN, Icarus, pr, rafaxF, Shr    |
|           17 |     1453 | 2023-06-04 | Zero Tenacity   | L   | 0.625      | -            | -                | -                | -         |   -11.86 | aragornN, Icarus, pr, rafaxF, Shr    |
|           16 |     1477 | 2023-06-03 | Sampi           | L   | 0.619      | -            | -                | -                | -         |    -8.13 | aragornN, Icarus, pr, rafaxF, Shr    |
|           15 |     1503 | 2023-06-02 | Anonymo         | L   | 0.613      | -            | -                | -                | -         |   -10.60 | aragornN, Icarus, pr, rafaxF, Shr    |
|           14 |     1514 | 2023-06-02 | MelBet          | W   | 0.611      | 0.435        | 0.000 (0.000)    | 0.042 (0.011)    | 0 (0.000) |     1.80 | aragornN, Icarus, pr, rafaxF, Shr    |
|           13 |     1574 | 2023-05-31 | SINNERS         | W   | 0.601      | 0.435        | 0.069 (0.018)    | 1.000 (0.261)    | 0 (0.000) |    12.14 | aragornN, Icarus, pr, rafaxF, Shr    |
|           12 |     1584 | 2023-05-31 | Websterz        | L   | 0.599      | -            | -                | -                | -         |    -9.51 | aragornN, Icarus, pr, rafaxF, Shr    |
|           11 |     1622 | 2023-05-30 | Astralis Talent | L   | 0.592      | -            | -                | -                | -         |    -7.30 | aragornN, Icarus, pr, rafaxF, Shr    |
|           10 |     1644 | 2023-05-29 | Sangal          | L   | 0.588      | -            | -                | -                | -         |   -13.41 | aragornN, Icarus, pr, rafaxF, Shr    |
|            9 |     1663 | 2023-05-29 | Sampi           | W   | 0.586      | 0.371        | 0.087 (0.019)    | 1.000 (0.217)    | 0 (0.000) |    10.33 | aragornN, Icarus, pr, rafaxF, Shr    |
|            8 |     1971 | 2023-05-17 | fnatic          | L   | 0.508      | -            | -                | -                | -         |    -2.10 | fakeS2, Icarus, pr, rafaxF, Shr      |
|            7 |     1973 | 2023-05-17 | ex-iNation      | W   | 0.508      | 0.143        | 0.004 (0.000)    | 0.334 (0.024)    | 0 (0.000) |     2.90 | fakeS2, Icarus, pr, rafaxF, Shr      |
|            6 |     1996 | 2023-05-16 | SAW             | L   | 0.502      | -            | -                | -                | -         |    -2.72 | aragornN, Icarus, pr, rafaxF, Shr    |
|            5 |     2127 | 2023-05-07 | FTW             | W   | 0.440      | 0.307        | 0.019 (0.003)    | 0.198 (0.027)    | 1 (0.440) |     4.93 | aragornN, Icarus, pr, rafaxF, Shr    |
|            4 |     2155 | 2023-05-06 | Los Alpacas     | W   | 0.432      | 0.307        | 0.012 (0.002)    | 0.156 (0.021)    | 1 (0.432) |     3.40 | aragornN, Icarus, pr, rafaxF, Shr    |
|            3 |     3657 | 2023-03-06 | Into the Bin    | L   | 0.028      | -            | -                | -                | -         |    -0.75 | aragornN, Icarus, rafaxF, Shr, snapy |
|            2 |     3667 | 2023-03-06 | Departed        | W   | 0.026      | -            | -                | -                | -         |     0.04 | aragornN, Icarus, rafaxF, Shr, snapy |
|            1 |     3684 | 2023-03-05 | Into the Bin    | L   | 0.020      | -            | -                | -                | -         |    -0.55 | aragornN, Icarus, rafaxF, Shr, snapy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,788.86)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-18 |      0.720 | $1,336.00      | $961.64         |
| 2023-06-11 |      0.674 | $5,624.00      | $3,787.82       |
| 2023-05-16 |      0.502 | $1,646.00      | $825.67         |
| 2023-05-07 |      0.440 | $2,758.00      | $1,213.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
