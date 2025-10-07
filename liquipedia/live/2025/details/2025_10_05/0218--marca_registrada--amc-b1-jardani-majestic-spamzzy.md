### Roster Details<br />
Team Name: Marca Registrada<br />
Roster: amc, b1, Jardani, Majestic, spamzzy<br />
Global Rank: [218](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [62]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  530.4<br />
<br />
Final Rank Value (530.4) = Starting Rank Value (510.4) + Head To Head Adjustments (20.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.064[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 510.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2101 | 2025-07-12 | M80          | L   | 0.626      | -            | -                | -                | -         |    -0.43 | amc, b1, Jardani, Majestic, spamzzy |
|            5 |     2127 | 2025-07-11 | Shimmer      | W   | 0.620      | 0.143        | 0.036 (0.003)    | 0.152 (0.013)    | 0 (0.000) |    16.51 | amc, b1, Jardani, Majestic, spamzzy |
|            4 |     2304 | 2025-06-24 | MONEY CREW   | L   | 0.507      | -            | -                | -                | -         |    -4.86 | amc, b1, Jardani, Majestic, spamzzy |
|            3 |     2409 | 2025-06-16 | MIGHT        | W   | 0.454      | 0.333        | 0.000 (0.000)    | 0.111 (0.017)    | 0 (0.000) |     7.36 | amc, b1, Jardani, Majestic, spamzzy |
|            2 |     2451 | 2025-06-14 | Subtick      | W   | 0.441      | 0.333        | 0.000 (0.000)    | 0.018 (0.003)    | 0 (0.000) |     5.02 | amc, b1, Jardani, Majestic, spamzzy |
|            1 |     2525 | 2025-06-12 | Getting Info | L   | 0.427      | -            | -                | -                | -         |    -3.55 | amc, b1, Jardani, Majestic, spamzzy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
