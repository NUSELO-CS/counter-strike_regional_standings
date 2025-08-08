### Roster Details<br />
Team Name: NuTorious<br />
Roster: Jr24racing, looke, Msaia, nova, Toasty<br />
Global Rank: [246](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [84]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  456.4<br />
<br />
Final Rank Value (456.4) = Starting Rank Value (469.2) + Head To Head Adjustments (-12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.145[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.036<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 469.2
- 400 + ( ( 0.036 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 469.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      225 | 2025-07-18 | InControl        | L   | 1.000      | -            | -                | -                | -         |   -12.25 | Jr24racing, looke, Msaia, nova, Toasty   |
|            5 |      227 | 2025-07-18 | BLUEJAYS         | L   | 1.000      | -            | -                | -                | -         |    -2.02 | Jr24racing, looke, Msaia, nova, Toasty   |
|            4 |     3084 | 2025-03-07 | Mythic           | L   | 0.180      | -            | -                | -                | -         |    -2.65 | icarus, Jr24racing, looke, Msaia, Toasty |
|            3 |     3091 | 2025-03-07 | Regain           | W   | 0.180      | 0.143        | 0.001 (0.000)    | 0.041 (0.001)    | 0 (0.000) |     3.16 | icarus, Jr24racing, looke, Msaia, Toasty |
|            2 |     3161 | 2025-03-06 | Seoul            | W   | 0.173      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.20 | icarus, Jr24racing, looke, Msaia, Toasty |
|            1 |     3190 | 2025-03-05 | Party Astronauts | L   | 0.168      | -            | -                | -                | -         |    -1.17 | icarus, Jr24racing, looke, Msaia, Toasty |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
