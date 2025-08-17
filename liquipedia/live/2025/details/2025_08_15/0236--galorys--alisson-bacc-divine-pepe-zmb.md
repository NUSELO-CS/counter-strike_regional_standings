### Roster Details<br />
Team Name: Galorys<br />
Roster: Alisson, bacc, divine, pepe, zmb<br />
Global Rank: [236](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_15.md)<br />
Regional Rank: [78]( ../../standings_americas_2025_08_15.md)<br />
<br />
Final Rank Value:  487.2<br />
<br />
Final Rank Value (487.2) = Starting Rank Value (482.3) + Head To Head Adjustments (4.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 482.3
- 400 + ( ( 0.042 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 482.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      168 | 2025-08-01 | Legacy          | L   | 1.000      | -            | -                | -                | -         |    -0.18 | Alisson, bacc, divine, pepe, zmb   |
|            7 |      430 | 2025-07-16 | Keyd Stars      | L   | 0.991      | -            | -                | -                | -         |    -5.59 | Alisson, bacc, divine, Kadzz, pepe |
|            6 |      584 | 2025-07-09 | R2 Esports Club | W   | 0.946      | 0.147        | 0.000 (0.000)    | 0.026 (0.004)    | 0 (0.000) |    15.05 | Alisson, bacc, divine, Kadzz, pepe |
|            5 |     2587 | 2025-03-28 | R2 Esports Club | L   | 0.259      | -            | -                | -                | -         |    -3.97 | Alisson, bacc, divine, Kadzz, pepe |
|            4 |     2645 | 2025-03-27 | SELVA           | L   | 0.253      | -            | -                | -                | -         |    -1.28 | Alisson, bacc, divine, Kadzz, pepe |
|            3 |     3100 | 2025-03-09 | Dusty Roots     | L   | 0.132      | -            | -                | -                | -         |    -1.74 | Alisson, bacc, divine, Kadzz, pepe |
|            2 |     3161 | 2025-03-08 | Thekillaz       | W   | 0.126      | 0.769        | 0.001 (0.000)    | 0.031 (0.003)    | 0 (0.000) |     2.66 | Alisson, bacc, divine, Kadzz, pepe |
|            1 |     3236 | 2025-03-07 | Legacy          | L   | 0.119      | -            | -                | -                | -         |    -0.02 | Alisson, bacc, divine, Kadzz, pepe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
