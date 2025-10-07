### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, ASTRA, jenkon, Nayomy, Qiyarah<br />
Global Rank: [193](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [121]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  662.3<br />
<br />
Final Rank Value (662.3) = Starting Rank Value (668.9) + Head To Head Adjustments (-6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 668.9
- 400 + ( ( 0.139 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 668.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      690 | 2023-07-30 | NAVI Javelins     | L   | 0.999      | -            | -                | -                | -         |    -6.79 | aiM, ASTRA, jenkon, Nayomy, Qiyarah      |
|           15 |     1203 | 2023-06-13 | Insilio           | L   | 0.686      | -            | -                | -                | -         |   -10.97 | ASTRA, jenkon, Kaoday, Nayomy, Qiyarah   |
|           14 |     1211 | 2023-06-12 | JANO              | L   | 0.678      | -            | -                | -                | -         |    -8.55 | ASTRA, jenkon, kezziwow, Nayomy, Qiyarah |
|           13 |     1687 | 2023-05-28 | YeYO              | W   | 0.580      | 0.250        | 0.001 (0.000)    | 0.048 (0.007)    | 0 (0.000) |     5.26 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|           12 |     2131 | 2023-05-07 | Let Her Cook      | W   | 0.439      | 0.250        | 0.001 (0.000)    | 0.048 (0.005)    | 0 (0.000) |     5.30 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|           11 |     2271 | 2023-04-29 | NAVI Javelins     | L   | 0.387      | -            | -                | -                | -         |    -2.99 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|           10 |     2293 | 2023-04-28 | Nigma Galaxy      | W   | 0.381      | 0.143        | 0.115 (0.006)    | 0.151 (0.008)    | 0 (0.000) |     9.71 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|            9 |     2323 | 2023-04-27 | BIG EQUIPA        | W   | 0.374      | 0.143        | 0.002 (0.000)    | 0.028 (0.001)    | 0 (0.000) |     5.28 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|            8 |     2419 | 2023-04-23 | NAVI Javelins     | L   | 0.346      | -            | -                | -                | -         |    -2.61 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|            7 |     2659 | 2023-04-12 | BIG EQUIPA        | L   | 0.274      | -            | -                | -                | -         |    -4.83 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|            6 |     2804 | 2023-04-06 | Spirit fe         | W   | 0.234      | 0.329        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.13 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|            5 |     2944 | 2023-03-29 | Let Her Cook      | W   | 0.181      | 0.329        | 0.001 (0.000)    | 0.048 (0.003)    | 0 (0.000) |     2.32 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|            4 |     3037 | 2023-03-26 | 9 Pandas Fearless | L   | 0.160      | -            | -                | -                | -         |    -2.00 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|            3 |     3399 | 2023-03-15 | Aces              | W   | 0.088      | 0.329        | 0.001 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     1.13 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|            2 |     3574 | 2023-03-09 | Nigma Galaxy      | W   | 0.048      | 0.329        | 0.115 (0.002)    | 0.151 (0.002)    | 0 (0.000) |     1.23 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |
|            1 |     3692 | 2023-03-05 | 9 Pandas Fearless | L   | 0.020      | -            | -                | -                | -         |    -0.24 | ASTRA, jenkon, Nayomy, pauliiee, Qiyarah |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,508.01)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-30 |      0.999 | $250.00        | $249.86         |
| 2023-05-28 |      0.580 | $750.00        | $434.68         |
| 2023-05-07 |      0.439 | $750.00        | $329.56         |
| 2023-04-23 |      0.346 | $250.00        | $86.60          |
| 2023-04-15 |      0.294 | $1,250.00      | $367.33         |
| 2023-03-26 |      0.160 | $250.00        | $39.96          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
