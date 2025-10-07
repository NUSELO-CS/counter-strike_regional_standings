### Roster Details<br />
Team Name: GODSENT<br />
Roster: draken, Golden, Plopski, RuStY, ztr<br />
Global Rank: [132](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [90]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  748.0<br />
<br />
Final Rank Value (748.0) = Starting Rank Value (723.9) + Head To Head Adjustments (24.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.284[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 723.9
- 400 + ( ( 0.167 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 723.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     1908 | 2023-05-22 | BIG                  | L   | 0.539      | -            | -                | -                | -         |    -3.22 | draken, Golden, Plopski, RuStY, ztr  |
|           26 |     1919 | 2023-05-21 | ECSTATIC             | L   | 0.533      | -            | -                | -                | -         |    -3.22 | draken, joel, Plopski, RuStY, ztr    |
|           25 |     1932 | 2023-05-20 | Hungary              | W   | 0.526      | 0.143        | 0.040 (0.003)    | 0.746 (0.056)    | 0 (0.000) |    11.73 | draken, joel, Plopski, RuStY, ztr    |
|           24 |     1937 | 2023-05-20 | Looking For Org      | W   | 0.525      | 0.143        | -                | 0.041 (0.003)    | 0 (0.000) |     4.14 | draken, joel, Plopski, RuStY, ztr    |
|           23 |     2167 | 2023-05-04 | Hungary              | L   | 0.421      | -            | -                | -                | -         |    -4.08 | draken, joel, Plopski, RuStY, ztr    |
|           22 |     2174 | 2023-05-04 | Hawks                | W   | 0.420      | -            | -                | -                | 0 (0.000) |     1.70 | draken, joel, Plopski, RuStY, ztr    |
|           21 |     2308 | 2023-04-28 | Eternal Fire         | L   | 0.379      | -            | -                | -                | -         |    -2.45 | draken, joel, Plopski, RuStY, ztr    |
|           20 |     2333 | 2023-04-27 | SINNERS              | L   | 0.373      | -            | -                | -                | -         |    -1.72 | draken, joel, Plopski, RuStY, ztr    |
|           19 |     2354 | 2023-04-26 | OG                   | L   | 0.367      | -            | -                | -                | -         |    -1.26 | draken, joel, Plopski, RuStY, ztr    |
|           18 |     2861 | 2023-04-02 | OG                   | L   | 0.206      | -            | -                | -                | -         |    -0.83 | draken, joel, Plopski, RuStY, ztr    |
|           17 |     2877 | 2023-04-01 | Astralis             | L   | 0.199      | -            | -                | -                | -         |    -0.02 | draken, joel, Plopski, RuStY, ztr    |
|           16 |     2896 | 2023-03-31 | fnatic               | W   | 0.192      | 0.143        | 0.175 (0.005)    | 0.347 (0.010)    | 0 (0.000) |     5.77 | draken, joel, Plopski, RuStY, ztr    |
|           15 |     2917 | 2023-03-30 | Cloud9               | L   | 0.187      | -            | -                | -                | -         |    -0.04 | draken, joel, Plopski, RuStY, ztr    |
|           14 |     2967 | 2023-03-28 | EPIC DUDES           | W   | 0.175      | 0.143        | 0.006 (0.000)    | -                | 0 (0.000) |     2.38 | draken, joel, Plopski, RuStY, ztr    |
|           13 |     2976 | 2023-03-28 | 500                  | W   | 0.174      | 0.143        | 0.075 (0.002)    | 1.000 (0.025)    | 0 (0.000) |     4.23 | draken, joel, Plopski, RuStY, ztr    |
|           12 |     2980 | 2023-03-28 | Biskvitki Zakuska    | W   | 0.173      | -            | -                | -                | 0 (0.000) |     0.73 | draken, joel, Plopski, RuStY, ztr    |
|           11 |     2991 | 2023-03-28 | BIG                  | W   | 0.172      | 0.657        | 0.080 (0.009)    | 0.312 (0.035)    | 0 (0.000) |     4.30 | draken, joel, Plopski, RuStY, ztr    |
|           10 |     3015 | 2023-03-27 | Looking4Org          | W   | 0.165      | 0.657        | 0.065 (0.007)    | 0.882 (0.096)    | 0 (0.000) |     4.07 | draken, joel, Plopski, RuStY, ztr    |
|            9 |     3247 | 2023-03-20 | Spirit               | L   | 0.119      | -            | -                | -                | -         |    -0.08 | draken, joel, Plopski, RuStY, ztr    |
|            8 |     3555 | 2023-03-10 | Looking4Org          | W   | 0.053      | 0.657        | 0.065 (0.002)    | 0.882 (0.031)    | 0 (0.000) |     1.29 | draken, joel, Plopski, RuStY, ztr    |
|            7 |     3591 | 2023-03-09 | Nexus                | L   | 0.046      | -            | -                | -                | -         |    -0.97 | draken, joel, Plopski, RuStY, ztr    |
|            6 |     3642 | 2023-03-07 | Espionage            | W   | 0.034      | 0.435        | 0.022 (0.000)    | 0.764 (0.011)    | -         |     0.88 | draken, joel, Plopski, RuStY, ztr    |
|            5 |     3658 | 2023-03-06 | Sangal               | W   | 0.028      | -            | -                | -                | -         |     0.35 | draken, joel, Plopski, RuStY, ztr    |
|            4 |     3666 | 2023-03-06 | ex-Copenhagen Flames | L   | 0.026      | -            | -                | -                | -         |    -0.31 | draken, joel, Plopski, RuStY, ztr    |
|            3 |     3695 | 2023-03-05 | Into the Breach      | W   | 0.019      | 0.435        | 0.169 (0.001)    | 0.530 (0.004)    | -         |     0.56 | draken, Golden, joel, Plopski, RuStY |
|            2 |     3706 | 2023-03-04 | ex-iNation           | W   | 0.015      | 0.435        | 0.004 (0.000)    | 0.334 (0.002)    | -         |     0.20 | draken, joel, Plopski, RuStY, ztr    |
|            1 |     3759 | 2023-03-03 | Illuminar            | L   | 0.005      | -            | -                | -                | -         |    -0.10 | draken, joel, Plopski, RuStY, ztr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,451.19)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-04-04 |      0.219 | $20,000.00     | $4,382.48       |
| 2023-03-07 |      0.034 | $2,000.00      | $68.71          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
