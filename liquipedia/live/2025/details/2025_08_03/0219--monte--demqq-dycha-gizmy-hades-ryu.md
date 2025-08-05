### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, Gizmy, hades, ryu<br />
Global Rank: [219](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  526.1<br />
<br />
Final Rank Value (526.1) = Starting Rank Value (521.6) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.6
- 400 + ( ( 0.064 - 0.000 ) / ( 0.839 - 0.000 ) ) * 1600 = 521.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3570 | 2025-02-15 | Fnatic                 | W   | 0.066      | 0.435        | 0.108 (0.003)    | 0.630 (0.018)    | 0 (0.000) |     2.03 | DemQQ, dycha, Gizmy, hades, ryu |
|            4 |     3619 | 2025-02-13 | FUT Esports            | W   | 0.052      | 0.435        | 0.300 (0.007)    | 0.822 (0.019)    | 0 (0.000) |     1.56 | DemQQ, dycha, Gizmy, hades, ryu |
|            3 |     3676 | 2025-02-11 | CYBERSHOKE Esports     | W   | 0.036      | 0.435        | 0.009 (0.000)    | 0.751 (0.012)    | 0 (0.000) |     1.01 | DemQQ, dycha, Gizmy, hades, ryu |
|            2 |     3833 | 2025-02-07 | SINNERS Esports        | L   | 0.010      | -            | -                | -                | -         |    -0.03 | DemQQ, dycha, Gizmy, hades, ryu |
|            1 |     3862 | 2025-02-06 | Betclic Apogee Esports | L   | 0.003      | -            | -                | -                | -         |    -0.01 | DemQQ, dycha, Gizmy, hades, ryu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
