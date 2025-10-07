### Roster Details<br />
Team Name: AJF<br />
Roster: DebornY, mxa, pigo, urban0, watts<br />
Global Rank: [259](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [82]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  559.7<br />
<br />
Final Rank Value (559.7) = Starting Rank Value (540.5) + Head To Head Adjustments (19.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 540.5
- 400 + ( ( 0.073 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 540.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      857 | 2023-07-18 | Corinthians  | L   | 0.920      | -            | -                | -                | -         |    -8.96 | DebornY, mxa, pigo, urban0, watts |
|            4 |      871 | 2023-07-17 | O PLANO      | L   | 0.914      | -            | -                | -                | -         |    -6.80 | DebornY, mxa, pigo, urban0, watts |
|            3 |      912 | 2023-07-15 | LRV          | L   | 0.901      | -            | -                | -                | -         |    -8.45 | DebornY, mxa, pigo, urban0, watts |
|            2 |      951 | 2023-07-13 | Boca Juniors | W   | 0.888      | 0.384        | 0.035 (0.012)    | 0.511 (0.174)    | 0 (0.000) |    23.59 | DebornY, mxa, pigo, urban0, watts |
|            1 |     1015 | 2023-07-11 | WINDINGO     | W   | 0.874      | 0.384        | 0.006 (0.002)    | 0.409 (0.137)    | 0 (0.000) |    19.88 | DebornY, mxa, pigo, urban0, watts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
