### Roster Details<br />
Team Name: HOTU<br />
Roster: dukefissura, frontales, kade0, lampada, mizu<br />
Global Rank: [57](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [40]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  960.3<br />
<br />
Final Rank Value (960.3) = Starting Rank Value (867.2) + Head To Head Adjustments (93.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.394[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.137[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 867.2
- 400 + ( ( 0.247 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 867.2


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
|           24 |      154 | 2025-07-19 | Partizan Esports        | L   | 1.000      | -            | -                | -                | -         |   -17.69 | dukefissura, frontales, kade0, lampada, mizu |
|           23 |      293 | 2025-07-14 | IHC Esports             | W   | 1.000      | 0.143        | -                | 0.265 (0.038)    | 0 (0.000) |     7.15 | dukefissura, frontales, kade0, lampada, mizu |
|           22 |      311 | 2025-07-13 | Chinggis Warriors       | W   | 1.000      | 0.143        | 0.028 (0.004)    | 0.597 (0.085)    | 0 (0.000) |    18.64 | dukefissura, frontales, kade0, lampada, mizu |
|           21 |      332 | 2025-07-12 | SemperFi Esports        | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.441 (0.063)    | 0 (0.000) |    10.29 | dukefissura, frontales, kade0, lampada, mizu |
|           20 |      339 | 2025-07-12 | IHC Esports             | W   | 1.000      | 0.143        | -                | 0.265 (0.038)    | 0 (0.000) |     6.11 | dukefissura, frontales, kade0, lampada, mizu |
|           19 |      368 | 2025-07-11 | The QUBE Esports        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.78 | dukefissura, frontales, kade0, lampada, mizu |
|           18 |     1229 | 2025-05-12 | Ninjas in Pyjamas       | L   | 0.642      | -            | -                | -                | -         |    -1.06 | dukefissura, kade0, lampada, mizu, youka     |
|           17 |     1249 | 2025-05-12 | GamerLegion             | W   | 0.636      | 1.000        | 0.450 (0.286)    | 0.420 (0.267)    | 1 (0.636) |    19.52 | dukefissura, kade0, lampada, mizu, youka     |
|           16 |     1273 | 2025-05-11 | Aurora Gaming           | L   | 0.630      | -            | -                | -                | -         |    -0.32 | dukefissura, kade0, lampada, mizu, youka     |
|           15 |     1294 | 2025-05-10 | PaiN Gaming             | L   | 0.625      | -            | -                | -                | -         |    -0.71 | dukefissura, kade0, lampada, mizu, youka     |
|           14 |     2256 | 2025-04-01 | JiJieHao                | W   | 0.363      | 0.143        | 0.052 (0.003)    | -                | 0 (0.000) |     7.11 | dukefissura, kade0, lampada, mizu, youka     |
|           13 |     2267 | 2025-03-30 | Rare Atom               | W   | 0.355      | 0.143        | 0.066 (0.003)    | 0.468 (0.024)    | -         |     8.86 | dukefissura, kade0, lampada, mizu, youka     |
|           12 |     2299 | 2025-03-30 | The Huns Esports        | W   | 0.350      | 0.143        | 0.035 (0.002)    | 0.303 (0.015)    | -         |     6.91 | dukefissura, kade0, lampada, mizu, youka     |
|           11 |     2365 | 2025-03-29 | The Huns Esports        | W   | 0.343      | 0.143        | 0.035 (0.002)    | 0.303 (0.015)    | -         |     6.92 | dukefissura, kade0, lampada, mizu, youka     |
|           10 |     2431 | 2025-03-28 | Chinggis Warriors       | W   | 0.336      | 0.143        | 0.028 (0.001)    | 0.597 (0.029)    | -         |     7.79 | dukefissura, kade0, lampada, mizu, youka     |
|            9 |     2518 | 2025-03-26 | Eruption                | W   | 0.328      | -            | -                | -                | -         |     4.44 | dukefissura, kade0, lampada, mizu, youka     |
|            8 |     2954 | 2025-03-09 | Rare Atom               | L   | 0.210      | -            | -                | -                | -         |    -1.41 | kade0, lampada, mizu, Re1GN, youka           |
|            7 |     3026 | 2025-03-08 | Chinggis Warriors       | W   | 0.203      | 0.143        | 0.028 (0.001)    | 0.597 (0.017)    | 1 (0.203) |     4.82 | kade0, lampada, mizu, Re1GN, youka           |
|            6 |     3089 | 2025-03-07 | JiJieHao                | W   | 0.197      | 0.143        | 0.052 (0.001)    | -                | 1 (0.197) |     4.20 | kade0, lampada, mizu, Re1GN, youka           |
|            5 |     3098 | 2025-03-06 | Eruption                | W   | 0.195      | -            | -                | -                | 1 (0.195) |     2.75 | kade0, lampada, mizu, Re1GN, youka           |
|            4 |     3308 | 2025-02-27 | ATOX Esports            | L   | 0.143      | -            | -                | -                | -         |    -3.92 | kade0, lampada, mizu, Re1GN, youka           |
|            3 |     3358 | 2025-02-26 | Chinggis Warriors       | L   | 0.136      | -            | -                | -                | -         |    -1.07 | kade0, lampada, mizu, Re1GN, youka           |
|            2 |     3392 | 2025-02-25 | Nomads (Mongolian team) | W   | 0.129      | -            | -                | -                | -         |     1.44 | kade0, lampada, mizu, Re1GN, youka           |
|            1 |     3424 | 2025-02-23 | ATOX Esports            | W   | 0.121      | -            | -                | -                | -         |     0.48 | kade0, lampada, mizu, Re1GN, youka           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,697.92)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.677 | $18,750.00     | $12,697.92      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
