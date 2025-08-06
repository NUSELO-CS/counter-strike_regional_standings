### Roster Details<br />
Team Name: JiJieHao<br />
Roster: 0SAMAS, bibu, BOROS, ISSAA, m1N1<br />
Global Rank: [46](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [32]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  1040.3<br />
<br />
Final Rank Value (1040.3) = Starting Rank Value (1017.3) + Head To Head Adjustments (23.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.379[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- Own Network: 0.254[<sup>2</sup>](#table1)
- LAN Wins: 0.406[<sup>2</sup>](#table1)

The average of these factors is 0.326<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1017.3
- 400 + ( ( 0.326 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 1017.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      281 | 2025-07-14 | Passion UA              | L   | 1.000      | -            | -                | -                | -         |   -10.26 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           28 |     1147 | 2025-05-15 | FlyQuest                | L   | 0.662      | -            | -                | -                | -         |    -3.24 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           27 |     1282 | 2025-05-10 | Lynn Vision Gaming      | L   | 0.629      | -            | -                | -                | -         |    -0.89 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           26 |     1353 | 2025-05-07 | Lynn Vision Gaming      | W   | 0.609      | 0.636        | 0.275 (0.106)    | 0.639 (0.248)    | 1 (0.609) |    18.43 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           25 |     1425 | 2025-05-05 | The Huns Esports        | W   | 0.596      | 0.636        | 0.035 (0.013)    | 0.303 (0.115)    | 1 (0.596) |     8.80 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           24 |     1516 | 2025-05-01 | B8                      | L   | 0.569      | -            | -                | -                | -         |    -2.64 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           23 |     1530 | 2025-05-01 | HEROIC                  | L   | 0.564      | -            | -                | -                | -         |    -0.79 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           22 |     1574 | 2025-04-29 | SAW                     | W   | 0.555      | 0.624        | 0.280 (0.097)    | 0.310 (0.108)    | 1 (0.555) |    15.24 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           21 |     1666 | 2025-04-26 | Nomads (Mongolian team) | W   | 0.530      | 0.534        | 0.013 (0.004)    | 0.153 (0.043)    | 1 (0.530) |     3.46 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           20 |     1751 | 2025-04-20 | Exusiai                 | W   | 0.490      | -            | -                | -                | 1 (0.490) |     1.03 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           19 |     1813 | 2025-04-17 | The QUBE Esports        | W   | 0.471      | -            | -                | -                | 1 (0.471) |     0.47 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           18 |     1956 | 2025-04-10 | ScarX                   | W   | 0.424      | 0.525        | 0.002 (0.001)    | 0.153 (0.034)    | 0 (0.000) |     1.61 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           17 |     1959 | 2025-04-10 | LFO (Filipino team)     | W   | 0.423      | -            | -                | -                | 0 (0.000) |     0.43 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           16 |     2256 | 2025-04-01 | HOTU                    | L   | 0.363      | -            | -                | -                | -         |    -6.97 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           15 |     2266 | 2025-03-31 | SemperFi Esports        | W   | 0.356      | 0.769        | 0.012 (0.003)    | 0.441 (0.121)    | -         |     2.73 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           14 |     2411 | 2025-03-28 | ScarX                   | W   | 0.338      | 0.624        | 0.002 (0.000)    | 0.153 (0.032)    | -         |     1.21 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           13 |     2481 | 2025-03-27 | POWERmix                | W   | 0.331      | -            | -                | -                | -         |     0.35 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           12 |     2495 | 2025-03-27 | ScarX                   | W   | 0.330      | 0.624        | 0.002 (0.000)    | 0.153 (0.032)    | -         |     1.18 | 0SAMAS, bibu, BOROS, ISSAA, m1N1    |
|           11 |     3010 | 2025-03-08 | Rare Atom               | L   | 0.204      | -            | -                | -                | -         |    -2.13 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|           10 |     3032 | 2025-03-07 | Wings Up Gaming         | W   | 0.201      | 0.769        | 0.009 (0.001)    | 0.190 (0.029)    | 1 (0.201) |     1.67 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            9 |     3089 | 2025-03-07 | HOTU                    | L   | 0.197      | -            | -                | -                | -         |    -4.12 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            8 |     3099 | 2025-03-06 | SemperFi Esports        | W   | 0.195      | 0.769        | 0.012 (0.002)    | 0.441 (0.066)    | 1 (0.195) |     1.36 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            7 |     3346 | 2025-02-26 | POWERmix                | W   | 0.138      | -            | -                | -                | -         |     0.14 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            6 |     3372 | 2025-02-25 | Monte                   | L   | 0.133      | -            | -                | -                | -         |    -3.50 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            5 |     3383 | 2025-02-25 | POWERmix                | W   | 0.131      | -            | -                | -                | -         |     0.13 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            4 |     3415 | 2025-02-24 | TheShtrongolZ           | W   | 0.123      | -            | -                | -                | -         |     0.12 | Aaron, bibu, BOROS, dennyslaw, m1N1 |
|            3 |     3715 | 2025-02-09 | Wings Up Gaming         | L   | 0.028      | -            | -                | -                | -         |    -0.67 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            2 |     3745 | 2025-02-08 | Rare Atom               | L   | 0.022      | -            | -                | -                | -         |    -0.24 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |
|            1 |     3810 | 2025-02-07 | Ground Zero Gaming      | W   | 0.015      | -            | -                | -                | -         |     0.07 | Aaron, bibu, dennyslaw, ISSAA, m1N1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,829.05)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-16 |      0.664 | $30,000.00     | $19,912.50      |
| 2025-05-04 |      0.583 | $5,000.00      | $2,916.55       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
