### Roster Details<br />
Team Name: HEROIC<br />
Roster: gr1ks, LNZ, nilo, tN1R, yxngstxr<br />
Global Rank: [18](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  1504.9<br />
<br />
Final Rank Value (1504.9) = Starting Rank Value (1589.5) + Head To Head Adjustments (-84.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.718[<sup>1</sup>](#table2)
- Bounty Collected: 0.591[<sup>2</sup>](#table1)
- Opponent Network: 0.310[<sup>2</sup>](#table1)
- LAN Wins: 0.881[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.646[<sup>2</sup>](#table1)

The average of these factors is 0.625<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1589.5
- 400 + ( ( 0.625 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1589.5


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
|           47 |       85 | 2025-07-28 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |   -18.56 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           46 |      107 | 2025-07-27 | Team Spirit        | L   | 1.000      | -            | -                | -                | -         |    -2.47 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           45 |      143 | 2025-07-25 | Virtus.pro         | W   | 1.000      | 0.769        | 0.196 (0.150)    | 0.411 (0.316)    | 1 (1.000) |    15.65 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           44 |      155 | 2025-07-24 | MIBR               | W   | 1.000      | 0.769        | 0.197 (0.151)    | -                | 1 (1.000) |     9.96 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           43 |      168 | 2025-07-23 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |   -19.89 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           42 |      288 | 2025-07-16 | BetBoom Team       | L   | 1.000      | -            | -                | -                | -         |   -24.24 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           41 |      304 | 2025-07-15 | BIG                | L   | 1.000      | -            | -                | -                | -         |   -28.26 | gr1ks, LNZ, nilo, tN1R, yxngstxr      |
|           40 |      823 | 2025-06-10 | Nemiga Gaming      | L   | 0.811      | -            | -                | -                | -         |   -21.77 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           39 |      838 | 2025-06-09 | TYLOO              | W   | 0.805      | 0.769        | 0.889 (0.550)    | 0.731 (0.452)    | 1 (0.805) |    16.16 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           38 |      851 | 2025-06-08 | B8                 | L   | 0.798      | -            | -                | -                | -         |   -19.40 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           37 |      863 | 2025-06-07 | BetBoom Team       | W   | 0.793      | 0.769        | 0.326 (0.199)    | 0.625 (0.381)    | 1 (0.793) |     4.71 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           36 |      875 | 2025-06-07 | FaZe Clan          | L   | 0.791      | -            | -                | -                | -         |    -8.80 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           35 |      906 | 2025-06-04 | FlyQuest           | W   | 0.772      | 0.624        | 0.090 (0.043)    | 0.485 (0.234)    | 1 (0.772) |     5.29 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           34 |      922 | 2025-06-03 | NRG                | W   | 0.766      | 0.624        | -                | 0.634 (0.303)    | 1 (0.766) |     2.17 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           33 |      930 | 2025-06-03 | Chinggis Warriors  | W   | 0.765      | 0.624        | -                | 0.592 (0.282)    | 1 (0.765) |     1.04 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           32 |     1065 | 2025-05-21 | Aurora Gaming      | L   | 0.680      | -            | -                | -                | -         |    -8.74 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           31 |     1073 | 2025-05-21 | FaZe Clan          | W   | 0.678      | 1.000        | 0.493 (0.334)    | 0.593 (0.402)    | 1 (0.678) |    14.13 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           30 |     1090 | 2025-05-20 | Team Falcons       | L   | 0.673      | -            | -                | -                | -         |    -5.85 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           29 |     1116 | 2025-05-19 | Aurora Gaming      | W   | 0.667      | 1.000        | 0.591 (0.394)    | 0.455 (0.304)    | 1 (0.667) |    12.85 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           28 |     1506 | 2025-05-04 | BIG                | W   | 0.563      | 0.624        | 0.182 (0.064)    | -                | 1 (0.563) |     1.87 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           27 |     1527 | 2025-05-03 | Chinggis Warriors  | W   | 0.558      | 0.624        | -                | 0.592 (0.206)    | -         |     0.84 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           26 |     1575 | 2025-05-01 | JiJieHao           | W   | 0.544      | -            | -                | -                | -         |     0.75 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           25 |     1615 | 2025-04-30 | Chinggis Warriors  | W   | 0.536      | -            | -                | -                | -         |     0.77 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           24 |     1659 | 2025-04-27 | B8                 | W   | 0.518      | -            | -                | -                | -         |     3.63 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           23 |     1669 | 2025-04-27 | BetBoom Team       | W   | 0.517      | 0.548        | 0.326 (0.092)    | -                | -         |     3.97 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           22 |     1690 | 2025-04-26 | Partizan Esports   | W   | 0.513      | 0.548        | -                | 0.780 (0.219)    | -         |     0.51 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           21 |     1713 | 2025-04-26 | Wildcard           | W   | 0.509      | -            | -                | -                | -         |     0.70 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           20 |     1724 | 2025-04-25 | B8                 | L   | 0.504      | -            | -                | -                | -         |   -12.66 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           19 |     1742 | 2025-04-24 | BC.Game Esports    | W   | 0.497      | -            | -                | -                | -         |     0.29 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           18 |     1909 | 2025-04-15 | Nemiga Gaming      | W   | 0.438      | -            | -                | -                | -         |     2.09 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           17 |     1931 | 2025-04-14 | ENCE               | W   | 0.431      | -            | -                | -                | -         |     0.72 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           16 |     1940 | 2025-04-14 | PARIVISION         | W   | 0.430      | -            | -                | -                | -         |     0.62 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           15 |     2894 | 2025-03-11 | OG                 | L   | 0.204      | -            | -                | -                | -         |    -6.05 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           14 |     2923 | 2025-03-10 | 9INE               | W   | 0.198      | -            | -                | -                | -         |     0.43 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           13 |     2977 | 2025-03-09 | 9Pandas            | W   | 0.191      | -            | -                | -                | -         |     0.10 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           12 |     3029 | 2025-03-08 | GUN5 Esports       | W   | 0.185      | -            | -                | -                | -         |     0.21 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           11 |     3133 | 2025-03-07 | BASEMENT BOYS      | W   | 0.177      | -            | -                | -                | -         |     0.01 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|           10 |     3242 | 2025-03-04 | Nemiga Gaming      | L   | 0.157      | -            | -                | -                | -         |    -4.29 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            9 |     3266 | 2025-03-03 | 3DMAX              | L   | 0.150      | -            | -                | -                | -         |    -1.49 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            8 |     3282 | 2025-03-02 | Ground Zero Gaming | W   | 0.144      | -            | -                | -                | -         |     0.03 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            7 |     3314 | 2025-03-01 | SAW                | L   | 0.137      | -            | -                | -                | -         |    -3.29 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            6 |     3523 | 2025-02-20 | Astralis           | W   | 0.077      | 0.769        | 0.903 (0.054)    | -                | -         |     1.84 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            5 |     3709 | 2025-02-11 | Metizport          | W   | 0.018      | -            | -                | -                | -         |     0.01 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            4 |     3717 | 2025-02-11 | BIG                | W   | 0.017      | -            | -                | -                | -         |     0.05 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            3 |     3737 | 2025-02-10 | 3DMAX              | L   | 0.012      | -            | -                | -                | -         |    -0.12 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            2 |     3746 | 2025-02-10 | Zero Tenacity      | W   | 0.011      | -            | -                | -                | -         |     0.01 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |
|            1 |     3785 | 2025-02-09 | PARIVISION         | L   | 0.003      | -            | -                | -                | -         |    -0.10 | LNZ, SunPayus, tN1R, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($171,941.32)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2025-07-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-06-10 |      0.813 | $10,000.00     | $8,127.78       |
| 2025-05-25 |      0.706 | $47,000.00     | $33,174.17      |
| 2025-05-04 |      0.563 | $135,000.00    | $76,028.13      |
| 2025-04-27 |      0.518 | $75,000.00     | $38,864.58      |
| 2025-03-05 |      0.166 | $4,500.00      | $746.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
