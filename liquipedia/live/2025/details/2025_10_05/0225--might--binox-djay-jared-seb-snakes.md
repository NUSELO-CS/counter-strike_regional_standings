### Roster Details<br />
Team Name: MIGHT<br />
Roster: BiNoX, djay, Jared, Seb, Snakes<br />
Global Rank: [225](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [66]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  505.3<br />
<br />
Final Rank Value (505.3) = Starting Rank Value (520.9) + Head To Head Adjustments (-15.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.111[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.9
- 400 + ( ( 0.062 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 520.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     1395 | 2025-08-14 | Take Flyte       | L   | 0.848      | -            | -                | -                | -         |   -10.75 | BiNoX, djay, Jared, Seb, Snakes     |
|           23 |     1441 | 2025-08-13 | Team Aether      | W   | 0.841      | 0.363        | 0.003 (0.001)    | 0.299 (0.091)    | 0 (0.000) |    20.01 | BiNoX, djay, Jared, Seb, Snakes     |
|           22 |     1543 | 2025-08-11 | Anything else    | L   | 0.828      | -            | -                | -                | -         |   -13.85 | BiNoX, djay, Jared, Seb, Snakes     |
|           21 |     1797 | 2025-07-28 | Life's A Game    | L   | 0.733      | -            | -                | -                | -         |    -4.98 | BiNoX, djay, Jared, Matheos, Snakes |
|           20 |     1814 | 2025-07-27 | Party Astronauts | W   | 0.727      | 0.384        | 0.002 (0.000)    | 0.069 (0.019)    | 0 (0.000) |    15.08 | BiNoX, djay, Jared, no1nx, Snakes   |
|           19 |     1841 | 2025-07-26 | Wildcard         | L   | 0.721      | -            | -                | -                | -         |    -0.46 | BiNoX, djay, Jared, serv0, Snakes   |
|           18 |     1879 | 2025-07-24 | Marsborne        | L   | 0.707      | -            | -                | -                | -         |    -1.69 | BiNoX, djay, Jared, no1nx, Snakes   |
|           17 |     2134 | 2025-07-11 | Golden Horde     | L   | 0.619      | -            | -                | -                | -         |   -12.57 | BiNoX, djay, Jared, no1nx, Snakes   |
|           16 |     2395 | 2025-06-17 | Life's A Game    | L   | 0.461      | -            | -                | -                | -         |    -3.20 | BiNoX, djay, Jared, no1nx, Snakes   |
|           15 |     2409 | 2025-06-16 | Marca Registrada | L   | 0.454      | -            | -                | -                | -         |    -7.36 | BiNoX, djay, Jared, no1nx, Snakes   |
|           14 |     2494 | 2025-06-13 | Wanted Goons     | W   | 0.434      | 0.333        | 0.000 (0.000)    | 0.224 (0.032)    | 0 (0.000) |     7.04 | BiNoX, djay, Jared, no1nx, Snakes   |
|           13 |     2526 | 2025-06-12 | BLUEJAYS         | L   | 0.427      | -            | -                | -                | -         |    -3.12 | BiNoX, djay, Jared, no1nx, Snakes   |
|           12 |     2568 | 2025-06-10 | Legacy Kingdom   | W   | 0.414      | 0.333        | 0.000 (0.000)    | 0.228 (0.031)    | 0 (0.000) |     6.95 | BiNoX, djay, Jared, no1nx, Snakes   |
|           11 |     3047 | 2025-05-12 | Anything else    | L   | 0.220      | -            | -                | -                | -         |    -3.81 | BiNoX, djay, Jared, Louie, Snakes   |
|           10 |     3075 | 2025-05-11 | Shimmer          | W   | 0.213      | 0.384        | 0.036 (0.003)    | 0.152 (0.012)    | 0 (0.000) |     5.76 | djay, Jared, Louie, Snakes, Voltage |
|            9 |     3148 | 2025-05-08 | Anything else    | L   | 0.194      | -            | -                | -                | -         |    -3.37 | djay, Jared, Louie, Snakes, Voltage |
|            8 |     3286 | 2025-05-03 | BLUEJAYS         | L   | 0.160      | -            | -                | -                | -         |    -1.46 | djay, Jared, Louie, Snakes, Voltage |
|            7 |     3290 | 2025-05-03 | Getting Info     | L   | 0.159      | -            | -                | -                | -         |    -0.71 | djay, Jared, Louie, Snakes, Voltage |
|            6 |     3456 | 2025-04-26 | Arrival Seven    | L   | 0.115      | -            | -                | -                | -         |    -1.09 | djay, Jared, Louie, Snakes, Voltage |
|            5 |     3586 | 2025-04-18 | JERSA ESPORTS    | L   | 0.061      | -            | -                | -                | -         |    -1.03 | djay, Jared, Louie, Snakes, Voltage |
|            4 |     3652 | 2025-04-16 | Getting Info     | L   | 0.045      | -            | -                | -                | -         |    -0.20 | djay, Jared, Louie, Snakes, Voltage |
|            3 |     3675 | 2025-04-15 | BLUEJAYS         | L   | 0.039      | -            | -                | -                | -         |    -0.37 | djay, Jared, Louie, Snakes, Voltage |
|            2 |     3719 | 2025-04-13 | Wanted Goons     | L   | 0.027      | -            | -                | -                | -         |    -0.41 | djay, Jared, Louie, Snakes, Voltage |
|            1 |     3767 | 2025-04-10 | Fisher College   | L   | 0.008      | -            | -                | -                | -         |    -0.10 | djay, Jared, Louie, Snakes, Voltage |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
