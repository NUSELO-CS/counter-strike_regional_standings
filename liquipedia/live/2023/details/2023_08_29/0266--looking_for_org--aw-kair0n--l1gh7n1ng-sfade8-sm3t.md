### Roster Details<br />
Team Name: Looking For Org<br />
Roster: AW, KaiR0N-, L1GH7n1nG, sFade8, sm3t<br />
Global Rank: [266](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [159]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  540.8<br />
<br />
Final Rank Value (540.8) = Starting Rank Value (525.3) + Head To Head Adjustments (15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.3
- 400 + ( ( 0.065 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 525.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1931 | 2023-05-20 | Ninjas in Pyjamas    | L   | 0.526      | -            | -                | -                | -         |    -0.15 | AW, KaiR0N-, L1GH7n1nG, sFade8, sm3t |
|            5 |     1937 | 2023-05-20 | GODSENT              | L   | 0.525      | -            | -                | -                | -         |    -4.14 | AW, KaiR0N-, L1GH7n1nG, sFade8, sm3t |
|            4 |     2171 | 2023-05-04 | Nexus                | W   | 0.421      | 0.143        | 0.000 (0.000)    | 0.373 (0.022)    | 0 (0.000) |     7.92 | AW, L1GH7n1nG, sFade8, sm3t, supra   |
|            3 |     2177 | 2023-05-04 | Aurora               | W   | 0.420      | 0.143        | 0.173 (0.010)    | 0.990 (0.059)    | 0 (0.000) |    12.84 | AW, L1GH7n1nG, sFade8, sm3t, supra   |
|            2 |     3540 | 2023-03-10 | ex-Coalesce          | L   | 0.054      | -            | -                | -                | -         |    -0.40 | AW, L1GH7n1nG, sFade8, shg, sm3t     |
|            1 |     3633 | 2023-03-07 | Eternal Fire Academy | L   | 0.034      | -            | -                | -                | -         |    -0.59 | AW, L1GH7n1nG, sFade8, shg, sm3t     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
