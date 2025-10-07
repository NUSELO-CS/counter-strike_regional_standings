### Roster Details<br />
Team Name: ex-Copenhagen Flames<br />
Roster: b0RUP, birdfromsky, Farlig, raalz, TMB<br />
Global Rank: [79](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [59]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  885.6<br />
<br />
Final Rank Value (885.6) = Starting Rank Value (810.7) + Head To Head Adjustments (74.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.359[<sup>2</sup>](#table1)
- Opponent Network: 0.130[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.414[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 810.7
- 400 + ( ( 0.212 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 810.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           54 |     1245 | 2023-06-10 | Apeks           | L   | 0.667      | -            | -                | -                | -         |    -1.12 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           53 |     1265 | 2023-06-10 | EYEBALLERS      | W   | 0.665      | 0.384        | 0.017 (0.004)    | 0.609 (0.156)    | 0 (0.000) |    10.83 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           52 |     1304 | 2023-06-09 | Movistar Riders | W   | 0.658      | 0.384        | 0.089 (0.023)    | 0.249 (0.063)    | 0 (0.000) |    12.30 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           51 |     1339 | 2023-06-08 | 500             | L   | 0.653      | -            | -                | -                | -         |    -7.08 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           50 |     1363 | 2023-06-07 | Endpoint        | L   | 0.648      | -            | -                | -                | -         |    -7.60 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           49 |     1377 | 2023-06-07 | ECLOT           | W   | 0.645      | 0.384        | 0.114 (0.028)    | 0.710 (0.176)    | 0 (0.000) |    15.54 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           48 |     1526 | 2023-06-01 | Nexus           | W   | 0.608      | 0.435        | -                | 0.373 (0.099)    | 0 (0.000) |     5.04 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           47 |     1590 | 2023-05-31 | EYEBALLERS      | W   | 0.598      | 0.384        | 0.017 (0.004)    | 0.609 (0.140)    | 0 (0.000) |    10.49 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           46 |     1657 | 2023-05-29 | MelBet          | W   | 0.587      | -            | -                | -                | 0 (0.000) |     2.75 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           45 |     1718 | 2023-05-27 | BIG             | L   | 0.573      | -            | -                | -                | -         |    -5.41 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           44 |     1772 | 2023-05-26 | Astralis Talent | L   | 0.565      | -            | -                | -                | -         |    -4.84 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           43 |     1780 | 2023-05-25 | HAVU            | W   | 0.561      | 0.589        | 0.017 (0.006)    | 0.395 (0.130)    | 0 (0.000) |    11.50 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           42 |     1807 | 2023-05-25 | Apeks           | L   | 0.559      | -            | -                | -                | -         |    -0.83 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           41 |     1888 | 2023-05-23 | Bad News Eagles | L   | 0.545      | -            | -                | -                | -         |    -2.37 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           40 |     1954 | 2023-05-19 | MOUZ NXT        | W   | 0.519      | 0.548        | 0.057 (0.016)    | 0.601 (0.171)    | 0 (0.000) |     8.96 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           39 |     2051 | 2023-05-12 | Websterz        | W   | 0.473      | 0.548        | 0.044 (0.011)    | 0.489 (0.127)    | 0 (0.000) |     9.97 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           38 |     2163 | 2023-05-05 | Looking4Org     | L   | 0.425      | -            | -                | -                | -         |    -3.80 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           37 |     2220 | 2023-05-02 | LDLC            | W   | 0.406      | -            | -                | -                | 0 (0.000) |     4.26 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           36 |     2227 | 2023-05-01 | HAVU            | L   | 0.401      | -            | -                | -                | -         |    -4.19 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           35 |     2232 | 2023-05-01 | Insilio         | W   | 0.400      | -            | -                | -                | -         |     4.01 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           34 |     2248 | 2023-04-30 | Endpoint        | L   | 0.394      | -            | -                | -                | -         |    -4.55 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           33 |     2284 | 2023-04-29 | SINNERS         | L   | 0.385      | -            | -                | -                | -         |    -2.65 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           32 |     2297 | 2023-04-28 | Spirit          | W   | 0.380      | 0.435        | 0.376 (0.062)    | 0.833 (0.138)    | -         |    11.53 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           31 |     2309 | 2023-04-28 | Anonymo         | L   | 0.378      | -            | -                | -                | -         |    -5.02 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           30 |     2339 | 2023-04-27 | Ignis Serpens   | W   | 0.372      | 0.384        | 0.030 (0.004)    | -                | -         |     4.46 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           29 |     2348 | 2023-04-26 | Unluko5         | W   | 0.368      | -            | -                | -                | -         |     2.47 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           28 |     2375 | 2023-04-25 | ex-Coalesce     | W   | 0.361      | -            | -                | -                | -         |     4.46 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           27 |     2408 | 2023-04-24 | ex-iNation      | W   | 0.352      | -            | -                | -                | -         |     3.47 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           26 |     2412 | 2023-04-23 | Question Mark   | W   | 0.348      | 0.435        | 0.032 (0.005)    | 0.689 (0.104)    | -         |     6.54 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           25 |     2425 | 2023-04-23 | Websterz        | L   | 0.345      | -            | -                | -                | -         |    -3.49 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           24 |     2435 | 2023-04-22 | Illuminar       | L   | 0.339      | -            | -                | -                | -         |    -6.63 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           23 |     2476 | 2023-04-19 | THE FREE        | W   | 0.321      | -            | -                | -                | -         |     4.79 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           22 |     2521 | 2023-04-17 | Sampi           | L   | 0.307      | -            | -                | -                | -         |    -2.66 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           21 |     2945 | 2023-03-29 | Cloud9          | L   | 0.181      | -            | -                | -                | -         |    -0.06 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           20 |     3198 | 2023-03-21 | LDLC            | L   | 0.128      | -            | -                | -                | -         |    -2.79 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           19 |     3266 | 2023-03-19 | ECSTATIC        | W   | 0.114      | -            | -                | -                | -         |     2.68 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           18 |     3272 | 2023-03-19 | Sprout          | W   | 0.112      | -            | -                | -                | -         |     2.04 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           17 |     3290 | 2023-03-18 | Prosapia        | W   | 0.107      | -            | -                | -                | -         |     0.47 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           16 |     3297 | 2023-03-18 | ECSTATIC        | L   | 0.106      | -            | -                | -                | -         |    -0.85 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           15 |     3302 | 2023-03-18 | Prosapia        | W   | 0.105      | -            | -                | -                | -         |     0.46 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           14 |     3377 | 2023-03-16 | Apeks           | L   | 0.092      | -            | -                | -                | -         |    -0.14 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           13 |     3410 | 2023-03-15 | 1WIN            | L   | 0.087      | -            | -                | -                | -         |    -0.23 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           12 |     3441 | 2023-03-14 | Astralis Talent | L   | 0.079      | -            | -                | -                | -         |    -0.58 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           11 |     3467 | 2023-03-13 | Aurora          | L   | 0.071      | -            | -                | -                | -         |    -0.29 | b0RUP, birdfromsky, Farlig, raalz, TMB |
|           10 |     3507 | 2023-03-11 | GamerLegion     | L   | 0.061      | -            | -                | -                | -         |    -0.03 | b0RUP, birdfromsky, raalz, regali, TMB |
|            9 |     3523 | 2023-03-11 | BIG             | W   | 0.059      | -            | -                | -                | -         |     1.33 | b0RUP, birdfromsky, raalz, regali, TMB |
|            8 |     3579 | 2023-03-09 | ATK             | W   | 0.047      | -            | -                | -                | -         |     0.61 | b0RUP, birdfromsky, raalz, regali, TMB |
|            7 |     3601 | 2023-03-08 | 1WIN            | L   | 0.042      | -            | -                | -                | -         |    -0.11 | b0RUP, birdfromsky, raalz, regali, TMB |
|            6 |     3615 | 2023-03-08 | Anonymo         | L   | 0.040      | -            | -                | -                | -         |    -0.51 | b0RUP, birdfromsky, raalz, regali, TMB |
|            5 |     3636 | 2023-03-07 | Young Ninjas    | W   | 0.034      | -            | -                | -                | -         |     0.66 | b0RUP, birdfromsky, raalz, regali, TMB |
|            4 |     3648 | 2023-03-07 | Bad News Eagles | L   | 0.032      | -            | -                | -                | -         |    -0.13 | b0RUP, birdfromsky, raalz, regali, TMB |
|            3 |     3666 | 2023-03-06 | GODSENT         | W   | 0.026      | -            | -                | -                | -         |     0.31 | b0RUP, birdfromsky, raalz, regali, TMB |
|            2 |     3678 | 2023-03-05 | Apeks           | W   | 0.021      | -            | -                | -                | -         |     0.63 | b0RUP, birdfromsky, raalz, regali, TMB |
|            1 |     3728 | 2023-03-04 | Bad News Eagles | W   | 0.012      | -            | -                | -                | -         |     0.34 | b0RUP, birdfromsky, raalz, regali, TMB |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,549.41)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-10 |      0.667 | $3,500.00      | $2,336.03       |
| 2023-04-30 |      0.395 | $2,000.00      | $789.63         |
| 2023-04-02 |      0.208 | $5,000.00      | $1,038.02       |
| 2023-03-11 |      0.061 | $3,500.00      | $213.95         |
| 2023-03-07 |      0.034 | $5,000.00      | $171.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
