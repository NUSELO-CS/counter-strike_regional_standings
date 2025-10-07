### Roster Details<br />
Team Name: Stirlzs Angels<br />
Roster: callum_murray, Drox, kyson, ObZen, toM<br />
Global Rank: [289](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [29]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  481.0<br />
<br />
Final Rank Value (481.0) = Starting Rank Value (483.7) + Head To Head Adjustments (-2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.7
- 400 + ( ( 0.043 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 483.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      469 | 2023-08-10 | John Industries | L   | 1.000      | -            | -                | -                | -         |   -10.76 | callum_murray, Drox, kyson, ObZen, toM |
|            5 |      473 | 2023-08-10 | DXA             | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.015 (0.002)    | 0 (0.000) |    20.09 | callum_murray, Drox, kyson, ObZen, toM |
|            4 |     1802 | 2023-05-25 | Antic           | L   | 0.559      | -            | -                | -                | -         |    -4.49 | callum_murray, Drox, gump, ObZen, toM  |
|            3 |     1893 | 2023-05-23 | Rooster         | L   | 0.544      | -            | -                | -                | -         |    -4.77 | callum_murray, Drox, gump, ObZen, toM  |
|            2 |     2706 | 2023-04-11 | Australia       | L   | 0.266      | -            | -                | -                | -         |    -2.36 | callum_murray, Drox, gump, ObZen, toM  |
|            1 |     3016 | 2023-03-27 | Grayhound       | L   | 0.165      | -            | -                | -                | -         |    -0.37 | callum_murray, Drox, gump, ObZen, toM  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
