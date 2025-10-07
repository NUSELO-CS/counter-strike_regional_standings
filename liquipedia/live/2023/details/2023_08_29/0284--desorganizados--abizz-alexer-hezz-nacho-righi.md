### Roster Details<br />
Team Name: Desorganizados<br />
Roster: abizz, alexer, Hezz, nacho, righi<br />
Global Rank: [284](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [88]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  495.7<br />
<br />
Final Rank Value (495.7) = Starting Rank Value (492.6) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.6
- 400 + ( ( 0.048 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 492.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2854 | 2023-04-02 | RED Canids | L   | 0.207      | -            | -                | -                | -         |    -1.40 | abizz, alexer, Hezz, nacho, righi |
|            6 |     2883 | 2023-03-31 | W7M        | W   | 0.196      | 0.384        | 0.006 (0.000)    | 0.513 (0.039)    | 0 (0.000) |     4.94 | abizz, alexer, Hezz, nacho, righi |
|            5 |     2947 | 2023-03-29 | FUSION     | W   | 0.180      | 0.384        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.01 | abizz, alexer, Hezz, nacho, righi |
|            4 |     3000 | 2023-03-27 | WINDINGO   | L   | 0.169      | -            | -                | -                | -         |    -1.15 | abizz, alexer, Hezz, nacho, righi |
|            3 |     3034 | 2023-03-26 | Case       | L   | 0.160      | -            | -                | -                | -         |    -0.78 | abizz, alexer, Hezz, nacho, righi |
|            2 |     3352 | 2023-03-16 | Furious    | L   | 0.095      | -            | -                | -                | -         |    -0.91 | abizz, alexer, Hezz, nacho, righi |
|            1 |     3392 | 2023-03-15 | ARCTIC     | L   | 0.088      | -            | -                | -                | -         |    -0.59 | abizz, alexer, Hezz, nacho, righi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
