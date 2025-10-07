### Roster Details<br />
Team Name: Enterprise<br />
Roster: leckr, M1key, manguss, Pechyn, zur1s<br />
Global Rank: [198](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [124]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  652.7<br />
<br />
Final Rank Value (652.7) = Starting Rank Value (646.2) + Head To Head Adjustments (6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.2
- 400 + ( ( 0.127 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 646.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1885 | 2023-05-23 | Astralis Talent | L   | 0.546      | -            | -                | -                | -         |    -1.74 | leckr, M1key, manguss, Pechyn, zur1s |
|           15 |     2107 | 2023-05-08 | UNiTY           | W   | 0.447      | 0.432        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.62 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|           14 |     2467 | 2023-04-20 | ECLOT           | L   | 0.325      | -            | -                | -                | -         |    -0.62 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|           13 |     2510 | 2023-04-18 | Illuminar       | W   | 0.312      | 0.143        | 0.015 (0.001)    | 0.187 (0.008)    | 0 (0.000) |     6.06 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|           12 |     2533 | 2023-04-17 | PGE Turow       | L   | 0.305      | -            | -                | -                | -         |    -2.71 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|           11 |     2608 | 2023-04-14 | Zero Tenacity   | L   | 0.285      | -            | -                | -                | -         |    -1.75 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|           10 |     2669 | 2023-04-12 | JANO            | L   | 0.272      | -            | -                | -                | -         |    -2.66 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|            9 |     2704 | 2023-04-11 | MASONIC         | L   | 0.266      | -            | -                | -                | -         |    -1.74 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|            8 |     2756 | 2023-04-08 | ENCE Academy    | W   | 0.246      | 0.371        | 0.014 (0.001)    | 0.580 (0.053)    | 0 (0.000) |     6.19 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|            7 |     2837 | 2023-04-05 | ex-Partizan     | L   | 0.225      | -            | -                | -                | -         |    -3.32 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|            6 |     2842 | 2023-04-04 | ex-Coalesce     | W   | 0.218      | 0.371        | 0.012 (0.001)    | 0.290 (0.023)    | 0 (0.000) |     4.26 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|            5 |     3017 | 2023-03-27 | empire goblins  | W   | 0.165      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.05 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|            4 |     3246 | 2023-03-20 | EYEBALLERS      | L   | 0.119      | -            | -                | -                | -         |    -0.84 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|            3 |     3460 | 2023-03-13 | MOUZ NXT        | L   | 0.073      | -            | -                | -                | -         |    -0.49 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|            2 |     3465 | 2023-03-13 | Zeal22          | W   | 0.072      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.45 | leckr, M1key, Pechyn, SYSTEM, zur1s  |
|            1 |     3489 | 2023-03-12 | los kogutos     | L   | 0.067      | -            | -                | -                | -         |    -0.34 | leckr, M1key, Pechyn, SYSTEM, zur1s  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($698.72)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-07 |      0.648 | $1,079.00      | $698.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
