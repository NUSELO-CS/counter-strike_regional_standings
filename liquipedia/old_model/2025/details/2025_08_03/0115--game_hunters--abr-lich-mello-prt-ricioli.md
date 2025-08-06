### Roster Details<br />
Team Name: Game Hunters<br />
Roster: abr, Lich, mello, prt, RICIOLI<br />
Global Rank: [115](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_03.md)<br />
Regional Rank: [25]( ../../standings_americas_2025_08_03.md)<br />
<br />
Final Rank Value:  743.2<br />
<br />
Final Rank Value (743.2) = Starting Rank Value (789.3) + Head To Head Adjustments (-46.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 789.3
- 400 + ( ( 0.206 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 789.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      164 | 2025-07-19 | KOLESIE                  | L   | 1.000      | -            | -                | -                | -         |    -4.07 | abr, Lich, mello, prt, RICIOLI  |
|           36 |      189 | 2025-07-18 | M80                      | L   | 1.000      | -            | -                | -                | -         |    -2.77 | abr, Lich, mello, prt, RICIOLI  |
|           35 |      195 | 2025-07-18 | KOLESIE                  | W   | 1.000      | 0.407        | 0.048 (0.019)    | 0.543 (0.221)    | 1 (1.000) |    27.85 | abr, Lich, mello, prt, RICIOLI  |
|           34 |      386 | 2025-07-10 | Elevate                  | L   | 1.000      | -            | -                | -                | -         |   -23.14 | abr, Lich, mello, prt, RICIOLI  |
|           33 |      389 | 2025-07-10 | RED Canids               | L   | 1.000      | -            | -                | -                | -         |   -12.60 | abr, Lich, mello, prt, RICIOLI  |
|           32 |      500 | 2025-06-28 | Keyd Stars               | L   | 0.952      | -            | -                | -                | -         |   -16.53 | abr, Lich, mello, prt, RICIOLI  |
|           31 |      528 | 2025-06-23 | RED Canids               | L   | 0.917      | -            | -                | -                | -         |   -14.84 | abr, Lich, mello, prt, RICIOLI  |
|           30 |      546 | 2025-06-21 | Players (Brazilian team) | W   | 0.906      | 0.371        | 0.001 (0.000)    | 0.230 (0.077)    | 0 (0.000) |     8.40 | abr, Lich, mello, prt, RICIOLI  |
|           29 |      588 | 2025-06-18 | MIBR Academy             | W   | 0.887      | 0.371        | 0.001 (0.000)    | 0.084 (0.028)    | 0 (0.000) |     7.52 | abr, Lich, mello, prt, RICIOLI  |
|           28 |      621 | 2025-06-16 | Messitas                 | W   | 0.873      | 0.371        | 0.001 (0.000)    | 0.012 (0.004)    | 0 (0.000) |     6.48 | abr, Lich, mello, prt, RICIOLI  |
|           27 |      673 | 2025-06-14 | 2Game Esports            | L   | 0.858      | -            | -                | -                | -         |   -13.58 | abr, Lich, mello, prt, RICIOLI  |
|           26 |     1334 | 2025-05-08 | Sharks Esports           | L   | 0.613      | -            | -                | -                | -         |    -6.57 | abr, Lich, mello, prt, RICIOLI  |
|           25 |     1361 | 2025-05-07 | RED Canids               | W   | 0.607      | 0.446        | 0.015 (0.004)    | 0.504 (0.136)    | 0 (0.000) |     9.58 | abr, Lich, mello, prt, RICIOLI  |
|           24 |     1396 | 2025-05-06 | KRÜ Esports              | W   | 0.600      | 0.446        | 0.005 (0.001)    | 0.257 (0.069)    | 0 (0.000) |     7.10 | abr, Lich, mello, prt, RICIOLI  |
|           23 |     1630 | 2025-04-27 | Ninjas in Pyjamas        | L   | 0.536      | -            | -                | -                | -         |    -0.38 | abr, CaPiM, mello, prt, RICIOLI |
|           22 |     1639 | 2025-04-26 | Supernova Comets         | W   | 0.535      | 0.333        | 0.074 (0.013)    | 0.200 (0.036)    | 1 (0.535) |    10.47 | abr, CaPiM, mello, prt, RICIOLI |
|           21 |     1975 | 2025-04-09 | Floripa Stars            | W   | 0.420      | -            | -                | -                | 0 (0.000) |     2.90 | abr, Lich, mello, prt, RICIOLI  |
|           20 |     1979 | 2025-04-09 | Floripa Stars            | W   | 0.420      | -            | -                | -                | 0 (0.000) |     2.97 | abr, Lich, mello, prt, RICIOLI  |
|           19 |     2020 | 2025-04-08 | Bounty Hunters Esports   | W   | 0.414      | 0.143        | 0.009 (0.001)    | 0.470 (0.028)    | 0 (0.000) |     5.84 | abr, Lich, mello, prt, RICIOLI  |
|           18 |     2022 | 2025-04-08 | Bounty Hunters Esports   | L   | 0.413      | -            | -                | -                | -         |    -7.35 | abr, Lich, mello, prt, RICIOLI  |
|           17 |     2414 | 2025-03-28 | Martians                 | L   | 0.338      | -            | -                | -                | -         |    -8.79 | abr, Lich, mello, prt, slashzz  |
|           16 |     2475 | 2025-03-27 | KRÜ Esports              | L   | 0.332      | -            | -                | -                | -         |    -6.25 | abr, Lich, mello, prt, slashzz  |
|           15 |     2901 | 2025-03-09 | KRÜ Esports              | L   | 0.214      | -            | -                | -                | -         |    -3.99 | abr, mello, nolkz, prt, slashzz |
|           14 |     2918 | 2025-03-09 | Floripa Stars            | W   | 0.212      | -            | -                | -                | -         |     1.30 | abr, mello, nolkz, prt, slashzz |
|           13 |     2958 | 2025-03-08 | Fluxo                    | L   | 0.208      | -            | -                | -                | -         |    -4.17 | abr, mello, nolkz, prt, slashzz |
|           12 |     3043 | 2025-03-07 | Yawara E-Sports          | W   | 0.200      | 0.143        | 0.003 (0.000)    | 0.124 (0.004)    | -         |     1.99 | abr, mello, nolkz, prt, slashzz |
|           11 |     3105 | 2025-03-06 | LaChampionsLiga          | L   | 0.194      | -            | -                | -                | -         |    -5.06 | abr, mello, nolkz, prt, slashzz |
|           10 |     3184 | 2025-03-04 | 20/70                    | W   | 0.179      | -            | -                | -                | -         |     0.60 | abr, mello, nolkz, prt, slashzz |
|            9 |     3228 | 2025-03-02 | R2 Esports Club          | W   | 0.166      | -            | -                | -                | -         |     0.81 | abr, mello, nolkz, prt, slashzz |
|            8 |     3276 | 2025-02-28 | PaiN Gaming Academy      | L   | 0.154      | -            | -                | -                | -         |    -4.07 | abr, mello, nolkz, prt, slashzz |
|            7 |     3301 | 2025-02-27 | Keyd Stars               | L   | 0.145      | -            | -                | -                | -         |    -2.71 | abr, mello, nolkz, prt, slashzz |
|            6 |     3536 | 2025-02-17 | Players (Brazilian team) | L   | 0.081      | -            | -                | -                | -         |    -1.73 | abr, mello, nolkz, prt, slashzz |
|            5 |     3566 | 2025-02-15 | KRÜ Esports              | W   | 0.068      | 0.371        | 0.005 (0.000)    | 0.257 (0.006)    | -         |     0.83 | abr, mello, nolkz, prt, slashzz |
|            4 |     3599 | 2025-02-14 | ShindeN                  | L   | 0.058      | -            | -                | -                | -         |    -1.24 | abr, mello, nolkz, prt, slashzz |
|            3 |     3634 | 2025-02-12 | SELVA                    | L   | 0.047      | -            | -                | -                | -         |    -0.85 | abr, mello, nolkz, prt, slashzz |
|            2 |     3728 | 2025-02-09 | AdalYamigos              | W   | 0.026      | -            | -                | -                | -         |     0.23 | abr, mello, nolkz, prt, slashzz |
|            1 |     3815 | 2025-02-07 | BESTIA                   | L   | 0.014      | -            | -                | -                | -         |    -0.25 | abr, mello, nolkz, prt, slashzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,900.00)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.633 | $3,000.00      | $1,900.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
