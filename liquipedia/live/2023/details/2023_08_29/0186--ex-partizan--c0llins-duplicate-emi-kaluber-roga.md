### Roster Details<br />
Team Name: ex-Partizan<br />
Roster: c0llins, Duplicate, emi, KalubeR, ROGA<br />
Global Rank: [186](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [118]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  670.0<br />
<br />
Final Rank Value (670.0) = Starting Rank Value (654.2) + Head To Head Adjustments (15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.075[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.2
- 400 + ( ( 0.131 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 654.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2460 | 2023-04-20 | ENCE Academy  | L   | 0.327      | -            | -                | -                | -         |    -2.22 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           20 |     2488 | 2023-04-19 | EYEBALLERS    | L   | 0.319      | -            | -                | -                | -         |    -2.45 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           19 |     2525 | 2023-04-17 | Apeks         | L   | 0.306      | -            | -                | -                | -         |    -0.22 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           18 |     2837 | 2023-04-05 | Enterprise    | W   | 0.225      | 0.143        | 0.003 (0.000)    | 0.071 (0.002)    | 0 (0.000) |     3.32 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           17 |     2921 | 2023-03-30 | BIG Academy   | L   | 0.186      | -            | -                | -                | -         |    -2.44 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           16 |     2954 | 2023-03-29 | Ignis Serpens | L   | 0.180      | -            | -                | -                | -         |    -2.52 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           15 |     2961 | 2023-03-29 | Sangal        | W   | 0.178      | 0.435        | 0.001 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     2.63 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           14 |     3035 | 2023-03-26 | 500           | W   | 0.160      | 0.143        | 0.075 (0.002)    | 1.000 (0.023)    | 0 (0.000) |     4.20 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           13 |     3054 | 2023-03-25 | ex-Coalesce   | W   | 0.155      | 0.143        | 0.012 (0.000)    | 0.290 (0.006)    | 0 (0.000) |     2.91 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           12 |     3089 | 2023-03-24 | ECSTATIC      | W   | 0.148      | 0.143        | 0.110 (0.002)    | 0.478 (0.010)    | 0 (0.000) |     4.04 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           11 |     3123 | 2023-03-23 | FTW           | L   | 0.141      | -            | -                | -                | -         |    -1.24 | c0llins, Duplicate, emi, KalubeR, ROGA |
|           10 |     3150 | 2023-03-23 | Katuna        | W   | 0.139      | 0.143        | -                | 0.025 (0.000)    | 0 (0.000) |     1.37 | c0llins, Duplicate, emi, KalubeR, ROGA |
|            9 |     3204 | 2023-03-21 | Viperio       | W   | 0.128      | 0.371        | 0.001 (0.000)    | -                | 0 (0.000) |     1.71 | c0llins, Duplicate, emi, KalubeR, ROGA |
|            8 |     3213 | 2023-03-21 | MOUZ NXT      | W   | 0.127      | 0.435        | 0.057 (0.003)    | 0.601 (0.033)    | 0 (0.000) |     3.12 | c0llins, Duplicate, emi, KalubeR, ROGA |
|            7 |     3262 | 2023-03-19 | los kogutos   | W   | 0.114      | 0.435        | 0.038 (0.002)    | 0.950 (0.047)    | 0 (0.000) |     2.99 | c0llins, Duplicate, emi, KalubeR, ROGA |
|            6 |     3439 | 2023-03-14 | B8            | L   | 0.079      | -            | -                | -                | -         |    -0.63 | c0llins, Duplicate, emi, KalubeR, ROGA |
|            5 |     3483 | 2023-03-12 | SINNERS       | W   | 0.067      | 0.371        | 0.001 (0.000)    | 0.015 (0.000)    | 0 (0.000) |     0.98 | c0llins, Duplicate, emi, KalubeR, ROGA |
|            4 |     3517 | 2023-03-11 | The Prodigies | W   | 0.060      | -            | -                | -                | -         |     0.52 | c0llins, Duplicate, emi, KalubeR, ROGA |
|            3 |     3546 | 2023-03-10 | Insilio       | L   | 0.054      | -            | -                | -                | -         |    -0.76 | c0llins, Duplicate, emi, KalubeR, ROGA |
|            2 |     3585 | 2023-03-09 | GamerLegion   | L   | 0.047      | -            | -                | -                | -         |    -0.01 | c0llins, Duplicate, emi, KalubeR, ROGA |
|            1 |     3614 | 2023-03-08 | Illuminar     | W   | 0.040      | 0.384        | 0.000 (0.000)    | 0.013 (0.000)    | -         |     0.56 | c0llins, Duplicate, emi, KalubeR, ROGA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($449.04)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-31 |      0.194 | $2,000.00      | $387.91         |
| 2023-03-11 |      0.061 | $1,000.00      | $61.13          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
