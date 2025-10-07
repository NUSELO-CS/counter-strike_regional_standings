### Roster Details<br />
Team Name: Ignis Serpens<br />
Roster: casey, Murlok, next1me, olimp, sNx<br />
Global Rank: [138](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [95]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  741.3<br />
<br />
Final Rank Value (741.3) = Starting Rank Value (708.1) + Head To Head Adjustments (33.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.1
- 400 + ( ( 0.159 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 708.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1369 | 2023-06-07 | ECLOT           | L   | 0.647      | -            | -                | -                | -         |    -3.06 | casey, Murlok, next1me, olimp, sNx |
|           14 |     1419 | 2023-06-05 | Astralis Talent | L   | 0.633      | -            | -                | -                | -         |    -3.98 | casey, Murlok, next1me, olimp, sNx |
|           13 |     1581 | 2023-05-31 | SINNERS         | W   | 0.600      | 0.432        | 0.069 (0.018)    | 1.000 (0.259)    | 0 (0.000) |    15.91 | casey, Murlok, next1me, olimp, sNx |
|           12 |     1898 | 2023-05-22 | sYnck           | W   | 0.541      | 0.432        | 0.023 (0.005)    | 0.242 (0.057)    | 0 (0.000) |    11.61 | casey, Murlok, next1me, olimp, sNx |
|           11 |     2491 | 2023-04-19 | ex-iNation      | W   | 0.318      | 0.143        | 0.004 (0.000)    | 0.334 (0.015)    | 0 (0.000) |     4.48 | casey, iso, Layner, olimp, sNx     |
|           10 |     2822 | 2023-04-06 | Looking4Org     | L   | 0.232      | -            | -                | -                | -         |    -1.56 | casey, iso, mchk, olimp, sNx       |
|            9 |     2954 | 2023-03-29 | ex-Partizan     | W   | 0.180      | 0.143        | 0.002 (0.000)    | 0.075 (0.002)    | 0 (0.000) |     2.52 | casey, iso, mchk, olimp, sNx       |
|            8 |     3144 | 2023-03-23 | ECLOT           | W   | 0.140      | 0.143        | 0.114 (0.002)    | 0.710 (0.014)    | 0 (0.000) |     4.03 | casey, Layner, mchk, olimp, sNx    |
|            7 |     3201 | 2023-03-21 | Into the Bin    | W   | 0.128      | 0.435        | 0.001 (0.000)    | 0.032 (0.002)    | 0 (0.000) |     1.46 | casey, iso, Layner, olimp, sNx     |
|            6 |     3605 | 2023-03-08 | Sangal          | W   | 0.041      | 0.435        | 0.001 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     0.54 | casey, iso, Layner, olimp, sNx     |
|            5 |     3651 | 2023-03-07 | Monte           | L   | 0.032      | -            | -                | -                | -         |    -0.02 | casey, iso, Layner, olimp, sNx     |
|            4 |     3672 | 2023-03-06 | MOUZ NXT        | W   | 0.025      | 0.371        | 0.057 (0.001)    | 0.601 (0.006)    | 0 (0.000) |     0.57 | casey, iso, Layner, olimp, sNx     |
|            3 |     3697 | 2023-03-05 | PROSPECTS       | W   | 0.019      | 0.371        | 0.050 (0.000)    | 0.455 (0.003)    | 0 (0.000) |     0.50 | casey, iso, Layner, olimp, sNx     |
|            2 |     3751 | 2023-03-03 | Astralis Talent | W   | 0.006      | 0.371        | 0.110 (0.000)    | 0.582 (0.001)    | 0 (0.000) |     0.17 | casey, iso, Layner, olimp, sNx     |
|            1 |     3761 | 2023-03-03 | Monte           | L   | 0.005      | -            | -                | -                | -         |    -0.00 | casey, iso, Layner, olimp, sNx     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,108.35)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-07 |      0.648 | $2,699.00      | $1,747.76       |
| 2023-03-26 |      0.160 | $1,250.00      | $199.98         |
| 2023-03-07 |      0.032 | $5,000.00      | $160.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
