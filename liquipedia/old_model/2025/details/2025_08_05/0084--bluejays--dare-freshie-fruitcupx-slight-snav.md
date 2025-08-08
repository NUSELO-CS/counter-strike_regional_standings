### Roster Details<br />
Team Name: BLUEJAYS<br />
Roster: dare, freshie, Fruitcupx, SLIGHT, snav<br />
Global Rank: [84](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  847.3<br />
<br />
Final Rank Value (847.3) = Starting Rank Value (813.5) + Head To Head Adjustments (33.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.181[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.364[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.5
- 400 + ( ( 0.217 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 813.5


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
|           58 |     1197 | 2025-05-15 | NRG                  | L   | 0.640      | -            | -                | -                | -         |    -3.89 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           57 |     1248 | 2025-05-13 | Marsborne            | W   | 0.626      | 0.384        | 0.010 (0.002)    | 0.601 (0.145)    | 0 (0.000) |    11.31 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           56 |     1356 | 2025-05-09 | Legacy               | L   | 0.601      | -            | -                | -                | -         |    -1.67 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           55 |     1376 | 2025-05-08 | Arrival Seven        | W   | 0.594      | 0.472        | 0.006 (0.002)    | 0.210 (0.059)    | 0 (0.000) |     6.73 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           54 |     1402 | 2025-05-07 | Party Astronauts     | W   | 0.587      | 0.472        | 0.004 (0.001)    | 0.307 (0.085)    | 0 (0.000) |     6.41 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           53 |     1435 | 2025-05-06 | NRG                  | L   | 0.581      | -            | -                | -                | -         |    -3.53 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           52 |     1492 | 2025-05-04 | NRG                  | L   | 0.566      | -            | -                | -                | -         |    -3.66 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           51 |     1514 | 2025-05-03 | Party Astronauts     | W   | 0.560      | 0.303        | 0.004 (0.001)    | 0.307 (0.052)    | 0 (0.000) |     6.07 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           50 |     1516 | 2025-05-03 | MIGHT                | W   | 0.560      | 0.303        | -                | 0.273 (0.046)    | -         |     4.46 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           49 |     1521 | 2025-05-03 | Party Astronauts     | L   | 0.559      | -            | -                | -                | -         |   -11.60 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           48 |     1655 | 2025-04-27 | Sharks Esports       | L   | 0.519      | -            | -                | -                | -         |    -6.47 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           47 |     1677 | 2025-04-26 | Fisher College       | W   | 0.516      | 0.333        | -                | 0.252 (0.043)    | 1 (0.516) |     5.37 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           46 |     1683 | 2025-04-26 | Chicken Coop Esports | W   | 0.515      | -            | -                | -                | 1 (0.515) |     2.74 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           45 |     1775 | 2025-04-21 | Getting Info         | L   | 0.480      | -            | -                | -                | -         |    -8.33 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           44 |     1790 | 2025-04-20 | Arrival Seven        | W   | 0.474      | 0.333        | 0.006 (0.001)    | 0.210 (0.033)    | -         |     5.45 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           43 |     1814 | 2025-04-18 | Supernova Comets     | W   | 0.460      | 0.333        | 0.075 (0.011)    | -                | -         |     7.86 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           42 |     1840 | 2025-04-17 | NRG                  | L   | 0.454      | -            | -                | -                | -         |    -3.05 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           41 |     1849 | 2025-04-17 | Marsborne            | W   | 0.452      | 0.143        | -                | 0.601 (0.039)    | -         |     8.17 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           40 |     1879 | 2025-04-16 | Complexity           | L   | 0.445      | -            | -                | -                | -         |    -0.59 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           39 |     1904 | 2025-04-15 | MIGHT                | W   | 0.439      | -            | -                | -                | -         |     4.00 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           38 |     1946 | 2025-04-13 | Marsborne            | L   | 0.427      | -            | -                | -                | -         |    -5.83 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           37 |     2016 | 2025-04-09 | JERSA ESPORTS        | W   | 0.400      | -            | -                | -                | -         |     1.87 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           36 |     2054 | 2025-04-08 | BLUEJAYS             | W   | 0.394      | 0.143        | 0.036 (0.002)    | 0.827 (0.047)    | -         |     8.90 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           35 |     2059 | 2025-04-08 | BLUEJAYS             | L   | 0.394      | -            | -                | -                | -         |    -3.55 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           34 |     2104 | 2025-04-07 | Daaku                | L   | 0.387      | -            | -                | -                | -         |   -10.39 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           33 |     2209 | 2025-04-02 | Akimbo Esports       | W   | 0.354      | -            | -                | -                | -         |     3.15 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           32 |     2216 | 2025-04-02 | Akimbo Esports       | W   | 0.354      | -            | -                | -                | -         |     3.23 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           31 |     2266 | 2025-04-01 | Getting Info         | L   | 0.348      | -            | -                | -                | -         |    -6.57 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           30 |     2272 | 2025-04-01 | Getting Info         | L   | 0.347      | -            | -                | -                | -         |    -6.76 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           29 |     2282 | 2025-04-01 | M80                  | L   | 0.347      | -            | -                | -                | -         |    -1.27 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           28 |     2302 | 2025-03-31 | NRG                  | W   | 0.341      | 0.143        | 0.059 (0.003)    | 0.634 (0.031)    | -         |     8.39 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           27 |     2313 | 2025-03-30 | Getting Info         | W   | 0.335      | -            | -                | -                | -         |     4.19 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           26 |     2319 | 2025-03-30 | Fisher College       | W   | 0.333      | -            | -                | -                | -         |     3.40 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           25 |     2354 | 2025-03-29 | Getting Info         | L   | 0.328      | -            | -                | -                | -         |    -6.29 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           24 |     2420 | 2025-03-28 | Chicken Coop Esports | W   | 0.321      | -            | -                | -                | -         |     2.57 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           23 |     2502 | 2025-03-27 | Regain               | W   | 0.313      | -            | -                | -                | -         |     1.42 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           22 |     2719 | 2025-03-19 | Arrival Seven        | L   | 0.261      | -            | -                | -                | -         |    -5.24 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           21 |     2724 | 2025-03-19 | Arrival Seven        | W   | 0.261      | -            | -                | -                | -         |     3.03 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           20 |     2940 | 2025-03-09 | Complexity           | L   | 0.194      | -            | -                | -                | -         |    -0.33 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           19 |     3004 | 2025-03-08 | Party Astronauts     | W   | 0.187      | -            | -                | -                | -         |     1.96 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           18 |     3014 | 2025-03-08 | Mythic               | W   | 0.186      | -            | -                | -                | -         |     0.81 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           17 |     3086 | 2025-03-07 | Party Astronauts     | L   | 0.180      | -            | -                | -                | -         |    -3.84 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           16 |     3145 | 2025-03-06 | Legacy               | W   | 0.175      | 0.143        | 0.113 (0.003)    | -                | -         |     5.21 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           15 |     3148 | 2025-03-06 | Legacy               | W   | 0.174      | 0.143        | 0.113 (0.003)    | -                | -         |     5.21 | dare, freshie, Fruitcupx, SLIGHT, snav   |
|           14 |     3149 | 2025-03-06 | Regain               | W   | 0.174      | -            | -                | -                | -         |     0.84 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           13 |     3214 | 2025-03-05 | MakersMeetYou        | W   | 0.165      | -            | -                | -                | -         |     0.46 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           12 |     3269 | 2025-03-02 | Marsborne            | W   | 0.147      | -            | -                | -                | 1 (0.147) |     2.85 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           11 |     3275 | 2025-03-02 | LAG Gaming           | W   | 0.145      | -            | -                | -                | 1 (0.145) |     1.23 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|           10 |     3287 | 2025-03-01 | MIGHT                | W   | 0.141      | -            | -                | -                | 1 (0.141) |     1.38 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            9 |     3299 | 2025-03-01 | Anti-Eco Club        | W   | 0.140      | -            | -                | -                | 1 (0.140) |     0.40 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            8 |     3362 | 2025-02-26 | Marsborne            | L   | 0.121      | -            | -                | -                | -         |    -1.48 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            7 |     3366 | 2025-02-26 | Marsborne            | L   | 0.121      | -            | -                | -                | -         |    -1.49 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            6 |     3636 | 2025-02-14 | M80                  | L   | 0.040      | -            | -                | -                | -         |    -0.14 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            5 |     3637 | 2025-02-14 | Getting Info         | W   | 0.039      | -            | -                | -                | -         |     0.48 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            4 |     3660 | 2025-02-13 | Immigrants Peek      | W   | 0.033      | -            | -                | -                | -         |     0.13 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            3 |     3680 | 2025-02-12 | BLUEJAYS             | L   | 0.027      | -            | -                | -                | -         |    -0.24 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            2 |     3697 | 2025-02-11 | NRG                  | L   | 0.021      | -            | -                | -                | -         |    -0.14 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |
|            1 |     3702 | 2025-02-11 | BLUEJAYS             | W   | 0.020      | -            | -                | -                | -         |     0.45 | freshie, Fruitcupx, SLIGHT, snav, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,626.94)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.614 | $7,000.00      | $4,298.19       |
| 2025-04-27 |      0.521 | $1,000.00      | $520.56         |
| 2025-03-02 |      0.147 | $5,500.00      | $808.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
