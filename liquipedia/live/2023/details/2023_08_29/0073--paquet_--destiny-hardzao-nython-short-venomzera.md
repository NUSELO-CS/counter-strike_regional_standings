### Roster Details<br />
Team Name: Paquetá<br />
Roster: DeStiNy, hardzao, nython, short, venomzera<br />
Global Rank: [73](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [14]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  910.6<br />
<br />
Final Rank Value (910.6) = Starting Rank Value (903.1) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.463[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.171[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.454[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 903.1
- 400 + ( ( 0.260 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 903.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      185 | 2023-08-20 | paiN           | L   | 1.000      | -            | -                | -                | -         |   -22.33 | DeStiNy, hardzao, nython, short, venomzera |
|           37 |      196 | 2023-08-19 | Meta           | W   | 1.000      | 0.417        | 0.015 (0.006)    | 0.471 (0.196)    | 0 (0.000) |     9.44 | DeStiNy, hardzao, nython, short, venomzera |
|           36 |      230 | 2023-08-17 | paiN           | L   | 1.000      | -            | -                | -                | -         |   -23.37 | DeStiNy, hardzao, nython, short, venomzera |
|           35 |      305 | 2023-08-13 | Sharks         | W   | 1.000      | 0.384        | 0.117 (0.045)    | 0.718 (0.276)    | 0 (0.000) |    20.02 | DeStiNy, hardzao, nython, short, venomzera |
|           34 |      318 | 2023-08-13 | Filhos de D10S | W   | 1.000      | 0.384        | 0.009 (0.004)    | 0.436 (0.167)    | 0 (0.000) |    13.76 | DeStiNy, hardzao, nython, short, venomzera |
|           33 |      334 | 2023-08-12 | Meta           | W   | 1.000      | 0.384        | 0.015 (0.006)    | 0.471 (0.181)    | 0 (0.000) |    10.93 | DeStiNy, hardzao, nython, short, venomzera |
|           32 |      415 | 2023-08-10 | W7M            | W   | 1.000      | 0.384        | -                | 0.513 (0.197)    | 0 (0.000) |    10.30 | DeStiNy, hardzao, nython, short, venomzera |
|           31 |      786 | 2023-07-22 | Fake Natty     | L   | 0.948      | -            | -                | -                | -         |   -13.46 | DeStiNy, hardzao, nython, short, venomzera |
|           30 |      810 | 2023-07-21 | Corinthians    | W   | 0.939      | 0.384        | -                | 0.552 (0.199)    | 0 (0.000) |     7.12 | DeStiNy, hardzao, nython, short, venomzera |
|           29 |     1278 | 2023-06-09 | BESTIA         | L   | 0.662      | -            | -                | -                | -         |    -6.98 | ALLE, DeStiNy, nython, venomzera, y4s      |
|           28 |     1312 | 2023-06-08 | O PLANO        | W   | 0.656      | 0.384        | 0.026 (0.007)    | 0.470 (0.119)    | 0 (0.000) |     7.95 | ALLE, DeStiNy, nython, venomzera, y4s      |
|           27 |     1354 | 2023-06-07 | FURIA Academy  | L   | 0.649      | -            | -                | -                | -         |   -12.30 | ALLE, DeStiNy, nython, righi, venomzera    |
|           26 |     1459 | 2023-06-03 | BESTIA         | W   | 0.622      | 0.396        | 0.191 (0.047)    | 0.721 (0.178)    | 0 (0.000) |    12.80 | ALLE, DeStiNy, nython, righi, venomzera    |
|           25 |     1525 | 2023-06-01 | ODDIK          | L   | 0.608      | -            | -                | -                | -         |   -12.54 | ALLE, DeStiNy, nython, venomzera, yel      |
|           24 |     1597 | 2023-05-30 | FURIA Academy  | W   | 0.595      | 0.396        | 0.023 (0.005)    | 0.472 (0.112)    | -         |     7.65 | ALLE, DeStiNy, nython, venomzera, yel      |
|           23 |     1779 | 2023-05-25 | Imperial       | L   | 0.562      | -            | -                | -                | -         |    -5.68 | ALLE, DeStiNy, nython, venomzera, yel      |
|           22 |     1813 | 2023-05-24 | 9z Academy     | W   | 0.556      | -            | -                | -                | -         |     2.89 | ALLE, DeStiNy, nython, venomzera, yel      |
|           21 |     1853 | 2023-05-23 | ODDIK          | W   | 0.550      | -            | -                | -                | -         |     5.71 | ALLE, DeStiNy, nython, venomzera, yel      |
|           20 |     2154 | 2023-05-06 | 9z             | L   | 0.433      | -            | -                | -                | -         |    -3.48 | ALLE, DeStiNy, nython, venomzera, yel      |
|           19 |     2158 | 2023-05-05 | The Union      | W   | 0.428      | -            | -                | -                | -         |     4.08 | ALLE, DeStiNy, nython, venomzera, yel      |
|           18 |     2166 | 2023-05-04 | 9z             | L   | 0.421      | -            | -                | -                | -         |    -3.52 | ALLE, DeStiNy, nython, venomzera, yel      |
|           17 |     2191 | 2023-05-03 | W7M            | W   | 0.416      | -            | -                | -                | -         |     4.05 | ALLE, DeStiNy, nython, venomzera, yel      |
|           16 |     2195 | 2023-05-03 | 9z             | L   | 0.415      | -            | -                | -                | -         |    -3.39 | ALLE, DeStiNy, nython, venomzera, yel      |
|           15 |     2266 | 2023-04-29 | Solid          | L   | 0.388      | -            | -                | -                | -         |    -8.28 | ALLE, DeStiNy, nython, venomzera, yel      |
|           14 |     2367 | 2023-04-25 | O PLANO        | W   | 0.362      | 0.333        | 0.026 (0.003)    | -                | -         |     4.41 | ALLE, DeStiNy, nython, venomzera, yel      |
|           13 |     2393 | 2023-04-24 | FURIA Academy  | W   | 0.355      | -            | -                | -                | -         |     4.39 | ALLE, DeStiNy, nython, venomzera, yel      |
|           12 |     2536 | 2023-04-16 | ARCTIC         | L   | 0.302      | -            | -                | -                | -         |    -6.63 | ALLE, DeStiNy, nython, venomzera, yel      |
|           11 |     2541 | 2023-04-16 | Sharks         | W   | 0.301      | 0.384        | 0.117 (0.014)    | 0.718 (0.083)    | -         |     5.23 | ALLE, DeStiNy, nython, venomzera, yel      |
|           10 |     2564 | 2023-04-15 | Fluxo          | W   | 0.295      | -            | -                | -                | -         |     3.06 | ALLE, DeStiNy, nython, venomzera, yel      |
|            9 |     2592 | 2023-04-14 | Solid          | W   | 0.288      | 0.384        | 0.030 (0.003)    | -                | -         |     2.99 | ALLE, DeStiNy, nython, venomzera, yel      |
|            8 |     2725 | 2023-04-09 | Fluxo          | L   | 0.254      | -            | -                | -                | -         |    -5.45 | ALLE, DeStiNy, nython, venomzera, yel      |
|            7 |     2744 | 2023-04-08 | Evil Geniuses  | W   | 0.248      | -            | -                | -                | 1 (0.248) |     1.93 | ALLE, DeStiNy, nython, venomzera, yel      |
|            6 |     2764 | 2023-04-07 | Solid          | W   | 0.243      | -            | -                | -                | 1 (0.243) |     2.54 | ALLE, DeStiNy, nython, venomzera, yel      |
|            5 |     2795 | 2023-04-06 | paiN           | L   | 0.235      | -            | -                | -                | -         |    -2.88 | ALLE, DeStiNy, nython, venomzera, yel      |
|            4 |     3321 | 2023-03-17 | Furious        | L   | 0.101      | -            | -                | -                | -         |    -2.59 | ALLE, DeStiNy, nython, venomzera, yel      |
|            3 |     3330 | 2023-03-17 | O PLANO        | L   | 0.100      | -            | -                | -                | -         |    -1.96 | ALLE, DeStiNy, nython, venomzera, yel      |
|            2 |     3346 | 2023-03-16 | BeBold         | W   | 0.096      | -            | -                | -                | -         |     0.78 | ALLE, DeStiNy, nython, venomzera, yel      |
|            1 |     3365 | 2023-03-16 | FUSION         | W   | 0.094      | -            | -                | -                | -         |     0.30 | ALLE, DeStiNy, nython, venomzera, yel      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,884.39)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $2,800.00      | $2,800.00       |
| 2023-08-13 |      1.000 | $11,000.00     | $11,000.00      |
| 2023-07-23 |      0.955 | $1,000.00      | $954.96         |
| 2023-06-10 |      0.668 | $2,500.00      | $1,670.35       |
| 2023-05-07 |      0.442 | $1,000.00      | $442.36         |
| 2023-04-30 |      0.395 | $1,000.00      | $394.87         |
| 2023-04-16 |      0.302 | $5,000.00      | $1,512.36       |
| 2023-03-18 |      0.109 | $1,000.00      | $109.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
