### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Grizz, motm, viz, WolfY<br />
Global Rank: [67](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [14]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  919.0<br />
<br />
Final Rank Value (919.0) = Starting Rank Value (899.1) + Head To Head Adjustments (20.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.308[<sup>2</sup>](#table1)
- Opponent Network: 0.133[<sup>2</sup>](#table1)
- LAN Wins: 0.274[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.601[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 899.1
- 400 + ( ( 0.262 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 899.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |       24 | 2025-08-02 | M80              | L   | 1.000      | -            | -                | -                | -         |    -5.51 | chop, Grizz, motm, viz, WolfY    |
|           69 |       41 | 2025-08-01 | Wildcard         | W   | 1.000      | 0.143        | 0.066 (0.009)    | 0.409 (0.058)    | 0 (0.000) |    19.81 | chop, Grizz, motm, viz, WolfY    |
|           68 |       61 | 2025-07-29 | Getting Info     | L   | 1.000      | -            | -                | -                | -         |   -17.30 | chop, Grizz, motm, viz, WolfY    |
|           67 |      122 | 2025-07-26 | LAG Gaming       | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.427 (0.164)    | 0 (0.000) |     8.53 | chop, Grizz, motm, viz, WolfY    |
|           66 |      153 | 2025-07-24 | MIGHT            | W   | 1.000      | 0.384        | -                | 0.273 (0.105)    | 0 (0.000) |     4.71 | chop, Grizz, motm, viz, WolfY    |
|           65 |      196 | 2025-07-19 | Fluxo            | L   | 1.000      | -            | -                | -                | -         |   -10.55 | chop, Grizz, motm, viz, WolfY    |
|           64 |      207 | 2025-07-19 | LAG Gaming       | W   | 1.000      | 0.407        | 0.014 (0.006)    | 0.427 (0.174)    | 1 (1.000) |     8.46 | chop, Grizz, motm, viz, WolfY    |
|           63 |      235 | 2025-07-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -7.35 | chop, Grizz, motm, viz, WolfY    |
|           62 |      244 | 2025-07-18 | LAG Gaming       | W   | 1.000      | 0.407        | 0.014 (0.006)    | 0.427 (0.174)    | 1 (1.000) |     8.81 | chop, Grizz, motm, viz, WolfY    |
|           61 |      325 | 2025-07-14 | M80              | L   | 1.000      | -            | -                | -                | -         |    -6.29 | chop, Grizz, viz, Walco, WolfY   |
|           60 |      346 | 2025-07-13 | BLUEJAYS         | W   | 1.000      | 0.143        | 0.036 (0.005)    | 0.827 (0.118)    | 0 (0.000) |    17.94 | chop, Grizz, viz, Walco, WolfY   |
|           59 |      349 | 2025-07-13 | BOSS             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.10 | chop, Grizz, viz, Walco, WolfY   |
|           58 |      366 | 2025-07-12 | Marca Registrada | W   | 1.000      | -            | -                | -                | -         |     7.10 | chop, Grizz, Lucid, Walco, WolfY |
|           57 |      370 | 2025-07-12 | BLUEJAYS         | L   | 1.000      | -            | -                | -                | -         |   -12.66 | chop, Grizz, Lucid, Walco, WolfY |
|           56 |      391 | 2025-07-11 | Tsunami Esports  | W   | 1.000      | -            | -                | -                | -         |     6.02 | chop, Grizz, viz, Walco, WolfY   |
|           55 |     1248 | 2025-05-13 | BLUEJAYS         | L   | 0.626      | -            | -                | -                | -         |   -11.31 | chop, Grizz, Minus, motm, WolfY  |
|           54 |     1331 | 2025-05-10 | BLUEJAYS         | W   | 0.607      | 0.384        | 0.036 (0.008)    | 0.827 (0.193)    | -         |    11.21 | chop, Grizz, Minus, motm, WolfY  |
|           53 |     1357 | 2025-05-09 | Tsunami Esports  | W   | 0.601      | -            | -                | -                | -         |     3.69 | chop, Grizz, Minus, motm, WolfY  |
|           52 |     1436 | 2025-05-06 | Legacy           | L   | 0.581      | -            | -                | -                | -         |    -2.09 | chop, Grizz, Minus, motm, WolfY  |
|           51 |     1515 | 2025-05-03 | BLUEJAYS         | L   | 0.560      | -            | -                | -                | -         |    -7.39 | chop, Grizz, Minus, motm, WolfY  |
|           50 |     1519 | 2025-05-03 | NRG              | L   | 0.559      | -            | -                | -                | -         |    -4.82 | chop, Grizz, Minus, motm, WolfY  |
|           49 |     1522 | 2025-05-03 | BLUEJAYS         | W   | 0.559      | 0.303        | 0.036 (0.006)    | 0.827 (0.140)    | -         |    10.35 | chop, Grizz, Minus, motm, WolfY  |
|           48 |     1588 | 2025-04-30 | BLUEJAYS         | W   | 0.540      | 0.333        | 0.036 (0.007)    | 0.827 (0.149)    | -         |    10.49 | chop, Grizz, Minus, motm, WolfY  |
|           47 |     1621 | 2025-04-29 | Fisher College   | W   | 0.533      | -            | -                | -                | -         |     4.74 | chop, Grizz, Minus, motm, WolfY  |
|           46 |     1733 | 2025-04-24 | Daaku            | W   | 0.500      | -            | -                | -                | -         |     2.12 | chop, Grizz, Minus, motm, WolfY  |
|           45 |     1789 | 2025-04-20 | Wanted Goons     | W   | 0.474      | -            | -                | -                | -         |     2.89 | chop, Grizz, Minus, motm, WolfY  |
|           44 |     1804 | 2025-04-19 | BLUEJAYS         | L   | 0.467      | -            | -                | -                | -         |    -5.65 | chop, Grizz, Minus, motm, WolfY  |
|           43 |     1849 | 2025-04-17 | BLUEJAYS         | L   | 0.452      | -            | -                | -                | -         |    -8.17 | chop, Grizz, Minus, motm, WolfY  |
|           42 |     1877 | 2025-04-16 | BLUEJAYS         | W   | 0.446      | 0.143        | -                | 0.827 (0.053)    | -         |     8.70 | chop, Grizz, Minus, motm, WolfY  |
|           41 |     1902 | 2025-04-15 | Wildcard         | L   | 0.440      | -            | -                | -                | -         |    -5.33 | chop, Grizz, Minus, motm, WolfY  |
|           40 |     1946 | 2025-04-13 | BLUEJAYS         | W   | 0.427      | -            | -                | -                | -         |     5.83 | chop, Grizz, Minus, motm, WolfY  |
|           39 |     1997 | 2025-04-10 | Daaku            | L   | 0.407      | -            | -                | -                | -         |   -11.29 | chop, Grizz, Minus, motm, WolfY  |
|           38 |     2052 | 2025-04-08 | InControl        | W   | 0.394      | -            | -                | -                | -         |     1.59 | chop, Grizz, Minus, motm, WolfY  |
|           37 |     2057 | 2025-04-08 | InControl        | W   | 0.394      | -            | -                | -                | -         |     1.61 | chop, Grizz, Minus, motm, WolfY  |
|           36 |     2103 | 2025-04-07 | JERSA ESPORTS    | W   | 0.387      | -            | -                | -                | -         |     1.40 | chop, Grizz, Minus, motm, WolfY  |
|           35 |     2207 | 2025-04-02 | Party Astronauts | L   | 0.354      | -            | -                | -                | -         |    -8.14 | chop, Grizz, Minus, motm, WolfY  |
|           34 |     2214 | 2025-04-02 | Party Astronauts | W   | 0.354      | -            | -                | -                | -         |     3.04 | chop, Grizz, Minus, motm, WolfY  |
|           33 |     2268 | 2025-04-01 | Legacy           | L   | 0.348      | -            | -                | -                | -         |    -0.90 | chop, Grizz, Minus, motm, WolfY  |
|           32 |     2274 | 2025-04-01 | Legacy           | L   | 0.347      | -            | -                | -                | -         |    -0.91 | chop, Grizz, Minus, motm, WolfY  |
|           31 |     2314 | 2025-03-30 | M80              | L   | 0.334      | -            | -                | -                | -         |    -1.58 | chop, Grizz, Minus, motm, WolfY  |
|           30 |     2317 | 2025-03-30 | Mythic           | W   | 0.333      | -            | -                | -                | -         |     1.16 | chop, Grizz, Minus, motm, WolfY  |
|           29 |     2361 | 2025-03-29 | M80              | L   | 0.327      | -            | -                | -                | -         |    -1.56 | chop, Grizz, Minus, motm, WolfY  |
|           28 |     2417 | 2025-03-28 | Team Aether      | W   | 0.321      | -            | -                | -                | -         |     1.35 | chop, Grizz, Minus, motm, WolfY  |
|           27 |     2484 | 2025-03-27 | Seoul            | W   | 0.314      | -            | -                | -                | -         |     0.61 | chop, Grizz, Minus, motm, WolfY  |
|           26 |     2562 | 2025-03-26 | NRG              | W   | 0.308      | 0.143        | 0.059 (0.003)    | -                | -         |     7.06 | chop, Grizz, Minus, motm, WolfY  |
|           25 |     2568 | 2025-03-26 | NRG              | W   | 0.308      | 0.143        | 0.059 (0.003)    | -                | -         |     7.21 | chop, Grizz, Minus, motm, WolfY  |
|           24 |     2611 | 2025-03-25 | Akimbo Esports   | L   | 0.301      | -            | -                | -                | -         |    -7.32 | chop, Grizz, Minus, motm, WolfY  |
|           23 |     2615 | 2025-03-25 | Akimbo Esports   | W   | 0.301      | -            | -                | -                | -         |     2.18 | chop, Grizz, Minus, motm, WolfY  |
|           22 |     2762 | 2025-03-18 | Arrival Seven    | L   | 0.255      | -            | -                | -                | -         |    -5.66 | chop, Grizz, Minus, motm, WolfY  |
|           21 |     2766 | 2025-03-18 | Arrival Seven    | L   | 0.254      | -            | -                | -                | -         |    -5.75 | chop, Grizz, Minus, motm, WolfY  |
|           20 |     3097 | 2025-03-07 | Fisher College   | L   | 0.179      | -            | -                | -                | -         |    -4.36 | chop, Grizz, Minus, motm, WolfY  |
|           19 |     3155 | 2025-03-06 | LAG Gaming       | L   | 0.174      | -            | -                | -                | -         |    -3.86 | chop, Grizz, Minus, motm, WolfY  |
|           18 |     3199 | 2025-03-05 | MIGHT            | W   | 0.167      | -            | -                | -                | -         |     1.14 | chop, Grizz, Minus, motm, WolfY  |
|           17 |     3269 | 2025-03-02 | BLUEJAYS         | L   | 0.147      | -            | -                | -                | -         |    -2.85 | chop, Grizz, Minus, motm, WolfY  |
|           16 |     3271 | 2025-03-02 | Getting Info     | W   | 0.146      | -            | -                | -                | 1 (0.146) |     1.34 | chop, Grizz, Minus, motm, WolfY  |
|           15 |     3289 | 2025-03-01 | Wanted Goons     | W   | 0.141      | -            | -                | -                | 1 (0.141) |     0.79 | chop, Grizz, Minus, motm, WolfY  |
|           14 |     3294 | 2025-03-01 | Team Aether      | W   | 0.140      | -            | -                | -                | 1 (0.140) |     0.56 | chop, Grizz, Minus, motm, WolfY  |
|           13 |     3362 | 2025-02-26 | BLUEJAYS         | W   | 0.121      | -            | -                | -                | -         |     1.48 | chop, Grizz, Minus, motm, WolfY  |
|           12 |     3366 | 2025-02-26 | BLUEJAYS         | W   | 0.121      | -            | -                | -                | -         |     1.49 | chop, Grizz, Minus, motm, WolfY  |
|           11 |     3408 | 2025-02-25 | LAG Gaming       | L   | 0.115      | -            | -                | -                | -         |    -2.56 | chop, Grizz, Minus, motm, WolfY  |
|           10 |     3412 | 2025-02-25 | LAG Gaming       | W   | 0.114      | -            | -                | -                | -         |     1.05 | chop, Grizz, Minus, motm, WolfY  |
|            9 |     3558 | 2025-02-18 | Nouns Esports    | L   | 0.068      | -            | -                | -                | -         |    -1.94 | chop, Grizz, Minus, motm, WolfY  |
|            8 |     3560 | 2025-02-18 | Nouns Esports    | L   | 0.068      | -            | -                | -                | -         |    -1.94 | chop, Grizz, Minus, motm, WolfY  |
|            7 |     3698 | 2025-02-11 | BLUEJAYS         | L   | 0.021      | -            | -                | -                | -         |    -0.26 | chop, Grizz, Minus, motm, WolfY  |
|            6 |     3703 | 2025-02-11 | NRG              | L   | 0.020      | -            | -                | -                | -         |    -0.19 | chop, Grizz, Minus, motm, WolfY  |
|            5 |     3726 | 2025-02-10 | M80              | L   | 0.014      | -            | -                | -                | -         |    -0.07 | chop, Minus, motm, steel, WolfY  |
|            4 |     3730 | 2025-02-10 | MCS Gaming       | W   | 0.013      | -            | -                | -                | -         |     0.03 | chop, Minus, motm, steel, WolfY  |
|            3 |     3764 | 2025-02-09 | M80              | L   | 0.006      | -            | -                | -                | -         |    -0.03 | chop, Minus, motm, steel, WolfY  |
|            2 |     3795 | 2025-02-08 | BLUEJAYS         | W   | 0.000      | -            | -                | -                | -         |     0.01 | chop, Grizz, Minus, motm, WolfY  |
|            1 |     3798 | 2025-02-08 | Getting Info     | W   | 0.000      | -            | -                | -                | -         |     0.00 | chop, Grizz, Minus, motm, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,297.85)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.614 | $2,000.00      | $1,228.06       |
| 2025-04-30 |      0.540 | $5,000.00      | $2,702.43       |
| 2025-03-02 |      0.147 | $2,500.00      | $367.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
