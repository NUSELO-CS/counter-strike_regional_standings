### Roster Details<br />
Team Name: MCS Gaming<br />
Roster: Goodbye, Oczarka, ogura, Scorchyy, snufaffu<br />
Global Rank: [240](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [81]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  475.5<br />
<br />
Final Rank Value (475.5) = Starting Rank Value (473.3) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.153[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.009[<sup>2</sup>](#table1)

The average of these factors is 0.039<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 473.3
- 400 + ( ( 0.039 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 473.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3102 | 2025-03-07 | MIGHT                | L   | 0.179      | -            | -                | -                | -         |    -1.43 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |
|            4 |     3158 | 2025-03-06 | Wildcard             | L   | 0.173      | -            | -                | -                | -         |    -0.36 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |
|            3 |     3205 | 2025-03-05 | Fisher College       | W   | 0.166      | 0.143        | 0.001 (0.000)    | 0.252 (0.006)    | 0 (0.000) |     3.97 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |
|            2 |     3730 | 2025-02-10 | Marsborne            | L   | 0.013      | -            | -                | -                | -         |    -0.03 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |
|            1 |     3770 | 2025-02-09 | Chicken Coop Esports | W   | 0.006      | 0.143        | 0.000 (0.000)    | 0.251 (0.000)    | 0 (0.000) |     0.13 | Goodbye, Oczarka, ogura, Scorchyy, snufaffu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
