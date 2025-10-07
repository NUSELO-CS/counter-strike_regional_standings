### Roster Details<br />
Team Name: ARCRED<br />
Roster: 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg<br />
Global Rank: [114](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [81]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  777.9<br />
<br />
Final Rank Value (777.9) = Starting Rank Value (800.0) + Head To Head Adjustments (-22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.588[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.0
- 400 + ( ( 0.207 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 800.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      224 | 2023-08-18 | Space         | L   | 1.000      | -            | -                | -                | -         |    -9.80 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           30 |      256 | 2023-08-16 | ThunderFlash  | L   | 1.000      | -            | -                | -                | -         |   -11.41 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           29 |      261 | 2023-08-16 | Aurora        | L   | 1.000      | -            | -                | -                | -         |    -4.63 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           28 |      273 | 2023-08-15 | ThunderFlash  | L   | 1.000      | -            | -                | -                | -         |   -12.60 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           27 |      288 | 2023-08-14 | Romania       | L   | 1.000      | -            | -                | -                | -         |   -23.04 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           26 |      323 | 2023-08-13 | Preasy        | W   | 1.000      | 0.435        | 0.007 (0.003)    | 0.339 (0.147)    | 0 (0.000) |    14.23 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           25 |      339 | 2023-08-12 | ENCE Academy  | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.580 (0.252)    | 0 (0.000) |    13.19 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           24 |      397 | 2023-08-11 | Insilio       | L   | 1.000      | -            | -                | -                | -         |   -20.52 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           23 |      470 | 2023-08-10 | Sampi         | L   | 1.000      | -            | -                | -                | -         |   -10.20 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           22 |      484 | 2023-08-09 | ORKS          | L   | 1.000      | -            | -                | -                | -         |   -21.74 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           21 |      489 | 2023-08-09 | Entropiq      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.85 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           20 |      531 | 2023-08-07 | IKLA          | L   | 1.000      | -            | -                | -                | -         |   -21.04 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           19 |      715 | 2023-07-29 | Evil Geniuses | L   | 0.992      | -            | -                | -                | -         |   -15.15 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           18 |      755 | 2023-07-25 | ThunderFlash  | W   | 0.966      | 0.435        | 0.009 (0.004)    | 0.724 (0.304)    | 0 (0.000) |    15.89 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           17 |      773 | 2023-07-23 | SINNERS       | L   | 0.954      | -            | -                | -                | -         |   -10.70 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           16 |      815 | 2023-07-21 | Pompa         | W   | 0.938      | 0.435        | 0.039 (0.016)    | 0.626 (0.255)    | 0 (0.000) |    21.54 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           15 |      861 | 2023-07-18 | Space         | W   | 0.919      | 0.435        | 0.099 (0.040)    | 0.904 (0.361)    | 0 (0.000) |    20.56 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           14 |      900 | 2023-07-16 | Singularity   | W   | 0.906      | 0.143        | 0.041 (0.005)    | -                | 0 (0.000) |    11.89 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           13 |      953 | 2023-07-13 | AVANGAR       | W   | 0.887      | -            | -                | -                | 0 (0.000) |     8.59 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           12 |      969 | 2023-07-12 | ThunderFlash  | L   | 0.881      | -            | -                | -                | -         |   -11.79 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           11 |      982 | 2023-07-12 | Papa YAda     | W   | 0.879      | -            | -                | -                | 0 (0.000) |     2.16 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|           10 |     1325 | 2023-06-08 | 9 Pandas      | L   | 0.654      | -            | -                | -                | -         |    -4.08 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            9 |     1340 | 2023-06-08 | MOUZ NXT      | L   | 0.653      | -            | -                | -                | -         |    -8.03 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            8 |     1414 | 2023-06-05 | Aurora        | L   | 0.634      | -            | -                | -                | -         |    -3.40 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            7 |     1431 | 2023-06-04 | MOUZ NXT      | W   | 0.628      | 0.371        | 0.057 (0.013)    | 0.601 (0.140)    | 0 (0.000) |    11.82 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            6 |     1475 | 2023-06-03 | PROSPECTS     | W   | 0.619      | 0.371        | 0.050 (0.012)    | 0.455 (0.105)    | -         |    13.39 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            5 |     1490 | 2023-06-02 | Ukraine       | W   | 0.614      | 0.371        | -                | 0.487 (0.111)    | -         |     9.47 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            4 |     1532 | 2023-06-01 | THE FREE      | W   | 0.608      | 0.371        | 0.012 (0.003)    | 0.425 (0.096)    | -         |     7.93 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            3 |     1561 | 2023-05-31 | NF0           | W   | 0.601      | -            | -                | -                | -         |     1.70 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            2 |     1607 | 2023-05-30 | Aurora        | L   | 0.594      | -            | -                | -                | -         |    -2.49 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |
|            1 |     1646 | 2023-05-29 | Websterz      | W   | 0.588      | 0.371        | 0.044 (0.010)    | 0.489 (0.107)    | -         |    12.33 | 1NVISIBLEE, DSSj, hurtslxrd, Ryujin, shg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,296.09)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-07 |      0.648 | $2,000.00      | $1,296.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
