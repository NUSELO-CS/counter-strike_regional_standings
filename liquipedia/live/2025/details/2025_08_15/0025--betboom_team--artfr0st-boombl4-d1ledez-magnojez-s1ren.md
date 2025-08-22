### Roster Details<br />
Team Name: BetBoom Team<br />
Roster: ArtFr0st, Boombl4, d1Ledez, Magnojez, s1ren<br />
Global Rank: [25](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [18]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  1352.3<br />
<br />
Final Rank Value (1352.3) = Starting Rank Value (1440.8) + Head To Head Adjustments (-88.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.695[<sup>1</sup>](#table2)
- Bounty Collected: 0.542[<sup>2</sup>](#table1)
- Opponent Network: 0.291[<sup>2</sup>](#table1)
- LAN Wins: 0.604[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.549[<sup>2</sup>](#table1)

The average of these factors is 0.533<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1440.8
- 400 + ( ( 0.533 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1440.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |       35 | 2025-08-10 | FUT Esports            | L   | 1.000      | -            | -                | -                | -         |   -24.20 | ArtFr0st, Boombl4, d1Ledez, Magnojez, s1ren |
|           54 |       41 | 2025-08-10 | Sashi Esport           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.64 | ArtFr0st, Boombl4, d1Ledez, Magnojez, s1ren |
|           53 |       87 | 2025-08-07 | SAW                    | L   | 1.000      | -            | -                | -                | -         |   -14.52 | ArtFr0st, Boombl4, d1Ledez, Magnojez, s1ren |
|           52 |      105 | 2025-08-05 | FaZe Clan              | L   | 1.000      | -            | -                | -                | -         |    -4.20 | ArtFr0st, Boombl4, d1Ledez, Magnojez, s1ren |
|           51 |      343 | 2025-07-19 | Astralis               | L   | 1.000      | -            | -                | -                | -         |    -3.28 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren   |
|           50 |      376 | 2025-07-18 | GamerLegion            | W   | 1.000      | 1.000        | 0.480 (0.480)    | 0.393 (0.393)    | 1 (1.000) |    24.82 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren   |
|           49 |      393 | 2025-07-17 | BIG                    | W   | 0.999      | 1.000        | 0.189 (0.189)    | 0.352 (0.352)    | 1 (0.999) |     8.36 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren   |
|           48 |      426 | 2025-07-16 | HEROIC                 | W   | 0.992      | 1.000        | 0.429 (0.425)    | 0.611 (0.606)    | 1 (0.992) |    23.37 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren   |
|           47 |      449 | 2025-07-15 | Complexity             | L   | 0.984      | -            | -                | -                | -         |   -14.71 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren   |
|           46 |      984 | 2025-06-08 | MIBR                   | L   | 0.739      | -            | -                | -                | -         |   -12.63 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           45 |     1001 | 2025-06-07 | HEROIC                 | L   | 0.733      | -            | -                | -                | -         |    -4.93 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           44 |     1011 | 2025-06-07 | 3DMAX                  | L   | 0.732      | -            | -                | -                | -         |    -3.04 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           43 |     1029 | 2025-06-05 | Wildcard               | W   | 0.719      | 0.624        | -                | 0.426 (0.191)    | 1 (0.719) |     3.47 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           42 |     1049 | 2025-06-04 | Legacy                 | W   | 0.711      | 0.624        | 0.125 (0.056)    | 0.799 (0.355)    | 1 (0.711) |    10.18 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           41 |     1057 | 2025-06-03 | FlyQuest               | L   | 0.707      | -            | -                | -                | -         |   -10.92 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           40 |     1065 | 2025-06-03 | Nemiga Gaming          | W   | 0.705      | 0.624        | 0.077 (0.034)    | 0.583 (0.257)    | 1 (0.705) |     6.53 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           39 |     1342 | 2025-05-15 | ECSTATIC               | L   | 0.578      | -            | -                | -                | -         |   -11.90 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           38 |     1475 | 2025-05-10 | ECSTATIC               | L   | 0.545      | -            | -                | -                | -         |   -11.67 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           37 |     1643 | 2025-05-04 | RUBY                   | L   | 0.504      | -            | -                | -                | -         |   -14.85 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           36 |     1667 | 2025-05-03 | GUN5 Esports           | W   | 0.498      | -            | -                | -                | 0 (0.000) |     1.37 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           35 |     1807 | 2025-04-27 | HEROIC                 | L   | 0.457      | -            | -                | -                | -         |    -3.92 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           34 |     1835 | 2025-04-26 | B8                     | L   | 0.451      | -            | -                | -                | -         |    -8.35 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           33 |     1857 | 2025-04-25 | Imperial Esports       | W   | 0.445      | 0.548        | 0.202 (0.049)    | 0.588 (0.143)    | 0 (0.000) |     3.90 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           32 |     1879 | 2025-04-24 | Wildcard               | W   | 0.438      | -            | -                | -                | 0 (0.000) |     1.45 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           31 |     1935 | 2025-04-20 | ENCE                   | L   | 0.410      | -            | -                | -                | -         |   -10.98 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           30 |     1959 | 2025-04-18 | ENCE                   | W   | 0.398      | 0.657        | 0.202 (0.053)    | 0.801 (0.209)    | -         |     1.83 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           29 |     1971 | 2025-04-18 | LA MASIA               | W   | 0.397      | -            | -                | -                | -         |     0.18 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           28 |     1985 | 2025-04-17 | Team Spirit Academy    | W   | 0.392      | -            | -                | -                | -         |     1.10 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           27 |     1989 | 2025-04-17 | Metizport              | W   | 0.391      | -            | -                | -                | -         |     0.91 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           26 |     2003 | 2025-04-17 | Nexus Gaming           | W   | 0.390      | 0.657        | 0.154 (0.039)    | 0.767 (0.197)    | -         |     0.81 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           25 |     2029 | 2025-04-16 | 9Pandas                | W   | 0.384      | -            | -                | -                | -         |     0.59 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           24 |     2052 | 2025-04-15 | Fnatic                 | W   | 0.377      | -            | -                | -                | -         |     3.93 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           23 |     2062 | 2025-04-14 | Nemiga Gaming          | L   | 0.372      | -            | -                | -                | -         |    -8.27 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           22 |     2075 | 2025-04-14 | SAW                    | W   | 0.370      | 0.525        | 0.328 (0.064)    | -                | -         |     6.87 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           21 |     2109 | 2025-04-12 | BC.Game Esports        | W   | 0.357      | -            | -                | -                | -         |     0.48 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           20 |     2322 | 2025-04-03 | Partizan Esports       | L   | 0.298      | -            | -                | -                | -         |    -8.70 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           19 |     2329 | 2025-04-03 | LA MASIA               | W   | 0.297      | -            | -                | -                | -         |     0.14 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           18 |     2339 | 2025-04-03 | Nexus Gaming           | W   | 0.296      | -            | -                | -                | -         |     0.66 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           17 |     2373 | 2025-04-02 | Dynamo Eclot           | W   | 0.291      | -            | -                | -                | -         |     0.62 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           16 |     2394 | 2025-04-02 | ENCE                   | W   | 0.290      | 0.607        | 0.202 (0.035)    | -                | -         |     1.26 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           15 |     2470 | 2025-03-30 | Metizport              | L   | 0.271      | -            | -                | -                | -         |    -8.02 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           14 |     2478 | 2025-03-30 | TEAM NEXT LEVEL        | W   | 0.270      | 0.769        | -                | 1.000 (0.208)    | -         |     1.47 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           13 |     2517 | 2025-03-29 | Monte                  | W   | 0.265      | -            | -                | -                | -         |     0.18 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           12 |     2538 | 2025-03-29 | 9Pandas                | W   | 0.264      | -            | -                | -                | -         |     0.32 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           11 |     2608 | 2025-03-28 | OG                     | W   | 0.256      | -            | -                | -                | -         |     1.46 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|           10 |     2673 | 2025-03-27 | TEAM NEXT LEVEL        | L   | 0.250      | -            | -                | -                | -         |    -6.55 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|            9 |     2995 | 2025-03-13 | FUT Esports            | L   | 0.157      | -            | -                | -                | -         |    -4.40 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|            8 |     3027 | 2025-03-11 | Betclic Apogee Esports | L   | 0.145      | -            | -                | -                | -         |    -4.00 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|            7 |     3049 | 2025-03-10 | Nemiga Gaming          | W   | 0.139      | -            | -                | -                | -         |     1.14 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|            6 |     3070 | 2025-03-10 | Team Spirit Academy    | W   | 0.138      | -            | -                | -                | -         |     0.36 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|            5 |     3096 | 2025-03-09 | Zero Tenacity          | W   | 0.132      | -            | -                | -                | -         |     0.20 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|            4 |     3126 | 2025-03-09 | CYBERSHOKE Esports     | W   | 0.130      | -            | -                | -                | -         |     0.19 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|            3 |     3179 | 2025-03-08 | 9Pandas                | L   | 0.125      | -            | -                | -                | -         |    -3.80 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|            2 |     3199 | 2025-03-08 | Team Spirit Academy    | L   | 0.124      | -            | -                | -                | -         |    -3.59 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |
|            1 |     3262 | 2025-03-07 | ARCRED                 | W   | 0.118      | -            | -                | -                | -         |     0.15 | Ax1Le, Boombl4, Magnojez, s1ren, zorte      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($134,452.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      1.000 | $105,000.00    | $105,000.00     |
| 2025-06-10 |      0.753 | $10,000.00     | $7,528.47       |
| 2025-05-11 |      0.551 | $2,014.05      | $1,110.38       |
| 2025-04-27 |      0.458 | $20,000.00     | $9,165.28       |
| 2025-04-20 |      0.412 | $21,000.00     | $8,656.67       |
| 2025-04-03 |      0.299 | $10,000.00     | $2,991.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
