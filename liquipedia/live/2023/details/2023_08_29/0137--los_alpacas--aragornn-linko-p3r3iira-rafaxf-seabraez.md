### Roster Details<br />
Team Name: Los Alpacas<br />
Roster: aragornN, Linko, P3R3IIRA, rafaxF, seabraez<br />
Global Rank: [137](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [94]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  742.0<br />
<br />
Final Rank Value (742.0) = Starting Rank Value (748.2) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.156[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.2
- 400 + ( ( 0.180 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 748.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      616 | 2023-08-02 | Ukraine      | L   | 1.000      | -            | -                | -                | -         |   -14.48 | aragornN, Linko, P3R3IIRA, rafaxF, seabraez |
|           15 |      626 | 2023-08-02 | ThunderFlash | W   | 1.000      | 0.435        | 0.009 (0.004)    | 0.724 (0.315)    | 0 (0.000) |    21.47 | aragornN, Linko, P3R3IIRA, rafaxF, seabraez |
|           14 |     1128 | 2023-06-18 | SAW          | L   | 0.720      | -            | -                | -                | -         |    -1.49 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|           13 |     1153 | 2023-06-17 | FTW          | W   | 0.712      | 0.344        | 0.019 (0.005)    | 0.198 (0.048)    | 1 (0.712) |    14.18 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|           12 |     1246 | 2023-06-10 | Skrill Ogres | L   | 0.667      | -            | -                | -                | -         |   -11.81 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|           11 |     1264 | 2023-06-10 | FTW          | L   | 0.665      | -            | -                | -                | -         |    -7.77 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|           10 |     1732 | 2023-05-27 | Illuminar    | L   | 0.572      | -            | -                | -                | -         |    -9.05 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|            9 |     1793 | 2023-05-25 | K23          | W   | 0.560      | 0.143        | 0.004 (0.000)    | 0.100 (0.008)    | 0 (0.000) |     6.78 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|            8 |     1804 | 2023-05-25 | Young Ninjas | W   | 0.559      | 0.143        | 0.029 (0.002)    | 0.327 (0.026)    | 0 (0.000) |    12.27 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|            7 |     2155 | 2023-05-06 | GTZ          | L   | 0.432      | -            | -                | -                | -         |    -3.40 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|            6 |     2295 | 2023-04-28 | Nexus        | L   | 0.381      | -            | -                | -                | -         |    -8.09 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|            5 |     2386 | 2023-04-25 | ex-Coalesce  | L   | 0.358      | -            | -                | -                | -         |    -5.84 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|            4 |     2424 | 2023-04-23 | Looking4Org  | L   | 0.345      | -            | -                | -                | -         |    -2.72 | JAEPE, Linko, Lr0z1n, P3R3IIRA, seabraez    |
|            3 |     2862 | 2023-04-02 | Arcadia      | L   | 0.205      | -            | -                | -                | -         |    -4.01 | JAEPE, krazy, Linko, P3R3IIRA, seabraez     |
|            2 |     2887 | 2023-03-31 | MASONIC      | W   | 0.195      | 0.143        | 0.012 (0.000)    | 0.262 (0.007)    | 0 (0.000) |     4.26 | JAEPE, krazy, Linko, P3R3IIRA, seabraez     |
|            1 |     2893 | 2023-03-31 | JANO         | W   | 0.193      | 0.143        | 0.007 (0.000)    | 0.427 (0.012)    | 0 (0.000) |     3.52 | JAEPE, krazy, Linko, P3R3IIRA, seabraez     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,272.19)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-18 |      0.720 | $3,207.00      | $2,308.38       |
| 2023-06-11 |      0.674 | $1,071.00      | $721.33         |
| 2023-05-07 |      0.440 | $551.00        | $242.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
