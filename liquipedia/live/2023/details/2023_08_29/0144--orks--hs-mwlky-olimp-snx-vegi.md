### Roster Details<br />
Team Name: ORKS<br />
Roster: HS, mwlky, olimp, sNx, Vegi<br />
Global Rank: [144](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [98]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  732.0<br />
<br />
Final Rank Value (732.0) = Starting Rank Value (598.7) + Head To Head Adjustments (133.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.228[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 598.7
- 400 + ( ( 0.103 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 598.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      255 | 2023-08-16 | los kogutos     | L   | 1.000      | -            | -                | -                | -         |    -9.18 | HS, mwlky, olimp, sNx, Vegi    |
|            9 |      274 | 2023-08-15 | Eternal Fire    | L   | 1.000      | -            | -                | -                | -         |    -3.42 | HS, mwlky, olimp, sNx, Vegi    |
|            8 |      366 | 2023-08-12 | ECSTATIC        | L   | 1.000      | -            | -                | -                | -         |    -4.66 | HS, mwlky, olimp, sNx, Vegi    |
|            7 |      401 | 2023-08-11 | OG              | W   | 1.000      | 0.435        | 0.075 (0.033)    | 0.386 (0.168)    | 0 (0.000) |    27.20 | HS, mwlky, olimp, sNx, Vegi    |
|            6 |      484 | 2023-08-09 | ARCRED          | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.588 (0.256)    | 0 (0.000) |    21.74 | HS, mwlky, olimp, sNx, Vegi    |
|            5 |      891 | 2023-07-16 | SAW             | W   | 0.907      | 0.143        | 0.240 (0.031)    | 0.968 (0.125)    | 0 (0.000) |    27.34 | casey, mwlky, olimp, sNx, Vegi |
|            4 |      915 | 2023-07-15 | Bad News Eagles | W   | 0.901      | 0.143        | 0.135 (0.017)    | 0.751 (0.097)    | 0 (0.000) |    26.44 | casey, mwlky, olimp, sNx, Vegi |
|            3 |      934 | 2023-07-14 | Hungary         | W   | 0.894      | 0.143        | 0.040 (0.005)    | 0.746 (0.095)    | 0 (0.000) |    23.45 | casey, mwlky, olimp, sNx, Vegi |
|            2 |     1002 | 2023-07-11 | 1WIN            | L   | 0.875      | -            | -                | -                | -         |    -0.80 | HS, mwlky, olimp, sNx, Vegi    |
|            1 |     1011 | 2023-07-11 | OG              | W   | 0.874      | 0.143        | 0.075 (0.009)    | 0.386 (0.048)    | 0 (0.000) |    25.15 | HS, mwlky, olimp, sNx, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
