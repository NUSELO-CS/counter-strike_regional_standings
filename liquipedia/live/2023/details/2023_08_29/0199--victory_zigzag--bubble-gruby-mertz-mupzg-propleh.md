### Roster Details<br />
Team Name: Victory Zigzag<br />
Roster: bubble, GruBy, mertz, mupzG, propleh<br />
Global Rank: [199](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [125]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  651.6<br />
<br />
Final Rank Value (651.6) = Starting Rank Value (572.3) + Head To Head Adjustments (79.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.089<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 572.3
- 400 + ( ( 0.089 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 572.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      123 | 2023-08-24 | BetBoom      | L   | 1.000      | -            | -                | -                | -         |   -10.11 | bubble, GruBy, mertz, mupzG, propleh |
|            7 |      137 | 2023-08-23 | 1WIN         | W   | 1.000      | 0.143        | 0.298 (0.043)    | 0.772 (0.110)    | 0 (0.000) |    30.43 | bubble, GruBy, mertz, mupzG, propleh |
|            6 |      149 | 2023-08-23 | 9INE         | L   | 1.000      | -            | -                | -                | -         |    -1.20 | bubble, GruBy, mertz, mupzG, propleh |
|            5 |      426 | 2023-08-10 | Sprout       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.193 (0.028)    | 0 (0.000) |    17.63 | bubble, GruBy, mertz, mupzG, propleh |
|            4 |      437 | 2023-08-10 | BIG          | W   | 1.000      | 0.143        | 0.163 (0.023)    | 0.525 (0.075)    | 0 (0.000) |    30.35 | bubble, GruBy, mertz, mupzG, propleh |
|            3 |      443 | 2023-08-10 | 9 Pandas     | W   | 1.000      | 0.143        | 0.074 (0.011)    | 1.000 (0.143)    | 0 (0.000) |    29.09 | bubble, GruBy, mertz, mupzG, propleh |
|            2 |     1120 | 2023-06-18 | ENCE Academy | L   | 0.721      | -            | -                | -                | -         |    -4.26 | bubble, fleav, mertz, mupzG, Porya   |
|            1 |     1149 | 2023-06-17 | Nemiga       | L   | 0.713      | -            | -                | -                | -         |   -12.63 | bubble, fleav, mertz, mupzG, Porya   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
