### Roster Details<br />
Team Name: Crashers<br />
Roster: antonini, Machado, nikz, Reix, Thuister<br />
Global Rank: [192](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_15.md)<br />
Regional Rank: [59]( ../../standings_americas_2025_08_15.md)<br />
<br />
Final Rank Value:  600.8<br />
<br />
Final Rank Value (600.8) = Starting Rank Value (644.5) + Head To Head Adjustments (-43.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.149[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.5
- 400 + ( ( 0.125 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 644.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      193 | 2025-07-30 | Bad Luck         | L   | 1.000      | -            | -                | -                | -         |   -17.88 | antonini, Machado, nikz, Reix, Thuister  |
|           20 |      206 | 2025-07-29 | Dusty Roots      | L   | 1.000      | -            | -                | -                | -         |   -15.74 | antonini, Machado, nikz, Reix, Thuister  |
|           19 |      227 | 2025-07-27 | RED Canids       | L   | 1.000      | -            | -                | -                | -         |    -6.21 | antonini, Machado, nikz, Reix, Thuister  |
|           18 |      276 | 2025-07-25 | JERSA ESPORTS    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.097 (0.014)    | 0 (0.000) |    10.76 | antonini, Machado, nikz, Reix, Thuister  |
|           17 |      581 | 2025-07-09 | Elevate          | L   | 0.946      | -            | -                | -                | -         |   -18.81 | antonini, nikz, proSHOW, Reix, Thuister  |
|           16 |      590 | 2025-07-09 | 2Game Esports    | L   | 0.945      | -            | -                | -                | -         |    -7.29 | antonini, nikz, proSHOW, Reix, Thuister  |
|           15 |      618 | 2025-07-08 | Sharks Esports   | L   | 0.938      | -            | -                | -                | -         |    -4.23 | antonini, nikz, proSHOW, Reix, Thuister  |
|           14 |     1152 | 2025-05-24 | Sharks Esports   | L   | 0.639      | -            | -                | -                | -         |    -2.77 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|           13 |     1278 | 2025-05-18 | Tropa do KinGui  | W   | 0.599      | 0.326        | 0.001 (0.000)    | 0.033 (0.006)    | 0 (0.000) |     7.79 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|           12 |     1356 | 2025-05-14 | ZZZZZZZZZZ       | W   | 0.573      | 0.326        | 0.000 (0.000)    | 0.026 (0.005)    | 0 (0.000) |     8.37 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|           11 |     1380 | 2025-05-13 | SELVA            | W   | 0.567      | 0.326        | 0.018 (0.003)    | 0.292 (0.054)    | 0 (0.000) |    13.05 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|           10 |     1390 | 2025-05-13 | Keyd Stars       | L   | 0.566      | -            | -                | -                | -         |    -6.44 | antonini, nikz, proSHOW, Reix, SHOOWTiME |
|            9 |     2299 | 2025-04-04 | ODDIK            | L   | 0.304      | -            | -                | -                | -         |    -0.79 | antonini, nikz, proSHOW, Reix, Thuister  |
|            8 |     2321 | 2025-04-03 | Imperial Esports | L   | 0.298      | -            | -                | -                | -         |    -0.34 | antonini, nikz, proSHOW, Reix, Thuister  |
|            7 |     2528 | 2025-03-29 | Sharks Esports   | L   | 0.264      | -            | -                | -                | -         |    -0.95 | antonini, nikz, proSHOW, Reix, Thuister  |
|            6 |     2584 | 2025-03-28 | Bad Luck         | W   | 0.259      | 0.769        | 0.000 (0.000)    | 0.118 (0.023)    | 0 (0.000) |     2.96 | antonini, nikz, proSHOW, Reix, Thuister  |
|            5 |     2646 | 2025-03-27 | RED Canids       | L   | 0.253      | -            | -                | -                | -         |    -3.18 | antonini, nikz, proSHOW, Reix, Thuister  |
|            4 |     3088 | 2025-03-09 | Dusty Roots      | L   | 0.133      | -            | -                | -                | -         |    -2.66 | antonini, nikz, proSHOW, Reix, Thuister  |
|            3 |     3110 | 2025-03-09 | Elevate          | W   | 0.131      | 0.769        | 0.000 (0.000)    | 0.222 (0.022)    | 0 (0.000) |     1.42 | antonini, nikz, proSHOW, Reix, Thuister  |
|            2 |     3185 | 2025-03-08 | 20/70            | W   | 0.125      | 0.769        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.80 | antonini, nikz, proSHOW, Reix, Thuister  |
|            1 |     3255 | 2025-03-07 | RED Canids       | L   | 0.118      | -            | -                | -                | -         |    -1.52 | antonini, nikz, proSHOW, Reix, Thuister  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($599.85)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-29 |      0.672 | $892.00        | $599.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
