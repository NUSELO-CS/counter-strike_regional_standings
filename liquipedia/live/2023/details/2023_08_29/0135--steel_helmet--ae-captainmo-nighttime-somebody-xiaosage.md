### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: AE, captainMo, nighttime, somebody, xiaosaGe<br />
Global Rank: [135](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [8]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  743.8<br />
<br />
Final Rank Value (743.8) = Starting Rank Value (730.2) + Head To Head Adjustments (13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.187[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.2
- 400 + ( ( 0.171 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 730.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      364 | 2023-08-12 | ATOX        | L   | 1.000      | -            | -                | -                | -         |   -13.70 | AE, captainMo, nighttime, somebody, xiaosaGe |
|            6 |      371 | 2023-08-12 | Clutch      | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.048 (0.007)    | 0 (0.000) |     9.89 | AE, captainMo, nighttime, somebody, xiaosaGe |
|            5 |      373 | 2023-08-12 | TYLOO       | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.097 (0.014)    | 0 (0.000) |    13.23 | AE, captainMo, nighttime, somebody, xiaosaGe |
|            4 |      461 | 2023-08-10 | TYLOO       | L   | 1.000      | -            | -                | -                | -         |   -18.17 | AE, captainMo, nighttime, somebody, xiaosaGe |
|            3 |      464 | 2023-08-10 | ATOX        | W   | 1.000      | 0.143        | 0.026 (0.004)    | 0.308 (0.044)    | 0 (0.000) |    17.44 | AE, captainMo, nighttime, somebody, xiaosaGe |
|            2 |     1040 | 2023-07-10 | Newhappy    | W   | 0.865      | 0.378        | 0.011 (0.004)    | 0.142 (0.046)    | 1 (0.865) |    12.94 | AE, captainMo, nighttime, somebody, xiaosaGe |
|            1 |     1042 | 2023-07-09 | Lynn Vision | L   | 0.859      | -            | -                | -                | -         |    -8.06 | AE, captainMo, nighttime, somebody, xiaosaGe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,435.92)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-10 |      0.866 | $2,812.00      | $2,435.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
