### Roster Details<br />
Team Name: Grayhound<br />
Roster: aliStair, INS, Liazz, Sico, Vexite<br />
Global Rank: [58](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [3]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  954.0<br />
<br />
Final Rank Value (954.0) = Starting Rank Value (938.7) + Head To Head Adjustments (15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.459[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.285[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.189[<sup>2</sup>](#table1)

The average of these factors is 0.279<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 938.7
- 400 + ( ( 0.279 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 938.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      733 | 2023-07-27 | Imperial          | L   | 0.980      | -            | -                | -                | -         |   -10.31 | aliStair, INS, Liazz, Sico, Vexite |
|           28 |      744 | 2023-07-26 | FURIA             | L   | 0.973      | -            | -                | -                | -         |   -17.64 | aliStair, INS, Liazz, Sico, Vexite |
|           27 |     1234 | 2023-06-11 | VERTEX            | W   | 0.672      | 0.333        | 0.009 (0.002)    | 0.209 (0.047)    | 0 (0.000) |     3.58 | Falcon, INS, Liazz, Sico, Vexite   |
|           26 |     1271 | 2023-06-10 | Australia         | W   | 0.664      | 0.333        | -                | 0.374 (0.083)    | -         |     3.03 | Falcon, INS, Liazz, Sico, Vexite   |
|           25 |     1612 | 2023-05-30 | Liquid            | L   | 0.594      | -            | -                | -                | -         |    -2.17 | aliStair, INS, Liazz, Sico, Vexite |
|           24 |     1640 | 2023-05-29 | Cloud9            | L   | 0.588      | -            | -                | -                | -         |    -0.48 | aliStair, INS, Liazz, Sico, Vexite |
|           23 |     2058 | 2023-05-11 | Liquid            | L   | 0.467      | -            | -                | -                | -         |    -1.77 | aliStair, INS, Liazz, Sico, Vexite |
|           22 |     2070 | 2023-05-10 | Ninjas in Pyjamas | L   | 0.460      | -            | -                | -                | -         |    -1.18 | aliStair, INS, Liazz, Sico, Vexite |
|           21 |     2094 | 2023-05-09 | TheMongolz        | W   | 0.451      | 0.143        | 0.066 (0.004)    | 0.439 (0.028)    | 1 (0.451) |     7.88 | aliStair, INS, Liazz, Sico, Vexite |
|           20 |     2106 | 2023-05-08 | Apeks             | L   | 0.447      | -            | -                | -                | -         |    -1.46 | aliStair, INS, Liazz, Sico, Vexite |
|           19 |     2114 | 2023-05-08 | FORZE             | W   | 0.446      | 0.143        | 0.364 (0.023)    | 0.409 (0.026)    | 1 (0.446) |    11.63 | aliStair, INS, Liazz, Sico, Vexite |
|           18 |     2260 | 2023-04-29 | Bad News Eagles   | L   | 0.389      | -            | -                | -                | -         |    -2.96 | aliStair, INS, Liazz, Sico, Vexite |
|           17 |     2312 | 2023-04-28 | Complexity        | W   | 0.378      | 0.500        | 0.120 (0.023)    | 0.373 (0.070)    | 1 (0.378) |     8.61 | aliStair, INS, Liazz, Sico, Vexite |
|           16 |     2315 | 2023-04-27 | Evil Geniuses     | W   | 0.376      | 0.500        | 0.077 (0.014)    | 0.580 (0.109)    | 1 (0.376) |     4.68 | aliStair, INS, Liazz, Sico, Vexite |
|           15 |     2600 | 2023-04-14 | VERTEX            | W   | 0.286      | 0.333        | 0.009 (0.001)    | 0.209 (0.020)    | -         |     1.71 | aliStair, INS, Liazz, Sico, Vexite |
|           14 |     2638 | 2023-04-13 | VERTEX            | W   | 0.278      | 0.333        | -                | 0.209 (0.019)    | -         |     1.66 | aliStair, INS, Liazz, Sico, Vexite |
|           13 |     2739 | 2023-04-09 | TheMongolz        | W   | 0.251      | 0.143        | 0.066 (0.002)    | -                | 1 (0.251) |     4.57 | aliStair, INS, Liazz, Sico, Vexite |
|           12 |     2778 | 2023-04-07 | ATOX              | W   | 0.240      | 0.143        | 0.026 (0.001)    | -                | 1 (0.240) |     2.00 | aliStair, INS, Liazz, Sico, Vexite |
|           11 |     2785 | 2023-04-07 | TYLOO             | W   | 0.238      | -            | -                | -                | 1 (0.238) |     0.37 | aliStair, INS, Liazz, Sico, Vexite |
|           10 |     2960 | 2023-03-29 | The Big Dogs      | W   | 0.178      | -            | -                | -                | -         |     0.44 | aliStair, INS, Liazz, Sico, Vexite |
|            9 |     3016 | 2023-03-27 | Stirlzs Angels    | W   | 0.165      | -            | -                | -                | -         |     0.37 | aliStair, INS, Liazz, Sico, Vexite |
|            8 |     3071 | 2023-03-25 | VERTEX            | W   | 0.152      | -            | -                | -                | -         |     0.97 | aliStair, INS, Liazz, Sico, Vexite |
|            7 |     3104 | 2023-03-24 | VERTEX            | W   | 0.145      | -            | -                | -                | -         |     0.92 | aliStair, INS, Liazz, Sico, Vexite |
|            6 |     3107 | 2023-03-24 | Australia         | W   | 0.144      | -            | -                | -                | -         |     0.76 | aliStair, INS, Liazz, Sico, Vexite |
|            5 |     3494 | 2023-03-12 | Fake Natty        | L   | 0.066      | -            | -                | -                | -         |    -1.25 | aliStair, INS, Liazz, Sico, Vexite |
|            4 |     3512 | 2023-03-11 | paiN              | L   | 0.060      | -            | -                | -                | -         |    -0.87 | aliStair, INS, Liazz, Sico, Vexite |
|            3 |     3534 | 2023-03-10 | Ninjas in Pyjamas | W   | 0.055      | 0.934        | 0.194 (0.010)    | 0.670 (0.034)    | 1 (0.055) |     1.61 | aliStair, INS, Liazz, Sico, Vexite |
|            2 |     3571 | 2023-03-09 | Fake Natty        | W   | 0.048      | 0.934        | 0.058 (0.003)    | 0.541 (0.024)    | 1 (0.048) |     0.60 | aliStair, INS, Liazz, Sico, Vexite |
|            1 |     3611 | 2023-03-08 | Vitality          | L   | 0.041      | -            | -                | -                | -         |    -0.00 | aliStair, INS, Liazz, Sico, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,980.62)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-28 |      0.988 | $2,500.00      | $2,469.61       |
| 2023-06-11 |      0.672 | $4,678.00      | $3,141.83       |
| 2023-06-04 |      0.627 | $4,000.00      | $2,509.39       |
| 2023-05-11 |      0.467 | $10,000.00     | $4,667.89       |
| 2023-04-30 |      0.391 | $10,000.00     | $3,907.92       |
| 2023-03-26 |      0.160 | $8,000.00      | $1,283.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
