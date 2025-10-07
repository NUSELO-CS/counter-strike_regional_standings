### Roster Details<br />
Team Name: ENCE<br />
Roster: dycha, Maden, NertZ, Snappi, SunPayus<br />
Global Rank: [2](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [2]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1899.2<br />
<br />
Final Rank Value (1899.2) = Starting Rank Value (1964.3) + Head To Head Adjustments (-65.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.770[<sup>2</sup>](#table1)
- Opponent Network: 0.465[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.632[<sup>2</sup>](#table1)

The average of these factors is 0.809<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1964.3
- 400 + ( ( 0.809 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1964.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      189 | 2023-08-20 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -14.44 | dycha, Maden, NertZ, Snappi, SunPayus |
|           39 |      202 | 2023-08-19 | Heroic            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.632 (0.632)    | 1 (1.000) |    12.25 | dycha, Maden, NertZ, Snappi, SunPayus |
|           38 |      216 | 2023-08-18 | Cloud9            | W   | 1.000      | 1.000        | 0.743 (0.743)    | 0.484 (0.484)    | 1 (1.000) |     4.99 | dycha, Maden, NertZ, Snappi, SunPayus |
|           37 |      250 | 2023-08-16 | Liquid            | W   | 1.000      | 1.000        | 0.218 (0.218)    | 0.329 (0.329)    | 1 (1.000) |     1.44 | dycha, Maden, NertZ, Snappi, SunPayus |
|           36 |      547 | 2023-08-06 | G2                | L   | 1.000      | -            | -                | -                | -         |   -16.58 | dycha, Maden, NertZ, Snappi, SunPayus |
|           35 |      563 | 2023-08-05 | Vitality          | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.680 (0.680)    | 1 (1.000) |    16.50 | dycha, Maden, NertZ, Snappi, SunPayus |
|           34 |      633 | 2023-08-01 | Heroic            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.632 (0.632)    | 1 (1.000) |    14.48 | dycha, Maden, NertZ, Snappi, SunPayus |
|           33 |      687 | 2023-07-30 | fnatic            | W   | 1.000      | 1.000        | 0.175 (0.175)    | 0.347 (0.347)    | 1 (1.000) |     1.38 | dycha, Maden, NertZ, Snappi, SunPayus |
|           32 |      708 | 2023-07-29 | 9INE              | W   | 0.993      | 1.000        | 0.265 (0.263)    | 0.734 (0.729)    | 1 (0.993) |     0.83 | dycha, Maden, NertZ, Snappi, SunPayus |
|           31 |     1219 | 2023-06-11 | Virtus.pro        | L   | 0.674      | -            | -                | -                | -         |   -14.11 | dycha, Maden, NertZ, Snappi, SunPayus |
|           30 |     1228 | 2023-06-11 | FORZE             | W   | 0.673      | -            | -                | -                | 1 (0.673) |     0.58 | dycha, Maden, NertZ, Snappi, SunPayus |
|           29 |     1247 | 2023-06-10 | Party Astronauts  | W   | 0.667      | -            | -                | -                | 1 (0.667) |     0.05 | dycha, Maden, NertZ, Snappi, SunPayus |
|           28 |     1296 | 2023-06-09 | Virtus.pro        | L   | 0.659      | -            | -                | -                | -         |   -14.53 | dycha, Maden, NertZ, Snappi, SunPayus |
|           27 |     1310 | 2023-06-09 | Bravado           | W   | 0.658      | -            | -                | -                | 1 (0.658) |     0.02 | dycha, Maden, NertZ, Snappi, SunPayus |
|           26 |     1435 | 2023-06-04 | MOUZ              | W   | 0.627      | 0.624        | -                | 0.533 (0.209)    | -         |     1.33 | dycha, Maden, NertZ, Snappi, SunPayus |
|           25 |     1458 | 2023-06-03 | FaZe              | W   | 0.622      | 0.624        | 0.549 (0.213)    | -                | -         |     3.30 | dycha, Maden, NertZ, Snappi, SunPayus |
|           24 |     1553 | 2023-05-31 | Astralis          | W   | 0.603      | 0.624        | 0.582 (0.219)    | 0.660 (0.248)    | -         |     4.93 | dycha, Maden, NertZ, Snappi, SunPayus |
|           23 |     1603 | 2023-05-30 | FaZe              | W   | 0.594      | 0.624        | 0.549 (0.204)    | -                | -         |     2.88 | dycha, Maden, NertZ, Snappi, SunPayus |
|           22 |     1649 | 2023-05-29 | Complexity        | W   | 0.587      | -            | -                | -                | -         |     0.23 | dycha, Maden, NertZ, Snappi, SunPayus |
|           21 |     2016 | 2023-05-15 | Ninjas in Pyjamas | L   | 0.492      | -            | -                | -                | -         |   -14.63 | dycha, Maden, NertZ, Snappi, SunPayus |
|           20 |     2025 | 2023-05-14 | Into the Breach   | L   | 0.485      | -            | -                | -                | -         |   -14.97 | dycha, Maden, NertZ, Snappi, SunPayus |
|           19 |     2036 | 2023-05-13 | Vitality          | L   | 0.480      | -            | -                | -                | -         |    -6.44 | dycha, Maden, NertZ, Snappi, SunPayus |
|           18 |     2039 | 2023-05-13 | Bad News Eagles   | W   | 0.479      | 1.000        | -                | 0.751 (0.360)    | -         |     0.20 | dycha, Maden, NertZ, Snappi, SunPayus |
|           17 |     2089 | 2023-05-09 | FaZe              | W   | 0.453      | -            | -                | -                | -         |     2.02 | dycha, Maden, NertZ, Snappi, SunPayus |
|           16 |     2105 | 2023-05-08 | Ninjas in Pyjamas | W   | 0.447      | -            | -                | -                | -         |     0.75 | dycha, Maden, NertZ, Snappi, SunPayus |
|           15 |     2111 | 2023-05-08 | OG                | W   | 0.446      | -            | -                | -                | -         |     0.16 | dycha, Maden, NertZ, Snappi, SunPayus |
|           14 |     2251 | 2023-04-30 | Astralis          | L   | 0.393      | -            | -                | -                | -         |    -9.58 | dycha, Maden, NertZ, Snappi, SunPayus |
|           13 |     2283 | 2023-04-29 | GamerLegion       | W   | 0.385      | -            | -                | -                | -         |     1.30 | dycha, Maden, NertZ, Snappi, SunPayus |
|           12 |     2324 | 2023-04-27 | SAW               | L   | 0.374      | -            | -                | -                | -         |   -11.59 | dycha, Maden, NertZ, Snappi, SunPayus |
|           11 |     2601 | 2023-04-14 | Cloud9            | W   | 0.286      | -            | -                | -                | -         |     1.25 | dycha, Maden, NertZ, Snappi, SunPayus |
|           10 |     2633 | 2023-04-13 | 500               | W   | 0.279      | -            | -                | -                | -         |     0.03 | dycha, Maden, NertZ, Snappi, SunPayus |
|            9 |     2671 | 2023-04-12 | ex-iNation        | W   | 0.272      | -            | -                | -                | -         |     0.01 | dycha, Maden, NertZ, Snappi, SunPayus |
|            8 |     2696 | 2023-04-11 | FORZE             | L   | 0.267      | -            | -                | -                | -         |    -8.25 | dycha, Maden, NertZ, Snappi, SunPayus |
|            7 |     2710 | 2023-04-11 | Monte             | L   | 0.265      | -            | -                | -                | -         |    -7.91 | dycha, Maden, NertZ, Snappi, SunPayus |
|            6 |     3062 | 2023-03-25 | Cloud9            | L   | 0.154      | -            | -                | -                | -         |    -4.22 | dycha, Maden, NertZ, Snappi, SunPayus |
|            5 |     3117 | 2023-03-23 | Vitality          | W   | 0.142      | -            | -                | -                | -         |     2.33 | dycha, Maden, NertZ, Snappi, SunPayus |
|            4 |     3174 | 2023-03-22 | G2                | W   | 0.133      | -            | -                | -                | -         |     2.32 | dycha, Maden, NertZ, Snappi, SunPayus |
|            3 |     3268 | 2023-03-19 | FORZE             | L   | 0.113      | -            | -                | -                | -         |    -3.51 | dycha, Maden, NertZ, Snappi, SunPayus |
|            2 |     3371 | 2023-03-16 | 5yclone           | W   | 0.093      | -            | -                | -                | -         |     0.01 | dycha, Maden, NertZ, Snappi, SunPayus |
|            1 |     3393 | 2023-03-15 | ATK               | W   | 0.088      | -            | -                | -                | -         |     0.00 | dycha, Maden, NertZ, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($454,903.55)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-20 |      1.000 | $180,000.00    | $180,000.00     |
| 2023-08-06 |      1.000 | $180,000.00    | $180,000.00     |
| 2023-06-11 |      0.674 | $20,000.00     | $13,478.63      |
| 2023-06-04 |      0.627 | $100,000.00    | $62,734.71      |
| 2023-05-21 |      0.533 | $20,000.00     | $10,665.33      |
| 2023-03-26 |      0.160 | $50,000.00     | $8,024.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
