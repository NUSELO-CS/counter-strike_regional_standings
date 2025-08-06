### Roster Details<br />
Team Name: Astralis<br />
Roster: dev1ce, HooXi, jabbi, Staehr, stavn<br />
Global Rank: [9](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [7]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  1666.7<br />
<br />
Final Rank Value (1666.7) = Starting Rank Value (1765.2) + Head To Head Adjustments (-98.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.951[<sup>1</sup>](#table2)
- Bounty Collected: 0.615[<sup>2</sup>](#table1)
- Opponent Network: 0.362[<sup>2</sup>](#table1)
- LAN Wins: 0.957[<sup>2</sup>](#table1)

The average of these factors is 0.721<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1765.2
- 400 + ( ( 0.721 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 1765.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       62 | 2025-07-27 | FURIA                  | L   | 1.000      | -            | -                | -                | -         |   -16.97 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           46 |       93 | 2025-07-26 | Team Vitality          | L   | 1.000      | -            | -                | -                | -         |    -3.33 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           45 |      101 | 2025-07-25 | PaiN Gaming            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.63 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           44 |      105 | 2025-07-25 | FURIA                  | L   | 1.000      | -            | -                | -                | -         |   -17.52 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           43 |      129 | 2025-07-23 | B8                     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.27 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           42 |      144 | 2025-07-20 | TYLOO                  | L   | 1.000      | -            | -                | -                | -         |   -17.18 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           41 |      160 | 2025-07-19 | BetBoom Team           | W   | 1.000      | 1.000        | 0.318 (0.318)    | 0.631 (0.631)    | 1 (1.000) |     3.22 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           40 |      201 | 2025-07-18 | Lynn Vision Gaming     | W   | 1.000      | 1.000        | 0.275 (0.275)    | 0.639 (0.639)    | 1 (1.000) |     7.49 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           39 |      216 | 2025-07-17 | MIBR                   | W   | 1.000      | 1.000        | 0.196 (0.196)    | 0.249 (0.249)    | 1 (1.000) |     3.37 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           38 |      242 | 2025-07-16 | TYLOO                  | L   | 1.000      | -            | -                | -                | -         |   -18.91 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           37 |      258 | 2025-07-15 | MIBR                   | W   | 1.000      | 1.000        | 0.196 (0.196)    | 0.249 (0.249)    | 1 (1.000) |     2.83 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           36 |     1102 | 2025-05-18 | Team Spirit            | L   | 0.677      | -            | -                | -                | -         |    -4.37 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           35 |     1122 | 2025-05-17 | Aurora Gaming          | W   | 0.670      | 1.000        | 0.595 (0.399)    | 0.464 (0.311)    | 1 (0.670) |     9.04 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           34 |     1146 | 2025-05-16 | Natus Vincere          | W   | 0.663      | 1.000        | 0.549 (0.364)    | 0.454 (0.301)    | 1 (0.663) |    12.17 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           33 |     1228 | 2025-05-13 | Virtus.pro             | W   | 0.642      | 1.000        | 0.199 (0.128)    | 0.414 (0.266)    | 1 (0.642) |     4.46 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           32 |     1242 | 2025-05-12 | Team Spirit            | L   | 0.638      | -            | -                | -                | -         |    -3.90 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           31 |     1281 | 2025-05-10 | PaiN Gaming            | W   | 0.629      | 1.000        | 0.299 (0.188)    | -                | 1 (0.629) |     5.10 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           30 |     1309 | 2025-05-09 | ODDIK                  | W   | 0.622      | 1.000        | -                | 0.573 (0.357)    | -         |     0.23 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           29 |     1809 | 2025-04-17 | B8                     | L   | 0.471      | -            | -                | -                | -         |   -13.79 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           28 |     1838 | 2025-04-16 | BIG                    | W   | 0.465      | -            | -                | -                | -         |     0.71 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           27 |     1845 | 2025-04-16 | Metizport              | L   | 0.464      | -            | -                | -                | -         |   -14.42 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           26 |     1866 | 2025-04-15 | ENCE                   | W   | 0.458      | -            | -                | -                | -         |     0.35 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           25 |     1882 | 2025-04-14 | PARIVISION             | W   | 0.452      | -            | -                | -                | -         |     0.30 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           24 |     1890 | 2025-04-14 | OG                     | L   | 0.451      | -            | -                | -                | -         |   -13.91 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           23 |     1961 | 2025-04-10 | Virtus.pro             | L   | 0.422      | -            | -                | -                | -         |   -10.64 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           22 |     2004 | 2025-04-09 | Legacy                 | W   | 0.416      | 1.000        | -                | 0.923 (0.384)    | -         |     1.00 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           21 |     2052 | 2025-04-08 | Betclic Apogee Esports | L   | 0.409      | -            | -                | -                | -         |   -12.61 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           20 |     2066 | 2025-04-07 | 3DMAX                  | L   | 0.404      | -            | -                | -                | -         |    -8.13 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           19 |     2077 | 2025-04-06 | FaZe Clan              | W   | 0.398      | 1.000        | 0.494 (0.196)    | 0.592 (0.236)    | -         |     5.66 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           18 |     2642 | 2025-03-21 | FaZe Clan              | L   | 0.291      | -            | -                | -                | -         |    -5.08 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           17 |     2695 | 2025-03-19 | Team Vitality          | L   | 0.278      | -            | -                | -                | -         |    -1.75 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           16 |     3433 | 2025-02-23 | FaZe Clan              | W   | 0.117      | -            | -                | -                | -         |     1.68 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           15 |     3448 | 2025-02-22 | MOUZ                   | L   | 0.111      | -            | -                | -                | -         |    -0.96 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           14 |     3467 | 2025-02-21 | The MongolZ            | W   | 0.104      | 1.000        | 1.000 (0.104)    | -                | -         |     2.07 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           13 |     3478 | 2025-02-20 | HEROIC                 | L   | 0.098      | -            | -                | -                | -         |    -2.49 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           12 |     3535 | 2025-02-18 | BIG                    | W   | 0.083      | -            | -                | -                | -         |     0.11 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           11 |     3543 | 2025-02-17 | MIBR                   | W   | 0.078      | -            | -                | -                | -         |     0.14 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           10 |     3558 | 2025-02-16 | Team Falcons           | L   | 0.070      | -            | -                | -                | -         |    -1.31 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            9 |     3572 | 2025-02-15 | SAW                    | W   | 0.065      | -            | -                | -                | -         |     0.20 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            8 |     3602 | 2025-02-14 | PaiN Gaming            | L   | 0.058      | -            | -                | -                | -         |    -1.39 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            7 |     3662 | 2025-02-11 | BetBoom Team           | W   | 0.039      | -            | -                | -                | -         |     0.13 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            6 |     3670 | 2025-02-11 | Zero Tenacity          | W   | 0.038      | -            | -                | -                | -         |     0.01 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            5 |     3696 | 2025-02-10 | BC.Game Esports        | L   | 0.032      | -            | -                | -                | -         |    -0.99 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            4 |     3704 | 2025-02-10 | OG                     | W   | 0.030      | -            | -                | -                | -         |     0.01 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            3 |     3732 | 2025-02-09 | PARIVISION             | W   | 0.025      | -            | -                | -                | -         |     0.01 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            2 |     3737 | 2025-02-09 | 500                    | W   | 0.024      | -            | -                | -                | -         |     0.00 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            1 |     3794 | 2025-02-08 | 9INE                   | W   | 0.018      | -            | -                | -                | -         |     0.01 | cadiaN, dev1ce, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($390,460.76)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.89) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2025-07-20 |      1.000 | $220,000.00    | $220,000.00     |
| 2025-05-18 |      0.677 | $187,500.00    | $126,979.17     |
| 2025-04-13 |      0.445 | $31,250.00     | $13,897.57      |
| 2025-03-30 |      0.352 | $5,000.00      | $1,757.64       |
| 2025-02-23 |      0.119 | $150,000.00    | $17,826.39      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
