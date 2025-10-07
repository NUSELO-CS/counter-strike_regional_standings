### Roster Details<br />
Team Name: Just Swing (Chinese team)<br />
Roster: gas, HiNa, Purely, qqGOD, sATOR1<br />
Global Rank: [141](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_05.md)<br />
Regional Rank: [19]( ../../standings_asia_2025_10_05.md)<br />
<br />
Final Rank Value:  715.3<br />
<br />
Final Rank Value (715.3) = Starting Rank Value (762.5) + Head To Head Adjustments (-47.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.126[<sup>2</sup>](#table1)

The average of these factors is 0.185<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 762.5
- 400 + ( ( 0.185 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 762.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      563 | 2025-09-14 | FengDa Gaming           | L   | 1.000      | -            | -                | -                | -         |   -11.96 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           14 |      732 | 2025-09-10 | Nomads (Mongolian team) | L   | 1.000      | -            | -                | -                | -         |   -10.19 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           13 |      776 | 2025-09-09 | Chinggis Warriors       | L   | 1.000      | -            | -                | -                | -         |    -3.06 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           12 |      824 | 2025-09-08 | IHC Esports             | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.281 (0.094)    | 0 (0.000) |    16.52 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           11 |     1073 | 2025-08-27 | Rare Atom               | L   | 0.935      | -            | -                | -                | -         |    -2.63 | gas, HiNa, Purely, qqGOD, sATOR1   |
|           10 |     1095 | 2025-08-27 | WDNMD                   | W   | 0.930      | 0.143        | 0.000 (0.000)    | 0.039 (0.005)    | 1 (0.930) |     8.51 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            9 |     1101 | 2025-08-26 | Pressure Monsters       | W   | 0.928      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.928) |     4.21 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            8 |     1135 | 2025-08-24 | WDNMD                   | L   | 0.916      | -            | -                | -                | -         |   -20.79 | gas, HiNa, Purely, qqGOD, sATOR1   |
|            7 |     1525 | 2025-08-12 | BORING PLAYER           | L   | 0.831      | -            | -                | -                | -         |   -18.75 | gas, Honkai, Purely, qqGOD, sATOR1 |
|            6 |     1572 | 2025-08-11 | Eruption                | L   | 0.824      | -            | -                | -                | -         |    -6.92 | gas, Honkai, Purely, qqGOD, sATOR1 |
|            5 |     3405 | 2025-04-29 | FengDa Gaming           | L   | 0.131      | -            | -                | -                | -         |    -2.25 | gas, Marek, Purely, qqGOD, VanceKK |
|            4 |     3442 | 2025-04-27 | Chinggis Warriors       | L   | 0.117      | -            | -                | -                | -         |    -0.33 | gas, Marek, Purely, qqGOD, VanceKK |
|            3 |     3486 | 2025-04-25 | Rare Atom               | L   | 0.109      | -            | -                | -                | -         |    -0.38 | gas, Marek, Purely, qqGOD, VanceKK |
|            2 |     3569 | 2025-04-20 | TEAM XDM                | W   | 0.070      | 0.624        | 0.002 (0.000)    | 0.002 (0.000)    | 1 (0.070) |     0.47 | gas, Marek, Purely, qqGOD, VanceKK |
|            1 |     3639 | 2025-04-17 | Change The Game         | W   | 0.050      | 0.624        | 0.001 (0.000)    | 0.033 (0.001)    | 1 (0.050) |     0.34 | gas, Marek, Purely, qqGOD, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,784.99)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-14 |      1.000 | $3,000.00      | $3,000.00       |
| 2025-08-28 |      0.936 | $698.91        | $654.44         |
| 2025-05-04 |      0.163 | $800.00        | $130.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
