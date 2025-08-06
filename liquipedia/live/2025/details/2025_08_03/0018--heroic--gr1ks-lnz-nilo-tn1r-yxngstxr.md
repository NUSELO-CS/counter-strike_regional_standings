### Roster Details<br />
Team Name: HEROIC<br />
Roster: gr1ks, LNZ, nilo, tN1R, yxngstxr<br />
Global Rank: [18](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  1504.4<br />
<br />
Final Rank Value (1504.4) = Starting Rank Value (1591.2) + Head To Head Adjustments (-86.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.718[<sup>1</sup>](#table2)
- Bounty Collected: 0.594[<sup>2</sup>](#table1)
- Opponent Network: 0.320[<sup>2</sup>](#table1)
- LAN Wins: 0.886[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.654[<sup>2</sup>](#table1)

The average of these factors is 0.629<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1591.2
- 400 + ( ( 0.629 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 1591.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |       54 | 2025-07-28 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |   -18.73 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           47 |       73 | 2025-07-27 | Team Spirit        | L   | 1.000      | -            | -                | -                | -         |    -2.52 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           46 |      102 | 2025-07-25 | Virtus.pro         | W   | 1.000      | 0.769        | 0.199 (0.153)    | 0.414 (0.318)    | 1 (1.000) |    15.76 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           45 |      111 | 2025-07-24 | MIBR               | W   | 1.000      | 0.769        | 0.196 (0.150)    | -                | 1 (1.000) |    10.15 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           44 |      123 | 2025-07-23 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |   -20.07 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           43 |      243 | 2025-07-16 | BetBoom Team       | L   | 1.000      | -            | -                | -                | -         |   -24.38 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           42 |      259 | 2025-07-15 | BIG                | L   | 1.000      | -            | -                | -                | -         |   -28.22 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           41 |      778 | 2025-06-10 | Nemiga Gaming      | L   | 0.831      | -            | -                | -                | -         |   -22.26 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           40 |      793 | 2025-06-09 | TYLOO              | W   | 0.825      | 0.769        | 0.864 (0.548)    | 0.732 (0.464)    | 1 (0.825) |    16.04 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           39 |      806 | 2025-06-08 | B8                 | L   | 0.818      | -            | -                | -                | -         |   -19.75 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           38 |      818 | 2025-06-07 | BetBoom Team       | W   | 0.813      | 0.769        | 0.318 (0.199)    | 0.631 (0.394)    | 1 (0.813) |     4.70 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           37 |      830 | 2025-06-07 | FaZe Clan          | L   | 0.811      | -            | -                | -                | -         |    -9.12 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           36 |      861 | 2025-06-04 | FlyQuest           | W   | 0.792      | 0.624        | 0.090 (0.045)    | 0.484 (0.239)    | 1 (0.792) |     5.39 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           35 |      877 | 2025-06-03 | NRG                | W   | 0.786      | 0.624        | -                | 0.637 (0.313)    | 1 (0.786) |     2.25 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           34 |      885 | 2025-06-03 | Chinggis Warriors  | W   | 0.785      | 0.624        | -                | 0.597 (0.293)    | 1 (0.785) |     1.07 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           33 |     1020 | 2025-05-21 | Aurora Gaming      | L   | 0.700      | -            | -                | -                | -         |    -8.93 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           32 |     1028 | 2025-05-21 | FaZe Clan          | W   | 0.698      | 1.000        | 0.494 (0.345)    | 0.592 (0.414)    | 1 (0.698) |    14.46 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           31 |     1045 | 2025-05-20 | Team Falcons       | L   | 0.693      | -            | -                | -                | -         |    -5.88 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           30 |     1071 | 2025-05-19 | Aurora Gaming      | W   | 0.687      | 1.000        | 0.595 (0.409)    | 0.464 (0.319)    | 1 (0.687) |    13.30 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           29 |     1461 | 2025-05-04 | BIG                | W   | 0.583      | 0.624        | 0.182 (0.066)    | -                | 1 (0.583) |     1.96 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           28 |     1482 | 2025-05-03 | Chinggis Warriors  | W   | 0.578      | 0.624        | -                | 0.597 (0.216)    | -         |     0.88 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           27 |     1530 | 2025-05-01 | JiJieHao           | W   | 0.564      | -            | -                | -                | -         |     0.79 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           26 |     1570 | 2025-04-30 | Chinggis Warriors  | W   | 0.556      | -            | -                | -                | -         |     0.80 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           25 |     1614 | 2025-04-27 | B8                 | W   | 0.538      | -            | -                | -                | -         |     3.86 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           24 |     1624 | 2025-04-27 | BetBoom Team       | W   | 0.537      | 0.548        | 0.318 (0.094)    | -                | -         |     4.04 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           23 |     1645 | 2025-04-26 | Partizan Esports   | W   | 0.533      | 0.548        | -                | 0.782 (0.228)    | -         |     0.53 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           22 |     1668 | 2025-04-26 | Wildcard           | W   | 0.529      | -            | -                | -                | -         |     0.75 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           21 |     1679 | 2025-04-25 | B8                 | L   | 0.524      | -            | -                | -                | -         |   -13.09 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           20 |     1697 | 2025-04-24 | BC.Game Esports    | W   | 0.517      | -            | -                | -                | -         |     0.32 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           19 |     1864 | 2025-04-15 | Nemiga Gaming      | W   | 0.458      | -            | -                | -                | -         |     2.22 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           18 |     1886 | 2025-04-14 | ENCE               | W   | 0.451      | -            | -                | -                | -         |     0.77 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           17 |     1895 | 2025-04-14 | PARIVISION         | W   | 0.450      | -            | -                | -                | -         |     0.66 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           16 |     2849 | 2025-03-11 | OG                 | L   | 0.224      | -            | -                | -                | -         |    -6.64 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           15 |     2878 | 2025-03-10 | 9INE               | W   | 0.218      | -            | -                | -                | -         |     0.48 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           14 |     2932 | 2025-03-09 | 9Pandas            | W   | 0.211      | -            | -                | -                | -         |     0.12 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           13 |     2984 | 2025-03-08 | GUN5 Esports       | W   | 0.206      | -            | -                | -                | -         |     0.23 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           12 |     3088 | 2025-03-07 | BASEMENT BOYS      | W   | 0.197      | -            | -                | -                | -         |     0.01 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           11 |     3197 | 2025-03-04 | Nemiga Gaming      | L   | 0.177      | -            | -                | -                | -         |    -4.83 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           10 |     3221 | 2025-03-03 | 3DMAX              | L   | 0.170      | -            | -                | -                | -         |    -1.71 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            9 |     3237 | 2025-03-02 | Ground Zero Gaming | W   | 0.164      | -            | -                | -                | -         |     0.03 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            8 |     3269 | 2025-03-01 | SAW                | L   | 0.157      | -            | -                | -                | -         |    -3.79 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            7 |     3478 | 2025-02-20 | Astralis           | W   | 0.098      | 0.769        | 0.889 (0.067)    | -                | -         |     2.28 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            6 |     3664 | 2025-02-11 | Metizport          | W   | 0.038      | -            | -                | -                | -         |     0.03 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            5 |     3672 | 2025-02-11 | BIG                | W   | 0.037      | -            | -                | -                | -         |     0.12 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            4 |     3692 | 2025-02-10 | 3DMAX              | L   | 0.033      | -            | -                | -                | -         |    -0.32 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            3 |     3701 | 2025-02-10 | Zero Tenacity      | W   | 0.031      | -            | -                | -                | -         |     0.02 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            2 |     3740 | 2025-02-09 | PARIVISION         | L   | 0.023      | -            | -                | -                | -         |    -0.70 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            1 |     3805 | 2025-02-08 | Passion UA         | W   | 0.017      | -            | -                | -                | -         |     0.08 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($177,409.03)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.40) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2025-07-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-06-10 |      0.833 | $10,000.00     | $8,329.17       |
| 2025-05-25 |      0.726 | $47,000.00     | $34,120.69      |
| 2025-05-04 |      0.583 | $135,000.00    | $78,746.88      |
| 2025-04-27 |      0.538 | $75,000.00     | $40,375.00      |
| 2025-03-05 |      0.186 | $4,500.00      | $837.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
