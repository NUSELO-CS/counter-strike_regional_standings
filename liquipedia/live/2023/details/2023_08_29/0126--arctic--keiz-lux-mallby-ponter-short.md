### Roster Details<br />
Team Name: ARCTIC<br />
Roster: keiz, lux, MaLLby, ponter, short<br />
Global Rank: [126](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [33]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  757.0<br />
<br />
Final Rank Value (757.0) = Starting Rank Value (724.6) + Head To Head Adjustments (32.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.134[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.6
- 400 + ( ( 0.168 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 724.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1555 | 2023-05-31 | RED Canids     | L   | 0.602      | -            | -                | -                | -         |   -10.26 | keiz, lux, MaLLby, ponter, short    |
|           19 |     1774 | 2023-05-25 | Fake Natty     | L   | 0.563      | -            | -                | -                | -         |    -6.33 | keiz, lux, MaLLby, ponter, short    |
|           18 |     1812 | 2023-05-24 | O PLANO        | W   | 0.556      | 0.283        | 0.026 (0.004)    | 0.470 (0.074)    | 0 (0.000) |     9.66 | keiz, lux, MaLLby, ponter, short    |
|           17 |     2536 | 2023-04-16 | Paquetá        | W   | 0.302      | 0.384        | 0.069 (0.008)    | 0.454 (0.053)    | 0 (0.000) |     6.63 | keiz, lux, MaLLby, ponter, short    |
|           16 |     2544 | 2023-04-16 | FURIA Academy  | W   | 0.300      | 0.384        | 0.023 (0.003)    | 0.472 (0.055)    | 0 (0.000) |     5.57 | keiz, lux, MaLLby, ponter, short    |
|           15 |     2552 | 2023-04-15 | INTZ           | W   | 0.296      | 0.384        | 0.005 (0.001)    | 0.170 (0.019)    | 0 (0.000) |     4.05 | keiz, lux, MaLLby, ponter, short    |
|           14 |     2625 | 2023-04-13 | Meta           | W   | 0.280      | 0.384        | 0.015 (0.002)    | 0.471 (0.051)    | 0 (0.000) |     4.73 | keiz, lux, MaLLby, ponter, short    |
|           13 |     2920 | 2023-03-30 | INTZ           | W   | 0.187      | 0.384        | 0.005 (0.000)    | 0.170 (0.012)    | 0 (0.000) |     2.62 | keiz, MaLLby, ninjaZ, ponter, short |
|           12 |     2937 | 2023-03-29 | Sharks         | L   | 0.182      | -            | -                | -                | -         |    -1.42 | keiz, MaLLby, ninjaZ, ponter, short |
|           11 |     2965 | 2023-03-28 | Furious        | W   | 0.176      | -            | -                | -                | 0 (0.000) |     2.06 | keiz, MaLLby, ninjaZ, ponter, short |
|           10 |     2974 | 2023-03-28 | ODDIK          | W   | 0.174      | 0.371        | 0.007 (0.000)    | 0.352 (0.023)    | 0 (0.000) |     2.83 | keiz, MaLLby, ninjaZ, ponter, short |
|            9 |     3066 | 2023-03-25 | FUSION         | W   | 0.153      | -            | -                | -                | 0 (0.000) |     1.08 | keiz, MaLLby, ninjaZ, ponter, short |
|            8 |     3114 | 2023-03-23 | Sharks         | W   | 0.142      | 0.371        | 0.117 (0.006)    | 0.718 (0.038)    | 0 (0.000) |     3.41 | keiz, MaLLby, ninjaZ, ponter, short |
|            7 |     3200 | 2023-03-21 | Boca Juniors   | W   | 0.128      | 0.371        | 0.035 (0.002)    | 0.511 (0.024)    | -         |     2.79 | keiz, MaLLby, ninjaZ, ponter, short |
|            6 |     3319 | 2023-03-17 | Fluxo          | L   | 0.102      | -            | -                | -                | -         |    -1.49 | keiz, MaLLby, ninjaZ, ponter, short |
|            5 |     3323 | 2023-03-17 | O PLANO        | W   | 0.101      | 0.143        | 0.026 (0.000)    | -                | -         |     1.99 | keiz, MaLLby, ninjaZ, ponter, short |
|            4 |     3349 | 2023-03-16 | INTZ           | W   | 0.096      | -            | -                | -                | -         |     1.33 | keiz, MaLLby, ninjaZ, ponter, short |
|            3 |     3359 | 2023-03-16 | RED Canids     | W   | 0.095      | -            | -                | -                | -         |     1.51 | keiz, MaLLby, ninjaZ, ponter, short |
|            2 |     3392 | 2023-03-15 | Desorganizados | W   | 0.088      | -            | -                | -                | -         |     0.59 | keiz, MaLLby, ninjaZ, ponter, short |
|            1 |     3470 | 2023-03-12 | Corinthians    | W   | 0.069      | 0.371        | -                | 0.552 (0.014)    | -         |     1.11 | keiz, MaLLby, ninjaZ, ponter, short |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,237.96)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-04-16 |      0.302 | $11,000.00     | $3,327.18       |
| 2023-03-29 |      0.182 | $5,000.00      | $910.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
