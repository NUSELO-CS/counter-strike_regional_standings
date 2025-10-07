### Roster Details<br />
Team Name: Anonymo<br />
Roster: lunAtic, oskarish, reiko, SaMey, Sobol<br />
Global Rank: [86](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [65]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  853.9<br />
<br />
Final Rank Value (853.9) = Starting Rank Value (881.4) + Head To Head Adjustments (-27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.407[<sup>1</sup>](#table2)
- Bounty Collected: 0.380[<sup>2</sup>](#table1)
- Opponent Network: 0.208[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.712[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.4
- 400 + ( ( 0.249 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 881.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |      287 | 2023-08-14 | ThunderFlash         | L   | 1.000      | -            | -                | -                | -         |   -15.45 | lunAtic, oskarish, reiko, SaMey, Sobol |
|           58 |      308 | 2023-08-13 | Pompa                | L   | 1.000      | -            | -                | -                | -         |   -10.19 | lunAtic, oskarish, reiko, SaMey, Sobol |
|           57 |      319 | 2023-08-13 | PGE Turow            | W   | 1.000      | 0.143        | 0.045 (0.006)    | -                | 0 (0.000) |    13.78 | lunAtic, oskarish, reiko, SaMey, Sobol |
|           56 |      325 | 2023-08-13 | Singularity          | W   | 1.000      | 0.143        | 0.041 (0.006)    | -                | 0 (0.000) |     9.40 | lunAtic, oskarish, reiko, SaMey, Sobol |
|           55 |      349 | 2023-08-12 | 1WIN                 | L   | 1.000      | -            | -                | -                | -         |    -3.56 | lunAtic, reiko, SaMey, Sobol, virtuoso |
|           54 |      356 | 2023-08-12 | sYnck                | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.00 | lunAtic, reiko, SaMey, Sobol, virtuoso |
|           53 |      406 | 2023-08-11 | NAVI Youth           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.35 | lunAtic, oskarish, reiko, SaMey, Sobol |
|           52 |      493 | 2023-08-09 | Insilio              | L   | 1.000      | -            | -                | -                | -         |   -22.38 | lunAtic, oskarish, reiko, SaMey, Sobol |
|           51 |      536 | 2023-08-07 | THE FREE             | L   | 1.000      | -            | -                | -                | -         |   -22.43 | innocent, lunAtic, reiko, SaMey, Sobol |
|           50 |      572 | 2023-08-04 | SINNERS              | L   | 1.000      | -            | -                | -                | -         |    -8.89 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           49 |      592 | 2023-08-03 | MIBR                 | L   | 1.000      | -            | -                | -                | -         |   -10.61 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           48 |      628 | 2023-08-02 | Looking4Org          | L   | 1.000      | -            | -                | -                | -         |   -10.42 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           47 |      727 | 2023-07-28 | Sangal               | W   | 0.985      | 0.384        | -                | 0.409 (0.155)    | 0 (0.000) |    10.26 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           46 |      766 | 2023-07-24 | PACT                 | L   | 0.958      | -            | -                | -                | -         |   -18.25 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           45 |      781 | 2023-07-23 | los kogutos          | L   | 0.951      | -            | -                | -                | -         |   -16.82 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           44 |      816 | 2023-07-21 | SINNERS              | W   | 0.938      | 0.371        | 0.069 (0.024)    | 1.000 (0.348)    | 0 (0.000) |    17.88 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           43 |      849 | 2023-07-19 | L&G                  | W   | 0.925      | -            | -                | -                | 0 (0.000) |     3.98 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           42 |      947 | 2023-07-14 | THE FREE             | W   | 0.891      | 0.371        | -                | 0.425 (0.140)    | 0 (0.000) |     6.16 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           41 |     1039 | 2023-07-10 | PACT                 | L   | 0.865      | -            | -                | -                | -         |   -17.93 | azizz, lunAtic, mASKED, reiko, SaMey   |
|           40 |     1210 | 2023-06-12 | Sampi                | L   | 0.679      | -            | -                | -                | -         |    -8.04 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           39 |     1217 | 2023-06-11 | Ignis Serpens        | L   | 0.674      | -            | -                | -                | -         |   -16.23 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           38 |     1235 | 2023-06-11 | Question Mark        | W   | 0.671      | 0.371        | 0.032 (0.008)    | 0.689 (0.171)    | 0 (0.000) |     9.11 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           37 |     1251 | 2023-06-10 | los kogutos          | W   | 0.667      | 0.382        | 0.038 (0.010)    | 0.950 (0.242)    | 0 (0.000) |     8.06 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           36 |     1260 | 2023-06-10 | Sampi                | L   | 0.666      | -            | -                | -                | -         |    -8.32 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           35 |     1305 | 2023-06-09 | Endpoint             | L   | 0.658      | -            | -                | -                | -         |    -9.50 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           34 |     1344 | 2023-06-08 | Ukraine              | W   | 0.652      | -            | -                | -                | -         |     6.66 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           33 |     1370 | 2023-06-07 | Monte                | W   | 0.647      | 0.435        | 0.318 (0.089)    | 1.000 (0.281)    | -         |    19.16 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           32 |     1400 | 2023-06-06 | ENCE Academy         | W   | 0.640      | 0.435        | -                | 0.580 (0.161)    | -         |     7.67 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           31 |     1404 | 2023-06-06 | ECLOT                | W   | 0.639      | 0.371        | 0.114 (0.027)    | 0.710 (0.168)    | -         |    14.82 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           30 |     1418 | 2023-06-05 | Sampi                | L   | 0.633      | -            | -                | -                | -         |    -7.54 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           29 |     1478 | 2023-06-03 | Astralis Talent      | W   | 0.618      | 0.435        | 0.110 (0.030)    | 0.582 (0.156)    | -         |    12.25 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           28 |     1503 | 2023-06-02 | GTZ                  | W   | 0.613      | -            | -                | -                | -         |    10.60 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           27 |     1540 | 2023-06-01 | Endpoint             | L   | 0.606      | -            | -                | -                | -         |    -7.92 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           26 |     1627 | 2023-05-30 | SINNERS              | W   | 0.591      | 0.435        | 0.069 (0.018)    | 1.000 (0.257)    | -         |    13.29 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           25 |     1658 | 2023-05-29 | Entropiq             | W   | 0.587      | -            | -                | -                | -         |     4.87 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           24 |     1899 | 2023-05-22 | Aurora               | L   | 0.541      | -            | -                | -                | -         |    -3.24 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           23 |     1907 | 2023-05-22 | Entropiq             | L   | 0.539      | -            | -                | -                | -         |   -12.57 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           22 |     1968 | 2023-05-17 | 500                  | L   | 0.508      | -            | -                | -                | -         |    -7.04 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           21 |     1974 | 2023-05-17 | SAW                  | W   | 0.508      | 0.143        | 0.240 (0.017)    | -                | -         |    13.77 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           20 |     2309 | 2023-04-28 | ex-Copenhagen Flames | W   | 0.378      | -            | -                | -                | -         |     5.02 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           19 |     2336 | 2023-04-27 | Question Mark        | W   | 0.372      | -            | -                | -                | -         |     5.85 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           18 |     2385 | 2023-04-25 | Websterz             | L   | 0.359      | -            | -                | -                | -         |    -4.62 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           17 |     2437 | 2023-04-22 | THE FREE             | W   | 0.338      | -            | -                | -                | -         |     3.97 | lunAtic, mASKED, reiko, SaMey, Sobol   |
|           16 |     2983 | 2023-03-28 | Monte                | L   | 0.173      | -            | -                | -                | -         |    -0.22 | innocent, lunAtic, reiko, SaMey, Sobol |
|           15 |     3065 | 2023-03-25 | 1WIN                 | L   | 0.153      | -            | -                | -                | -         |    -0.58 | jedqr, lunAtic, reiko, SaMey, Sobol    |
|           14 |     3171 | 2023-03-22 | MOUZ NXT             | W   | 0.134      | -            | -                | -                | -         |     2.14 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|           13 |     3212 | 2023-03-21 | PROSPECTS            | L   | 0.127      | -            | -                | -                | -         |    -1.41 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|           12 |     3294 | 2023-03-18 | K23                  | W   | 0.106      | -            | -                | -                | -         |     0.84 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|           11 |     3416 | 2023-03-15 | Into the Breach      | L   | 0.085      | -            | -                | -                | -         |    -0.34 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|           10 |     3434 | 2023-03-14 | SINNERS              | L   | 0.080      | -            | -                | -                | -         |    -2.03 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|            9 |     3497 | 2023-03-12 | Sangal               | L   | 0.065      | -            | -                | -                | -         |    -1.62 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|            8 |     3513 | 2023-03-11 | Eternal Fire Academy | L   | 0.060      | -            | -                | -                | -         |    -1.71 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|            7 |     3535 | 2023-03-10 | ECSTATIC             | L   | 0.055      | -            | -                | -                | -         |    -0.58 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|            6 |     3575 | 2023-03-09 | ECSTATIC             | W   | 0.048      | -            | -                | -                | -         |     1.00 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|            5 |     3602 | 2023-03-08 | FORZE                | W   | 0.041      | -            | -                | -                | -         |     1.15 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|            4 |     3615 | 2023-03-08 | ex-Copenhagen Flames | W   | 0.040      | -            | -                | -                | -         |     0.51 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|            3 |     3629 | 2023-03-07 | ex-Coalesce          | L   | 0.035      | -            | -                | -                | -         |    -0.77 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|            2 |     3663 | 2023-03-06 | Bad News Eagles      | L   | 0.027      | -            | -                | -                | -         |    -0.14 | lunAtic, reiko, SaMey, Sobol, TaZ      |
|            1 |     3699 | 2023-03-05 | EYEBALLERS           | W   | 0.019      | -            | -                | -                | -         |     0.29 | lunAtic, reiko, SaMey, Sobol, TaZ      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,535.94)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-12 |      0.679 | $5,000.00      | $3,392.55       |
| 2023-06-11 |      0.674 | $5,995.00      | $4,040.84       |
| 2023-06-10 |      0.668 | $2,000.00      | $1,335.13       |
| 2023-06-07 |      0.648 | $1,079.00      | $698.72         |
| 2023-03-07 |      0.034 | $2,000.00      | $68.71          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
