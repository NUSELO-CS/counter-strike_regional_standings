### Roster Details<br />
Team Name: Vantage Esports<br />
Roster: Drox, Jynx, Mingovi, Snaaz, supar<br />
Global Rank: [234](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_03.md)<br />
Regional Rank: [37]( ../../standings_asia_2025_08_03.md)<br />
<br />
Final Rank Value:  489.3<br />
<br />
Final Rank Value (489.3) = Starting Rank Value (487.9) + Head To Head Adjustments (1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.9
- 400 + ( ( 0.046 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 487.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2367 | 2025-03-28 | FURY                        | L   | 0.342      | -            | -                | -                | -         |    -3.73 | Drox, Jynx, Mingovi, supar, swerzieN |
|           13 |     2429 | 2025-03-28 | SemperFi Esports            | L   | 0.336      | -            | -                | -                | -         |    -1.64 | Drox, Jynx, Mingovi, Snaaz, supar    |
|           12 |     2510 | 2025-03-26 | Only One Word               | W   | 0.329      | 0.143        | 0.001 (0.000)    | 0.147 (0.007)    | 0 (0.000) |     7.94 | Drox, Jynx, Mingovi, supar, swerzieN |
|           11 |     2647 | 2025-03-20 | Mindfreak (Australian team) | L   | 0.288      | -            | -                | -                | -         |    -4.55 | Drox, Jynx, Mingovi, supar, swerzieN |
|           10 |     2651 | 2025-03-20 | Ex-TALON                    | L   | 0.287      | -            | -                | -                | -         |    -2.04 | Drox, Jynx, Mingovi, supar, swerzieN |
|            9 |     3365 | 2025-02-25 | Only One Word               | L   | 0.135      | -            | -                | -                | -         |    -1.05 | Drox, Jynx, Mingovi, supar, swerzieN |
|            8 |     3386 | 2025-02-25 | Only One Word               | L   | 0.130      | -            | -                | -                | -         |    -1.02 | Drox, Jynx, Mingovi, supar, swerzieN |
|            7 |     3389 | 2025-02-25 | Only One Word               | L   | 0.130      | -            | -                | -                | -         |    -1.03 | Drox, Jynx, Mingovi, supar, swerzieN |
|            6 |     3394 | 2025-02-24 | Ex-TALON                    | L   | 0.129      | -            | -                | -                | -         |    -0.93 | Drox, Jynx, Mingovi, supar, swerzieN |
|            5 |     3425 | 2025-02-23 | Rooster                     | W   | 0.120      | 0.143        | 0.010 (0.000)    | 0.274 (0.005)    | 0 (0.000) |     2.98 | Drox, Jynx, Mingovi, supar, swerzieN |
|            4 |     3506 | 2025-02-19 | FURY                        | W   | 0.090      | 0.143        | 0.001 (0.000)    | 0.146 (0.002)    | 0 (0.000) |     1.87 | Drox, Jynx, Mingovi, supar, swerzieN |
|            3 |     3510 | 2025-02-19 | FURY                        | W   | 0.090      | 0.143        | 0.001 (0.000)    | 0.146 (0.002)    | 0 (0.000) |     1.88 | Drox, Jynx, Mingovi, supar, swerzieN |
|            2 |     3584 | 2025-02-14 | Ground Zero Gaming          | W   | 0.062      | 0.143        | 0.003 (0.000)    | 0.211 (0.002)    | 0 (0.000) |     1.44 | Drox, Jynx, Mingovi, supar, swerzieN |
|            1 |     3587 | 2025-02-14 | FURY                        | W   | 0.061      | 0.143        | 0.001 (0.000)    | 0.146 (0.001)    | 0 (0.000) |     1.28 | Drox, Jynx, Mingovi, supar, swerzieN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
