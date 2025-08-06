### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, huncho, Panic, REKMEISTER, Sharpie<br />
Global Rank: [254](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_03.md)<br />
Regional Rank: [86]( ../../standings_americas_2025_08_03.md)<br />
<br />
Final Rank Value:  410.5<br />
<br />
Final Rank Value (410.5) = Starting Rank Value (408.4) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.004<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 408.4
- 400 + ( ( 0.004 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 408.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3045 | 2025-03-07 | Immigrants Peek | L   | 0.200      | -            | -                | -                | -         |    -2.57 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            4 |     3106 | 2025-03-06 | Complexity      | L   | 0.194      | -            | -                | -                | -         |    -0.03 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            3 |     3158 | 2025-03-05 | Worms           | W   | 0.186      | 0.143        | 0.000 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     2.85 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            2 |     3243 | 2025-03-01 | Getting Info    | L   | 0.161      | -            | -                | -                | -         |    -0.69 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            1 |     3247 | 2025-03-01 | Graveyard Shift | W   | 0.160      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.160) |     2.46 | Crisp, huncho, Panic, REKMEISTER, Sharpie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
