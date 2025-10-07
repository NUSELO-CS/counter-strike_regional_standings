### Roster Details<br />
Team Name: INTZ<br />
Roster: bobz, desh, Leomonster, lub, w1<br />
Global Rank: [189](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [55]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  666.5<br />
<br />
Final Rank Value (666.5) = Starting Rank Value (686.5) + Head To Head Adjustments (-19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.5
- 400 + ( ( 0.148 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 686.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     1141 | 2023-06-17 | FURIA Academy | L   | 0.714      | -            | -                | -                | -         |    -6.47 | bobz, desh, Leomonster, lub, w1    |
|           30 |     1161 | 2023-06-16 | Los Grandes   | W   | 0.708      | -            | -                | -                | 0 (0.000) |     3.98 | bobz, desh, Leomonster, lub, w1    |
|           29 |     1190 | 2023-06-14 | RED Canids    | L   | 0.695      | -            | -                | -                | -         |    -9.13 | bobz, desh, Leomonster, lub, w1    |
|           28 |     1518 | 2023-06-01 | Boca Juniors  | L   | 0.609      | -            | -                | -                | -         |    -5.35 | bobz, desh, Leomonster, lub, w1    |
|           27 |     1558 | 2023-05-31 | Case          | L   | 0.602      | -            | -                | -                | -         |    -8.46 | bobz, desh, Leomonster, lub, w1    |
|           26 |     1582 | 2023-05-31 | Hype          | W   | 0.600      | 0.384        | -                | 0.057 (0.013)    | 0 (0.000) |     2.98 | bobz, desh, Leomonster, lub, w1    |
|           25 |     1647 | 2023-05-29 | RED Canids    | L   | 0.588      | -            | -                | -                | -         |    -8.52 | bobz, desh, Leomonster, lub, w1    |
|           24 |     1676 | 2023-05-28 | ODDIK         | L   | 0.581      | -            | -                | -                | -         |    -7.45 | bobz, desh, Leomonster, lub, w1    |
|           23 |     1747 | 2023-05-26 | Sojoga        | L   | 0.568      | -            | -                | -                | -         |    -7.80 | bobz, desh, Leomonster, lub, w1    |
|           22 |     1785 | 2023-05-25 | The Union     | W   | 0.561      | 0.384        | 0.009 (0.002)    | 0.398 (0.086)    | 0 (0.000) |     9.63 | bobz, desh, Leomonster, lub, w1    |
|           21 |     1834 | 2023-05-24 | Sojoga        | L   | 0.553      | -            | -                | -                | -         |    -8.03 | bobz, desh, Leomonster, lub, w1    |
|           20 |     2126 | 2023-05-07 | BESTIA        | L   | 0.441      | -            | -                | -                | -         |    -2.28 | bobz, desh, Leomonster, lub, w1    |
|           19 |     2151 | 2023-05-06 | ODDIK         | W   | 0.434      | 0.384        | 0.007 (0.001)    | 0.352 (0.059)    | 0 (0.000) |     8.13 | bobz, desh, Leomonster, lub, w1    |
|           18 |     2168 | 2023-05-04 | RED Canids    | W   | 0.421      | 0.384        | 0.008 (0.001)    | 0.262 (0.042)    | 0 (0.000) |     7.25 | bobz, desh, Leomonster, lub, w1    |
|           17 |     2552 | 2023-04-15 | ARCTIC        | L   | 0.296      | -            | -                | -                | -         |    -4.05 | bobz, desh, Leomonster, lub, w1    |
|           16 |     2588 | 2023-04-14 | 9z            | L   | 0.289      | -            | -                | -                | -         |    -0.96 | bobz, desh, Leomonster, lub, w1    |
|           15 |     2593 | 2023-04-14 | O PLANO       | W   | 0.287      | 0.384        | 0.026 (0.003)    | 0.470 (0.052)    | 0 (0.000) |     6.04 | bobz, desh, Leomonster, lub, w1    |
|           14 |     2643 | 2023-04-12 | Fluxo         | L   | 0.276      | -            | -                | -                | -         |    -3.51 | bobz, desh, Leomonster, lub, w1    |
|           13 |     2655 | 2023-04-12 | Fake Natty    | L   | 0.274      | -            | -                | -                | -         |    -2.49 | bobz, desh, Leomonster, lub, w1    |
|           12 |     2871 | 2023-04-01 | RED Canids    | W   | 0.200      | 0.384        | 0.008 (0.001)    | 0.262 (0.020)    | 0 (0.000) |     3.43 | bobz, desh, Leomonster, lub, w1    |
|           11 |     2920 | 2023-03-30 | ARCTIC        | L   | 0.187      | -            | -                | -                | -         |    -2.62 | bobz, desh, Leomonster, lub, w1    |
|           10 |     2975 | 2023-03-28 | MIBR Academy  | W   | 0.174      | 0.384        | 0.004 (0.000)    | 0.294 (0.020)    | 0 (0.000) |     2.57 | bobz, desh, Leomonster, lub, w1    |
|            9 |     2999 | 2023-03-27 | O PLANO       | W   | 0.169      | 0.143        | 0.026 (0.001)    | 0.470 (0.011)    | 0 (0.000) |     3.59 | bobz, desh, Leomonster, lub, w1    |
|            8 |     3003 | 2023-03-27 | The Union     | W   | 0.168      | 0.143        | 0.009 (0.000)    | -                | 0 (0.000) |     3.08 | bobz, desh, Leomonster, lub, w1    |
|            7 |     3008 | 2023-03-27 | Corinthians   | W   | 0.168      | 0.143        | 0.008 (0.000)    | 0.552 (0.013)    | -         |     2.96 | bobz, desh, Leomonster, lub, w1    |
|            6 |     3026 | 2023-03-26 | RED Canids    | W   | 0.162      | -            | -                | -                | -         |     2.89 | bobz, desh, Leomonster, lub, w1    |
|            5 |     3039 | 2023-03-26 | Boca Juniors  | W   | 0.160      | 0.384        | 0.035 (0.002)    | 0.511 (0.031)    | -         |     3.71 | bobz, desh, Leomonster, matios, w1 |
|            4 |     3332 | 2023-03-17 | Boca Juniors  | L   | 0.100      | -            | -                | -                | -         |    -0.81 | bobz, desh, Leomonster, matios, w1 |
|            3 |     3349 | 2023-03-16 | ARCTIC        | L   | 0.096      | -            | -                | -                | -         |    -1.33 | bobz, desh, Leomonster, matios, w1 |
|            2 |     3372 | 2023-03-16 | 9z            | L   | 0.093      | -            | -                | -                | -         |    -0.29 | bobz, desh, Leomonster, matios, w1 |
|            1 |     3430 | 2023-03-14 | Boca Juniors  | L   | 0.081      | -            | -                | -                | -         |    -0.65 | bobz, desh, Leomonster, matios, w1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,408.37)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-05-07 |      0.442 | $2,500.00      | $1,105.90       |
| 2023-04-16 |      0.302 | $1,000.00      | $302.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
