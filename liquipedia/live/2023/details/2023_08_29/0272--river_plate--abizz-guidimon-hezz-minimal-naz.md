### Roster Details<br />
Team Name: River Plate<br />
Roster: abizz, guidimon, Hezz, minimal, naz<br />
Global Rank: [272](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [86]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  521.0<br />
<br />
Final Rank Value (521.0) = Starting Rank Value (510.3) + Head To Head Adjustments (10.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.082[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.3
- 400 + ( ( 0.057 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 510.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      761 | 2023-07-24 | LRV          | L   | 0.962      | -            | -                | -                | -         |    -7.70 | abizz, guidimon, Hezz, minimal, naz         |
|            6 |      769 | 2023-07-23 | Boca Juniors | L   | 0.955      | -            | -                | -                | -         |    -4.45 | abizz, guidimon, Hezz, minimal, naz         |
|            5 |      787 | 2023-07-22 | LRV          | W   | 0.948      | 0.250        | 0.009 (0.002)    | 0.501 (0.119)    | 0 (0.000) |    22.41 | abizz, guidimon, Hezz, minimal, naz         |
|            4 |     1086 | 2023-06-24 | WINDINGO     | L   | 0.762      | -            | -                | -                | -         |    -5.54 | abizz, guidimon, maxxkor, minimal, rushardo |
|            3 |     1102 | 2023-06-21 | Furious      | W   | 0.742      | 0.143        | 0.001 (0.000)    | 0.052 (0.006)    | 0 (0.000) |    15.23 | abizz, guidimon, maxxkor, minimal, rushardo |
|            2 |     1110 | 2023-06-19 | WINDINGO     | L   | 0.729      | -            | -                | -                | -         |    -5.04 | abizz, guidimon, maxxkor, minimal, rushardo |
|            1 |     1783 | 2023-05-25 | WINDINGO     | L   | 0.561      | -            | -                | -                | -         |    -4.24 | abizz, guidimon, maxxkor, minimal, peqexino |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
