### Roster Details<br />
Team Name: HOTU<br />
Roster: dukefissura, frontales, kade0, lampada, mizu<br />
Global Rank: [58](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [40]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  955.3<br />
<br />
Final Rank Value (955.3) = Starting Rank Value (865.0) + Head To Head Adjustments (90.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.394[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.130[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.313[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.0
- 400 + ( ( 0.244 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 865.0


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
|           24 |      199 | 2025-07-19 | Partizan Esports        | L   | 1.000      | -            | -                | -                | -         |   -17.51 | dukefissura, frontales, kade0, lampada, mizu |
|           23 |      338 | 2025-07-14 | IHC Esports             | W   | 1.000      | 0.143        | -                | 0.271 (0.039)    | 0 (0.000) |     7.28 | dukefissura, frontales, kade0, lampada, mizu |
|           22 |      356 | 2025-07-13 | Chinggis Warriors       | W   | 1.000      | 0.143        | 0.028 (0.004)    | 0.592 (0.085)    | 0 (0.000) |    18.85 | dukefissura, frontales, kade0, lampada, mizu |
|           21 |      377 | 2025-07-12 | SemperFi Esports        | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.446 (0.064)    | 0 (0.000) |    10.34 | dukefissura, frontales, kade0, lampada, mizu |
|           20 |      384 | 2025-07-12 | IHC Esports             | W   | 1.000      | 0.143        | -                | 0.271 (0.039)    | 0 (0.000) |     6.23 | dukefissura, frontales, kade0, lampada, mizu |
|           19 |      413 | 2025-07-11 | The QUBE Esports        | W   | 1.000      | 0.143        | -                | 0.102 (0.015)    | 0 (0.000) |     1.84 | dukefissura, frontales, kade0, lampada, mizu |
|           18 |     1274 | 2025-05-12 | Ninjas in Pyjamas       | L   | 0.622      | -            | -                | -                | -         |    -0.98 | dukefissura, kade0, lampada, mizu, youka     |
|           17 |     1294 | 2025-05-12 | GamerLegion             | W   | 0.616      | 1.000        | 0.454 (0.280)    | 0.418 (0.258)    | 1 (0.616) |    18.92 | dukefissura, kade0, lampada, mizu, youka     |
|           16 |     1318 | 2025-05-11 | Aurora Gaming           | L   | 0.610      | -            | -                | -                | -         |    -0.31 | dukefissura, kade0, lampada, mizu, youka     |
|           15 |     1339 | 2025-05-10 | PaiN Gaming             | L   | 0.604      | -            | -                | -                | -         |    -0.67 | dukefissura, kade0, lampada, mizu, youka     |
|           14 |     2301 | 2025-04-01 | JiJieHao                | W   | 0.343      | 0.143        | 0.052 (0.003)    | -                | 0 (0.000) |     6.75 | dukefissura, kade0, lampada, mizu, youka     |
|           13 |     2312 | 2025-03-30 | Rare Atom               | W   | 0.335      | 0.143        | 0.066 (0.003)    | 0.457 (0.022)    | -         |     8.32 | dukefissura, kade0, lampada, mizu, youka     |
|           12 |     2344 | 2025-03-30 | The Huns Esports        | W   | 0.330      | 0.143        | 0.035 (0.002)    | 0.299 (0.014)    | -         |     6.54 | dukefissura, kade0, lampada, mizu, youka     |
|           11 |     2410 | 2025-03-29 | The Huns Esports        | W   | 0.323      | 0.143        | 0.035 (0.002)    | -                | -         |     6.53 | dukefissura, kade0, lampada, mizu, youka     |
|           10 |     2476 | 2025-03-28 | Chinggis Warriors       | W   | 0.316      | 0.143        | 0.028 (0.001)    | 0.592 (0.027)    | -         |     7.33 | dukefissura, kade0, lampada, mizu, youka     |
|            9 |     2563 | 2025-03-26 | Eruption                | W   | 0.308      | -            | -                | -                | -         |     4.20 | dukefissura, kade0, lampada, mizu, youka     |
|            8 |     2999 | 2025-03-09 | Rare Atom               | L   | 0.189      | -            | -                | -                | -         |    -1.29 | kade0, lampada, mizu, Re1GN, youka           |
|            7 |     3071 | 2025-03-08 | Chinggis Warriors       | W   | 0.183      | 0.143        | 0.028 (0.001)    | 0.592 (0.015)    | 1 (0.183) |     4.33 | kade0, lampada, mizu, Re1GN, youka           |
|            6 |     3134 | 2025-03-07 | JiJieHao                | W   | 0.177      | 0.143        | 0.052 (0.001)    | -                | 1 (0.177) |     3.76 | kade0, lampada, mizu, Re1GN, youka           |
|            5 |     3143 | 2025-03-06 | Eruption                | W   | 0.175      | -            | -                | -                | 1 (0.175) |     2.48 | kade0, lampada, mizu, Re1GN, youka           |
|            4 |     3353 | 2025-02-27 | ATOX Esports            | L   | 0.123      | -            | -                | -                | -         |    -3.39 | kade0, lampada, mizu, Re1GN, youka           |
|            3 |     3403 | 2025-02-26 | Chinggis Warriors       | L   | 0.116      | -            | -                | -                | -         |    -0.92 | kade0, lampada, mizu, Re1GN, youka           |
|            2 |     3437 | 2025-02-25 | Nomads (Mongolian team) | W   | 0.109      | -            | -                | -                | -         |     1.22 | kade0, lampada, mizu, Re1GN, youka           |
|            1 |     3469 | 2025-02-23 | ATOX Esports            | W   | 0.101      | -            | -                | -                | -         |     0.39 | kade0, lampada, mizu, Re1GN, youka           |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,320.31)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.657 | $18,750.00     | $12,320.31      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
