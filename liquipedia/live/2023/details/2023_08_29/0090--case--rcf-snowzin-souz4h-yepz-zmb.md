### Roster Details<br />
Team Name: Case<br />
Roster: RCF, Snowzin, souz4h, yepz, zmb<br />
Global Rank: [90](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [19]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  848.5<br />
<br />
Final Rank Value (848.5) = Starting Rank Value (798.1) + Head To Head Adjustments (50.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.162[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.471[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 798.1
- 400 + ( ( 0.206 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 798.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       43 | 2023-08-26 | Filhos de D10S | W   | 1.000      | 0.384        | 0.009 (0.004)    | 0.436 (0.167)    | 0 (0.000) |    17.49 | RCF, Snowzin, souz4h, yepz, zmb  |
|           39 |      125 | 2023-08-24 | BeBold         | W   | 1.000      | 0.384        | -                | 0.379 (0.146)    | 0 (0.000) |     8.43 | RCF, Snowzin, souz4h, yepz, zmb  |
|           38 |      159 | 2023-08-22 | Meta           | W   | 1.000      | 0.384        | 0.015 (0.006)    | 0.471 (0.181)    | 0 (0.000) |    13.54 | RCF, Snowzin, souz4h, yepz, zmb  |
|           37 |      268 | 2023-08-15 | Corinthians    | W   | 1.000      | 0.271        | 0.008 (0.002)    | 0.552 (0.150)    | 0 (0.000) |    11.69 | RCF, Snowzin, souz4h, yepz, zmb  |
|           36 |      310 | 2023-08-13 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -6.46 | RCF, Snowzin, souz4h, yepz, zmb  |
|           35 |      327 | 2023-08-12 | Corinthians    | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.552 (0.212)    | 0 (0.000) |    12.43 | RCF, Snowzin, souz4h, yepz, zmb  |
|           34 |      390 | 2023-08-11 | Solid          | W   | 1.000      | 0.384        | 0.030 (0.012)    | 0.363 (0.140)    | 0 (0.000) |    16.17 | RCF, Snowzin, souz4h, yepz, zmb  |
|           33 |      530 | 2023-08-07 | BeBold         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.51 | RCF, Snowzin, souz4h, yepz, zmb  |
|           32 |      574 | 2023-08-04 | The Union      | W   | 1.000      | 0.384        | 0.009 (0.003)    | 0.398 (0.153)    | 0 (0.000) |    14.82 | RCF, Snowzin, souz4h, yepz, zmb  |
|           31 |      600 | 2023-08-03 | Corinthians    | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.552 (0.212)    | 0 (0.000) |    14.11 | RCF, Snowzin, souz4h, yepz, zmb  |
|           30 |      656 | 2023-07-31 | UNO MILLE      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.57 | RCF, Snowzin, souz4h, yepz, zmb  |
|           29 |     1074 | 2023-06-27 | Solid          | L   | 0.783      | -            | -                | -                | -         |   -10.04 | honda, RCF, Snowzin, steel, yepz |
|           28 |     1077 | 2023-06-26 | Meta           | W   | 0.775      | 0.338        | 0.015 (0.004)    | 0.471 (0.123)    | -         |    13.60 | honda, RCF, Snowzin, steel, yepz |
|           27 |     1124 | 2023-06-18 | ODDIK          | L   | 0.720      | -            | -                | -                | -         |   -10.37 | honda, RCF, Snowzin, steel, yepz |
|           26 |     1144 | 2023-06-17 | W7M            | W   | 0.714      | 0.371        | 0.006 (0.002)    | 0.513 (0.136)    | -         |    11.98 | honda, RCF, Snowzin, steel, yepz |
|           25 |     1172 | 2023-06-15 | Intense        | W   | 0.703      | -            | -                | -                | -         |     5.75 | honda, RCF, Snowzin, steel, yepz |
|           24 |     1195 | 2023-06-14 | O PLANO        | L   | 0.694      | -            | -                | -                | -         |    -8.18 | honda, RCF, Snowzin, steel, yepz |
|           23 |     1427 | 2023-06-04 | The Union      | L   | 0.629      | -            | -                | -                | -         |    -9.65 | honda, RCF, Snowzin, steel, yepz |
|           22 |     1558 | 2023-05-31 | INTZ           | W   | 0.602      | -            | -                | -                | -         |     8.46 | honda, RCF, Snowzin, steel, yepz |
|           21 |     1600 | 2023-05-30 | WINDINGO       | L   | 0.595      | -            | -                | -                | -         |    -9.74 | honda, RCF, Snowzin, steel, yepz |
|           20 |     1634 | 2023-05-29 | The Union      | L   | 0.588      | -            | -                | -                | -         |    -9.00 | honda, RCF, Snowzin, steel, yepz |
|           19 |     1660 | 2023-05-29 | Boca Juniors   | L   | 0.586      | -            | -                | -                | -         |    -6.73 | honda, RCF, Snowzin, steel, yepz |
|           18 |     1704 | 2023-05-27 | Boca Juniors   | L   | 0.575      | -            | -                | -                | -         |    -6.92 | honda, RCF, Snowzin, steel, yepz |
|           17 |     1742 | 2023-05-26 | W7M            | L   | 0.569      | -            | -                | -                | -         |    -8.78 | honda, RCF, Snowzin, steel, yepz |
|           16 |     1872 | 2023-05-23 | RED Canids     | L   | 0.547      | -            | -                | -                | -         |    -9.67 | honda, RCF, Snowzin, steel, yepz |
|           15 |     2216 | 2023-05-02 | W7M            | L   | 0.407      | -            | -                | -                | -         |    -6.93 | honda, RCF, Snowzin, steel, yepz |
|           14 |     2249 | 2023-04-30 | BeBold         | W   | 0.394      | -            | -                | -                | -         |     4.99 | honda, RCF, Snowzin, steel, yepz |
|           13 |     2291 | 2023-04-28 | The Union      | L   | 0.381      | -            | -                | -                | -         |    -6.64 | honda, RCF, Snowzin, steel, yepz |
|           12 |     2353 | 2023-04-26 | Hype           | W   | 0.367      | -            | -                | -                | -         |     1.21 | honda, RCF, Snowzin, steel, yepz |
|           11 |     2390 | 2023-04-24 | Sojoga         | L   | 0.356      | -            | -                | -                | -         |    -6.19 | honda, RCF, Snowzin, steel, yepz |
|           10 |     2479 | 2023-04-19 | Sojoga         | L   | 0.321      | -            | -                | -                | -         |    -5.69 | honda, RCF, Snowzin, steel, yepz |
|            9 |     2572 | 2023-04-15 | Sharks         | L   | 0.293      | -            | -                | -                | -         |    -2.90 | honda, RCF, Snowzin, steel, yepz |
|            8 |     2587 | 2023-04-14 | MIBR           | L   | 0.289      | -            | -                | -                | -         |    -2.52 | honda, RCF, Snowzin, steel, yepz |
|            7 |     2618 | 2023-04-13 | Corinthians    | W   | 0.281      | -            | -                | -                | -         |     3.61 | honda, RCF, Snowzin, steel, yepz |
|            6 |     2864 | 2023-04-01 | Solid          | W   | 0.202      | 0.384        | 0.030 (0.002)    | -                | -         |     3.00 | honda, RCF, Snowzin, steel, yepz |
|            5 |     2912 | 2023-03-30 | MIBR Academy   | W   | 0.188      | -            | -                | -                | -         |     2.02 | honda, RCF, Snowzin, steel, yepz |
|            4 |     2988 | 2023-03-28 | paiN Academy   | L   | 0.173      | -            | -                | -                | -         |    -3.08 | honda, RCF, Snowzin, steel, yepz |
|            3 |     3034 | 2023-03-26 | Desorganizados | W   | 0.160      | -            | -                | -                | -         |     0.78 | honda, RCF, Snowzin, steel, yepz |
|            2 |     3326 | 2023-03-17 | Meta           | L   | 0.101      | -            | -                | -                | -         |    -1.70 | honda, RCF, Snowzin, steel, yepz |
|            1 |     3395 | 2023-03-15 | Sojoga         | L   | 0.088      | -            | -                | -                | -         |    -1.57 | honda, RCF, Snowzin, steel, yepz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,103.01)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-15 |      1.000 | $1,441.00      | $1,441.00       |
| 2023-08-13 |      1.000 | $2,500.00      | $2,500.00       |
| 2023-06-28 |      0.789 | $1,090.00      | $859.54         |
| 2023-04-16 |      0.302 | $1,000.00      | $302.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
