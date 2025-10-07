### Roster Details<br />
Team Name: KZG<br />
Roster: dearlucid, dpr, Drox, Mingovi, vinhy<br />
Global Rank: [170](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_05.md)<br />
Regional Rank: [25]( ../../standings_asia_2025_10_05.md)<br />
<br />
Final Rank Value:  646.3<br />
<br />
Final Rank Value (646.3) = Starting Rank Value (662.8) + Head To Head Adjustments (-16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.315[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 662.8
- 400 + ( ( 0.134 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 662.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      445 | 2025-09-18 | Ground Zero Gaming          | L   | 1.000      | -            | -                | -                | -         |   -14.16 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           15 |      739 | 2025-09-10 | FURY                        | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.108 (0.030)    | 0 (0.000) |    13.48 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           14 |      743 | 2025-09-10 | Rooster                     | L   | 1.000      | -            | -                | -                | -         |   -11.02 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           13 |      789 | 2025-09-09 | DanCompany                  | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.41 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           12 |      833 | 2025-09-08 | Ground Zero Gaming          | L   | 1.000      | -            | -                | -                | -         |   -15.40 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           11 |      837 | 2025-09-08 | Animus Victoria             | W   | 1.000      | 0.315        | 0.000 (0.000)    | 0.093 (0.029)    | 0 (0.000) |    10.51 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|           10 |      889 | 2025-09-06 | Ground Zero Gaming          | L   | 0.997      | -            | -                | -                | -         |   -16.29 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|            9 |      913 | 2025-09-05 | Mindfreak (Australian team) | W   | 0.989      | 0.315        | 0.002 (0.001)    | 0.264 (0.082)    | 0 (0.000) |    12.75 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|            8 |      937 | 2025-09-03 | Animus Victoria             | L   | 0.976      | -            | -                | -                | -         |   -20.84 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|            7 |      951 | 2025-09-01 | Exsto Gaming                | W   | 0.963      | 0.315        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.19 | dearlucid, dpr, Drox, Mingovi, vinhy  |
|            6 |     1998 | 2025-07-17 | SemperFi Esports            | L   | 0.657      | -            | -                | -                | -         |    -7.34 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            5 |     2001 | 2025-07-16 | Rooster                     | L   | 0.655      | -            | -                | -                | -         |    -8.42 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            4 |     2049 | 2025-07-15 | Ground Zero Gaming          | W   | 0.643      | 0.314        | 0.006 (0.001)    | 0.245 (0.049)    | 0 (0.000) |     9.93 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            3 |     2092 | 2025-07-13 | SemperFi Esports            | W   | 0.629      | 0.314        | 0.029 (0.006)    | 0.510 (0.101)    | 0 (0.000) |    12.81 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            2 |     2148 | 2025-07-11 | Underground Esports Club    | W   | 0.617      | 0.314        | 0.000 (0.000)    | 0.025 (0.005)    | 0 (0.000) |     3.57 | alecc, Brh2203, dpr, Mingovi, vinhy   |
|            1 |     2170 | 2025-07-10 | DOG                         | W   | 0.610      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.41 | alecc, dearlucid, dpr, Mingovi, vinhy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($646.43)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-17 |      0.662 | $976.16        | $646.43         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
