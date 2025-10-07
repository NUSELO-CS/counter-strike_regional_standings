### Roster Details<br />
Team Name: Sprout<br />
Roster: alpha, raalz, spooke, w0nderful, Zyphon<br />
Global Rank: [207](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [128]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  634.5<br />
<br />
Final Rank Value (634.5) = Starting Rank Value (574.0) + Head To Head Adjustments (60.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.193[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 574.0
- 400 + ( ( 0.090 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 574.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      292 | 2023-08-14 | Espionage       | L   | 1.000      | -            | -                | -                | -         |    -2.63 | alpha, raalz, spooke, w0nderful, Zyphon |
|            7 |      353 | 2023-08-12 | Zen             | L   | 1.000      | -            | -                | -                | -         |   -20.46 | alpha, raalz, spooke, w0nderful, Zyphon |
|            6 |      426 | 2023-08-10 | Victory Zigzag  | L   | 1.000      | -            | -                | -                | -         |   -17.63 | alpha, raalz, spooke, w0nderful, Zyphon |
|            5 |      435 | 2023-08-10 | Space           | W   | 1.000      | 0.143        | 0.099 (0.014)    | 0.904 (0.129)    | 0 (0.000) |    26.36 | alpha, raalz, spooke, w0nderful, Zyphon |
|            4 |      444 | 2023-08-10 | FURIA           | W   | 1.000      | 0.143        | 0.108 (0.015)    | 0.144 (0.021)    | 0 (0.000) |    25.39 | alpha, raalz, spooke, w0nderful, Zyphon |
|            3 |      517 | 2023-08-08 | BIG             | L   | 1.000      | -            | -                | -                | -         |    -1.32 | alpha, raalz, spooke, w0nderful, Zyphon |
|            2 |      605 | 2023-08-03 | Movistar Riders | W   | 1.000      | 0.384        | 0.089 (0.034)    | 0.249 (0.096)    | 0 (0.000) |    26.41 | alpha, raalz, spooke, w0nderful, Zyphon |
|            1 |      703 | 2023-07-29 | B8              | W   | 0.994      | 0.384        | 0.003 (0.001)    | 0.561 (0.214)    | 0 (0.000) |    24.33 | alpha, raalz, spooke, w0nderful, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
