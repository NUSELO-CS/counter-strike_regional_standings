### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, drop, edv, FasteR, venomzera<br />
Global Rank: [128](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_15.md)<br />
Regional Rank: [35]( ../../standings_americas_2025_08_15.md)<br />
<br />
Final Rank Value:  726.0<br />
<br />
Final Rank Value (726.0) = Starting Rank Value (710.6) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 710.6
- 400 + ( ( 0.159 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 710.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     1544 | 2025-05-07 | Game Hunters     | L   | 0.527      | -            | -                | -                | -         |    -6.66 | coldzera, drop, edv, FasteR, venomzera |
|           16 |     1577 | 2025-05-06 | Keyd Stars       | L   | 0.520      | -            | -                | -                | -         |    -7.99 | coldzera, drop, edv, FasteR, venomzera |
|           15 |     2016 | 2025-04-16 | BESTIA           | L   | 0.386      | -            | -                | -                | -         |    -4.68 | coldzera, drop, felps, HEN1, venomzera |
|           14 |     2039 | 2025-04-15 | Legacy           | L   | 0.380      | -            | -                | -                | -         |    -0.38 | coldzera, drop, felps, HEN1, venomzera |
|           13 |     2254 | 2025-04-06 | Sharks Esports   | L   | 0.320      | -            | -                | -                | -         |    -1.92 | coldzera, drop, felps, HEN1, venomzera |
|           12 |     2289 | 2025-04-04 | SELVA            | W   | 0.307      | 0.435        | 0.018 (0.002)    | 0.292 (0.039)    | 0 (0.000) |     5.40 | coldzera, drop, felps, HEN1, venomzera |
|           11 |     2305 | 2025-04-03 | Sharks Esports   | W   | 0.300      | 0.435        | 0.070 (0.009)    | 0.538 (0.070)    | 0 (0.000) |     7.75 | coldzera, drop, felps, HEN1, venomzera |
|           10 |     2443 | 2025-03-31 | Imperial Esports | L   | 0.279      | -            | -                | -                | -         |    -0.51 | coldzera, drop, felps, HEN1, venomzera |
|            9 |     2460 | 2025-03-30 | Sharks Esports   | W   | 0.273      | 0.769        | 0.070 (0.015)    | 0.538 (0.113)    | 0 (0.000) |     7.13 | coldzera, drop, felps, HEN1, venomzera |
|            8 |     2511 | 2025-03-29 | ShindeN          | W   | 0.266      | 0.769        | 0.006 (0.001)    | 0.322 (0.066)    | 0 (0.000) |     4.23 | coldzera, drop, felps, HEN1, venomzera |
|            7 |     2562 | 2025-03-28 | 9z Team          | W   | 0.260      | 0.769        | 0.105 (0.021)    | 0.481 (0.096)    | 0 (0.000) |     6.18 | coldzera, drop, felps, HEN1, venomzera |
|            6 |     2646 | 2025-03-27 | Crashers         | W   | 0.253      | 0.769        | 0.002 (0.000)    | 0.149 (0.029)    | 0 (0.000) |     3.18 | coldzera, drop, felps, HEN1, venomzera |
|            5 |     3047 | 2025-03-10 | Legacy           | L   | 0.140      | -            | -                | -                | -         |    -0.09 | coldzera, drop, felps, HEN1, venomzera |
|            4 |     3056 | 2025-03-10 | Dusty Roots      | W   | 0.139      | 0.769        | 0.000 (0.000)    | 0.380 (0.040)    | 0 (0.000) |     1.23 | coldzera, drop, felps, HEN1, venomzera |
|            3 |     3089 | 2025-03-09 | Legacy           | L   | 0.133      | -            | -                | -                | -         |    -0.08 | coldzera, drop, felps, HEN1, venomzera |
|            2 |     3155 | 2025-03-08 | Dusty Roots      | W   | 0.126      | 0.769        | 0.000 (0.000)    | 0.380 (0.037)    | 0 (0.000) |     1.12 | coldzera, drop, felps, HEN1, venomzera |
|            1 |     3255 | 2025-03-07 | Crashers         | W   | 0.118      | 0.769        | 0.002 (0.000)    | 0.149 (0.014)    | 0 (0.000) |     1.52 | coldzera, drop, felps, HEN1, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,106.53)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.553 | $2,000.00      | $1,106.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
