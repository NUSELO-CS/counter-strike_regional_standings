### Roster Details<br />
Team Name: Desemprego<br />
Roster: h0t, M1KA, NOPEEj, snapy, snowiee<br />
Global Rank: [91](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [63]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  839.4<br />
<br />
Final Rank Value (839.4) = Starting Rank Value (826.2) + Head To Head Adjustments (13.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.300[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.265[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.218<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 826.2
- 400 + ( ( 0.218 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 826.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      237 | 2025-07-27 | SAW             | L   | 1.000      | -            | -                | -                | -         |    -1.04 | h0t, M1KA, NOPEEj, snapy, snowiee |
|            6 |      249 | 2025-07-27 | Leça FC Esports | W   | 1.000      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.46 | h0t, M1KA, NOPEEj, snapy, snowiee |
|            5 |     1454 | 2025-05-11 | Rhyno Esports   | L   | 0.551      | -            | -                | -                | -         |    -9.49 | h0t, M1KA, opdust, snowiee, SYDOX |
|            4 |     1486 | 2025-05-10 | Iberian Soul    | W   | 0.543      | 0.315        | 0.205 (0.035)    | 1.000 (0.171)    | 1 (0.543) |    16.35 | h0t, M1KA, opdust, snowiee, SYDOX |
|            3 |     1505 | 2025-05-09 | The animals     | W   | 0.537      | 0.315        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.537) |     2.48 | h0t, M1KA, opdust, snowiee, SYDOX |
|            2 |     2944 | 2025-03-16 | Iberian Soul    | L   | 0.178      | -            | -                | -                | -         |    -0.17 | h0t, M1KA, opdust, snowiee, ZPX   |
|            1 |     2955 | 2025-03-15 | Rhyno Esports   | W   | 0.172      | 0.306        | 0.006 (0.000)    | 0.121 (0.006)    | 1 (0.172) |     2.55 | h0t, M1KA, opdust, snowiee, ZPX   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,711.30)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-27 |      1.000 | $587.33        | $587.33         |
| 2025-05-11 |      0.551 | $1,688.04      | $929.71         |
| 2025-03-16 |      0.178 | $1,092.24      | $194.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
