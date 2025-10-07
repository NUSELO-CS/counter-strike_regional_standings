### Roster Details<br />
Team Name: Filhos de D10S<br />
Roster: detr0ittJ, ninjaZ, voltera, w1, xns<br />
Global Rank: [87](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [17]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  853.8<br />
<br />
Final Rank Value (853.8) = Starting Rank Value (794.1) + Head To Head Adjustments (59.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.133[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.436[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 794.1
- 400 + ( ( 0.204 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 794.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       12 | 2023-08-28 | FURIA Academy | L   | 1.000      | -            | -                | -                | -         |   -16.68 | detr0ittJ, ninjaZ, voltera, w1, xns |
|           13 |       43 | 2023-08-26 | Case          | L   | 1.000      | -            | -                | -                | -         |   -17.49 | detr0ittJ, ninjaZ, voltera, w1, xns |
|           12 |      119 | 2023-08-24 | Sojoga        | W   | 1.000      | 0.384        | 0.009 (0.004)    | 0.314 (0.121)    | 0 (0.000) |    10.65 | detr0ittJ, ninjaZ, voltera, w1, xns |
|           11 |      156 | 2023-08-22 | The Union     | W   | 1.000      | 0.384        | 0.009 (0.003)    | 0.398 (0.153)    | 0 (0.000) |     9.53 | detr0ittJ, ninjaZ, voltera, w1, xns |
|           10 |      318 | 2023-08-13 | Paquetá       | L   | 1.000      | -            | -                | -                | -         |   -13.76 | detr0ittJ, ninjaZ, voltera, w1, xns |
|            9 |      328 | 2023-08-12 | Fake Natty    | L   | 1.000      | -            | -                | -                | -         |   -12.74 | detr0ittJ, ninjaZ, voltera, w1, xns |
|            8 |      344 | 2023-08-12 | BESTIA        | W   | 1.000      | 0.384        | 0.191 (0.073)    | 0.721 (0.277)    | 0 (0.000) |    21.07 | detr0ittJ, ninjaZ, voltera, w1, xns |
|            7 |      392 | 2023-08-11 | Fluxo         | W   | 1.000      | 0.143        | 0.038 (0.005)    | 0.239 (0.034)    | 0 (0.000) |    12.45 | detr0ittJ, ninjaZ, voltera, w1, xns |
|            6 |      416 | 2023-08-10 | Sharks        | L   | 1.000      | -            | -                | -                | -         |    -9.52 | detr0ittJ, ninjaZ, voltera, w1, xns |
|            5 |      432 | 2023-08-10 | 9z            | W   | 1.000      | 0.143        | 0.273 (0.039)    | 0.650 (0.093)    | 0 (0.000) |    26.40 | detr0ittJ, ninjaZ, voltera, w1, xns |
|            4 |      451 | 2023-08-10 | Boca Juniors  | W   | 1.000      | 0.384        | 0.035 (0.014)    | 0.511 (0.196)    | 0 (0.000) |    16.29 | detr0ittJ, ninjaZ, voltera, w1, xns |
|            3 |      560 | 2023-08-05 | WINDINGO      | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.409 (0.157)    | 0 (0.000) |    11.41 | detr0ittJ, ninjaZ, voltera, w1, xns |
|            2 |      611 | 2023-08-02 | Meta          | W   | 1.000      | 0.384        | 0.015 (0.006)    | 0.471 (0.181)    | 0 (0.000) |    14.03 | detr0ittJ, ninjaZ, voltera, w1, xns |
|            1 |      630 | 2023-08-01 | MIBR Academy  | W   | 1.000      | 0.384        | 0.004 (0.001)    | 0.294 (0.113)    | 0 (0.000) |     8.06 | detr0ittJ, ninjaZ, voltera, w1, xns |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-13 |      1.000 | $2,500.00      | $2,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
