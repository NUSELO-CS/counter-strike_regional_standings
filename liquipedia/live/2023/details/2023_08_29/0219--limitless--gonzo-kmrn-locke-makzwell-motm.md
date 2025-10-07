### Roster Details<br />
Team Name: Limitless<br />
Roster: Gonzo, kmrn, Locke, Makzwell, motm<br />
Global Rank: [219](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [65]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  620.8<br />
<br />
Final Rank Value (620.8) = Starting Rank Value (649.2) + Head To Head Adjustments (-28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 649.2
- 400 + ( ( 0.129 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 649.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      178 | 2023-08-21 | Hound         | L   | 1.000      | -            | -                | -                | -         |   -19.01 | Gonzo, kmrn, Locke, Makzwell, motm   |
|            6 |      759 | 2023-07-24 | M80           | L   | 0.963      | -            | -                | -                | -         |    -6.13 | corn, Grizz, kmrn, Locke, Makzwell   |
|            5 |      964 | 2023-07-12 | FLUFFY AIMERS | L   | 0.882      | -            | -                | -                | -         |   -11.01 | Grizz, JBa, kmrn, Locke, Makzwell    |
|            4 |     1029 | 2023-07-10 | Reason        | W   | 0.867      | 0.384        | 0.003 (0.001)    | 0.175 (0.058)    | 0 (0.000) |    13.51 | Infinite, JBa, kmrn, Locke, Makzwell |
|            3 |     1357 | 2023-06-07 | Badass        | L   | 0.648      | -            | -                | -                | -         |    -8.47 | Grizz, JBa, kmrn, Locke, Makzwell    |
|            2 |     1382 | 2023-06-06 | M80           | L   | 0.643      | -            | -                | -                | -         |    -3.92 | Grizz, JBa, kmrn, Locke, Makzwell    |
|            1 |     1390 | 2023-06-06 | puggers       | W   | 0.642      | 0.450        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.61 | Grizz, JBa, kmrn, Locke, Makzwell    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,324.98)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-09 |      0.662 | $2,000.00      | $1,324.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
