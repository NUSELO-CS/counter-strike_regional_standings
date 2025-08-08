### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, sliimey, Terryyy, TjP<br />
Global Rank: [113](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_05.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_08_05.md)<br />
<br />
Final Rank Value:  754.7<br />
<br />
Final Rank Value (754.7) = Starting Rank Value (729.3) + Head To Head Adjustments (25.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.090[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.271[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.3
- 400 + ( ( 0.173 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 729.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      250 | 2025-07-17 | SemperFi Esports            | L   | 1.000      | -            | -                | -                | -         |   -12.76 | asap, chelleos, sliimey, Terryyy, TjP |
|           34 |      272 | 2025-07-16 | KZG                         | W   | 1.000      | 0.314        | 0.002 (0.001)    | 0.204 (0.064)    | 0 (0.000) |    12.91 | asap, chelleos, sliimey, Terryyy, TjP |
|           33 |      323 | 2025-07-15 | Ex-TALON                    | W   | 1.000      | 0.314        | 0.002 (0.001)    | 0.179 (0.056)    | 0 (0.000) |    12.77 | asap, chelleos, sliimey, Terryyy, TjP |
|           32 |      382 | 2025-07-12 | Animus Victoria             | W   | 1.000      | 0.314        | -                | 0.101 (0.032)    | 0 (0.000) |     7.60 | asap, chelleos, sliimey, Terryyy, TjP |
|           31 |     1508 | 2025-05-04 | Mindfreak (Australian team) | W   | 0.563      | 0.326        | 0.003 (0.000)    | 0.176 (0.032)    | 0 (0.000) |     7.69 | asap, chelleos, DannyG, Sliimey, TjP  |
|           30 |     1557 | 2025-05-02 | Ground Zero Gaming          | W   | 0.550      | 0.326        | 0.005 (0.001)    | 0.208 (0.037)    | 0 (0.000) |     8.17 | asap, chelleos, DannyG, Sliimey, TjP  |
|           29 |     1898 | 2025-04-15 | Ex-TALON                    | L   | 0.442      | -            | -                | -                | -         |    -7.64 | asap, chelleos, DannyG, Sliimey, TjP  |
|           28 |     1922 | 2025-04-14 | FlyQuest                    | L   | 0.435      | -            | -                | -                | -         |    -0.42 | asap, chelleos, DannyG, Sliimey, TjP  |
|           27 |     2042 | 2025-04-09 | Only One Word               | L   | 0.397      | -            | -                | -                | -         |    -7.56 | asap, chelleos, DannyG, Sliimey, TjP  |
|           26 |     2046 | 2025-04-09 | Only One Word               | W   | 0.396      | 0.297        | 0.001 (0.000)    | 0.143 (0.017)    | 0 (0.000) |     5.01 | asap, chelleos, DannyG, Sliimey, TjP  |
|           25 |     2255 | 2025-04-02 | KZG                         | W   | 0.350      | -            | -                | -                | 0 (0.000) |     2.13 | asap, chelleos, DannyG, Sliimey, TjP  |
|           24 |     2261 | 2025-04-02 | KZG                         | W   | 0.350      | -            | -                | -                | -         |     2.17 | asap, chelleos, DannyG, Sliimey, TjP  |
|           23 |     2346 | 2025-03-30 | SemperFi Esports            | L   | 0.329      | -            | -                | -                | -         |    -4.11 | asap, chelleos, DannyG, Sliimey, TjP  |
|           22 |     2349 | 2025-03-29 | Ex-TALON                    | W   | 0.328      | 0.624        | 0.002 (0.000)    | 0.179 (0.037)    | -         |     5.00 | asap, chelleos, DannyG, Sliimey, TjP  |
|           21 |     2409 | 2025-03-29 | SemperFi Esports            | L   | 0.323      | -            | -                | -                | -         |    -4.07 | asap, chelleos, DannyG, Sliimey, TjP  |
|           20 |     2473 | 2025-03-28 | Ground Zero Gaming          | W   | 0.316      | 0.624        | 0.005 (0.001)    | 0.208 (0.041)    | -         |     4.57 | asap, chelleos, DannyG, Sliimey, TjP  |
|           19 |     2550 | 2025-03-27 | KZG                         | W   | 0.309      | -            | -                | -                | -         |     1.99 | asap, chelleos, DannyG, Sliimey, TjP  |
|           18 |     2664 | 2025-03-22 | SemperFi Esports            | L   | 0.282      | -            | -                | -                | -         |    -3.67 | asap, chelleos, DannyG, Sliimey, TjP  |
|           17 |     2678 | 2025-03-22 | Ex-TALON                    | L   | 0.276      | -            | -                | -                | -         |    -4.47 | asap, chelleos, DannyG, Sliimey, TjP  |
|           16 |     2681 | 2025-03-21 | Ground Zero Gaming          | W   | 0.274      | 0.345        | 0.005 (0.000)    | 0.208 (0.020)    | 1 (0.274) |     3.93 | asap, chelleos, DannyG, Sliimey, TjP  |
|           15 |     2713 | 2025-03-20 | Only One Word               | W   | 0.263      | 0.345        | 0.001 (0.000)    | -                | 1 (0.263) |     3.83 | asap, chelleos, DannyG, Sliimey, TjP  |
|           14 |     2716 | 2025-03-19 | SemperFi Esports            | L   | 0.262      | -            | -                | -                | -         |    -3.43 | asap, chelleos, DannyG, Sliimey, TjP  |
|           13 |     2729 | 2025-03-19 | LE-LUX Esports              | W   | 0.261      | -            | -                | -                | 1 (0.261) |     1.15 | asap, chelleos, DannyG, Sliimey, TjP  |
|           12 |     2798 | 2025-03-17 | Ground Zero Gaming          | L   | 0.243      | -            | -                | -                | -         |    -4.31 | asap, chelleos, DannyG, Sliimey, TjP  |
|           11 |     2800 | 2025-03-17 | Ground Zero Gaming          | W   | 0.243      | 0.297        | 0.005 (0.000)    | 0.208 (0.015)    | -         |     3.40 | asap, chelleos, DannyG, Sliimey, TjP  |
|           10 |     3396 | 2025-02-26 | Justice For Tomorrow        | W   | 0.117      | -            | -                | -                | -         |     0.77 | asap, chelleos, DannyG, Sliimey, TjP  |
|            9 |     3398 | 2025-02-26 | Justice For Tomorrow        | W   | 0.117      | -            | -                | -                | -         |     0.78 | asap, chelleos, DannyG, Sliimey, TjP  |
|            8 |     3445 | 2025-02-24 | FURY                        | L   | 0.107      | -            | -                | -                | -         |    -2.18 | asap, chelleos, DannyG, Sliimey, TjP  |
|            7 |     3470 | 2025-02-23 | Vantage Esports             | L   | 0.100      | -            | -                | -                | -         |    -2.46 | asap, chelleos, DannyG, Sliimey, TjP  |
|            6 |     3552 | 2025-02-19 | Underground Esports Club    | L   | 0.070      | -            | -                | -                | -         |    -1.75 | asap, chelleos, DannyG, Sliimey, TjP  |
|            5 |     3556 | 2025-02-19 | Underground Esports Club    | W   | 0.070      | -            | -                | -                | -         |     0.46 | asap, chelleos, DannyG, Sliimey, TjP  |
|            4 |     3723 | 2025-02-10 | ATOX Esports                | L   | 0.015      | -            | -                | -                | -         |    -0.35 | asap, chelleos, dpr, Sliimey, TjP     |
|            3 |     3754 | 2025-02-10 | SemperFi Esports            | W   | 0.009      | -            | -                | -                | -         |     0.17 | asap, chelleos, dpr, Sliimey, TjP     |
|            2 |     3759 | 2025-02-09 | Just Swing (Chinese team)   | W   | 0.008      | -            | -                | -                | -         |     0.12 | asap, chelleos, dpr, Sliimey, TjP     |
|            1 |     3792 | 2025-02-08 | DXA Esports                 | W   | 0.002      | -            | -                | -                | -         |     0.01 | asap, chelleos, dpr, Sliimey, TjP     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,314.81)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-17 |      1.000 | $1,952.31      | $1,952.31       |
| 2025-05-04 |      0.563 | $3,250.00      | $1,829.48       |
| 2025-03-23 |      0.283 | $1,884.00      | $533.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
