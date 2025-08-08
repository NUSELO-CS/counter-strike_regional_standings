### Roster Details<br />
Team Name: Astralis<br />
Roster: dev1ce, HooXi, jabbi, Staehr, stavn<br />
Global Rank: [8](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [6]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  1703.6<br />
<br />
Final Rank Value (1703.6) = Starting Rank Value (1791.8) + Head To Head Adjustments (-88.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.958[<sup>1</sup>](#table2)
- Bounty Collected: 0.621[<sup>2</sup>](#table1)
- Opponent Network: 0.385[<sup>2</sup>](#table1)
- LAN Wins: 0.962[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.497[<sup>2</sup>](#table1)

The average of these factors is 0.731<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1791.8
- 400 + ( ( 0.731 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1791.8


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
|           46 |       94 | 2025-07-27 | FURIA                  | L   | 1.000      | -            | -                | -                | -         |   -16.95 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           45 |      130 | 2025-07-26 | Team Vitality          | L   | 1.000      | -            | -                | -                | -         |    -3.96 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           44 |      142 | 2025-07-25 | PaiN Gaming            | W   | 1.000      | 0.769        | 0.300 (0.231)    | 0.367 (0.282)    | 1 (1.000) |     8.41 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           43 |      147 | 2025-07-25 | FURIA                  | L   | 1.000      | -            | -                | -                | -         |   -17.43 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           42 |      174 | 2025-07-23 | B8                     | W   | 1.000      | 0.769        | -                | 0.623 (0.479)    | 1 (1.000) |     3.72 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           41 |      189 | 2025-07-20 | TYLOO                  | L   | 1.000      | -            | -                | -                | -         |   -16.15 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           40 |      205 | 2025-07-19 | BetBoom Team           | W   | 1.000      | 1.000        | 0.326 (0.326)    | 0.625 (0.625)    | 1 (1.000) |     3.33 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           39 |      246 | 2025-07-18 | Lynn Vision Gaming     | W   | 1.000      | 1.000        | 0.280 (0.280)    | 0.634 (0.634)    | 1 (1.000) |     9.21 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           38 |      261 | 2025-07-17 | MIBR                   | W   | 1.000      | 1.000        | 0.197 (0.197)    | 0.245 (0.245)    | 1 (1.000) |     3.86 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           37 |      287 | 2025-07-16 | TYLOO                  | L   | 1.000      | -            | -                | -                | -         |   -17.68 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           36 |      303 | 2025-07-15 | MIBR                   | W   | 1.000      | 1.000        | 0.197 (0.197)    | -                | 1 (1.000) |     3.28 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           35 |     1147 | 2025-05-18 | Team Spirit            | L   | 0.657      | -            | -                | -                | -         |    -4.70 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           34 |     1167 | 2025-05-17 | Aurora Gaming          | W   | 0.650      | 1.000        | 0.591 (0.384)    | 0.455 (0.296)    | 1 (0.650) |     7.98 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           33 |     1191 | 2025-05-16 | Natus Vincere          | W   | 0.643      | 1.000        | 0.552 (0.355)    | 0.455 (0.292)    | 1 (0.643) |    11.06 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           32 |     1273 | 2025-05-13 | Virtus.pro             | W   | 0.622      | 1.000        | 0.196 (0.122)    | 0.411 (0.256)    | 1 (0.622) |     4.88 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           31 |     1287 | 2025-05-12 | Team Spirit            | L   | 0.618      | -            | -                | -                | -         |    -4.26 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           30 |     1326 | 2025-05-10 | PaiN Gaming            | W   | 0.609      | 1.000        | 0.300 (0.183)    | -                | 1 (0.609) |     5.69 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           29 |     1354 | 2025-05-09 | ODDIK                  | W   | 0.602      | 1.000        | -                | 0.623 (0.375)    | -         |     0.23 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           28 |     1854 | 2025-04-17 | B8                     | L   | 0.451      | -            | -                | -                | -         |   -12.95 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           27 |     1883 | 2025-04-16 | BIG                    | W   | 0.445      | -            | -                | -                | -         |     0.57 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           26 |     1890 | 2025-04-16 | Metizport              | L   | 0.444      | -            | -                | -                | -         |   -13.80 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           25 |     1911 | 2025-04-15 | ENCE                   | W   | 0.437      | -            | -                | -                | -         |     0.29 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           24 |     1927 | 2025-04-14 | PARIVISION             | W   | 0.432      | -            | -                | -                | -         |     0.24 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           23 |     1935 | 2025-04-14 | OG                     | L   | 0.431      | -            | -                | -                | -         |   -13.25 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           22 |     2006 | 2025-04-10 | Virtus.pro             | L   | 0.402      | -            | -                | -                | -         |    -9.73 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           21 |     2049 | 2025-04-09 | Legacy                 | W   | 0.396      | 1.000        | -                | 0.917 (0.363)    | -         |     1.19 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           20 |     2097 | 2025-04-08 | Betclic Apogee Esports | L   | 0.389      | -            | -                | -                | -         |   -12.02 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           19 |     2111 | 2025-04-07 | 3DMAX                  | L   | 0.383      | -            | -                | -                | -         |    -6.95 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           18 |     2122 | 2025-04-06 | FaZe Clan              | W   | 0.378      | 1.000        | 0.493 (0.186)    | -                | -         |     5.58 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           17 |     2687 | 2025-03-21 | FaZe Clan              | L   | 0.271      | -            | -                | -                | -         |    -4.57 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           16 |     2740 | 2025-03-19 | Team Vitality          | L   | 0.258      | -            | -                | -                | -         |    -1.84 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           15 |     3478 | 2025-02-23 | FaZe Clan              | W   | 0.097      | -            | -                | -                | -         |     1.45 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           14 |     3493 | 2025-02-22 | MOUZ                   | L   | 0.091      | -            | -                | -                | -         |    -0.86 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           13 |     3512 | 2025-02-21 | The MongolZ            | W   | 0.083      | -            | -                | -                | -         |     1.57 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           12 |     3523 | 2025-02-20 | HEROIC                 | L   | 0.077      | -            | -                | -                | -         |    -1.84 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           11 |     3580 | 2025-02-18 | BIG                    | W   | 0.063      | -            | -                | -                | -         |     0.07 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           10 |     3588 | 2025-02-17 | MIBR                   | W   | 0.058      | -            | -                | -                | -         |     0.13 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            9 |     3603 | 2025-02-16 | Team Falcons           | L   | 0.050      | -            | -                | -                | -         |    -0.99 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            8 |     3617 | 2025-02-15 | SAW                    | W   | 0.045      | -            | -                | -                | -         |     0.13 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            7 |     3647 | 2025-02-14 | PaiN Gaming            | L   | 0.038      | -            | -                | -                | -         |    -0.85 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            6 |     3707 | 2025-02-11 | BetBoom Team           | W   | 0.019      | -            | -                | -                | -         |     0.07 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            5 |     3715 | 2025-02-11 | Zero Tenacity          | W   | 0.017      | -            | -                | -                | -         |     0.00 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            4 |     3741 | 2025-02-10 | BC.Game Esports        | L   | 0.012      | -            | -                | -                | -         |    -0.36 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            3 |     3749 | 2025-02-10 | OG                     | W   | 0.010      | -            | -                | -                | -         |     0.01 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            2 |     3777 | 2025-02-09 | PARIVISION             | W   | 0.005      | -            | -                | -                | -         |     0.00 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            1 |     3782 | 2025-02-09 | 500                    | W   | 0.004      | -            | -                | -                | -         |     0.00 | cadiaN, dev1ce, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($382,933.85)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.90) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2025-07-20 |      1.000 | $220,000.00    | $220,000.00     |
| 2025-05-18 |      0.657 | $187,500.00    | $123,203.13     |
| 2025-04-13 |      0.425 | $31,250.00     | $13,268.23      |
| 2025-03-30 |      0.331 | $5,000.00      | $1,656.94       |
| 2025-02-23 |      0.099 | $150,000.00    | $14,805.56      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
