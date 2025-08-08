### Roster Details<br />
Team Name: Aurora Gaming<br />
Roster: jottAAA, MAJ3R, Wicadia, woxic, xfl0ud<br />
Global Rank: [11](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [8]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  1622.9<br />
<br />
Final Rank Value (1622.9) = Starting Rank Value (1671.5) + Head To Head Adjustments (-48.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.814[<sup>1</sup>](#table2)
- Bounty Collected: 0.628[<sup>2</sup>](#table1)
- Opponent Network: 0.440[<sup>2</sup>](#table1)
- LAN Wins: 0.791[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.455[<sup>2</sup>](#table1)

The average of these factors is 0.668<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1671.5
- 400 + ( ( 0.668 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1671.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       72 | 2025-07-29 | FaZe Clan                   | L   | 1.000      | -            | -                | -                | -         |   -13.77 | jottAAA, MAJ3R, Wicadia, woxic, xfl0ud   |
|           43 |       82 | 2025-07-28 | Team Spirit                 | L   | 1.000      | -            | -                | -                | -         |    -4.41 | jottAAA, MAJ3R, Wicadia, woxic, xfl0ud   |
|           42 |      125 | 2025-07-26 | Ninjas in Pyjamas           | W   | 1.000      | 1.000        | 0.196 (0.196)    | 0.842 (0.842)    | 1 (1.000) |     6.81 | jottAAA, MAJ3R, Wicadia, woxic, xfl0ud   |
|           41 |      715 | 2025-06-14 | MOUZ                        | L   | 0.839      | -            | -                | -                | -         |    -5.16 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           40 |      762 | 2025-06-13 | G2 Esports                  | L   | 0.831      | -            | -                | -                | -         |   -14.92 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           39 |      785 | 2025-06-12 | FURIA                       | L   | 0.826      | -            | -                | -                | -         |   -11.44 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           38 |      791 | 2025-06-12 | FaZe Clan                   | W   | 0.825      | 1.000        | 0.493 (0.407)    | 0.593 (0.489)    | 1 (0.825) |    12.45 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           37 |     1030 | 2025-05-23 | The MongolZ                 | L   | 0.692      | -            | -                | -                | -         |    -6.01 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           36 |     1065 | 2025-05-21 | HEROIC                      | W   | 0.680      | 1.000        | 0.406 (0.276)    | 0.646 (0.439)    | 1 (0.680) |     6.86 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           35 |     1072 | 2025-05-21 | Team Liquid                 | W   | 0.678      | 1.000        | 0.247 (0.167)    | -                | 1 (0.678) |     3.11 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           34 |     1089 | 2025-05-20 | NRG                         | W   | 0.673      | 1.000        | -                | 0.634 (0.427)    | 1 (0.673) |     0.94 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           33 |     1116 | 2025-05-19 | HEROIC                      | L   | 0.667      | -            | -                | -                | -         |   -14.82 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           32 |     1152 | 2025-05-18 | FURIA                       | W   | 0.656      | 1.000        | 0.486 (0.319)    | 0.626 (0.410)    | 1 (0.656) |    12.09 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           31 |     1167 | 2025-05-17 | Astralis                    | L   | 0.650      | -            | -                | -                | -         |    -8.42 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           30 |     1193 | 2025-05-15 | The MongolZ                 | W   | 0.642      | 1.000        | 1.000 (0.642)    | 0.528 (0.339)    | 1 (0.642) |    14.84 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           29 |     1239 | 2025-05-14 | ODDIK                       | W   | 0.629      | 1.000        | -                | 0.623 (0.392)    | 1 (0.629) |     0.38 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           28 |     1269 | 2025-05-13 | Natus Vincere               | L   | 0.623      | -            | -                | -                | -         |    -6.79 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           27 |     1296 | 2025-05-12 | Ninjas in Pyjamas           | W   | 0.616      | 1.000        | 0.196 (0.121)    | 0.842 (0.519)    | 1 (0.616) |     4.97 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           26 |     1318 | 2025-05-11 | HOTU                        | W   | 0.610      | 1.000        | -                | 0.313 (0.191)    | 1 (0.610) |     0.31 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           25 |     1355 | 2025-05-09 | BIG                         | L   | 0.602      | -            | -                | -                | -         |   -17.64 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           24 |     1991 | 2025-04-11 | Complexity                  | L   | 0.410      | -            | -                | -                | -         |   -10.83 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           23 |     2040 | 2025-04-09 | Betclic Apogee Esports      | W   | 0.397      | -            | -                | -                | -         |     0.42 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           22 |     2074 | 2025-04-08 | 3DMAX                       | L   | 0.391      | -            | -                | -                | -         |    -6.39 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           21 |     2113 | 2025-04-07 | Legacy                      | W   | 0.383      | 1.000        | -                | 0.917 (0.351)    | -         |     1.44 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           20 |     2126 | 2025-04-06 | PaiN Gaming                 | W   | 0.377      | 1.000        | 0.300 (0.113)    | -                | -         |     3.88 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           19 |     2386 | 2025-03-29 | MOUZ                        | L   | 0.325      | -            | -                | -                | -         |    -1.84 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           18 |     2644 | 2025-03-24 | Natus Vincere               | W   | 0.291      | 0.715        | 0.552 (0.115)    | -                | -         |     6.14 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           17 |     2667 | 2025-03-22 | G2 Esports                  | W   | 0.279      | -            | -                | -                | -         |     3.25 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           16 |     2708 | 2025-03-20 | Team Liquid                 | W   | 0.264      | -            | -                | -                | -         |     0.93 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           15 |     2855 | 2025-03-13 | Team Spirit                 | L   | 0.218      | -            | -                | -                | -         |    -1.04 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           14 |     2888 | 2025-03-11 | Team Falcons                | W   | 0.205      | 1.000        | 1.000 (0.205)    | -                | -         |     3.48 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           13 |     2925 | 2025-03-10 | PaiN Gaming                 | W   | 0.198      | -            | -                | -                | -         |     2.17 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           12 |     2965 | 2025-03-09 | Team Liquid                 | L   | 0.192      | -            | -                | -                | -         |    -5.40 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           11 |     3069 | 2025-03-08 | MIBR                        | W   | 0.183      | -            | -                | -                | -         |     0.55 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|           10 |     3127 | 2025-03-07 | 3DMAX                       | L   | 0.177      | -            | -                | -                | -         |    -2.94 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            9 |     3239 | 2025-03-04 | FlyQuest                    | W   | 0.158      | -            | -                | -                | -         |     0.50 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            8 |     3254 | 2025-03-03 | NRG                         | W   | 0.152      | -            | -                | -                | -         |     0.15 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            7 |     3283 | 2025-03-02 | TYLOO                       | L   | 0.144      | -            | -                | -                | -         |    -1.53 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            6 |     3317 | 2025-03-01 | Mindfreak (Australian team) | W   | 0.136      | -            | -                | -                | -         |     0.01 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            5 |     3509 | 2025-02-21 | Team Falcons                | L   | 0.084      | -            | -                | -                | -         |    -1.26 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            4 |     3587 | 2025-02-17 | 3DMAX                       | W   | 0.058      | -            | -                | -                | -         |     0.86 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            3 |     3606 | 2025-02-16 | BIG                         | W   | 0.049      | -            | -                | -                | -         |     0.11 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            2 |     3620 | 2025-02-15 | FaZe Clan                   | L   | 0.044      | -            | -                | -                | -         |    -0.59 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |
|            1 |     3642 | 2025-02-14 | Imperial Female             | W   | 0.038      | -            | -                | -                | -         |     0.01 | jottAAA, MAJ3R, Wicadia, woxic, XANTARES |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($250,361.69)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.59) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $23,000.00     | $23,000.00      |
| 2025-06-22 |      0.892 | $20,000.00     | $17,850.00      |
| 2025-05-25 |      0.706 | $72,500.00     | $51,172.92      |
| 2025-05-18 |      0.657 | $150,000.00    | $98,562.50      |
| 2025-04-13 |      0.425 | $62,500.00     | $26,536.46      |
| 2025-03-30 |      0.331 | $40,000.00     | $13,255.56      |
| 2025-03-16 |      0.238 | $58,000.00     | $13,815.28      |
| 2025-02-23 |      0.099 | $62,500.00     | $6,168.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
