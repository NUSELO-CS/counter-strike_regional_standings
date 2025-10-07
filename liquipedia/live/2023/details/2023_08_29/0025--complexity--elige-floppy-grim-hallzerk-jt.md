### Roster Details<br />
Team Name: Complexity<br />
Roster: EliGE, floppy, Grim, hallzerk, JT<br />
Global Rank: [25](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [1]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  1107.2<br />
<br />
Final Rank Value (1107.2) = Starting Rank Value (1131.6) + Head To Head Adjustments (-24.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.521[<sup>1</sup>](#table2)
- Bounty Collected: 0.431[<sup>2</sup>](#table1)
- Opponent Network: 0.137[<sup>2</sup>](#table1)
- LAN Wins: 0.425[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.373[<sup>2</sup>](#table1)

The average of these factors is 0.378<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1131.6
- 400 + ( ( 0.378 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1131.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |        4 | 2023-08-28 | Forsaken          | W   | 1.000      | 0.384        | 0.018 (0.007)    | 0.524 (0.201)    | 0 (0.000) |     6.62 | EliGE, floppy, Grim, hallzerk, JT |
|           32 |       16 | 2023-08-27 | the jungle        | W   | 1.000      | 0.384        | -                | 0.256 (0.098)    | -         |     2.21 | EliGE, floppy, Grim, hallzerk, JT |
|           31 |       77 | 2023-08-25 | M80               | W   | 1.000      | 0.143        | 0.058 (0.008)    | 0.753 (0.108)    | -         |    10.20 | EliGE, floppy, Grim, hallzerk, JT |
|           30 |       79 | 2023-08-25 | Forsaken          | W   | 1.000      | 0.143        | -                | 0.524 (0.075)    | -         |     7.06 | EliGE, floppy, Grim, hallzerk, JT |
|           29 |      104 | 2023-08-24 | Nouns             | W   | 1.000      | 0.143        | 0.091 (0.013)    | 0.601 (0.086)    | -         |     8.99 | EliGE, floppy, Grim, hallzerk, JT |
|           28 |      106 | 2023-08-24 | Forsaken          | L   | 1.000      | -            | -                | -                | -         |   -24.35 | EliGE, floppy, Grim, hallzerk, JT |
|           27 |      729 | 2023-07-27 | OG                | L   | 0.981      | -            | -                | -                | -         |   -19.59 | EliGE, floppy, Grim, hallzerk, JT |
|           26 |      749 | 2023-07-26 | fnatic            | L   | 0.973      | -            | -                | -                | -         |    -8.64 | EliGE, floppy, Grim, hallzerk, JT |
|           25 |      811 | 2023-07-21 | Astralis          | L   | 0.939      | -            | -                | -                | -         |    -2.07 | EliGE, floppy, Grim, hallzerk, JT |
|           24 |      859 | 2023-07-18 | Ninjas in Pyjamas | L   | 0.920      | -            | -                | -                | -         |    -7.58 | EliGE, floppy, Grim, hallzerk, JT |
|           23 |      923 | 2023-07-15 | Vitality          | L   | 0.900      | -            | -                | -                | -         |    -0.26 | EliGE, floppy, Grim, hallzerk, JT |
|           22 |      955 | 2023-07-13 | Ninjas in Pyjamas | W   | 0.887      | 0.571        | 0.194 (0.098)    | 0.670 (0.339)    | 1 (0.887) |    21.05 | EliGE, floppy, Grim, hallzerk, JT |
|           21 |     1287 | 2023-06-09 | Imperial          | L   | 0.660      | -            | -                | -                | -         |   -11.75 | FaNg, floppy, Grim, JT, Sonic     |
|           20 |     1316 | 2023-06-08 | Astralis          | W   | 0.656      | 0.729        | 0.582 (0.278)    | 0.660 (0.315)    | 1 (0.656) |    19.79 | FaNg, floppy, Grim, JT, Sonic     |
|           19 |     1364 | 2023-06-07 | Heroic            | L   | 0.648      | -            | -                | -                | -         |    -0.33 | FaNg, floppy, Grim, JT, Sonic     |
|           18 |     1556 | 2023-05-31 | 9z                | L   | 0.602      | -            | -                | -                | -         |   -10.31 | FaNg, floppy, Grim, JT, Sonic     |
|           17 |     1575 | 2023-05-31 | Cloud9            | L   | 0.601      | -            | -                | -                | -         |    -1.08 | FaNg, floppy, Grim, JT, Sonic     |
|           16 |     1614 | 2023-05-30 | Evil Geniuses     | W   | 0.594      | 0.624        | 0.012 (0.005)    | 0.095 (0.035)    | 1 (0.594) |     1.59 | FaNg, floppy, Grim, JT, Sonic     |
|           15 |     1649 | 2023-05-29 | ENCE              | L   | 0.587      | -            | -                | -                | -         |    -0.23 | FaNg, floppy, Grim, JT, Sonic     |
|           14 |     2074 | 2023-05-10 | Liquid            | L   | 0.459      | -            | -                | -                | -         |    -3.37 | FaNg, floppy, Grim, hallzerk, JT  |
|           13 |     2096 | 2023-05-09 | paiN              | L   | 0.451      | -            | -                | -                | -         |    -9.52 | FaNg, floppy, Grim, hallzerk, JT  |
|           12 |     2109 | 2023-05-08 | G2                | L   | 0.446      | -            | -                | -                | -         |    -0.12 | FaNg, floppy, Grim, hallzerk, JT  |
|           11 |     2115 | 2023-05-08 | GamerLegion       | W   | 0.445      | 0.143        | 0.556 (0.035)    | -                | 1 (0.445) |    12.88 | FaNg, floppy, Grim, hallzerk, JT  |
|           10 |     2281 | 2023-04-29 | ECSTATIC          | L   | 0.385      | -            | -                | -                | -         |    -8.04 | FaNg, floppy, Grim, hallzerk, JT  |
|            9 |     2312 | 2023-04-28 | Grayhound         | L   | 0.378      | -            | -                | -                | -         |    -8.61 | FaNg, floppy, Grim, hallzerk, JT  |
|            8 |     2317 | 2023-04-27 | ECSTATIC          | W   | 0.376      | 0.500        | 0.110 (0.021)    | 0.478 (0.090)    | 1 (0.376) |     3.85 | FaNg, floppy, Grim, hallzerk, JT  |
|            7 |     2726 | 2023-04-09 | MIBR              | W   | 0.254      | 0.143        | 0.150 (0.005)    | 0.596 (0.022)    | 1 (0.254) |     2.39 | FaNg, floppy, Grim, hallzerk, JT  |
|            6 |     2745 | 2023-04-08 | Imperial          | W   | 0.248      | 0.143        | 0.141 (0.005)    | -                | 1 (0.248) |     3.19 | FaNg, floppy, Grim, hallzerk, JT  |
|            5 |     2769 | 2023-04-07 | paiN              | L   | 0.241      | -            | -                | -                | -         |    -5.25 | FaNg, floppy, Grim, hallzerk, JT  |
|            4 |     2798 | 2023-04-06 | Solid             | W   | 0.235      | -            | -                | -                | 1 (0.235) |     0.90 | FaNg, floppy, Grim, hallzerk, JT  |
|            3 |     2886 | 2023-03-31 | Imperial          | L   | 0.195      | -            | -                | -                | -         |    -3.70 | FaNg, floppy, Grim, hallzerk, JT  |
|            2 |     3693 | 2023-03-05 | BIG               | L   | 0.019      | -            | -                | -                | -         |    -0.43 | FaNg, floppy, Grim, hallzerk, JT  |
|            1 |     3725 | 2023-03-04 | Imperial          | W   | 0.013      | -            | -                | -                | 1 (0.013) |     0.16 | FaNg, floppy, Grim, hallzerk, JT  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,669.17)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-28 |      0.988 | $2,500.00      | $2,469.61       |
| 2023-07-23 |      0.954 | $5,666.00      | $5,402.76       |
| 2023-06-11 |      0.675 | $20,000.00     | $13,493.74      |
| 2023-06-04 |      0.627 | $5,000.00      | $3,136.74       |
| 2023-05-11 |      0.467 | $10,000.00     | $4,667.89       |
| 2023-04-30 |      0.391 | $3,000.00      | $1,172.38       |
| 2023-04-02 |      0.208 | $5,000.00      | $1,042.08       |
| 2023-03-26 |      0.160 | $8,000.00      | $1,283.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
