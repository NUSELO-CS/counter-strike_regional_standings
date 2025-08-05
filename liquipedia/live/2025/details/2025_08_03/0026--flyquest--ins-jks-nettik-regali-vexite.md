### Roster Details<br />
Team Name: FlyQuest<br />
Roster: INS, jks, nettik, regali, Vexite<br />
Global Rank: [26](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_03.md)<br />
Regional Rank: [4]( ../../standings_asia_2025_08_03.md)<br />
<br />
Final Rank Value:  1343.5<br />
<br />
Final Rank Value (1343.5) = Starting Rank Value (1337.0) + Head To Head Adjustments (6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.486[<sup>1</sup>](#table2)
- Bounty Collected: 0.425[<sup>2</sup>](#table1)
- Opponent Network: 0.165[<sup>2</sup>](#table1)
- LAN Wins: 0.889[<sup>2</sup>](#table1)

The average of these factors is 0.491<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1337.0
- 400 + ( ( 0.491 - 0.000 ) / ( 0.839 - 0.000 ) ) * 1600 = 1337.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |        0 | 2025-08-03 | The Huns Esports        | W   | 1.000      | 0.143        | 0.035 (0.005)    | 0.303 (0.043)    | 1 (1.000) |     4.02 | INS, jks, nettik, regali, Vexite   |
|           32 |        6 | 2025-08-02 | Eruption                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.16 | INS, jks, nettik, regali, Vexite   |
|           31 |       30 | 2025-08-01 | Alter Ego               | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.18 | INS, jks, nettik, regali, Vexite   |
|           30 |      104 | 2025-07-25 | Team Liquid             | L   | 1.000      | -            | -                | -                | -         |   -15.25 | INS, jks, nettik, regali, Vexite   |
|           29 |      116 | 2025-07-24 | B8                      | W   | 1.000      | 0.769        | 0.120 (0.093)    | 0.632 (0.486)    | 1 (1.000) |    16.10 | INS, jks, nettik, regali, Vexite   |
|           28 |      128 | 2025-07-23 | FURIA                   | L   | 1.000      | -            | -                | -                | -         |    -4.54 | INS, jks, nettik, regali, Vexite   |
|           27 |      838 | 2025-06-06 | TYLOO                   | L   | 0.806      | -            | -                | -                | -         |    -3.08 | INS, Liazz, nettik, regali, Vexite |
|           26 |      845 | 2025-06-05 | Nemiga Gaming           | L   | 0.800      | -            | -                | -                | -         |   -17.64 | INS, Liazz, nettik, regali, Vexite |
|           25 |      861 | 2025-06-04 | HEROIC                  | L   | 0.792      | -            | -                | -                | -         |    -5.67 | INS, Liazz, nettik, regali, Vexite |
|           24 |      874 | 2025-06-03 | BetBoom Team            | W   | 0.787      | 0.525        | 0.301 (0.124)    | 0.631 (0.261)    | 1 (0.787) |    10.91 | INS, Liazz, nettik, regali, Vexite |
|           23 |      878 | 2025-06-03 | Fluxo                   | W   | 0.786      | 0.525        | 0.041 (0.017)    | 0.420 (0.173)    | 1 (0.786) |     3.86 | INS, Liazz, nettik, regali, Vexite |
|           22 |     1147 | 2025-05-15 | JiJieHao                | W   | 0.662      | 0.636        | 0.052 (0.022)    | 0.254 (0.107)    | 1 (0.662) |     3.35 | INS, Liazz, nettik, regali, Vexite |
|           21 |     1276 | 2025-05-11 | TYLOO                   | L   | 0.630      | -            | -                | -                | -         |    -2.11 | INS, Liazz, nettik, regali, Vexite |
|           20 |     1304 | 2025-05-10 | Rare Atom               | W   | 0.623      | 0.636        | 0.066 (0.026)    | 0.468 (0.186)    | 1 (0.623) |     5.05 | INS, Liazz, nettik, regali, Vexite |
|           19 |     1328 | 2025-05-08 | TYLOO                   | L   | 0.616      | -            | -                | -                | -         |    -2.05 | INS, Liazz, nettik, regali, Vexite |
|           18 |     1383 | 2025-05-07 | Nomads (Mongolian team) | W   | 0.603      | 0.636        | 0.014 (0.005)    | 0.153 (0.059)    | 1 (0.603) |     0.71 | INS, Liazz, nettik, regali, Vexite |
|           17 |     1523 | 2025-05-01 | FaZe Clan               | L   | 0.565      | -            | -                | -                | -         |    -2.10 | INS, Liazz, nettik, regali, Vexite |
|           16 |     1569 | 2025-04-30 | Team Spirit             | L   | 0.556      | -            | -                | -                | -         |    -0.55 | INS, Liazz, nettik, regali, Vexite |
|           15 |     1637 | 2025-04-26 | Team United Kingdom     | W   | 0.535      | -            | -                | -                | 1 (0.535) |     0.08 | INS, Liazz, nettik, SPUNJ, Vexite  |
|           14 |     1711 | 2025-04-22 | Natus Vincere           | L   | 0.508      | -            | -                | -                | -         |    -1.40 | INS, Liazz, nettik, regali, Vexite |
|           13 |     1724 | 2025-04-21 | Virtus.pro              | W   | 0.502      | 1.000        | 0.159 (0.080)    | 0.414 (0.208)    | -         |    11.45 | INS, Liazz, nettik, regali, Vexite |
|           12 |     1736 | 2025-04-21 | Team Vitality           | L   | 0.496      | -            | -                | -                | -         |    -0.33 | INS, Liazz, nettik, regali, Vexite |
|           11 |     1828 | 2025-04-16 | SemperFi Esports        | W   | 0.469      | -            | -                | -                | -         |     0.76 | INS, Liazz, nettik, regali, Vexite |
|           10 |     1854 | 2025-04-15 | SemperFi Esports        | W   | 0.461      | -            | -                | -                | -         |     0.74 | INS, Liazz, nettik, regali, Vexite |
|            9 |     1877 | 2025-04-14 | Rooster                 | W   | 0.455      | -            | -                | -                | -         |     0.46 | INS, Liazz, nettik, regali, Vexite |
|            8 |     3176 | 2025-03-05 | TYLOO                   | L   | 0.184      | -            | -                | -                | -         |    -0.40 | dexter, INS, Liazz, regali, Vexite |
|            7 |     3194 | 2025-03-04 | Aurora Gaming           | L   | 0.178      | -            | -                | -                | -         |    -0.78 | dexter, INS, Liazz, regali, Vexite |
|            6 |     3208 | 2025-03-03 | PaiN Gaming             | W   | 0.172      | 0.769        | 0.301 (0.040)    | 0.368 (0.049)    | -         |     4.41 | dexter, INS, Liazz, regali, Vexite |
|            5 |     3241 | 2025-03-02 | Lynn Vision Gaming      | W   | 0.163      | 0.769        | 0.233 (0.029)    | 0.639 (0.080)    | -         |     4.07 | dexter, INS, Liazz, regali, Vexite |
|            4 |     3271 | 2025-03-01 | M80                     | L   | 0.157      | -            | -                | -                | -         |    -3.38 | dexter, INS, Liazz, regali, Vexite |
|            3 |     3554 | 2025-02-16 | SAW                     | L   | 0.071      | -            | -                | -                | -         |    -0.97 | dexter, INS, Liazz, regali, Vexite |
|            2 |     3581 | 2025-02-15 | BIG                     | L   | 0.063      | -            | -                | -                | -         |    -1.32 | dexter, INS, Liazz, regali, Vexite |
|            1 |     3605 | 2025-02-14 | Team Falcons            | L   | 0.057      | -            | -                | -                | -         |    -0.20 | dexter, INS, Liazz, regali, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,379.98)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-25 |      1.000 | $4,500.00      | $4,500.00       |
| 2025-05-16 |      0.664 | $40,000.00     | $26,550.00      |
| 2025-05-04 |      0.584 | $10,000.00     | $5,844.44       |
| 2025-02-23 |      0.119 | $12,500.00     | $1,485.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
