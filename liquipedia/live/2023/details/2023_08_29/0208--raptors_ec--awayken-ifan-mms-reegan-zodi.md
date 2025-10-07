### Roster Details<br />
Team Name: RAPTORS EC<br />
Roster: AwaykeN, ifan, MMS, ReegaN, zodi<br />
Global Rank: [208](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [129]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  634.0<br />
<br />
Final Rank Value (634.0) = Starting Rank Value (631.2) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.284[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.2
- 400 + ( ( 0.120 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 631.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       32 | 2023-08-27 | JACK3D          | L   | 1.000      | -            | -                | -                | -         |   -13.52 | AwaykeN, ifan, MMS, ReegaN, zodi       |
|            4 |       70 | 2023-08-26 | Next in Line    | W   | 1.000      | 0.278        | 0.002 (0.000)    | 0.048 (0.013)    | 0 (0.000) |    16.49 | AwaykeN, ifan, MMS, ReegaN, zodi       |
|            3 |     1635 | 2023-05-29 | Into the Breach | L   | 0.588      | -            | -                | -                | -         |    -0.63 | AwaykeN, Ducky, MMS, ReegaN, zodi      |
|            2 |     2856 | 2023-04-02 | ROYALS          | L   | 0.206      | -            | -                | -                | -         |    -3.61 | AwaykeN, Ducky, ReegaN, synergii, zodi |
|            1 |     2868 | 2023-04-01 | 7AM             | W   | 0.201      | 0.277        | 0.004 (0.000)    | 0.092 (0.005)    | 0 (0.000) |     4.01 | AwaykeN, Ducky, ReegaN, synergii, zodi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($825.32)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $128.00        | $128.00         |
| 2023-06-04 |      0.627 | $1,072.00      | $671.83         |
| 2023-04-02 |      0.207 | $123.00        | $25.49          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
