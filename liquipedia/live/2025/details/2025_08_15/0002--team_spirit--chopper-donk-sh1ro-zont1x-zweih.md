### Roster Details<br />
Team Name: Team Spirit<br />
Roster: chopper, donk, sh1ro, zont1x, zweih<br />
Global Rank: [2](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [2]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  2023.1<br />
<br />
Final Rank Value (2023.1) = Starting Rank Value (1987.9) + Head To Head Adjustments (35.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.809[<sup>2</sup>](#table1)
- Opponent Network: 0.443[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.543[<sup>2</sup>](#table1)

The average of these factors is 0.813<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1987.9
- 400 + ( ( 0.813 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1987.9


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
|           32 |       60 | 2025-08-09 | G2 Esports         | W   | 1.000      | -            | -                | -                | -         |     3.05 | chopper, donk, sh1ro, zont1x, zweih  |
|           31 |       96 | 2025-08-06 | Passion UA         | W   | 1.000      | -            | -                | -                | -         |     0.20 | chopper, donk, sh1ro, zont1x, zweih  |
|           30 |      132 | 2025-08-03 | MOUZ               | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.565 (0.565)    | 1 (1.000) |    12.58 | chopper, donk, sh1ro, zont1x, zweih  |
|           29 |      149 | 2025-08-02 | Natus Vincere      | W   | 1.000      | 1.000        | 0.603 (0.603)    | 0.425 (0.425)    | 1 (1.000) |     8.00 | chopper, donk, sh1ro, zont1x, zweih  |
|           28 |      205 | 2025-07-29 | MOUZ               | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.565 (0.565)    | 1 (1.000) |    12.74 | chopper, donk, sh1ro, zont1x, zweih  |
|           27 |      220 | 2025-07-28 | Aurora Gaming      | W   | 1.000      | 1.000        | 0.603 (0.603)    | 0.415 (0.415)    | 1 (1.000) |     4.10 | chopper, donk, sh1ro, zont1x, zweih  |
|           26 |      245 | 2025-07-27 | HEROIC             | W   | 1.000      | 1.000        | 0.429 (0.429)    | 0.611 (0.611)    | 1 (1.000) |     2.39 | chopper, donk, sh1ro, zont1x, zweih  |
|           25 |      757 | 2025-06-19 | MOUZ               | L   | 0.812      | -            | -                | -                | -         |   -15.29 | chopper, donk, magixx, sh1ro, zont1x |
|           24 |      898 | 2025-06-13 | Natus Vincere      | W   | 0.772      | 1.000        | 0.603 (0.465)    | 0.425 (0.328)    | 1 (0.772) |     5.66 | chopper, donk, magixx, sh1ro, zont1x |
|           23 |      920 | 2025-06-12 | Lynn Vision Gaming | W   | 0.766      | 1.000        | -                | 0.514 (0.394)    | 1 (0.766) |     2.34 | chopper, donk, magixx, sh1ro, zont1x |
|           22 |      931 | 2025-06-12 | PaiN Gaming        | W   | 0.765      | -            | -                | -                | 1 (0.765) |     2.01 | chopper, donk, magixx, sh1ro, zont1x |
|           21 |     1285 | 2025-05-18 | Astralis           | W   | 0.597      | 1.000        | 0.977 (0.584)    | -                | 1 (0.597) |     4.59 | chopper, donk, magixx, sh1ro, zont1x |
|           20 |     1301 | 2025-05-17 | FURIA              | W   | 0.591      | 1.000        | 0.532 (0.314)    | 0.578 (0.342)    | 1 (0.591) |     4.72 | chopper, donk, magixx, sh1ro, zont1x |
|           19 |     1319 | 2025-05-16 | Ninjas in Pyjamas  | W   | 0.585      | 1.000        | -                | 0.692 (0.405)    | -         |     1.33 | chopper, donk, magixx, sh1ro, zont1x |
|           18 |     1425 | 2025-05-12 | Astralis           | W   | 0.558      | 1.000        | 0.977 (0.545)    | -                | -         |     4.21 | chopper, donk, magixx, sh1ro, zont1x |
|           17 |     1457 | 2025-05-11 | Ninjas in Pyjamas  | W   | 0.550      | 1.000        | -                | 0.692 (0.381)    | -         |     1.34 | chopper, donk, magixx, sh1ro, zont1x |
|           16 |     1481 | 2025-05-10 | GamerLegion        | W   | 0.544      | 1.000        | 0.480 (0.261)    | -                | -         |     2.08 | chopper, donk, magixx, sh1ro, zont1x |
|           15 |     1664 | 2025-05-03 | Team Vitality      | L   | 0.499      | -            | -                | -                | -         |    -6.47 | chopper, donk, magixx, sh1ro, zont1x |
|           14 |     1686 | 2025-05-02 | Wildcard           | W   | 0.492      | -            | -                | -                | -         |     0.08 | chopper, donk, magixx, sh1ro, zont1x |
|           13 |     1701 | 2025-05-01 | Team Falcons       | L   | 0.486      | -            | -                | -                | -         |   -12.31 | chopper, donk, magixx, sh1ro, zont1x |
|           12 |     1752 | 2025-04-30 | FlyQuest           | W   | 0.476      | -            | -                | -                | -         |     0.45 | chopper, donk, magixx, sh1ro, zont1x |
|           11 |     2509 | 2025-03-29 | Team Vitality      | L   | 0.266      | -            | -                | -                | -         |    -3.91 | chopper, donk, magixx, sh1ro, zont1x |
|           10 |     2579 | 2025-03-28 | Natus Vincere      | W   | 0.259      | -            | -                | -                | -         |     2.12 | chopper, donk, magixx, sh1ro, zont1x |
|            9 |     2785 | 2025-03-24 | Virtus.pro         | W   | 0.231      | -            | -                | -                | -         |     0.56 | chopper, donk, magixx, sh1ro, zont1x |
|            8 |     2793 | 2025-03-23 | FaZe Clan          | W   | 0.225      | -            | -                | -                | -         |     1.71 | chopper, donk, magixx, sh1ro, zont1x |
|            7 |     2824 | 2025-03-21 | MOUZ               | L   | 0.211      | -            | -                | -                | -         |    -3.60 | chopper, donk, magixx, sh1ro, zont1x |
|            6 |     2894 | 2025-03-19 | The Huns Esports   | W   | 0.197      | -            | -                | -                | -         |     0.02 | chopper, donk, magixx, sh1ro, zont1x |
|            5 |     2958 | 2025-03-15 | MOUZ               | L   | 0.171      | -            | -                | -                | -         |    -2.95 | chopper, donk, magixx, sh1ro, zont1x |
|            4 |     2993 | 2025-03-13 | Aurora Gaming      | W   | 0.158      | -            | -                | -                | -         |     0.64 | chopper, donk, magixx, sh1ro, zont1x |
|            3 |     3121 | 2025-03-09 | The MongolZ        | W   | 0.131      | -            | -                | -                | -         |     1.31 | chopper, donk, magixx, sh1ro, zont1x |
|            2 |     3169 | 2025-03-08 | SAW                | W   | 0.125      | -            | -                | -                | -         |     0.22 | chopper, donk, magixx, sh1ro, zont1x |
|            1 |     3273 | 2025-03-07 | TYLOO              | W   | 0.117      | -            | -                | -                | -         |     1.29 | chopper, donk, magixx, sh1ro, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($781,621.18)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $460,000.00    | $460,000.00     |
| 2025-06-22 |      0.833 | $45,000.00     | $37,465.63      |
| 2025-05-18 |      0.597 | $400,000.00    | $238,861.11     |
| 2025-05-04 |      0.504 | $40,000.00     | $20,175.00      |
| 2025-03-30 |      0.271 | $40,000.00     | $10,858.33      |
| 2025-03-16 |      0.178 | $80,000.00     | $14,261.11      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
