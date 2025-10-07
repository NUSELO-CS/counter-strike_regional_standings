### Roster Details<br />
Team Name: MOUZ<br />
Roster: frozen, Jimpphat, siuhy, torzsi, xertioN<br />
Global Rank: [10](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [10]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1457.1<br />
<br />
Final Rank Value (1457.1) = Starting Rank Value (1442.3) + Head To Head Adjustments (14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.651[<sup>1</sup>](#table2)
- Bounty Collected: 0.517[<sup>2</sup>](#table1)
- Opponent Network: 0.248[<sup>2</sup>](#table1)
- LAN Wins: 0.740[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.533[<sup>2</sup>](#table1)

The average of these factors is 0.539<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1442.3
- 400 + ( ( 0.539 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1442.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      313 | 2023-08-13 | BIG               | W   | 1.000      | 0.384        | 0.163 (0.063)    | 0.525 (0.202)    | -         |     5.47 | frozen, Jimpphat, siuhy, torzsi, xertioN |
|           32 |      361 | 2023-08-12 | Eternal Fire      | W   | 1.000      | 0.384        | -                | 0.749 (0.288)    | -         |     3.78 | frozen, Jimpphat, siuhy, torzsi, xertioN |
|           31 |      398 | 2023-08-11 | 500               | W   | 1.000      | 0.384        | 0.075 (0.029)    | 1.000 (0.384)    | -         |     1.86 | frozen, Jimpphat, siuhy, torzsi, xertioN |
|           30 |      511 | 2023-08-08 | Sampi             | W   | 1.000      | 0.384        | 0.087 (0.033)    | 1.000 (0.384)    | -         |     2.07 | frozen, Jimpphat, siuhy, torzsi, xertioN |
|           29 |      644 | 2023-08-01 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -8.93 | frozen, Jimpphat, siuhy, torzsi, xertioN |
|           28 |      664 | 2023-07-31 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -1.92 | frozen, Jimpphat, siuhy, torzsi, xertioN |
|           27 |      702 | 2023-07-29 | Natus Vincere     | W   | 0.994      | 1.000        | 0.278 (0.276)    | 0.279 (0.278)    | 1 (0.994) |    15.42 | frozen, Jimpphat, siuhy, torzsi, xertioN |
|           26 |      741 | 2023-07-26 | Ninjas in Pyjamas | W   | 0.974      | 0.143        | -                | 0.670 (0.093)    | 1 (0.974) |    11.85 | frozen, Jimpphat, siuhy, torzsi, xertioN |
|           25 |      750 | 2023-07-26 | TheMongolz        | W   | 0.972      | -            | -                | -                | 1 (0.972) |     2.36 | frozen, Jimpphat, siuhy, torzsi, xertioN |
|           24 |     1258 | 2023-06-10 | Apeks             | L   | 0.666      | -            | -                | -                | -         |   -11.69 | dexter, frozen, JDC, torzsi, xertioN     |
|           23 |     1298 | 2023-06-09 | 500               | W   | 0.659      | 0.384        | -                | 1.000 (0.253)    | -         |     1.63 | dexter, frozen, JDC, torzsi, xertioN     |
|           22 |     1435 | 2023-06-04 | ENCE              | L   | 0.627      | -            | -                | -                | -         |    -1.33 | dexter, frozen, JDC, torzsi, xertioN     |
|           21 |     1466 | 2023-06-03 | Heroic            | W   | 0.621      | 0.624        | 1.000 (0.387)    | 0.632 (0.245)    | 1 (0.621) |    17.91 | dexter, frozen, JDC, torzsi, xertioN     |
|           20 |     1489 | 2023-06-02 | Astralis          | W   | 0.614      | 0.624        | 0.582 (0.223)    | 0.660 (0.253)    | 1 (0.614) |    16.25 | dexter, frozen, JDC, torzsi, xertioN     |
|           19 |     1562 | 2023-05-31 | OG                | W   | 0.601      | 0.624        | 0.111 (0.042)    | 0.254 (0.095)    | 1 (0.601) |     3.86 | dexter, frozen, JDC, torzsi, xertioN     |
|           18 |     1604 | 2023-05-30 | FURIA             | W   | 0.594      | 0.624        | 0.082 (0.030)    | -                | 1 (0.594) |     1.77 | dexter, frozen, JDC, torzsi, xertioN     |
|           17 |     1629 | 2023-05-29 | Heroic            | L   | 0.589      | -            | -                | -                | -         |    -1.41 | dexter, frozen, JDC, torzsi, xertioN     |
|           16 |     1653 | 2023-05-29 | fnatic            | W   | 0.587      | -            | -                | -                | 1 (0.587) |     0.17 | dexter, frozen, JDC, torzsi, xertioN     |
|           15 |     2088 | 2023-05-09 | GamerLegion       | L   | 0.453      | -            | -                | -                | -         |    -4.68 | dexter, frozen, JDC, torzsi, xertioN     |
|           14 |     2099 | 2023-05-08 | OG                | L   | 0.448      | -            | -                | -                | -         |   -11.65 | dexter, frozen, JDC, torzsi, xertioN     |
|           13 |     2112 | 2023-05-08 | Ninjas in Pyjamas | L   | 0.446      | -            | -                | -                | -         |    -7.29 | dexter, frozen, JDC, torzsi, xertioN     |
|           12 |     2512 | 2023-04-17 | 9INE              | L   | 0.309      | -            | -                | -                | -         |    -7.80 | dexter, frozen, JDC, torzsi, xertioN     |
|           11 |     2526 | 2023-04-17 | BIG               | L   | 0.306      | -            | -                | -                | -         |    -8.96 | dexter, frozen, JDC, torzsi, xertioN     |
|           10 |     2732 | 2023-04-09 | FaZe              | W   | 0.253      | -            | -                | -                | 1 (0.253) |     5.82 | dexter, frozen, JDC, torzsi, xertioN     |
|            9 |     2757 | 2023-04-08 | Virtus.pro        | W   | 0.246      | 0.143        | 1.000 (0.035)    | -                | 1 (0.246) |     6.74 | dexter, frozen, JDC, torzsi, xertioN     |
|            8 |     2787 | 2023-04-07 | Falcons           | L   | 0.238      | -            | -                | -                | -         |    -7.35 | dexter, frozen, JDC, torzsi, xertioN     |
|            7 |     2808 | 2023-04-06 | SAW               | W   | 0.234      | -            | -                | -                | -         |     1.66 | dexter, frozen, JDC, torzsi, xertioN     |
|            6 |     2827 | 2023-04-06 | B8                | L   | 0.231      | -            | -                | -                | -         |    -7.01 | dexter, frozen, JDC, torzsi, xertioN     |
|            5 |     2857 | 2023-04-02 | FORZE             | L   | 0.206      | -            | -                | -                | -         |    -4.88 | dexter, frozen, JDC, torzsi, xertioN     |
|            4 |     2959 | 2023-03-29 | Apeks             | W   | 0.179      | 0.657        | 0.349 (0.041)    | -                | -         |     2.07 | dexter, frozen, JDC, torzsi, xertioN     |
|            3 |     3137 | 2023-03-23 | Cloud9            | L   | 0.140      | -            | -                | -                | -         |    -1.19 | dexter, frozen, JDC, torzsi, xertioN     |
|            2 |     3165 | 2023-03-22 | paiN              | W   | 0.134      | -            | -                | -                | -         |     0.29 | dexter, frozen, JDC, torzsi, xertioN     |
|            1 |     3686 | 2023-03-05 | Heroic            | L   | 0.020      | -            | -                | -                | -         |    -0.06 | dexter, frozen, JDC, torzsi, xertioN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($79,406.39)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-13 |      1.000 | $20,000.00     | $20,000.00      |
| 2023-08-06 |      1.000 | $16,000.00     | $16,000.00      |
| 2023-06-10 |      0.667 | $1,500.00      | $1,001.16       |
| 2023-06-04 |      0.627 | $42,000.00     | $26,348.58      |
| 2023-05-11 |      0.467 | $10,000.00     | $4,667.89       |
| 2023-04-23 |      0.347 | $4,000.00      | $1,388.87       |
| 2023-04-04 |      0.219 | $20,000.00     | $4,382.48       |
| 2023-03-26 |      0.160 | $35,000.00     | $5,617.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
