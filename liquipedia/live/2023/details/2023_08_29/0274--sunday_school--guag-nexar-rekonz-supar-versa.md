### Roster Details<br />
Team Name: sunday school<br />
Roster: guag, nexar, rekonz, supar, versa<br />
Global Rank: [274](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [24]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  515.1<br />
<br />
Final Rank Value (515.1) = Starting Rank Value (503.7) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.066[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.7
- 400 + ( ( 0.054 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 503.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1308 | 2023-06-09 | Australia    | L   | 0.658      | -            | -                | -                | -         |    -6.32 | guag, nexar, rekonz, supar, versa  |
|            5 |     1350 | 2023-06-08 | Rooster      | L   | 0.651      | -            | -                | -                | -         |    -6.55 | guag, nexar, rekonz, supar, versa  |
|            4 |     1851 | 2023-05-24 | Australia    | W   | 0.551      | 0.333        | 0.003 (0.001)    | 0.374 (0.069)    | 0 (0.000) |    11.85 | guag, nexar, rekonz, supar, versa  |
|            3 |     1912 | 2023-05-22 | DXA          | W   | 0.538      | 0.333        | 0.001 (0.000)    | 0.015 (0.003)    | 0 (0.000) |    10.87 | guag, nexar, rekonz, supar, versa  |
|            2 |     2672 | 2023-04-12 | The Big Dogs | L   | 0.272      | -            | -                | -                | -         |    -4.36 | mizzy, nexar, rekonz, supar, versa |
|            1 |     2715 | 2023-04-11 | Rooster      | W   | 0.265      | 0.333        | 0.006 (0.000)    | 0.292 (0.026)    | 0 (0.000) |     5.82 | guag, nexar, rekonz, supar, versa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
