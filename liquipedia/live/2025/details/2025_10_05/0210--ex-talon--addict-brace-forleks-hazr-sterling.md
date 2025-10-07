### Roster Details<br />
Team Name: Ex-TALON<br />
Roster: ADDICT, BRACE, Forleks, HaZR, sterling<br />
Global Rank: [210](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_05.md)<br />
Regional Rank: [32]( ../../standings_asia_2025_10_05.md)<br />
<br />
Final Rank Value:  547.0<br />
<br />
Final Rank Value (547.0) = Starting Rank Value (524.5) + Head To Head Adjustments (22.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 524.5
- 400 + ( ( 0.064 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 524.5


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
|           13 |     1068 | 2025-08-28 | Rooster                     | L   | 0.936      | -            | -                | -                | -         |    -7.03 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           12 |     1123 | 2025-08-26 | SemperFi Esports            | L   | 0.923      | -            | -                | -                | -         |    -5.82 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           11 |     1532 | 2025-08-12 | Rooster                     | W   | 0.830      | 0.278        | 0.023 (0.005)    | 0.354 (0.082)    | 0 (0.000) |    19.69 | ADDICT, BRACE, Forleks, HaZR, sterling |
|           10 |     1582 | 2025-08-11 | DanCompany                  | W   | 0.823      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.17 | ADDICT, BRACE, Forleks, HaZR, sterling |
|            9 |     2031 | 2025-07-16 | SemperFi Esports            | L   | 0.649      | -            | -                | -                | -         |    -4.21 | ADDICT, BRACE, Forleks, HaZR, sterling |
|            8 |     2052 | 2025-07-15 | Rooster                     | L   | 0.642      | -            | -                | -                | -         |    -4.76 | ADDICT, BRACE, Forleks, HaZR, sterling |
|            7 |     2089 | 2025-07-13 | Mindfreak (Australian team) | W   | 0.630      | 0.314        | 0.002 (0.000)    | 0.264 (0.052)    | 0 (0.000) |    12.18 | ADDICT, BRACE, Forleks, HaZR, sterling |
|            6 |     2110 | 2025-07-12 | Unsettled Resentment        | L   | 0.624      | -            | -                | -                | -         |    -5.30 | ADDICT, BRACE, Forleks, HaZR, sterling |
|            5 |     2116 | 2025-07-12 | Nomads (Mongolian team)     | L   | 0.623      | -            | -                | -                | -         |    -3.31 | ADDICT, BRACE, Forleks, HaZR, sterling |
|            4 |     2145 | 2025-07-11 | Mindfreak (Australian team) | W   | 0.617      | 0.143        | 0.002 (0.000)    | 0.264 (0.023)    | 0 (0.000) |    12.35 | ADDICT, BRACE, Forleks, HaZR, sterling |
|            3 |     3645 | 2025-04-16 | SemperFi Esports            | L   | 0.048      | -            | -                | -                | -         |    -0.30 | ADDICT, BRACE, Forleks, HaZR, sterling |
|            2 |     3669 | 2025-04-15 | Rooster                     | W   | 0.042      | 0.525        | 0.023 (0.001)    | 0.354 (0.008)    | 0 (0.000) |     1.02 | ADDICT, BRACE, Forleks, HaZR, sterling |
|            1 |     3694 | 2025-04-14 | SemperFi Esports            | L   | 0.035      | -            | -                | -                | -         |    -0.22 | ADDICT, BRACE, Forleks, HaZR, sterling |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
