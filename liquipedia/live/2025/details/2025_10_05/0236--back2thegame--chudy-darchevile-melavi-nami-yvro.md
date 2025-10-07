### Roster Details<br />
Team Name: Back2TheGame<br />
Roster: chudy, darchevile, Melavi, Nami, yvro<br />
Global Rank: [236](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [128]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  463.7<br />
<br />
Final Rank Value (463.7) = Starting Rank Value (482.4) + Head To Head Adjustments (-18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 482.4
- 400 + ( ( 0.042 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 482.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      647 | 2025-09-12 | Wildcard Academy | L   | 1.000      | -            | -                | -                | -         |   -13.82 | chudy, darchevile, Melavi, Nami, yvro   |
|            4 |     2214 | 2025-07-08 | NOVAQ            | L   | 0.598      | -            | -                | -                | -         |    -8.04 | AdrieN, chudy, darchevile, Melavi, Nami |
|            3 |     2236 | 2025-07-05 | Fisher College   | W   | 0.578      | 0.483        | 0.000 (0.000)    | 0.054 (0.015)    | 0 (0.000) |    10.92 | AdrieN, chudy, darchevile, Melavi, Nami |
|            2 |     2243 | 2025-07-04 | QMISTRY          | L   | 0.570      | -            | -                | -                | -         |    -4.25 | AdrieN, chudy, darchevile, Melavi, Nami |
|            1 |     2264 | 2025-07-01 | Marius           | L   | 0.551      | -            | -                | -                | -         |    -3.49 | AdrieN, chudy, darchevile, Melavi, Nami |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
