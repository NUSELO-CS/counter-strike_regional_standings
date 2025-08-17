### Roster Details<br />
Team Name: Team Vitality<br />
Roster: apEX, flameZ, mezii, ropz, ZywOo<br />
Global Rank: [1](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [1]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  2054.5<br />
<br />
Final Rank Value (2054.5) = Starting Rank Value (2000.0) + Head To Head Adjustments (54.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.864[<sup>2</sup>](#table1)
- Opponent Network: 0.419[<sup>2</sup>](#table1)
- LAN Wins: 0.994[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.557[<sup>2</sup>](#table1)

The average of these factors is 0.819<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.819 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       38 | 2025-08-10 | Legacy        | W   | 1.000      | -            | -                | -                | -         |     0.92 | apEX, flameZ, mezii, ropz, ZywOo |
|           37 |       73 | 2025-08-08 | NRG           | W   | 1.000      | -            | -                | -                | -         |     0.19 | apEX, flameZ, mezii, ropz, ZywOo |
|           36 |      143 | 2025-08-02 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -21.16 | apEX, flameZ, mezii, ropz, ZywOo |
|           35 |      203 | 2025-07-29 | The MongolZ   | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.492 (0.492)    | 1 (1.000) |     6.79 | apEX, flameZ, mezii, ropz, ZywOo |
|           34 |      235 | 2025-07-27 | G2 Esports    | W   | 1.000      | 1.000        | 0.465 (0.465)    | 0.334 (0.334)    | 1 (1.000) |     2.33 | apEX, flameZ, mezii, ropz, ZywOo |
|           33 |      268 | 2025-07-26 | Astralis      | W   | 1.000      | 1.000        | 0.977 (0.977)    | 0.481 (0.481)    | 1 (1.000) |     4.73 | apEX, flameZ, mezii, ropz, ZywOo |
|           32 |      714 | 2025-06-22 | The MongolZ   | W   | 0.833      | 1.000        | 1.000 (0.833)    | 0.492 (0.409)    | 1 (0.833) |     5.70 | apEX, flameZ, mezii, ropz, ZywOo |
|           31 |      730 | 2025-06-21 | MOUZ          | W   | 0.825      | 1.000        | 1.000 (0.825)    | 0.565 (0.467)    | 1 (0.825) |     8.60 | apEX, flameZ, mezii, ropz, ZywOo |
|           30 |      744 | 2025-06-20 | Natus Vincere | W   | 0.819      | 1.000        | 0.603 (0.494)    | 0.425 (0.348)    | 1 (0.819) |     4.80 | apEX, flameZ, mezii, ropz, ZywOo |
|           29 |      846 | 2025-06-14 | Virtus.pro    | W   | 0.780      | -            | -                | -                | 1 (0.780) |     1.49 | apEX, flameZ, mezii, ropz, ZywOo |
|           28 |      901 | 2025-06-13 | 3DMAX         | W   | 0.771      | 1.000        | -                | 0.475 (0.367)    | 1 (0.771) |     3.19 | apEX, flameZ, mezii, ropz, ZywOo |
|           27 |      918 | 2025-06-12 | Nemiga Gaming | W   | 0.767      | 1.000        | -                | 0.583 (0.447)    | 1 (0.767) |     0.35 | apEX, flameZ, mezii, ropz, ZywOo |
|           26 |      933 | 2025-06-12 | Legacy        | L   | 0.765      | -            | -                | -                | -         |   -23.49 | apEX, flameZ, mezii, ropz, ZywOo |
|           25 |     1141 | 2025-05-25 | MOUZ          | W   | 0.646      | 1.000        | 1.000 (0.646)    | 0.565 (0.365)    | 1 (0.646) |     7.28 | apEX, flameZ, mezii, ropz, ZywOo |
|           24 |     1151 | 2025-05-24 | Team Falcons  | W   | 0.640      | 1.000        | 0.994 (0.636)    | -                | -         |     3.24 | apEX, flameZ, mezii, ropz, ZywOo |
|           23 |     1201 | 2025-05-21 | The MongolZ   | W   | 0.620      | 1.000        | 1.000 (0.620)    | -                | -         |     4.64 | apEX, flameZ, mezii, ropz, ZywOo |
|           22 |     1229 | 2025-05-20 | GamerLegion   | W   | 0.612      | -            | -                | -                | -         |     1.51 | apEX, flameZ, mezii, ropz, ZywOo |
|           21 |     1260 | 2025-05-19 | Legacy        | W   | 0.606      | 1.000        | -                | 0.799 (0.484)    | -         |     0.36 | apEX, flameZ, mezii, ropz, ZywOo |
|           20 |     1639 | 2025-05-04 | Team Falcons  | W   | 0.504      | -            | -                | -                | -         |     2.61 | apEX, flameZ, mezii, ropz, ZywOo |
|           19 |     1664 | 2025-05-03 | Team Spirit   | W   | 0.499      | -            | -                | -                | -         |     6.47 | apEX, flameZ, mezii, ropz, ZywOo |
|           18 |     1711 | 2025-05-01 | MOUZ          | W   | 0.484      | -            | -                | -                | -         |     6.01 | apEX, flameZ, mezii, ropz, ZywOo |
|           17 |     1736 | 2025-04-30 | Wildcard      | W   | 0.478      | -            | -                | -                | -         |     0.05 | apEX, flameZ, mezii, ropz, ZywOo |
|           16 |     1817 | 2025-04-26 | Team Falcons  | W   | 0.456      | 1.000        | 0.994 (0.453)    | -                | -         |     2.19 | apEX, flameZ, mezii, ropz, ZywOo |
|           15 |     1847 | 2025-04-26 | The MongolZ   | W   | 0.450      | -            | -                | -                | -         |     3.57 | apEX, flameZ, mezii, ropz, ZywOo |
|           14 |     1890 | 2025-04-23 | Team Falcons  | W   | 0.430      | -            | -                | -                | -         |     1.98 | apEX, flameZ, mezii, ropz, ZywOo |
|           13 |     1908 | 2025-04-21 | Team Liquid   | W   | 0.422      | -            | -                | -                | -         |     0.26 | apEX, flameZ, mezii, ropz, ZywOo |
|           12 |     1919 | 2025-04-21 | FlyQuest      | W   | 0.416      | -            | -                | -                | -         |     0.30 | apEX, flameZ, mezii, ropz, ZywOo |
|           11 |     2467 | 2025-03-30 | MOUZ          | W   | 0.271      | -            | -                | -                | -         |     3.61 | apEX, flameZ, mezii, ropz, ZywOo |
|           10 |     2509 | 2025-03-29 | Team Spirit   | W   | 0.266      | -            | -                | -                | -         |     3.91 | apEX, flameZ, mezii, ropz, ZywOo |
|            9 |     2788 | 2025-03-24 | MOUZ          | W   | 0.230      | -            | -                | -                | -         |     3.14 | apEX, flameZ, mezii, ropz, ZywOo |
|            8 |     2820 | 2025-03-21 | Virtus.pro    | W   | 0.213      | -            | -                | -                | -         |     0.45 | apEX, flameZ, mezii, ropz, ZywOo |
|            7 |     2878 | 2025-03-19 | Astralis      | W   | 0.198      | -            | -                | -                | -         |     1.63 | apEX, flameZ, mezii, ropz, ZywOo |
|            6 |     2942 | 2025-03-16 | MOUZ          | W   | 0.178      | -            | -                | -                | -         |     2.46 | apEX, flameZ, mezii, ropz, ZywOo |
|            5 |     2952 | 2025-03-15 | The MongolZ   | W   | 0.172      | -            | -                | -                | -         |     1.66 | apEX, flameZ, mezii, ropz, ZywOo |
|            4 |     2977 | 2025-03-14 | Team Liquid   | W   | 0.165      | -            | -                | -                | -         |     0.11 | apEX, flameZ, mezii, ropz, ZywOo |
|            3 |     3108 | 2025-03-09 | MOUZ          | W   | 0.131      | -            | -                | -                | -         |     1.82 | apEX, flameZ, mezii, ropz, ZywOo |
|            2 |     3180 | 2025-03-08 | 3DMAX         | W   | 0.125      | -            | -                | -                | -         |     0.74 | apEX, flameZ, mezii, ropz, ZywOo |
|            1 |     3274 | 2025-03-07 | MIBR          | W   | 0.116      | -            | -                | -                | -         |     0.08 | apEX, flameZ, mezii, ropz, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($986,551.74)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $108,000.00    | $108,000.00     |
| 2025-06-22 |      0.833 | $500,000.00    | $416,284.72     |
| 2025-05-25 |      0.646 | $285,000.00    | $184,082.29     |
| 2025-05-04 |      0.504 | $125,000.00    | $63,046.88      |
| 2025-04-26 |      0.456 | $285,000.00    | $129,853.13     |
| 2025-03-30 |      0.271 | $150,000.00    | $40,718.75      |
| 2025-03-16 |      0.178 | $250,000.00    | $44,565.97      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
