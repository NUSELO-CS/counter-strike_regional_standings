### Roster Details<br />
Team Name: Furious<br />
Roster: aw0kenn, elemeNt, KAISER, laser, peqexino<br />
Global Rank: [280](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [87]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  507.4<br />
<br />
Final Rank Value (507.4) = Starting Rank Value (517.5) + Head To Head Adjustments (-10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.5
- 400 + ( ( 0.061 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 517.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      516 | 2023-08-08 | UNO MILLE   | L   | 1.000      | -            | -                | -                | -         |   -12.42 | aw0kenn, elemeNt, KAISER, laser, peqexino |
|            4 |      532 | 2023-08-07 | Meta        | L   | 1.000      | -            | -                | -                | -         |    -6.24 | aw0kenn, elemeNt, KAISER, laser, peqexino |
|            3 |      555 | 2023-08-05 | Corinthians | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.552 (0.212)    | 0 (0.000) |    22.84 | aw0kenn, elemeNt, KAISER, laser, peqexino |
|            2 |      595 | 2023-08-03 | The Union   | L   | 1.000      | -            | -                | -                | -         |    -6.70 | aw0kenn, elemeNt, KAISER, laser, peqexino |
|            1 |      771 | 2023-07-23 | LRV         | L   | 0.954      | -            | -                | -                | -         |    -7.53 | alexer, aw0kenn, KAISER, laser, peqexino  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
