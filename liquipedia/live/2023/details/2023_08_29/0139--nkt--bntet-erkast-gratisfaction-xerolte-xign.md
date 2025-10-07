### Roster Details<br />
Team Name: NKT<br />
Roster: BnTeT, erkaSt, Gratisfaction, xerolte, XigN<br />
Global Rank: [139](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [9]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  740.9<br />
<br />
Final Rank Value (740.9) = Starting Rank Value (785.8) + Head To Head Adjustments (-44.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.8
- 400 + ( ( 0.199 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 785.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       31 | 2023-08-27 | GEUD        | L   | 1.000      | -            | -                | -                | -         |   -24.79 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|           11 |       40 | 2023-08-27 | TheMongolz  | L   | 1.000      | -            | -                | -                | -         |    -7.26 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|           10 |      466 | 2023-08-10 | TYLOO       | L   | 1.000      | -            | -                | -                | -         |   -20.65 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|            9 |     1032 | 2023-07-10 | Lynn Vision | L   | 0.866      | -            | -                | -                | -         |   -10.30 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|            8 |     1041 | 2023-07-09 | Newhappy    | W   | 0.860      | 0.378        | 0.011 (0.004)    | 0.142 (0.046)    | 1 (0.860) |    10.70 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|            7 |     1132 | 2023-06-18 | ATOX        | L   | 0.720      | -            | -                | -                | -         |   -11.89 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|            6 |     1157 | 2023-06-17 | ATOX        | W   | 0.712      | 0.380        | 0.026 (0.007)    | 0.308 (0.083)    | 0 (0.000) |    10.35 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|            5 |     1185 | 2023-06-15 | 5yclone     | W   | 0.698      | 0.380        | 0.037 (0.010)    | 0.362 (0.096)    | 0 (0.000) |    13.77 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|            4 |     1206 | 2023-06-13 | Wings Up    | W   | 0.685      | 0.380        | 0.008 (0.002)    | 0.136 (0.035)    | 0 (0.000) |     7.44 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|            3 |     1801 | 2023-05-25 | Newhappy    | L   | 0.559      | -            | -                | -                | -         |   -10.54 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|            2 |     1838 | 2023-05-24 | CR          | W   | 0.553      | 0.371        | 0.004 (0.001)    | 0.034 (0.007)    | 0 (0.000) |     5.24 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |
|            1 |     1884 | 2023-05-23 | 5yclone     | L   | 0.546      | -            | -                | -                | -         |    -6.89 | BnTeT, erkaSt, Gratisfaction, xerolte, XigN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,225.91)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-10 |      0.866 | $4,219.00      | $3,654.74       |
| 2023-06-18 |      0.720 | $5,628.00      | $4,049.38       |
| 2023-05-28 |      0.580 | $900.00        | $521.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
