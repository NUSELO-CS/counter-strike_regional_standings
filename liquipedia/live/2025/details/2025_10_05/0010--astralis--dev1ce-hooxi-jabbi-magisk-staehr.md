### Roster Details<br />
Team Name: Astralis<br />
Roster: dev1ce, HooXi, jabbi, Magisk, Staehr<br />
Global Rank: [10](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [8]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  1662.7<br />
<br />
Final Rank Value (1662.7) = Starting Rank Value (1755.5) + Head To Head Adjustments (-92.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.917[<sup>1</sup>](#table2)
- Bounty Collected: 0.617[<sup>2</sup>](#table1)
- Opponent Network: 0.340[<sup>2</sup>](#table1)
- LAN Wins: 0.898[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.446[<sup>2</sup>](#table1)

The average of these factors is 0.693<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1755.5
- 400 + ( ( 0.693 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1755.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       56 | 2025-10-02 | Legacy             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.67 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           39 |       70 | 2025-10-01 | HEROIC             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.60 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           38 |       86 | 2025-09-30 | GamerLegion        | L   | 1.000      | -            | -                | -                | -         |   -20.71 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           37 |      122 | 2025-09-29 | ENCE               | L   | 1.000      | -            | -                | -                | -         |   -28.03 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           36 |      160 | 2025-09-28 | Fluxo              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.83 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           35 |      404 | 2025-09-19 | FURIA              | L   | 1.000      | -            | -                | -                | -         |    -7.30 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           34 |      470 | 2025-09-17 | GamerLegion        | W   | 1.000      | 1.000        | 0.332 (0.332)    | 0.398 (0.398)    | 1 (1.000) |     9.88 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           33 |      482 | 2025-09-16 | Legacy             | W   | 1.000      | 1.000        | 0.123 (0.123)    | 0.527 (0.527)    | 1 (1.000) |     4.61 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           32 |      504 | 2025-09-15 | PaiN Gaming        | L   | 1.000      | -            | -                | -                | -         |   -22.51 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           31 |      559 | 2025-09-14 | Virtus.pro         | W   | 1.000      | 1.000        | 0.235 (0.235)    | 0.285 (0.285)    | 1 (1.000) |     4.44 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           30 |      641 | 2025-09-12 | Aurora Gaming      | L   | 1.000      | -            | -                | -                | -         |   -12.69 | dev1ce, HooXi, jabbi, Magisk, Staehr |
|           29 |     1222 | 2025-08-20 | TYLOO              | L   | 0.885      | -            | -                | -                | -         |   -18.23 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           28 |     1418 | 2025-08-14 | MOUZ               | L   | 0.844      | -            | -                | -                | -         |   -10.15 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           27 |     1635 | 2025-08-09 | Natus Vincere      | W   | 0.810      | 0.624        | 0.936 (0.473)    | 0.351 (0.177)    | -         |    14.95 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           26 |     1674 | 2025-08-06 | Rare Atom          | W   | 0.793      | 0.624        | -                | 0.497 (0.246)    | -         |     0.83 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           25 |     1819 | 2025-07-27 | FURIA              | L   | 0.726      | -            | -                | -                | -         |    -6.11 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           24 |     1855 | 2025-07-26 | Team Vitality      | L   | 0.718      | -            | -                | -                | -         |    -7.77 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           23 |     1868 | 2025-07-25 | PaiN Gaming        | W   | 0.712      | 0.769        | 0.341 (0.187)    | -                | 1 (0.712) |     4.94 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           22 |     1873 | 2025-07-25 | FURIA              | L   | 0.710      | -            | -                | -                | -         |    -6.02 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           21 |     1901 | 2025-07-23 | B8                 | W   | 0.697      | 0.769        | 0.262 (0.140)    | 0.417 (0.223)    | 1 (0.697) |     4.26 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           20 |     1916 | 2025-07-20 | TYLOO              | L   | 0.677      | -            | -                | -                | -         |   -12.95 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           19 |     1932 | 2025-07-19 | BetBoom Team       | W   | 0.672      | 1.000        | 0.440 (0.295)    | 0.885 (0.594)    | 1 (0.672) |     3.57 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           18 |     1975 | 2025-07-18 | Lynn Vision Gaming | W   | 0.665      | 1.000        | 0.207 (0.137)    | 0.356 (0.236)    | 1 (0.665) |     2.46 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           17 |     1990 | 2025-07-17 | MIBR               | W   | 0.659      | 1.000        | -                | 0.547 (0.361)    | -         |     4.22 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           16 |     2016 | 2025-07-16 | TYLOO              | L   | 0.652      | -            | -                | -                | -         |   -13.35 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           15 |     2032 | 2025-07-15 | MIBR               | W   | 0.646      | 1.000        | -                | 0.547 (0.354)    | -         |     3.91 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           14 |     2909 | 2025-05-18 | Team Spirit        | L   | 0.257      | -            | -                | -                | -         |    -3.65 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           13 |     2929 | 2025-05-17 | Aurora Gaming      | W   | 0.250      | 1.000        | 1.000 (0.250)    | -                | -         |     4.41 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           12 |     2954 | 2025-05-16 | Natus Vincere      | W   | 0.243      | 1.000        | 0.936 (0.227)    | -                | -         |     4.33 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           11 |     3043 | 2025-05-13 | Virtus.pro         | W   | 0.223      | -            | -                | -                | -         |     0.75 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|           10 |     3057 | 2025-05-12 | Team Spirit        | L   | 0.218      | -            | -                | -                | -         |    -3.14 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|            9 |     3096 | 2025-05-10 | PaiN Gaming        | W   | 0.209      | -            | -                | -                | -         |     1.37 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|            8 |     3124 | 2025-05-09 | ODDIK              | W   | 0.202      | -            | -                | -                | -         |     0.76 | dev1ce, HooXi, jabbi, Staehr, stavn  |
|            7 |     3625 | 2025-04-17 | B8                 | L   | 0.051      | -            | -                | -                | -         |    -1.33 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            6 |     3654 | 2025-04-16 | BIG                | W   | 0.045      | -            | -                | -                | -         |     0.20 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            5 |     3661 | 2025-04-16 | Metizport          | L   | 0.044      | -            | -                | -                | -         |    -1.37 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            4 |     3682 | 2025-04-15 | ENCE               | W   | 0.038      | -            | -                | -                | -         |     0.23 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            3 |     3698 | 2025-04-14 | PARIVISION         | W   | 0.032      | -            | -                | -                | -         |     0.12 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            2 |     3706 | 2025-04-14 | OG                 | L   | 0.031      | -            | -                | -                | -         |    -0.75 | cadiaN, dev1ce, jabbi, Staehr, stavn |
|            1 |     3777 | 2025-04-10 | Virtus.pro         | L   | 0.003      | -            | -                | -                | -         |    -0.07 | cadiaN, dev1ce, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($307,678.13)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.81) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-21 |      1.000 | $67,500.00     | $67,500.00      |
| 2025-08-24 |      0.910 | $20,000.00     | $18,204.17      |
| 2025-08-17 |      0.864 | $18,750.00     | $16,208.33      |
| 2025-08-03 |      0.771 | $10,000.00     | $7,713.89       |
| 2025-07-20 |      0.677 | $220,000.00    | $149,050.00     |
| 2025-05-18 |      0.257 | $187,500.00    | $48,229.17      |
| 2025-04-13 |      0.025 | $31,250.00     | $772.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
