### Roster Details<br />
Team Name: HOTU<br />
Roster: anttzz, casE, mizu, nitzie, swiftsteel<br />
Global Rank: [94](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [70]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  831.6<br />
<br />
Final Rank Value (831.6) = Starting Rank Value (806.0) + Head To Head Adjustments (25.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.405[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.290[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 806.0
- 400 + ( ( 0.210 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 806.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      312 | 2023-08-13 | FORZE             | L   | 1.000      | -            | -                | -                | -         |    -7.60 | anttzz, casE, mizu, nitzie, swiftsteel    |
|           15 |      320 | 2023-08-13 | YNT               | W   | 1.000      | 0.443        | 0.016 (0.007)    | 0.048 (0.021)    | 1 (1.000) |    11.17 | anttzz, casE, mizu, nitzie, swiftsteel    |
|           14 |      369 | 2023-08-12 | FORZE             | L   | 1.000      | -            | -                | -                | -         |    -7.01 | anttzz, casE, mizu, nitzie, swiftsteel    |
|           13 |      685 | 2023-07-30 | ex-K23            | W   | 1.000      | 0.338        | 0.010 (0.003)    | 0.000 (0.000)    | 0 (0.000) |     5.59 | anttzz, casE, mizu, nitzie, swiftsteel    |
|           12 |     1094 | 2023-06-24 | Question Mark     | L   | 0.759      | -            | -                | -                | -         |    -9.41 | casE, gokushima, mizu, nitzie, swiftsteel |
|           11 |     1101 | 2023-06-23 | The Prodigies     | W   | 0.752      | 0.338        | 0.003 (0.001)    | 0.453 (0.115)    | 0 (0.000) |     9.31 | casE, gokushima, mizu, nitzie, swiftsteel |
|           10 |     1106 | 2023-06-20 | Zero Tenacity     | L   | 0.734      | -            | -                | -                | -         |   -11.09 | casE, gokushima, mizu, nitzie, swiftsteel |
|            9 |     1123 | 2023-06-18 | Nemiga            | W   | 0.721      | 0.338        | 0.000 (0.000)    | 0.217 (0.053)    | 0 (0.000) |     3.42 | casE, gokushima, mizu, nitzie, swiftsteel |
|            8 |     1152 | 2023-06-17 | ENCE Academy      | W   | 0.712      | 0.338        | 0.014 (0.003)    | 0.580 (0.140)    | 0 (0.000) |    11.09 | casE, gokushima, mizu, nitzie, swiftsteel |
|            7 |     1922 | 2023-05-21 | Ninjas in Pyjamas | L   | 0.531      | -            | -                | -                | -         |    -0.71 | casE, gokushima, mizu, nitzie, swiftsteel |
|            6 |     1929 | 2023-05-20 | ECSTATIC          | L   | 0.526      | -            | -                | -                | -         |    -4.50 | casE, gokushima, mizu, nitzie, swiftsteel |
|            5 |     1936 | 2023-05-20 | BIG               | W   | 0.525      | 0.143        | 0.080 (0.006)    | 0.312 (0.023)    | 0 (0.000) |    11.86 | casE, gokushima, mizu, nitzie, swiftsteel |
|            4 |     2104 | 2023-05-08 | BSMPEEK           | W   | 0.447      | 0.303        | 0.003 (0.000)    | 0.048 (0.007)    | 0 (0.000) |     2.42 | casE, gokushima, mizu, nitzie, swiftsteel |
|            3 |     2169 | 2023-05-04 | ECSTATIC          | W   | 0.421      | 0.143        | 0.110 (0.007)    | 0.478 (0.029)    | 0 (0.000) |     9.95 | casE, gokushima, mizu, nitzie, swiftsteel |
|            2 |     2180 | 2023-05-04 | Nightmare         | W   | 0.420      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.23 | casE, gokushima, mizu, nitzie, swiftsteel |
|            1 |     3133 | 2023-03-23 | Ninjas in Pyjamas | L   | 0.140      | -            | -                | -                | -         |    -0.14 | casE, gokushima, mizu, nitzie, swiftsteel |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,268.88)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-13 |      1.000 | $6,630.00      | $6,630.00       |
| 2023-06-25 |      0.767 | $1,500.00      | $1,150.55       |
| 2023-05-08 |      0.447 | $3,329.00      | $1,488.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
