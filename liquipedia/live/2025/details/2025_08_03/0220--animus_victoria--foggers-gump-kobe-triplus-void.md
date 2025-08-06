### Roster Details<br />
Team Name: Animus Victoria<br />
Roster: foggers, gump, Kobe, TRIPLUS, void<br />
Global Rank: [220](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_03.md)<br />
Regional Rank: [35]( ../../standings_asia_2025_08_03.md)<br />
<br />
Final Rank Value:  538.8<br />
<br />
Final Rank Value (538.8) = Starting Rank Value (504.3) + Head To Head Adjustments (34.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.3
- 400 + ( ( 0.055 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 504.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      254 | 2025-07-16 | Ground Zero Gaming          | L   | 1.000      | -            | -                | -                | -         |   -10.17 | foggers, gump, Kobe, TRIPLUS, void |
|            4 |      299 | 2025-07-14 | Mindfreak (Australian team) | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.178 (0.056)    | 0 (0.000) |    19.63 | foggers, gump, Kobe, TRIPLUS, void |
|            3 |      337 | 2025-07-12 | Rooster                     | L   | 1.000      | -            | -                | -                | -         |    -7.54 | foggers, gump, Kobe, TRIPLUS, void |
|            2 |      429 | 2025-07-09 | Mindfreak (Australian team) | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.178 (0.056)    | 0 (0.000) |    21.86 | foggers, gump, Kobe, TRIPLUS, void |
|            1 |      450 | 2025-07-07 | LE-LUX Esports              | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.74 | foggers, gump, Kobe, TRIPLUS, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
