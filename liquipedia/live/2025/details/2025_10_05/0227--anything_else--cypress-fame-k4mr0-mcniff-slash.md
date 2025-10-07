### Roster Details<br />
Team Name: Anything else<br />
Roster: cypress, FAME, K4mr0, mcniff, Slash<br />
Global Rank: [227](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [67]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  497.7<br />
<br />
Final Rank Value (497.7) = Starting Rank Value (477.9) + Head To Head Adjustments (19.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.145[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.146[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 477.9
- 400 + ( ( 0.040 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 477.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      622 | 2025-09-12 | Life's A Game       | L   | 1.000      | -            | -                | -                | -         |    -5.67 | cypress, FAME, K4mr0, mcniff, Slash |
|           15 |      664 | 2025-09-11 | NYX (American team) | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.042 (0.015)    | 0 (0.000) |    17.83 | cypress, FAME, K4mr0, mcniff, Slash |
|           14 |      705 | 2025-09-10 | Regain              | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.184 (0.067)    | 0 (0.000) |    21.80 | cypress, FAME, K4mr0, mcniff, Slash |
|           13 |      797 | 2025-09-08 | Mythic              | L   | 1.000      | -            | -                | -                | -         |   -13.87 | cypress, FAME, K4mr0, mcniff, Slash |
|           12 |     1435 | 2025-08-13 | Wanted Goons        | L   | 0.841      | -            | -                | -                | -         |   -11.79 | cypress, FAME, K4mr0, mcniff, Slash |
|           11 |     1494 | 2025-08-12 | NRG                 | L   | 0.834      | -            | -                | -                | -         |    -0.42 | cypress, FAME, K4mr0, mcniff, Slash |
|           10 |     1543 | 2025-08-11 | MIGHT               | W   | 0.828      | 0.363        | 0.000 (0.000)    | 0.111 (0.033)    | 0 (0.000) |    13.85 | cypress, FAME, K4mr0, mcniff, Slash |
|            9 |     2120 | 2025-07-11 | Getting Info        | L   | 0.621      | -            | -                | -                | -         |    -2.29 | cypress, FAME, mcniff, Slash, Weeza |
|            8 |     2133 | 2025-07-11 | True Synergy Gaming | W   | 0.619      | 0.143        | 0.000 (0.000)    | 0.075 (0.007)    | 0 (0.000) |    10.41 | cypress, FAME, mcniff, Slash, Weeza |
|            7 |     2456 | 2025-06-14 | Nocturnal Esports   | L   | 0.441      | -            | -                | -                | -         |    -5.32 | cypress, FAME, K4mr0, mcniff, Slash |
|            6 |     2528 | 2025-06-12 | Subtick             | L   | 0.427      | -            | -                | -                | -         |    -8.19 | cypress, FAME, K4mr0, mcniff, Slash |
|            5 |     2570 | 2025-06-10 | MONEY CREW          | L   | 0.414      | -            | -                | -                | -         |    -3.54 | cypress, FAME, K4mr0, mcniff, Slash |
|            4 |     2980 | 2025-05-14 | Wildcard            | L   | 0.234      | -            | -                | -                | -         |    -0.14 | cypress, FAME, K4mr0, mcniff, Slash |
|            3 |     3047 | 2025-05-12 | MIGHT               | W   | 0.220      | 0.384        | 0.000 (0.000)    | 0.111 (0.009)    | 0 (0.000) |     3.81 | cypress, FAME, K4mr0, mcniff, Slash |
|            2 |     3103 | 2025-05-10 | Legacy              | L   | 0.207      | -            | -                | -                | -         |    -0.06 | cypress, FAME, K4mr0, mcniff, Slash |
|            1 |     3148 | 2025-05-08 | MIGHT               | W   | 0.194      | 0.384        | 0.000 (0.000)    | 0.111 (0.008)    | 0 (0.000) |     3.37 | cypress, FAME, K4mr0, mcniff, Slash |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
