### Roster Details<br />
Team Name: Mindfreak<br />
Roster: chief, Forleks, isa1ah, tucks, Word<br />
Global Rank: [288](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [28]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  485.0<br />
<br />
Final Rank Value (485.0) = Starting Rank Value (485.9) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.039[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.9
- 400 + ( ( 0.044 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 485.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1375 | 2023-06-07 | The Big Dogs    | L   | 0.646      | -            | -                | -                | -         |    -9.53 | chief, Forleks, isa1ah, tucks, Word |
|            6 |     1810 | 2023-05-25 | DXA             | W   | 0.558      | 0.333        | 0.001 (0.000)    | 0.015 (0.003)    | 0 (0.000) |    11.52 | chief, Forleks, isa1ah, tucks, Word |
|            5 |     1909 | 2023-05-22 | Australia       | L   | 0.539      | -            | -                | -                | -         |    -4.74 | chief, Forleks, isa1ah, tucks, Word |
|            4 |     3185 | 2023-03-22 | Australia       | L   | 0.132      | -            | -                | -                | -         |    -1.20 | chief, Forleks, isa1ah, tucks, Word |
|            3 |     3186 | 2023-03-22 | God's Work      | W   | 0.131      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.57 | chief, Forleks, isa1ah, tucks, Word |
|            2 |     3250 | 2023-03-20 | VERTEX          | L   | 0.118      | -            | -                | -                | -         |    -0.91 | chief, Forleks, isa1ah, tucks, Word |
|            1 |     3254 | 2023-03-20 | John Industries | W   | 0.118      | 0.143        | 0.001 (0.000)    | 0.159 (0.003)    | 0 (0.000) |     2.40 | chief, Forleks, isa1ah, tucks, Word |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
