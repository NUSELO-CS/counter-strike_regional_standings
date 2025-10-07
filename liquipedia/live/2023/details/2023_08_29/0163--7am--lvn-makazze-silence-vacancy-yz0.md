### Roster Details<br />
Team Name: 7AM<br />
Roster: LVN, makazze, Silence, Vacancy, yz0<br />
Global Rank: [163](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [106]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  700.1<br />
<br />
Final Rank Value (700.1) = Starting Rank Value (729.8) + Head To Head Adjustments (-29.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.114[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.8
- 400 + ( ( 0.171 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 729.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       59 | 2023-08-26 | JACK3D         | L   | 1.000      | -            | -                | -                | -         |   -17.18 | LVN, makazze, Silence, Vacancy, yz0 |
|            7 |      607 | 2023-08-03 | los kogutos    | L   | 1.000      | -            | -                | -                | -         |    -8.65 | husky, LVN, Silence, Vacancy, yz0   |
|            6 |      691 | 2023-07-30 | The Neighbours | L   | 0.999      | -            | -                | -                | -         |   -14.80 | husky, LVN, Silence, Vacancy, yz0   |
|            5 |      706 | 2023-07-29 | The Neighbours | W   | 0.993      | 0.289        | 0.007 (0.002)    | 0.097 (0.028)    | 1 (0.993) |    16.08 | husky, LVN, Silence, Vacancy, yz0   |
|            4 |      847 | 2023-07-19 | los kogutos    | L   | 0.925      | -            | -                | -                | -         |    -9.21 | husky, LVN, Silence, Vacancy, yz0   |
|            3 |      931 | 2023-07-15 | Singularity    | W   | 0.898      | 0.371        | 0.041 (0.014)    | 0.384 (0.128)    | 0 (0.000) |    17.01 | husky, LVN, Silence, Vacancy, yz0   |
|            2 |     1025 | 2023-07-11 | los kogutos    | L   | 0.871      | -            | -                | -                | -         |    -9.02 | husky, LVN, Silence, Vacancy, yz0   |
|            1 |     2868 | 2023-04-01 | RAPTORS EC     | L   | 0.201      | -            | -                | -                | -         |    -4.01 | 1Knas, LVN, Silence, Vacancy, yz0   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($963.25)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-30 |      0.999 | $964.00        | $963.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
