### Roster Details<br />
Team Name: Golden Horde<br />
Roster: Grumick, Hiro, stanf1x, T0rby, Valter0k<br />
Global Rank: [230](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [119]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  497.4<br />
<br />
Final Rank Value (497.4) = Starting Rank Value (483.4) + Head To Head Adjustments (14.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.060[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.4
- 400 + ( ( 0.044 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 483.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      392 | 2025-07-11 | BOSS             | L   | 1.000      | -            | -                | -                | -         |    -6.83 | Grumick, Hiro, stanf1x, T0rby, Valter0k |
|            4 |      404 | 2025-07-11 | MIGHT            | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.273 (0.039)    | 0 (0.000) |    20.87 | Grumick, Hiro, stanf1x, T0rby, Valter0k |
|            3 |     3094 | 2025-03-07 | Marca Registrada | L   | 0.180      | -            | -                | -                | -         |    -1.53 | hiro, keizo, Sh1rax, stanf1x, T0rby     |
|            2 |     3174 | 2025-03-06 | Wanted Goons     | W   | 0.172      | 0.143        | 0.001 (0.000)    | 0.163 (0.004)    | 0 (0.000) |     3.72 | hiro, keizo, Sh1rax, stanf1x, T0rby     |
|            1 |     3206 | 2025-03-05 | InControl        | L   | 0.166      | -            | -                | -                | -         |    -2.25 | hiro, keizo, Sh1rax, stanf1x, T0rby     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
