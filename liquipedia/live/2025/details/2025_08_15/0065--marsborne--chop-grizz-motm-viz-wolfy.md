### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Grizz, motm, viz, WolfY<br />
Global Rank: [65](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_15.md)<br />
Regional Rank: [15]( ../../standings_americas_2025_08_15.md)<br />
<br />
Final Rank Value:  946.4<br />
<br />
Final Rank Value (946.4) = Starting Rank Value (905.5) + Head To Head Adjustments (40.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.117[<sup>2</sup>](#table1)
- LAN Wins: 0.265[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.546[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 905.5
- 400 + ( ( 0.259 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 905.5


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
|           66 |       11 | 2025-08-13 | M80              | L   | 1.000      | -            | -                | -                | -         |    -4.81 | chop, Grizz, motm, viz, WolfY    |
|           65 |       57 | 2025-08-09 | BOSS             | W   | 1.000      | 0.333        | -                | 0.330 (0.110)    | 0 (0.000) |     8.19 | chop, Grizz, motm, viz, WolfY    |
|           64 |       81 | 2025-08-07 | Arrival Seven    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.53 | chop, Grizz, motm, viz, WolfY    |
|           63 |      146 | 2025-08-02 | M80              | L   | 1.000      | -            | -                | -                | -         |    -4.96 | chop, Grizz, motm, viz, WolfY    |
|           62 |      166 | 2025-08-01 | Wildcard         | W   | 1.000      | 0.143        | 0.071 (0.010)    | 0.426 (0.061)    | 0 (0.000) |    20.87 | chop, Grizz, motm, viz, WolfY    |
|           61 |      196 | 2025-07-29 | Getting Info     | L   | 1.000      | -            | -                | -                | -         |   -17.72 | chop, Grizz, motm, viz, WolfY    |
|           60 |      260 | 2025-07-26 | LAG Gaming       | W   | 1.000      | 0.384        | 0.014 (0.006)    | 0.350 (0.134)    | 0 (0.000) |     8.36 | chop, Grizz, motm, viz, WolfY    |
|           59 |      291 | 2025-07-24 | MIGHT            | W   | 1.000      | 0.384        | -                | 0.215 (0.082)    | 0 (0.000) |     4.59 | chop, Grizz, motm, viz, WolfY    |
|           58 |      334 | 2025-07-19 | Fluxo            | L   | 1.000      | -            | -                | -                | -         |    -9.41 | chop, Grizz, motm, viz, WolfY    |
|           57 |      345 | 2025-07-19 | LAG Gaming       | W   | 1.000      | 0.407        | 0.014 (0.006)    | 0.350 (0.142)    | 1 (1.000) |     8.29 | chop, Grizz, motm, viz, WolfY    |
|           56 |      373 | 2025-07-18 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -5.95 | chop, Grizz, motm, viz, WolfY    |
|           55 |      382 | 2025-07-18 | LAG Gaming       | W   | 1.000      | 0.407        | 0.014 (0.006)    | 0.350 (0.142)    | 1 (1.000) |     8.67 | chop, Grizz, motm, viz, WolfY    |
|           54 |      463 | 2025-07-14 | M80              | L   | 0.980      | -            | -                | -                | -         |    -5.38 | chop, Grizz, viz, Walco, WolfY   |
|           53 |      484 | 2025-07-13 | BLUEJAYS         | W   | 0.974      | 0.143        | 0.041 (0.006)    | 0.750 (0.104)    | -         |    18.11 | chop, Grizz, viz, Walco, WolfY   |
|           52 |      487 | 2025-07-13 | BOSS             | W   | 0.973      | -            | -                | -                | -         |     8.82 | chop, Grizz, viz, Walco, WolfY   |
|           51 |      504 | 2025-07-12 | Marca Registrada | W   | 0.967      | -            | -                | -                | -         |     1.73 | chop, Grizz, Lucid, Walco, WolfY |
|           50 |      508 | 2025-07-12 | BLUEJAYS         | L   | 0.966      | -            | -                | -                | -         |   -11.83 | chop, Grizz, Lucid, Walco, WolfY |
|           49 |      529 | 2025-07-11 | Legacy Kingdom   | W   | 0.960      | -            | -                | -                | -         |     6.25 | chop, Grizz, viz, Walco, WolfY   |
|           48 |     1386 | 2025-05-13 | BLUEJAYS         | L   | 0.566      | -            | -                | -                | -         |   -10.44 | chop, Grizz, Minus, motm, WolfY  |
|           47 |     1469 | 2025-05-10 | BLUEJAYS         | W   | 0.547      | 0.384        | 0.041 (0.009)    | 0.750 (0.158)    | -         |    10.41 | chop, Grizz, Minus, motm, WolfY  |
|           46 |     1495 | 2025-05-09 | Legacy Kingdom   | W   | 0.541      | -            | -                | -                | -         |     3.71 | chop, Grizz, Minus, motm, WolfY  |
|           45 |     1574 | 2025-05-06 | Legacy           | L   | 0.521      | -            | -                | -                | -         |    -1.33 | chop, Grizz, Minus, motm, WolfY  |
|           44 |     1653 | 2025-05-03 | BLUEJAYS         | L   | 0.500      | -            | -                | -                | -         |    -6.31 | chop, Grizz, Minus, motm, WolfY  |
|           43 |     1657 | 2025-05-03 | NRG              | L   | 0.499      | -            | -                | -                | -         |    -3.36 | chop, Grizz, Minus, motm, WolfY  |
|           42 |     1660 | 2025-05-03 | BLUEJAYS         | W   | 0.499      | 0.303        | 0.041 (0.006)    | 0.750 (0.113)    | -         |     9.57 | chop, Grizz, Minus, motm, WolfY  |
|           41 |     1726 | 2025-04-30 | BLUEJAYS         | W   | 0.481      | 0.333        | 0.041 (0.007)    | 0.750 (0.120)    | -         |     9.61 | chop, Grizz, Minus, motm, WolfY  |
|           40 |     1759 | 2025-04-29 | Fisher College   | W   | 0.473      | -            | -                | -                | -         |     4.03 | chop, Grizz, Minus, motm, WolfY  |
|           39 |     1871 | 2025-04-24 | Daaku            | W   | 0.441      | -            | -                | -                | -         |     1.69 | chop, Grizz, Minus, motm, WolfY  |
|           38 |     1927 | 2025-04-20 | Wanted Goons     | W   | 0.414      | -            | -                | -                | -         |     2.40 | chop, Grizz, Minus, motm, WolfY  |
|           37 |     1942 | 2025-04-19 | BLUEJAYS         | L   | 0.407      | -            | -                | -                | -         |    -4.71 | chop, Grizz, Minus, motm, WolfY  |
|           36 |     1987 | 2025-04-17 | BLUEJAYS         | L   | 0.392      | -            | -                | -                | -         |    -7.27 | chop, Grizz, Minus, motm, WolfY  |
|           35 |     2015 | 2025-04-16 | BLUEJAYS         | W   | 0.386      | -            | -                | -                | -         |     7.75 | chop, Grizz, Minus, motm, WolfY  |
|           34 |     2040 | 2025-04-15 | Wildcard         | L   | 0.380      | -            | -                | -                | -         |    -4.12 | chop, Grizz, Minus, motm, WolfY  |
|           33 |     2084 | 2025-04-13 | BLUEJAYS         | W   | 0.367      | -            | -                | -                | -         |     4.84 | chop, Grizz, Minus, motm, WolfY  |
|           32 |     2135 | 2025-04-10 | Daaku            | L   | 0.347      | -            | -                | -                | -         |    -9.74 | chop, Grizz, Minus, motm, WolfY  |
|           31 |     2190 | 2025-04-08 | InControl        | W   | 0.334      | -            | -                | -                | -         |     1.36 | chop, Grizz, Minus, motm, WolfY  |
|           30 |     2195 | 2025-04-08 | InControl        | W   | 0.334      | -            | -                | -                | -         |     1.38 | chop, Grizz, Minus, motm, WolfY  |
|           29 |     2241 | 2025-04-07 | JERSA ESPORTS    | W   | 0.327      | -            | -                | -                | -         |     1.08 | chop, Grizz, Minus, motm, WolfY  |
|           28 |     2345 | 2025-04-02 | Party Astronauts | L   | 0.294      | -            | -                | -                | -         |    -6.68 | chop, Grizz, Minus, motm, WolfY  |
|           27 |     2352 | 2025-04-02 | Party Astronauts | W   | 0.294      | -            | -                | -                | -         |     2.62 | chop, Grizz, Minus, motm, WolfY  |
|           26 |     2406 | 2025-04-01 | Legacy           | L   | 0.288      | -            | -                | -                | -         |    -0.54 | chop, Grizz, Minus, motm, WolfY  |
|           25 |     2412 | 2025-04-01 | Legacy           | L   | 0.287      | -            | -                | -                | -         |    -0.54 | chop, Grizz, Minus, motm, WolfY  |
|           24 |     2452 | 2025-03-30 | M80              | L   | 0.274      | -            | -                | -                | -         |    -1.14 | chop, Grizz, Minus, motm, WolfY  |
|           23 |     2455 | 2025-03-30 | Mythic           | W   | 0.274      | -            | -                | -                | -         |     0.96 | chop, Grizz, Minus, motm, WolfY  |
|           22 |     2499 | 2025-03-29 | M80              | L   | 0.267      | -            | -                | -                | -         |    -1.11 | chop, Grizz, Minus, motm, WolfY  |
|           21 |     2555 | 2025-03-28 | Team Aether      | W   | 0.261      | -            | -                | -                | -         |     1.05 | chop, Grizz, Minus, motm, WolfY  |
|           20 |     2622 | 2025-03-27 | Seoul            | W   | 0.254      | -            | -                | -                | -         |     0.46 | chop, Grizz, Minus, motm, WolfY  |
|           19 |     2700 | 2025-03-26 | NRG              | W   | 0.248      | 0.413        | 0.074 (0.008)    | -                | -         |     6.23 | chop, Grizz, Minus, motm, WolfY  |
|           18 |     2706 | 2025-03-26 | NRG              | W   | 0.248      | 0.413        | 0.074 (0.008)    | -                | -         |     6.31 | chop, Grizz, Minus, motm, WolfY  |
|           17 |     2749 | 2025-03-25 | Akimbo Esports   | L   | 0.241      | -            | -                | -                | -         |    -5.89 | chop, Grizz, Minus, motm, WolfY  |
|           16 |     2753 | 2025-03-25 | Akimbo Esports   | W   | 0.241      | -            | -                | -                | -         |     1.72 | chop, Grizz, Minus, motm, WolfY  |
|           15 |     2900 | 2025-03-18 | Arrival Seven    | L   | 0.195      | -            | -                | -                | -         |    -4.40 | chop, Grizz, Minus, motm, WolfY  |
|           14 |     2904 | 2025-03-18 | Arrival Seven    | L   | 0.194      | -            | -                | -                | -         |    -4.45 | chop, Grizz, Minus, motm, WolfY  |
|           13 |     3235 | 2025-03-07 | Fisher College   | L   | 0.120      | -            | -                | -                | -         |    -2.90 | chop, Grizz, Minus, motm, WolfY  |
|           12 |     3293 | 2025-03-06 | LAG Gaming       | L   | 0.114      | -            | -                | -                | -         |    -2.57 | chop, Grizz, Minus, motm, WolfY  |
|           11 |     3337 | 2025-03-05 | MIGHT            | W   | 0.107      | -            | -                | -                | -         |     0.70 | chop, Grizz, Minus, motm, WolfY  |
|           10 |     3407 | 2025-03-02 | BLUEJAYS         | L   | 0.087      | -            | -                | -                | -         |    -1.69 | chop, Grizz, Minus, motm, WolfY  |
|            9 |     3409 | 2025-03-02 | Getting Info     | W   | 0.086      | -            | -                | -                | 1 (0.086) |     0.78 | chop, Grizz, Minus, motm, WolfY  |
|            8 |     3427 | 2025-03-01 | Wanted Goons     | W   | 0.081      | -            | -                | -                | 1 (0.081) |     0.44 | chop, Grizz, Minus, motm, WolfY  |
|            7 |     3432 | 2025-03-01 | Team Aether      | W   | 0.080      | -            | -                | -                | 1 (0.080) |     0.31 | chop, Grizz, Minus, motm, WolfY  |
|            6 |     3500 | 2025-02-26 | BLUEJAYS         | W   | 0.061      | -            | -                | -                | -         |     0.74 | chop, Grizz, Minus, motm, WolfY  |
|            5 |     3504 | 2025-02-26 | BLUEJAYS         | W   | 0.061      | -            | -                | -                | -         |     0.74 | chop, Grizz, Minus, motm, WolfY  |
|            4 |     3546 | 2025-02-25 | LAG Gaming       | L   | 0.055      | -            | -                | -                | -         |    -1.24 | chop, Grizz, Minus, motm, WolfY  |
|            3 |     3550 | 2025-02-25 | LAG Gaming       | W   | 0.054      | -            | -                | -                | -         |     0.48 | chop, Grizz, Minus, motm, WolfY  |
|            2 |     3696 | 2025-02-18 | Nouns Esports    | L   | 0.008      | -            | -                | -                | -         |    -0.23 | chop, Grizz, Minus, motm, WolfY  |
|            1 |     3698 | 2025-02-18 | Nouns Esports    | L   | 0.008      | -            | -                | -                | -         |    -0.22 | chop, Grizz, Minus, motm, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,978.51)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-15 |      1.000 | $250.00        | $250.00         |
| 2025-05-11 |      0.554 | $2,000.00      | $1,108.19       |
| 2025-04-30 |      0.481 | $5,000.00      | $2,402.78       |
| 2025-03-02 |      0.087 | $2,500.00      | $217.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
