### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, drop, edv, FasteR, venomzera<br />
Global Rank: [135](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  685.7<br />
<br />
Final Rank Value (685.7) = Starting Rank Value (662.7) + Head To Head Adjustments (23.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.7
- 400 + ( ( 0.138 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 662.7


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
|           17 |     1406 | 2025-05-07 | Game Hunters     | L   | 0.587      | -            | -                | -                | -         |    -6.79 | coldzera, drop, edv, FasteR, venomzera |
|           16 |     1439 | 2025-05-06 | Keyd Stars       | L   | 0.580      | -            | -                | -                | -         |    -8.16 | coldzera, drop, edv, FasteR, venomzera |
|           15 |     1878 | 2025-04-16 | BESTIA           | L   | 0.446      | -            | -                | -                | -         |    -5.04 | coldzera, drop, felps, HEN1, venomzera |
|           14 |     1901 | 2025-04-15 | Legacy           | L   | 0.440      | -            | -                | -                | -         |    -0.56 | coldzera, drop, felps, HEN1, venomzera |
|           13 |     2116 | 2025-04-06 | Sharks Esports   | L   | 0.380      | -            | -                | -                | -         |    -2.77 | coldzera, drop, felps, HEN1, venomzera |
|           12 |     2151 | 2025-04-04 | SELVA            | W   | 0.367      | 0.143        | 0.017 (0.001)    | 0.371 (0.019)    | 0 (0.000) |     6.78 | coldzera, drop, felps, HEN1, venomzera |
|           11 |     2167 | 2025-04-03 | Sharks Esports   | W   | 0.360      | 0.143        | 0.055 (0.003)    | 0.650 (0.033)    | 0 (0.000) |     8.84 | coldzera, drop, felps, HEN1, venomzera |
|           10 |     2305 | 2025-03-31 | Imperial Esports | L   | 0.338      | -            | -                | -                | -         |    -1.67 | coldzera, drop, felps, HEN1, venomzera |
|            9 |     2322 | 2025-03-30 | Sharks Esports   | W   | 0.333      | 0.143        | 0.055 (0.003)    | 0.650 (0.031)    | 0 (0.000) |     8.31 | coldzera, drop, felps, HEN1, venomzera |
|            8 |     2373 | 2025-03-29 | ShindeN          | W   | 0.326      | 0.143        | 0.005 (0.000)    | 0.387 (0.018)    | 0 (0.000) |     5.60 | coldzera, drop, felps, HEN1, venomzera |
|            7 |     2424 | 2025-03-28 | 9z Team          | W   | 0.320      | 0.143        | 0.097 (0.004)    | 0.567 (0.026)    | 0 (0.000) |     7.96 | coldzera, drop, felps, HEN1, venomzera |
|            6 |     2508 | 2025-03-27 | Crashers         | W   | 0.313      | 0.143        | 0.002 (0.000)    | 0.184 (0.008)    | 0 (0.000) |     4.30 | coldzera, drop, felps, HEN1, venomzera |
|            5 |     2909 | 2025-03-10 | Legacy           | L   | 0.200      | -            | -                | -                | -         |    -0.15 | coldzera, drop, felps, HEN1, venomzera |
|            4 |     2918 | 2025-03-10 | Dusty Roots      | W   | 0.198      | 0.143        | 0.000 (0.000)    | 0.454 (0.013)    | 0 (0.000) |     2.05 | coldzera, drop, felps, HEN1, venomzera |
|            3 |     2951 | 2025-03-09 | Legacy           | L   | 0.193      | -            | -                | -                | -         |    -0.14 | coldzera, drop, felps, HEN1, venomzera |
|            2 |     3017 | 2025-03-08 | Dusty Roots      | W   | 0.186      | 0.143        | 0.000 (0.000)    | 0.454 (0.012)    | 0 (0.000) |     1.93 | coldzera, drop, felps, HEN1, venomzera |
|            1 |     3117 | 2025-03-07 | Crashers         | W   | 0.178      | 0.143        | 0.002 (0.000)    | 0.184 (0.005)    | 0 (0.000) |     2.52 | coldzera, drop, felps, HEN1, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,226.39)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.613 | $2,000.00      | $1,226.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
