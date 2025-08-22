### Roster Details<br />
Team Name: 9Pandas<br />
Roster: d1Ledez, Krad, mo0N, r3salt, shalfey<br />
Global Rank: [75](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [52]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  891.8<br />
<br />
Final Rank Value (891.8) = Starting Rank Value (830.4) + Head To Head Adjustments (61.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.178[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 830.4
- 400 + ( ( 0.220 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 830.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |     1795 | 2025-04-27 | Sashi Esport                              | L   | 0.459      | -            | -                | -                | -         |    -5.65 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|           43 |     1946 | 2025-04-19 | ENCE                                      | L   | 0.405      | -            | -                | -                | -         |    -3.12 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           42 |     1954 | 2025-04-18 | Nemiga Gaming                             | L   | 0.399      | -            | -                | -                | -         |    -1.62 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           41 |     1961 | 2025-04-18 | GUN5 Esports                              | W   | 0.398      | 0.657        | 0.056 (0.015)    | 0.694 (0.181)    | 0 (0.000) |     8.02 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           40 |     1972 | 2025-04-18 | Dynamo Eclot                              | W   | 0.397      | 0.657        | 0.083 (0.022)    | 0.597 (0.155)    | 0 (0.000) |     7.29 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           39 |     1988 | 2025-04-17 | Partizan Esports                          | W   | 0.391      | 0.657        | 0.086 (0.022)    | 0.813 (0.209)    | 0 (0.000) |     7.64 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           38 |     2002 | 2025-04-17 | FUT Esports                               | L   | 0.390      | -            | -                | -                | -         |    -3.33 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           37 |     2022 | 2025-04-16 | B8                                        | L   | 0.385      | -            | -                | -                | -         |    -0.98 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           36 |     2029 | 2025-04-16 | BetBoom Team                              | L   | 0.384      | -            | -                | -                | -         |    -0.59 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           35 |     2050 | 2025-04-15 | SAW                                       | W   | 0.377      | 0.525        | 0.328 (0.065)    | 0.487 (0.097)    | 0 (0.000) |    11.48 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           34 |     2066 | 2025-04-14 | OG                                        | L   | 0.372      | -            | -                | -                | -         |    -1.93 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           33 |     2077 | 2025-04-14 | BIG                                       | W   | 0.370      | 0.525        | 0.189 (0.037)    | 0.352 (0.068)    | 0 (0.000) |    10.03 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           32 |     2320 | 2025-04-03 | Metizport                                 | W   | 0.299      | 0.607        | -                | 0.426 (0.077)    | 0 (0.000) |     5.92 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           31 |     2334 | 2025-04-03 | Complexity                                | L   | 0.297      | -            | -                | -                | -         |    -0.57 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           30 |     2338 | 2025-04-03 | Nemiga Gaming                             | L   | 0.296      | -            | -                | -                | -         |    -0.98 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           29 |     2374 | 2025-04-02 | Passion UA                                | W   | 0.291      | 0.607        | 0.102 (0.018)    | 1.000 (0.177)    | 0 (0.000) |     8.22 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           28 |     2390 | 2025-04-02 | Imperial Female                           | W   | 0.290      | 0.607        | 0.046 (0.008)    | -                | 0 (0.000) |     4.27 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           27 |     2538 | 2025-03-29 | BetBoom Team                              | L   | 0.264      | -            | -                | -                | -         |    -0.32 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           26 |     2582 | 2025-03-28 | Metizport                                 | L   | 0.259      | -            | -                | -                | -         |    -3.36 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           25 |     2661 | 2025-03-27 | Leo Team                                  | W   | 0.251      | -            | -                | -                | 0 (0.000) |     1.45 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           24 |     2962 | 2025-03-15 | ENCE                                      | L   | 0.171      | -            | -                | -                | -         |    -1.10 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           23 |     2989 | 2025-03-13 | Nexus Gaming                              | W   | 0.159      | 0.435        | 0.154 (0.011)    | -                | 0 (0.000) |     3.37 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           22 |     3023 | 2025-03-11 | Monte                                     | W   | 0.145      | -            | -                | -                | -         |     1.57 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           21 |     3071 | 2025-03-10 | 9INE                                      | L   | 0.137      | -            | -                | -                | -         |    -0.78 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           20 |     3077 | 2025-03-10 | Fnatic                                    | L   | 0.137      | -            | -                | -                | -         |    -0.33 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           19 |     3115 | 2025-03-09 | HEROIC                                    | L   | 0.131      | -            | -                | -                | -         |    -0.06 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           18 |     3125 | 2025-03-09 | Iberian Soul                              | W   | 0.130      | 0.435        | 0.205 (0.012)    | 1.000 (0.057)    | -         |     3.98 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           17 |     3179 | 2025-03-08 | BetBoom Team                              | W   | 0.125      | 0.435        | 0.364 (0.020)    | -                | -         |     3.80 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           16 |     3200 | 2025-03-08 | Dynamo Eclot                              | W   | 0.124      | 0.769        | -                | 0.597 (0.057)    | -         |     2.59 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           15 |     3253 | 2025-03-07 | 9INE                                      | W   | 0.118      | 0.769        | -                | 0.732 (0.066)    | -         |     3.08 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           14 |     3268 | 2025-03-07 | GUN5 Esports                              | W   | 0.117      | -            | -                | -                | -         |     2.61 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           13 |     3321 | 2025-03-06 | PARIVISION                                | W   | 0.110      | -            | -                | -                | -         |     2.71 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           12 |     3349 | 2025-03-05 | PARIVISION                                | L   | 0.106      | -            | -                | -                | -         |    -0.74 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           11 |     3361 | 2025-03-05 | GUN5 Esports                              | L   | 0.104      | -            | -                | -                | -         |    -0.95 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           10 |     3381 | 2025-03-04 | 500                                       | L   | 0.097      | -            | -                | -                | -         |    -2.02 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            9 |     3393 | 2025-03-03 | 500                                       | L   | 0.092      | -            | -                | -                | -         |    -1.92 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            8 |     3453 | 2025-03-01 | Iberian Soul                              | W   | 0.077      | -            | -                | -                | -         |     2.34 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            7 |     3492 | 2025-02-27 | Monte                                     | W   | 0.063      | -            | -                | -                | -         |     0.69 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            6 |     3554 | 2025-02-25 | PARIVISION                                | L   | 0.052      | -            | -                | -                | -         |    -0.37 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            5 |     3617 | 2025-02-23 | B8                                        | L   | 0.037      | -            | -                | -                | -         |    -0.07 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            4 |     3635 | 2025-02-22 | Dynamo Eclot                              | W   | 0.030      | -            | -                | -                | -         |     0.63 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            3 |     3663 | 2025-02-20 | Sashi Esport                              | W   | 0.017      | -            | -                | -                | -         |     0.39 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            2 |     3679 | 2025-02-19 | SINNERS Esports                           | W   | 0.012      | -            | -                | -                | -         |     0.25 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            1 |     3700 | 2025-02-18 | Copenhagen Wolves (American organization) | L   | 0.006      | -            | -                | -                | -         |    -0.13 | Alv, d1Ledez, Krad, r3salt, shalfey     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,820.72)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.552 | $1,000.00      | $552.15         |
| 2025-04-20 |      0.412 | $15,000.00     | $6,183.33       |
| 2025-04-03 |      0.299 | $7,500.00      | $2,243.40       |
| 2025-03-16 |      0.179 | $2,000.00      | $357.50         |
| 2025-03-11 |      0.146 | $2,000.00      | $291.16         |
| 2025-02-23 |      0.039 | $5,000.00      | $193.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
