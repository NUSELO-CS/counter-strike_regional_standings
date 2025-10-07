### Roster Details<br />
Team Name: The Prodigies<br />
Roster: fNk, keen, KWERTZZ, SBT, shield<br />
Global Rank: [292](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [173]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  479.8<br />
<br />
Final Rank Value (479.8) = Starting Rank Value (479.9) + Head To Head Adjustments (-0.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.004[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.9
- 400 + ( ( 0.041 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 479.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3394 | 2023-03-15 | Nexus       | L   | 0.088      | -            | -                | -                | -         |    -0.94 | fNk, keen, KWERTZZ, SBT, shield |
|            4 |     3404 | 2023-03-15 | JANO        | W   | 0.087      | 0.143        | 0.007 (0.000)    | 0.427 (0.005)    | 0 (0.000) |     2.38 | fNk, keen, KWERTZZ, SBT, shield |
|            3 |     3438 | 2023-03-14 | Nexus       | L   | 0.079      | -            | -                | -                | -         |    -0.84 | fNk, keen, KWERTZZ, SBT, shield |
|            2 |     3517 | 2023-03-11 | ex-Partizan | L   | 0.060      | -            | -                | -                | -         |    -0.52 | fNk, keen, KWERTZZ, SBT, shield |
|            1 |     3631 | 2023-03-07 | B8          | L   | 0.035      | -            | -                | -                | -         |    -0.12 | fNk, keen, KWERTZZ, SBT, shield |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
