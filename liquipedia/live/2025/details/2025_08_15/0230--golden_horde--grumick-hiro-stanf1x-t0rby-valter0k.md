### Roster Details<br />
Team Name: Golden Horde<br />
Roster: Grumick, Hiro, stanf1x, T0rby, Valter0k<br />
Global Rank: [230](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [119]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  500.8<br />
<br />
Final Rank Value (500.8) = Starting Rank Value (486.7) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.7
- 400 + ( ( 0.044 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 486.7


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
|            5 |      530 | 2025-07-11 | BOSS             | L   | 0.960      | -            | -                | -                | -         |    -6.29 | Grumick, Hiro, stanf1x, T0rby, Valter0k |
|            4 |      542 | 2025-07-11 | MIGHT            | W   | 0.959      | 0.143        | 0.001 (0.000)    | 0.215 (0.029)    | 0 (0.000) |    20.32 | Grumick, Hiro, stanf1x, T0rby, Valter0k |
|            3 |     3232 | 2025-03-07 | Marca Registrada | L   | 0.120      | -            | -                | -                | -         |    -0.97 | hiro, keizo, Sh1rax, stanf1x, T0rby     |
|            2 |     3312 | 2025-03-06 | Wanted Goons     | W   | 0.112      | 0.769        | 0.001 (0.000)    | 0.127 (0.011)    | 0 (0.000) |     2.43 | hiro, keizo, Sh1rax, stanf1x, T0rby     |
|            1 |     3344 | 2025-03-05 | InControl        | L   | 0.106      | -            | -                | -                | -         |    -1.37 | hiro, keizo, Sh1rax, stanf1x, T0rby     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
