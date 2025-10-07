### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, FASHR, k1to, nexa, regali<br />
Global Rank: [43](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [38]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1017.2<br />
<br />
Final Rank Value (1017.2) = Starting Rank Value (1040.1) + Head To Head Adjustments (-22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.470[<sup>1</sup>](#table2)
- Bounty Collected: 0.404[<sup>2</sup>](#table1)
- Opponent Network: 0.224[<sup>2</sup>](#table1)
- LAN Wins: 0.226[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.386[<sup>2</sup>](#table1)

The average of these factors is 0.331<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1040.1
- 400 + ( ( 0.331 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1040.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      120 | 2023-08-24 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -4.64 | F1KU, FASHR, k1to, nexa, regali |
|           20 |      142 | 2023-08-23 | knasigT           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.243 (0.035)    | 0 (0.000) |     2.77 | F1KU, FASHR, k1to, nexa, regali |
|           19 |      148 | 2023-08-23 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -25.51 | F1KU, FASHR, k1to, nexa, regali |
|           18 |      163 | 2023-08-22 | EYEBALLERS        | W   | 1.000      | 0.435        | 0.017 (0.008)    | 0.609 (0.265)    | 0 (0.000) |     7.74 | F1KU, FASHR, k1to, nexa, regali |
|           17 |      241 | 2023-08-17 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -22.35 | F1KU, FASHR, k1to, nexa, regali |
|           16 |      290 | 2023-08-14 | los kogutos       | W   | 1.000      | 0.435        | 0.038 (0.017)    | 0.950 (0.413)    | 0 (0.000) |     9.30 | F1KU, FASHR, k1to, nexa, regali |
|           15 |      401 | 2023-08-11 | ORKS              | L   | 1.000      | -            | -                | -                | -         |   -27.20 | F1KU, FASHR, k1to, nexa, regali |
|           14 |      512 | 2023-08-08 | Ukraine           | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.487 (0.212)    | 0 (0.000) |     5.14 | F1KU, FASHR, k1to, nexa, regali |
|           13 |      522 | 2023-08-08 | SAW               | L   | 1.000      | -            | -                | -                | -         |   -10.10 | F1KU, FASHR, k1to, nexa, regali |
|           12 |      534 | 2023-08-07 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |    -0.62 | F1KU, FASHR, k1to, nexa, regali |
|           11 |      562 | 2023-08-05 | Aurora            | W   | 1.000      | 0.589        | 0.173 (0.102)    | 0.990 (0.582)    | 0 (0.000) |    18.14 | F1KU, FASHR, k1to, nexa, regali |
|           10 |      602 | 2023-08-03 | SAW               | W   | 1.000      | 0.589        | 0.240 (0.141)    | 0.968 (0.570)    | 0 (0.000) |    21.83 | F1KU, FASHR, k1to, nexa, regali |
|            9 |      657 | 2023-07-31 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -3.17 | F1KU, FASHR, k1to, nexa, regali |
|            8 |      694 | 2023-07-30 | Vitality          | L   | 0.999      | -            | -                | -                | -         |    -0.21 | F1KU, FASHR, k1to, nexa, regali |
|            7 |      719 | 2023-07-28 | Apeks             | W   | 0.987      | 0.143        | 0.349 (0.049)    | 0.776 (0.110)    | 1 (0.987) |    27.38 | F1KU, FASHR, k1to, nexa, regali |
|            6 |      729 | 2023-07-27 | Complexity        | W   | 0.981      | 0.143        | 0.120 (0.017)    | 0.373 (0.052)    | 1 (0.981) |    19.59 | F1KU, FASHR, k1to, nexa, regali |
|            5 |      748 | 2023-07-26 | 9INE              | L   | 0.973      | -            | -                | -                | -         |    -6.91 | F1KU, FASHR, k1to, nexa, regali |
|            4 |      806 | 2023-07-21 | BIG               | L   | 0.940      | -            | -                | -                | -         |    -7.79 | F1KU, FASHR, k1to, nexa, regali |
|            3 |      873 | 2023-07-17 | G2                | L   | 0.914      | -            | -                | -                | -         |    -0.21 | F1KU, FASHR, k1to, nexa, regali |
|            2 |      936 | 2023-07-14 | FaZe              | L   | 0.894      | -            | -                | -                | -         |    -0.92 | F1KU, FASHR, k1to, nexa, regali |
|            1 |     1011 | 2023-07-11 | ORKS              | L   | 0.874      | -            | -                | -                | -         |   -25.15 | F1KU, FASHR, k1to, nexa, regali |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,402.76)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-10 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-08-06 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-07-23 |      0.954 | $5,666.00      | $5,402.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
