### Roster Details<br />
Team Name: MASONIC<br />
Roster: fr0slev, J3nsyy, notaN, sirah, Tauson<br />
Global Rank: [81](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [61]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  879.4<br />
<br />
Final Rank Value (879.4) = Starting Rank Value (903.3) + Head To Head Adjustments (-23.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.307[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.327[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.262[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 903.3
- 400 + ( ( 0.260 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 903.3


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
|           27 |     1151 | 2023-06-17 | Astralis Talent  | L   | 0.712      | -            | -                | -                | -         |    -7.79 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           26 |     1402 | 2023-06-06 | Astralis Talent  | L   | 0.639      | -            | -                | -                | -         |    -7.11 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           25 |     1423 | 2023-06-05 | 500              | L   | 0.632      | -            | -                | -                | -         |    -8.12 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           24 |     1442 | 2023-06-04 | Nakama           | L   | 0.627      | -            | -                | -                | -         |   -15.22 | birdfromsky, notaN, raalz, sirah, Tauson |
|           23 |     1498 | 2023-06-02 | B8               | W   | 0.614      | 0.435        | 0.003 (0.001)    | 0.561 (0.150)    | 0 (0.000) |     8.25 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           22 |     1580 | 2023-05-31 | Let us cook      | W   | 0.600      | 0.435        | 0.002 (0.000)    | 0.174 (0.045)    | 0 (0.000) |     4.99 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           21 |     1670 | 2023-05-29 | Endpoint         | L   | 0.585      | -            | -                | -                | -         |   -13.94 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           20 |     1689 | 2023-05-28 | sYnck            | L   | 0.579      | -            | -                | -                | -         |   -10.63 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           19 |     1701 | 2023-05-28 | Astralis Talent  | W   | 0.578      | 0.318        | 0.110 (0.020)    | 0.582 (0.107)    | 1 (0.578) |    11.58 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           18 |     1720 | 2023-05-27 | sYnck            | W   | 0.573      | 0.318        | 0.023 (0.004)    | 0.242 (0.044)    | 1 (0.573) |     7.56 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           17 |     1734 | 2023-05-27 | ex-Flames Ascent | W   | 0.572      | -            | -                | -                | 1 (0.572) |     1.89 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           16 |     1740 | 2023-05-27 | Young Ninjas     | L   | 0.571      | -            | -                | -                | -         |    -9.80 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           15 |     1873 | 2023-05-23 | los kogutos      | W   | 0.547      | 0.143        | 0.038 (0.003)    | 0.950 (0.074)    | 0 (0.000) |     7.83 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           14 |     1887 | 2023-05-23 | PORTUGAL         | W   | 0.546      | 0.143        | -                | 0.140 (0.011)    | 0 (0.000) |     1.93 | fr0slev, J3nsyy, notaN, sirah, Tauson    |
|           13 |     2280 | 2023-04-29 | PROSPECTS        | W   | 0.386      | 0.323        | 0.050 (0.006)    | 0.455 (0.057)    | 1 (0.386) |     7.62 | Anlelele, fr0slev, J3nsyy, sirah, Tauson |
|           12 |     2300 | 2023-04-28 | Astralis Talent  | W   | 0.380      | 0.323        | 0.110 (0.014)    | 0.582 (0.071)    | 1 (0.380) |     8.08 | Anlelele, fr0slev, J3nsyy, sirah, Tauson |
|           11 |     2355 | 2023-04-26 | MOUZ NXT         | W   | 0.367      | 0.323        | 0.057 (0.007)    | 0.601 (0.071)    | 1 (0.367) |     5.54 | Anlelele, fr0slev, J3nsyy, sirah, Tauson |
|           10 |     2571 | 2023-04-15 | ALTERNATE aTTaX  | L   | 0.294      | -            | -                | -                | -         |    -3.28 | Anlelele, fr0slev, J3nsyy, sirah, Tauson |
|            9 |     2654 | 2023-04-12 | JANO             | W   | 0.274      | 0.143        | 0.007 (0.000)    | 0.427 (0.017)    | -         |     3.24 | Anlelele, fr0slev, J3nsyy, sirah, Tauson |
|            8 |     2695 | 2023-04-11 | The Prodigies    | L   | 0.267      | -            | -                | -                | -         |    -6.25 | Anlelele, fr0slev, J3nsyy, sirah, Tauson |
|            7 |     2704 | 2023-04-11 | Enterprise       | W   | 0.266      | 0.143        | 0.003 (0.000)    | -                | -         |     1.74 | Anlelele, fr0slev, J3nsyy, sirah, Tauson |
|            6 |     2872 | 2023-04-01 | BIG Academy      | L   | 0.200      | -            | -                | -                | -         |    -4.45 | Anlelele, fr0slev, J3nsyy, sirah, Tauson |
|            5 |     2887 | 2023-03-31 | Los Alpacas      | L   | 0.195      | -            | -                | -                | -         |    -4.26 | Anlelele, fr0slev, J3nsyy, sirah, Tauson |
|            4 |     3301 | 2023-03-18 | XI               | L   | 0.105      | -            | -                | -                | -         |    -3.02 | Anlelele, fr0slev, J3nsyy, notaN, Tauson |
|            3 |     3364 | 2023-03-16 | MOUZ NXT         | L   | 0.094      | -            | -                | -                | -         |    -1.57 | Anlelele, fr0slev, J3nsyy, notaN, Tauson |
|            2 |     3425 | 2023-03-14 | Nexus            | W   | 0.081      | -            | -                | -                | -         |     0.40 | Anlelele, fr0slev, J3nsyy, notaN, Tauson |
|            1 |     3431 | 2023-03-14 | JANO             | W   | 0.081      | -            | -                | -                | -         |     0.95 | Anlelele, fr0slev, J3nsyy, notaN, Tauson |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,217.18)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-17 |      0.714 | $367.00        | $262.04         |
| 2023-05-28 |      0.579 | $1,440.00      | $834.21         |
| 2023-04-29 |      0.386 | $5,500.00      | $2,120.92       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
