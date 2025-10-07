### Roster Details<br />
Team Name: Team Spirit<br />
Roster: chopper, donk, sh1ro, zont1x, zweih<br />
Global Rank: [4](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [2]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  1845.4<br />
<br />
Final Rank Value (1845.4) = Starting Rank Value (1785.5) + Head To Head Adjustments (59.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.798[<sup>2</sup>](#table1)
- Opponent Network: 0.301[<sup>2</sup>](#table1)
- LAN Wins: 0.735[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.433[<sup>2</sup>](#table1)

The average of these factors is 0.709<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1785.5
- 400 + ( ( 0.709 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1785.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      945 | 2025-09-01 | G2 Esports         | L   | 0.966      | -            | -                | -                | -         |   -16.66 | chopper, donk, sh1ro, zont1x, zweih  |
|           28 |      960 | 2025-08-31 | Team Liquid        | W   | 0.958      | 0.561        | 0.547 (0.294)    | 0.485 (0.260)    | -         |     7.48 | chopper, donk, sh1ro, zont1x, zweih  |
|           27 |      979 | 2025-08-30 | FURIA              | L   | 0.953      | -            | -                | -                | -         |   -12.95 | chopper, donk, sh1ro, zont1x, zweih  |
|           26 |     1059 | 2025-08-28 | FlyQuest           | W   | 0.938      | -            | -                | -                | -         |     0.91 | chopper, donk, sh1ro, zont1x, zweih  |
|           25 |     1217 | 2025-08-20 | HEROIC             | L   | 0.886      | -            | -                | -                | -         |   -25.95 | chopper, donk, sh1ro, zont1x, zweih  |
|           24 |     1292 | 2025-08-17 | The MongolZ        | W   | 0.864      | 0.769        | 1.000 (0.664)    | 0.494 (0.328)    | 1 (0.864) |    16.27 | chopper, donk, sh1ro, zont1x, zweih  |
|           23 |     1333 | 2025-08-16 | MOUZ               | W   | 0.858      | 0.769        | 0.981 (0.647)    | 0.500 (0.330)    | 1 (0.858) |    12.13 | chopper, donk, sh1ro, zont1x, zweih  |
|           22 |     1361 | 2025-08-15 | Virtus.pro         | W   | 0.852      | -            | -                | -                | 1 (0.852) |     2.15 | chopper, donk, sh1ro, zont1x, zweih  |
|           21 |     1626 | 2025-08-09 | G2 Esports         | W   | 0.812      | 0.624        | 0.782 (0.396)    | 0.602 (0.305)    | -         |    12.26 | chopper, donk, sh1ro, zont1x, zweih  |
|           20 |     1676 | 2025-08-06 | Passion UA         | W   | 0.792      | 0.624        | -                | 0.511 (0.252)    | -         |     0.31 | chopper, donk, sh1ro, zont1x, zweih  |
|           19 |     1712 | 2025-08-03 | MOUZ               | W   | 0.771      | 1.000        | 0.981 (0.757)    | 0.500 (0.386)    | 1 (0.771) |    11.69 | chopper, donk, sh1ro, zont1x, zweih  |
|           18 |     1730 | 2025-08-02 | Natus Vincere      | W   | 0.764      | 1.000        | 0.936 (0.716)    | 0.351 (0.268)    | 1 (0.764) |    11.52 | chopper, donk, sh1ro, zont1x, zweih  |
|           17 |     1789 | 2025-07-29 | MOUZ               | W   | 0.738      | 1.000        | 0.981 (0.724)    | 0.500 (0.369)    | 1 (0.738) |    11.34 | chopper, donk, sh1ro, zont1x, zweih  |
|           16 |     1804 | 2025-07-28 | Aurora Gaming      | W   | 0.731      | 1.000        | 1.000 (0.731)    | 0.357 (0.261)    | 1 (0.731) |    10.80 | chopper, donk, sh1ro, zont1x, zweih  |
|           15 |     1832 | 2025-07-27 | HEROIC             | W   | 0.724      | 1.000        | -                | 0.347 (0.251)    | 1 (0.724) |     2.14 | chopper, donk, sh1ro, zont1x, zweih  |
|           14 |     2365 | 2025-06-19 | MOUZ               | L   | 0.473      | -            | -                | -                | -         |    -7.69 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     2510 | 2025-06-13 | Natus Vincere      | W   | 0.432      | 1.000        | 0.936 (0.404)    | -                | 1 (0.432) |     6.72 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     2533 | 2025-06-12 | Lynn Vision Gaming | W   | 0.426      | -            | -                | -                | 1 (0.426) |     1.10 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     2544 | 2025-06-12 | PaiN Gaming        | W   | 0.425      | -            | -                | -                | -         |     2.24 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     2909 | 2025-05-18 | Astralis           | W   | 0.257      | -            | -                | -                | -         |     3.65 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     2925 | 2025-05-17 | FURIA              | W   | 0.251      | 1.000        | 1.000 (0.251)    | -                | -         |     6.02 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     2944 | 2025-05-16 | Ninjas in Pyjamas  | W   | 0.245      | -            | -                | -                | -         |     2.15 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     3057 | 2025-05-12 | Astralis           | W   | 0.218      | -            | -                | -                | -         |     3.14 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     3089 | 2025-05-11 | Ninjas in Pyjamas  | W   | 0.210      | -            | -                | -                | -         |     1.91 | chopper, donk, magixx, sh1ro, zont1x |
|            5 |     3113 | 2025-05-10 | GamerLegion        | W   | 0.204      | -            | -                | -                | -         |     1.32 | chopper, donk, magixx, sh1ro, zont1x |
|            4 |     3296 | 2025-05-03 | Team Vitality      | L   | 0.159      | -            | -                | -                | -         |    -2.24 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     3318 | 2025-05-02 | Wildcard           | W   | 0.152      | -            | -                | -                | -         |     0.17 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     3333 | 2025-05-01 | Team Falcons       | L   | 0.146      | -            | -                | -                | -         |    -2.15 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     3385 | 2025-04-30 | FlyQuest           | W   | 0.136      | -            | -                | -                | -         |     0.17 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($763,133.33)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-01 |      0.966 | $10,000.00     | $9,656.94       |
| 2025-08-24 |      0.910 | $20,000.00     | $18,204.17      |
| 2025-08-17 |      0.864 | $287,812.50    | $248,797.92     |
| 2025-08-03 |      0.771 | $460,000.00    | $354,838.89     |
| 2025-06-22 |      0.493 | $45,000.00     | $22,168.75      |
| 2025-05-18 |      0.257 | $400,000.00    | $102,888.89     |
| 2025-05-04 |      0.164 | $40,000.00     | $6,577.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
