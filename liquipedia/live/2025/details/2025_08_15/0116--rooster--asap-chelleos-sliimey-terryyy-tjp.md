### Roster Details<br />
Team Name: Rooster<br />
Roster: asap, chelleos, sliimey, Terryyy, TjP<br />
Global Rank: [116](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_15.md)<br />
Regional Rank: [12]( ../../standings_asia_2025_08_15.md)<br />
<br />
Final Rank Value:  751.5<br />
<br />
Final Rank Value (751.5) = Starting Rank Value (724.7) + Head To Head Adjustments (26.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.221[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.7
- 400 + ( ( 0.166 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 724.7


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
|           31 |      388 | 2025-07-17 | SemperFi Esports            | L   | 1.000      | -            | -                | -                | -         |   -13.03 | asap, chelleos, sliimey, Terryyy, TjP |
|           30 |      410 | 2025-07-16 | KZG                         | W   | 0.995      | 0.314        | 0.003 (0.001)    | 0.177 (0.055)    | 0 (0.000) |    13.14 | asap, chelleos, sliimey, Terryyy, TjP |
|           29 |      461 | 2025-07-15 | Ex-TALON                    | W   | 0.982      | 0.314        | 0.002 (0.001)    | 0.138 (0.043)    | 0 (0.000) |    12.61 | asap, chelleos, sliimey, Terryyy, TjP |
|           28 |      520 | 2025-07-12 | Animus Victoria             | W   | 0.963      | 0.314        | -                | 0.087 (0.026)    | 0 (0.000) |     7.41 | asap, chelleos, sliimey, Terryyy, TjP |
|           27 |     1646 | 2025-05-04 | Mindfreak (Australian team) | W   | 0.503      | 0.326        | 0.003 (0.000)    | 0.140 (0.023)    | 0 (0.000) |     6.83 | asap, chelleos, DannyG, Sliimey, TjP  |
|           26 |     1695 | 2025-05-02 | Ground Zero Gaming          | W   | 0.490      | 0.326        | 0.004 (0.001)    | 0.164 (0.026)    | 0 (0.000) |     7.18 | asap, chelleos, DannyG, Sliimey, TjP  |
|           25 |     2036 | 2025-04-15 | Ex-TALON                    | L   | 0.382      | -            | -                | -                | -         |    -6.61 | asap, chelleos, DannyG, Sliimey, TjP  |
|           24 |     2060 | 2025-04-14 | FlyQuest                    | L   | 0.375      | -            | -                | -                | -         |    -0.34 | asap, chelleos, DannyG, Sliimey, TjP  |
|           23 |     2180 | 2025-04-09 | Only One Word               | L   | 0.337      | -            | -                | -                | -         |    -6.34 | asap, chelleos, DannyG, Sliimey, TjP  |
|           22 |     2184 | 2025-04-09 | Only One Word               | W   | 0.336      | 0.297        | 0.001 (0.000)    | 0.107 (0.011)    | 0 (0.000) |     4.34 | asap, chelleos, DannyG, Sliimey, TjP  |
|           21 |     2393 | 2025-04-02 | KZG                         | W   | 0.290      | -            | -                | -                | 0 (0.000) |     1.79 | asap, chelleos, DannyG, Sliimey, TjP  |
|           20 |     2399 | 2025-04-02 | KZG                         | W   | 0.290      | -            | -                | -                | -         |     1.82 | asap, chelleos, DannyG, Sliimey, TjP  |
|           19 |     2484 | 2025-03-30 | SemperFi Esports            | L   | 0.269      | -            | -                | -                | -         |    -3.48 | asap, chelleos, DannyG, Sliimey, TjP  |
|           18 |     2487 | 2025-03-29 | Ex-TALON                    | W   | 0.269      | 0.624        | 0.002 (0.000)    | 0.138 (0.023)    | -         |     4.04 | asap, chelleos, DannyG, Sliimey, TjP  |
|           17 |     2547 | 2025-03-29 | SemperFi Esports            | L   | 0.263      | -            | -                | -                | -         |    -3.42 | asap, chelleos, DannyG, Sliimey, TjP  |
|           16 |     2611 | 2025-03-28 | Ground Zero Gaming          | W   | 0.256      | 0.624        | 0.004 (0.001)    | 0.164 (0.026)    | -         |     3.66 | asap, chelleos, DannyG, Sliimey, TjP  |
|           15 |     2688 | 2025-03-27 | KZG                         | W   | 0.250      | -            | -                | -                | -         |     1.61 | asap, chelleos, DannyG, Sliimey, TjP  |
|           14 |     2802 | 2025-03-22 | SemperFi Esports            | L   | 0.222      | -            | -                | -                | -         |    -2.97 | asap, chelleos, DannyG, Sliimey, TjP  |
|           13 |     2816 | 2025-03-22 | Ex-TALON                    | L   | 0.216      | -            | -                | -                | -         |    -3.55 | asap, chelleos, DannyG, Sliimey, TjP  |
|           12 |     2819 | 2025-03-21 | Ground Zero Gaming          | W   | 0.214      | 0.345        | 0.004 (0.000)    | 0.164 (0.012)    | 1 (0.214) |     3.03 | asap, chelleos, DannyG, Sliimey, TjP  |
|           11 |     2851 | 2025-03-20 | Only One Word               | W   | 0.203      | 0.345        | 0.001 (0.000)    | -                | 1 (0.203) |     2.94 | asap, chelleos, DannyG, Sliimey, TjP  |
|           10 |     2854 | 2025-03-19 | SemperFi Esports            | L   | 0.202      | -            | -                | -                | -         |    -2.71 | asap, chelleos, DannyG, Sliimey, TjP  |
|            9 |     2867 | 2025-03-19 | LE-LUX Esports              | W   | 0.201      | -            | -                | -                | 1 (0.201) |     0.89 | asap, chelleos, DannyG, Sliimey, TjP  |
|            8 |     2936 | 2025-03-17 | Ground Zero Gaming          | L   | 0.183      | -            | -                | -                | -         |    -3.26 | asap, chelleos, DannyG, Sliimey, TjP  |
|            7 |     2938 | 2025-03-17 | Ground Zero Gaming          | W   | 0.183      | 0.297        | 0.004 (0.000)    | 0.164 (0.009)    | -         |     2.54 | asap, chelleos, DannyG, Sliimey, TjP  |
|            6 |     3534 | 2025-02-26 | Justice For Tomorrow        | W   | 0.057      | -            | -                | -                | -         |     0.38 | asap, chelleos, DannyG, Sliimey, TjP  |
|            5 |     3536 | 2025-02-26 | Justice For Tomorrow        | W   | 0.057      | -            | -                | -                | -         |     0.38 | asap, chelleos, DannyG, Sliimey, TjP  |
|            4 |     3583 | 2025-02-24 | FURY                        | L   | 0.047      | -            | -                | -                | -         |    -0.95 | asap, chelleos, DannyG, Sliimey, TjP  |
|            3 |     3608 | 2025-02-23 | Vantage Esports             | L   | 0.040      | -            | -                | -                | -         |    -1.00 | asap, chelleos, DannyG, Sliimey, TjP  |
|            2 |     3690 | 2025-02-19 | Underground Esports Club    | L   | 0.010      | -            | -                | -                | -         |    -0.25 | asap, chelleos, DannyG, Sliimey, TjP  |
|            1 |     3694 | 2025-02-19 | Underground Esports Club    | W   | 0.010      | -            | -                | -                | -         |     0.07 | asap, chelleos, DannyG, Sliimey, TjP  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,007.12)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-17 |      1.000 | $1,952.31      | $1,952.31       |
| 2025-05-04 |      0.503 | $3,250.00      | $1,634.70       |
| 2025-03-23 |      0.223 | $1,884.00      | $420.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
