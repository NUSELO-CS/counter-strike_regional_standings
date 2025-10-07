### Roster Details<br />
Team Name: FORZE<br />
Roster: Jerry, Krad, r3salt, shalfey, zorte<br />
Global Rank: [18](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [18]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1253.5<br />
<br />
Final Rank Value (1253.5) = Starting Rank Value (1236.8) + Head To Head Adjustments (16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.695[<sup>1</sup>](#table2)
- Bounty Collected: 0.459[<sup>2</sup>](#table1)
- Opponent Network: 0.194[<sup>2</sup>](#table1)
- LAN Wins: 0.382[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.409[<sup>2</sup>](#table1)

The average of these factors is 0.433<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1236.8
- 400 + ( ( 0.433 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1236.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |     1228 | 2023-06-11 | ENCE              | L   | 0.673      | -            | -                | -                | -         |    -0.58 | Jerry, Krad, r3salt, shalfey, zorte |
|           47 |     1291 | 2023-06-09 | 9z                | W   | 0.660      | 0.500        | 0.273 (0.090)    | 0.650 (0.214)    | 1 (0.660) |     6.39 | Jerry, Krad, r3salt, shalfey, zorte |
|           46 |     1303 | 2023-06-09 | ECSTATIC          | W   | 0.659      | 0.500        | 0.110 (0.036)    | 0.478 (0.157)    | 1 (0.659) |     5.02 | Jerry, Krad, r3salt, shalfey, zorte |
|           45 |     1609 | 2023-05-30 | ECSTATIC          | W   | 0.594      | 0.589        | 0.110 (0.039)    | 0.478 (0.167)    | -         |     4.97 | Jerry, Krad, r3salt, shalfey, zorte |
|           44 |     1616 | 2023-05-30 | 9INE              | W   | 0.593      | 0.589        | 0.265 (0.093)    | 0.734 (0.256)    | -         |     8.15 | Jerry, Krad, r3salt, shalfey, zorte |
|           43 |     1623 | 2023-05-30 | Aurora            | L   | 0.592      | -            | -                | -                | -         |   -11.88 | Jerry, Krad, r3salt, shalfey, zorte |
|           42 |     1641 | 2023-05-29 | ECSTATIC          | L   | 0.588      | -            | -                | -                | -         |   -14.02 | Jerry, Krad, r3salt, shalfey, zorte |
|           41 |     1651 | 2023-05-29 | Astralis Talent   | W   | 0.587      | 0.548        | -                | 0.582 (0.187)    | -         |     3.79 | Jerry, Krad, r3salt, shalfey, zorte |
|           40 |     1678 | 2023-05-28 | Into the Breach   | W   | 0.581      | 0.589        | 0.169 (0.058)    | 0.530 (0.181)    | -         |     9.26 | Jerry, Krad, r3salt, shalfey, zorte |
|           39 |     1722 | 2023-05-27 | Movistar Riders   | W   | 0.573      | -            | -                | -                | -         |     3.06 | Jerry, Krad, r3salt, shalfey, zorte |
|           38 |     1752 | 2023-05-26 | Bad News Eagles   | W   | 0.567      | 0.589        | 0.135 (0.045)    | 0.751 (0.251)    | -         |     7.08 | Jerry, Krad, r3salt, shalfey, zorte |
|           37 |     1763 | 2023-05-26 | Eternal Fire      | W   | 0.566      | 0.548        | -                | 0.749 (0.232)    | -         |     3.95 | Jerry, Krad, r3salt, shalfey, zorte |
|           36 |     1829 | 2023-05-24 | Movistar Riders   | L   | 0.553      | -            | -                | -                | -         |   -14.60 | Jerry, Krad, r3salt, shalfey, zorte |
|           35 |     1882 | 2023-05-23 | HAVU              | W   | 0.546      | 0.589        | -                | 0.395 (0.127)    | -         |     2.99 | Jerry, Krad, r3salt, shalfey, zorte |
|           34 |     1903 | 2023-05-22 | Sprout            | L   | 0.540      | -            | -                | -                | -         |   -15.06 | Jerry, Krad, r3salt, shalfey, zorte |
|           33 |     2002 | 2023-05-16 | Endpoint          | W   | 0.500      | 0.435        | -                | 0.790 (0.172)    | -         |     2.22 | Jerry, Krad, r3salt, shalfey, zorte |
|           32 |     2061 | 2023-05-11 | GamerLegion       | L   | 0.465      | -            | -                | -                | -         |    -2.52 | Jerry, Krad, r3salt, shalfey, zorte |
|           31 |     2073 | 2023-05-10 | FaZe              | L   | 0.459      | -            | -                | -                | -         |    -1.80 | Jerry, Krad, r3salt, shalfey, zorte |
|           30 |     2093 | 2023-05-09 | Monte             | W   | 0.452      | -            | -                | -                | 1 (0.452) |    10.76 | Jerry, Krad, r3salt, shalfey, zorte |
|           29 |     2100 | 2023-05-08 | Liquid            | W   | 0.447      | -            | -                | -                | 1 (0.447) |     8.92 | Jerry, Krad, r3salt, shalfey, zorte |
|           28 |     2114 | 2023-05-08 | Grayhound         | L   | 0.446      | -            | -                | -                | -         |   -11.63 | Jerry, Krad, r3salt, shalfey, zorte |
|           27 |     2218 | 2023-05-02 | Looking4Org       | L   | 0.407      | -            | -                | -                | -         |   -10.40 | Jerry, Krad, r3salt, shalfey, zorte |
|           26 |     2350 | 2023-04-26 | Spirit            | L   | 0.367      | -            | -                | -                | -         |    -3.60 | Jerry, Krad, r3salt, shalfey, zorte |
|           25 |     2607 | 2023-04-14 | Aurora            | W   | 0.285      | -            | -                | -                | 1 (0.285) |     3.18 | Jerry, Krad, r3salt, shalfey, zorte |
|           24 |     2630 | 2023-04-13 | Monte             | L   | 0.279      | -            | -                | -                | -         |    -2.18 | Jerry, Krad, r3salt, shalfey, zorte |
|           23 |     2679 | 2023-04-12 | Ninjas in Pyjamas | W   | 0.271      | -            | -                | -                | 1 (0.271) |     5.97 | Jerry, Krad, r3salt, shalfey, zorte |
|           22 |     2696 | 2023-04-11 | ENCE              | W   | 0.267      | 0.143        | 1.000 (0.038)    | -                | 1 (0.267) |     8.25 | Jerry, Krad, r3salt, shalfey, zorte |
|           21 |     2717 | 2023-04-11 | Cloud9            | L   | 0.264      | -            | -                | -                | -         |    -0.90 | Jerry, Krad, r3salt, shalfey, zorte |
|           20 |     2838 | 2023-04-04 | Cloud9            | L   | 0.219      | -            | -                | -                | -         |    -0.75 | Jerry, Krad, r3salt, shalfey, zorte |
|           19 |     2857 | 2023-04-02 | MOUZ              | W   | 0.206      | 0.657        | 0.292 (0.039)    | -                | -         |     4.88 | Jerry, Krad, r3salt, shalfey, zorte |
|           18 |     2952 | 2023-03-29 | Virtus.pro        | W   | 0.180      | 0.657        | 1.000 (0.118)    | -                | -         |     5.41 | Jerry, Krad, r3salt, shalfey, zorte |
|           17 |     2973 | 2023-03-28 | Bad News Eagles   | W   | 0.174      | -            | -                | -                | -         |     2.16 | Jerry, Krad, r3salt, shalfey, zorte |
|           16 |     3085 | 2023-03-24 | Monte             | L   | 0.148      | -            | -                | -                | -         |    -1.13 | Jerry, Krad, r3salt, shalfey, zorte |
|           15 |     3098 | 2023-03-24 | FaZe              | L   | 0.147      | -            | -                | -                | -         |    -0.48 | Jerry, Krad, r3salt, shalfey, zorte |
|           14 |     3199 | 2023-03-21 | 1WIN              | L   | 0.128      | -            | -                | -                | -         |    -2.04 | Jerry, Krad, r3salt, shalfey, zorte |
|           13 |     3268 | 2023-03-19 | ENCE              | W   | 0.113      | 0.934        | 1.000 (0.106)    | -                | 1 (0.113) |     3.51 | Jerry, Krad, r3salt, shalfey, zorte |
|           12 |     3331 | 2023-03-17 | Sangal            | W   | 0.100      | -            | -                | -                | -         |     0.11 | Jerry, Krad, r3salt, shalfey, zorte |
|           11 |     3376 | 2023-03-16 | Spirit            | W   | 0.092      | -            | -                | -                | 1 (0.092) |     0.15 | Jerry, Krad, r3salt, shalfey, zorte |
|           10 |     3409 | 2023-03-15 | Natus Vincere     | W   | 0.087      | -            | -                | -                | 1 (0.087) |     0.80 | Jerry, Krad, r3salt, shalfey, zorte |
|            9 |     3423 | 2023-03-14 | 500               | W   | 0.081      | -            | -                | -                | -         |     0.45 | Jerry, Krad, r3salt, shalfey, zorte |
|            8 |     3552 | 2023-03-10 | ECSTATIC          | L   | 0.053      | -            | -                | -                | -         |    -1.32 | Jerry, Krad, r3salt, shalfey, zorte |
|            7 |     3573 | 2023-03-09 | Aurora            | W   | 0.048      | -            | -                | -                | -         |     0.58 | Jerry, Krad, r3salt, shalfey, zorte |
|            6 |     3583 | 2023-03-09 | Sprout            | W   | 0.047      | -            | -                | -                | -         |     0.16 | Jerry, Krad, r3salt, shalfey, zorte |
|            5 |     3602 | 2023-03-08 | Anonymo           | L   | 0.041      | -            | -                | -                | -         |    -1.15 | Jerry, Krad, r3salt, shalfey, zorte |
|            4 |     3616 | 2023-03-08 | 1WIN              | W   | 0.040      | -            | -                | -                | -         |     0.63 | Jerry, Krad, r3salt, shalfey, zorte |
|            3 |     3639 | 2023-03-07 | Let us cook       | W   | 0.034      | -            | -                | -                | -         |     0.01 | Jerry, Krad, r3salt, shalfey, zorte |
|            2 |     3649 | 2023-03-07 | ATK               | W   | 0.032      | -            | -                | -                | -         |     0.06 | Jerry, Krad, r3salt, shalfey, zorte |
|            1 |     3750 | 2023-03-03 | Falcons           | L   | 0.006      | -            | -                | -                | -         |    -0.19 | Jerry, Krad, r3salt, shalfey, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($99,255.47)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-11 |      0.674 | $10,000.00     | $6,739.32       |
| 2023-05-31 |      0.599 | $10,000.00     | $5,994.77       |
| 2023-05-30 |      0.594 | $100,000.00    | $59,401.81      |
| 2023-05-11 |      0.467 | $10,000.00     | $4,667.89       |
| 2023-04-04 |      0.219 | $75,000.00     | $16,434.30      |
| 2023-03-26 |      0.160 | $35,000.00     | $5,617.41       |
| 2023-03-26 |      0.160 | $2,500.00      | $399.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
