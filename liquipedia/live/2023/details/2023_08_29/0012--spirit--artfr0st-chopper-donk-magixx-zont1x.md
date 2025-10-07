### Roster Details<br />
Team Name: Spirit<br />
Roster: ArtFr0st, chopper, donk, magixx, zont1x<br />
Global Rank: [12](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [12]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1415.2<br />
<br />
Final Rank Value (1415.2) = Starting Rank Value (1410.6) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.702[<sup>1</sup>](#table2)
- Bounty Collected: 0.565[<sup>2</sup>](#table1)
- Opponent Network: 0.365[<sup>2</sup>](#table1)
- LAN Wins: 0.458[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.833[<sup>2</sup>](#table1)

The average of these factors is 0.522<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1410.6
- 400 + ( ( 0.522 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1410.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |       19 | 2023-08-27 | Virtus.pro           | W   | 1.000      | 0.435        | 1.000 (0.435)    | 0.553 (0.240)    | 1 (1.000) |    26.30 | ArtFr0st, chopper, donk, magixx, zont1x |
|           50 |       25 | 2023-08-27 | 9 Pandas             | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | 1 (1.000) |     2.92 | ArtFr0st, chopper, donk, magixx, zont1x |
|           49 |       89 | 2023-08-25 | 1WIN                 | W   | 1.000      | 0.435        | 0.298 (0.130)    | 0.772 (0.336)    | 1 (1.000) |     9.59 | ArtFr0st, chopper, donk, magixx, zont1x |
|           48 |       97 | 2023-08-25 | FORZE                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.42 | ArtFr0st, chopper, donk, magixx, zont1x |
|           47 |      352 | 2023-08-12 | Movistar Riders      | L   | 1.000      | -            | -                | -                | -         |   -29.59 | ArtFr0st, chopper, donk, magixx, zont1x |
|           46 |      440 | 2023-08-10 | Into the Breach      | L   | 1.000      | -            | -                | -                | -         |   -26.44 | ArtFr0st, chopper, donk, magixx, zont1x |
|           45 |      447 | 2023-08-10 | Insilio              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.53 | ArtFr0st, chopper, donk, magixx, zont1x |
|           44 |      457 | 2023-08-10 | Virtus.pro           | L   | 1.000      | -            | -                | -                | -         |    -4.35 | ArtFr0st, chopper, donk, magixx, zont1x |
|           43 |      505 | 2023-08-08 | Virtus.pro           | W   | 1.000      | 0.589        | 1.000 (0.589)    | 0.553 (0.325)    | 0 (0.000) |    27.59 | ArtFr0st, chopper, donk, magixx, zont1x |
|           42 |      519 | 2023-08-08 | 00NATION             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.24 | ArtFr0st, chopper, donk, magixx, zont1x |
|           41 |      528 | 2023-08-07 | MIBR                 | W   | 1.000      | 0.589        | 0.150 (0.088)    | 0.596 (0.351)    | 0 (0.000) |     3.71 | ArtFr0st, chopper, donk, magixx, zont1x |
|           40 |      556 | 2023-08-05 | Zero Tenacity        | W   | 1.000      | 0.589        | -                | 0.915 (0.539)    | 0 (0.000) |     1.21 | ArtFr0st, chopper, donk, magixx, zont1x |
|           39 |      621 | 2023-08-02 | Movistar Riders      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.03 | ArtFr0st, chopper, donk, magixx, zont1x |
|           38 |      651 | 2023-07-31 | SAW                  | W   | 1.000      | 0.435        | 0.240 (0.104)    | 0.968 (0.421)    | -         |     9.40 | ArtFr0st, chopper, donk, magixx, zont1x |
|           37 |      665 | 2023-07-31 | Evil Geniuses        | W   | 1.000      | 0.435        | -                | 0.580 (0.252)    | -         |     2.25 | ArtFr0st, chopper, donk, magixx, zont1x |
|           36 |      689 | 2023-07-30 | Bad News Eagles      | W   | 1.000      | 0.435        | 0.135 (0.059)    | 0.751 (0.326)    | -         |     5.78 | ArtFr0st, chopper, donk, magixx, zont1x |
|           35 |      722 | 2023-07-28 | 9 Pandas             | W   | 0.987      | 0.435        | -                | 1.000 (0.429)    | -         |     5.12 | ArtFr0st, chopper, donk, magixx, zont1x |
|           34 |      995 | 2023-07-11 | 9INE                 | L   | 0.875      | -            | -                | -                | -         |   -21.35 | ArtFr0st, chopper, donk, magixx, zont1x |
|           33 |     1009 | 2023-07-11 | YNT                  | W   | 0.874      | -            | -                | -                | -         |     0.60 | ArtFr0st, chopper, donk, magixx, zont1x |
|           32 |     1679 | 2023-05-28 | Apeks                | L   | 0.581      | -            | -                | -                | -         |    -9.26 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           31 |     1756 | 2023-05-26 | 9 Pandas             | L   | 0.567      | -            | -                | -                | -         |   -14.95 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           30 |     1819 | 2023-05-24 | Apeks                | W   | 0.554      | 0.435        | 0.349 (0.084)    | -                | -         |     8.13 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           29 |     1837 | 2023-05-24 | Monte                | W   | 0.553      | 0.435        | 0.318 (0.076)    | -                | -         |     9.70 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           28 |     2068 | 2023-05-10 | SAW                  | W   | 0.461      | -            | -                | -                | -         |     3.95 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           27 |     2097 | 2023-05-09 | Astralis Talent      | W   | 0.451      | -            | -                | -                | -         |     1.71 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           26 |     2153 | 2023-05-06 | 1WIN                 | W   | 0.433      | 0.548        | 0.298 (0.071)    | -                | -         |     3.77 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           25 |     2199 | 2023-05-03 | Apeks                | L   | 0.413      | -            | -                | -                | -         |    -7.35 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           24 |     2219 | 2023-05-02 | MOUZ NXT             | W   | 0.407      | -            | -                | -                | -         |     0.63 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           23 |     2238 | 2023-05-01 | Endpoint             | W   | 0.398      | -            | -                | -                | -         |     0.87 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           22 |     2297 | 2023-04-28 | ex-Copenhagen Flames | L   | 0.380      | -            | -                | -                | -         |   -11.53 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           21 |     2350 | 2023-04-26 | FORZE                | W   | 0.367      | 0.435        | 0.364 (0.058)    | -                | -         |     3.60 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           20 |     2502 | 2023-04-18 | Let us cook          | W   | 0.314      | -            | -                | -                | -         |     0.22 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           19 |     2889 | 2023-03-31 | Monte                | L   | 0.194      | -            | -                | -                | -         |    -2.73 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           18 |     2897 | 2023-03-31 | Endpoint             | W   | 0.192      | -            | -                | -                | -         |     0.41 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           17 |     2922 | 2023-03-30 | Aurora               | W   | 0.186      | -            | -                | -                | -         |     1.15 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           16 |     2981 | 2023-03-28 | PROSPECTS            | W   | 0.173      | -            | -                | -                | -         |     0.47 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           15 |     3091 | 2023-03-24 | 500                  | W   | 0.147      | -            | -                | -                | -         |     0.35 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           14 |     3100 | 2023-03-24 | Question Mark        | W   | 0.147      | -            | -                | -                | -         |     0.25 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           13 |     3149 | 2023-03-23 | Monte                | L   | 0.139      | -            | -                | -                | -         |    -1.99 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           12 |     3163 | 2023-03-22 | LDLC                 | W   | 0.135      | -            | -                | -                | -         |     0.07 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           11 |     3247 | 2023-03-20 | GODSENT              | W   | 0.119      | -            | -                | -                | -         |     0.08 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|           10 |     3336 | 2023-03-17 | Insilio              | L   | 0.100      | -            | -                | -                | -         |    -3.09 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|            9 |     3433 | 2023-03-14 | los kogutos          | W   | 0.080      | -            | -                | -                | -         |     0.17 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|            8 |     3458 | 2023-03-13 | ex-DomiNation        | L   | 0.073      | -            | -                | -                | -         |    -2.27 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|            7 |     3490 | 2023-03-12 | HAVU                 | W   | 0.066      | -            | -                | -                | -         |     0.15 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|            6 |     3518 | 2023-03-11 | B8                   | W   | 0.060      | -            | -                | -                | -         |     0.08 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|            5 |     3553 | 2023-03-10 | EC Brugge            | W   | 0.053      | -            | -                | -                | -         |     0.02 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|            4 |     3589 | 2023-03-09 | JANO                 | W   | 0.046      | -            | -                | -                | -         |     0.05 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|            3 |     3641 | 2023-03-07 | Arcadia              | W   | 0.034      | -            | -                | -                | -         |     0.02 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|            2 |     3679 | 2023-03-05 | Into the Bin         | W   | 0.021      | -            | -                | -                | -         |     0.01 | ArtFr0st, baz, donk, S0tF1k, zont1x     |
|            1 |     3694 | 2023-03-05 | Departed             | W   | 0.019      | -            | -                | -                | -         |     0.00 | ArtFr0st, baz, donk, S0tF1k, zont1x     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($102,314.30)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.38) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $30,000.00     | $30,000.00      |
| 2023-08-10 |      1.000 | $40,000.00     | $40,000.00      |
| 2023-07-31 |      1.000 | $22,000.00     | $22,000.00      |
| 2023-05-28 |      0.581 | $11,500.00     | $6,676.82       |
| 2023-05-04 |      0.420 | $2,000.00      | $839.32         |
| 2023-03-31 |      0.194 | $10,000.00     | $1,939.55       |
| 2023-03-23 |      0.140 | $5,000.00      | $698.97         |
| 2023-03-21 |      0.128 | $1,250.00      | $159.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
