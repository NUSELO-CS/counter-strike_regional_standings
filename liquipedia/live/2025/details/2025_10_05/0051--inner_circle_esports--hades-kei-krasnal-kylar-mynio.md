### Roster Details<br />
Team Name: Inner Circle Esports<br />
Roster: hades, KEi, kRaSnaL, Kylar, mynio<br />
Global Rank: [51](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [33]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  1150.7<br />
<br />
Final Rank Value (1150.7) = Starting Rank Value (1117.9) + Head To Head Adjustments (32.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.616[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.262[<sup>2</sup>](#table1)

The average of these factors is 0.367<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1117.9
- 400 + ( ( 0.367 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1117.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      139 | 2025-09-28 | 9INE             | L   | 1.000      | -            | -                | -                | -         |    -6.64 | hades, KEi, kRaSnaL, Kylar, mynio |
|           13 |      154 | 2025-09-28 | Partizan Esports | W   | 1.000      | 0.354        | 0.050 (0.018)    | 0.984 (0.348)    | 1 (1.000) |    13.08 | hades, KEi, kRaSnaL, Kylar, mynio |
|           12 |      165 | 2025-09-28 | Fnatic           | W   | 1.000      | 0.354        | 0.148 (0.053)    | 0.907 (0.321)    | 1 (1.000) |    26.32 | hades, KEi, kRaSnaL, Kylar, mynio |
|           11 |      188 | 2025-09-27 | BIG              | W   | 1.000      | 0.354        | 0.099 (0.035)    | 0.731 (0.259)    | 1 (1.000) |    22.76 | hades, KEi, kRaSnaL, Kylar, mynio |
|           10 |      208 | 2025-09-27 | Partizan Esports | L   | 1.000      | -            | -                | -                | -         |   -17.36 | hades, KEi, kRaSnaL, Kylar, mynio |
|            9 |      217 | 2025-09-27 | Gentle Mates     | W   | 1.000      | 0.354        | 0.234 (0.083)    | 1.000 (0.354)    | 1 (1.000) |    27.24 | hades, KEi, kRaSnaL, Kylar, mynio |
|            8 |      245 | 2025-09-26 | Team Nemesis     | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.042 (0.015)    | 1 (1.000) |     1.07 | hades, KEi, kRaSnaL, Kylar, mynio |
|            7 |      261 | 2025-09-26 | Tricked Esport   | W   | 1.000      | 0.354        | 0.004 (0.001)    | 0.448 (0.159)    | 1 (1.000) |     8.11 | hades, KEi, kRaSnaL, Kylar, mynio |
|            6 |     1026 | 2025-08-29 | 9INE             | L   | 0.944      | -            | -                | -                | -         |    -4.73 | hades, KEi, kRaSnaL, Kylar, mynio |
|            5 |     1041 | 2025-08-29 | HyperSpirit      | L   | 0.943      | -            | -                | -                | -         |   -26.61 | hades, KEi, kRaSnaL, Kylar, mynio |
|            4 |     1609 | 2025-08-10 | Sashi Esport     | L   | 0.818      | -            | -                | -                | -         |   -14.81 | hades, KEi, kRaSnaL, Kylar, mynio |
|            3 |     3028 | 2025-05-13 | ENCE             | L   | 0.225      | -            | -                | -                | -         |    -0.85 | dycha, KEi, kRaSnaL, Kylar, mynio |
|            2 |     3048 | 2025-05-12 | 9INE             | L   | 0.219      | -            | -                | -                | -         |    -0.72 | dycha, KEi, kRaSnaL, Kylar, mynio |
|            1 |     3076 | 2025-05-11 | ENCE             | W   | 0.212      | 0.435        | 0.178 (0.016)    | 1.000 (0.092)    | 0 (0.000) |     5.93 | dycha, KEi, kRaSnaL, Kylar, mynio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,200.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-28 |      1.000 | $3,200.00      | $3,200.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
