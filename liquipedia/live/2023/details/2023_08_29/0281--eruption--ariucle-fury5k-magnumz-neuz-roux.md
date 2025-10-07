### Roster Details<br />
Team Name: Eruption<br />
Roster: ariucle, fury5k, MagnumZ, NEUZ, ROUX<br />
Global Rank: [281](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [27]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  501.1<br />
<br />
Final Rank Value (501.1) = Starting Rank Value (492.9) + Head To Head Adjustments (8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.191[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.9
- 400 + ( ( 0.048 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 492.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       62 | 2023-08-26 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |    -2.48 | ariucle, fury5k, MagnumZ, NEUZ, ROUX  |
|            4 |       65 | 2023-08-26 | TYLOO       | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.097 (0.014)    | 0 (0.000) |    22.68 | ariucle, fury5k, MagnumZ, NEUZ, ROUX  |
|            3 |       76 | 2023-08-26 | ATOX        | L   | 1.000      | -            | -                | -                | -         |    -4.86 | ariucle, fury5k, MagnumZ, NEUZ, ROUX  |
|            2 |      374 | 2023-08-12 | tsetsegchid | L   | 1.000      | -            | -                | -                | -         |    -4.24 | ariucle, fury5k, HiHi, MagnumZ, ROUX  |
|            1 |      467 | 2023-08-10 | Lynn Vision | L   | 1.000      | -            | -                | -                | -         |    -2.96 | ariucle, fury5k, Lexor, MagnumZ, ROUX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
