### Roster Details<br />
Team Name: VISU<br />
Roster: eDi, Elfern, LYNXi, oopee, Orava<br />
Global Rank: [278](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [166]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  508.9<br />
<br />
Final Rank Value (508.9) = Starting Rank Value (511.0) + Head To Head Adjustments (-2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.0
- 400 + ( ( 0.057 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 511.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1806 | 2023-05-25 | knasigT         | L   | 0.559      | -            | -                | -                | -         |    -8.22 | eDi, Elfern, LYNXi, oopee, Orava |
|            9 |     1833 | 2023-05-24 | Entropiq        | L   | 0.553      | -            | -                | -                | -         |    -4.37 | eDi, Elfern, LYNXi, oopee, Orava |
|            8 |     2596 | 2023-04-14 | Sampi           | L   | 0.287      | -            | -                | -                | -         |    -0.63 | eDi, Elfern, Jelo, LYNXi, oopee  |
|            7 |     2623 | 2023-04-13 | ALTERNATE aTTaX | L   | 0.280      | -            | -                | -                | -         |    -0.58 | eDi, Elfern, Jelo, LYNXi, oopee  |
|            6 |     2628 | 2023-04-13 | Sampi           | W   | 0.280      | 0.143        | 0.087 (0.003)    | 1.000 (0.040)    | 0 (0.000) |     8.23 | eDi, Elfern, Jelo, LYNXi, oopee  |
|            5 |     3333 | 2023-03-17 | HAVU            | L   | 0.100      | -            | -                | -                | -         |    -0.25 | eDi, Elfern, Jelo, LYNXi, oopee  |
|            4 |     3338 | 2023-03-17 | DUSTY           | W   | 0.100      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.09 | eDi, Elfern, Jelo, LYNXi, oopee  |
|            3 |     3341 | 2023-03-17 | HAVU            | L   | 0.099      | -            | -                | -                | -         |    -0.24 | eDi, Elfern, Jelo, LYNXi, oopee  |
|            2 |     3478 | 2023-03-12 | ENCE Academy    | W   | 0.068      | 0.143        | 0.014 (0.000)    | 0.580 (0.006)    | 0 (0.000) |     1.91 | eDi, Elfern, Jelo, LYNXi, spargo |
|            1 |     3498 | 2023-03-12 | Enhanced        | W   | 0.065      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.96 | eDi, Elfern, Jelo, LYNXi, spargo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
