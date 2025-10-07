### Roster Details<br />
Team Name: BLINK<br />
Roster: BledarD, deb0, gulito, HYPERI1, krabeni<br />
Global Rank: [194](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [122]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  660.0<br />
<br />
Final Rank Value (660.0) = Starting Rank Value (658.2) + Head To Head Adjustments (1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.2
- 400 + ( ( 0.134 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 658.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2304 | 2023-04-28 | Endpoint          | L   | 0.379      | -            | -                | -                | -         |    -2.22 | BledarD, deb0, gulito, HYPERI1, krabeni |
|           12 |     2357 | 2023-04-26 | los kogutos       | L   | 0.366      | -            | -                | -                | -         |    -2.40 | BledarD, deb0, gulito, HYPERI1, krabeni |
|           11 |     2376 | 2023-04-25 | Entropiq          | L   | 0.361      | -            | -                | -                | -         |    -5.14 | BledarD, deb0, gulito, HYPERI1, krabeni |
|           10 |     2413 | 2023-04-23 | Unluko5           | W   | 0.347      | 0.435        | 0.000 (0.000)    | 0.100 (0.015)    | 0 (0.000) |     4.24 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            9 |     2462 | 2023-04-20 | Biskvitki Zakuska | W   | 0.327      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.90 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            8 |     2545 | 2023-04-16 | ENCE Academy      | L   | 0.299      | -            | -                | -                | -         |    -2.08 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            7 |     2575 | 2023-04-15 | Nexus             | L   | 0.293      | -            | -                | -                | -         |    -5.41 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            6 |     2605 | 2023-04-14 | Sampi             | L   | 0.285      | -            | -                | -                | -         |    -1.34 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            5 |     2634 | 2023-04-13 | ALTERNATE aTTaX   | L   | 0.279      | -            | -                | -                | -         |    -1.25 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            4 |     2719 | 2023-04-10 | PROSPECTS         | W   | 0.259      | 0.371        | 0.050 (0.005)    | 0.455 (0.044)    | 0 (0.000) |     6.96 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            3 |     2818 | 2023-04-06 | los kogutos       | W   | 0.232      | 0.371        | 0.038 (0.003)    | 0.950 (0.082)    | 0 (0.000) |     5.91 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            2 |     2927 | 2023-03-30 | ENCE Academy      | L   | 0.185      | -            | -                | -                | -         |    -1.22 | BledarD, deb0, gulito, HYPERI1, krabeni |
|            1 |     2990 | 2023-03-28 | THE FREE          | W   | 0.172      | 0.333        | 0.012 (0.001)    | 0.425 (0.024)    | 0 (0.000) |     3.79 | BledarD, deb0, gulito, HYPERI1, krabeni |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($555.28)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-30 |      0.185 | $3,000.00      | $555.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
