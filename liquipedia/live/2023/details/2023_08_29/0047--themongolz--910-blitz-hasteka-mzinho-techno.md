### Roster Details<br />
Team Name: TheMongolz<br />
Roster: 910, bLitz, hasteka, mzinho, Techno<br />
Global Rank: [47](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [1]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  997.6<br />
<br />
Final Rank Value (997.6) = Starting Rank Value (999.3) + Head To Head Adjustments (-1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.395[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.439[<sup>2</sup>](#table1)

The average of these factors is 0.310<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 999.3
- 400 + ( ( 0.310 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 999.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |        3 | 2023-08-29 | Newhappy        | W   | 1.000      | 0.413        | 0.011 (0.005)    | 0.142 (0.059)    | 0 (0.000) |     5.07 | 910, bLitz, hasteka, mzinho, Techno          |
|           28 |       10 | 2023-08-28 | 5yclone         | W   | 1.000      | 0.143        | 0.037 (0.005)    | 0.362 (0.052)    | 0 (0.000) |    12.47 | 910, bLitz, hasteka, mzinho, Techno          |
|           27 |       15 | 2023-08-28 | ATOX            | W   | 1.000      | 0.143        | 0.026 (0.004)    | 0.308 (0.044)    | 0 (0.000) |     8.82 | 910, bLitz, hasteka, mzinho, Techno          |
|           26 |       30 | 2023-08-27 | GEUD            | W   | 1.000      | -            | -                | -                | -         |     2.50 | 910, bLitz, hasteka, mzinho, Techno          |
|           25 |       38 | 2023-08-27 | 5yclone         | L   | 1.000      | -            | -                | -                | -         |   -19.57 | 910, bLitz, hasteka, mzinho, Techno          |
|           24 |       40 | 2023-08-27 | NKT             | W   | 1.000      | 0.143        | 0.030 (0.004)    | 0.170 (0.024)    | -         |     7.26 | 910, bLitz, hasteka, mzinho, Techno          |
|           23 |      100 | 2023-08-25 | 5yclone         | L   | 1.000      | -            | -                | -                | -         |   -20.54 | 910, bLitz, hasteka, mzinho, Techno          |
|           22 |      121 | 2023-08-24 | ATOX            | W   | 1.000      | 0.143        | 0.026 (0.004)    | 0.308 (0.044)    | -         |     7.43 | 910, bLitz, hasteka, mzinho, Techno          |
|           21 |      130 | 2023-08-24 | Lynn Vision     | L   | 1.000      | -            | -                | -                | -         |   -19.35 | 910, bLitz, hasteka, mzinho, Techno          |
|           20 |      675 | 2023-07-30 | GamerLegion     | L   | 1.000      | -            | -                | -                | -         |    -1.66 | 910, bLitz, hasteka, mzinho, Techno          |
|           19 |      699 | 2023-07-29 | Heroic          | L   | 0.995      | -            | -                | -                | -         |    -0.27 | 910, bLitz, hasteka, mzinho, Techno          |
|           18 |      724 | 2023-07-28 | FURIA           | W   | 0.986      | 0.143        | 0.108 (0.015)    | 0.144 (0.020)    | 1 (0.986) |    11.73 | 910, bLitz, hasteka, mzinho, Techno          |
|           17 |      737 | 2023-07-27 | Into the Breach | W   | 0.979      | 0.143        | 0.169 (0.024)    | 0.530 (0.074)    | 1 (0.979) |    21.80 | 910, bLitz, hasteka, mzinho, Techno          |
|           16 |      750 | 2023-07-26 | MOUZ            | L   | 0.972      | -            | -                | -                | -         |    -2.36 | 910, bLitz, hasteka, mzinho, Techno          |
|           15 |     1767 | 2023-05-26 | Newhappy        | L   | 0.566      | -            | -                | -                | -         |   -14.65 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|           14 |     1797 | 2023-05-25 | Wings Up        | W   | 0.559      | 0.371        | 0.008 (0.002)    | 0.136 (0.028)    | -         |     2.38 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|           13 |     1841 | 2023-05-24 | 5yclone         | L   | 0.552      | -            | -                | -                | -         |   -11.98 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|           12 |     1878 | 2023-05-23 | CR              | W   | 0.546      | -            | -                | -                | -         |     1.88 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|           11 |     2077 | 2023-05-10 | Monte           | L   | 0.458      | -            | -                | -                | -         |    -1.16 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|           10 |     2094 | 2023-05-09 | Grayhound       | L   | 0.451      | -            | -                | -                | -         |    -7.88 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|            9 |     2102 | 2023-05-08 | GamerLegion     | W   | 0.447      | 0.143        | 0.556 (0.036)    | 0.332 (0.021)    | 1 (0.447) |    13.41 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|            8 |     2116 | 2023-05-08 | G2              | L   | 0.445      | -            | -                | -                | -         |    -0.06 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|            7 |     2495 | 2023-04-18 | Heroic          | L   | 0.315      | -            | -                | -                | -         |    -0.09 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|            6 |     2514 | 2023-04-17 | Imperial        | W   | 0.308      | 0.624        | 0.141 (0.027)    | 0.257 (0.049)    | 1 (0.308) |     5.59 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|            5 |     2527 | 2023-04-17 | Natus Vincere   | L   | 0.306      | -            | -                | -                | -         |    -3.44 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|            4 |     2730 | 2023-04-09 | 5yclone         | W   | 0.253      | -            | -                | -                | 1 (0.253) |     2.50 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|            3 |     2739 | 2023-04-09 | Grayhound       | L   | 0.251      | -            | -                | -                | -         |    -4.57 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|            2 |     2782 | 2023-04-07 | 5yclone         | W   | 0.239      | -            | -                | -                | 1 (0.239) |     2.35 | Annihilation, Bart4k, bLitz, hasteka, Techno |
|            1 |     2828 | 2023-04-06 | Unluko5         | W   | 0.231      | -            | -                | -                | 1 (0.231) |     0.62 | Annihilation, Bart4k, bLitz, hasteka, Techno |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,027.34)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-06 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-05-28 |      0.580 | $2,800.00      | $1,623.36       |
| 2023-05-11 |      0.467 | $10,000.00     | $4,667.89       |
| 2023-04-23 |      0.347 | $5,000.00      | $1,736.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
