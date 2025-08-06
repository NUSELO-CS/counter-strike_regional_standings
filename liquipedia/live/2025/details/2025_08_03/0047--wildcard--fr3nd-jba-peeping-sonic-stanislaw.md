### Roster Details<br />
Team Name: Wildcard<br />
Roster: fr3nd, JBa, Peeping, Sonic, stanislaw<br />
Global Rank: [47](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_03.md)<br />
Regional Rank: [10]( ../../standings_americas_2025_08_03.md)<br />
<br />
Final Rank Value:  1032.1<br />
<br />
Final Rank Value (1032.1) = Starting Rank Value (996.1) + Head To Head Adjustments (36.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.458[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.244[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.412[<sup>2</sup>](#table1)

The average of these factors is 0.315<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 996.1
- 400 + ( ( 0.315 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 996.1


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
|           38 |       15 | 2025-08-01 | M80                  | L   | 1.000      | -            | -                | -                | -         |    -8.54 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           37 |       24 | 2025-08-01 | Marsborne            | L   | 1.000      | -            | -                | -                | -         |   -21.02 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           36 |       33 | 2025-07-31 | NRG                  | W   | 1.000      | 0.384        | 0.059 (0.023)    | 0.637 (0.245)    | 0 (0.000) |    20.31 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           35 |       36 | 2025-07-30 | LAG Gaming           | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.429 (0.165)    | 0 (0.000) |     5.35 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           34 |       59 | 2025-07-27 | BLUEJAYS             | L   | 1.000      | -            | -                | -                | -         |   -19.01 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           33 |       82 | 2025-07-26 | MIGHT                | W   | 1.000      | 0.303        | -                | 0.279 (0.084)    | 0 (0.000) |     2.35 | fr3nd, JBa, Peeping, Sonic, stanislaw |
|           32 |      255 | 2025-07-16 | FURIA                | L   | 1.000      | -            | -                | -                | -         |    -0.84 | fr3nd, JBa, Peeping, Sonic, susp      |
|           31 |      276 | 2025-07-15 | GamerLegion          | L   | 1.000      | -            | -                | -                | -         |    -1.38 | fr3nd, JBa, Peeping, Sonic, susp      |
|           30 |      839 | 2025-06-06 | Legacy               | L   | 0.806      | -            | -                | -                | -         |    -5.04 | JBa, phzy, Sonic, stanislaw, susp     |
|           29 |      846 | 2025-06-05 | BetBoom Team         | L   | 0.799      | -            | -                | -                | -         |    -4.58 | JBa, phzy, Sonic, stanislaw, susp     |
|           28 |      860 | 2025-06-04 | B8                   | L   | 0.792      | -            | -                | -                | -         |    -4.19 | JBa, phzy, Sonic, stanislaw, susp     |
|           27 |      875 | 2025-06-03 | Lynn Vision Gaming   | W   | 0.787      | 0.624        | 0.275 (0.135)    | 0.639 (0.314)    | 1 (0.787) |    23.49 | JBa, phzy, Sonic, stanislaw, susp     |
|           26 |      879 | 2025-06-03 | Metizport            | W   | 0.786      | 0.624        | 0.027 (0.013)    | 0.487 (0.239)    | 1 (0.786) |     9.28 | JBa, phzy, Sonic, stanislaw, susp     |
|           25 |     1149 | 2025-05-15 | Legacy               | L   | 0.661      | -            | -                | -                | -         |    -3.80 | JBa, phzy, Sonic, stanislaw, susp     |
|           24 |     1171 | 2025-05-14 | Anything else        | W   | 0.654      | -            | -                | -                | 0 (0.000) |     2.20 | JBa, phzy, Sonic, stanislaw, susp     |
|           23 |     1503 | 2025-05-02 | Team Spirit          | L   | 0.572      | -            | -                | -                | -         |    -0.11 | JBa, phzy, Sonic, stanislaw, susp     |
|           22 |     1537 | 2025-05-01 | PaiN Gaming          | W   | 0.563      | 0.687        | 0.299 (0.116)    | 0.368 (0.142)    | 1 (0.563) |    16.99 | JBa, phzy, Sonic, stanislaw, susp     |
|           21 |     1553 | 2025-04-30 | Team Vitality        | L   | 0.558      | -            | -                | -                | -         |    -0.06 | JBa, phzy, Sonic, stanislaw, susp     |
|           20 |     1668 | 2025-04-26 | HEROIC               | L   | 0.529      | -            | -                | -                | -         |    -0.75 | JBa, phzy, Sonic, stanislaw, susp     |
|           19 |     1681 | 2025-04-25 | 500                  | W   | 0.524      | 0.548        | 0.025 (0.007)    | 0.328 (0.094)    | 0 (0.000) |     4.49 | JBa, phzy, Sonic, stanislaw, susp     |
|           18 |     1696 | 2025-04-24 | BetBoom Team         | L   | 0.518      | -            | -                | -                | -         |    -2.01 | JBa, phzy, Sonic, stanislaw, susp     |
|           17 |     1830 | 2025-04-16 | NRG                  | W   | 0.467      | 0.147        | 0.059 (0.004)    | -                | 0 (0.000) |     9.89 | JBa, phzy, Sonic, stanislaw, susp     |
|           16 |     1857 | 2025-04-15 | Marsborne            | W   | 0.460      | -            | -                | -                | -         |     4.91 | JBa, phzy, Sonic, stanislaw, susp     |
|           15 |     2258 | 2025-03-31 | M80                  | L   | 0.360      | -            | -                | -                | -         |    -2.60 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           14 |     2270 | 2025-03-30 | MIGHT                | W   | 0.354      | 0.769        | -                | 0.279 (0.076)    | -         |     1.55 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           13 |     2312 | 2025-03-29 | MIGHT                | W   | 0.347      | 0.769        | -                | 0.279 (0.074)    | -         |     1.51 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           12 |     2373 | 2025-03-28 | Chicken Coop Esports | W   | 0.341      | -            | -                | -                | -         |     0.89 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           11 |     2456 | 2025-03-27 | Daaku                | W   | 0.334      | -            | -                | -                | -         |     0.65 | JBa, Sonic, stanislaw, Stewie2K, susp |
|           10 |     2860 | 2025-03-10 | Complexity           | L   | 0.220      | -            | -                | -                | -         |    -0.86 | JBa, phzy, Sonic, stanislaw, susp     |
|            9 |     2900 | 2025-03-09 | BLUEJAYS             | W   | 0.214      | 0.769        | 0.036 (0.006)    | 0.823 (0.135)    | -         |     3.13 | JBa, phzy, Sonic, stanislaw, susp     |
|            8 |     2960 | 2025-03-08 | Fisher College       | W   | 0.207      | -            | -                | -                | -         |     1.04 | JBa, phzy, Sonic, stanislaw, susp     |
|            7 |     3042 | 2025-03-07 | LAG Gaming           | W   | 0.200      | 0.769        | 0.014 (0.002)    | -                | -         |     1.28 | JBa, phzy, Sonic, stanislaw, susp     |
|            6 |     3113 | 2025-03-06 | MCS Gaming           | W   | 0.193      | -            | -                | -                | -         |     0.34 | JBa, phzy, Sonic, stanislaw, susp     |
|            5 |     3170 | 2025-03-05 | Davai Napadai        | W   | 0.186      | -            | -                | -                | -         |     0.20 | JBa, phzy, Sonic, stanislaw, susp     |
|            4 |     3545 | 2025-02-17 | BIG                  | L   | 0.077      | -            | -                | -                | -         |    -0.57 | JBa, phzy, Sonic, stanislaw, susp     |
|            3 |     3559 | 2025-02-16 | Virtus.pro           | L   | 0.070      | -            | -                | -                | -         |    -0.09 | JBa, phzy, Sonic, stanislaw, susp     |
|            2 |     3579 | 2025-02-15 | The MongolZ          | L   | 0.063      | -            | -                | -                | -         |    -0.02 | JBa, phzy, Sonic, stanislaw, susp     |
|            1 |     3601 | 2025-02-14 | MIBR                 | W   | 0.058      | 1.000        | 0.196 (0.011)    | -                | 1 (0.058) |     1.58 | JBa, phzy, Sonic, stanislaw, susp     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($28,723.58)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-01 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-07-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-05-04 |      0.584 | $25,000.00     | $14,611.11      |
| 2025-04-27 |      0.538 | $3,500.00      | $1,884.17       |
| 2025-02-23 |      0.119 | $18,750.00     | $2,228.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
