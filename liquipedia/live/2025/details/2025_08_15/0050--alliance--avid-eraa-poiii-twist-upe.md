### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, eraa, poiii, twist, upE<br />
Global Rank: [50](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [34]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  1017.6<br />
<br />
Final Rank Value (1017.6) = Starting Rank Value (1207.8) + Head To Head Adjustments (-190.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.443[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.755[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.562[<sup>2</sup>](#table1)

The average of these factors is 0.414<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1207.8
- 400 + ( ( 0.414 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1207.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |       20 | 2025-08-12 | SINNERS Esports     | L   | 1.000      | -            | -                | -                | -         |   -20.30 | avid, eraa, poiii, twist, upE   |
|           51 |      272 | 2025-07-26 | KOLESIE             | L   | 1.000      | -            | -                | -                | -         |   -11.33 | avid, eraa, poiii, twist, upE   |
|           50 |      282 | 2025-07-25 | 1win Team           | L   | 1.000      | -            | -                | -                | -         |   -26.03 | avid, eraa, poiii, twist, upE   |
|           49 |      329 | 2025-07-20 | Iberian Soul        | L   | 1.000      | -            | -                | -                | -         |    -7.86 | avid, eraa, poiii, twist, upE   |
|           48 |      333 | 2025-07-19 | NXT                 | W   | 1.000      | 0.300        | -                | 0.263 (0.079)    | 1 (1.000) |     5.53 | avid, eraa, poiii, twist, upE   |
|           47 |      342 | 2025-07-19 | FUT Esports         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.80 | avid, eraa, poiii, twist, upE   |
|           46 |      349 | 2025-07-19 | TPuDCATb TPu        | L   | 1.000      | -            | -                | -                | -         |   -24.95 | avid, eraa, poiii, twist, upE   |
|           45 |      352 | 2025-07-19 | Iberian Soul        | L   | 1.000      | -            | -                | -                | -         |    -7.94 | avid, eraa, poiii, twist, upE   |
|           44 |      377 | 2025-07-18 | NXT                 | W   | 1.000      | 0.300        | -                | 0.263 (0.079)    | 1 (1.000) |     4.44 | avid, eraa, poiii, twist, upE   |
|           43 |      450 | 2025-07-15 | AMKAL ESPORTS       | W   | 0.984      | 0.435        | 0.005 (0.002)    | 0.169 (0.072)    | 0 (0.000) |     3.04 | avid, eraa, poiii, twist, upE   |
|           42 |      466 | 2025-07-14 | FUT Esports         | L   | 0.979      | -            | -                | -                | -         |   -11.55 | avid, eraa, poiii, twist, upE   |
|           41 |      475 | 2025-07-14 | Hesta               | W   | 0.977      | -            | -                | -                | 0 (0.000) |     1.59 | avid, eraa, poiii, twist, upE   |
|           40 |      632 | 2025-07-07 | RUBY                | W   | 0.930      | 0.435        | 0.026 (0.011)    | 0.777 (0.314)    | -         |     5.86 | avid, eraa, poiii, twist, upE   |
|           39 |      838 | 2025-06-15 | Passion UA          | L   | 0.783      | -            | -                | -                | -         |   -10.75 | avid, eraa, PlesseN, twist, upE |
|           38 |      859 | 2025-06-14 | 9INE                | L   | 0.778      | -            | -                | -                | -         |   -12.68 | avid, eraa, PlesseN, twist, upE |
|           37 |      875 | 2025-06-14 | TEAM NEXT LEVEL     | W   | 0.776      | 0.360        | 0.143 (0.040)    | 1.000 (0.279)    | 1 (0.776) |    14.85 | avid, eraa, PlesseN, twist, upE |
|           36 |      888 | 2025-06-13 | Tricked Esport      | W   | 0.772      | 0.360        | 0.015 (0.004)    | 0.298 (0.083)    | 1 (0.772) |     8.02 | avid, eraa, PlesseN, twist, upE |
|           35 |     1080 | 2025-05-31 | Megoshort           | W   | 0.685      | -            | -                | -                | -         |     0.84 | avid, eraa, PlesseN, twist, upE |
|           34 |     1156 | 2025-05-24 | ECSTATIC            | L   | 0.638      | -            | -                | -                | -         |    -5.81 | avid, eraa, PlesseN, twist, upE |
|           33 |     1159 | 2025-05-24 | Johnny Speeds       | W   | 0.637      | 0.500        | 0.026 (0.008)    | 0.329 (0.105)    | 1 (0.637) |     6.55 | avid, eraa, PlesseN, twist, upE |
|           32 |     1174 | 2025-05-23 | ECSTATIC            | L   | 0.631      | -            | -                | -                | -         |    -5.87 | avid, eraa, PlesseN, twist, upE |
|           31 |     1222 | 2025-05-21 | ENCE Academy        | W   | 0.617      | 0.500        | 0.022 (0.007)    | 0.170 (0.052)    | 1 (0.617) |     2.88 | avid, eraa, PlesseN, twist, upE |
|           30 |     1243 | 2025-05-20 | En av de lette      | W   | 0.611      | -            | -                | -                | 1 (0.611) |     0.39 | avid, eraa, PlesseN, twist, upE |
|           29 |     1269 | 2025-05-19 | Ex-Sabre Esports    | L   | 0.604      | -            | -                | -                | -         |   -16.51 | avid, eraa, PlesseN, twist, upE |
|           28 |     1299 | 2025-05-17 | Ex-Permitta Esports | W   | 0.591      | -            | -                | -                | -         |     0.35 | avid, eraa, PlesseN, twist, upE |
|           27 |     1327 | 2025-05-16 | Fisher College      | W   | 0.583      | -            | -                | -                | -         |     1.68 | avid, eraa, PlesseN, twist, upE |
|           26 |     1480 | 2025-05-10 | Metizport           | W   | 0.544      | 0.435        | 0.027 (0.006)    | 0.426 (0.101)    | -         |     4.63 | avid, eraa, PlesseN, twist, upE |
|           25 |     1635 | 2025-05-04 | Megoshort           | W   | 0.505      | -            | -                | -                | -         |     0.59 | avid, eraa, PlesseN, twist, upE |
|           24 |     1642 | 2025-05-04 | Eternal Fire        | L   | 0.504      | -            | -                | -                | -         |   -13.58 | avid, eraa, PlesseN, twist, upE |
|           23 |     1663 | 2025-05-03 | Sashi Esport        | L   | 0.499      | -            | -                | -                | -         |   -11.17 | avid, eraa, PlesseN, twist, upE |
|           22 |     1666 | 2025-05-03 | Johnny Speeds       | L   | 0.498      | -            | -                | -                | -         |   -11.60 | avid, eraa, PlesseN, twist, upE |
|           21 |     1672 | 2025-05-03 | Megoshort           | W   | 0.498      | -            | -                | -                | -         |     0.46 | avid, eraa, PlesseN, twist, upE |
|           20 |     1690 | 2025-05-02 | CYBERSHOKE Esports  | L   | 0.491      | -            | -                | -                | -         |   -12.46 | avid, eraa, PlesseN, twist, upE |
|           19 |     1698 | 2025-05-02 | SINNERS Esports     | W   | 0.489      | 0.384        | 0.041 (0.008)    | 0.558 (0.105)    | -         |     3.38 | avid, eraa, PlesseN, twist, upE |
|           18 |     1710 | 2025-05-01 | TPuDCATb TPu        | L   | 0.484      | -            | -                | -                | -         |   -12.93 | avid, eraa, PlesseN, twist, upE |
|           17 |     1749 | 2025-04-30 | Portuguese Family   | W   | 0.477      | -            | -                | -                | -         |     0.44 | avid, eraa, PlesseN, twist, upE |
|           16 |     2099 | 2025-04-13 | 9INE                | L   | 0.363      | -            | -                | -                | -         |    -6.63 | avid, eraa, PlesseN, twist, upE |
|           15 |     2474 | 2025-03-30 | Zero Tenacity       | L   | 0.270      | -            | -                | -                | -         |    -7.08 | avid, eraa, PlesseN, twist, upE |
|           14 |     2808 | 2025-03-22 | Fire Flux Esports   | L   | 0.218      | -            | -                | -                | -         |    -6.17 | avid, eraa, PlesseN, twist, upE |
|           13 |     2814 | 2025-03-22 | Sashi Esport        | L   | 0.217      | -            | -                | -                | -         |    -5.15 | avid, eraa, PlesseN, twist, upE |
|           12 |     2845 | 2025-03-20 | GUN5 Esports        | L   | 0.205      | -            | -                | -                | -         |    -4.98 | avid, eraa, PlesseN, twist, upE |
|           11 |     2935 | 2025-03-17 | Monte               | W   | 0.184      | -            | -                | -                | -         |     0.39 | avid, eraa, PlesseN, twist, upE |
|           10 |     2956 | 2025-03-15 | FUT Esports         | L   | 0.172      | -            | -                | -                | -         |    -3.73 | avid, eraa, PlesseN, twist, upE |
|            9 |     2990 | 2025-03-13 | Sashi Esport        | L   | 0.158      | -            | -                | -                | -         |    -3.86 | avid, eraa, PlesseN, twist, upE |
|            8 |     3018 | 2025-03-11 | Zero Tenacity       | W   | 0.146      | -            | -                | -                | -         |     0.69 | avid, eraa, PlesseN, twist, upE |
|            7 |     3128 | 2025-03-09 | BC.Game Esports     | W   | 0.130      | 0.362        | 0.035 (0.002)    | -                | -         |     0.43 | avid, eraa, PlesseN, twist, upE |
|            6 |     3447 | 2025-03-01 | Iberian Soul        | L   | 0.078      | -            | -                | -                | -         |    -0.48 | avid, eraa, PlesseN, twist, upE |
|            5 |     3485 | 2025-02-27 | PARIVISION          | W   | 0.065      | 0.384        | 0.160 (0.004)    | -                | -         |     0.60 | avid, eraa, PlesseN, twist, upE |
|            4 |     3540 | 2025-02-26 | Rhyno Esports       | W   | 0.056      | -            | -                | -                | -         |     0.17 | avid, eraa, PlesseN, twist, upE |
|            3 |     3615 | 2025-02-23 | Iberian Soul        | L   | 0.037      | -            | -                | -                | -         |    -0.23 | avid, eraa, PlesseN, twist, upE |
|            2 |     3656 | 2025-02-20 | 9INE                | L   | 0.019      | -            | -                | -                | -         |    -0.38 | avid, eraa, PlesseN, twist, upE |
|            1 |     3682 | 2025-02-19 | ECSTATIC            | W   | 0.012      | -            | -                | -                | -         |     0.23 | avid, eraa, PlesseN, twist, upE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,409.55)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-22 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-07-20 |      1.000 | $502.89        | $502.89         |
| 2025-06-15 |      0.786 | $659.00        | $517.79         |
| 2025-05-31 |      0.685 | $2,085.20      | $1,428.80       |
| 2025-05-24 |      0.638 | $25,000.00     | $15,960.07      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
