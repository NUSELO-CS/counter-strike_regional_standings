### Roster Details<br />
Team Name: Animus Victoria<br />
Roster: foggers, gump, Kobe, TRIPLUS, void<br />
Global Rank: [220](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_05.md)<br />
Regional Rank: [35]( ../../standings_asia_2025_08_05.md)<br />
<br />
Final Rank Value:  538.9<br />
<br />
Final Rank Value (538.9) = Starting Rank Value (504.8) + Head To Head Adjustments (34.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.8
- 400 + ( ( 0.055 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 504.8


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
|            5 |      299 | 2025-07-16 | Ground Zero Gaming          | L   | 1.000      | -            | -                | -                | -         |   -10.23 | foggers, gump, Kobe, TRIPLUS, void |
|            4 |      344 | 2025-07-14 | Mindfreak (Australian team) | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.176 (0.055)    | 0 (0.000) |    19.55 | foggers, gump, Kobe, TRIPLUS, void |
|            3 |      382 | 2025-07-12 | Rooster                     | L   | 1.000      | -            | -                | -                | -         |    -7.60 | foggers, gump, Kobe, TRIPLUS, void |
|            2 |      474 | 2025-07-09 | Mindfreak (Australian team) | W   | 1.000      | 0.314        | 0.003 (0.001)    | 0.176 (0.055)    | 0 (0.000) |    21.78 | foggers, gump, Kobe, TRIPLUS, void |
|            1 |      495 | 2025-07-07 | LE-LUX Esports              | W   | 0.990      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.62 | foggers, gump, Kobe, TRIPLUS, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
