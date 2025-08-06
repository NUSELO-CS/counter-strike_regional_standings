### Roster Details<br />
Team Name: Desemprego<br />
Roster: h0t, M1KA, NOPEEj, snapy, snowiee<br />
Global Rank: [91](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [64]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  834.1<br />
<br />
Final Rank Value (834.1) = Starting Rank Value (819.5) + Head To Head Adjustments (14.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.277[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.124[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 819.5
- 400 + ( ( 0.222 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 819.5


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
|            7 |       67 | 2025-07-27 | SAW             | L   | 1.000      | -            | -                | -                | -         |    -1.54 | h0t, M1KA, NOPEEj, snapy, snowiee |
|            6 |       77 | 2025-07-27 | Leça FC Esports | W   | 1.000      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.53 | h0t, M1KA, NOPEEj, snapy, snowiee |
|            5 |     1271 | 2025-05-11 | Rhyno Esports   | L   | 0.631      | -            | -                | -                | -         |   -11.07 | h0t, M1KA, opdust, snowiee, SYDOX |
|            4 |     1303 | 2025-05-10 | Iberian Soul    | W   | 0.623      | 0.315        | 0.182 (0.036)    | 1.000 (0.197)    | 1 (0.623) |    18.43 | h0t, M1KA, opdust, snowiee, SYDOX |
|            3 |     1322 | 2025-05-09 | The animals     | W   | 0.618      | 0.315        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.618) |     2.87 | h0t, M1KA, opdust, snowiee, SYDOX |
|            2 |     2761 | 2025-03-16 | Iberian Soul    | L   | 0.258      | -            | -                | -                | -         |    -0.33 | h0t, M1KA, opdust, snowiee, ZPX   |
|            1 |     2772 | 2025-03-15 | Rhyno Esports   | W   | 0.252      | 0.306        | 0.006 (0.000)    | 0.143 (0.011)    | 1 (0.252) |     3.68 | h0t, M1KA, opdust, snowiee, ZPX   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,933.91)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-27 |      1.000 | $587.33        | $587.33         |
| 2025-05-11 |      0.631 | $1,688.04      | $1,064.87       |
| 2025-03-16 |      0.258 | $1,092.24      | $281.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
