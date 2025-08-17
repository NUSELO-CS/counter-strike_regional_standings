### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, huncho, Panic, REKMEISTER, Sharpie<br />
Global Rank: [248](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_15.md)<br />
Regional Rank: [83]( ../../standings_americas_2025_08_15.md)<br />
<br />
Final Rank Value:  405.6<br />
<br />
Final Rank Value (405.6) = Starting Rank Value (404.6) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.009[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.009[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 404.6
- 400 + ( ( 0.002 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 404.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3228 | 2025-03-07 | Immigrants Peek | L   | 0.120      | -            | -                | -                | -         |    -1.92 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            4 |     3289 | 2025-03-06 | Complexity      | L   | 0.114      | -            | -                | -                | -         |    -0.02 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            3 |     3341 | 2025-03-05 | Worms           | W   | 0.106      | 0.769        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     2.02 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            2 |     3426 | 2025-03-01 | Getting Info    | L   | 0.081      | -            | -                | -                | -         |    -0.33 | Crisp, huncho, Panic, REKMEISTER, Sharpie |
|            1 |     3430 | 2025-03-01 | Graveyard Shift | W   | 0.080      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.080) |     1.24 | Crisp, huncho, Panic, REKMEISTER, Sharpie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
