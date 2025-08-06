### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: Gnøffe, n1Xen, PR1mE, sL1m3, Vster<br />
Global Rank: [251](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [126]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  440.8<br />
<br />
Final Rank Value (440.8) = Starting Rank Value (437.8) + Head To Head Adjustments (3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- Own Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.020<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 437.8
- 400 + ( ( 0.020 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 437.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1006 | 2025-05-22 | Johnny Speeds    | L   | 0.705      | -            | -                | -                | -         |    -1.10 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            6 |     1026 | 2025-05-21 | En av de lette   | W   | 0.698      | 0.500        | 0.000 (0.000)    | 0.051 (0.018)    | 1 (0.698) |    10.29 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            5 |     1062 | 2025-05-20 | ENCE Academy     | L   | 0.690      | -            | -                | -                | -         |    -2.54 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            4 |     1648 | 2025-04-26 | HEROIC Academy   | L   | 0.532      | -            | -                | -                | -         |    -2.88 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            3 |     2926 | 2025-03-09 | LEON Esports     | L   | 0.211      | -            | -                | -                | -         |    -2.93 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            2 |     2976 | 2025-03-08 | Inputprayers     | W   | 0.206      | 0.372        | 0.000 (0.000)    | 0.060 (0.005)    | 0 (0.000) |     3.96 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            1 |     3192 | 2025-03-04 | Ex-Heimo Esports | L   | 0.178      | -            | -                | -                | -         |    -1.76 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
