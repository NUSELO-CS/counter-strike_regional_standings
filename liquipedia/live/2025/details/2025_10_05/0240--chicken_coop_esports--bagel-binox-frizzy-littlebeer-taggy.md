### Roster Details<br />
Team Name: Chicken Coop Esports<br />
Roster: BAGEL, BiNoX, FRIZZY, LittleBEER, taggy<br />
Global Rank: [240](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [73]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  399.3<br />
<br />
Final Rank Value (399.3) = Starting Rank Value (400.0) + Head To Head Adjustments (-0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.001[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3454 | 2025-04-26 | BLUEJAYS      | L   | 0.115      | -            | -                | -                | -         |    -0.63 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            5 |     3609 | 2025-04-17 | Arrival Seven | L   | 0.054      | -            | -                | -                | -         |    -0.31 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            4 |     3733 | 2025-04-12 | Super Shy     | W   | 0.021      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.32 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            3 |     3769 | 2025-04-10 | Wanted Goons  | L   | 0.007      | -            | -                | -                | -         |    -0.07 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            2 |     3779 | 2025-04-09 | Worms         | W   | 0.001      | 0.413        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.02 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |
|            1 |     3783 | 2025-04-09 | Worms         | W   | 0.001      | 0.413        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.01 | BAGEL, BiNoX, FRIZZY, LittleBEER, taggy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
