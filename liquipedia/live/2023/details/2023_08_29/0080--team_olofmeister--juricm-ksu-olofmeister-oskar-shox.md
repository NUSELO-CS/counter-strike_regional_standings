### Roster Details<br />
Team Name: Team olofmeister<br />
Roster: juricM, Ksu, olofmeister, oskar, shox<br />
Global Rank: [80](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [60]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  881.1<br />
<br />
Final Rank Value (881.1) = Starting Rank Value (876.8) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.637[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 876.8
- 400 + ( ( 0.247 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 876.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1107 | 2023-06-20 | Team Pimp      | W   | 0.734      | 0.624        | 0.135 (0.062)    | 0.104 (0.048)    | 0 (0.000) |    10.58 | juricM, Ksu, olofmeister, oskar, shox |
|            4 |     1114 | 2023-06-19 | Team Lobanjica | W   | 0.727      | 0.624        | 0.067 (0.031)    | 0.068 (0.031)    | 0 (0.000) |    10.18 | Ksu, LETN1, olofmeister, oskar, shox  |
|            3 |     1129 | 2023-06-18 | Team AdreN     | W   | 0.720      | 0.624        | 0.040 (0.018)    | 0.069 (0.031)    | 0 (0.000) |     8.21 | Ksu, LETN1, olofmeister, oskar, shox  |
|            2 |     1168 | 2023-06-16 | Team Pimp      | L   | 0.706      | -            | -                | -                | -         |   -11.74 | Ksu, LETN1, olofmeister, oskar, shox  |
|            1 |     1184 | 2023-06-15 | Team Lobanjica | L   | 0.699      | -            | -                | -                | -         |   -12.98 | Ksu, LETN1, olofmeister, oskar, shox  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($73,350.25)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.27) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-20 |      0.734 | $100,000.00    | $73,350.25      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
