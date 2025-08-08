### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: Gnøffe, n1Xen, PR1mE, sL1m3, Vster<br />
Global Rank: [247](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [123]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  440.4<br />
<br />
Final Rank Value (440.4) = Starting Rank Value (437.4) + Head To Head Adjustments (3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.044[<sup>2</sup>](#table1)

The average of these factors is 0.020<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 437.4
- 400 + ( ( 0.020 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 437.4


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
|            7 |     1051 | 2025-05-22 | Johnny Speeds    | L   | 0.684      | -            | -                | -                | -         |    -1.08 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            6 |     1071 | 2025-05-21 | En av de lette   | W   | 0.678      | 0.500        | 0.000 (0.000)    | 0.050 (0.017)    | 1 (0.678) |     9.99 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            5 |     1107 | 2025-05-20 | ENCE Academy     | L   | 0.670      | -            | -                | -                | -         |    -2.47 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            4 |     1693 | 2025-04-26 | HEROIC Academy   | L   | 0.512      | -            | -                | -                | -         |    -2.77 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            3 |     2971 | 2025-03-09 | LEON Esports     | L   | 0.191      | -            | -                | -                | -         |    -2.65 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            2 |     3021 | 2025-03-08 | Inputprayers     | W   | 0.186      | 0.372        | 0.000 (0.000)    | 0.058 (0.004)    | 0 (0.000) |     3.56 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            1 |     3237 | 2025-03-04 | Ex-Heimo Esports | L   | 0.158      | -            | -                | -                | -         |    -1.56 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
