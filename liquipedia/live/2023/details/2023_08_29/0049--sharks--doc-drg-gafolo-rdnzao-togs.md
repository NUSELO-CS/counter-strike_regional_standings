### Roster Details<br />
Team Name: Sharks<br />
Roster: doc, drg, Gafolo, rdnzao, togs<br />
Global Rank: [49](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [7]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  984.4<br />
<br />
Final Rank Value (984.4) = Starting Rank Value (940.3) + Head To Head Adjustments (44.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.518[<sup>1</sup>](#table2)
- Bounty Collected: 0.402[<sup>2</sup>](#table1)
- Opponent Network: 0.197[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.718[<sup>2</sup>](#table1)

The average of these factors is 0.279<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 940.3
- 400 + ( ( 0.279 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 940.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |       44 | 2023-08-26 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -15.13 | doc, drg, Gafolo, rdnzao, togs  |
|           52 |      187 | 2023-08-20 | O PLANO        | W   | 1.000      | 0.417        | 0.026 (0.011)    | 0.470 (0.196)    | 0 (0.000) |     8.26 | doc, drg, Gafolo, rdnzao, togs  |
|           51 |      197 | 2023-08-19 | ODDIK          | W   | 1.000      | 0.417        | 0.015 (0.006)    | -                | 0 (0.000) |     6.17 | doc, drg, Gafolo, rdnzao, togs  |
|           50 |      226 | 2023-08-17 | O PLANO        | L   | 1.000      | -            | -                | -                | -         |   -22.99 | doc, drg, Gafolo, rdnzao, togs  |
|           49 |      302 | 2023-08-13 | Fake Natty     | L   | 1.000      | -            | -                | -                | -         |   -17.72 | doc, drg, Gafolo, rdnzao, togs  |
|           48 |      305 | 2023-08-13 | Paquetá        | L   | 1.000      | -            | -                | -                | -         |   -20.02 | doc, drg, Gafolo, rdnzao, togs  |
|           47 |      310 | 2023-08-13 | Case           | W   | 1.000      | 0.384        | 0.019 (0.007)    | 0.471 (0.181)    | 0 (0.000) |     6.46 | doc, drg, Gafolo, rdnzao, togs  |
|           46 |      338 | 2023-08-12 | BESTIA         | W   | 1.000      | 0.143        | 0.191 (0.027)    | -                | 0 (0.000) |    13.95 | doc, drg, Gafolo, rdnzao, togs  |
|           45 |      363 | 2023-08-12 | ODDIK          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.78 | doc, drg, Gafolo, rdnzao, togs  |
|           44 |      416 | 2023-08-10 | Filhos de D10S | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.52 | doc, drg, Gafolo, rdnzao, togs  |
|           43 |      428 | 2023-08-10 | Fluxo          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.29 | doc, drg, Gafolo, rdnzao, togs  |
|           42 |      434 | 2023-08-10 | UNO MILLE      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.93 | doc, drg, Gafolo, rdnzao, togs  |
|           41 |      770 | 2023-07-23 | 9z             | L   | 0.955      | -            | -                | -                | -         |    -8.95 | doc, drg, Gafolo, rdnzao, togs  |
|           40 |      775 | 2023-07-23 | Fake Natty     | W   | 0.953      | 0.384        | 0.058 (0.021)    | 0.541 (0.198)    | 0 (0.000) |    12.23 | doc, drg, Gafolo, rdnzao, togs  |
|           39 |      793 | 2023-07-22 | LRV            | W   | 0.946      | 0.384        | -                | 0.501 (0.182)    | 0 (0.000) |     5.57 | doc, drg, Gafolo, rdnzao, togs  |
|           38 |      822 | 2023-07-20 | W7M            | W   | 0.935      | 0.384        | -                | 0.513 (0.184)    | -         |     6.01 | doc, drg, Gafolo, rdnzao, togs  |
|           37 |      998 | 2023-07-11 | BESTIA         | L   | 0.875      | -            | -                | -                | -         |   -12.29 | doc, drg, Gafolo, rdnzao, togs  |
|           36 |     1081 | 2023-06-25 | BESTIA         | W   | 0.768      | 0.371        | 0.191 (0.054)    | 0.721 (0.205)    | -         |    13.15 | chay, drg, Gafolo, rdnzao, togs |
|           35 |     1088 | 2023-06-24 | FURIA Academy  | W   | 0.761      | 0.371        | -                | 0.472 (0.133)    | -         |     7.89 | chay, drg, Gafolo, rdnzao, togs |
|           34 |     1117 | 2023-06-18 | BESTIA         | W   | 0.722      | 0.371        | 0.191 (0.051)    | 0.721 (0.193)    | -         |    13.01 | chay, drg, Gafolo, rdnzao, togs |
|           33 |     1164 | 2023-06-16 | FURIA Academy  | W   | 0.707      | -            | -                | -                | -         |     7.44 | chay, drg, Gafolo, rdnzao, togs |
|           32 |     1176 | 2023-06-15 | MIBR Academy   | W   | 0.701      | -            | -                | -                | -         |     3.42 | chay, drg, Gafolo, rdnzao, togs |
|           31 |     1358 | 2023-06-07 | Boca Juniors   | L   | 0.648      | -            | -                | -                | -         |   -12.55 | chay, drg, Gafolo, rdnzao, togs |
|           30 |     1662 | 2023-05-29 | 9INE           | L   | 0.586      | -            | -                | -                | -         |    -4.30 | chay, drg, Gafolo, rdnzao, togs |
|           29 |     1675 | 2023-05-28 | ECSTATIC       | L   | 0.581      | -            | -                | -                | -         |    -7.53 | chay, drg, Gafolo, rdnzao, togs |
|           28 |     1769 | 2023-05-26 | Endpoint       | W   | 0.565      | 0.589        | 0.046 (0.015)    | 0.790 (0.263)    | -         |     8.44 | chay, drg, Gafolo, rdnzao, togs |
|           27 |     1836 | 2023-05-24 | 9INE           | W   | 0.553      | 0.589        | 0.265 (0.086)    | 0.734 (0.239)    | -         |    13.42 | chay, drg, Gafolo, rdnzao, togs |
|           26 |     2122 | 2023-05-07 | BESTIA         | L   | 0.442      | -            | -                | -                | -         |    -6.06 | chay, drg, Gafolo, rdnzao, togs |
|           25 |     2128 | 2023-05-07 | 9z             | W   | 0.440      | 0.384        | 0.273 (0.046)    | -                | -         |     9.51 | chay, drg, Gafolo, rdnzao, togs |
|           24 |     2149 | 2023-05-06 | O PLANO        | W   | 0.435      | -            | -                | -                | -         |     4.49 | chay, drg, Gafolo, rdnzao, togs |
|           23 |     2182 | 2023-05-04 | FURIA Academy  | W   | 0.420      | -            | -                | -                | -         |     4.38 | chay, drg, Gafolo, rdnzao, togs |
|           22 |     2242 | 2023-04-30 | Solid          | W   | 0.395      | -            | -                | -                | -         |     3.63 | chay, drg, Gafolo, rdnzao, togs |
|           21 |     2269 | 2023-04-29 | ODDIK          | W   | 0.388      | -            | -                | -                | -         |     3.40 | chay, drg, Gafolo, rdnzao, togs |
|           20 |     2290 | 2023-04-28 | O PLANO        | W   | 0.381      | -            | -                | -                | -         |     4.16 | chay, drg, Gafolo, rdnzao, togs |
|           19 |     2366 | 2023-04-25 | FURIA Academy  | W   | 0.362      | -            | -                | -                | -         |     4.02 | chay, drg, Gafolo, rdnzao, togs |
|           18 |     2388 | 2023-04-24 | O PLANO        | L   | 0.356      | -            | -                | -                | -         |    -7.36 | chay, drg, Gafolo, rdnzao, togs |
|           17 |     2541 | 2023-04-16 | Paquetá        | L   | 0.301      | -            | -                | -                | -         |    -5.23 | chay, drg, Gafolo, rdnzao, togs |
|           16 |     2572 | 2023-04-15 | Case           | W   | 0.293      | -            | -                | -                | -         |     2.90 | chay, drg, Gafolo, rdnzao, togs |
|           15 |     2584 | 2023-04-14 | Solid          | L   | 0.289      | -            | -                | -                | -         |    -6.61 | chay, drg, Gafolo, rdnzao, togs |
|           14 |     2615 | 2023-04-13 | paiN Academy   | W   | 0.282      | -            | -                | -                | -         |     2.31 | chay, drg, Gafolo, rdnzao, togs |
|           13 |     2937 | 2023-03-29 | ARCTIC         | W   | 0.182      | -            | -                | -                | -         |     1.42 | chay, drg, Gafolo, rdnzao, togs |
|           12 |     2969 | 2023-03-28 | ODDIK          | W   | 0.175      | -            | -                | -                | -         |     1.40 | chay, drg, Gafolo, rdnzao, togs |
|           11 |     3004 | 2023-03-27 | O PLANO        | L   | 0.168      | -            | -                | -                | -         |    -3.50 | chay, drg, Gafolo, rdnzao, togs |
|           10 |     3009 | 2023-03-27 | Boca Juniors   | W   | 0.168      | -            | -                | -                | -         |     2.12 | chay, drg, Gafolo, rdnzao, togs |
|            9 |     3023 | 2023-03-26 | Hype           | W   | 0.162      | -            | -                | -                | -         |     0.24 | chay, drg, Gafolo, rdnzao, togs |
|            8 |     3056 | 2023-03-25 | Flamengo       | W   | 0.155      | -            | -                | -                | -         |     0.84 | chay, drg, Gafolo, rdnzao, togs |
|            7 |     3084 | 2023-03-24 | Meta           | W   | 0.148      | -            | -                | -                | -         |     1.34 | chay, drg, Gafolo, rdnzao, togs |
|            6 |     3114 | 2023-03-23 | ARCTIC         | L   | 0.142      | -            | -                | -                | -         |    -3.41 | chay, drg, Gafolo, rdnzao, togs |
|            5 |     3197 | 2023-03-21 | Flamengo       | W   | 0.129      | -            | -                | -                | -         |     0.68 | chay, drg, Gafolo, rdnzao, togs |
|            4 |     3317 | 2023-03-17 | Sojoga         | W   | 0.102      | -            | -                | -                | -         |     0.83 | chay, drg, Gafolo, rdnzao, togs |
|            3 |     3337 | 2023-03-17 | Fluxo          | L   | 0.100      | -            | -                | -                | -         |    -2.33 | chay, drg, Gafolo, rdnzao, togs |
|            2 |     3353 | 2023-03-16 | Meta           | W   | 0.095      | -            | -                | -                | -         |     0.84 | chay, drg, Gafolo, rdnzao, togs |
|            1 |     3450 | 2023-03-13 | Meta           | W   | 0.074      | -            | -                | -                | -         |     0.66 | chay, drg, Gafolo, rdnzao, togs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,875.46)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $4,400.00      | $4,400.00       |
| 2023-08-13 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-07-23 |      0.955 | $5,000.00      | $4,774.82       |
| 2023-06-25 |      0.768 | $10,000.00     | $7,675.03       |
| 2023-05-30 |      0.594 | $5,000.00      | $2,970.09       |
| 2023-05-07 |      0.442 | $5,000.00      | $2,211.80       |
| 2023-04-30 |      0.395 | $5,000.00      | $1,974.33       |
| 2023-04-16 |      0.302 | $2,500.00      | $756.18         |
| 2023-03-29 |      0.182 | $11,000.00     | $2,003.72       |
| 2023-03-18 |      0.109 | $1,000.00      | $109.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
