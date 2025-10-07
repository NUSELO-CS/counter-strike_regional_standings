### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, emy, GooseBreeder, marie, vanessa<br />
Global Rank: [176](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [45]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  626.1<br />
<br />
Final Rank Value (626.1) = Starting Rank Value (697.8) + Head To Head Adjustments (-71.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.8
- 400 + ( ( 0.152 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 697.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      665 | 2025-09-11 | Wanted Goons    | L   | 1.000      | -            | -                | -                | -         |   -18.88 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|           14 |      707 | 2025-09-10 | Arrival Seven   | W   | 1.000      | 0.363        | 0.002 (0.001)    | 0.100 (0.036)    | 0 (0.000) |    13.05 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|           13 |      745 | 2025-09-09 | Shimmer         | L   | 1.000      | -            | -                | -                | -         |   -13.23 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|           12 |      795 | 2025-09-08 | Take Flyte      | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.113 (0.041)    | 0 (0.000) |    13.49 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|           11 |     1168 | 2025-08-22 | Legacy Kingdom  | L   | 0.901      | -            | -                | -                | -         |   -17.37 | BiBiAhn, GooseBreeder, marie, Shakezullah, vanessa |
|           10 |     1183 | 2025-08-21 | Arrival Seven   | W   | 0.894      | 0.333        | 0.002 (0.001)    | 0.100 (0.030)    | 0 (0.000) |    12.45 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|            9 |     1253 | 2025-08-18 | Regain          | L   | 0.873      | -            | -                | -                | -         |   -15.09 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|            8 |     1340 | 2025-08-15 | Shimmer         | L   | 0.854      | -            | -                | -                | -         |   -11.25 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|            7 |     1436 | 2025-08-13 | Regain          | L   | 0.841      | -            | -                | -                | -         |   -16.87 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|            6 |     1538 | 2025-08-11 | InControl       | L   | 0.828      | -            | -                | -                | -         |   -12.22 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|            5 |     2786 | 2025-05-23 | Imperial Female | L   | 0.293      | -            | -                | -                | -         |    -4.32 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|            4 |     2792 | 2025-05-23 | MIBR Female     | W   | 0.291      | 0.624        | 0.006 (0.001)    | 0.000 (0.000)    | 1 (0.291) |     2.84 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|            3 |     2804 | 2025-05-22 | Imperial Female | L   | 0.286      | -            | -                | -                | -         |    -4.24 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |
|            2 |     3457 | 2025-04-26 | NRG             | L   | 0.115      | -            | -                | -                | -         |    -0.16 | BiBiAhn, emy, GooseBreeder, Shakezullah, vanessa   |
|            1 |     3748 | 2025-04-11 | Ghost Gaming    | W   | 0.014      | 0.533        | 0.000 (0.000)    | 0.055 (0.000)    | 0 (0.000) |     0.10 | BiBiAhn, emy, GooseBreeder, marie, vanessa         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,182.64)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.305 | $17,000.00     | $5,182.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
