### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: Austin, ben1337, kmrn, ogwizard, sacrifice<br />
Global Rank: [181](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [47]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  613.1<br />
<br />
Final Rank Value (613.1) = Starting Rank Value (645.0) + Head To Head Adjustments (-31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.0
- 400 + ( ( 0.125 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 645.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1814 | 2025-07-27 | MIGHT             | L   | 0.727      | -            | -                | -                | -         |   -15.08 | Austin, ben1337, kmrn, ogwizard, sacrifice |
|           15 |     1877 | 2025-07-24 | Life's A Game     | L   | 0.708      | -            | -                | -                | -         |    -7.85 | Austin, ben1337, kmrn, ogwizard, sacrifice |
|           14 |     2128 | 2025-07-11 | Life's A Game     | L   | 0.620      | -            | -                | -                | -         |    -6.99 | Austin, ben1337, kmrn, ogwizard, sacrifice |
|           13 |     2297 | 2025-06-25 | Getting Info      | L   | 0.514      | -            | -                | -                | -         |    -6.93 | Austin, ben1337, kmrn, ogwizard, sacrifice |
|           12 |     2394 | 2025-06-17 | Wanted Goons      | W   | 0.461      | 0.333        | 0.000 (0.000)    | 0.224 (0.034)    | 0 (0.000) |     4.96 | Austin, ben1337, kmrn, ogwizard, sacrifice |
|           11 |     2428 | 2025-06-15 | MONEY CREW        | L   | 0.448      | -            | -                | -                | -         |    -6.88 | Austin, ben1337, kmrn, ogwizard, sacrifice |
|           10 |     2454 | 2025-06-14 | BOSS              | L   | 0.441      | -            | -                | -                | -         |    -5.28 | Austin, ben1337, kmrn, ogwizard, sacrifice |
|            9 |     2557 | 2025-06-11 | Life's A Game     | W   | 0.421      | 0.333        | 0.018 (0.003)    | 0.610 (0.086)    | 0 (0.000) |     8.47 | Austin, ben1337, kmrn, ogwizard, sacrifice |
|            8 |     2569 | 2025-06-10 | Nocturnal Esports | W   | 0.414      | 0.333        | 0.000 (0.000)    | 0.098 (0.013)    | 0 (0.000) |     5.13 | Austin, ben1337, kmrn, ogwizard, sacrifice |
|            7 |     3173 | 2025-05-07 | BLUEJAYS          | L   | 0.188      | -            | -                | -                | -         |    -2.67 | ben1337, d4rty, ogwizard, sacrifice, xsany |
|            6 |     3208 | 2025-05-06 | Akimbo Esports    | W   | 0.181      | 0.472        | 0.004 (0.000)    | 0.018 (0.002)    | 0 (0.000) |     2.05 | ben1337, d4rty, ogwizard, sacrifice, xsany |
|            5 |     3284 | 2025-05-03 | BLUEJAYS          | L   | 0.160      | -            | -                | -                | -         |    -2.30 | ben1337, d4rty, ogwizard, sacrifice, xsany |
|            4 |     3287 | 2025-05-03 | Getting Info      | L   | 0.160      | -            | -                | -                | -         |    -1.27 | ben1337, d4rty, ogwizard, sacrifice, xsany |
|            3 |     3291 | 2025-05-03 | BLUEJAYS          | W   | 0.159      | 0.303        | 0.004 (0.000)    | 0.045 (0.002)    | 0 (0.000) |     2.74 | ben1337, d4rty, ogwizard, sacrifice, xsany |
|            2 |     3778 | 2025-04-09 | Legacy            | W   | 0.001      | 0.413        | 0.123 (0.000)    | 0.527 (0.000)    | 0 (0.000) |     0.03 | ben1337, d4rty, ogwizard, sacrifice, xsany |
|            1 |     3782 | 2025-04-09 | Legacy            | W   | 0.001      | 0.413        | 0.123 (0.000)    | 0.527 (0.000)    | 0 (0.000) |     0.03 | ben1337, d4rty, ogwizard, sacrifice, xsany |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($642.50)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.214 | $3,000.00      | $642.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
