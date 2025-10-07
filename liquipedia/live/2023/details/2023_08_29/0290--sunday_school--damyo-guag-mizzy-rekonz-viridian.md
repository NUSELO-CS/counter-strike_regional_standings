### Roster Details<br />
Team Name: sunday school<br />
Roster: damyo, guag, mizzy, rekonz, viridian<br />
Global Rank: [290](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [30]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  481.0<br />
<br />
Final Rank Value (481.0) = Starting Rank Value (476.3) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.157[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.039<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 476.3
- 400 + ( ( 0.039 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 476.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      375 | 2023-08-12 | Australia       | L   | 1.000      | -            | -                | -                | -         |    -7.88 | damyo, guag, mizzy, rekonz, viridian |
|            7 |      380 | 2023-08-12 | really weird    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.048 (0.007)    | 0 (0.000) |    12.69 | damyo, guag, mizzy, rekonz, viridian |
|            6 |      408 | 2023-08-11 | Cheesy Champs   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    12.44 | damyo, guag, mizzy, rekonz, viridian |
|            5 |      472 | 2023-08-10 | John Industries | L   | 1.000      | -            | -                | -                | -         |   -10.49 | damyo, guag, rekonz, SkulL, viridian |
|            4 |     3018 | 2023-03-27 | VERTEX          | L   | 0.165      | -            | -                | -                | -         |    -1.18 | guag, mizzy, nexar, rekonz, versa    |
|            3 |     3299 | 2023-03-18 | Australia       | L   | 0.106      | -            | -                | -                | -         |    -0.91 | guag, mizzy, rekonz, supar, versa    |
|            2 |     3309 | 2023-03-18 | Rooster         | L   | 0.104      | -            | -                | -                | -         |    -1.99 | guag, mizzy, rekonz, supar, versa    |
|            1 |     3379 | 2023-03-16 | e-LEMON-ators   | W   | 0.091      | 0.143        | 0.003 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     2.02 | guag, mizzy, rekonz, supar, versa    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
