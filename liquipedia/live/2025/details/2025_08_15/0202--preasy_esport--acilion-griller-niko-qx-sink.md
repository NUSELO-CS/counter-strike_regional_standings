### Roster Details<br />
Team Name: Preasy Esport<br />
Roster: AcilioN, Griller, niko, qx, SinK<br />
Global Rank: [202](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [111]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  590.4<br />
<br />
Final Rank Value (590.4) = Starting Rank Value (562.9) + Head To Head Adjustments (27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 562.9
- 400 + ( ( 0.083 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 562.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      860 | 2025-06-14 | Passion UA      | L   | 0.778      | -            | -                | -                | -         |    -1.06 | AcilioN, Griller, niko, qx, SinK   |
|            4 |      879 | 2025-06-14 | Tricked Esport  | W   | 0.776      | 0.360        | 0.015 (0.004)    | 0.298 (0.083)    | 1 (0.776) |    21.97 | AcilioN, Griller, niko, qx, SinK   |
|            3 |      889 | 2025-06-13 | TEAM NEXT LEVEL | L   | 0.772      | -            | -                | -                | -         |    -0.69 | AcilioN, Griller, niko, qx, SinK   |
|            2 |      986 | 2025-06-08 | TPuDCATb TPu    | L   | 0.739      | -            | -                | -                | -         |    -3.72 | AcilioN, bekker, Griller, niko, qx |
|            1 |     1017 | 2025-06-07 | UNiTY esports   | W   | 0.730      | 0.384        | 0.000 (0.000)    | 0.178 (0.050)    | 0 (0.000) |    10.98 | AcilioN, bekker, Griller, niko, qx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
