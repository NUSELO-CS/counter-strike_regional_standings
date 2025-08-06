### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, FaNg, ogwizard, viz, Walco<br />
Global Rank: [243](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_03.md)<br />
Regional Rank: [81]( ../../standings_americas_2025_08_03.md)<br />
<br />
Final Rank Value:  484.3<br />
<br />
Final Rank Value (484.3) = Starting Rank Value (482.6) + Head To Head Adjustments (1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.004[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 482.6
- 400 + ( ( 0.044 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 482.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3682 | 2025-02-10 | MIGHT                | L   | 0.034      | -            | -                | -                | -         |    -0.28 | ben1337, FaNg, ogwizard, viz, Walco |
|            4 |     3726 | 2025-02-09 | Chicken Coop Esports | W   | 0.026      | 0.500        | 0.000 (0.000)    | 0.153 (0.002)    | 0 (0.000) |     0.49 | ben1337, FaNg, ogwizard, viz, Walco |
|            3 |     3751 | 2025-02-08 | Akimbo Esports       | W   | 0.021      | 0.624        | 0.007 (0.000)    | 0.208 (0.003)    | 0 (0.000) |     0.48 | ben1337, FaNg, ogwizard, viz, Walco |
|            2 |     3754 | 2025-02-08 | Arrival Seven        | W   | 0.020      | 0.624        | 0.006 (0.000)    | 0.217 (0.003)    | 0 (0.000) |     0.51 | ben1337, FaNg, ogwizard, viz, Walco |
|            1 |     3774 | 2025-02-08 | MIGHT                | W   | 0.019      | 0.500        | 0.001 (0.000)    | 0.279 (0.003)    | 0 (0.000) |     0.45 | ben1337, FaNg, ogwizard, viz, Walco |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
