### Roster Details<br />
Team Name: Animus Victoria<br />
Roster: foggers, gump, Kobe, TRIPLUS, void<br />
Global Rank: [215](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_03.md)<br />
Regional Rank: [34]( ../../standings_asia_2025_08_03.md)<br />
<br />
Final Rank Value:  539.4<br />
<br />
Final Rank Value (539.4) = Starting Rank Value (505.2) + Head To Head Adjustments (34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.2
- 400 + ( ( 0.055 - 0.000 ) / ( 0.839 - 0.000 ) ) * 1600 = 505.2


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
|            5 |      254 | 2025-07-16 | Ground Zero Gaming          | L   | 1.000      | -            | -                | -                | -         |   -10.34 | foggers, gump, Kobe, TRIPLUS, void |
|            4 |      299 | 2025-07-14 | Mindfreak (Australian team) | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.178 (0.056)    | 0 (0.000) |    19.61 | foggers, gump, Kobe, TRIPLUS, void |
|            3 |      337 | 2025-07-12 | Rooster                     | L   | 1.000      | -            | -                | -                | -         |    -7.55 | foggers, gump, Kobe, TRIPLUS, void |
|            2 |      429 | 2025-07-09 | Mindfreak (Australian team) | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.178 (0.056)    | 0 (0.000) |    21.84 | foggers, gump, Kobe, TRIPLUS, void |
|            1 |      450 | 2025-07-07 | LE-LUX Esports              | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.70 | foggers, gump, Kobe, TRIPLUS, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
