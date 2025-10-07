### Roster Details<br />
Team Name: DXA<br />
Roster: bebest, helix, Kiyo, neo, rzar<br />
Global Rank: [256](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [23]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  572.4<br />
<br />
Final Rank Value (572.4) = Starting Rank Value (615.5) + Head To Head Adjustments (-43.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.156[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 615.5
- 400 + ( ( 0.111 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 615.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      473 | 2023-08-10 | Stirlzs Angels  | L   | 1.000      | -            | -                | -                | -         |   -20.09 | bebest, helix, Kiyo, neo, rzar      |
|            6 |     1810 | 2023-05-25 | Mindfreak       | L   | 0.558      | -            | -                | -                | -         |   -11.52 | bebest, Kiyo, lucas222, neo, Roflko |
|            5 |     1912 | 2023-05-22 | sunday school   | L   | 0.538      | -            | -                | -                | -         |   -10.87 | bebest, Kiyo, lucas222, neo, Roflko |
|            4 |     3043 | 2023-03-26 | DeadWeight      | L   | 0.157      | -            | -                | -                | -         |    -2.31 | BaN4na, bebest, Kiyo, neo, Oath     |
|            3 |     3045 | 2023-03-25 | John Industries | W   | 0.156      | 0.315        | 0.001 (0.000)    | 0.159 (0.008)    | 1 (0.156) |     2.29 | BaN4na, bebest, Kiyo, neo, Oath     |
|            2 |     3073 | 2023-03-25 | Mc              | W   | 0.152      | 0.315        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.152) |     1.66 | BaN4na, bebest, Kiyo, neo, Oath     |
|            1 |     3075 | 2023-03-25 | DeadWeight      | L   | 0.151      | -            | -                | -                | -         |    -2.23 | BaN4na, bebest, Kiyo, neo, Oath     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($313.99)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-26 |      0.157 | $1,996.00      | $313.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
