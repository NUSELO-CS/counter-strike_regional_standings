### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, GooseBreeder, jaro, Kaoday, madss<br />
Global Rank: [105](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [24]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  798.7<br />
<br />
Final Rank Value (798.7) = Starting Rank Value (799.8) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.142[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.163[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 799.8
- 400 + ( ( 0.207 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 799.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      301 | 2023-08-13 | Shimmer           | W   | 1.000      | 0.250        | 0.014 (0.004)    | 0.073 (0.018)    | 0 (0.000) |    11.07 | BiBiAhn, GooseBreeder, jaro, Kaoday, madss     |
|           15 |      667 | 2023-07-30 | FA WHITE          | W   | 1.000      | 0.250        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.75 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|           14 |      993 | 2023-07-11 | Badass            | L   | 0.875      | -            | -                | -                | -         |   -15.62 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|           13 |     1437 | 2023-06-04 | NAVI Javelins     | L   | 0.627      | -            | -                | -                | -         |    -7.34 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|           12 |     1467 | 2023-06-03 | 9 Pandas Fearless | W   | 0.621      | 0.524        | 0.021 (0.007)    | 0.158 (0.051)    | 1 (0.621) |     8.63 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|           11 |     1481 | 2023-06-02 | Shimmer           | W   | 0.616      | 0.524        | 0.014 (0.005)    | 0.073 (0.024)    | 1 (0.616) |     7.46 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|           10 |     1499 | 2023-06-02 | 9 Pandas Fearless | L   | 0.614      | -            | -                | -                | -         |   -10.71 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            9 |     2121 | 2023-05-07 | Shimmer           | L   | 0.442      | -            | -                | -                | -         |    -8.98 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            8 |     2563 | 2023-04-15 | EG Gold           | W   | 0.295      | 0.328        | 0.002 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     2.51 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            7 |     2647 | 2023-04-12 | byte              | W   | 0.276      | 0.328        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.43 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            6 |     2829 | 2023-04-05 | Shimmer           | W   | 0.229      | 0.328        | 0.014 (0.001)    | 0.073 (0.005)    | 0 (0.000) |     2.50 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            5 |     2936 | 2023-03-29 | Saints            | W   | 0.182      | 0.328        | 0.002 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     1.47 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            4 |     3108 | 2023-03-23 | byte              | W   | 0.143      | 0.328        | 0.001 (0.000)    | -                | 0 (0.000) |     0.78 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            3 |     3235 | 2023-03-20 | Wildcard          | L   | 0.122      | -            | -                | -                | -         |    -1.50 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            2 |     3343 | 2023-03-16 | Shimmer           | W   | 0.096      | 0.328        | 0.014 (0.000)    | 0.073 (0.002)    | 0 (0.000) |     1.04 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |
|            1 |     3561 | 2023-03-09 | Saints            | W   | 0.049      | 0.328        | -                | 0.011 (0.000)    | -         |     0.40 | BiBiAhn, GooseBreeder, Kaoday, madss, uhKelsie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,774.31)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-13 |      1.000 | $750.00        | $750.00         |
| 2023-07-30 |      1.000 | $750.00        | $750.00         |
| 2023-06-04 |      0.628 | $13,000.00     | $8,163.70       |
| 2023-05-07 |      0.442 | $250.00        | $110.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
