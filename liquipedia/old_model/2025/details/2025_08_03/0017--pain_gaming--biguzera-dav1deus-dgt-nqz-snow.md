### Roster Details<br />
Team Name: PaiN Gaming<br />
Roster: biguzera, dav1deuS, dgt, nqz, snow<br />
Global Rank: [17](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_03.md)<br />
Regional Rank: [2]( ../../standings_americas_2025_08_03.md)<br />
<br />
Final Rank Value:  1431.9<br />
<br />
Final Rank Value (1431.9) = Starting Rank Value (1487.7) + Head To Head Adjustments (-55.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.658[<sup>1</sup>](#table2)
- Bounty Collected: 0.486[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.950[<sup>2</sup>](#table1)

The average of these factors is 0.567<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1487.7
- 400 + ( ( 0.567 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 1487.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      101 | 2025-07-25 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -6.25 | biguzera, dav1deuS, dgt, nqz, snow   |
|           43 |      106 | 2025-07-25 | BIG                | W   | 1.000      | 0.143        | 0.183 (0.026)    | -                | 1 (1.000) |     5.59 | biguzera, dav1deuS, dgt, nqz, snow   |
|           42 |      122 | 2025-07-23 | Team Liquid        | L   | 1.000      | -            | -                | -                | -         |   -21.61 | biguzera, dav1deuS, dgt, nqz, snow   |
|           41 |      225 | 2025-07-17 | 3DMAX              | L   | 1.000      | -            | -                | -                | -         |   -10.89 | biguzera, dav1deuS, dgt, nqz, snow   |
|           40 |      251 | 2025-07-16 | Lynn Vision Gaming | L   | 1.000      | -            | -                | -                | -         |   -15.68 | biguzera, dav1deuS, dgt, nqz, snow   |
|           39 |      273 | 2025-07-15 | Rare Atom          | W   | 1.000      | 1.000        | 0.066 (0.066)    | 0.468 (0.468)    | 1 (1.000) |     3.96 | biguzera, dav1deuS, dgt, nqz, snow   |
|           38 |      544 | 2025-06-21 | The MongolZ        | L   | 0.907      | -            | -                | -                | -         |    -4.09 | biguzera, dav1deuS, dgt, nqz, snow   |
|           37 |      572 | 2025-06-19 | FURIA              | W   | 0.894      | 1.000        | 0.481 (0.430)    | 0.621 (0.555)    | 1 (0.894) |    21.07 | biguzera, dav1deuS, dgt, nqz, snow   |
|           36 |      637 | 2025-06-15 | Virtus.pro         | W   | 0.867      | 0.143        | 0.159 (0.020)    | 0.414 (0.051)    | 1 (0.867) |    12.86 | biguzera, dav1deuS, dgt, nqz, snow   |
|           35 |      680 | 2025-06-14 | 3DMAX              | W   | 0.858      | 0.143        | 0.335 (0.041)    | 0.571 (0.070)    | 1 (0.858) |    19.24 | biguzera, dav1deuS, dgt, nqz, snow   |
|           34 |      701 | 2025-06-13 | Nemiga Gaming      | W   | 0.852      | 0.143        | -                | 0.738 (0.090)    | 1 (0.852) |     5.79 | biguzera, dav1deuS, dgt, nqz, snow   |
|           33 |      733 | 2025-06-12 | G2 Esports         | L   | 0.847      | -            | -                | -                | -         |    -8.56 | biguzera, dav1deuS, dgt, nqz, snow   |
|           32 |      748 | 2025-06-12 | Team Spirit        | L   | 0.845      | -            | -                | -                | -         |    -1.31 | biguzera, dav1deuS, dgt, nqz, snow   |
|           31 |      792 | 2025-06-09 | Lynn Vision Gaming | W   | 0.825      | 0.143        | 0.233 (0.027)    | 0.639 (0.075)    | 1 (0.825) |    14.44 | biguzera, dav1deuS, dgt, nqz, snow   |
|           30 |      804 | 2025-06-08 | Virtus.pro         | L   | 0.819      | -            | -                | -                | -         |   -13.67 | biguzera, dav1deuS, dgt, nqz, snow   |
|           29 |      821 | 2025-06-07 | FURIA              | W   | 0.813      | 0.143        | 0.481 (0.056)    | 0.621 (0.072)    | 1 (0.813) |    19.88 | biguzera, dav1deuS, dgt, nqz, snow   |
|           28 |      826 | 2025-06-07 | Nemiga Gaming      | W   | 0.812      | 0.143        | -                | 0.738 (0.086)    | 1 (0.812) |     4.87 | biguzera, dav1deuS, dgt, nqz, snow   |
|           27 |     1226 | 2025-05-13 | MIBR               | L   | 0.643      | -            | -                | -                | -         |   -13.91 | biguzera, dav1deuS, dgt, nqz, snow   |
|           26 |     1254 | 2025-05-11 | ODDIK              | L   | 0.636      | -            | -                | -                | -         |   -18.96 | biguzera, dav1deuS, dgt, nqz, snow   |
|           25 |     1281 | 2025-05-10 | Astralis           | L   | 0.629      | -            | -                | -                | -         |    -3.76 | biguzera, dav1deuS, dgt, nqz, snow   |
|           24 |     1294 | 2025-05-10 | HOTU               | W   | 0.625      | 1.000        | -                | 0.312 (0.195)    | 1 (0.625) |     1.02 | biguzera, dav1deuS, dgt, nqz, snow   |
|           23 |     1537 | 2025-05-01 | Wildcard           | L   | 0.563      | -            | -                | -                | -         |   -16.50 | biguzera, dav1deuS, dgt, nqz, snow   |
|           22 |     1564 | 2025-04-30 | MOUZ               | L   | 0.557      | -            | -                | -                | -         |    -1.25 | biguzera, dav1deuS, dgt, nqz, snow   |
|           21 |     1728 | 2025-04-21 | Complexity         | L   | 0.501      | -            | -                | -                | -         |    -9.40 | dav1deuS, deemO, nqz, rikz, snow     |
|           20 |     1741 | 2025-04-20 | FaZe Clan          | L   | 0.494      | -            | -                | -                | -         |    -4.49 | dav1deuS, deemO, nqz, rikz, snow     |
|           19 |     2037 | 2025-04-08 | Team Falcons       | L   | 0.411      | -            | -                | -                | -         |    -3.10 | biguzera, dav1deuS, deemO, nqz, snow |
|           18 |     2064 | 2025-04-07 | FaZe Clan          | L   | 0.404      | -            | -                | -                | -         |    -3.77 | biguzera, dav1deuS, deemO, nqz, snow |
|           17 |     2081 | 2025-04-06 | Aurora Gaming      | L   | 0.397      | -            | -                | -                | -         |    -3.37 | biguzera, dav1deuS, deemO, nqz, snow |
|           16 |     2880 | 2025-03-10 | Aurora Gaming      | L   | 0.218      | -            | -                | -                | -         |    -1.98 | biguzera, dav1deuS, kauez, nqz, snow |
|           15 |     2935 | 2025-03-09 | Natus Vincere      | L   | 0.211      | -            | -                | -                | -         |    -1.26 | biguzera, dav1deuS, kauez, nqz, snow |
|           14 |     3020 | 2025-03-08 | GamerLegion        | W   | 0.204      | 1.000        | 0.453 (0.092)    | 0.420 (0.086)    | -         |     4.30 | biguzera, dav1deuS, kauez, nqz, snow |
|           13 |     3066 | 2025-03-07 | G2 Esports         | L   | 0.199      | -            | -                | -                | -         |    -2.68 | biguzera, dav1deuS, kauez, nqz, snow |
|           12 |     3172 | 2025-03-05 | Nemiga Gaming      | W   | 0.185      | -            | -                | -                | -         |     0.66 | biguzera, dav1deuS, kauez, nqz, snow |
|           11 |     3191 | 2025-03-04 | Lynn Vision Gaming | W   | 0.178      | -            | -                | -                | -         |     2.75 | biguzera, dav1deuS, kauez, nqz, snow |
|           10 |     3208 | 2025-03-03 | FlyQuest           | L   | 0.172      | -            | -                | -                | -         |    -4.13 | biguzera, dav1deuS, kauez, nqz, snow |
|            9 |     3229 | 2025-03-02 | M80                | L   | 0.166      | -            | -                | -                | -         |    -4.43 | biguzera, dav1deuS, kauez, nqz, snow |
|            8 |     3259 | 2025-03-01 | Ground Zero Gaming | W   | 0.159      | -            | -                | -                | -         |     0.05 | biguzera, dav1deuS, kauez, nqz, snow |
|            7 |     3470 | 2025-02-21 | MOUZ               | L   | 0.103      | -            | -                | -                | -         |    -0.28 | biguzera, dav1deuS, kauez, nqz, snow |
|            6 |     3540 | 2025-02-17 | Virtus.pro         | W   | 0.079      | -            | -                | -                | -         |     0.93 | biguzera, dav1deuS, kauez, nqz, snow |
|            5 |     3552 | 2025-02-16 | The MongolZ        | L   | 0.072      | -            | -                | -                | -         |    -0.26 | biguzera, dav1deuS, kauez, nqz, snow |
|            4 |     3571 | 2025-02-15 | Team Falcons       | W   | 0.065      | 1.000        | 1.000 (0.065)    | -                | -         |     1.59 | biguzera, dav1deuS, kauez, nqz, snow |
|            3 |     3602 | 2025-02-14 | Astralis           | W   | 0.058      | 1.000        | 0.895 (0.052)    | -                | -         |     1.52 | biguzera, dav1deuS, kauez, nqz, snow |
|            2 |     3734 | 2025-02-09 | Imperial Esports   | L   | 0.025      | -            | -                | -                | -         |    -0.74 | biguzera, dav1deuS, kauez, nqz, snow |
|            1 |     3768 | 2025-02-08 | RED Canids         | W   | 0.019      | -            | -                | -                | -         |     0.00 | biguzera, dav1deuS, kauez, nqz, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($131,478.77)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-25 |      1.000 | $4,500.00      | $4,500.00       |
| 2025-07-20 |      1.000 | $15,000.00     | $15,000.00      |
| 2025-06-22 |      0.913 | $80,000.00     | $73,011.11      |
| 2025-05-18 |      0.677 | $18,750.00     | $12,697.92      |
| 2025-05-04 |      0.584 | $10,000.00     | $5,844.44       |
| 2025-04-26 |      0.536 | $4,000.00      | $2,142.78       |
| 2025-04-13 |      0.445 | $12,500.00     | $5,559.03       |
| 2025-03-16 |      0.258 | $20,500.00     | $5,295.83       |
| 2025-02-23 |      0.119 | $62,500.00     | $7,427.66       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
