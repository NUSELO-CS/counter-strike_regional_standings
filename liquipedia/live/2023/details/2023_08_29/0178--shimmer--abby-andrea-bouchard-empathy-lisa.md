### Roster Details<br />
Team Name: Shimmer<br />
Roster: abby, Andrea, Bouchard, empathy, lisa<br />
Global Rank: [178](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [52]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  678.3<br />
<br />
Final Rank Value (678.3) = Starting Rank Value (684.7) + Head To Head Adjustments (-6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.7
- 400 + ( ( 0.147 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 684.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      301 | 2023-08-13 | FlyQuest RED   | L   | 1.000      | -            | -                | -                | -         |   -11.07 | abby, Andrea, Bouchard, empathy, lisa |
|           14 |     1028 | 2023-07-10 | Rocket         | L   | 0.868      | -            | -                | -                | -         |   -12.46 | abby, empathy, lisa, Lx, vanessa      |
|           13 |     1481 | 2023-06-02 | FlyQuest RED   | L   | 0.616      | -            | -                | -                | -         |    -7.46 | abby, empathy, lisa, Lx, vanessa      |
|           12 |     1493 | 2023-06-02 | Nigma Galaxy   | L   | 0.614      | -            | -                | -                | -         |    -4.52 | abby, empathy, lisa, Lx, vanessa      |
|           11 |     1672 | 2023-05-28 | Saints         | W   | 0.583      | 0.250        | 0.002 (0.000)    | 0.011 (0.002)    | 0 (0.000) |     6.61 | abby, empathy, lisa, Lx, vanessa      |
|           10 |     2121 | 2023-05-07 | FlyQuest RED   | W   | 0.442      | 0.250        | 0.036 (0.004)    | 0.163 (0.018)    | 0 (0.000) |     8.98 | abby, empathy, lisa, Lx, vanessa      |
|            9 |     2547 | 2023-04-15 | Detonate SparX | W   | 0.296      | 0.328        | 0.005 (0.000)    | 0.053 (0.005)    | 0 (0.000) |     4.06 | abby, empathy, lisa, Lx, vanessa      |
|            8 |     2645 | 2023-04-12 | Saints         | W   | 0.276      | 0.328        | 0.002 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     3.38 | abby, empathy, lisa, Lx, vanessa      |
|            7 |     2724 | 2023-04-09 | Detonate SparX | W   | 0.256      | 0.250        | 0.005 (0.000)    | 0.053 (0.003)    | 0 (0.000) |     3.58 | abby, empathy, lisa, Lx, vanessa      |
|            6 |     2829 | 2023-04-05 | FlyQuest RED   | L   | 0.229      | -            | -                | -                | -         |    -2.50 | abby, empathy, lisa, Lx, vanessa      |
|            5 |     2904 | 2023-03-30 | byte           | W   | 0.189      | 0.328        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.67 | abby, empathy, lisa, Lx, vanessa      |
|            4 |     3029 | 2023-03-26 | Detonate SparX | W   | 0.162      | 0.250        | 0.005 (0.000)    | 0.053 (0.002)    | 0 (0.000) |     2.26 | abby, empathy, lisa, Lx, vanessa      |
|            3 |     3158 | 2023-03-22 | Saints         | W   | 0.136      | 0.328        | 0.002 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     1.71 | abby, empathy, lisa, Lx, vanessa      |
|            2 |     3343 | 2023-03-16 | FlyQuest RED   | L   | 0.096      | -            | -                | -                | -         |    -1.04 | abby, empathy, lisa, Lx, vanessa      |
|            1 |     3596 | 2023-03-08 | byte           | W   | 0.043      | 0.328        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.38 | abby, empathy, lisa, Lx, vanessa      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,844.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-13 |      1.000 | $250.00        | $250.00         |
| 2023-06-04 |      0.628 | $4,000.00      | $2,511.91       |
| 2023-05-28 |      0.583 | $750.00        | $437.04         |
| 2023-05-07 |      0.442 | $750.00        | $331.84         |
| 2023-04-09 |      0.256 | $750.00        | $191.63         |
| 2023-03-26 |      0.162 | $750.00        | $121.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
