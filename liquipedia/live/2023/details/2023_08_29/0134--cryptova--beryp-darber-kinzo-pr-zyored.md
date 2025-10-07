### Roster Details<br />
Team Name: Cryptova<br />
Roster: beryP, darber, kinzo, PR, zyored<br />
Global Rank: [134](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [92]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  744.6<br />
<br />
Final Rank Value (744.6) = Starting Rank Value (730.5) + Head To Head Adjustments (14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.052[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.124[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.5
- 400 + ( ( 0.171 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 730.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1455 | 2023-06-04 | ECLOT         | L   | 0.625      | -            | -                | -                | -         |    -2.25 | beryP, darber, kinzo, PR, zyored |
|           14 |     1539 | 2023-06-01 | Hungary       | L   | 0.607      | -            | -                | -                | -         |    -5.87 | beryP, darber, kinzo, PR, zyored |
|           13 |     1626 | 2023-05-30 | ENCE Academy  | W   | 0.592      | 0.371        | 0.014 (0.003)    | 0.580 (0.127)    | 0 (0.000) |    12.79 | beryP, darber, kinzo, PR, zyored |
|           12 |     1668 | 2023-05-29 | PGE Turow     | L   | 0.585      | -            | -                | -                | -         |    -7.44 | beryP, darber, kinzo, PR, zyored |
|           11 |     1821 | 2023-05-24 | Singularity   | W   | 0.554      | 0.432        | 0.041 (0.010)    | 0.384 (0.092)    | 0 (0.000) |    10.22 | beryP, darber, MAXX, PR, zyored  |
|           10 |     2044 | 2023-05-13 | Sampi         | L   | 0.478      | -            | -                | -                | -         |    -3.01 | beryP, darber, kinzo, PR, zyored |
|            9 |     2052 | 2023-05-12 | JANO          | L   | 0.473      | -            | -                | -                | -         |    -5.97 | beryP, darber, kinzo, PR, zyored |
|            8 |     2076 | 2023-05-10 | The Prodigies | W   | 0.459      | 0.333        | 0.003 (0.000)    | 0.453 (0.069)    | 0 (0.000) |     6.47 | beryP, darber, MAXX, PR, zyored  |
|            7 |     2110 | 2023-05-08 | los kogutos   | W   | 0.446      | 0.333        | 0.038 (0.006)    | 0.950 (0.141)    | 0 (0.000) |    10.09 | beryP, darber, kinzo, PR, zyored |
|            6 |     2664 | 2023-04-12 | PGE Turow     | L   | 0.273      | -            | -                | -                | -         |    -3.42 | beryP, darber, MAXX, PR, zyored  |
|            5 |     2673 | 2023-04-12 | yologang420   | W   | 0.272      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.15 | beryP, darber, MAXX, PR, zyored  |
|            4 |     2703 | 2023-04-11 | PGE Turow     | L   | 0.266      | -            | -                | -                | -         |    -3.34 | beryP, darber, MAXX, PR, zyored  |
|            3 |     2729 | 2023-04-09 | SINNERS       | L   | 0.253      | -            | -                | -                | -         |    -1.09 | beryP, darber, MAXX, PR, zyored  |
|            2 |     2746 | 2023-04-08 | ECLOT         | L   | 0.248      | -            | -                | -                | -         |    -0.77 | beryP, darber, MAXX, PR, zyored  |
|            1 |     2777 | 2023-04-07 | SINNERS       | W   | 0.240      | 0.369        | 0.069 (0.006)    | 1.000 (0.088)    | 1 (0.240) |     6.55 | beryP, darber, MAXX, PR, zyored  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,356.94)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-07 |      0.648 | $1,619.00      | $1,048.40       |
| 2023-05-15 |      0.492 | $1,500.00      | $737.30         |
| 2023-04-09 |      0.254 | $2,251.00      | $571.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
