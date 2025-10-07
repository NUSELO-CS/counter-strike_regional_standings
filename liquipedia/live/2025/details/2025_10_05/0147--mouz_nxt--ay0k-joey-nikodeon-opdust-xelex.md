### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: ay0k, Joey, Nikodeon, opdust, xelex<br />
Global Rank: [147](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  698.9<br />
<br />
Final Rank Value (698.9) = Starting Rank Value (666.0) + Head To Head Adjustments (32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.0
- 400 + ( ( 0.136 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 666.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       83 | 2025-09-30 | BIG           | L   | 1.000      | -            | -                | -                | -         |    -1.18 | ay0k, Joey, Nikodeon, opdust, xelex |
|            6 |       89 | 2025-09-30 | AaB esport    | W   | 1.000      | 0.323        | 0.002 (0.001)    | 0.284 (0.092)    | 1 (1.000) |    20.35 | ay0k, Joey, Nikodeon, opdust, xelex |
|            5 |       93 | 2025-09-30 | EYEBALLERS    | L   | 1.000      | -            | -                | -                | -         |    -2.54 | ay0k, Joey, Nikodeon, opdust, xelex |
|            4 |      102 | 2025-09-30 | OG            | W   | 1.000      | 0.323        | 0.132 (0.043)    | 1.000 (0.323)    | 1 (1.000) |    31.04 | ay0k, Joey, Nikodeon, opdust, xelex |
|            3 |      241 | 2025-09-26 | ESC Gaming    | L   | 1.000      | -            | -                | -                | -         |    -1.05 | ay0k, Joey, Nikodeon, opdust, xelex |
|            2 |      270 | 2025-09-26 | Wildcard      | L   | 1.000      | -            | -                | -                | -         |    -1.73 | ay0k, Joey, Nikodeon, opdust, xelex |
|            1 |     1530 | 2025-08-12 | UNiTY esports | L   | 0.830      | -            | -                | -                | -         |   -12.01 | ay0k, Joey, Nikodeon, opdust, xelex |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
