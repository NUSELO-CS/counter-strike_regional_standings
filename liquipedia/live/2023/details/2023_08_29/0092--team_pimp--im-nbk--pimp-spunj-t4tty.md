### Roster Details<br />
Team Name: Team Pimp<br />
Roster: iM, NBK-, Pimp, SPUNJ, t4tty<br />
Global Rank: [92](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [68]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  837.6<br />
<br />
Final Rank Value (837.6) = Starting Rank Value (835.6) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.535[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 835.6
- 400 + ( ( 0.225 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 835.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1107 | 2023-06-20 | Team olofmeister | L   | 0.734      | -            | -                | -                | -         |   -10.58 | iM, NBK-, Pimp, SPUNJ, t4tty |
|            4 |     1116 | 2023-06-19 | Team NadeKing    | W   | 0.726      | 0.624        | 0.067 (0.030)    | 0.000 (0.000)    | 0 (0.000) |     5.07 | iM, NBK-, Pimp, SPUNJ, t4tty |
|            3 |     1134 | 2023-06-18 | Team GeT_RiGhT   | W   | 0.719      | 0.624        | 0.040 (0.018)    | 0.034 (0.015)    | 0 (0.000) |     7.67 | iM, NBK-, Pimp, SPUNJ, t4tty |
|            2 |     1155 | 2023-06-17 | Team Lobanjica   | L   | 0.712      | -            | -                | -                | -         |   -11.94 | iM, NBK-, Pimp, SPUNJ, t4tty |
|            1 |     1168 | 2023-06-16 | Team olofmeister | W   | 0.706      | 0.624        | 0.269 (0.119)    | 0.106 (0.047)    | 0 (0.000) |    11.74 | iM, NBK-, Pimp, SPUNJ, t4tty |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($36,675.13)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-20 |      0.734 | $50,000.00     | $36,675.13      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
