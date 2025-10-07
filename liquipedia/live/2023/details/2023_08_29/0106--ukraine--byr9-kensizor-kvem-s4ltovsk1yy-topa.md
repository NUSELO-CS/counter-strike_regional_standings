### Roster Details<br />
Team Name: Ukraine<br />
Roster: byr9, kensizor, Kvem, s4ltovsk1yy, Topa<br />
Global Rank: [106](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [75]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  797.5<br />
<br />
Final Rank Value (797.5) = Starting Rank Value (807.4) + Head To Head Adjustments (-9.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.134[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.487[<sup>2</sup>](#table1)

The average of these factors is 0.211<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.4
- 400 + ( ( 0.211 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 807.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |       14 | 2023-08-28 | Australia       | W   | 1.000      | 0.500        | 0.003 (0.002)    | 0.374 (0.187)    | 1 (1.000) |    10.88 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|           30 |      278 | 2023-08-15 | 9 Pandas        | L   | 1.000      | -            | -                | -                | -         |    -9.22 | byr9, Fanse, kensizor, Polbandana, s4ltovsk1yy  |
|           29 |      360 | 2023-08-12 | Aurora          | L   | 1.000      | -            | -                | -                | -         |    -3.67 | byr9, Fanse, kensizor, Polbandana, s4ltovsk1yy  |
|           28 |      431 | 2023-08-10 | Websterz        | W   | 1.000      | 0.435        | 0.044 (0.019)    | 0.489 (0.212)    | 0 (0.000) |    19.47 | byr9, Fanse, kensizor, Polbandana, s4ltovsk1yy  |
|           27 |      512 | 2023-08-08 | OG              | L   | 1.000      | -            | -                | -                | -         |    -5.14 | byr9, Fanse, kensizor, Polbandana, s4ltovsk1yy  |
|           26 |      616 | 2023-08-02 | Los Alpacas     | W   | 1.000      | 0.435        | 0.012 (0.005)    | 0.156 (0.068)    | 0 (0.000) |    14.48 | byr9, Fanse, kensizor, Polbandana, s4ltovsk1yy  |
|           25 |      624 | 2023-08-02 | JANO            | W   | 1.000      | 0.435        | 0.007 (0.003)    | 0.427 (0.186)    | 0 (0.000) |    14.46 | byr9, Fanse, kensizor, Polbandana, s4ltovsk1yy  |
|           24 |      866 | 2023-07-18 | Nemiga          | L   | 0.918      | -            | -                | -                | -         |   -23.02 | byr9, kensizor, kL1o, s4ltovsk1yy, wvfeun       |
|           23 |      879 | 2023-07-17 | GhoulsW         | L   | 0.912      | -            | -                | -                | -         |   -23.83 | byr9, kensizor, kL1o, s4ltovsk1yy, wvfeun       |
|           22 |     1057 | 2023-07-02 | ECLOT           | L   | 0.813      | -            | -                | -                | -         |    -5.84 | byr9, kensizor, kL1o, lucky_cryak1, s4ltovsk1yy |
|           21 |     1062 | 2023-07-01 | Katuna          | L   | 0.808      | -            | -                | -                | -         |   -15.09 | byr9, kensizor, kL1o, lucky_cryak1, s4ltovsk1yy |
|           20 |     1065 | 2023-06-29 | SINNERS Academy | W   | 0.794      | -            | -                | -                | 0 (0.000) |     3.82 | byr9, kensizor, kL1o, lucky_cryak1, s4ltovsk1yy |
|           19 |     1066 | 2023-06-29 | 500             | L   | 0.794      | -            | -                | -                | -         |    -6.79 | byr9, kensizor, kL1o, lucky_cryak1, s4ltovsk1yy |
|           18 |     1069 | 2023-06-29 | Enterprise      | W   | 0.793      | 0.354        | -                | 0.194 (0.054)    | 0 (0.000) |     7.77 | byr9, kensizor, kL1o, lucky_cryak1, s4ltovsk1yy |
|           17 |     1125 | 2023-06-18 | Lazer Cats      | L   | 0.720      | -            | -                | -                | -         |   -16.66 | byr9, kensizor, kL1o, lucky_cryak1, s4ltovsk1yy |
|           16 |     1268 | 2023-06-10 | Question Mark   | L   | 0.665      | -            | -                | -                | -         |    -8.96 | byr9, kensizor, Kvem, somnium, Topa             |
|           15 |     1283 | 2023-06-09 | MOUZ NXT        | W   | 0.661      | 0.143        | 0.057 (0.005)    | 0.601 (0.057)    | 0 (0.000) |    13.47 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|           14 |     1294 | 2023-06-09 | L&G             | W   | 0.660      | -            | -                | -                | 0 (0.000) |     4.32 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|           13 |     1307 | 2023-06-09 | PROSPECTS       | W   | 0.658      | 0.371        | 0.050 (0.012)    | 0.455 (0.111)    | 0 (0.000) |    14.13 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|           12 |     1323 | 2023-06-08 | Question Mark   | L   | 0.654      | -            | -                | -                | -         |    -8.70 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|           11 |     1333 | 2023-06-08 | BIG Academy     | W   | 0.653      | -            | -                | -                | 0 (0.000) |     8.80 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|           10 |     1344 | 2023-06-08 | Anonymo         | L   | 0.652      | -            | -                | -                | -         |    -6.66 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|            9 |     1407 | 2023-06-06 | Question Mark   | W   | 0.638      | 0.371        | 0.032 (0.008)    | 0.689 (0.163)    | -         |    11.35 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|            8 |     1490 | 2023-06-02 | ARCRED          | L   | 0.614      | -            | -                | -                | -         |    -9.47 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|            7 |     1546 | 2023-06-01 | los kogutos     | W   | 0.605      | 0.371        | 0.038 (0.009)    | 0.950 (0.213)    | -         |    10.88 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|            6 |     1567 | 2023-05-31 | ex-Coalesce     | L   | 0.601      | -            | -                | -                | -         |   -10.95 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|            5 |     1605 | 2023-05-30 | FTW             | W   | 0.594      | 0.371        | 0.019 (0.004)    | -                | -         |    10.14 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|            4 |     1694 | 2023-05-28 | JANO            | W   | 0.579      | 0.371        | 0.007 (0.001)    | 0.427 (0.092)    | -         |     8.58 | byr9, kensizor, Kvem, s4ltovsk1yy, Topa         |
|            3 |     2721 | 2023-04-10 | los kogutos     | L   | 0.258      | -            | -                | -                | -         |    -2.83 | byr9, kensizor, Kvem, s4ltovsk1yy, uQlutzavr    |
|            2 |     2825 | 2023-04-06 | PROSPECTS       | L   | 0.231      | -            | -                | -                | -         |    -1.97 | byr9, kensizor, Kvem, s4ltovsk1yy, uQlutzavr    |
|            1 |     2982 | 2023-03-28 | EPIC DUDES      | L   | 0.173      | -            | -                | -                | -         |    -3.65 | byr9, kensizor, Kvem, s4ltovsk1yy, uQlutzavr    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($678.51)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-12 |      0.679 | $1,000.00      | $678.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
