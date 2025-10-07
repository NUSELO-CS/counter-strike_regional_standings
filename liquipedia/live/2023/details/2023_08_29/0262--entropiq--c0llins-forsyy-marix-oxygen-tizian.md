### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, forsyy, Marix, oxygeN, tiziaN<br />
Global Rank: [262](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [155]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  552.4<br />
<br />
Final Rank Value (552.4) = Starting Rank Value (516.7) + Head To Head Adjustments (35.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.7
- 400 + ( ( 0.060 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 516.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      276 | 2023-08-15 | 9 Pandas | L   | 1.000      | -            | -                | -                | -         |    -3.02 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            5 |      311 | 2023-08-13 | B8       | W   | 1.000      | 0.435        | 0.003 (0.001)    | 0.561 (0.244)    | 0 (0.000) |    25.66 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            4 |      410 | 2023-08-11 | Romania  | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.239 (0.104)    | 0 (0.000) |    21.25 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            3 |      489 | 2023-08-09 | ARCRED   | L   | 1.000      | -            | -                | -                | -         |    -3.85 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            2 |      525 | 2023-08-08 | Space    | L   | 1.000      | -            | -                | -                | -         |    -2.15 | c0llins, forsyy, Marix, oxygeN, tiziaN |
|            1 |      707 | 2023-07-29 | Sampi    | L   | 0.993      | -            | -                | -                | -         |    -2.19 | c0llins, forsyy, Marix, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
