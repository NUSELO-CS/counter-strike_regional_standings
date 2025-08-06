### Roster Details<br />
Team Name: Daaku<br />
Roster: dottie, mcniff, nomizz, rain, Weeza<br />
Global Rank: [219](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [115]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  540.2<br />
<br />
Final Rank Value (540.2) = Starting Rank Value (513.6) + Head To Head Adjustments (26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.065[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.6
- 400 + ( ( 0.060 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 513.6


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
|            5 |     1688 | 2025-04-24 | Marsborne      | L   | 0.521      | -            | -                | -                | -         |    -2.14 | dottie, mcniff, nomizz, rain, Weeza |
|            4 |     1794 | 2025-04-17 | Wanted Goons   | W   | 0.474      | 0.333        | 0.001 (0.000)    | 0.166 (0.026)    | 0 (0.000) |     9.36 | dottie, mcniff, nomizz, rain, Weeza |
|            3 |     1900 | 2025-04-13 | Fisher College | L   | 0.447      | -            | -                | -                | -         |    -3.72 | dottie, mcniff, nomizz, rain, Weeza |
|            2 |     1952 | 2025-04-10 | Marsborne      | W   | 0.427      | 0.333        | 0.010 (0.001)    | 0.600 (0.085)    | 0 (0.000) |    11.90 | dottie, mcniff, nomizz, rain, Weeza |
|            1 |     2059 | 2025-04-07 | BLUEJAYS       | W   | 0.407      | 0.333        | 0.013 (0.002)    | 0.375 (0.051)    | 0 (0.000) |    11.21 | dottie, mcniff, nomizz, rain, Weeza |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
