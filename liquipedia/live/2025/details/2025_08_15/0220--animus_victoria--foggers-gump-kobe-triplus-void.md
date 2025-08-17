### Roster Details<br />
Team Name: Animus Victoria<br />
Roster: foggers, gump, Kobe, TRIPLUS, void<br />
Global Rank: [220](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_15.md)<br />
Regional Rank: [34]( ../../standings_asia_2025_08_15.md)<br />
<br />
Final Rank Value:  538.0<br />
<br />
Final Rank Value (538.0) = Starting Rank Value (506.2) + Head To Head Adjustments (31.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.087[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.2
- 400 + ( ( 0.054 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 506.2


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
|            5 |      437 | 2025-07-16 | Ground Zero Gaming          | L   | 0.990      | -            | -                | -                | -         |   -10.23 | foggers, gump, Kobe, TRIPLUS, void |
|            4 |      482 | 2025-07-14 | Mindfreak (Australian team) | W   | 0.976      | 0.314        | 0.003 (0.001)    | 0.140 (0.043)    | 0 (0.000) |    19.05 | foggers, gump, Kobe, TRIPLUS, void |
|            3 |      520 | 2025-07-12 | Rooster                     | L   | 0.963      | -            | -                | -                | -         |    -7.41 | foggers, gump, Kobe, TRIPLUS, void |
|            2 |      612 | 2025-07-09 | Mindfreak (Australian team) | W   | 0.942      | 0.314        | 0.003 (0.001)    | 0.140 (0.041)    | 0 (0.000) |    20.45 | foggers, gump, Kobe, TRIPLUS, void |
|            1 |      633 | 2025-07-07 | LE-LUX Esports              | W   | 0.930      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.00 | foggers, gump, Kobe, TRIPLUS, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
