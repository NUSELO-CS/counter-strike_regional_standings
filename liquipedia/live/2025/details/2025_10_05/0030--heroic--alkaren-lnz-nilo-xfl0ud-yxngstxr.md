### Roster Details<br />
Team Name: HEROIC<br />
Roster: Alkaren, LNZ, nilo, xfl0ud, yxngstxr<br />
Global Rank: [30](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [22]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  1378.1<br />
<br />
Final Rank Value (1378.1) = Starting Rank Value (1368.6) + Head To Head Adjustments (9.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.652[<sup>1</sup>](#table2)
- Bounty Collected: 0.581[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.563[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.347[<sup>2</sup>](#table1)

The average of these factors is 0.495<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1368.6
- 400 + ( ( 0.495 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1368.6


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
|           44 |       70 | 2025-10-01 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -5.60 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr  |
|           43 |       81 | 2025-09-30 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -6.42 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr  |
|           42 |      120 | 2025-09-29 | M80               | W   | 1.000      | 0.143        | 0.165 (0.024)    | 0.695 (0.099)    | 1 (1.000) |    10.47 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr  |
|           41 |      141 | 2025-09-28 | Gentle Mates      | L   | 1.000      | -            | -                | -                | -         |   -15.36 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr  |
|           40 |      518 | 2025-09-15 | Team Liquid       | L   | 1.000      | -            | -                | -                | -         |    -6.66 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr  |
|           39 |      540 | 2025-09-14 | PaiN Gaming       | L   | 1.000      | -            | -                | -                | -         |   -10.82 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr  |
|           38 |      619 | 2025-09-13 | Legacy            | L   | 1.000      | -            | -                | -                | -         |   -17.70 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr  |
|           37 |     1174 | 2025-08-22 | Aurora Gaming     | L   | 0.898      | -            | -                | -                | -         |    -3.70 | Alkaren, LNZ, nilo, tN1R, yxngstxr    |
|           36 |     1217 | 2025-08-20 | Team Spirit       | W   | 0.886      | 1.000        | 1.000 (0.886)    | 0.433 (0.383)    | 1 (0.886) |    25.95 | Alkaren, LNZ, nilo, tN1R, yxngstxr    |
|           35 |     1567 | 2025-08-11 | Passion UA        | W   | 0.824      | -            | -                | -                | -         |     3.70 | alkarenn, LNZ, nilo, tN1R, yxngstxr   |
|           34 |     1605 | 2025-08-10 | Aurora Gaming     | L   | 0.818      | -            | -                | -                | -         |    -3.04 | LNZ, nilo, Scr0b, tN1R, yxngstxr      |
|           33 |     1644 | 2025-08-08 | Passion UA        | W   | 0.805      | 0.624        | 0.184 (0.092)    | 0.388 (0.195)    | -         |    16.61 | LNZ, nilo, Scr0b, tN1R, yxngstxr      |
|           32 |     1808 | 2025-07-28 | Ninjas in Pyjamas | L   | 0.730      | -            | -                | -                | -         |    -5.84 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           31 |     1832 | 2025-07-27 | Team Spirit       | L   | 0.724      | -            | -                | -                | -         |    -2.14 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           30 |     1869 | 2025-07-25 | Virtus.pro        | W   | 0.711      | 0.769        | 0.235 (0.129)    | 0.285 (0.156)    | 1 (0.711) |    11.52 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           29 |     1881 | 2025-07-24 | MIBR              | W   | 0.705      | 0.769        | 0.151 (0.082)    | 0.547 (0.297)    | 1 (0.705) |    14.52 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           28 |     1895 | 2025-07-23 | Ninjas in Pyjamas | L   | 0.698      | -            | -                | -                | -         |    -5.47 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           27 |     2017 | 2025-07-16 | BetBoom Team      | L   | 0.652      | -            | -                | -                | -         |    -8.54 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           26 |     2033 | 2025-07-15 | BIG               | L   | 0.646      | -            | -                | -                | -         |    -9.82 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           25 |     2575 | 2025-06-10 | Nemiga Gaming     | L   | 0.411      | -            | -                | -                | -         |   -10.73 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           24 |     2590 | 2025-06-09 | TYLOO             | W   | 0.405      | 0.769        | 0.766 (0.238)    | 0.371 (0.116)    | 1 (0.405) |    10.19 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           23 |     2603 | 2025-06-08 | B8                | L   | 0.398      | -            | -                | -                | -         |    -4.57 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           22 |     2615 | 2025-06-07 | BetBoom Team      | W   | 0.393      | 0.769        | 0.440 (0.133)    | 0.885 (0.267)    | 1 (0.393) |     7.31 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           21 |     2627 | 2025-06-07 | FaZe Clan         | L   | 0.391      | -            | -                | -                | -         |    -3.37 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           20 |     2660 | 2025-06-04 | FlyQuest          | W   | 0.372      | -            | -                | -                | 1 (0.372) |     3.34 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           19 |     2676 | 2025-06-03 | NRG               | W   | 0.366      | 0.624        | 0.077 (0.018)    | 0.601 (0.137)    | 1 (0.366) |     3.72 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           18 |     2685 | 2025-06-03 | Chinggis Warriors | W   | 0.365      | 0.624        | -                | 0.491 (0.112)    | 1 (0.365) |     2.72 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           17 |     2825 | 2025-05-21 | Aurora Gaming     | L   | 0.280      | -            | -                | -                | -         |    -0.80 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           16 |     2833 | 2025-05-21 | FaZe Clan         | W   | 0.278      | -            | -                | -                | 1 (0.278) |     0.23 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           15 |     2851 | 2025-05-20 | Team Falcons      | L   | 0.273      | -            | -                | -                | -         |    -0.74 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           14 |     2877 | 2025-05-19 | Aurora Gaming     | W   | 0.267      | 1.000        | 1.000 (0.267)    | 0.357 (0.095)    | -         |     7.68 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           13 |     3277 | 2025-05-04 | BIG               | W   | 0.163      | -            | -                | -                | -         |     2.99 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           12 |     3297 | 2025-05-03 | Chinggis Warriors | W   | 0.158      | -            | -                | -                | -         |     1.25 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           11 |     3345 | 2025-05-01 | JiJieHao          | W   | 0.144      | -            | -                | -                | -         |     0.35 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           10 |     3386 | 2025-04-30 | Chinggis Warriors | W   | 0.136      | -            | -                | -                | -         |     1.07 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            9 |     3431 | 2025-04-27 | B8                | W   | 0.118      | -            | -                | -                | -         |     2.44 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            8 |     3441 | 2025-04-27 | BetBoom Team      | W   | 0.117      | 0.548        | 0.440 (0.028)    | -                | -         |     2.40 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            7 |     3461 | 2025-04-26 | Partizan Esports  | W   | 0.113      | -            | -                | -                | -         |     1.09 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            6 |     3484 | 2025-04-26 | Wildcard          | W   | 0.109      | -            | -                | -                | -         |     0.93 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            5 |     3495 | 2025-04-25 | B8                | L   | 0.104      | -            | -                | -                | -         |    -1.14 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            4 |     3513 | 2025-04-24 | BC.Game Esports   | W   | 0.097      | -            | -                | -                | -         |     0.04 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            3 |     3680 | 2025-04-15 | Nemiga Gaming     | W   | 0.038      | -            | -                | -                | -         |     0.20 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            2 |     3702 | 2025-04-14 | ENCE              | W   | 0.031      | -            | -                | -                | -         |     0.67 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            1 |     3711 | 2025-04-14 | PARIVISION        | W   | 0.030      | -            | -                | -                | -         |     0.51 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($110,987.52)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.29) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-02 |      1.000 | $4,500.00      | $4,500.00       |
| 2025-09-21 |      1.000 | $7,500.00      | $7,500.00       |
| 2025-08-24 |      0.910 | $40,000.00     | $36,408.33      |
| 2025-08-10 |      0.818 | $2,500.00      | $2,046.06       |
| 2025-08-03 |      0.771 | $10,000.00     | $7,713.89       |
| 2025-07-20 |      0.677 | $5,000.00      | $3,387.50       |
| 2025-06-10 |      0.413 | $10,000.00     | $4,129.17       |
| 2025-05-25 |      0.306 | $47,000.00     | $14,380.69      |
| 2025-05-04 |      0.163 | $135,000.00    | $22,046.88      |
| 2025-04-27 |      0.118 | $75,000.00     | $8,875.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
