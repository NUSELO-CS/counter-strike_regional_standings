### Roster Details<br />
Team Name: undefined<br />
Roster: AcilioN, Bibu, NaToSaphiX, ritchiEE, Sterzig<br />
Global Rank: [277](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [165]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  512.4<br />
<br />
Final Rank Value (512.4) = Starting Rank Value (502.8) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.8
- 400 + ( ( 0.053 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 502.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2859 | 2023-04-02 | Zero Tenacity   | L   | 0.206      | -            | -                | -                | -         |    -0.67 | AcilioN, Bibu, NaToSaphiX, ritchiEE, Sterzig |
|           11 |     2888 | 2023-03-31 | EPIC DUDES      | W   | 0.194      | 0.143        | 0.006 (0.000)    | 0.083 (0.002)    | 0 (0.000) |     4.51 | AcilioN, Bibu, NaToSaphiX, ritchiEE, Sterzig |
|           10 |     2895 | 2023-03-31 | ex-Fourteen     | W   | 0.193      | 0.143        | 0.001 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     3.74 | AcilioN, Bibu, NaToSaphiX, ritchiEE, Sterzig |
|            9 |     3414 | 2023-03-15 | EYEBALLERS      | L   | 0.086      | -            | -                | -                | -         |    -0.31 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|            8 |     3444 | 2023-03-14 | JANO            | L   | 0.078      | -            | -                | -                | -         |    -0.38 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|            7 |     3503 | 2023-03-11 | MOUZ NXT        | W   | 0.062      | 0.435        | 0.057 (0.002)    | 0.601 (0.016)    | 0 (0.000) |     1.73 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|            6 |     3550 | 2023-03-10 | Into the Breach | L   | 0.053      | -            | -                | -                | -         |    -0.03 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|            5 |     3650 | 2023-03-07 | ex-Coalesce     | W   | 0.032      | 0.143        | 0.012 (0.000)    | 0.290 (0.001)    | 0 (0.000) |     0.80 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|            4 |     3676 | 2023-03-05 | Bad News Eagles | L   | 0.022      | -            | -                | -                | -         |    -0.02 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|            3 |     3719 | 2023-03-04 | MASONIC         | W   | 0.013      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.21 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|            2 |     3731 | 2023-03-04 | Dripmen         | W   | 0.012      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.13 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |
|            1 |     3754 | 2023-03-03 | MASONIC         | L   | 0.006      | -            | -                | -                | -         |    -0.10 | AcilioN, Bibu, jedqr, NaToSaphiX, ritchiEE   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
