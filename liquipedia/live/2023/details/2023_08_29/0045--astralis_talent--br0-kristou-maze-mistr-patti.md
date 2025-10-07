### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: br0, Kristou, Maze, MistR, Patti<br />
Global Rank: [45](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [40]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1005.3<br />
<br />
Final Rank Value (1005.3) = Starting Rank Value (1023.5) + Head To Head Adjustments (-18.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.295[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.582[<sup>2</sup>](#table1)

The average of these factors is 0.322<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1023.5
- 400 + ( ( 0.322 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1023.5


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
|           58 |     1142 | 2023-06-17 | Atlantic             | W   | 0.714      | -            | -                | -                | 1 (0.714) |     3.04 | br0, Kristou, Maze, MistR, Patti     |
|           57 |     1151 | 2023-06-17 | MASONIC              | W   | 0.712      | -            | -                | -                | 1 (0.712) |     7.79 | br0, Kristou, Maze, MistR, Patti     |
|           56 |     1255 | 2023-06-10 | BIG                  | L   | 0.666      | -            | -                | -                | -         |   -16.80 | br0, Kristou, MistR, Patti, R0nic    |
|           55 |     1282 | 2023-06-09 | Sprout               | L   | 0.661      | -            | -                | -                | -         |   -12.99 | br0, Kristou, MistR, Patti, Xyp9x    |
|           54 |     1293 | 2023-06-09 | Sprout               | W   | 0.660      | 0.435        | 0.030 (0.009)    | 0.420 (0.120)    | 0 (0.000) |     7.88 | br0, Kristou, MistR, Patti, Xyp9x    |
|           53 |     1342 | 2023-06-08 | BIG                  | W   | 0.653      | 0.435        | 0.025 (0.007)    | -                | 0 (0.000) |     3.71 | br0, Kristou, MistR, Patti, Xyp9x    |
|           52 |     1365 | 2023-06-07 | Hungary              | W   | 0.648      | 0.432        | 0.040 (0.011)    | 0.746 (0.209)    | 0 (0.000) |     7.79 | br0, Kristou, MistR, Patti, Xyp9x    |
|           51 |     1402 | 2023-06-06 | MASONIC              | W   | 0.639      | 0.435        | -                | 0.262 (0.073)    | 0 (0.000) |     7.11 | br0, Kristou, MistR, Patti, Xyp9x    |
|           50 |     1419 | 2023-06-05 | Ignis Serpens        | W   | 0.633      | -            | -                | -                | 0 (0.000) |     3.98 | br0, Kristou, MistR, Patti, Xyp9x    |
|           49 |     1450 | 2023-06-04 | THE FREE             | W   | 0.626      | 0.435        | -                | 0.425 (0.116)    | 0 (0.000) |     4.12 | br0, Kristou, MistR, Patti, Xyp9x    |
|           48 |     1478 | 2023-06-03 | Anonymo              | L   | 0.618      | -            | -                | -                | -         |   -12.25 | br0, Kristou, MistR, Patti, Xyp9x    |
|           47 |     1530 | 2023-06-01 | Sashi                | W   | 0.608      | -            | -                | -                | -         |     2.98 | br0, Kristou, MistR, Patti, Xyp9x    |
|           46 |     1549 | 2023-06-01 | Nexus                | L   | 0.605      | -            | -                | -                | -         |   -16.65 | br0, Kristou, MistR, Patti, Xyp9x    |
|           45 |     1622 | 2023-05-30 | GTZ                  | W   | 0.592      | 0.435        | 0.025 (0.006)    | -                | -         |     7.30 | br0, Kristou, MistR, Patti, Xyp9x    |
|           44 |     1651 | 2023-05-29 | FORZE                | L   | 0.587      | -            | -                | -                | -         |    -3.79 | br0, Kristou, MistR, Patti, Xyp9x    |
|           43 |     1701 | 2023-05-28 | MASONIC              | L   | 0.578      | -            | -                | -                | -         |   -11.58 | br0, Kristou, MistR, Patti, Xyp9x    |
|           42 |     1709 | 2023-05-27 | CEPTER               | W   | 0.574      | -            | -                | -                | 1 (0.574) |     0.66 | br0, Kristou, MistR, Patti, Xyp9x    |
|           41 |     1725 | 2023-05-27 | Espionage            | L   | 0.573      | -            | -                | -                | -         |    -9.99 | br0, Kristou, MistR, Patti, Xyp9x    |
|           40 |     1733 | 2023-05-27 | XI                   | W   | 0.572      | -            | -                | -                | 1 (0.572) |     0.51 | br0, Kristou, MistR, Patti, Xyp9x    |
|           39 |     1772 | 2023-05-26 | ex-Copenhagen Flames | W   | 0.565      | 0.548        | 0.017 (0.005)    | 0.414 (0.128)    | -         |     4.84 | br0, Kristou, MistR, Patti, Xyp9x    |
|           38 |     1808 | 2023-05-25 | 9INE                 | L   | 0.558      | -            | -                | -                | -         |    -5.92 | br0, Kristou, MistR, Patti, Xyp9x    |
|           37 |     1824 | 2023-05-24 | Endpoint             | L   | 0.554      | -            | -                | -                | -         |   -11.02 | br0, Kristou, MistR, Patti, Xyp9x    |
|           36 |     1885 | 2023-05-23 | Enterprise           | W   | 0.546      | -            | -                | -                | -         |     1.74 | br0, Kristou, MistR, Patti, Xyp9x    |
|           35 |     1980 | 2023-05-17 | Sprout               | W   | 0.506      | 0.548        | 0.030 (0.008)    | 0.420 (0.116)    | -         |     4.85 | br0, Kristou, MistR, Patti, Xyp9x    |
|           34 |     2097 | 2023-05-09 | Spirit               | L   | 0.451      | -            | -                | -                | -         |    -1.71 | br0, Kristou, MistR, Patti, Xyp9x    |
|           33 |     2187 | 2023-05-04 | Websterz             | W   | 0.419      | 0.548        | 0.044 (0.010)    | 0.489 (0.112)    | -         |     5.26 | br0, Kristou, MistR, Patti, Xyp9x    |
|           32 |     2212 | 2023-05-02 | 9 Pandas             | W   | 0.407      | 0.548        | 0.074 (0.016)    | 1.000 (0.223)    | -         |     8.01 | br0, Kristou, MistR, Patti, Xyp9x    |
|           31 |     2250 | 2023-04-30 | Monte                | L   | 0.393      | -            | -                | -                | -         |    -1.00 | br0, Kristou, MistR, Patti, Xyp9x    |
|           30 |     2270 | 2023-04-29 | 1WIN                 | W   | 0.388      | 0.435        | 0.298 (0.050)    | 0.772 (0.130)    | -         |     9.27 | br0, Kristou, MistR, Patti, Xyp9x    |
|           29 |     2300 | 2023-04-28 | MASONIC              | L   | 0.380      | -            | -                | -                | -         |    -8.08 | br0, Kristou, MistR, Patti, Xyp9x    |
|           28 |     2337 | 2023-04-27 | Illuminar            | W   | 0.372      | -            | -                | -                | -         |     1.96 | br0, Kristou, MistR, Patti, Xyp9x    |
|           27 |     2450 | 2023-04-21 | PROSPECTS            | L   | 0.332      | -            | -                | -                | -         |    -5.76 | br0, Kristou, MistR, Patti, Xyp9x    |
|           26 |     2469 | 2023-04-20 | ENCE Academy         | W   | 0.325      | -            | -                | -                | -         |     3.43 | br0, Kristou, MistR, Patti, Xyp9x    |
|           25 |     2489 | 2023-04-19 | PROSPECTS            | L   | 0.319      | -            | -                | -                | -         |    -5.64 | br0, Kristou, MistR, Patti, Xyp9x    |
|           24 |     2520 | 2023-04-17 | Nexus                | W   | 0.307      | -            | -                | -                | -         |     0.84 | Altekz, br0, Kristou, MistR, Patti   |
|           23 |     2576 | 2023-04-15 | ENCE Academy         | W   | 0.292      | -            | -                | -                | -         |     2.98 | Altekz, br0, Kristou, MistR, Patti   |
|           22 |     2711 | 2023-04-11 | sYnck                | W   | 0.265      | -            | -                | -                | -         |     2.46 | Altekz, br0, Kristou, MistR, Patti   |
|           21 |     2788 | 2023-04-07 | Zero Tenacity        | W   | 0.238      | 0.371        | -                | 0.915 (0.081)    | -         |     2.48 | Altekz, Kristou, MistR, Patti, R0nic |
|           20 |     3102 | 2023-03-24 | K23                  | L   | 0.146      | -            | -                | -                | -         |    -4.03 | Altekz, br0, Kristou, MistR, Patti   |
|           19 |     3166 | 2023-03-22 | Young Ninjas         | L   | 0.134      | -            | -                | -                | -         |    -2.90 | Altekz, br0, Kristou, MistR, Patti   |
|           18 |     3206 | 2023-03-21 | CEPTER               | W   | 0.128      | -            | -                | -                | -         |     0.36 | Altekz, br0, Kristou, MistR, Patti   |
|           17 |     3240 | 2023-03-20 | MASONIC              | W   | 0.121      | -            | -                | -                | -         |     0.19 | Altekz, br0, Kristou, MistR, Patti   |
|           16 |     3244 | 2023-03-20 | Katuna               | W   | 0.119      | -            | -                | -                | -         |     0.20 | Altekz, br0, Kristou, MistR, Patti   |
|           15 |     3274 | 2023-03-19 | Illuminar            | L   | 0.112      | -            | -                | -                | -         |    -3.21 | Altekz, br0, Kristou, MistR, Patti   |
|           14 |     3291 | 2023-03-18 | Espionage            | W   | 0.107      | -            | -                | -                | -         |     1.55 | Altekz, br0, Kristou, MistR, Patti   |
|           13 |     3296 | 2023-03-18 | XI                   | W   | 0.106      | -            | -                | -                | -         |     0.15 | Altekz, br0, Kristou, MistR, Patti   |
|           12 |     3306 | 2023-03-18 | Sashi                | W   | 0.105      | -            | -                | -                | -         |     0.42 | Altekz, br0, Kristou, MistR, Patti   |
|           11 |     3334 | 2023-03-17 | BIG Academy          | W   | 0.100      | -            | -                | -                | -         |     0.47 | Altekz, br0, Kristou, MistR, Patti   |
|           10 |     3358 | 2023-03-16 | GamerLegion          | W   | 0.095      | 0.435        | 0.556 (0.023)    | -                | -         |     2.85 | Altekz, br0, Kristou, MistR, Patti   |
|            9 |     3369 | 2023-03-16 | 500                  | W   | 0.094      | -            | -                | -                | -         |     1.20 | Altekz, br0, Kristou, MistR, Patti   |
|            8 |     3378 | 2023-03-16 | FTW                  | W   | 0.092      | -            | -                | -                | -         |     0.74 | Altekz, br0, Kristou, MistR, Patti   |
|            7 |     3390 | 2023-03-15 | SINNERS              | W   | 0.088      | -            | -                | -                | -         |     0.27 | Altekz, br0, Kristou, MistR, Patti   |
|            6 |     3441 | 2023-03-14 | ex-Copenhagen Flames | W   | 0.079      | -            | -                | -                | -         |     0.58 | Altekz, br0, Kristou, MistR, Patti   |
|            5 |     3475 | 2023-03-12 | DOFG                 | W   | 0.068      | -            | -                | -                | -         |     0.25 | Altekz, br0, Kristou, MistR, Patti   |
|            4 |     3493 | 2023-03-12 | Sampi                | W   | 0.066      | -            | -                | -                | -         |     0.97 | Altekz, br0, Kristou, MistR, Patti   |
|            3 |     3665 | 2023-03-06 | Nexus                | W   | 0.026      | -            | -                | -                | -         |     0.07 | Altekz, br0, Kristou, MistR, Patti   |
|            2 |     3710 | 2023-03-04 | VOYVODA              | W   | 0.014      | -            | -                | -                | -         |     0.02 | Altekz, br0, Kristou, MistR, Patti   |
|            1 |     3751 | 2023-03-03 | Ignis Serpens        | L   | 0.006      | -            | -                | -                | -         |    -0.17 | Altekz, br0, Kristou, MistR, Patti   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,075.04)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-17 |      0.714 | $9,544.00      | $6,814.55       |
| 2023-06-11 |      0.673 | $2,000.00      | $1,346.07       |
| 2023-06-10 |      0.668 | $2,000.00      | $1,335.13       |
| 2023-06-07 |      0.648 | $16,194.00     | $10,486.56      |
| 2023-05-31 |      0.599 | $5,000.00      | $2,997.39       |
| 2023-04-30 |      0.395 | $5,000.00      | $1,974.07       |
| 2023-04-21 |      0.332 | $5,000.00      | $1,659.72       |
| 2023-03-21 |      0.128 | $9,261.00      | $1,181.92       |
| 2023-03-17 |      0.100 | $2,000.00      | $200.08         |
| 2023-03-16 |      0.095 | $22,000.00     | $2,079.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
