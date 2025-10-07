### Roster Details<br />
Team Name: 9 Pandas Fearless<br />
Roster: Elizabeth, f6tal, Ksu, mRSK, Victoria<br />
Global Rank: [123](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [85]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  761.4<br />
<br />
Final Rank Value (761.4) = Starting Rank Value (743.9) + Head To Head Adjustments (17.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.258[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.070[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.158[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.9
- 400 + ( ( 0.178 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 743.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      894 | 2023-07-16 | YeYO                 | W   | 0.907      | 0.250        | 0.001 (0.000)    | 0.048 (0.011)    | 0 (0.000) |     5.88 | Elizabeth, f6tal, Ksu, mRSK, Victoria    |
|           16 |     1130 | 2023-06-18 | VP.Angels            | W   | 0.720      | 0.250        | 0.001 (0.000)    | 0.048 (0.009)    | 0 (0.000) |     4.74 | akkri, Elizabeth, f6tal, t4tty, Victoria |
|           15 |     1467 | 2023-06-03 | FlyQuest RED         | L   | 0.621      | -            | -                | -                | -         |    -8.63 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|           14 |     1485 | 2023-06-02 | Nigma Galaxy         | L   | 0.615      | -            | -                | -                | -         |    -5.47 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|           13 |     1499 | 2023-06-02 | FlyQuest RED         | W   | 0.614      | 0.524        | 0.036 (0.012)    | 0.163 (0.052)    | 1 (0.614) |    10.71 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|           12 |     2302 | 2023-04-28 | NAVI Javelins        | L   | 0.380      | -            | -                | -                | -         |    -4.04 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|           11 |     2331 | 2023-04-27 | G2 Oya               | W   | 0.373      | 0.143        | 0.004 (0.000)    | 0.060 (0.003)    | 0 (0.000) |     3.83 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|           10 |     2569 | 2023-04-15 | BIG EQUIPA           | W   | 0.294      | 0.329        | 0.002 (0.000)    | 0.028 (0.003)    | 0 (0.000) |     3.15 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|            9 |     2661 | 2023-04-12 | VP.Angels            | W   | 0.274      | 0.329        | 0.001 (0.000)    | 0.048 (0.004)    | 0 (0.000) |     1.85 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|            8 |     2832 | 2023-04-05 | G2 Oya               | W   | 0.227      | 0.329        | 0.004 (0.000)    | 0.060 (0.004)    | 0 (0.000) |     2.47 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|            7 |     3037 | 2023-03-26 | NIP Impact           | W   | 0.160      | 0.250        | 0.006 (0.000)    | 0.101 (0.004)    | 0 (0.000) |     2.00 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|            6 |     3167 | 2023-03-22 | NAVI Javelins        | L   | 0.134      | -            | -                | -                | -         |    -1.41 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|            5 |     3362 | 2023-03-16 | GUILD                | W   | 0.094      | 0.329        | 0.001 (0.000)    | -                | 0 (0.000) |     0.95 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|            4 |     3405 | 2023-03-15 | Flames Shieldmaidens | W   | 0.087      | 0.329        | -                | 0.018 (0.001)    | 0 (0.000) |     0.85 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|            3 |     3681 | 2023-03-05 | BIG EQUIPA           | W   | 0.021      | -            | -                | -                | -         |     0.23 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|            2 |     3685 | 2023-03-05 | SO HARD TO REG       | W   | 0.020      | -            | -                | -                | -         |     0.12 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |
|            1 |     3692 | 2023-03-05 | NIP Impact           | W   | 0.020      | 0.270        | 0.006 (0.000)    | 0.101 (0.001)    | -         |     0.24 | Elizabeth, f6tal, Ksu, t4tty, Victoria   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,766.80)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-16 |      0.907 | $750.00        | $679.90         |
| 2023-06-18 |      0.720 | $750.00        | $539.76         |
| 2023-06-04 |      0.628 | $7,000.00      | $4,395.84       |
| 2023-03-26 |      0.160 | $750.00        | $119.89         |
| 2023-03-05 |      0.021 | $1,500.00      | $31.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
