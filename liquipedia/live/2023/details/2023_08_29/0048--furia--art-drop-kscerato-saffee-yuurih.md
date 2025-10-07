### Roster Details<br />
Team Name: FURIA<br />
Roster: arT, drop, KSCERATO, saffee, yuurih<br />
Global Rank: [48](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [6]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  992.7<br />
<br />
Final Rank Value (992.7) = Starting Rank Value (964.1) + Head To Head Adjustments (28.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.479[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.268[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.292<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 964.1
- 400 + ( ( 0.292 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 964.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1604 | 2023-05-30 | MOUZ              | L   | 0.594      | -            | -                | -                | -         |    -1.77 | arT, drop, KSCERATO, saffee, yuurih |
|           18 |     1632 | 2023-05-29 | Nouns             | W   | 0.588      | 0.624        | 0.091 (0.033)    | 0.601 (0.221)    | 1 (0.588) |     7.50 | arT, drop, KSCERATO, saffee, yuurih |
|           17 |     1656 | 2023-05-29 | OG                | L   | 0.587      | -            | -                | -                | -         |    -5.46 | arT, drop, KSCERATO, saffee, yuurih |
|           16 |     2018 | 2023-05-14 | G2                | L   | 0.487      | -            | -                | -                | -         |    -0.07 | arT, drop, KSCERATO, saffee, yuurih |
|           15 |     2034 | 2023-05-13 | Ninjas in Pyjamas | L   | 0.480      | -            | -                | -                | -         |    -1.37 | arT, drop, KSCERATO, saffee, yuurih |
|           14 |     2045 | 2023-05-13 | Monte             | L   | 0.478      | -            | -                | -                | -         |    -1.12 | arT, drop, KSCERATO, saffee, yuurih |
|           13 |     2440 | 2023-04-21 | Heroic            | L   | 0.335      | -            | -                | -                | -         |    -0.09 | arT, drop, KSCERATO, saffee, yuurih |
|           12 |     2474 | 2023-04-19 | Cloud9            | L   | 0.322      | -            | -                | -                | -         |    -0.31 | arT, drop, KSCERATO, saffee, yuurih |
|           11 |     2501 | 2023-04-18 | FaZe              | W   | 0.314      | 0.624        | 0.549 (0.108)    | 0.509 (0.100)    | 1 (0.314) |     9.60 | arT, drop, KSCERATO, saffee, yuurih |
|           10 |     2518 | 2023-04-17 | fnatic            | W   | 0.307      | 0.624        | 0.175 (0.034)    | 0.347 (0.067)    | 1 (0.307) |     8.13 | arT, drop, KSCERATO, saffee, yuurih |
|            9 |     2722 | 2023-04-09 | paiN              | W   | 0.256      | 0.143        | 0.085 (0.003)    | 0.404 (0.015)    | 1 (0.256) |     4.20 | arT, drop, KSCERATO, saffee, yuurih |
|            8 |     2740 | 2023-04-08 | Liquid            | W   | 0.250      | 0.143        | 0.218 (0.008)    | 0.329 (0.012)    | 1 (0.250) |     7.05 | arT, drop, KSCERATO, saffee, yuurih |
|            7 |     2771 | 2023-04-07 | Evil Geniuses     | W   | 0.241      | 0.143        | 0.012 (0.000)    | 0.095 (0.003)    | 1 (0.241) |     1.41 | arT, drop, KSCERATO, saffee, yuurih |
|            6 |     2801 | 2023-04-06 | TeamOne           | W   | 0.235      | 0.143        | 0.001 (0.000)    | 0.008 (0.000)    | 1 (0.235) |     1.08 | arT, drop, KSCERATO, saffee, yuurih |
|            5 |     2882 | 2023-03-31 | Evil Geniuses     | L   | 0.196      | -            | -                | -                | -         |    -3.82 | arT, drop, KSCERATO, saffee, yuurih |
|            4 |     3169 | 2023-03-22 | FaZe              | L   | 0.134      | -            | -                | -                | -         |    -0.10 | arT, drop, KSCERATO, saffee, yuurih |
|            3 |     3214 | 2023-03-21 | fnatic            | W   | 0.126      | 0.934        | 0.175 (0.021)    | 0.347 (0.041)    | 1 (0.126) |     3.42 | arT, drop, KSCERATO, saffee, yuurih |
|            2 |     3713 | 2023-03-04 | BIG               | W   | 0.014      | 0.934        | 0.080 (0.001)    | 0.312 (0.004)    | 1 (0.014) |     0.22 | arT, drop, KSCERATO, saffee, yuurih |
|            1 |     3743 | 2023-03-03 | Movistar Riders   | W   | 0.007      | 0.934        | 0.089 (0.001)    | 0.249 (0.002)    | 1 (0.007) |     0.11 | arT, drop, KSCERATO, saffee, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,328.77)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-04 |      0.627 | $5,000.00      | $3,136.74       |
| 2023-05-21 |      0.533 | $20,000.00     | $10,665.33      |
| 2023-04-23 |      0.347 | $10,000.00     | $3,472.18       |
| 2023-04-02 |      0.208 | $5,000.00      | $1,042.08       |
| 2023-03-26 |      0.160 | $25,000.00     | $4,012.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
