### Roster Details<br />
Team Name: HAVU<br />
Roster: Alxc, ottob, p3kko, puuha, uli<br />
Global Rank: [177](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [103]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  620.8<br />
<br />
Final Rank Value (620.8) = Starting Rank Value (615.7) + Head To Head Adjustments (5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 615.7
- 400 + ( ( 0.110 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 615.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1798 | 2025-04-27 | ENCE Academy | L   | 0.458      | -            | -                | -                | -         |    -4.10 | Alxc, ottob, p3kko, puuha, uli |
|            4 |     1803 | 2025-04-27 | 4 EYEZ       | W   | 0.457      | 0.444        | 0.001 (0.000)    | 0.021 (0.004)    | 0 (0.000) |     6.77 | Alxc, ottob, p3kko, puuha, uli |
|            3 |     1843 | 2025-04-26 | ENCE Academy | L   | 0.450      | -            | -                | -                | -         |    -4.05 | Alxc, ottob, p3kko, puuha, uli |
|            2 |     1856 | 2025-04-25 | 4 EYEZ       | W   | 0.445      | 0.444        | 0.001 (0.000)    | 0.021 (0.004)    | 0 (0.000) |     6.67 | Alxc, ottob, p3kko, puuha, uli |
|            1 |     3638 | 2025-02-21 | ENCE Academy | L   | 0.026      | -            | -                | -                | -         |    -0.23 | Alxc, ottob, p3kko, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($537.91)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      0.458 | $1,138.04      | $521.42         |
| 2025-02-22 |      0.032 | $523.23        | $16.50          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
