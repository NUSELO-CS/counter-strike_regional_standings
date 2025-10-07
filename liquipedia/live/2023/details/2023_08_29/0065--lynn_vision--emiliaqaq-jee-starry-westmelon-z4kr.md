### Roster Details<br />
Team Name: Lynn Vision<br />
Roster: EmiliaQAQ, Jee, Starry, Westmelon, z4kr<br />
Global Rank: [65](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [4]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  930.9<br />
<br />
Final Rank Value (930.9) = Starting Rank Value (885.3) + Head To Head Adjustments (45.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.455[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.198[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.399[<sup>2</sup>](#table1)

The average of these factors is 0.251<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 885.3
- 400 + ( ( 0.251 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 885.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |        2 | 2023-08-29 | TYLOO        | W   | 1.000      | 0.413        | 0.004 (0.002)    | 0.097 (0.040)    | 0 (0.000) |     5.38 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           25 |       13 | 2023-08-28 | 5yclone      | L   | 1.000      | -            | -                | -                | -         |   -16.87 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           24 |       62 | 2023-08-26 | Eruption     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.48 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           23 |       69 | 2023-08-26 | ATOX         | L   | 1.000      | -            | -                | -                | -         |   -22.04 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           22 |       73 | 2023-08-26 | TYLOO        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.30 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           21 |       88 | 2023-08-25 | 5yclone      | W   | 1.000      | 0.143        | 0.037 (0.005)    | 0.362 (0.052)    | 0 (0.000) |    12.84 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           20 |      126 | 2023-08-24 | 5yclone      | W   | 1.000      | 0.143        | 0.037 (0.005)    | 0.362 (0.052)    | 0 (0.000) |    13.07 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           19 |      130 | 2023-08-24 | TheMongolz   | W   | 1.000      | 0.143        | 0.066 (0.009)    | 0.439 (0.063)    | 0 (0.000) |    19.35 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           18 |      452 | 2023-08-10 | TYLOO        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.30 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           17 |      462 | 2023-08-10 | Wings Up     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.52 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           16 |      467 | 2023-08-10 | Eruption     | W   | 1.000      | -            | -                | -                | -         |     2.96 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|           15 |     1032 | 2023-07-10 | NKT          | W   | 0.866      | 0.378        | 0.030 (0.010)    | 0.170 (0.056)    | 1 (0.866) |    10.30 | expro, Jee, Starry, Westmelon, z4kr       |
|           14 |     1042 | 2023-07-09 | Steel Helmet | W   | 0.859      | 0.378        | 0.009 (0.003)    | 0.187 (0.061)    | 1 (0.859) |     8.06 | expro, Jee, Starry, Westmelon, z4kr       |
|           13 |     1150 | 2023-06-17 | 5yclone      | L   | 0.713      | -            | -                | -                | -         |   -11.42 | expro, Jee, Starry, Westmelon, z4kr       |
|           12 |     1171 | 2023-06-16 | Wings Up     | W   | 0.705      | 0.380        | 0.008 (0.002)    | 0.136 (0.036)    | -         |     4.96 | expro, Jee, Starry, Westmelon, z4kr       |
|           11 |     1183 | 2023-06-15 | ATOX         | L   | 0.699      | -            | -                | -                | -         |   -14.79 | expro, Jee, Starry, Westmelon, z4kr       |
|           10 |     1199 | 2023-06-14 | JiJieHao     | W   | 0.691      | -            | -                | -                | -         |     2.47 | expro, Jee, Starry, Westmelon, z4kr       |
|            9 |     1685 | 2023-05-28 | 5yclone      | L   | 0.580      | -            | -                | -                | -         |    -9.87 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|            8 |     1795 | 2023-05-25 | 5yclone      | W   | 0.560      | 0.371        | 0.037 (0.008)    | 0.362 (0.075)    | -         |     8.10 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|            7 |     1840 | 2023-05-24 | Newhappy     | W   | 0.552      | 0.371        | 0.011 (0.002)    | 0.142 (0.029)    | -         |     4.59 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|            6 |     1876 | 2023-05-23 | Wings Up     | W   | 0.546      | 0.371        | 0.008 (0.002)    | 0.136 (0.028)    | -         |     3.75 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|            5 |     3040 | 2023-03-26 | Wings Up     | W   | 0.159      | -            | -                | -                | -         |     1.11 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|            4 |     3148 | 2023-03-23 | IHC          | W   | 0.139      | -            | -                | -                | -         |     0.82 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|            3 |     3179 | 2023-03-22 | Wings Up     | W   | 0.133      | -            | -                | -                | -         |     0.91 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|            2 |     3218 | 2023-03-21 | FyR          | W   | 0.126      | -            | -                | -                | -         |     0.42 | EmiliaQAQ, Jee, Starry, Westmelon, z4kr   |
|            1 |     3760 | 2023-03-03 | ATOX         | L   | 0.005      | -            | -                | -                | -         |    -0.11 | EmiliaQAQ, Starry, V4D1M, Westmelon, z4kr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,324.83)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-10 |      0.866 | $14,016.00     | $12,141.46      |
| 2023-06-18 |      0.720 | $1,406.00      | $1,011.62       |
| 2023-05-28 |      0.580 | $5,000.00      | $2,898.86       |
| 2023-03-26 |      0.159 | $8,000.00      | $1,272.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
