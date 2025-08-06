### Roster Details<br />
Team Name: HOTU<br />
Roster: dukefissura, frontales, kade0, lampada, mizu<br />
Global Rank: [55](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [38]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  982.0<br />
<br />
Final Rank Value (982.0) = Starting Rank Value (892.0) + Head To Head Adjustments (90.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.394[<sup>1</sup>](#table2)
- Bounty Collected: 0.409[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- Own Network: 0.312[<sup>2</sup>](#table1)
- LAN Wins: 0.137[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 892.0
- 400 + ( ( 0.260 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 892.0


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
|           24 |      154 | 2025-07-19 | Partizan Esports        | L   | 1.000      | -            | -                | -                | -         |   -18.19 | dukefissura, frontales, kade0, lampada, mizu |
|           23 |      293 | 2025-07-14 | IHC Esports             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.66 | dukefissura, frontales, kade0, lampada, mizu |
|           22 |      311 | 2025-07-13 | Chinggis Warriors       | W   | 1.000      | 0.143        | 0.028 (0.004)    | 0.597 (0.085)    | 0 (0.000) |    18.54 | dukefissura, frontales, kade0, lampada, mizu |
|           21 |      332 | 2025-07-12 | SemperFi Esports        | W   | 1.000      | 0.143        | -                | 0.441 (0.063)    | 0 (0.000) |     9.75 | dukefissura, frontales, kade0, lampada, mizu |
|           20 |      339 | 2025-07-12 | IHC Esports             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.58 | dukefissura, frontales, kade0, lampada, mizu |
|           19 |      368 | 2025-07-11 | The QUBE Esports        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.57 | dukefissura, frontales, kade0, lampada, mizu |
|           18 |     1229 | 2025-05-12 | Ninjas in Pyjamas       | L   | 0.642      | -            | -                | -                | -         |    -0.96 | dukefissura, kade0, lampada, mizu, youka     |
|           17 |     1249 | 2025-05-12 | GamerLegion             | W   | 0.636      | 1.000        | 0.450 (0.286)    | 0.420 (0.267)    | 1 (0.636) |    19.50 | dukefissura, kade0, lampada, mizu, youka     |
|           16 |     1273 | 2025-05-11 | Aurora Gaming           | L   | 0.630      | -            | -                | -                | -         |    -0.35 | dukefissura, kade0, lampada, mizu, youka     |
|           15 |     1294 | 2025-05-10 | PaiN Gaming             | L   | 0.625      | -            | -                | -                | -         |    -0.56 | dukefissura, kade0, lampada, mizu, youka     |
|           14 |     2256 | 2025-04-01 | JiJieHao                | W   | 0.363      | 0.769        | 0.052 (0.015)    | 0.254 (0.071)    | 0 (0.000) |     6.97 | dukefissura, kade0, lampada, mizu, youka     |
|           13 |     2267 | 2025-03-30 | Rare Atom               | W   | 0.355      | 0.769        | 0.066 (0.018)    | 0.468 (0.128)    | -         |     8.95 | dukefissura, kade0, lampada, mizu, youka     |
|           12 |     2299 | 2025-03-30 | The Huns Esports        | W   | 0.350      | 0.624        | 0.035 (0.008)    | 0.303 (0.066)    | -         |     6.70 | dukefissura, kade0, lampada, mizu, youka     |
|           11 |     2365 | 2025-03-29 | The Huns Esports        | W   | 0.343      | 0.624        | 0.035 (0.008)    | 0.303 (0.065)    | -         |     6.71 | dukefissura, kade0, lampada, mizu, youka     |
|           10 |     2431 | 2025-03-28 | Chinggis Warriors       | W   | 0.336      | 0.624        | 0.028 (0.006)    | 0.597 (0.125)    | -         |     7.72 | dukefissura, kade0, lampada, mizu, youka     |
|            9 |     2518 | 2025-03-26 | Eruption                | W   | 0.328      | 0.624        | 0.009 (0.002)    | -                | -         |     4.33 | dukefissura, kade0, lampada, mizu, youka     |
|            8 |     2954 | 2025-03-09 | Rare Atom               | L   | 0.210      | -            | -                | -                | -         |    -1.35 | kade0, lampada, mizu, Re1GN, youka           |
|            7 |     3026 | 2025-03-08 | Chinggis Warriors       | W   | 0.203      | 0.769        | 0.028 (0.004)    | 0.597 (0.093)    | 1 (0.203) |     4.77 | kade0, lampada, mizu, Re1GN, youka           |
|            6 |     3089 | 2025-03-07 | JiJieHao                | W   | 0.197      | 0.769        | 0.052 (0.008)    | 0.254 (0.038)    | 1 (0.197) |     4.12 | kade0, lampada, mizu, Re1GN, youka           |
|            5 |     3098 | 2025-03-06 | Eruption                | W   | 0.195      | -            | -                | -                | 1 (0.195) |     2.69 | kade0, lampada, mizu, Re1GN, youka           |
|            4 |     3308 | 2025-02-27 | ATOX Esports            | L   | 0.143      | -            | -                | -                | -         |    -3.91 | kade0, lampada, mizu, Re1GN, youka           |
|            3 |     3358 | 2025-02-26 | Chinggis Warriors       | L   | 0.136      | -            | -                | -                | -         |    -1.10 | kade0, lampada, mizu, Re1GN, youka           |
|            2 |     3392 | 2025-02-25 | Nomads (Mongolian team) | W   | 0.129      | -            | -                | -                | -         |     1.41 | kade0, lampada, mizu, Re1GN, youka           |
|            1 |     3424 | 2025-02-23 | ATOX Esports            | W   | 0.121      | -            | -                | -                | -         |     0.49 | kade0, lampada, mizu, Re1GN, youka           |

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
