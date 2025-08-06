### Roster Details<br />
Team Name: Preasy Esport<br />
Roster: AcilioN, Griller, niko, qx, SinK<br />
Global Rank: [198](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [109]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  590.3<br />
<br />
Final Rank Value (590.3) = Starting Rank Value (560.2) + Head To Head Adjustments (30.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.083[<sup>2</sup>](#table1)

The average of these factors is 0.085<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 560.2
- 400 + ( ( 0.085 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 560.2


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
|            5 |      677 | 2025-06-14 | Passion UA      | L   | 0.858      | -            | -                | -                | -         |    -1.28 | AcilioN, Griller, niko, qx, SinK   |
|            4 |      696 | 2025-06-14 | Tricked Esport  | W   | 0.856      | 0.360        | 0.015 (0.005)    | 0.206 (0.063)    | 1 (0.856) |    23.68 | AcilioN, Griller, niko, qx, SinK   |
|            3 |      706 | 2025-06-13 | TEAM NEXT LEVEL | L   | 0.852      | -            | -                | -                | -         |    -0.73 | AcilioN, Griller, niko, qx, SinK   |
|            2 |      803 | 2025-06-08 | TPuDCATb TPu    | L   | 0.819      | -            | -                | -                | -         |    -3.96 | AcilioN, bekker, Griller, niko, qx |
|            1 |      834 | 2025-06-07 | UNiTY esports   | W   | 0.810      | 0.384        | 0.000 (0.000)    | 0.216 (0.067)    | 0 (0.000) |    12.39 | AcilioN, bekker, Griller, niko, qx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
