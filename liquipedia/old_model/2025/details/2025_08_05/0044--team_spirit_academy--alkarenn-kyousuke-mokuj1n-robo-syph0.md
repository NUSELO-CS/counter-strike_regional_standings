### Roster Details<br />
Team Name: Team Spirit Academy<br />
Roster: alkarenn, kyousuke, Mokuj1n, robo, SYPH0<br />
Global Rank: [44](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [31]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  1053.8<br />
<br />
Final Rank Value (1053.8) = Starting Rank Value (1004.6) + Head To Head Adjustments (49.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.456[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.262[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.493[<sup>2</sup>](#table1)

The average of these factors is 0.318<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1004.6
- 400 + ( ( 0.318 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1004.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      987 | 2025-05-27 | Passion UA      | L   | 0.716      | -            | -                | -                | -         |    -8.09 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           39 |      989 | 2025-05-26 | Monte           | W   | 0.712      | 0.384        | -                | 0.695 (0.190)    | 0 (0.000) |     5.28 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           38 |      992 | 2025-05-26 | Iberian Soul    | L   | 0.711      | -            | -                | -                | -         |    -5.18 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           37 |     1086 | 2025-05-21 | 9INE            | W   | 0.676      | -            | -                | -                | 0 (0.000) |    12.11 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           36 |     1096 | 2025-05-20 | 500             | W   | 0.672      | -            | -                | -                | 0 (0.000) |     4.99 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           35 |     1144 | 2025-05-18 | Passion UA      | W   | 0.658      | 0.435        | 0.098 (0.028)    | 1.000 (0.286)    | 0 (0.000) |    14.28 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           34 |     1202 | 2025-05-15 | FAVBET Team     | W   | 0.638      | -            | -                | -                | 0 (0.000) |     6.25 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           33 |     1266 | 2025-05-13 | FORZE Reload    | W   | 0.624      | -            | -                | -                | 0 (0.000) |     3.94 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           32 |     1283 | 2025-05-12 | Zero Tenacity   | W   | 0.618      | 0.435        | -                | 0.785 (0.211)    | -         |     6.58 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           31 |     1293 | 2025-05-12 | Monte           | L   | 0.617      | -            | -                | -                | -         |   -14.10 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           30 |     1344 | 2025-05-10 | ENCE            | L   | 0.604      | -            | -                | -                | -         |    -8.41 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           29 |     1392 | 2025-05-08 | ARCRED          | W   | 0.590      | -            | -                | -                | 1 (0.590) |     4.96 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           28 |     1410 | 2025-05-07 | Zero Tenacity   | L   | 0.585      | -            | -                | -                | -         |   -12.83 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           27 |     1420 | 2025-05-07 | GUN5 Esports    | W   | 0.584      | 0.435        | 0.052 (0.013)    | 0.840 (0.213)    | 1 (0.584) |     7.04 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           26 |     1445 | 2025-05-06 | FAVBET Team     | W   | 0.579      | 0.500        | -                | 0.631 (0.183)    | -         |     4.74 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           25 |     1460 | 2025-05-06 | PARIVISION      | W   | 0.577      | 0.435        | 0.124 (0.031)    | 1.000 (0.251)    | 1 (0.577) |     9.18 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           24 |     1477 | 2025-05-05 | ARCRED          | W   | 0.571      | -            | -                | -                | 1 (0.571) |     4.51 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           23 |     1536 | 2025-05-03 | OG              | W   | 0.557      | 0.362        | 0.045 (0.009)    | 0.574 (0.116)    | -         |     9.77 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           22 |     1700 | 2025-04-26 | FUT Esports     | W   | 0.511      | 0.362        | 0.298 (0.055)    | 0.813 (0.151)    | -         |    10.20 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           21 |     1817 | 2025-04-18 | LA MASIA        | W   | 0.459      | -            | -                | -                | -         |     1.85 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           20 |     1830 | 2025-04-18 | Metizport       | W   | 0.457      | 0.657        | 0.027 (0.008)    | 0.480 (0.144)    | -         |     5.88 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           19 |     1836 | 2025-04-18 | ENCE            | L   | 0.456      | -            | -                | -                | -         |    -5.75 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           18 |     1847 | 2025-04-17 | BetBoom Team    | L   | 0.452      | -            | -                | -                | -         |    -1.73 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           17 |     1856 | 2025-04-17 | Nexus Gaming    | L   | 0.451      | -            | -                | -                | -         |    -8.53 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           16 |     2026 | 2025-04-09 | Sangal Esports  | W   | 0.399      | 0.500        | 0.037 (0.007)    | 0.720 (0.143)    | -         |     4.74 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           15 |     2071 | 2025-04-08 | TPuDCATb TPu    | L   | 0.392      | -            | -                | -                | -         |    -9.15 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           14 |     2773 | 2025-03-18 | KOLESIE         | W   | 0.252      | 0.500        | 0.049 (0.006)    | -                | -         |     5.42 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           13 |     2932 | 2025-03-10 | BetBoom Team    | L   | 0.198      | -            | -                | -                | -         |    -0.71 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           12 |     2976 | 2025-03-09 | Nemiga Gaming   | L   | 0.191      | -            | -                | -                | -         |    -1.94 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           11 |     3061 | 2025-03-08 | BetBoom Team    | W   | 0.184      | 0.143        | 0.326 (0.009)    | -                | -         |     5.17 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|           10 |     3104 | 2025-03-07 | Sashi Esport    | W   | 0.179      | -            | -                | -                | -         |     2.56 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            9 |     3175 | 2025-03-06 | BC.Game Esports | L   | 0.172      | -            | -                | -                | -         |    -3.91 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            8 |     3212 | 2025-03-05 | Fnatic          | L   | 0.165      | -            | -                | -                | -         |    -1.06 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            7 |     3260 | 2025-03-03 | Monte           | W   | 0.151      | -            | -                | -                | -         |     0.76 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            6 |     3301 | 2025-03-01 | FUT Esports     | L   | 0.139      | -            | -                | -                | -         |    -1.97 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            5 |     3350 | 2025-02-27 | Zero Tenacity   | W   | 0.124      | -            | -                | -                | -         |     1.20 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            4 |     3375 | 2025-02-26 | Iberian Soul    | W   | 0.119      | 0.500        | 0.187 (0.011)    | -                | -         |     3.43 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            3 |     3449 | 2025-02-24 | ARCRED          | L   | 0.105      | -            | -                | -                | -         |    -2.39 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            2 |     3566 | 2025-02-18 | TPuDCATb TPu    | W   | 0.065      | -            | -                | -                | -         |     0.54 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            1 |     3684 | 2025-02-12 | Dynamo Eclot    | L   | 0.026      | -            | -                | -                | -         |    -0.45 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,297.54)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-27 |      0.718 | $3,000.00      | $2,154.58       |
| 2025-05-11 |      0.612 | $5,500.00      | $3,366.46       |
| 2025-05-11 |      0.611 | $2,014.05      | $1,231.09       |
| 2025-05-08 |      0.590 | $30,000.00     | $17,712.50      |
| 2025-04-20 |      0.472 | $6,000.00      | $2,832.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
