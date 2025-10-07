### Roster Details<br />
Team Name: Ex-Permitta Esports<br />
Roster: fostar, Kre1N, Nosik, Orbit, Twiksar<br />
Global Rank: [223](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [123]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  507.1<br />
<br />
Final Rank Value (507.1) = Starting Rank Value (499.9) + Head To Head Adjustments (7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.9
- 400 + ( ( 0.051 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 499.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2841 | 2025-05-21 | FORZE Reload                              | L   | 0.277      | -            | -                | -                | -         |    -1.48 | fostar, Kre1N, Nosik, Orbit, Twiksar   |
|            5 |     2884 | 2025-05-19 | Copenhagen Wolves (American organization) | L   | 0.265      | -            | -                | -                | -         |    -0.99 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            4 |     2888 | 2025-05-19 | Mousquetaires                             | L   | 0.265      | -            | -                | -                | -         |    -2.30 | fostar, Kre1N, Orbit, P4TriCK, Twiksar |
|            3 |     2907 | 2025-05-18 | UNiTY esports                             | W   | 0.258      | 0.384        | 0.005 (0.000)    | 0.275 (0.027)    | 0 (0.000) |     6.29 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            2 |     2923 | 2025-05-17 | Alliance                                  | L   | 0.251      | -            | -                | -                | -         |    -0.24 | fostar, Kre1N, Orbit, Tionix, Twiksar  |
|            1 |     2948 | 2025-05-16 | UNiTY esports                             | W   | 0.244      | 0.384        | 0.005 (0.000)    | 0.275 (0.026)    | 0 (0.000) |     6.01 | fostar, Kre1N, Orbit, Tionix, Twiksar  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
