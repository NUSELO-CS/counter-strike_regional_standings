### Roster Details<br />
Team Name: LAG Gaming<br />
Roster: Andrew, brett, mason, Sandman, Wolffe<br />
Global Rank: [116](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [25]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  740.8<br />
<br />
Final Rank Value (740.8) = Starting Rank Value (732.0) + Head To Head Adjustments (8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.427[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 732.0
- 400 + ( ( 0.174 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 732.0


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
|           53 |       57 | 2025-07-30 | Wildcard             | L   | 1.000      | -            | -                | -                | -         |    -6.18 | Andrew, brett, mason, Sandman, Wolffe |
|           52 |       75 | 2025-07-28 | MIGHT                | W   | 1.000      | 0.384        | -                | 0.273 (0.105)    | 0 (0.000) |    10.15 | Andrew, brett, mason, Sandman, Wolffe |
|           51 |      122 | 2025-07-26 | Marsborne            | L   | 1.000      | -            | -                | -                | -         |    -8.53 | Andrew, brett, mason, Sandman, Wolffe |
|           50 |      151 | 2025-07-24 | Party Astronauts     | W   | 1.000      | 0.384        | 0.004 (0.002)    | 0.307 (0.118)    | 0 (0.000) |    13.30 | Andrew, brett, mason, Sandman, Wolffe |
|           49 |      207 | 2025-07-19 | Marsborne            | L   | 1.000      | -            | -                | -                | -         |    -8.46 | brett, consti, mason, Sandman, Wolffe |
|           48 |      244 | 2025-07-18 | Marsborne            | L   | 1.000      | -            | -                | -                | -         |    -8.81 | brett, consti, mason, Sandman, Wolffe |
|           47 |      348 | 2025-07-13 | BLUEJAYS             | L   | 1.000      | -            | -                | -                | -         |    -7.46 | brett, consti, mason, Sandman, Wolffe |
|           46 |      365 | 2025-07-12 | Arrival Seven        | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.210 (0.030)    | 0 (0.000) |    14.35 | brett, consti, mason, Sandman, Wolffe |
|           45 |      368 | 2025-07-12 | Getting Info         | L   | 1.000      | -            | -                | -                | -         |   -12.54 | brett, consti, mason, Sandman, Wolffe |
|           44 |      398 | 2025-07-11 | Party Astronauts     | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.307 (0.044)    | 0 (0.000) |    13.47 | brett, consti, mason, Sandman, Wolffe |
|           43 |      536 | 2025-06-29 | Getting Info         | L   | 0.940      | -            | -                | -                | -         |   -13.13 | brett, consti, mason, Sandman, Wolffe |
|           42 |      549 | 2025-06-26 | BLUEJAYS             | W   | 0.920      | 0.333        | 0.036 (0.011)    | 0.827 (0.254)    | 0 (0.000) |    22.44 | brett, consti, mason, Sandman, Wolffe |
|           41 |      648 | 2025-06-17 | MIGHT                | W   | 0.860      | 0.333        | -                | 0.273 (0.078)    | 0 (0.000) |     9.97 | brett, consti, mason, Sandman, Wolffe |
|           40 |      679 | 2025-06-15 | Getting Info         | L   | 0.847      | -            | -                | -                | -         |   -12.03 | brett, consti, mason, Sandman, Wolffe |
|           39 |      703 | 2025-06-14 | Tsunami Esports      | W   | 0.840      | 0.333        | 0.001 (0.000)    | 0.206 (0.058)    | 0 (0.000) |     9.70 | brett, consti, mason, Sandman, Wolffe |
|           38 |      806 | 2025-06-11 | Party Astronauts     | L   | 0.820      | -            | -                | -                | -         |   -13.10 | brett, consti, mason, Sandman, Wolffe |
|           37 |      831 | 2025-06-09 | Wanted Goons         | W   | 0.807      | 0.333        | -                | 0.163 (0.044)    | 0 (0.000) |     8.17 | brett, consti, mason, Sandman, Wolffe |
|           36 |      932 | 2025-06-01 | Akimbo Esports       | W   | 0.753      | 0.303        | 0.007 (0.002)    | 0.206 (0.047)    | 0 (0.000) |     8.76 | Brett, consti, mason, Sandman, Wolffe |
|           35 |     1401 | 2025-05-07 | Legacy               | L   | 0.587      | -            | -                | -                | -         |    -0.89 | brett, consti, mason, Sandman, Seb    |
|           34 |     1434 | 2025-05-06 | BLUEJAYS             | L   | 0.581      | -            | -                | -                | -         |    -3.92 | brett, consti, mason, Sandman, Seb    |
|           33 |     1688 | 2025-04-26 | Ninjas in Pyjamas    | L   | 0.515      | -            | -                | -                | -         |    -0.28 | brett, consti, mason, Sandman, Seb    |
|           32 |     1943 | 2025-04-13 | JERSA ESPORTS        | L   | 0.427      | -            | -                | -                | -         |   -10.42 | brett, consti, mason, Sandman, Seb    |
|           31 |     2000 | 2025-04-10 | Chicken Coop Esports | L   | 0.407      | -            | -                | -                | -         |    -8.53 | brett, consti, mason, Sandman, Seb    |
|           30 |     2010 | 2025-04-09 | Akimbo Esports       | W   | 0.401      | 0.143        | 0.007 (0.000)    | -                | 0 (0.000) |     4.62 | brett, consti, mason, Sandman, Seb    |
|           29 |     2014 | 2025-04-09 | Akimbo Esports       | W   | 0.401      | 0.143        | 0.007 (0.000)    | -                | -         |     4.77 | brett, consti, mason, Sandman, Seb    |
|           28 |     2062 | 2025-04-08 | Fisher College       | L   | 0.394      | -            | -                | -                | -         |    -7.08 | brett, consti, mason, Sandman, Seb    |
|           27 |     2206 | 2025-04-02 | InControl            | W   | 0.354      | -            | -                | -                | -         |     2.80 | brett, consti, mason, Sandman, Seb    |
|           26 |     2213 | 2025-04-02 | InControl            | W   | 0.354      | -            | -                | -                | -         |     2.86 | brett, consti, mason, Sandman, Seb    |
|           25 |     2267 | 2025-04-01 | BLUEJAYS             | L   | 0.348      | -            | -                | -                | -         |    -2.30 | brett, consti, mason, Sandman, Seb    |
|           24 |     2273 | 2025-04-01 | BLUEJAYS             | L   | 0.347      | -            | -                | -                | -         |    -2.35 | brett, consti, mason, Sandman, Seb    |
|           23 |     2356 | 2025-03-29 | Mythic               | L   | 0.328      | -            | -                | -                | -         |    -8.19 | brett, consti, mason, Sandman, Seb    |
|           22 |     2362 | 2025-03-29 | Team Aether          | W   | 0.327      | -            | -                | -                | -         |     1.27 | brett, consti, mason, Sandman, Seb    |
|           21 |     2423 | 2025-03-28 | M80                  | L   | 0.320      | -            | -                | -                | -         |    -0.77 | brett, consti, mason, Sandman, Seb    |
|           20 |     2498 | 2025-03-27 | Mythic               | W   | 0.313      | -            | -                | -                | -         |     1.96 | brett, consti, mason, Sandman, Seb    |
|           19 |     2558 | 2025-03-26 | Chicken Coop Esports | W   | 0.308      | -            | -                | -                | -         |     3.40 | brett, consti, mason, Sandman, Seb    |
|           18 |     2564 | 2025-03-26 | Chicken Coop Esports | W   | 0.308      | -            | -                | -                | -         |     3.48 | brett, consti, mason, Sandman, Seb    |
|           17 |     2610 | 2025-03-25 | Arrival Seven        | L   | 0.301      | -            | -                | -                | -         |    -4.94 | brett, consti, mason, Sandman, Seb    |
|           16 |     2614 | 2025-03-25 | Arrival Seven        | W   | 0.301      | -            | -                | -                | -         |     4.63 | brett, consti, mason, Sandman, Seb    |
|           15 |     2718 | 2025-03-19 | LAG Gaming           | W   | 0.261      | -            | -                | -                | -         |     2.73 | brett, consti, mason, Sandman, Seb    |
|           14 |     2723 | 2025-03-19 | LAG Gaming           | W   | 0.261      | -            | -                | -                | -         |     2.79 | brett, consti, mason, Sandman, Seb    |
|           13 |     2760 | 2025-03-18 | Team Aether          | L   | 0.255      | -            | -                | -                | -         |    -6.00 | brett, Cyrix, mason, Sandman, Seb     |
|           12 |     2764 | 2025-03-18 | Team Aether          | W   | 0.254      | -            | -                | -                | -         |     2.04 | brett, Cyrix, mason, Sandman, Seb     |
|           11 |     3015 | 2025-03-08 | Fisher College       | L   | 0.186      | -            | -                | -                | -         |    -3.41 | brett, Cyrix, mason, Sandman, Seb     |
|           10 |     3087 | 2025-03-07 | Wildcard             | L   | 0.180      | -            | -                | -                | -         |    -1.34 | brett, Cyrix, mason, Sandman, Seb     |
|            9 |     3155 | 2025-03-06 | Marsborne            | W   | 0.174      | 0.143        | -                | 0.601 (0.015)    | -         |     3.86 | brett, Cyrix, mason, Sandman, Seb     |
|            8 |     3192 | 2025-03-05 | Akimbo Esports       | W   | 0.167      | -            | -                | -                | -         |     2.14 | brett, Cyrix, mason, Sandman, Seb     |
|            7 |     3408 | 2025-02-25 | Marsborne            | W   | 0.115      | -            | -                | -                | -         |     2.56 | brett, Cyrix, mason, Sandman, Seb     |
|            6 |     3412 | 2025-02-25 | Marsborne            | L   | 0.114      | -            | -                | -                | -         |    -1.05 | brett, Cyrix, mason, Sandman, Seb     |
|            5 |     3529 | 2025-02-19 | Legacy               | W   | 0.075      | 0.143        | 0.113 (0.001)    | -                | -         |     2.28 | brett, Cyrix, mason, Sandman, Seb     |
|            4 |     3531 | 2025-02-19 | Legacy               | W   | 0.074      | 0.143        | 0.113 (0.001)    | -                | -         |     2.27 | brett, Cyrix, mason, Sandman, Seb     |
|            3 |     3728 | 2025-02-10 | Immigrants Peek      | L   | 0.013      | -            | -                | -                | -         |    -0.34 | brett, Cyrix, mason, Sandman, Seb     |
|            2 |     3769 | 2025-02-09 | Team Aether          | W   | 0.006      | -            | -                | -                | -         |     0.05 | brett, Cyrix, mason, Sandman, Seb     |
|            1 |     3797 | 2025-02-08 | BLUEJAYS             | L   | 0.000      | -            | -                | -                | -         |    -0.00 | brett, Cyrix, mason, Sandman, Seb     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,802.64)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-30 |      0.947 | $1,000.00      | $947.13         |
| 2025-06-01 |      0.753 | $4,000.00      | $3,013.43       |
| 2025-05-11 |      0.614 | $3,000.00      | $1,842.08       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
