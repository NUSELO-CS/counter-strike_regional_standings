### Roster Details<br />
Team Name: Sashi<br />
Roster: AcilioN, aizy, brzer, n1xen, nut nut<br />
Global Rank: [264](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [157]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  547.4<br />
<br />
Final Rank Value (547.4) = Starting Rank Value (538.6) + Head To Head Adjustments (8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 538.6
- 400 + ( ( 0.072 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 538.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      221 | 2023-08-18 | KS            | L   | 1.000      | -            | -                | -                | -         |    -6.26 | AcilioN, aizy, brzer, n1xen, nut nut   |
|            6 |      243 | 2023-08-17 | PGE Turow     | L   | 1.000      | -            | -                | -                | -         |    -5.26 | AcilioN, aizy, brzer, n1xen, nut nut   |
|            5 |      297 | 2023-08-14 | Zero Tenacity | W   | 1.000      | 0.333        | 0.037 (0.012)    | 0.915 (0.305)    | 0 (0.000) |    25.67 | AcilioN, aizy, brzer, n1xen, nut nut   |
|            4 |      487 | 2023-08-09 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |    -5.71 | AcilioN, aizy, brzer, n1xen, nut nut   |
|            3 |      497 | 2023-08-09 | desenchantee  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.81 | AcilioN, aizy, brzer, n1xen, nut nut   |
|            2 |      520 | 2023-08-08 | JANO          | L   | 1.000      | -            | -                | -                | -         |    -8.37 | AcilioN, aizy, brzer, n1xen, nut nut   |
|            1 |      696 | 2023-07-30 | Aurora        | L   | 0.998      | -            | -                | -                | -         |    -1.12 | AcilioN, Beccie, brzer, n1xen, nut nut |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
