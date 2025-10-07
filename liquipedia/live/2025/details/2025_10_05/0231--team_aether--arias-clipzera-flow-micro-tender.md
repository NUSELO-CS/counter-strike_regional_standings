### Roster Details<br />
Team Name: Team Aether<br />
Roster: arias, clipzera, flow, micro, Tender<br />
Global Rank: [231](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [69]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  489.1<br />
<br />
Final Rank Value (489.1) = Starting Rank Value (489.5) + Head To Head Adjustments (-0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 489.5
- 400 + ( ( 0.046 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 489.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     2393 | 2025-06-17 | Legacy Kingdom       | L   | 0.461      | -            | -                | -                | -         |    -6.22 | arias, clipzera, flow, micro, Tender |
|            9 |     2411 | 2025-06-16 | Subtick              | W   | 0.454      | 0.333        | 0.000 (0.000)    | 0.018 (0.003)    | 0 (0.000) |     5.39 | arias, clipzera, flow, micro, Tender |
|            8 |     2495 | 2025-06-13 | Akimbo Esports       | L   | 0.434      | -            | -                | -                | -         |    -6.00 | arias, clipzera, flow, micro, Tender |
|            7 |     2527 | 2025-06-12 | Daaku                | W   | 0.427      | 0.333        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     6.45 | arias, clipzera, flow, micro, Tender |
|            6 |     3458 | 2025-04-26 | Getting Info         | L   | 0.115      | -            | -                | -                | -         |    -0.44 | arias, clipzera, flow, misha, Talen  |
|            5 |     3515 | 2025-04-23 | Fisher College       | L   | 0.094      | -            | -                | -                | -         |    -1.08 | arias, clipzera, flow, misha, Talen  |
|            4 |     3559 | 2025-04-20 | JERSA ESPORTS        | W   | 0.074      | 0.333        | 0.000 (0.000)    | 0.057 (0.001)    | 0 (0.000) |     1.17 | arias, clipzera, flow, misha, Talen  |
|            3 |     3576 | 2025-04-19 | Chicken Coop Esports | L   | 0.067      | -            | -                | -                | -         |    -0.41 | arias, clipzera, flow, misha, Talen  |
|            2 |     3715 | 2025-04-13 | Shimmer              | W   | 0.028      | 0.333        | 0.036 (0.000)    | 0.152 (0.001)    | 0 (0.000) |     0.76 | arias, clipzera, flow, misha, Talen  |
|            1 |     3786 | 2025-04-09 | Getting Info         | L   | 0.001      | -            | -                | -                | -         |    -0.00 | arias, clipzera, flow, misha, Talen  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
