### Roster Details<br />
Team Name: Daaku<br />
Roster: dottie, mcniff, nomizz, rain, Weeza<br />
Global Rank: [235](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [127]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  464.4<br />
<br />
Final Rank Value (464.4) = Starting Rank Value (479.9) + Head To Head Adjustments (-15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.163[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.003[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.9
- 400 + ( ( 0.041 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 479.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2455 | 2025-06-14 | Ghost Gaming   | L   | 0.441      | -            | -                | -                | -         |    -6.65 | BeaKie, cJ-dA-K1nG, Dottie, nomizz, Weeza |
|            6 |     2527 | 2025-06-12 | Team Aether    | L   | 0.427      | -            | -                | -                | -         |    -6.45 | BeaKie, cJ-dA-K1nG, Dottie, nomizz, Weeza |
|            5 |     2571 | 2025-06-10 | Getting Info   | L   | 0.414      | -            | -                | -                | -         |    -3.07 | BeaKie, cJ-dA-K1nG, Dottie, nomizz, Weeza |
|            4 |     3504 | 2025-04-24 | Marsborne      | L   | 0.101      | -            | -                | -                | -         |    -0.23 | dottie, mcniff, nomizz, rain, Weeza       |
|            3 |     3610 | 2025-04-17 | Wanted Goons   | W   | 0.054      | 0.333        | 0.000 (0.000)    | 0.224 (0.004)    | 0 (0.000) |     0.97 | dottie, mcniff, nomizz, rain, Weeza       |
|            2 |     3716 | 2025-04-13 | Fisher College | L   | 0.027      | -            | -                | -                | -         |    -0.30 | dottie, mcniff, nomizz, rain, Weeza       |
|            1 |     3768 | 2025-04-10 | Marsborne      | W   | 0.007      | 0.333        | 0.030 (0.000)    | 0.545 (0.001)    | 0 (0.000) |     0.21 | dottie, mcniff, nomizz, rain, Weeza       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
