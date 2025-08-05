### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, aragornN, krazy, MUTiRiS, story<br />
Global Rank: [21](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  1337.9<br />
<br />
Final Rank Value (1337.9) = Starting Rank Value (1379.6) + Head To Head Adjustments (-41.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.645[<sup>1</sup>](#table2)
- Bounty Collected: 0.542[<sup>2</sup>](#table1)
- Opponent Network: 0.213[<sup>2</sup>](#table1)
- LAN Wins: 0.642[<sup>2</sup>](#table1)

The average of these factors is 0.511<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1379.6
- 400 + ( ( 0.511 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 1379.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |       60 | 2025-07-27 | Iberian Soul      | L   | 1.000      | -            | -                | -                | -         |   -19.75 | Ag1l, aragornN, krazy, MUTiRiS, story |
|           33 |       67 | 2025-07-27 | Desemprego        | W   | 1.000      | 0.309        | -                | 0.124 (0.038)    | 1 (1.000) |     1.66 | Ag1l, aragornN, krazy, MUTiRiS, story |
|           32 |       76 | 2025-07-27 | Impulse GW        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.27 | Ag1l, aragornN, krazy, MUTiRiS, story |
|           31 |      171 | 2025-07-19 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |    -4.87 | Ag1l, aragornN, krazy, MUTiRiS, story |
|           30 |      203 | 2025-07-18 | Complexity        | W   | 1.000      | 1.000        | 0.256 (0.256)    | 0.423 (0.423)    | 1 (1.000) |    16.51 | Ag1l, aragornN, krazy, MUTiRiS, story |
|           29 |      221 | 2025-07-17 | FURIA             | W   | 1.000      | 1.000        | 0.481 (0.481)    | 0.621 (0.621)    | 1 (1.000) |    26.13 | Ag1l, aragornN, krazy, MUTiRiS, story |
|           28 |      252 | 2025-07-16 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |    -5.71 | Ag1l, aragornN, krazy, MUTiRiS, story |
|           27 |      272 | 2025-07-15 | FURIA             | W   | 1.000      | 1.000        | 0.481 (0.481)    | 0.621 (0.621)    | 1 (1.000) |    27.20 | Ag1l, aragornN, krazy, MUTiRiS, story |
|           26 |      943 | 2025-05-26 | Sashi Esport      | L   | 0.732      | -            | -                | -                | -         |   -20.17 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           25 |     1117 | 2025-05-17 | ENCE              | L   | 0.671      | -            | -                | -                | -         |   -16.89 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           24 |     1138 | 2025-05-16 | FAVBET Team       | W   | 0.664      | 0.435        | -                | 0.636 (0.184)    | -         |     1.61 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           23 |     1541 | 2025-05-01 | Chinggis Warriors | L   | 0.563      | -            | -                | -                | -         |   -15.13 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           22 |     1574 | 2025-04-29 | JiJieHao          | L   | 0.555      | -            | -                | -                | -         |   -15.30 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           21 |     1722 | 2025-04-22 | MIBR              | L   | 0.503      | -            | -                | -                | -         |   -10.04 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           20 |     1734 | 2025-04-21 | Team Falcons      | L   | 0.497      | -            | -                | -                | -         |    -2.07 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           19 |     1837 | 2025-04-16 | ENCE              | L   | 0.465      | -            | -                | -                | -         |   -12.37 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           18 |     1851 | 2025-04-16 | GamerLegion       | W   | 0.463      | 0.143        | 0.453 (0.030)    | -                | -         |    11.00 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           17 |     1867 | 2025-04-15 | 9Pandas           | L   | 0.457      | -            | -                | -                | -         |   -13.56 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           16 |     1885 | 2025-04-14 | B8                | W   | 0.452      | 0.143        | 0.120 (0.008)    | 0.632 (0.041)    | -         |     4.25 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           15 |     1892 | 2025-04-14 | BetBoom Team      | L   | 0.450      | -            | -                | -                | -         |    -7.98 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           14 |     2892 | 2025-03-10 | GamerLegion       | L   | 0.217      | -            | -                | -                | -         |    -1.58 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           13 |     2941 | 2025-03-09 | G2 Esports        | L   | 0.211      | -            | -                | -                | -         |    -2.07 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           12 |     2986 | 2025-03-08 | Team Spirit       | L   | 0.206      | -            | -                | -                | -         |    -0.25 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           11 |     3078 | 2025-03-07 | Natus Vincere     | W   | 0.198      | 1.000        | 0.553 (0.109)    | 0.454 (0.090)    | 1 (0.198) |     5.49 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|           10 |     3214 | 2025-03-03 | M80               | W   | 0.171      | -            | -                | -                | 1 (0.171) |     1.29 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|            9 |     3235 | 2025-03-02 | FURIA             | W   | 0.165      | 0.143        | 0.481 (0.011)    | -                | 1 (0.165) |     4.50 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|            8 |     3269 | 2025-03-01 | HEROIC            | W   | 0.157      | 0.143        | 0.386 (0.009)    | -                | 1 (0.157) |     3.33 | Ag1l, AZUWU, cej0t, MUTiRiS, story    |
|            7 |     3459 | 2025-02-21 | FaZe Clan         | L   | 0.105      | -            | -                | -                | -         |    -0.63 | Ag1l, MUTiRiS, rmn, shr, story        |
|            6 |     3532 | 2025-02-18 | 3DMAX             | W   | 0.083      | 1.000        | 0.335 (0.028)    | 0.571 (0.048)    | 1 (0.083) |     2.12 | Ag1l, MUTiRiS, rmn, shr, story        |
|            5 |     3539 | 2025-02-17 | Complexity        | W   | 0.079      | 1.000        | 0.256 (0.020)    | 0.423 (0.033)    | -         |     1.15 | Ag1l, MUTiRiS, rmn, shr, story        |
|            4 |     3554 | 2025-02-16 | FlyQuest          | W   | 0.071      | 1.000        | -                | 0.484 (0.034)    | -         |     0.81 | Ag1l, MUTiRiS, rmn, shr, story        |
|            3 |     3572 | 2025-02-15 | Astralis          | L   | 0.065      | -            | -                | -                | -         |    -0.20 | Ag1l, MUTiRiS, rmn, shr, story        |
|            2 |     3607 | 2025-02-14 | FaZe Clan         | L   | 0.057      | -            | -                | -                | -         |    -0.34 | Ag1l, MUTiRiS, rmn, shr, story        |
|            1 |     3859 | 2025-02-06 | 500               | L   | 0.003      | -            | -                | -                | -         |    -0.10 | Ag1l, MUTiRiS, rmn, shr, story        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($122,985.17)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.28) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-27 |      1.000 | $1,762.00      | $1,762.00       |
| 2025-07-20 |      1.000 | $105,000.00    | $105,000.00     |
| 2025-05-18 |      0.678 | $2,000.00      | $1,356.90       |
| 2025-04-26 |      0.536 | $4,000.00      | $2,142.78       |
| 2025-03-16 |      0.258 | $20,500.00     | $5,295.83       |
| 2025-02-23 |      0.119 | $62,500.00     | $7,427.66       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
