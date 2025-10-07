### Roster Details<br />
Team Name: DeadWeight<br />
Roster: CyanideJr, Kobe, Mr Shark, Omichella, rekonz<br />
Global Rank: [203](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [17]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  640.7<br />
<br />
Final Rank Value (640.7) = Starting Rank Value (638.6) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.053[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 638.6
- 400 + ( ( 0.123 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 638.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2863 | 2023-04-01 | Australia       | L   | 0.204      | -            | -                | -                | -         |    -3.18 | CyanideJr, Kobe, Mr Shark, Omichella, rekonz    |
|            4 |     3043 | 2023-03-26 | DXA             | W   | 0.157      | 0.315        | 0.001 (0.000)    | 0.015 (0.001)    | 1 (0.157) |     2.31 | bogeymanh, CyanideJr, Kobe, Mr Shark, Omichella |
|            3 |     3072 | 2023-03-25 | John Industries | W   | 0.152      | 0.315        | 0.001 (0.000)    | 0.159 (0.008)    | 1 (0.152) |     2.08 | bogeymanh, CyanideJr, Kobe, Mr Shark, Omichella |
|            2 |     3075 | 2023-03-25 | DXA             | W   | 0.151      | 0.315        | 0.001 (0.000)    | 0.015 (0.001)    | 1 (0.151) |     2.23 | bogeymanh, CyanideJr, Kobe, Mr Shark, Omichella |
|            1 |     3380 | 2023-03-16 | Australia       | L   | 0.091      | -            | -                | -                | -         |    -1.38 | bogeymanh, CyanideJr, Kobe, Mr Shark, Omichella |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($523.36)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-26 |      0.157 | $3,327.00      | $523.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
