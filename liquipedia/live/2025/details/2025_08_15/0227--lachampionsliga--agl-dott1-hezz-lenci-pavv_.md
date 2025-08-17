### Roster Details<br />
Team Name: LaChampionsLiga<br />
Roster: AGL, dott1, Hezz, lenci, pavv+<br />
Global Rank: [227](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_15.md)<br />
Regional Rank: [74]( ../../standings_americas_2025_08_15.md)<br />
<br />
Final Rank Value:  509.2<br />
<br />
Final Rank Value (509.2) = Starting Rank Value (512.5) + Head To Head Adjustments (-3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.5
- 400 + ( ( 0.058 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 512.5


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
|           18 |      423 | 2025-07-16 | DESEMPREGUEIDOS          | L   | 0.992      | -            | -                | -                | -         |   -10.73 | AGL, dott1, Hezz, lenci, pavv+ |
|           17 |      585 | 2025-07-09 | Yawara E-Sports          | W   | 0.946      | 0.147        | 0.007 (0.001)    | 0.269 (0.037)    | 0 (0.000) |    20.40 | AGL, dott1, Hezz, lenci, pavv+ |
|           16 |      775 | 2025-06-18 | Dusty Roots              | L   | 0.805      | -            | -                | -                | -         |   -11.27 | AGL, dott1, Hezz, lenci, pavv+ |
|           15 |      811 | 2025-06-16 | Players (Brazilian team) | L   | 0.791      | -            | -                | -                | -         |    -8.59 | AGL, dott1, Hezz, lenci, pavv+ |
|           14 |      867 | 2025-06-14 | Flamengo Esports         | L   | 0.778      | -            | -                | -                | -         |    -4.66 | AGL, dott1, Hezz, lenci, pavv+ |
|           13 |     2498 | 2025-03-29 | SELVA                    | L   | 0.267      | -            | -                | -                | -         |    -1.65 | dott1, Hezz, lenci, pavv+, rzk |
|           12 |     2532 | 2025-03-29 | R2 Esports Club          | W   | 0.264      | 0.769        | 0.000 (0.000)    | 0.026 (0.005)    | 0 (0.000) |     3.83 | dott1, Hezz, lenci, pavv+, rzk |
|           11 |     2578 | 2025-03-28 | Fluxo                    | L   | 0.259      | -            | -                | -                | -         |    -0.34 | dott1, Hezz, lenci, pavv+, rzk |
|           10 |     2659 | 2025-03-27 | Yawara E-Sports          | W   | 0.252      | 0.769        | 0.007 (0.001)    | 0.269 (0.052)    | 0 (0.000) |     5.79 | dott1, Hezz, lenci, pavv+, rzk |
|            9 |     3113 | 2025-03-09 | 2Game Esports            | L   | 0.131      | -            | -                | -                | -         |    -0.76 | dott1, Hezz, lenci, pavv+, rzk |
|            8 |     3162 | 2025-03-08 | Flamengo Esports         | L   | 0.126      | -            | -                | -                | -         |    -0.74 | dott1, Hezz, lenci, pavv+, rzk |
|            7 |     3181 | 2025-03-08 | Fluxo                    | L   | 0.125      | -            | -                | -                | -         |    -1.17 | dott1, Hezz, lenci, pavv+, rzk |
|            6 |     3245 | 2025-03-07 | AdalYamigos              | W   | 0.119      | 0.769        | 0.001 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.43 | dott1, Hezz, lenci, pavv+, rzk |
|            5 |     3288 | 2025-03-06 | Game Hunters             | W   | 0.114      | 0.371        | 0.004 (0.000)    | 0.361 (0.015)    | 0 (0.000) |     2.99 | dott1, Hezz, lenci, pavv+, rzk |
|            4 |     3333 | 2025-03-05 | Dusty Roots              | L   | 0.107      | -            | -                | -                | -         |    -1.56 | dott1, Hezz, lenci, pavv+, rzk |
|            3 |     3408 | 2025-03-02 | Players (Brazilian team) | W   | 0.086      | 0.371        | 0.001 (0.000)    | 0.266 (0.009)    | 0 (0.000) |     1.89 | dott1, Hezz, lenci, pavv+, rzk |
|            2 |     3460 | 2025-02-28 | Bounty Hunters Female    | W   | 0.073      | 0.371        | 0.001 (0.000)    | 0.036 (0.001)    | 0 (0.000) |     1.47 | dott1, Hezz, lenci, pavv+, rzk |
|            1 |     3512 | 2025-02-26 | Nitro.GG                 | L   | 0.060      | -            | -                | -                | -         |    -0.68 | dott1, Hezz, lenci, pavv+, rzk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
