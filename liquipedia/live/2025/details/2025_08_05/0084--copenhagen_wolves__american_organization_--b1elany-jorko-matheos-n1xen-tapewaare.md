### Roster Details<br />
Team Name: Copenhagen Wolves (American organization)<br />
Roster: b1elany, Jorko, Matheos, n1Xen, Tapewaare<br />
Global Rank: [84](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [57]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  853.1<br />
<br />
Final Rank Value (853.1) = Starting Rank Value (807.3) + Head To Head Adjustments (45.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.487[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.3
- 400 + ( ( 0.214 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 807.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      566 | 2025-06-24 | Iberian Soul           | L   | 0.903      | -            | -                | -                | -         |    -2.79 | b1elany, Jorko, Matheos, n1Xen, Tapewaare    |
|           25 |      572 | 2025-06-23 | PARIVISION             | W   | 0.898      | 0.435        | 0.124 (0.048)    | 1.000 (0.390)    | 0 (0.000) |    21.70 | b1elany, Jorko, Matheos, n1Xen, Tapewaare    |
|           24 |      587 | 2025-06-22 | Sangal Esports         | W   | 0.889      | 0.435        | 0.037 (0.014)    | 0.720 (0.278)    | 0 (0.000) |    19.75 | b1elany, Jorko, Matheos, n1Xen, Tapewaare    |
|           23 |      609 | 2025-06-20 | Betclic Apogee Esports | W   | 0.878      | 0.435        | 0.042 (0.016)    | 0.342 (0.130)    | 0 (0.000) |    22.01 | b1elany, Jorko, Matheos, n1Xen, Tapewaare    |
|           22 |      622 | 2025-06-19 | ENCE Academy           | W   | 0.872      | 0.435        | 0.021 (0.008)    | 0.207 (0.078)    | 0 (0.000) |    12.92 | b1elany, Jorko, Matheos, n1Xen, Tapewaare    |
|           21 |      658 | 2025-06-17 | KOLESIE                | L   | 0.857      | -            | -                | -                | -         |    -3.42 | b1elany, Jorko, Matheos, n1Xen, Tapewaare    |
|           20 |      674 | 2025-06-16 | Sangal Esports         | L   | 0.850      | -            | -                | -                | -         |    -7.01 | b1elany, Jorko, Matheos, n1Xen, Tapewaare    |
|           19 |      766 | 2025-06-13 | UNiTY esports          | W   | 0.831      | 0.435        | -                | 0.216 (0.078)    | 0 (0.000) |     5.80 | b1elany, Jorko, Matheos, n1Xen, Tapewaare    |
|           18 |      802 | 2025-06-12 | Ex-Sabre Esports       | W   | 0.823      | 0.435        | 0.003 (0.001)    | 0.415 (0.148)    | 0 (0.000) |    12.60 | b1elany, Jorko, Matheos, n1Xen, Tapewaare    |
|           17 |      842 | 2025-06-09 | AMKAL ESPORTS          | L   | 0.803      | -            | -                | -                | -         |   -11.31 | b1elany, Jackinho, Jorko, Matheos, Tapewaare |
|           16 |      855 | 2025-06-08 | -72C                   | W   | 0.798      | -            | -                | -                | 0 (0.000) |     2.64 | b1elany, Jackinho, Jorko, Matheos, Tapewaare |
|           15 |      877 | 2025-06-07 | HEROIC Academy         | L   | 0.791      | -            | -                | -                | -         |   -14.42 | b1elany, Jackinho, Jorko, Matheos, Tapewaare |
|           14 |      888 | 2025-06-06 | JANO Esports           | W   | 0.783      | 0.384        | 0.001 (0.000)    | 0.089 (0.027)    | 0 (0.000) |     8.09 | b1elany, Jackinho, Jorko, Matheos, Tapewaare |
|           13 |      894 | 2025-06-05 | 8Sins                  | W   | 0.778      | 0.384        | 0.001 (0.000)    | 0.125 (0.037)    | 0 (0.000) |     8.57 | b1elany, Jackinho, Jorko, Matheos, Tapewaare |
|           12 |      939 | 2025-05-31 | Tricked Esport         | L   | 0.746      | -            | -                | -                | -         |    -7.01 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |
|           11 |      972 | 2025-05-28 | Eco Warriors           | W   | 0.724      | 0.384        | 0.002 (0.000)    | -                | 0 (0.000) |     6.82 | b1elany, Jackinho, Jorko, Matheos, Tapewaare |
|           10 |      984 | 2025-05-27 | EYEBALLERS             | L   | 0.717      | -            | -                | -                | -         |   -11.16 | b1elany, Jackinho, Jorko, Matheos, Tapewaare |
|            9 |     1022 | 2025-05-24 | Dynamo Eclot           | L   | 0.697      | -            | -                | -                | -         |    -8.13 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |
|            8 |     1060 | 2025-05-22 | Sangal Esports         | L   | 0.683      | -            | -                | -                | -         |    -6.10 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |
|            7 |     1101 | 2025-05-20 | Partizan Esports       | L   | 0.671      | -            | -                | -                | -         |    -8.16 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |
|            6 |     1123 | 2025-05-19 | Ex-Permitta Esports    | W   | 0.665      | -            | -                | -                | -         |     2.21 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |
|            5 |     1201 | 2025-05-15 | Ex-Sabre Esports       | W   | 0.639      | 0.384        | 0.003 (0.001)    | 0.415 (0.102)    | -         |     9.54 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |
|            4 |     1223 | 2025-05-14 | Modeame                | W   | 0.632      | 0.384        | 0.004 (0.001)    | 0.328 (0.080)    | -         |     8.15 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |
|            3 |     1577 | 2025-05-01 | RUBY                   | L   | 0.544      | -            | -                | -                | -         |    -6.30 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |
|            2 |     1601 | 2025-04-30 | Sashi Esport           | L   | 0.538      | -            | -                | -                | -         |    -4.82 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |
|            1 |     2072 | 2025-04-08 | Sangal Esports         | L   | 0.392      | -            | -                | -                | -         |    -4.34 | b1elany, Jackinho, kwezz, Matheos, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,090.89)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-24 |      0.903 | $11,000.00     | $9,935.14       |
| 2025-06-01 |      0.751 | $425.53        | $319.51         |
| 2025-05-11 |      0.612 | $3,000.00      | $1,836.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
