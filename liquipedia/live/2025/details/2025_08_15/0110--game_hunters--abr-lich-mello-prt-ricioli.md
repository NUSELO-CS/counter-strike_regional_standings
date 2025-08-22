### Roster Details<br />
Team Name: Game Hunters<br />
Roster: abr, Lich, mello, prt, RICIOLI<br />
Global Rank: [110](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_15.md)<br />
Regional Rank: [27]( ../../standings_americas_2025_08_15.md)<br />
<br />
Final Rank Value:  760.0<br />
<br />
Final Rank Value (760.0) = Starting Rank Value (802.1) + Head To Head Adjustments (-42.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.361[<sup>2</sup>](#table1)

The average of these factors is 0.206<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.1
- 400 + ( ( 0.206 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 802.1


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
|           38 |      125 | 2025-08-03 | ODDIK                    | L   | 1.000      | -            | -                | -                | -         |    -5.63 | abr, Lich, mello, prt, RICIOLI  |
|           37 |      161 | 2025-08-01 | Bad Luck                 | W   | 1.000      | 0.143        | -                | 0.118 (0.017)    | 0 (0.000) |     7.90 | abr, Lich, mello, prt, RICIOLI  |
|           36 |      181 | 2025-07-31 | Dusty Roots              | L   | 1.000      | -            | -                | -                | -         |   -20.98 | abr, Lich, mello, prt, RICIOLI  |
|           35 |      199 | 2025-07-29 | RED Canids               | L   | 1.000      | -            | -                | -                | -         |   -10.94 | abr, Lich, mello, prt, RICIOLI  |
|           34 |      257 | 2025-07-26 | ShindeN                  | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.322 (0.046)    | 0 (0.000) |    11.52 | abr, Lich, mello, prt, RICIOLI  |
|           33 |      284 | 2025-07-25 | Players (Brazilian team) | W   | 1.000      | 0.143        | -                | 0.266 (0.038)    | 0 (0.000) |     9.91 | abr, Lich, mello, prt, RICIOLI  |
|           32 |      347 | 2025-07-19 | KOLESIE                  | L   | 1.000      | -            | -                | -                | -         |    -3.82 | abr, Lich, mello, prt, RICIOLI  |
|           31 |      372 | 2025-07-18 | M80                      | L   | 1.000      | -            | -                | -                | -         |    -2.47 | abr, Lich, mello, prt, RICIOLI  |
|           30 |      378 | 2025-07-18 | KOLESIE                  | W   | 1.000      | 0.407        | 0.056 (0.023)    | 0.480 (0.195)    | 1 (1.000) |    28.09 | abr, Lich, mello, prt, RICIOLI  |
|           29 |      569 | 2025-07-10 | Elevate                  | L   | 0.952      | -            | -                | -                | -         |   -22.68 | abr, Lich, mello, prt, RICIOLI  |
|           28 |      572 | 2025-07-10 | RED Canids               | L   | 0.951      | -            | -                | -                | -         |   -11.95 | abr, Lich, mello, prt, RICIOLI  |
|           27 |      683 | 2025-06-28 | Keyd Stars               | L   | 0.872      | -            | -                | -                | -         |   -15.44 | abr, Lich, mello, prt, RICIOLI  |
|           26 |      711 | 2025-06-23 | RED Canids               | L   | 0.837      | -            | -                | -                | -         |   -13.56 | abr, Lich, mello, prt, RICIOLI  |
|           25 |      729 | 2025-06-21 | Players (Brazilian team) | W   | 0.825      | 0.371        | 0.001 (0.000)    | 0.266 (0.081)    | 0 (0.000) |     7.42 | abr, Lich, mello, prt, RICIOLI  |
|           24 |      771 | 2025-06-18 | MIBR Academy             | W   | 0.807      | 0.371        | 0.001 (0.000)    | 0.108 (0.032)    | 0 (0.000) |     6.59 | abr, Lich, mello, prt, RICIOLI  |
|           23 |      804 | 2025-06-16 | Messitas                 | W   | 0.793      | 0.371        | 0.001 (0.000)    | -                | 0 (0.000) |     5.64 | abr, Lich, mello, prt, RICIOLI  |
|           22 |      856 | 2025-06-14 | 2Game Esports            | L   | 0.778      | -            | -                | -                | -         |   -12.31 | abr, Lich, mello, prt, RICIOLI  |
|           21 |     1517 | 2025-05-08 | Sharks Esports           | L   | 0.533      | -            | -                | -                | -         |    -4.42 | abr, Lich, mello, prt, RICIOLI  |
|           20 |     1544 | 2025-05-07 | RED Canids               | W   | 0.527      | 0.446        | 0.003 (0.001)    | -                | 0 (0.000) |     6.66 | abr, Lich, mello, prt, RICIOLI  |
|           19 |     1579 | 2025-05-06 | KRÜ Esports              | W   | 0.520      | 0.446        | 0.006 (0.001)    | 0.294 (0.068)    | 0 (0.000) |     6.33 | abr, Lich, mello, prt, RICIOLI  |
|           18 |     1813 | 2025-04-27 | Ninjas in Pyjamas        | L   | 0.456      | -            | -                | -                | -         |    -0.25 | abr, CaPiM, mello, prt, RICIOLI |
|           17 |     1822 | 2025-04-26 | Shimmer                  | W   | 0.455      | 0.333        | 0.079 (0.012)    | 0.144 (0.022)    | 1 (0.455) |     8.67 | abr, CaPiM, mello, prt, RICIOLI |
|           16 |     2158 | 2025-04-09 | Bad Luck                 | W   | 0.340      | -            | -                | -                | -         |     2.33 | abr, Lich, mello, prt, RICIOLI  |
|           15 |     2162 | 2025-04-09 | Bad Luck                 | W   | 0.340      | -            | -                | -                | -         |     2.38 | abr, Lich, mello, prt, RICIOLI  |
|           14 |     2203 | 2025-04-08 | Bounty Hunters Esports   | W   | 0.334      | 0.393        | 0.009 (0.001)    | 0.500 (0.066)    | -         |     4.79 | abr, Lich, mello, prt, RICIOLI  |
|           13 |     2205 | 2025-04-08 | Bounty Hunters Esports   | L   | 0.333      | -            | -                | -                | -         |    -5.83 | abr, Lich, mello, prt, RICIOLI  |
|           12 |     2597 | 2025-03-28 | Martians                 | L   | 0.258      | -            | -                | -                | -         |    -6.76 | abr, Lich, mello, prt, slashzz  |
|           11 |     2658 | 2025-03-27 | KRÜ Esports              | L   | 0.252      | -            | -                | -                | -         |    -4.72 | abr, Lich, mello, prt, slashzz  |
|           10 |     3084 | 2025-03-09 | KRÜ Esports              | L   | 0.133      | -            | -                | -                | -         |    -2.49 | abr, mello, nolkz, prt, slashzz |
|            9 |     3101 | 2025-03-09 | Floripa Stars            | W   | 0.132      | -            | -                | -                | -         |     0.68 | abr, mello, nolkz, prt, slashzz |
|            8 |     3141 | 2025-03-08 | Fluxo                    | L   | 0.128      | -            | -                | -                | -         |    -2.68 | abr, mello, nolkz, prt, slashzz |
|            7 |     3226 | 2025-03-07 | Yawara E-Sports          | W   | 0.120      | 0.769        | 0.007 (0.001)    | 0.269 (0.025)    | -         |     1.42 | abr, mello, nolkz, prt, slashzz |
|            6 |     3288 | 2025-03-06 | LaChampionsLiga          | L   | 0.114      | -            | -                | -                | -         |    -2.99 | abr, mello, nolkz, prt, slashzz |
|            5 |     3367 | 2025-03-04 | 20/70                    | W   | 0.099      | -            | -                | -                | -         |     0.30 | abr, mello, nolkz, prt, slashzz |
|            4 |     3411 | 2025-03-02 | R2 Esports Club          | W   | 0.086      | -            | -                | -                | -         |     0.42 | abr, mello, nolkz, prt, slashzz |
|            3 |     3459 | 2025-02-28 | PaiN Gaming Academy      | L   | 0.074      | -            | -                | -                | -         |    -1.98 | abr, mello, nolkz, prt, slashzz |
|            2 |     3484 | 2025-02-27 | Keyd Stars               | L   | 0.065      | -            | -                | -                | -         |    -1.22 | abr, mello, nolkz, prt, slashzz |
|            1 |     3719 | 2025-02-17 | Players (Brazilian team) | L   | 0.001      | -            | -                | -                | -         |    -0.02 | abr, mello, nolkz, prt, slashzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,659.79)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.553 | $3,000.00      | $1,659.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
