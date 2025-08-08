### Roster Details<br />
Team Name: 9Pandas<br />
Roster: d1Ledez, Krad, mo0N, r3salt, shalfey<br />
Global Rank: [73](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [51]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  892.1<br />
<br />
Final Rank Value (892.1) = Starting Rank Value (821.0) + Head To Head Adjustments (71.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.249[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 821.0
- 400 + ( ( 0.221 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 821.0


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
|           45 |     1657 | 2025-04-27 | Sashi Esport                              | L   | 0.519      | -            | -                | -                | -         |    -6.91 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|           44 |     1808 | 2025-04-19 | ENCE                                      | L   | 0.465      | -            | -                | -                | -         |    -4.27 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           43 |     1816 | 2025-04-18 | Nemiga Gaming                             | L   | 0.459      | -            | -                | -                | -         |    -2.95 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           42 |     1823 | 2025-04-18 | GUN5 Esports                              | W   | 0.458      | 0.657        | 0.052 (0.016)    | 0.840 (0.252)    | 0 (0.000) |     9.06 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           41 |     1834 | 2025-04-18 | Dynamo Eclot                              | W   | 0.457      | 0.657        | 0.081 (0.024)    | 0.725 (0.217)    | 0 (0.000) |     8.35 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           40 |     1850 | 2025-04-17 | Partizan Esports                          | W   | 0.451      | 0.657        | 0.077 (0.023)    | 0.780 (0.231)    | 0 (0.000) |     8.32 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           39 |     1864 | 2025-04-17 | FUT Esports                               | L   | 0.450      | -            | -                | -                | -         |    -3.94 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           38 |     1884 | 2025-04-16 | B8                                        | L   | 0.445      | -            | -                | -                | -         |    -1.78 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           37 |     1891 | 2025-04-16 | BetBoom Team                              | L   | 0.443      | -            | -                | -                | -         |    -0.99 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           36 |     1912 | 2025-04-15 | SAW                                       | W   | 0.437      | 0.143        | 0.286 (0.018)    | -                | 0 (0.000) |    12.98 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           35 |     1928 | 2025-04-14 | OG                                        | L   | 0.432      | -            | -                | -                | -         |    -3.88 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           34 |     1939 | 2025-04-14 | BIG                                       | W   | 0.430      | 0.143        | 0.182 (0.011)    | -                | 0 (0.000) |    11.54 | d1Ledez, Krad, mo0N, r3salt, shalfey    |
|           33 |     2182 | 2025-04-03 | Metizport                                 | W   | 0.358      | 0.471        | -                | 0.480 (0.081)    | 0 (0.000) |     6.56 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           32 |     2196 | 2025-04-03 | Complexity                                | L   | 0.357      | -            | -                | -                | -         |    -0.71 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           31 |     2200 | 2025-04-03 | Nemiga Gaming                             | L   | 0.356      | -            | -                | -                | -         |    -1.99 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           30 |     2236 | 2025-04-02 | Passion UA                                | W   | 0.351      | 0.471        | 0.098 (0.016)    | 1.000 (0.165)    | 0 (0.000) |     9.80 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           29 |     2252 | 2025-04-02 | Imperial Female                           | W   | 0.350      | -            | -                | -                | 0 (0.000) |     5.09 | anarkez, d1Ledez, Krad, r3salt, shalfey |
|           28 |     2400 | 2025-03-29 | BetBoom Team                              | L   | 0.324      | -            | -                | -                | -         |    -0.56 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           27 |     2444 | 2025-03-28 | Metizport                                 | L   | 0.319      | -            | -                | -                | -         |    -4.78 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           26 |     2523 | 2025-03-27 | Leo Team                                  | W   | 0.311      | -            | -                | -                | 0 (0.000) |     1.69 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           25 |     2824 | 2025-03-15 | ENCE                                      | L   | 0.231      | -            | -                | -                | -         |    -1.82 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           24 |     2851 | 2025-03-13 | Nexus Gaming                              | W   | 0.219      | 0.435        | 0.151 (0.014)    | 0.883 (0.084)    | 0 (0.000) |     4.63 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           23 |     2885 | 2025-03-11 | Monte                                     | W   | 0.205      | -            | -                | -                | -         |     2.19 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           22 |     2933 | 2025-03-10 | 9INE                                      | L   | 0.197      | -            | -                | -                | -         |    -1.19 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           21 |     2939 | 2025-03-10 | Fnatic                                    | L   | 0.197      | -            | -                | -                | -         |    -0.57 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           20 |     2977 | 2025-03-09 | HEROIC                                    | L   | 0.191      | -            | -                | -                | -         |    -0.16 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           19 |     2987 | 2025-03-09 | Iberian Soul                              | W   | 0.190      | 0.435        | 0.187 (0.015)    | 1.000 (0.083)    | -         |     5.75 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           18 |     3041 | 2025-03-08 | BetBoom Team                              | W   | 0.185      | 0.435        | 0.326 (0.026)    | -                | -         |     5.55 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           17 |     3062 | 2025-03-08 | Dynamo Eclot                              | W   | 0.184      | -            | -                | -                | -         |     3.95 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           16 |     3115 | 2025-03-07 | 9INE                                      | W   | 0.178      | -            | -                | -                | -         |     4.61 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           15 |     3130 | 2025-03-07 | GUN5 Esports                              | W   | 0.177      | 0.435        | -                | 0.840 (0.065)    | -         |     3.97 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           14 |     3183 | 2025-03-06 | PARIVISION                                | W   | 0.170      | 0.435        | -                | 1.000 (0.074)    | -         |     4.08 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           13 |     3211 | 2025-03-05 | PARIVISION                                | L   | 0.165      | -            | -                | -                | -         |    -1.26 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           12 |     3223 | 2025-03-05 | GUN5 Esports                              | L   | 0.164      | -            | -                | -                | -         |    -1.47 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           11 |     3243 | 2025-03-04 | 500                                       | L   | 0.157      | -            | -                | -                | -         |    -2.67 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|           10 |     3255 | 2025-03-03 | 500                                       | L   | 0.152      | -            | -                | -                | -         |    -2.62 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            9 |     3315 | 2025-03-01 | Iberian Soul                              | W   | 0.137      | 0.435        | 0.187 (0.011)    | 1.000 (0.059)    | -         |     4.16 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            8 |     3354 | 2025-02-27 | Monte                                     | W   | 0.123      | -            | -                | -                | -         |     1.34 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            7 |     3416 | 2025-02-25 | PARIVISION                                | L   | 0.112      | -            | -                | -                | -         |    -0.86 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            6 |     3479 | 2025-02-23 | B8                                        | L   | 0.097      | -            | -                | -                | -         |    -0.26 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            5 |     3497 | 2025-02-22 | Dynamo Eclot                              | W   | 0.090      | -            | -                | -                | -         |     1.96 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            4 |     3525 | 2025-02-20 | Sashi Esport                              | W   | 0.077      | -            | -                | -                | -         |     1.74 | d1Ledez, KaiR0N-, Krad, r3salt, shalfey |
|            3 |     3541 | 2025-02-19 | SINNERS Esports                           | W   | 0.072      | -            | -                | -                | -         |     1.41 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            2 |     3562 | 2025-02-18 | Copenhagen Wolves (American organization) | L   | 0.066      | -            | -                | -                | -         |    -1.45 | Alv, d1Ledez, Krad, r3salt, shalfey     |
|            1 |     3661 | 2025-02-13 | 500                                       | L   | 0.032      | -            | -                | -                | -         |    -0.56 | d1Ledez, Krad, mo0N, r3salt, shalfey    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,768.46)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.612 | $1,000.00      | $612.08         |
| 2025-04-20 |      0.472 | $15,000.00     | $7,082.29       |
| 2025-04-03 |      0.359 | $7,500.00      | $2,692.88       |
| 2025-03-16 |      0.239 | $2,000.00      | $477.36         |
| 2025-03-11 |      0.206 | $2,000.00      | $411.02         |
| 2025-02-23 |      0.099 | $5,000.00      | $492.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
