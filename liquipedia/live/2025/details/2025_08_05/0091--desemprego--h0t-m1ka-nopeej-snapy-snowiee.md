### Roster Details<br />
Team Name: Desemprego<br />
Roster: h0t, M1KA, NOPEEj, snapy, snowiee<br />
Global Rank: [91](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [63]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  834.2<br />
<br />
Final Rank Value (834.2) = Starting Rank Value (820.1) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.275[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.124[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.1
- 400 + ( ( 0.221 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 820.1


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
|            7 |       99 | 2025-07-27 | SAW             | L   | 1.000      | -            | -                | -                | -         |    -1.52 | h0t, M1KA, NOPEEj, snapy, snowiee |
|            6 |      111 | 2025-07-27 | Leça FC Esports | W   | 1.000      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.52 | h0t, M1KA, NOPEEj, snapy, snowiee |
|            5 |     1316 | 2025-05-11 | Rhyno Esports   | L   | 0.611      | -            | -                | -                | -         |   -10.67 | h0t, M1KA, opdust, snowiee, SYDOX |
|            4 |     1348 | 2025-05-10 | Iberian Soul    | W   | 0.603      | 0.315        | 0.187 (0.035)    | 1.000 (0.190)    | 1 (0.603) |    17.91 | h0t, M1KA, opdust, snowiee, SYDOX |
|            3 |     1367 | 2025-05-09 | The animals     | W   | 0.597      | 0.315        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.597) |     2.78 | h0t, M1KA, opdust, snowiee, SYDOX |
|            2 |     2806 | 2025-03-16 | Iberian Soul    | L   | 0.238      | -            | -                | -                | -         |    -0.29 | h0t, M1KA, opdust, snowiee, ZPX   |
|            1 |     2817 | 2025-03-15 | Rhyno Esports   | W   | 0.232      | 0.306        | 0.006 (0.000)    | 0.143 (0.010)    | 1 (0.232) |     3.40 | h0t, M1KA, opdust, snowiee, ZPX   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,877.92)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-27 |      1.000 | $587.33        | $587.33         |
| 2025-05-11 |      0.611 | $1,688.04      | $1,030.88       |
| 2025-03-16 |      0.238 | $1,092.24      | $259.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
