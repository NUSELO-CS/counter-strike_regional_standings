### Roster Details<br />
Team Name: ex-BLUEJAYS<br />
Roster: alpha, dan1, jayzaR, kade0, Necrogenes1s<br />
Global Rank: [293](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [174]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  466.8<br />
<br />
Final Rank Value (466.8) = Starting Rank Value (466.6) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.138[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.034<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 466.6
- 400 + ( ( 0.034 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 466.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3461 | 2023-03-13 | Looking4Org  | L   | 0.073      | -            | -                | -                | -         |    -0.15 | alpha, dan1, jayzaR, kade0, Necrogenes1s    |
|            5 |     3525 | 2023-03-11 | LDLC         | L   | 0.059      | -            | -                | -                | -         |    -0.45 | alpha, dan1, Get_Jeka, jayzaR, Necrogenes1s |
|            4 |     3593 | 2023-03-09 | EYEBALLERS   | L   | 0.045      | -            | -                | -                | -         |    -0.13 | alpha, dan1, jayzaR, Necrogenes1s, rafftu   |
|            3 |     3646 | 2023-03-07 | Into the Bin | W   | 0.033      | 0.143        | 0.001 (0.000)    | 0.032 (0.000)    | 0 (0.000) |     0.72 | alpha, dan1, jayzaR, Necrogenes1s, rafftu   |
|            2 |     3739 | 2023-03-03 | MASONIC      | W   | 0.008      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.13 | alpha, dan1, jayzaR, Necrogenes1s, xicoz    |
|            1 |     3746 | 2023-03-03 | Dripmen      | W   | 0.007      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.09 | alpha, dan1, jayzaR, Necrogenes1s, xicoz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
