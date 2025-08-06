### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, headtr1ck, kensizor, npl<br />
Global Rank: [23](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  1359.0<br />
<br />
Final Rank Value (1359.0) = Starting Rank Value (1339.0) + Head To Head Adjustments (20.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.535[<sup>2</sup>](#table1)
- Opponent Network: 0.278[<sup>2</sup>](#table1)
- LAN Wins: 0.634[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.632[<sup>2</sup>](#table1)

The average of these factors is 0.496<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1339.0
- 400 + ( ( 0.496 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 1339.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |      116 | 2025-07-24 | FlyQuest           | L   | 1.000      | -            | -                | -                | -         |   -16.50 | alex666, esenthial, headtr1ck, kensizor, npl |
|           49 |      129 | 2025-07-23 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -3.99 | alex666, esenthial, headtr1ck, kensizor, npl |
|           48 |      776 | 2025-06-10 | Lynn Vision Gaming | L   | 0.832      | -            | -                | -                | -         |    -7.10 | alex666, esenthial, headtr1ck, kensizor, npl |
|           47 |      789 | 2025-06-09 | FURIA              | L   | 0.826      | -            | -                | -                | -         |    -3.80 | alex666, esenthial, headtr1ck, kensizor, npl |
|           46 |      806 | 2025-06-08 | HEROIC             | W   | 0.818      | 0.769        | 0.404 (0.254)    | 0.654 (0.411)    | 1 (0.818) |    19.75 | alex666, esenthial, headtr1ck, kensizor, npl |
|           45 |      822 | 2025-06-07 | Virtus.pro         | L   | 0.813      | -            | -                | -                | -         |    -7.84 | alex666, esenthial, headtr1ck, kensizor, npl |
|           44 |      831 | 2025-06-07 | Team Falcons       | W   | 0.811      | 0.769        | 1.000 (0.624)    | 0.426 (0.266)    | 1 (0.811) |    23.07 | alex666, esenthial, headtr1ck, kensizor, npl |
|           43 |      860 | 2025-06-04 | Wildcard           | W   | 0.792      | 0.624        | 0.065 (0.032)    | -                | 1 (0.792) |     4.19 | alex666, esenthial, headtr1ck, kensizor, npl |
|           42 |      876 | 2025-06-03 | OG                 | W   | 0.786      | 0.624        | -                | 0.590 (0.290)    | 1 (0.786) |     5.49 | alex666, esenthial, headtr1ck, kensizor, npl |
|           41 |      883 | 2025-06-03 | Imperial Esports   | W   | 0.785      | 0.624        | 0.121 (0.059)    | 0.670 (0.328)    | 1 (0.785) |     3.59 | alex666, esenthial, headtr1ck, kensizor, npl |
|           40 |     1263 | 2025-05-11 | PARIVISION         | W   | 0.632      | 0.500        | 0.121 (0.038)    | 1.000 (0.316)    | 0 (0.000) |     3.02 | alex666, esenthial, headtr1ck, kensizor, npl |
|           39 |     1337 | 2025-05-08 | SINNERS Esports    | W   | 0.612      | -            | -                | -                | 0 (0.000) |     1.54 | alex666, esenthial, headtr1ck, kensizor, npl |
|           38 |     1363 | 2025-05-07 | Betera Esports     | W   | 0.606      | -            | -                | -                | -         |     0.79 | alex666, esenthial, headtr1ck, kensizor, npl |
|           37 |     1398 | 2025-05-06 | Zero Tenacity      | W   | 0.599      | 0.500        | -                | 0.791 (0.237)    | -         |     1.61 | alex666, esenthial, headtr1ck, kensizor, npl |
|           36 |     1468 | 2025-05-03 | Chinggis Warriors  | W   | 0.582      | 0.624        | -                | 0.597 (0.217)    | 1 (0.582) |     3.04 | alex666, esenthial, headtr1ck, kensizor, npl |
|           35 |     1490 | 2025-05-03 | BIG                | L   | 0.577      | -            | -                | -                | -         |   -12.69 | alex666, esenthial, headtr1ck, kensizor, npl |
|           34 |     1516 | 2025-05-01 | JiJieHao           | W   | 0.569      | -            | -                | -                | 1 (0.569) |     2.64 | alex666, esenthial, headtr1ck, kensizor, npl |
|           33 |     1522 | 2025-05-01 | BIG                | L   | 0.565      | -            | -                | -                | -         |   -12.89 | alex666, esenthial, headtr1ck, kensizor, npl |
|           32 |     1565 | 2025-04-30 | The Huns Esports   | W   | 0.557      | -            | -                | -                | 1 (0.557) |     2.15 | alex666, esenthial, headtr1ck, kensizor, npl |
|           31 |     1614 | 2025-04-27 | HEROIC             | L   | 0.538      | -            | -                | -                | -         |    -3.86 | alex666, esenthial, headtr1ck, kensizor, npl |
|           30 |     1652 | 2025-04-26 | BetBoom Team       | W   | 0.532      | 0.548        | 0.318 (0.093)    | -                | -         |     8.84 | alex666, esenthial, headtr1ck, kensizor, npl |
|           29 |     1679 | 2025-04-25 | HEROIC             | W   | 0.524      | 0.548        | 0.404 (0.116)    | -                | -         |    13.09 | alex666, esenthial, headtr1ck, kensizor, npl |
|           28 |     1698 | 2025-04-24 | Partizan Esports   | W   | 0.516      | 0.548        | -                | 0.782 (0.221)    | -         |     1.72 | alex666, esenthial, headtr1ck, kensizor, npl |
|           27 |     1809 | 2025-04-17 | Astralis           | W   | 0.471      | 0.147        | 0.889 (0.061)    | -                | -         |    13.41 | alex666, esenthial, headtr1ck, kensizor, npl |
|           26 |     1818 | 2025-04-17 | ENCE               | W   | 0.470      | -            | -                | -                | -         |     3.22 | alex666, esenthial, headtr1ck, kensizor, npl |
|           25 |     1839 | 2025-04-16 | 9Pandas            | W   | 0.465      | -            | -                | -                | -         |     1.34 | alex666, esenthial, headtr1ck, kensizor, npl |
|           24 |     1850 | 2025-04-16 | BC.Game Esports    | W   | 0.463      | -            | -                | -                | -         |     1.20 | alex666, esenthial, headtr1ck, kensizor, npl |
|           23 |     1875 | 2025-04-15 | PARIVISION         | W   | 0.456      | -            | -                | -                | -         |     2.53 | alex666, esenthial, headtr1ck, kensizor, npl |
|           22 |     1885 | 2025-04-14 | SAW                | L   | 0.452      | -            | -                | -                | -         |    -5.72 | alex666, esenthial, headtr1ck, kensizor, npl |
|           21 |     1896 | 2025-04-14 | Metizport          | L   | 0.449      | -            | -                | -                | -         |   -12.56 | alex666, esenthial, headtr1ck, kensizor, npl |
|           20 |     2263 | 2025-03-31 | Ninjas in Pyjamas  | L   | 0.358      | -            | -                | -                | -         |    -3.23 | alex666, esenthial, headtr1ck, kensizor, npl |
|           19 |     2289 | 2025-03-30 | GUN5 Esports       | W   | 0.351      | 0.769        | -                | 0.838 (0.226)    | -         |     1.56 | alex666, esenthial, headtr1ck, kensizor, npl |
|           18 |     2294 | 2025-03-30 | CYBERSHOKE Esports | W   | 0.350      | -            | -                | -                | -         |     0.91 | alex666, esenthial, headtr1ck, kensizor, npl |
|           17 |     2332 | 2025-03-29 | PARIVISION         | W   | 0.346      | 0.769        | 0.121 (0.032)    | 1.000 (0.266)    | -         |     1.80 | alex666, esenthial, headtr1ck, kensizor, npl |
|           16 |     2360 | 2025-03-29 | ENCE               | W   | 0.343      | 0.769        | 0.140 (0.037)    | -                | -         |     1.92 | alex666, esenthial, headtr1ck, kensizor, npl |
|           15 |     2408 | 2025-03-28 | CYBERSHOKE Esports | L   | 0.338      | -            | -                | -                | -         |    -9.80 | alex666, esenthial, headtr1ck, kensizor, npl |
|           14 |     2502 | 2025-03-27 | Roler Coaster      | W   | 0.330      | -            | -                | -                | -         |     0.12 | alex666, esenthial, headtr1ck, kensizor, npl |
|           13 |     2575 | 2025-03-25 | Nemiga Gaming      | W   | 0.319      | -            | -                | -                | -         |     3.85 | alex666, esenthial, headtr1ck, kensizor, npl |
|           12 |     2730 | 2025-03-18 | Zero Tenacity      | L   | 0.273      | -            | -                | -                | -         |    -8.00 | alex666, esenthial, headtr1ck, kensizor, npl |
|           11 |     3332 | 2025-02-26 | TPuDCATb TPu       | W   | 0.139      | -            | -                | -                | -         |     0.24 | alex666, esenthial, headtr1ck, kensizor, npl |
|           10 |     3428 | 2025-02-23 | BC.Game Esports    | W   | 0.119      | -            | -                | -                | -         |     0.21 | alex666, esenthial, headtr1ck, kensizor, npl |
|            9 |     3434 | 2025-02-23 | 9Pandas            | W   | 0.117      | -            | -                | -                | -         |     0.21 | alex666, esenthial, headtr1ck, kensizor, npl |
|            8 |     3447 | 2025-02-22 | CYBERSHOKE Esports | W   | 0.111      | -            | -                | -                | -         |     0.26 | alex666, esenthial, headtr1ck, kensizor, npl |
|            7 |     3474 | 2025-02-20 | Monte              | W   | 0.099      | -            | -                | -                | -         |     0.10 | alex666, esenthial, headtr1ck, kensizor, npl |
|            6 |     3494 | 2025-02-19 | Iberian Soul       | W   | 0.092      | -            | -                | -                | -         |     1.80 | alex666, esenthial, headtr1ck, kensizor, npl |
|            5 |     3577 | 2025-02-15 | 500                | L   | 0.064      | -            | -                | -                | -         |    -1.90 | alex666, esenthial, headtr1ck, kensizor, npl |
|            4 |     3598 | 2025-02-14 | Nemiga Gaming      | W   | 0.058      | -            | -                | -                | -         |     0.74 | alex666, esenthial, headtr1ck, kensizor, npl |
|            3 |     3645 | 2025-02-12 | GUN5 Esports       | W   | 0.044      | -            | -                | -                | -         |     0.18 | alex666, esenthial, headtr1ck, kensizor, npl |
|            2 |     3836 | 2025-02-07 | PARIVISION         | L   | 0.010      | -            | -                | -                | -         |    -0.27 | alex666, esenthial, headtr1ck, kensizor, npl |
|            1 |     3847 | 2025-02-06 | Alliance           | W   | 0.005      | -            | -                | -                | -         |     0.05 | alex666, esenthial, headtr1ck, kensizor, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,858.10)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-25 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-06-10 |      0.833 | $10,000.00     | $8,329.17       |
| 2025-05-11 |      0.632 | $17,000.00     | $10,747.78      |
| 2025-05-04 |      0.583 | $30,000.00     | $17,499.31      |
| 2025-04-27 |      0.538 | $35,000.00     | $18,841.67      |
| 2025-02-23 |      0.119 | $22,000.00     | $2,611.48       |
| 2025-02-15 |      0.066 | $5,000.00      | $328.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
