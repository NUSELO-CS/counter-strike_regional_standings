### Roster Details<br />
Team Name: Monte<br />
Roster: br0, DemQQ, kRaSnaL, sdy, Woro2k<br />
Global Rank: [16](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [16]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1299.5<br />
<br />
Final Rank Value (1299.5) = Starting Rank Value (1443.4) + Head To Head Adjustments (-143.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.668[<sup>1</sup>](#table2)
- Bounty Collected: 0.503[<sup>2</sup>](#table1)
- Opponent Network: 0.294[<sup>2</sup>](#table1)
- LAN Wins: 0.693[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.539<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1443.4
- 400 + ( ( 0.539 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1443.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |       21 | 2023-08-27 | BIG               | L   | 1.000      | -            | -                | -                | -         |   -20.78 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           78 |       27 | 2023-08-27 | Bad News Eagles   | W   | 1.000      | 0.435        | 0.135 (0.059)    | 0.751 (0.326)    | -         |     6.51 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           77 |       60 | 2023-08-26 | Preasy            | W   | 1.000      | -            | -                | -                | -         |     2.40 | br0, DemQQ, lmbt, sdy, Woro2k           |
|           76 |       91 | 2023-08-25 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -28.69 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           75 |      118 | 2023-08-24 | Space             | W   | 1.000      | 0.435        | 0.099 (0.043)    | 0.904 (0.393)    | -         |     4.76 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           74 |      145 | 2023-08-23 | Eternal Fire      | W   | 1.000      | 0.435        | -                | 0.749 (0.325)    | -         |     7.54 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           73 |      191 | 2023-08-20 | Space             | L   | 1.000      | -            | -                | -                | -         |   -27.56 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           72 |      199 | 2023-08-19 | THE FREE          | W   | 1.000      | 0.435        | -                | 0.425 (0.185)    | -         |     1.31 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           71 |      223 | 2023-08-18 | ThunderFlash      | W   | 1.000      | 0.435        | -                | 0.724 (0.315)    | -         |     2.30 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           70 |      237 | 2023-08-17 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |   -20.46 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           69 |      252 | 2023-08-16 | Eternal Fire      | W   | 1.000      | 0.435        | -                | 0.749 (0.325)    | -         |     6.19 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           68 |      289 | 2023-08-14 | ex-iNation        | W   | 1.000      | -            | -                | -                | -         |     0.75 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           67 |      403 | 2023-08-11 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |   -26.49 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           66 |      524 | 2023-08-08 | SINNERS           | W   | 1.000      | 0.384        | -                | 1.000 (0.384)    | -         |     4.80 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           65 |      654 | 2023-07-31 | Cloud9            | L   | 1.000      | -            | -                | -                | -         |    -7.93 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           64 |      680 | 2023-07-30 | Heroic            | L   | 1.000      | -            | -                | -                | -         |    -2.12 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           63 |      714 | 2023-07-29 | GamerLegion       | W   | 0.992      | 1.000        | 0.556 (0.551)    | 0.332 (0.329)    | 1 (0.992) |    22.03 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           62 |      730 | 2023-07-27 | FURIA             | W   | 0.981      | -            | -                | -                | 1 (0.981) |     2.34 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           61 |      745 | 2023-07-26 | Imperial          | W   | 0.973      | -            | -                | -                | 1 (0.973) |     5.05 | br0, DemQQ, kRaSnaL, sdy, Woro2k        |
|           60 |     1017 | 2023-07-11 | Espionage         | L   | 0.874      | -            | -                | -                | -         |   -24.58 | DemQQ, Fessor, kRaSnaL, sdy, Woro2k     |
|           59 |     1341 | 2023-06-08 | EYEBALLERS        | L   | 0.653      | -            | -                | -                | -         |   -19.48 | BOROS, CacaNito, DemQQ, kRaSnaL, Woro2k |
|           58 |     1370 | 2023-06-07 | Anonymo           | L   | 0.647      | -            | -                | -                | -         |   -19.16 | BOROS, DemQQ, kRaSnaL, Marix, Woro2k    |
|           57 |     1708 | 2023-05-27 | Apeks             | L   | 0.574      | -            | -                | -                | -         |   -10.38 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           56 |     1749 | 2023-05-26 | 1WIN              | W   | 0.568      | 0.435        | 0.298 (0.074)    | 0.772 (0.190)    | -         |     3.96 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           55 |     1789 | 2023-05-25 | Sprout            | W   | 0.560      | -            | -                | -                | -         |     0.94 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           54 |     1837 | 2023-05-24 | Spirit            | L   | 0.553      | -            | -                | -                | -         |    -9.70 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           53 |     1953 | 2023-05-19 | GamerLegion       | L   | 0.519      | -            | -                | -                | -         |    -6.29 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           52 |     2014 | 2023-05-15 | Natus Vincere     | W   | 0.492      | 1.000        | 0.094 (0.046)    | -                | 1 (0.492) |     2.33 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           51 |     2023 | 2023-05-14 | Vitality          | L   | 0.486      | -            | -                | -                | -         |    -0.72 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           50 |     2037 | 2023-05-13 | fnatic            | W   | 0.480      | 1.000        | 0.175 (0.084)    | 0.347 (0.167)    | 1 (0.480) |     4.14 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           49 |     2045 | 2023-05-13 | FURIA             | W   | 0.478      | 1.000        | 0.082 (0.039)    | -                | 1 (0.478) |     1.12 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           48 |     2050 | 2023-05-12 | EYEBALLERS        | W   | 0.474      | -            | -                | -                | -         |     0.67 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           47 |     2059 | 2023-05-11 | paiN              | W   | 0.466      | -            | -                | -                | 1 (0.466) |     1.16 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           46 |     2077 | 2023-05-10 | TheMongolz        | W   | 0.458      | -            | -                | -                | 1 (0.458) |     1.16 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           45 |     2093 | 2023-05-09 | FORZE             | L   | 0.452      | -            | -                | -                | -         |   -10.76 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           44 |     2103 | 2023-05-08 | Fluxo             | W   | 0.447      | -            | -                | -                | 1 (0.447) |     0.30 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           43 |     2118 | 2023-05-08 | FaZe              | L   | 0.445      | -            | -                | -                | -         |    -4.28 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           42 |     2172 | 2023-05-04 | Arcadia           | W   | 0.420      | -            | -                | -                | -         |     0.15 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           41 |     2175 | 2023-05-04 | allStars          | W   | 0.420      | -            | -                | -                | -         |     0.06 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           40 |     2183 | 2023-05-04 | Apeks             | W   | 0.420      | 0.435        | 0.349 (0.064)    | -                | -         |     4.86 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           39 |     2189 | 2023-05-04 | HAVU              | W   | 0.418      | -            | -                | -                | -         |     0.81 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           38 |     2203 | 2023-05-03 | Evil Geniuses     | W   | 0.412      | -            | -                | -                | -         |     0.19 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           37 |     2213 | 2023-05-02 | Nexus             | W   | 0.407      | -            | -                | -                | -         |     0.11 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           36 |     2245 | 2023-04-30 | Looking4Org       | L   | 0.395      | -            | -                | -                | -         |   -11.63 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           35 |     2250 | 2023-04-30 | Astralis Talent   | W   | 0.393      | -            | -                | -                | -         |     1.00 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           34 |     2275 | 2023-04-29 | ex-iNation        | W   | 0.386      | -            | -                | -                | -         |     0.15 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           33 |     2325 | 2023-04-27 | BIG Academy       | W   | 0.374      | -            | -                | -                | -         |     0.24 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           32 |     2500 | 2023-04-18 | LDLC              | W   | 0.314      | -            | -                | -                | -         |     0.14 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           31 |     2578 | 2023-04-15 | Vitality          | L   | 0.291      | -            | -                | -                | -         |    -0.49 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           30 |     2630 | 2023-04-13 | FORZE             | W   | 0.279      | -            | -                | -                | 1 (0.279) |     2.18 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           29 |     2667 | 2023-04-12 | Heroic            | L   | 0.273      | -            | -                | -                | -         |    -0.82 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           28 |     2701 | 2023-04-11 | Cloud9            | W   | 0.266      | -            | -                | -                | -         |     6.05 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           27 |     2710 | 2023-04-11 | ENCE              | W   | 0.265      | 0.143        | 1.000 (0.038)    | -                | -         |     7.91 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           26 |     2889 | 2023-03-31 | Spirit            | W   | 0.194      | 0.435        | 0.376 (0.032)    | -                | -         |     2.73 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           25 |     2894 | 2023-03-31 | BIG Academy       | W   | 0.193      | -            | -                | -                | -         |     0.11 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           24 |     2926 | 2023-03-30 | ECSTATIC          | W   | 0.185      | -            | -                | -                | -         |     0.45 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           23 |     2970 | 2023-03-28 | Ninjas in Pyjamas | L   | 0.174      | -            | -                | -                | -         |    -3.02 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           22 |     2977 | 2023-03-28 | SHAPITO           | W   | 0.174      | -            | -                | -                | -         |     0.02 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           21 |     2983 | 2023-03-28 | Anonymo           | W   | 0.173      | -            | -                | -                | -         |     0.22 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           20 |     3036 | 2023-03-26 | 9INE              | W   | 0.160      | -            | -                | -                | -         |     0.87 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           19 |     3057 | 2023-03-25 | 1WIN              | W   | 0.154      | -            | -                | -                | -         |     1.16 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           18 |     3068 | 2023-03-25 | SAW               | W   | 0.153      | -            | -                | -                | -         |     1.04 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           17 |     3085 | 2023-03-24 | FORZE             | W   | 0.148      | -            | -                | -                | -         |     1.13 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           16 |     3127 | 2023-03-23 | Poland            | W   | 0.141      | -            | -                | -                | -         |     0.03 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           15 |     3143 | 2023-03-23 | Apeks             | W   | 0.140      | -            | -                | -                | -         |     1.63 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           14 |     3149 | 2023-03-23 | Spirit            | W   | 0.139      | -            | -                | -                | -         |     1.99 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           13 |     3176 | 2023-03-22 | Sangal            | W   | 0.133      | -            | -                | -                | -         |     0.05 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           12 |     3205 | 2023-03-21 | Apeks             | W   | 0.128      | -            | -                | -                | -         |     1.51 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           11 |     3245 | 2023-03-20 | Looking4Org       | W   | 0.119      | -            | -                | -                | -         |     0.23 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|           10 |     3401 | 2023-03-15 | Let us cook       | L   | 0.088      | -            | -                | -                | -         |    -2.71 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|            9 |     3466 | 2023-03-13 | HAVU              | W   | 0.071      | -            | -                | -                | -         |     0.14 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|            8 |     3543 | 2023-03-10 | ex-DomiNation     | L   | 0.054      | -            | -                | -                | -         |    -1.67 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|            7 |     3551 | 2023-03-10 | Aurora            | L   | 0.053      | -            | -                | -                | -         |    -1.40 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|            6 |     3556 | 2023-03-10 | BIG               | L   | 0.053      | -            | -                | -                | -         |    -1.56 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|            5 |     3608 | 2023-03-08 | 9INE              | W   | 0.041      | -            | -                | -                | -         |     0.22 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|            4 |     3651 | 2023-03-07 | Ignis Serpens     | W   | 0.032      | -            | -                | -                | -         |     0.02 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|            3 |     3701 | 2023-03-05 | MOUZ NXT          | W   | 0.018      | -            | -                | -                | -         |     0.02 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|            2 |     3723 | 2023-03-04 | Aurora            | L   | 0.013      | -            | -                | -                | -         |    -0.34 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |
|            1 |     3761 | 2023-03-03 | Ignis Serpens     | W   | 0.005      | -            | -                | -                | -         |     0.00 | BOROS, DemQQ, kRaSnaL, sdy, Woro2k      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($86,508.84)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-08-26 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-08-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-08-17 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-08-06 |      1.000 | $16,000.00     | $16,000.00      |
| 2023-05-28 |      0.581 | $7,000.00      | $4,064.15       |
| 2023-05-21 |      0.533 | $45,000.00     | $23,997.00      |
| 2023-05-04 |      0.420 | $22,000.00     | $9,232.54       |
| 2023-04-30 |      0.395 | $10,000.00     | $3,948.15       |
| 2023-03-31 |      0.194 | $22,000.00     | $4,267.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
