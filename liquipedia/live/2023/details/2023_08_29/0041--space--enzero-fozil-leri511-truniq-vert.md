### Roster Details<br />
Team Name: Space<br />
Roster: enzero, fozil, leri511, TruNiQ, Vert<br />
Global Rank: [41](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [37]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1027.1<br />
<br />
Final Rank Value (1027.1) = Starting Rank Value (993.8) + Head To Head Adjustments (33.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.499[<sup>1</sup>](#table2)
- Bounty Collected: 0.425[<sup>2</sup>](#table1)
- Opponent Network: 0.304[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.904[<sup>2</sup>](#table1)

The average of these factors is 0.307<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 993.8
- 400 + ( ( 0.307 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 993.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      118 | 2023-08-24 | Monte            | L   | 1.000      | -            | -                | -                | -         |    -4.76 | enzero, fozil, leri511, TruNiQ, Vert    |
|           37 |      162 | 2023-08-22 | ThunderFlash     | W   | 1.000      | 0.435        | -                | 0.724 (0.315)    | 0 (0.000) |     9.75 | enzero, fozil, leri511, TruNiQ, Vert    |
|           36 |      190 | 2023-08-20 | Sampi            | W   | 1.000      | 0.435        | 0.087 (0.038)    | 1.000 (0.435)    | 0 (0.000) |    12.55 | enzero, fozil, leri511, TruNiQ, Vert    |
|           35 |      191 | 2023-08-20 | Monte            | W   | 1.000      | 0.435        | 0.318 (0.138)    | 1.000 (0.435)    | 0 (0.000) |    27.56 | enzero, fozil, leri511, TruNiQ, Vert    |
|           34 |      195 | 2023-08-20 | JANO             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.62 | enzero, fozil, leri511, TruNiQ, Vert    |
|           33 |      204 | 2023-08-19 | BIG              | W   | 1.000      | 0.435        | 0.163 (0.071)    | 0.525 (0.228)    | 0 (0.000) |    23.81 | enzero, fozil, leri511, TruNiQ, Vert    |
|           32 |      219 | 2023-08-18 | Into the Breach  | W   | 1.000      | 0.435        | 0.169 (0.074)    | 0.530 (0.230)    | 0 (0.000) |    21.89 | enzero, fozil, leri511, TruNiQ, Vert    |
|           31 |      224 | 2023-08-18 | ARCRED           | W   | 1.000      | 0.435        | -                | 0.588 (0.256)    | 0 (0.000) |     9.80 | enzero, fozil, leri511, TruNiQ, Vert    |
|           30 |      251 | 2023-08-16 | BetBoom          | L   | 1.000      | -            | -                | -                | -         |   -24.14 | enzero, fozil, leri511, TruNiQ, Vert    |
|           29 |      282 | 2023-08-15 | Zero Tenacity    | L   | 1.000      | -            | -                | -                | -         |   -21.91 | enzero, fozil, leri511, TruNiQ, Vert    |
|           28 |      291 | 2023-08-14 | 9 Pandas         | W   | 1.000      | 0.435        | 0.074 (0.032)    | 1.000 (0.435)    | 0 (0.000) |    16.50 | enzero, fozil, leri511, TruNiQ, Vert    |
|           27 |      365 | 2023-08-12 | Preasy           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.85 | enzero, fozil, leri511, TruNiQ, Vert    |
|           26 |      435 | 2023-08-10 | Sprout           | L   | 1.000      | -            | -                | -                | -         |   -26.36 | enzero, fozil, leri511, TruNiQ, Vert    |
|           25 |      442 | 2023-08-10 | faceaters        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.27 | enzero, fozil, leri511, TruNiQ, Vert    |
|           24 |      454 | 2023-08-10 | Question Mark    | L   | 1.000      | -            | -                | -                | -         |   -16.70 | enzero, fozil, leri511, TruNiQ, Vert    |
|           23 |      525 | 2023-08-08 | Entropiq         | W   | 1.000      | -            | -                | -                | -         |     2.15 | enzero, fozil, leri511, TruNiQ, Vert    |
|           22 |      636 | 2023-08-01 | ENCE Academy     | L   | 1.000      | -            | -                | -                | -         |   -23.37 | enzero, fozil, leri511, TruNiQ, Vert    |
|           21 |      645 | 2023-08-01 | ex-iNation       | W   | 1.000      | -            | -                | -                | -         |     4.40 | enzero, fozil, leri511, TruNiQ, Vert    |
|           20 |      718 | 2023-07-28 | 1WIN             | L   | 0.988      | -            | -                | -                | -         |    -6.37 | enzero, fozil, leri511, TruNiQ, Vert    |
|           19 |      742 | 2023-07-26 | B8               | W   | 0.974      | 0.435        | -                | 0.561 (0.238)    | -         |     8.34 | enzero, fozil, leri511, TruNiQ, Vert    |
|           18 |      762 | 2023-07-24 | Romania          | W   | 0.961      | -            | -                | -                | -         |     4.45 | enzero, fozil, leri511, TruNiQ, Vert    |
|           17 |      780 | 2023-07-23 | IKLA             | L   | 0.952      | -            | -                | -                | -         |   -25.22 | enzero, fozil, leri511, TruNiQ, Vert    |
|           16 |      824 | 2023-07-20 | Websterz         | W   | 0.935      | 0.435        | 0.044 (0.018)    | -                | -         |     9.92 | enzero, fozil, leri511, TruNiQ, Vert    |
|           15 |      861 | 2023-07-18 | ARCRED           | L   | 0.919      | -            | -                | -                | -         |   -20.56 | enzero, fozil, leri511, TruNiQ, Vert    |
|           14 |      977 | 2023-07-12 | ALTERNATE aTTaX  | L   | 0.880      | -            | -                | -                | -         |   -16.40 | enzero, fozil, leri511, TruNiQ, Vert    |
|           13 |      996 | 2023-07-11 | Endpoint         | W   | 0.875      | -            | -                | -                | -         |    11.09 | enzero, fozil, leri511, TruNiQ, Vert    |
|           12 |     1018 | 2023-07-11 | En av de lette   | W   | 0.874      | -            | -                | -                | -         |     3.93 | enzero, fozil, leri511, TruNiQ, Vert    |
|           11 |     1361 | 2023-06-07 | SINNERS          | W   | 0.648      | 0.371        | 0.069 (0.016)    | 1.000 (0.241)    | -         |     9.74 | enzero, fozil, leri511, TruNiQ, Vert    |
|           10 |     1487 | 2023-06-02 | SINNERS          | W   | 0.615      | 0.371        | 0.069 (0.016)    | 1.000 (0.228)    | -         |     9.39 | enzero, fozil, leri511, TruNiQ, Vert    |
|            9 |     1531 | 2023-06-01 | ex-Coalesce      | W   | 0.608      | -            | -                | -                | -         |     3.91 | enzero, fozil, leri511, TruNiQ, Vert    |
|            8 |     1573 | 2023-05-31 | 9 Pandas         | W   | 0.601      | 0.371        | 0.074 (0.016)    | -                | -         |    12.90 | enzero, fozil, leri511, TruNiQ, Vert    |
|            7 |     1611 | 2023-05-30 | ECLOT            | W   | 0.594      | 0.371        | 0.114 (0.025)    | -                | -         |    13.39 | enzero, fozil, leri511, TruNiQ, Vert    |
|            6 |     2181 | 2023-05-04 | ECSTATIC         | L   | 0.420      | -            | -                | -                | -         |    -6.27 | enzero, fozil, leri511, TruNiQ, Vert    |
|            5 |     2773 | 2023-04-07 | MOON             | L   | 0.241      | -            | -                | -                | -         |    -6.43 | enzero, fozil, H4SAN4TOR, leri511, Vert |
|            4 |     3031 | 2023-03-26 | Arcadia          | W   | 0.161      | -            | -                | -                | -         |     0.70 | enzero, fozil, H4SAN4TOR, leri511, Vert |
|            3 |     3545 | 2023-03-10 | Websterz         | L   | 0.054      | -            | -                | -                | -         |    -0.97 | enzero, fozil, H4SAN4TOR, leri511, Vert |
|            2 |     3584 | 2023-03-09 | ex-DomiNation    | L   | 0.047      | -            | -                | -                | -         |    -1.25 | enzero, fozil, H4SAN4TOR, leri511, Vert |
|            1 |     3613 | 2023-03-08 | ODLOTOWE AGENTKI | W   | 0.040      | -            | -                | -                | -         |     0.04 | enzero, fozil, H4SAN4TOR, leri511, Vert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,020.31)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-20 |      1.000 | $22,000.00     | $22,000.00      |
| 2023-06-07 |      0.648 | $7,000.00      | $4,536.30       |
| 2023-03-26 |      0.161 | $3,000.00      | $484.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
