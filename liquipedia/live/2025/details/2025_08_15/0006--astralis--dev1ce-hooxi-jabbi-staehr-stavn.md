### Roster Details<br />
Team Name: Astralis<br />
Roster: dev1ce, HooXi, jabbi, Staehr, stavn<br />
Global Rank: [6](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [5]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  1753.6<br />
<br />
Final Rank Value (1753.6) = Starting Rank Value (1820.9) + Head To Head Adjustments (-67.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.990[<sup>1</sup>](#table2)
- Bounty Collected: 0.622[<sup>2</sup>](#table1)
- Opponent Network: 0.324[<sup>2</sup>](#table1)
- LAN Wins: 0.974[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.481[<sup>2</sup>](#table1)

The average of these factors is 0.727<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1820.9
- 400 + ( ( 0.727 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1820.9


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
|           38 |       66 | 2025-08-09 | Natus Vincere          | W   | 1.000      | -            | -                | -                | -         |    18.15 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           37 |       95 | 2025-08-06 | Rare Atom              | W   | 1.000      | -            | -                | -                | -         |     1.05 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           36 |      232 | 2025-07-27 | FURIA                  | L   | 1.000      | -            | -                | -                | -         |   -17.11 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           35 |      268 | 2025-07-26 | Team Vitality          | L   | 1.000      | -            | -                | -                | -         |    -4.74 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           34 |      280 | 2025-07-25 | PaiN Gaming            | W   | 1.000      | 0.769        | 0.318 (0.244)    | 0.349 (0.269)    | 1 (1.000) |     7.44 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           33 |      285 | 2025-07-25 | FURIA                  | L   | 1.000      | -            | -                | -                | -         |   -17.62 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           32 |      312 | 2025-07-23 | B8                     | W   | 1.000      | 0.769        | 0.146 (0.112)    | 0.538 (0.414)    | 1 (1.000) |     3.27 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           31 |      327 | 2025-07-20 | TYLOO                  | L   | 1.000      | -            | -                | -                | -         |   -15.15 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           30 |      343 | 2025-07-19 | BetBoom Team           | W   | 1.000      | 1.000        | 0.364 (0.364)    | 0.549 (0.549)    | 1 (1.000) |     3.28 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           29 |      384 | 2025-07-18 | Lynn Vision Gaming     | W   | 1.000      | 1.000        | 0.304 (0.304)    | 0.514 (0.514)    | 1 (1.000) |     8.62 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           28 |      399 | 2025-07-17 | MIBR                   | W   | 0.999      | 1.000        | 0.204 (0.204)    | -                | 1 (0.999) |     3.16 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           27 |      425 | 2025-07-16 | TYLOO                  | L   | 0.992      | -            | -                | -                | -         |   -16.46 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           26 |      441 | 2025-07-15 | MIBR                   | W   | 0.986      | 1.000        | 0.204 (0.201)    | -                | 1 (0.986) |     2.64 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           25 |     1285 | 2025-05-18 | Team Spirit            | L   | 0.597      | -            | -                | -                | -         |    -4.59 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           24 |     1305 | 2025-05-17 | Aurora Gaming          | W   | 0.590      | 1.000        | 0.603 (0.356)    | 0.415 (0.245)    | 1 (0.590) |     6.05 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           23 |     1329 | 2025-05-16 | Natus Vincere          | W   | 0.583      | 1.000        | 0.603 (0.351)    | 0.425 (0.248)    | 1 (0.583) |     9.36 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           22 |     1411 | 2025-05-13 | Virtus.pro             | W   | 0.562      | 1.000        | -                | 0.415 (0.233)    | 1 (0.562) |     3.61 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           21 |     1425 | 2025-05-12 | Team Spirit            | L   | 0.558      | -            | -                | -                | -         |    -4.21 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           20 |     1464 | 2025-05-10 | PaiN Gaming            | W   | 0.549      | 1.000        | 0.318 (0.175)    | -                | 1 (0.549) |     4.39 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           19 |     1492 | 2025-05-09 | ODDIK                  | W   | 0.542      | 1.000        | -                | 0.556 (0.301)    | -         |     0.34 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           18 |     1992 | 2025-04-17 | B8                     | L   | 0.391      | -            | -                | -                | -         |   -11.40 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           17 |     2021 | 2025-04-16 | BIG                    | W   | 0.385      | -            | -                | -                | -         |     0.43 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           16 |     2028 | 2025-04-16 | Metizport              | L   | 0.384      | -            | -                | -                | -         |   -11.96 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           15 |     2049 | 2025-04-15 | ENCE                   | W   | 0.378      | -            | -                | -                | -         |     0.25 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           14 |     2065 | 2025-04-14 | PARIVISION             | W   | 0.372      | 0.525        | -                | 1.000 (0.195)    | -         |     0.19 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           13 |     2073 | 2025-04-14 | OG                     | L   | 0.371      | -            | -                | -                | -         |   -11.36 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           12 |     2144 | 2025-04-10 | Virtus.pro             | L   | 0.342      | -            | -                | -                | -         |    -8.76 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           11 |     2187 | 2025-04-09 | Legacy                 | W   | 0.336      | 1.000        | -                | 0.799 (0.268)    | -         |     0.89 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|           10 |     2235 | 2025-04-08 | Betclic Apogee Esports | L   | 0.329      | -            | -                | -                | -         |   -10.19 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            9 |     2249 | 2025-04-07 | 3DMAX                  | L   | 0.324      | -            | -                | -                | -         |    -6.19 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            8 |     2260 | 2025-04-06 | FaZe Clan              | W   | 0.318      | 1.000        | 0.510 (0.162)    | -                | -         |     4.48 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            7 |     2825 | 2025-03-21 | FaZe Clan              | L   | 0.211      | -            | -                | -                | -         |    -3.70 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            6 |     2878 | 2025-03-19 | Team Vitality          | L   | 0.198      | -            | -                | -                | -         |    -1.63 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            5 |     3616 | 2025-02-23 | FaZe Clan              | W   | 0.037      | -            | -                | -                | -         |     0.53 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            4 |     3631 | 2025-02-22 | MOUZ                   | L   | 0.031      | -            | -                | -                | -         |    -0.32 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            3 |     3650 | 2025-02-21 | The MongolZ            | W   | 0.023      | -            | -                | -                | -         |     0.40 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            2 |     3661 | 2025-02-20 | HEROIC                 | L   | 0.017      | -            | -                | -                | -         |    -0.43 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            1 |     3718 | 2025-02-18 | BIG                    | W   | 0.003      | -            | -                | -                | -         |     0.00 | cadiaN, dev1ce, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($360,534.81)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.98) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2025-07-20 |      1.000 | $220,000.00    | $220,000.00     |
| 2025-05-18 |      0.597 | $187,500.00    | $111,966.15     |
| 2025-04-13 |      0.365 | $31,250.00     | $11,395.40      |
| 2025-03-30 |      0.271 | $5,000.00      | $1,357.29       |
| 2025-02-23 |      0.039 | $150,000.00    | $5,815.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
