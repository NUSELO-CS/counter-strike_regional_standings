### Roster Details<br />
Team Name: IKLA<br />
Roster: draken, Kvem, MICHU, Topa, xicoz<br />
Global Rank: [108](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [77]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  792.8<br />
<br />
Final Rank Value (792.8) = Starting Rank Value (674.4) + Head To Head Adjustments (118.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.354[<sup>2</sup>](#table1)
- Opponent Network: 0.214[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.238[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.4
- 400 + ( ( 0.142 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 674.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      235 | 2023-08-17 | BIG           | L   | 1.000      | -            | -                | -                | -         |    -3.35 | draken, Kvem, MICHU, Topa, xicoz |
|            9 |      307 | 2023-08-13 | Sampi         | W   | 1.000      | 0.435        | 0.087 (0.038)    | 1.000 (0.435)    | 0 (0.000) |    21.77 | draken, Kvem, MICHU, Topa, xicoz |
|            8 |      340 | 2023-08-12 | Question Mark | L   | 1.000      | -            | -                | -                | -         |    -8.80 | draken, Kvem, MICHU, Topa, xicoz |
|            7 |      463 | 2023-08-10 | 9 Pandas      | W   | 1.000      | 0.435        | 0.074 (0.032)    | 1.000 (0.435)    | 0 (0.000) |    25.84 | draken, Kvem, MICHU, Topa, xicoz |
|            6 |      531 | 2023-08-07 | ARCRED        | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.588 (0.256)    | 0 (0.000) |    21.04 | draken, Kvem, MICHU, Topa, xicoz |
|            5 |      701 | 2023-07-29 | MIBR          | L   | 0.994      | -            | -                | -                | -         |    -5.11 | draken, Kvem, MICHU, Topa, xicoz |
|            4 |      756 | 2023-07-25 | B8            | W   | 0.966      | 0.435        | 0.003 (0.001)    | 0.561 (0.235)    | 0 (0.000) |    19.66 | draken, Kvem, MICHU, Topa, xicoz |
|            3 |      780 | 2023-07-23 | Space         | W   | 0.952      | 0.435        | 0.099 (0.041)    | 0.904 (0.374)    | 0 (0.000) |    25.22 | draken, Kvem, MICHU, Topa, xicoz |
|            2 |      812 | 2023-07-21 | 9 Pandas      | L   | 0.939      | -            | -                | -                | -         |    -3.16 | draken, Kvem, MICHU, Topa, xicoz |
|            1 |      844 | 2023-07-19 | Sampi         | W   | 0.926      | 0.435        | 0.087 (0.035)    | 1.000 (0.402)    | 0 (0.000) |    25.24 | draken, Kvem, MICHU, Topa, xicoz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
