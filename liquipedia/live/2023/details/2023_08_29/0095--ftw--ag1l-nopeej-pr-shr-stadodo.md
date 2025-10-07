### Roster Details<br />
Team Name: FTW<br />
Roster: Ag1l, NOPEEJ, pr, Shr, stadodo<br />
Global Rank: [95](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [71]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  824.9<br />
<br />
Final Rank Value (824.9) = Starting Rank Value (834.3) + Head To Head Adjustments (-9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.198[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 834.3
- 400 + ( ( 0.225 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 834.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      597 | 2023-08-03 | los kogutos     | L   | 1.000      | -            | -                | -                | -         |   -12.51 | Ag1l, NOPEEJ, pr, Shr, stadodo          |
|           21 |      604 | 2023-08-03 | Pompa           | W   | 1.000      | 0.435        | 0.039 (0.017)    | 0.626 (0.272)    | 0 (0.000) |    22.87 | Ag1l, NOPEEJ, pr, Shr, stadodo          |
|           20 |     1153 | 2023-06-17 | Los Alpacas     | L   | 0.712      | -            | -                | -                | -         |   -14.18 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           19 |     1221 | 2023-06-11 | GTZ             | L   | 0.674      | -            | -                | -                | -         |    -8.33 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           18 |     1232 | 2023-06-11 | Skrill Ogres    | W   | 0.672      | 0.337        | 0.004 (0.001)    | 0.032 (0.007)    | 1 (0.672) |     6.60 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           17 |     1256 | 2023-06-10 | GTZ             | L   | 0.666      | -            | -                | -                | -         |    -8.53 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           16 |     1264 | 2023-06-10 | Los Alpacas     | W   | 0.665      | 0.337        | 0.012 (0.003)    | 0.156 (0.035)    | 1 (0.665) |     7.77 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           15 |     1529 | 2023-06-01 | SAW             | L   | 0.608      | -            | -                | -                | -         |    -2.08 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           14 |     1605 | 2023-05-30 | Ukraine         | L   | 0.594      | -            | -                | -                | -         |   -10.14 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           13 |     1637 | 2023-05-29 | THE FREE        | W   | 0.588      | 0.371        | 0.012 (0.003)    | 0.425 (0.093)    | 0 (0.000) |     7.37 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           12 |     1997 | 2023-05-16 | Movistar Riders | W   | 0.502      | 0.143        | 0.089 (0.006)    | 0.249 (0.018)    | 0 (0.000) |    11.07 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           11 |     2127 | 2023-05-07 | GTZ             | L   | 0.440      | -            | -                | -                | -         |    -4.93 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|           10 |     2152 | 2023-05-06 | ex-Fourteen     | W   | 0.434      | 0.307        | 0.001 (0.000)    | 0.001 (0.000)    | 1 (0.434) |     2.79 | Ag1l, DDias, NOPEEJ, snapy, stadodo     |
|            9 |     3059 | 2023-03-25 | Believe         | L   | 0.154      | -            | -                | -                | -         |    -4.22 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|            8 |     3094 | 2023-03-24 | BIG Academy     | L   | 0.147      | -            | -                | -                | -         |    -2.99 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|            7 |     3123 | 2023-03-23 | ex-Partizan     | W   | 0.141      | 0.143        | 0.002 (0.000)    | 0.075 (0.002)    | 0 (0.000) |     1.24 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|            6 |     3378 | 2023-03-16 | Astralis Talent | L   | 0.092      | -            | -                | -                | -         |    -0.74 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|            5 |     3415 | 2023-03-15 | Entropiq        | W   | 0.086      | 0.143        | 0.007 (0.000)    | 0.113 (0.001)    | 0 (0.000) |     0.86 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|            4 |     3428 | 2023-03-14 | K23             | L   | 0.081      | -            | -                | -                | -         |    -1.79 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|            3 |     3436 | 2023-03-14 | Entropiq        | W   | 0.080      | 0.143        | 0.007 (0.000)    | 0.113 (0.001)    | 0 (0.000) |     0.80 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|            2 |     3714 | 2023-03-04 | Into the Bin    | L   | 0.014      | -            | -                | -                | -         |    -0.34 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |
|            1 |     3722 | 2023-03-04 | GamerLegion     | L   | 0.013      | -            | -                | -                | -         |    -0.01 | Ag1l, arrozdoce, DDias, NOPEEJ, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,293.25)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-18 |      0.720 | $1,336.00      | $961.64         |
| 2023-06-11 |      0.674 | $2,410.00      | $1,623.16       |
| 2023-06-01 |      0.608 | $3,259.00      | $1,980.11       |
| 2023-05-07 |      0.440 | $1,655.00      | $728.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
