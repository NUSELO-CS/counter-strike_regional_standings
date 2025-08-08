### Roster Details<br />
Team Name: Vantage Esports<br />
Roster: Drox, Jynx, Mingovi, Snaaz, supar<br />
Global Rank: [234](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_05.md)<br />
Regional Rank: [37]( ../../standings_asia_2025_08_05.md)<br />
<br />
Final Rank Value:  499.0<br />
<br />
Final Rank Value (499.0) = Starting Rank Value (497.9) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.9
- 400 + ( ( 0.051 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 497.9


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
|           14 |     2412 | 2025-03-28 | FURY                        | L   | 0.322      | -            | -                | -                | -         |    -3.50 | Drox, Jynx, Mingovi, supar, swerzieN |
|           13 |     2474 | 2025-03-28 | SemperFi Esports            | L   | 0.316      | -            | -                | -                | -         |    -1.61 | Drox, Jynx, Mingovi, Snaaz, supar    |
|           12 |     2555 | 2025-03-26 | Only One Word               | W   | 0.309      | 0.624        | 0.001 (0.000)    | 0.143 (0.028)    | 0 (0.000) |     7.40 | Drox, Jynx, Mingovi, supar, swerzieN |
|           11 |     2692 | 2025-03-20 | Mindfreak (Australian team) | L   | 0.268      | -            | -                | -                | -         |    -2.94 | Drox, Jynx, Mingovi, supar, swerzieN |
|           10 |     2696 | 2025-03-20 | Ex-TALON                    | L   | 0.267      | -            | -                | -                | -         |    -1.97 | Drox, Jynx, Mingovi, supar, swerzieN |
|            9 |     3410 | 2025-02-25 | Only One Word               | L   | 0.114      | -            | -                | -                | -         |    -0.90 | Drox, Jynx, Mingovi, supar, swerzieN |
|            8 |     3431 | 2025-02-25 | Only One Word               | L   | 0.110      | -            | -                | -                | -         |    -0.87 | Drox, Jynx, Mingovi, supar, swerzieN |
|            7 |     3434 | 2025-02-25 | Only One Word               | L   | 0.110      | -            | -                | -                | -         |    -0.88 | Drox, Jynx, Mingovi, supar, swerzieN |
|            6 |     3439 | 2025-02-24 | Ex-TALON                    | L   | 0.109      | -            | -                | -                | -         |    -0.81 | Drox, Jynx, Mingovi, supar, swerzieN |
|            5 |     3470 | 2025-02-23 | Rooster                     | W   | 0.100      | 0.624        | 0.010 (0.001)    | 0.271 (0.017)    | 0 (0.000) |     2.46 | Drox, Jynx, Mingovi, supar, swerzieN |
|            4 |     3551 | 2025-02-19 | FURY                        | W   | 0.070      | 0.272        | 0.001 (0.000)    | 0.142 (0.003)    | 0 (0.000) |     1.46 | Drox, Jynx, Mingovi, supar, swerzieN |
|            3 |     3555 | 2025-02-19 | FURY                        | W   | 0.070      | 0.272        | 0.001 (0.000)    | 0.142 (0.003)    | 0 (0.000) |     1.46 | Drox, Jynx, Mingovi, supar, swerzieN |
|            2 |     3629 | 2025-02-14 | Ground Zero Gaming          | W   | 0.042      | 0.312        | 0.005 (0.000)    | 0.208 (0.003)    | 0 (0.000) |     0.97 | Drox, Jynx, Mingovi, supar, swerzieN |
|            1 |     3632 | 2025-02-14 | FURY                        | W   | 0.041      | 0.312        | 0.001 (0.000)    | 0.142 (0.002)    | 0 (0.000) |     0.86 | Drox, Jynx, Mingovi, supar, swerzieN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
