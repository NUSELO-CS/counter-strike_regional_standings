### Roster Details<br />
Team Name: Take Flyte<br />
Roster: hyza, nicx, Umar, Wolffe, zanz<br />
Global Rank: [221](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [67]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  619.1<br />
<br />
Final Rank Value (619.1) = Starting Rank Value (619.0) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.0
- 400 + ( ( 0.113 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 619.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3227 | 2023-03-20 | Kari           | L   | 0.123      | -            | -                | -                | -         |    -1.75 | hyza, nicx, Umar, Wolffe, zanz |
|            6 |     3258 | 2023-03-19 | Evil Geniuses  | L   | 0.116      | -            | -                | -                | -         |    -0.69 | hyza, nicx, Umar, Wolffe, zanz |
|            5 |     3283 | 2023-03-18 | Evil Geniuses  | L   | 0.108      | -            | -                | -                | -         |    -0.66 | hyza, nicx, Umar, Wolffe, zanz |
|            4 |     3314 | 2023-03-17 | Limitless      | W   | 0.102      | 0.303        | 0.000 (0.000)    | 0.015 (0.000)    | 0 (0.000) |     0.99 | hyza, nicx, Umar, Wolffe, zanz |
|            3 |     3447 | 2023-03-13 | FLUFFY AIMERS  | W   | 0.076      | 0.371        | 0.011 (0.000)    | 0.288 (0.008)    | 0 (0.000) |     1.53 | hyza, nicx, Umar, Wolffe, zanz |
|            2 |     3468 | 2023-03-12 | Cartel terraza | W   | 0.069      | 0.371        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.78 | hyza, nicx, Umar, Wolffe, zanz |
|            1 |     3735 | 2023-03-03 | Vendetta       | L   | 0.009      | -            | -                | -                | -         |    -0.13 | hyza, nicx, Umar, Wolffe, zanz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($529.72)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-20 |      0.123 | $4,300.00      | $529.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
