### Roster Details<br />
Team Name: Ex-TALON<br />
Roster: ADDICT, BRACE, Forleks, HaZR, sterling<br />
Global Rank: [150](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_05.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_08_05.md)<br />
<br />
Final Rank Value:  656.4<br />
<br />
Final Rank Value (656.4) = Starting Rank Value (706.3) + Head To Head Adjustments (-50.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.123[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.179[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.3
- 400 + ( ( 0.161 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 706.3


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
|           32 |      302 | 2025-07-16 | SemperFi Esports            | L   | 1.000      | -            | -                | -                | -         |   -10.32 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           31 |      323 | 2025-07-15 | Rooster                     | L   | 1.000      | -            | -                | -                | -         |   -12.76 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           30 |      359 | 2025-07-13 | Mindfreak (Australian team) | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.176 (0.055)    | 0 (0.000) |    14.32 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           29 |      380 | 2025-07-12 | Unsettled Resentment        | L   | 1.000      | -            | -                | -                | -         |   -19.83 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           28 |      386 | 2025-07-12 | Nomads (Mongolian team)     | L   | 1.000      | -            | -                | -                | -         |   -12.60 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           27 |      415 | 2025-07-11 | Mindfreak (Australian team) | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.176 (0.025)    | 0 (0.000) |    14.15 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           26 |     1874 | 2025-04-16 | SemperFi Esports            | L   | 0.448      | -            | -                | -                | -         |    -4.86 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           25 |     1898 | 2025-04-15 | Rooster                     | W   | 0.442      | 0.143        | 0.010 (0.001)    | 0.271 (0.017)    | 0 (0.000) |     7.64 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           24 |     1923 | 2025-04-14 | SemperFi Esports            | L   | 0.434      | -            | -                | -                | -         |    -4.74 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           23 |     2338 | 2025-03-30 | Justice For Tomorrow        | L   | 0.330      | -            | -                | -                | -         |    -7.82 | ADDICT, BRACE, HaZR, malta, sterling   |
|           22 |     2343 | 2025-03-30 | Justice For Tomorrow        | L   | 0.330      | -            | -                | -                | -         |    -7.98 | ADDICT, BRACE, HaZR, malta, sterling   |
|           21 |     2349 | 2025-03-29 | Rooster                     | L   | 0.328      | -            | -                | -                | -         |    -4.99 | ADDICT, BRACE, HaZR, sterling, vision  |
|           20 |     2404 | 2025-03-29 | FURY                        | W   | 0.323      | 0.143        | 0.001 (0.000)    | 0.142 (0.007)    | 0 (0.000) |     3.77 | ADDICT, BRACE, HaZR, sterling, vision  |
|           19 |     2413 | 2025-03-28 | Ground Zero Gaming          | W   | 0.322      | 0.143        | 0.005 (0.000)    | 0.208 (0.010)    | 0 (0.000) |     4.87 | ADDICT, BRACE, HaZR, sterling, vision  |
|           18 |     2479 | 2025-03-27 | Only One Word               | W   | 0.315      | 0.143        | 0.001 (0.000)    | 0.143 (0.006)    | 0 (0.000) |     4.90 | ADDICT, BRACE, HaZR, sterling, vision  |
|           17 |     2542 | 2025-03-27 | Underground Esports Club    | W   | 0.310      | 0.143        | -                | 0.072 (0.003)    | -         |     2.24 | ADDICT, BRACE, HaZR, malta, sterling   |
|           16 |     2546 | 2025-03-27 | Underground Esports Club    | W   | 0.310      | -            | -                | -                | -         |     2.28 | ADDICT, BRACE, HaZR, malta, sterling   |
|           15 |     2554 | 2025-03-26 | SemperFi Esports            | L   | 0.309      | -            | -                | -                | -         |    -3.59 | ADDICT, BRACE, HaZR, sterling, vision  |
|           14 |     2602 | 2025-03-26 | Mindfreak (Australian team) | L   | 0.303      | -            | -                | -                | -         |    -5.48 | ADDICT, BRACE, HaZR, malta, sterling   |
|           13 |     2607 | 2025-03-26 | Mindfreak (Australian team) | L   | 0.303      | -            | -                | -                | -         |    -5.62 | ADDICT, BRACE, HaZR, malta, sterling   |
|           12 |     2639 | 2025-03-25 | Only One Word               | L   | 0.297      | -            | -                | -                | -         |    -4.92 | ADDICT, BRACE, HaZR, malta, sterling   |
|           11 |     2640 | 2025-03-25 | Only One Word               | L   | 0.296      | -            | -                | -                | -         |    -5.04 | ADDICT, BRACE, HaZR, malta, sterling   |
|           10 |     2661 | 2025-03-23 | SemperFi Esports            | L   | 0.283      | -            | -                | -                | -         |    -3.63 | ADDICT, HaZR, malta, nettik, sterling  |
|            9 |     2678 | 2025-03-22 | Rooster                     | W   | 0.276      | 0.345        | 0.010 (0.001)    | 0.271 (0.026)    | 1 (0.276) |     4.47 | ADDICT, HaZR, malta, nettik, sterling  |
|            8 |     2679 | 2025-03-21 | SemperFi Esports            | W   | 0.275      | 0.345        | 0.012 (0.001)    | 0.446 (0.042)    | 1 (0.275) |     5.20 | ADDICT, HaZR, malta, nettik, sterling  |
|            7 |     2691 | 2025-03-21 | Mindfreak (Australian team) | W   | 0.270      | 0.345        | 0.001 (0.000)    | -                | 1 (0.270) |     3.15 | ADDICT, HaZR, malta, nettik, sterling  |
|            6 |     2693 | 2025-03-20 | Ground Zero Gaming          | L   | 0.268      | -            | -                | -                | -         |    -4.50 | ADDICT, HaZR, malta, nettik, sterling  |
|            5 |     2696 | 2025-03-20 | Vantage Esports             | W   | 0.267      | -            | -                | -                | 1 (0.267) |     1.93 | ADDICT, HaZR, malta, nettik, sterling  |
|            4 |     2754 | 2025-03-19 | FURY                        | W   | 0.257      | 0.143        | 0.001 (0.000)    | 0.142 (0.005)    | -         |     3.02 | ADDICT, BRACE, HaZR, malta, sterling   |
|            3 |     2758 | 2025-03-19 | FURY                        | L   | 0.257      | -            | -                | -                | -         |    -5.15 | ADDICT, BRACE, HaZR, malta, sterling   |
|            2 |     3439 | 2025-02-24 | Vantage Esports             | W   | 0.109      | -            | -                | -                | -         |     0.79 | ADDICT, HaZR, malta, nettik, sterling  |
|            1 |     3468 | 2025-02-23 | FURY                        | W   | 0.101      | -            | -                | -                | -         |     1.16 | ADDICT, HaZR, malta, nettik, sterling  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($888.36)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-23 |      0.283 | $3,140.00      | $888.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
