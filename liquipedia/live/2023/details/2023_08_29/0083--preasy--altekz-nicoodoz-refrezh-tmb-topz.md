### Roster Details<br />
Team Name: Preasy<br />
Roster: Altekz, nicoodoz, refrezh, TMB, tOPZ<br />
Global Rank: [83](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [63]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  866.0<br />
<br />
Final Rank Value (866.0) = Starting Rank Value (775.4) + Head To Head Adjustments (90.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.147[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.339[<sup>2</sup>](#table1)

The average of these factors is 0.194<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 775.4
- 400 + ( ( 0.194 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 775.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       60 | 2023-08-26 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -2.40 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|           11 |      111 | 2023-08-24 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.884 (0.384)    | 0 (0.000) |    23.87 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|           10 |      203 | 2023-08-19 | los kogutos       | W   | 1.000      | 0.435        | 0.038 (0.017)    | 0.950 (0.413)    | 0 (0.000) |    18.71 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            9 |      233 | 2023-08-17 | Pompa             | W   | 1.000      | 0.435        | 0.039 (0.017)    | 0.626 (0.272)    | 0 (0.000) |    22.88 | Altekz, Beccie, nicoodoz, TMB, tOPZ  |
|            8 |      269 | 2023-08-15 | BetBoom           | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.484 (0.210)    | 0 (0.000) |    12.19 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            7 |      323 | 2023-08-13 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -14.23 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            6 |      362 | 2023-08-12 | SQUAD             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.134 (0.019)    | 0 (0.000) |     5.80 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            5 |      365 | 2023-08-12 | Space             | L   | 1.000      | -            | -                | -                | -         |    -9.85 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            4 |      427 | 2023-08-10 | Aurora Young Blud | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.224 (0.032)    | 0 (0.000) |     7.82 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            3 |      438 | 2023-08-10 | Pompa             | W   | 1.000      | 0.143        | 0.039 (0.006)    | 0.626 (0.089)    | 0 (0.000) |    23.34 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            2 |      485 | 2023-08-09 | NAVI Youth        | W   | 1.000      | 0.435        | 0.004 (0.002)    | 0.106 (0.046)    | 0 (0.000) |    10.09 | Altekz, nicoodoz, refrezh, TMB, tOPZ |
|            1 |      506 | 2023-08-08 | Sampi             | L   | 1.000      | -            | -                | -                | -         |    -7.68 | Altekz, nicoodoz, refrezh, TMB, tOPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
