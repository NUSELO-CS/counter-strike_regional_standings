### Roster Details<br />
Team Name: HOTU<br />
Roster: dukefissura, frontales, kade0, lampada, mizu<br />
Global Rank: [68](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [46]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  936.1<br />
<br />
Final Rank Value (936.1) = Starting Rank Value (875.9) + Head To Head Adjustments (60.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.256[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 875.9
- 400 + ( ( 0.244 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 875.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |       46 | 2025-08-10 | EYEBALLERS              | L   | 1.000      | -            | -                | -                | -         |   -19.65 | dukefissura, frontales, kade0, lampada, mizu |
|           24 |      337 | 2025-07-19 | Partizan Esports        | L   | 1.000      | -            | -                | -                | -         |   -16.68 | dukefissura, frontales, kade0, lampada, mizu |
|           23 |      476 | 2025-07-14 | IHC Esports             | W   | 0.977      | 0.143        | -                | 0.233 (0.033)    | 0 (0.000) |     7.12 | dukefissura, frontales, kade0, lampada, mizu |
|           22 |      494 | 2025-07-13 | Chinggis Warriors       | W   | 0.970      | 0.143        | 0.028 (0.004)    | 0.475 (0.066)    | 0 (0.000) |    19.05 | dukefissura, frontales, kade0, lampada, mizu |
|           21 |      515 | 2025-07-12 | SemperFi Esports        | W   | 0.964      | 0.143        | 0.013 (0.002)    | 0.383 (0.053)    | 0 (0.000) |     9.79 | dukefissura, frontales, kade0, lampada, mizu |
|           20 |      522 | 2025-07-12 | IHC Esports             | W   | 0.963      | -            | -                | -                | 0 (0.000) |     5.99 | dukefissura, frontales, kade0, lampada, mizu |
|           19 |      551 | 2025-07-11 | The QUBE Esports        | W   | 0.957      | -            | -                | -                | 0 (0.000) |     1.75 | dukefissura, frontales, kade0, lampada, mizu |
|           18 |     1412 | 2025-05-12 | Ninjas in Pyjamas       | L   | 0.562      | -            | -                | -                | -         |    -0.63 | dukefissura, kade0, lampada, mizu, youka     |
|           17 |     1432 | 2025-05-12 | GamerLegion             | W   | 0.556      | 1.000        | 0.480 (0.267)    | 0.393 (0.218)    | 1 (0.556) |    17.16 | dukefissura, kade0, lampada, mizu, youka     |
|           16 |     1456 | 2025-05-11 | Aurora Gaming           | L   | 0.550      | -            | -                | -                | -         |    -0.30 | dukefissura, kade0, lampada, mizu, youka     |
|           15 |     1477 | 2025-05-10 | PaiN Gaming             | L   | 0.544      | -            | -                | -                | -         |    -0.42 | dukefissura, kade0, lampada, mizu, youka     |
|           14 |     2439 | 2025-04-01 | JiJieHao                | W   | 0.283      | 0.769        | 0.054 (0.012)    | 0.190 (0.041)    | 0 (0.000) |     5.61 | dukefissura, kade0, lampada, mizu, youka     |
|           13 |     2450 | 2025-03-30 | Rare Atom               | W   | 0.275      | 0.769        | 0.070 (0.015)    | 0.350 (0.074)    | -         |     6.87 | dukefissura, kade0, lampada, mizu, youka     |
|           12 |     2482 | 2025-03-30 | The Huns Esports        | W   | 0.270      | 0.624        | 0.035 (0.006)    | 0.243 (0.041)    | -         |     5.32 | dukefissura, kade0, lampada, mizu, youka     |
|           11 |     2548 | 2025-03-29 | The Huns Esports        | W   | 0.263      | 0.624        | 0.035 (0.006)    | 0.243 (0.040)    | -         |     5.26 | dukefissura, kade0, lampada, mizu, youka     |
|           10 |     2614 | 2025-03-28 | Chinggis Warriors       | W   | 0.256      | 0.624        | 0.028 (0.004)    | 0.475 (0.076)    | -         |     5.94 | dukefissura, kade0, lampada, mizu, youka     |
|            9 |     2701 | 2025-03-26 | Eruption                | W   | 0.248      | -            | -                | -                | -         |     3.41 | dukefissura, kade0, lampada, mizu, youka     |
|            8 |     3137 | 2025-03-09 | Rare Atom               | L   | 0.130      | -            | -                | -                | -         |    -0.86 | kade0, lampada, mizu, Re1GN, youka           |
|            7 |     3209 | 2025-03-08 | Chinggis Warriors       | W   | 0.123      | 0.769        | 0.028 (0.003)    | 0.475 (0.045)    | 1 (0.123) |     2.90 | kade0, lampada, mizu, Re1GN, youka           |
|            6 |     3272 | 2025-03-07 | JiJieHao                | W   | 0.117      | 0.769        | 0.054 (0.005)    | -                | 1 (0.117) |     2.46 | kade0, lampada, mizu, Re1GN, youka           |
|            5 |     3281 | 2025-03-06 | Eruption                | W   | 0.115      | -            | -                | -                | 1 (0.115) |     1.62 | kade0, lampada, mizu, Re1GN, youka           |
|            4 |     3491 | 2025-02-27 | ATOX Esports            | L   | 0.063      | -            | -                | -                | -         |    -1.76 | kade0, lampada, mizu, Re1GN, youka           |
|            3 |     3541 | 2025-02-26 | Chinggis Warriors       | L   | 0.056      | -            | -                | -                | -         |    -0.45 | kade0, lampada, mizu, Re1GN, youka           |
|            2 |     3575 | 2025-02-25 | Nomads (Mongolian team) | W   | 0.049      | -            | -                | -                | -         |     0.56 | kade0, lampada, mizu, Re1GN, youka           |
|            1 |     3607 | 2025-02-23 | ATOX Esports            | W   | 0.041      | -            | -                | -                | -         |     0.15 | kade0, lampada, mizu, Re1GN, youka           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,196.61)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.597 | $18,750.00     | $11,196.61      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
