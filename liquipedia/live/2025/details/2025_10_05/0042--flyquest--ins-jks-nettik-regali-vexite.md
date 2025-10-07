### Roster Details<br />
Team Name: FlyQuest<br />
Roster: INS, jks, nettik, regali, Vexite<br />
Global Rank: [42](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_05.md)<br />
Regional Rank: [5]( ../../standings_asia_2025_10_05.md)<br />
<br />
Final Rank Value:  1218.9<br />
<br />
Final Rank Value (1218.9) = Starting Rank Value (1209.6) + Head To Head Adjustments (9.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.458[<sup>1</sup>](#table2)
- Bounty Collected: 0.413[<sup>2</sup>](#table1)
- Opponent Network: 0.152[<sup>2</sup>](#table1)
- LAN Wins: 0.634[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.316[<sup>2</sup>](#table1)

The average of these factors is 0.414<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1209.6
- 400 + ( ( 0.414 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1209.6


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
|           32 |      232 | 2025-09-26 | GenOne                  | L   | 1.000      | -            | -                | -                | -         |   -29.47 | INS, jks, nettik, regali, Vexite   |
|           31 |      250 | 2025-09-26 | SINNERS Esports         | W   | 1.000      | 0.339        | 0.030 (0.010)    | 0.762 (0.258)    | 1 (1.000) |     4.70 | INS, jks, nettik, regali, Vexite   |
|           30 |      278 | 2025-09-25 | Metizport               | W   | 1.000      | 0.339        | -                | 0.322 (0.109)    | 1 (1.000) |     2.76 | INS, jks, nettik, regali, Vexite   |
|           29 |      293 | 2025-09-25 | BASEMENT BOYS           | L   | 1.000      | -            | -                | -                | -         |   -28.24 | INS, jks, nettik, regali, Vexite   |
|           28 |      957 | 2025-08-31 | G2 Esports              | L   | 0.959      | -            | -                | -                | -         |    -1.39 | INS, jks, nettik, regali, Vexite   |
|           27 |      990 | 2025-08-30 | Legacy                  | W   | 0.951      | 0.561        | 0.123 (0.066)    | 0.527 (0.281)    | -         |    20.26 | INS, jks, nettik, regali, Vexite   |
|           26 |     1059 | 2025-08-28 | Team Spirit             | L   | 0.938      | -            | -                | -                | -         |    -0.91 | INS, jks, nettik, regali, Vexite   |
|           25 |     1651 | 2025-08-08 | Aurora Gaming           | L   | 0.804      | -            | -                | -                | -         |    -1.37 | INS, jks, nettik, regali, Vexite   |
|           24 |     1708 | 2025-08-03 | The Huns Esports        | W   | 0.772      | 0.143        | 0.058 (0.006)    | 0.465 (0.051)    | 1 (0.772) |    13.39 | INS, jks, nettik, regali, Vexite   |
|           23 |     1718 | 2025-08-02 | Eruption                | W   | 0.768      | -            | -                | -                | 1 (0.768) |     3.82 | INS, jks, nettik, regali, Vexite   |
|           22 |     1757 | 2025-08-01 | Alter Ego               | W   | 0.756      | -            | -                | -                | 1 (0.756) |     0.45 | INS, jks, nettik, regali, Vexite   |
|           21 |     1871 | 2025-07-25 | Team Liquid             | L   | 0.711      | -            | -                | -                | -         |    -1.55 | INS, jks, nettik, regali, Vexite   |
|           20 |     1887 | 2025-07-24 | B8                      | W   | 0.704      | 0.769        | 0.262 (0.142)    | 0.417 (0.226)    | 1 (0.704) |    17.97 | INS, jks, nettik, regali, Vexite   |
|           19 |     1900 | 2025-07-23 | FURIA                   | L   | 0.697      | -            | -                | -                | -         |    -0.42 | INS, jks, nettik, regali, Vexite   |
|           18 |     2635 | 2025-06-06 | TYLOO                   | L   | 0.386      | -            | -                | -                | -         |    -0.93 | INS, Liazz, nettik, regali, Vexite |
|           17 |     2644 | 2025-06-05 | Nemiga Gaming           | L   | 0.380      | -            | -                | -                | -         |    -8.04 | INS, Liazz, nettik, regali, Vexite |
|           16 |     2660 | 2025-06-04 | HEROIC                  | L   | 0.372      | -            | -                | -                | -         |    -3.34 | INS, Liazz, nettik, regali, Vexite |
|           15 |     2673 | 2025-06-03 | BetBoom Team            | W   | 0.367      | 0.624        | 0.440 (0.101)    | 0.885 (0.202)    | 1 (0.367) |     9.19 | INS, Liazz, nettik, regali, Vexite |
|           14 |     2677 | 2025-06-03 | Fluxo                   | W   | 0.366      | 0.624        | 0.065 (0.015)    | 0.687 (0.157)    | 1 (0.366) |     7.58 | INS, Liazz, nettik, regali, Vexite |
|           13 |     2955 | 2025-05-15 | JiJieHao                | W   | 0.242      | 0.897        | 0.027 (0.006)    | 0.383 (0.083)    | 1 (0.242) |     1.39 | INS, Liazz, nettik, regali, Vexite |
|           12 |     3091 | 2025-05-11 | TYLOO                   | L   | 0.210      | -            | -                | -                | -         |    -0.46 | INS, Liazz, nettik, regali, Vexite |
|           11 |     3119 | 2025-05-10 | Rare Atom               | W   | 0.203      | 0.897        | 0.051 (0.009)    | 0.497 (0.091)    | 1 (0.203) |     2.54 | INS, Liazz, nettik, regali, Vexite |
|           10 |     3144 | 2025-05-08 | TYLOO                   | L   | 0.196      | -            | -                | -                | -         |    -0.42 | INS, Liazz, nettik, regali, Vexite |
|            9 |     3199 | 2025-05-07 | Nomads (Mongolian team) | W   | 0.183      | 0.897        | 0.016 (0.003)    | 0.344 (0.056)    | -         |     0.54 | INS, Liazz, nettik, regali, Vexite |
|            8 |     3338 | 2025-05-01 | FaZe Clan               | L   | 0.145      | -            | -                | -                | -         |    -0.54 | INS, Liazz, nettik, regali, Vexite |
|            7 |     3385 | 2025-04-30 | Team Spirit             | L   | 0.136      | -            | -                | -                | -         |    -0.17 | INS, Liazz, nettik, regali, Vexite |
|            6 |     3527 | 2025-04-22 | Natus Vincere           | L   | 0.088      | -            | -                | -                | -         |    -0.10 | INS, Liazz, nettik, regali, Vexite |
|            5 |     3540 | 2025-04-21 | Virtus.pro              | W   | 0.082      | 1.000        | 0.235 (0.019)    | -                | -         |     1.84 | INS, Liazz, nettik, regali, Vexite |
|            4 |     3552 | 2025-04-21 | Team Vitality           | L   | 0.076      | -            | -                | -                | -         |    -0.08 | INS, Liazz, nettik, regali, Vexite |
|            3 |     3644 | 2025-04-16 | SemperFi Esports        | W   | 0.049      | -            | -                | -                | -         |     0.12 | INS, Liazz, nettik, regali, Vexite |
|            2 |     3670 | 2025-04-15 | SemperFi Esports        | W   | 0.041      | -            | -                | -                | -         |     0.10 | INS, Liazz, nettik, regali, Vexite |
|            1 |     3693 | 2025-04-14 | Rooster                 | W   | 0.035      | -            | -                | -                | -         |     0.07 | INS, Liazz, nettik, regali, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($24,732.95)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-01 |      0.966 | $7,500.00      | $7,242.71       |
| 2025-07-25 |      0.712 | $4,500.00      | $3,203.44       |
| 2025-05-16 |      0.244 | $40,000.00     | $9,750.00       |
| 2025-05-04 |      0.164 | $10,000.00     | $1,644.44       |
| 2025-04-26 |      0.116 | $25,000.00     | $2,892.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
