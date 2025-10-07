### Roster Details<br />
Team Name: KS<br />
Roster: deb0, gejmzilla, krabeni, makazze, v1w<br />
Global Rank: [100](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [73]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  810.3<br />
<br />
Final Rank Value (810.3) = Starting Rank Value (795.7) + Head To Head Adjustments (14.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.164[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.214[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.7
- 400 + ( ( 0.205 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 795.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      194 | 2023-08-20 | PGE Turow   | L   | 1.000      | -            | -                | -                | -         |   -15.04 | deb0, gejmzilla, krabeni, makazze, v1w |
|            6 |      208 | 2023-08-19 | Pompa       | W   | 1.000      | 0.333        | 0.039 (0.013)    | 0.626 (0.209)    | 0 (0.000) |    22.71 | deb0, gejmzilla, krabeni, makazze, v1w |
|            5 |      221 | 2023-08-18 | Sashi       | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.097 (0.032)    | 0 (0.000) |     6.26 | deb0, gejmzilla, krabeni, makazze, v1w |
|            4 |      265 | 2023-08-16 | Enterprise  | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.194 (0.065)    | 0 (0.000) |     8.48 | deb0, gejmzilla, krabeni, makazze, v1w |
|            3 |      284 | 2023-08-15 | Singularity | L   | 1.000      | -            | -                | -                | -         |   -19.40 | deb0, gejmzilla, krabeni, makazze, v1w |
|            2 |     1143 | 2023-06-17 | The Suspect | W   | 0.714      | 0.320        | 0.006 (0.001)    | 0.034 (0.008)    | 1 (0.714) |     7.54 | deb0, gejmzilla, krabeni, makazze, v1w |
|            1 |     1146 | 2023-06-17 | Phoenix     | W   | 0.713      | 0.320        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.713) |     4.00 | deb0, gejmzilla, krabeni, makazze, v1w |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,568.83)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-21 |      1.000 | $1,500.00      | $1,500.00       |
| 2023-06-17 |      0.714 | $4,298.00      | $3,068.83       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
