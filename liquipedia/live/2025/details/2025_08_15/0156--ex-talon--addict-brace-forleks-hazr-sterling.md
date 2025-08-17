### Roster Details<br />
Team Name: Ex-TALON<br />
Roster: ADDICT, BRACE, Forleks, HaZR, sterling<br />
Global Rank: [156](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_15.md)<br />
Regional Rank: [23]( ../../standings_asia_2025_08_15.md)<br />
<br />
Final Rank Value:  658.2<br />
<br />
Final Rank Value (658.2) = Starting Rank Value (702.4) + Head To Head Adjustments (-44.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.138[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.4
- 400 + ( ( 0.155 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 702.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      440 | 2025-07-16 | SemperFi Esports            | L   | 0.989      | -            | -                | -                | -         |   -10.40 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           31 |      461 | 2025-07-15 | Rooster                     | L   | 0.982      | -            | -                | -                | -         |   -12.49 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           30 |      497 | 2025-07-13 | Mindfreak (Australian team) | W   | 0.970      | 0.314        | 0.003 (0.001)    | 0.140 (0.043)    | 0 (0.000) |    13.91 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           29 |      518 | 2025-07-12 | Unsettled Resentment        | L   | 0.964      | -            | -                | -                | -         |   -19.23 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           28 |      524 | 2025-07-12 | Nomads (Mongolian team)     | L   | 0.963      | -            | -                | -                | -         |   -11.44 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           27 |      553 | 2025-07-11 | Mindfreak (Australian team) | W   | 0.957      | 0.143        | 0.003 (0.000)    | 0.140 (0.019)    | 0 (0.000) |    13.60 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           26 |     2012 | 2025-04-16 | SemperFi Esports            | L   | 0.388      | -            | -                | -                | -         |    -4.32 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           25 |     2036 | 2025-04-15 | Rooster                     | W   | 0.382      | 0.147        | 0.011 (0.001)    | 0.221 (0.012)    | 0 (0.000) |     6.67 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           24 |     2061 | 2025-04-14 | SemperFi Esports            | L   | 0.375      | -            | -                | -                | -         |    -4.19 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           23 |     2476 | 2025-03-30 | Justice For Tomorrow        | L   | 0.270      | -            | -                | -                | -         |    -6.36 | ADDICT, BRACE, HaZR, malta, sterling   |
|           22 |     2481 | 2025-03-30 | Justice For Tomorrow        | L   | 0.270      | -            | -                | -                | -         |    -6.47 | ADDICT, BRACE, HaZR, malta, sterling   |
|           21 |     2487 | 2025-03-29 | Rooster                     | L   | 0.269      | -            | -                | -                | -         |    -3.99 | ADDICT, BRACE, HaZR, sterling, vision  |
|           20 |     2542 | 2025-03-29 | FURY                        | W   | 0.263      | 0.624        | 0.001 (0.000)    | 0.107 (0.018)    | 0 (0.000) |     3.26 | ADDICT, BRACE, HaZR, sterling, vision  |
|           19 |     2551 | 2025-03-28 | Ground Zero Gaming          | W   | 0.262      | 0.624        | 0.004 (0.001)    | 0.164 (0.027)    | 0 (0.000) |     4.00 | ADDICT, BRACE, HaZR, sterling, vision  |
|           18 |     2617 | 2025-03-27 | Only One Word               | W   | 0.255      | 0.624        | 0.001 (0.000)    | 0.107 (0.017)    | 0 (0.000) |     4.04 | ADDICT, BRACE, HaZR, sterling, vision  |
|           17 |     2680 | 2025-03-27 | Underground Esports Club    | W   | 0.250      | 0.297        | -                | 0.057 (0.004)    | -         |     1.86 | ADDICT, BRACE, HaZR, malta, sterling   |
|           16 |     2684 | 2025-03-27 | Underground Esports Club    | W   | 0.250      | -            | -                | -                | -         |     1.89 | ADDICT, BRACE, HaZR, malta, sterling   |
|           15 |     2692 | 2025-03-26 | SemperFi Esports            | L   | 0.249      | -            | -                | -                | -         |    -2.93 | ADDICT, BRACE, HaZR, sterling, vision  |
|           14 |     2740 | 2025-03-26 | Mindfreak (Australian team) | L   | 0.244      | -            | -                | -                | -         |    -4.33 | ADDICT, BRACE, HaZR, malta, sterling   |
|           13 |     2745 | 2025-03-26 | Mindfreak (Australian team) | L   | 0.243      | -            | -                | -                | -         |    -4.42 | ADDICT, BRACE, HaZR, malta, sterling   |
|           12 |     2777 | 2025-03-25 | Only One Word               | L   | 0.237      | -            | -                | -                | -         |    -3.82 | ADDICT, BRACE, HaZR, malta, sterling   |
|           11 |     2778 | 2025-03-25 | Only One Word               | L   | 0.236      | -            | -                | -                | -         |    -3.90 | ADDICT, BRACE, HaZR, malta, sterling   |
|           10 |     2799 | 2025-03-23 | SemperFi Esports            | L   | 0.223      | -            | -                | -                | -         |    -2.84 | ADDICT, HaZR, malta, nettik, sterling  |
|            9 |     2816 | 2025-03-22 | Rooster                     | W   | 0.216      | 0.345        | 0.011 (0.001)    | 0.221 (0.017)    | 1 (0.216) |     3.60 | ADDICT, HaZR, malta, nettik, sterling  |
|            8 |     2817 | 2025-03-21 | SemperFi Esports            | W   | 0.215      | 0.345        | 0.013 (0.001)    | 0.383 (0.028)    | 1 (0.215) |     4.08 | ADDICT, HaZR, malta, nettik, sterling  |
|            7 |     2829 | 2025-03-21 | Mindfreak (Australian team) | W   | 0.210      | 0.345        | 0.001 (0.000)    | -                | 1 (0.210) |     2.37 | ADDICT, HaZR, malta, nettik, sterling  |
|            6 |     2831 | 2025-03-20 | Ground Zero Gaming          | L   | 0.208      | -            | -                | -                | -         |    -3.45 | ADDICT, HaZR, malta, nettik, sterling  |
|            5 |     2834 | 2025-03-20 | Vantage Esports             | W   | 0.207      | -            | -                | -                | 1 (0.207) |     1.54 | ADDICT, HaZR, malta, nettik, sterling  |
|            4 |     2892 | 2025-03-19 | FURY                        | W   | 0.197      | 0.297        | 0.001 (0.000)    | 0.107 (0.006)    | -         |     2.46 | ADDICT, BRACE, HaZR, malta, sterling   |
|            3 |     2896 | 2025-03-19 | FURY                        | L   | 0.197      | -            | -                | -                | -         |    -3.79 | ADDICT, BRACE, HaZR, malta, sterling   |
|            2 |     3577 | 2025-02-24 | Vantage Esports             | W   | 0.049      | -            | -                | -                | -         |     0.36 | ADDICT, HaZR, malta, nettik, sterling  |
|            1 |     3606 | 2025-02-23 | FURY                        | W   | 0.041      | -            | -                | -                | -         |     0.51 | ADDICT, HaZR, malta, nettik, sterling  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($700.18)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      0.223 | $3,140.00      | $700.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
