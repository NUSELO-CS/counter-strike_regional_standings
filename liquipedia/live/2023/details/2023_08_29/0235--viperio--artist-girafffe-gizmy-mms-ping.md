### Roster Details<br />
Team Name: Viperio<br />
Roster: arTisT, Girafffe, Gizmy, MMS, Ping<br />
Global Rank: [235](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [142]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  602.7<br />
<br />
Final Rank Value (602.7) = Starting Rank Value (606.8) + Head To Head Adjustments (-4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 606.8
- 400 + ( ( 0.107 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 606.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2962 | 2023-03-29 | ENCE Academy | L   | 0.178      | -            | -                | -                | -         |    -0.90 | arTisT, Girafffe, Gizmy, MMS, Ping |
|            4 |     3182 | 2023-03-22 | K23          | L   | 0.132      | -            | -                | -                | -         |    -1.64 | arTisT, Extinct, Gizmy, MMS, Ping  |
|            3 |     3204 | 2023-03-21 | ex-Partizan  | L   | 0.128      | -            | -                | -                | -         |    -1.71 | arTisT, Girafffe, Gizmy, MMS, Ping |
|            2 |     3426 | 2023-03-14 | BIG Academy  | L   | 0.081      | -            | -                | -                | -         |    -0.89 | arTisT, Girafffe, Gizmy, MMS, Ping |
|            1 |     3566 | 2023-03-09 | ex-Coalesce  | W   | 0.048      | 0.371        | 0.012 (0.000)    | 0.290 (0.005)    | 0 (0.000) |     1.03 | arTisT, Girafffe, Gizmy, MMS, Ping |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($277.64)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-30 |      0.185 | $1,500.00      | $277.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
