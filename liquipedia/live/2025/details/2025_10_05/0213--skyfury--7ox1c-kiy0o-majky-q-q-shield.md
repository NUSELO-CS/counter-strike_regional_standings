### Roster Details<br />
Team Name: SKYFURY<br />
Roster: 7oX1C, Kiy0o, majky, Q-Q, shield<br />
Global Rank: [213](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [122]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  543.3<br />
<br />
Final Rank Value (543.3) = Starting Rank Value (528.1) + Head To Head Adjustments (15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.1
- 400 + ( ( 0.066 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 528.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1419 | 2025-08-14 | UNiTY esports      | L   | 0.844      | -            | -                | -                | -         |    -7.93 | 7oX1C, Kiy0o, majky, Q-Q, shield     |
|            5 |     1630 | 2025-08-09 | Dynamo Eclot       | W   | 0.811      | 0.278        | 0.046 (0.010)    | 0.451 (0.102)    | 0 (0.000) |    22.88 | 7oX1C, Kiy0o, Q-Q, shield, smekk     |
|            4 |     3566 | 2025-04-20 | NOVAQ              | L   | 0.070      | -            | -                | -                | -         |    -0.23 | 7oX1C, auth0ri, Kiy0o, shield, Templ |
|            3 |     3615 | 2025-04-17 | FUT Esports        | L   | 0.052      | -            | -                | -                | -         |    -0.07 | 7oX1C, auth0ri, Kiy0o, shield, Templ |
|            2 |     3709 | 2025-04-14 | CYBERSHOKE Esports | L   | 0.030      | -            | -                | -                | -         |    -0.06 | 7oX1C, auth0ri, Kiy0o, shield, Templ |
|            1 |     3735 | 2025-04-12 | Nexus Gaming       | W   | 0.019      | 0.435        | 0.031 (0.000)    | 0.656 (0.005)    | 0 (0.000) |     0.56 | 7oX1C, auth0ri, Kiy0o, shield, Templ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
