### Roster Details<br />
Team Name: Eternal Fire Academy<br />
Roster: cyber, EMSTAR, jottAAA, TR0JN, Wicadia<br />
Global Rank: [283](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [169]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  496.5<br />
<br />
Final Rank Value (496.5) = Starting Rank Value (495.5) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.005[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.5
- 400 + ( ( 0.049 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 495.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2465 | 2023-04-20 | 9 Pandas        | L   | 0.325      | -            | -                | -                | -         |    -0.30 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|            4 |     3486 | 2023-03-12 | BIG Academy     | L   | 0.067      | -            | -                | -                | -         |    -0.47 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|            3 |     3513 | 2023-03-11 | Anonymo         | W   | 0.060      | 0.371        | 0.035 (0.001)    | 0.712 (0.016)    | 0 (0.000) |     1.71 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|            2 |     3539 | 2023-03-10 | Boston crab     | L   | 0.054      | -            | -                | -                | -         |    -0.49 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |
|            1 |     3633 | 2023-03-07 | Looking For Org | W   | 0.034      | 0.371        | 0.000 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     0.59 | cyber, EMSTAR, jottAAA, TR0JN, Wicadia |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
