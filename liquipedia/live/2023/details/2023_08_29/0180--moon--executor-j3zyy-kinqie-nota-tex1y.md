### Roster Details<br />
Team Name: MOON<br />
Roster: executor, j3zyy, kinqie, nota, tex1y<br />
Global Rank: [180](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [115]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  674.5<br />
<br />
Final Rank Value (674.5) = Starting Rank Value (686.2) + Head To Head Adjustments (-11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.2
- 400 + ( ( 0.148 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 686.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      704 | 2023-07-29 | Websterz  | L   | 0.994      | -            | -                | -                | -         |    -8.08 | executor, j3zyy, kinqie, nota, tex1y |
|            5 |     1566 | 2023-05-31 | PROSPECTS | L   | 0.601      | -            | -                | -                | -         |    -3.34 | executor, j3zyy, kinqie, nota, tex1y |
|            4 |     1643 | 2023-05-29 | 9 Pandas  | L   | 0.588      | -            | -                | -                | -         |    -1.47 | executor, j3zyy, kinqie, nota, tex1y |
|            3 |     2753 | 2023-04-08 | Websterz  | L   | 0.246      | -            | -                | -                | -         |    -1.51 | executor, j3zyy, kinqie, nota, tex1y |
|            2 |     2773 | 2023-04-07 | Space     | W   | 0.241      | 0.347        | 0.099 (0.008)    | 0.904 (0.075)    | 0 (0.000) |     6.43 | executor, j3zyy, kinqie, nota, tex1y |
|            1 |     2815 | 2023-04-06 | K23       | L   | 0.233      | -            | -                | -                | -         |    -3.69 | executor, j3zyy, kinqie, nota, tex1y |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,078.56)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-30 |      1.000 | $2,748.00      | $2,748.00       |
| 2023-04-09 |      0.253 | $1,307.00      | $330.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
