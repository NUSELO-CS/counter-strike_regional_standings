### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: AGL, dott1, Hezz, lenci, pavv+<br />
Global Rank: [227](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [74]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  503.3<br />
<br />
Final Rank Value (503.3) = Starting Rank Value (504.5) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.5
- 400 + ( ( 0.055 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 504.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      285 | 2025-07-16 | DESEMPREGUEIDOS          | L   | 1.000      | -            | -                | -                | -         |   -10.83 | AGL, dott1, Hezz, lenci, pavv+ |
|           17 |      447 | 2025-07-09 | Yawara E-Sports          | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.322 (0.046)    | 0 (0.000) |    20.85 | AGL, dott1, Hezz, lenci, pavv+ |
|           16 |      637 | 2025-06-18 | Dusty Roots              | L   | 0.865      | -            | -                | -                | -         |   -12.08 | AGL, dott1, Hezz, lenci, pavv+ |
|           15 |      673 | 2025-06-16 | Players (Brazilian team) | L   | 0.851      | -            | -                | -                | -         |    -9.31 | AGL, dott1, Hezz, lenci, pavv+ |
|           14 |      729 | 2025-06-14 | Flamengo Esports         | L   | 0.838      | -            | -                | -                | -         |    -5.08 | AGL, dott1, Hezz, lenci, pavv+ |
|           13 |     2360 | 2025-03-29 | SELVA                    | L   | 0.327      | -            | -                | -                | -         |    -2.19 | dott1, Hezz, lenci, pavv+, rzk |
|           12 |     2394 | 2025-03-29 | R2 Esports Club          | W   | 0.324      | 0.143        | 0.000 (0.000)    | 0.035 (0.002)    | 0 (0.000) |     4.56 | dott1, Hezz, lenci, pavv+, rzk |
|           11 |     2440 | 2025-03-28 | Fluxo                    | L   | 0.319      | -            | -                | -                | -         |    -0.49 | dott1, Hezz, lenci, pavv+, rzk |
|           10 |     2521 | 2025-03-27 | Yawara E-Sports          | W   | 0.312      | 0.143        | 0.006 (0.000)    | 0.322 (0.014)    | 0 (0.000) |     6.97 | dott1, Hezz, lenci, pavv+, rzk |
|            9 |     2975 | 2025-03-09 | 2Game Esports            | L   | 0.191      | -            | -                | -                | -         |    -1.13 | dott1, Hezz, lenci, pavv+, rzk |
|            8 |     3024 | 2025-03-08 | Flamengo Esports         | L   | 0.186      | -            | -                | -                | -         |    -1.10 | dott1, Hezz, lenci, pavv+, rzk |
|            7 |     3043 | 2025-03-08 | Fluxo                    | L   | 0.185      | -            | -                | -                | -         |    -1.70 | dott1, Hezz, lenci, pavv+, rzk |
|            6 |     3107 | 2025-03-07 | AdalYamigos              | W   | 0.179      | 0.143        | 0.001 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     3.68 | dott1, Hezz, lenci, pavv+, rzk |
|            5 |     3150 | 2025-03-06 | Game Hunters             | W   | 0.174      | 0.371        | 0.004 (0.000)    | 0.431 (0.028)    | 0 (0.000) |     4.54 | dott1, Hezz, lenci, pavv+, rzk |
|            4 |     3195 | 2025-03-05 | Dusty Roots              | L   | 0.167      | -            | -                | -                | -         |    -2.45 | dott1, Hezz, lenci, pavv+, rzk |
|            3 |     3270 | 2025-03-02 | Players (Brazilian team) | W   | 0.146      | 0.371        | 0.001 (0.000)    | 0.327 (0.018)    | 0 (0.000) |     3.24 | dott1, Hezz, lenci, pavv+, rzk |
|            2 |     3322 | 2025-02-28 | Bounty Hunters Female    | W   | 0.133      | 0.371        | 0.001 (0.000)    | 0.052 (0.003)    | 0 (0.000) |     2.68 | dott1, Hezz, lenci, pavv+, rzk |
|            1 |     3374 | 2025-02-26 | Nitro.GG                 | L   | 0.120      | -            | -                | -                | -         |    -1.31 | dott1, Hezz, lenci, pavv+, rzk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
