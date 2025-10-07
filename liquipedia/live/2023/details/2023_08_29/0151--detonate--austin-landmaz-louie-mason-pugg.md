### Roster Details<br />
Team Name: Detonate<br />
Roster: Austin, landmaz, Louie, mason, Pugg<br />
Global Rank: [151](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [40]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  715.0<br />
<br />
Final Rank Value (715.0) = Starting Rank Value (694.2) + Head To Head Adjustments (20.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 694.2
- 400 + ( ( 0.152 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 694.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      418 | 2023-08-10 | M80              | L   | 1.000      | -            | -                | -                | -         |    -8.51 | Austin, landmaz, Louie, mason, Pugg   |
|            8 |      420 | 2023-08-10 | Party Astronauts | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.420 (0.060)    | 0 (0.000) |    18.88 | Austin, landmaz, Louie, mason, Pugg   |
|            7 |      480 | 2023-08-09 | Badass           | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.517 (0.074)    | 0 (0.000) |    17.52 | Austin, landmaz, Louie, mason, Pugg   |
|            6 |      648 | 2023-07-31 | Forsaken         | L   | 1.000      | -            | -                | -                | -         |   -11.27 | Austin, landmaz, Louie, mason, Pugg   |
|            5 |      668 | 2023-07-30 | Reason           | W   | 1.000      | 0.371        | 0.003 (0.001)    | 0.175 (0.065)    | 0 (0.000) |    13.86 | Austin, landmaz, Louie, mason, Pugg   |
|            4 |      673 | 2023-07-30 | FLUFFY AIMERS    | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.288 (0.107)    | 0 (0.000) |    18.37 | Austin, landmaz, Louie, mason, Pugg   |
|            3 |      907 | 2023-07-15 | Badass           | L   | 0.903      | -            | -                | -                | -         |   -10.44 | Austin, landmaz, Louie, mason, Pugg   |
|            2 |     1031 | 2023-07-10 | FLUFFY AIMERS    | L   | 0.867      | -            | -                | -                | -         |   -12.45 | Austin, landmaz, Louie, mason, Pugg   |
|            1 |     2143 | 2023-05-06 | Party Astronauts | L   | 0.435      | -            | -                | -                | -         |    -5.12 | Austin, Louie, mason, PoseidoNN, Pugg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-31 |      1.000 | $2,500.00      | $2,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
