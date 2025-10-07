### Roster Details<br />
Team Name: Illuminar<br />
Roster: bnox, Demho, m4tthi, TOAO, Vegi<br />
Global Rank: [141](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [97]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  738.4<br />
<br />
Final Rank Value (738.4) = Starting Rank Value (727.3) + Head To Head Adjustments (11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.187[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 727.3
- 400 + ( ( 0.169 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 727.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     1177 | 2023-06-15 | PGE Turow            | L   | 0.701      | -            | -                | -                | -         |    -8.41 | bnox, Demho, m4tthi, TOAO, Vegi   |
|           20 |     1259 | 2023-06-10 | Ignis Serpens        | L   | 0.666      | -            | -                | -                | -         |   -11.39 | bnox, Demho, m4tthi, morelz, TOAO |
|           19 |     1302 | 2023-06-09 | BIG                  | L   | 0.659      | -            | -                | -                | -         |   -10.97 | bnox, Demho, m4tthi, morelz, TOAO |
|           18 |     1447 | 2023-06-04 | EYEBALLERS           | W   | 0.626      | 0.435        | 0.017 (0.005)    | 0.609 (0.166)    | 0 (0.000) |    13.19 | bnox, Demho, m4tthi, morelz, TOAO |
|           17 |     1507 | 2023-06-02 | ENCE Academy         | W   | 0.613      | 0.435        | 0.014 (0.004)    | 0.580 (0.155)    | 0 (0.000) |    12.81 | bnox, Demho, m4tthi, morelz, TOAO |
|           16 |     1589 | 2023-05-31 | HAVU                 | L   | 0.598      | -            | -                | -                | -         |    -4.91 | bnox, Demho, m4tthi, morelz, TOAO |
|           15 |     1669 | 2023-05-29 | Sprout               | L   | 0.585      | -            | -                | -                | -         |    -5.11 | bnox, Demho, m4tthi, morelz, TOAO |
|           14 |     1732 | 2023-05-27 | Los Alpacas          | W   | 0.572      | 0.143        | 0.012 (0.001)    | 0.156 (0.013)    | 0 (0.000) |     9.05 | bnox, Demho, m4tthi, morelz, TOAO |
|           13 |     1830 | 2023-05-24 | Insilio              | W   | 0.553      | 0.143        | 0.001 (0.000)    | 0.238 (0.019)    | 0 (0.000) |     7.20 | bnox, Demho, m4tthi, morelz, TOAO |
|           12 |     1867 | 2023-05-23 | Sampi                | L   | 0.547      | -            | -                | -                | -         |    -3.54 | bnox, Demho, m4tthi, morelz, TOAO |
|           11 |     1891 | 2023-05-23 | Insilio              | W   | 0.545      | 0.143        | 0.001 (0.000)    | 0.238 (0.019)    | 0 (0.000) |     7.29 | bnox, Demho, m4tthi, morelz, TOAO |
|           10 |     1975 | 2023-05-17 | Movistar Riders      | L   | 0.508      | -            | -                | -                | -         |    -3.36 | bnox, Demho, m4tthi, morelz, TOAO |
|            9 |     2337 | 2023-04-27 | Astralis Talent      | L   | 0.372      | -            | -                | -                | -         |    -1.96 | bnox, Demho, m4tthi, morelz, TOAO |
|            8 |     2400 | 2023-04-24 | Sangal               | W   | 0.353      | 0.435        | 0.001 (0.000)    | 0.409 (0.063)    | 0 (0.000) |     5.78 | bnox, Demho, m4tthi, morelz, TOAO |
|            7 |     2435 | 2023-04-22 | ex-Copenhagen Flames | W   | 0.339      | 0.435        | 0.017 (0.002)    | 0.414 (0.061)    | 0 (0.000) |     6.63 | bnox, Demho, m4tthi, morelz, TOAO |
|            6 |     2468 | 2023-04-20 | EYEBALLERS           | L   | 0.325      | -            | -                | -                | -         |    -3.08 | bnox, Demho, m4tthi, morelz, TOAO |
|            5 |     2499 | 2023-04-18 | Nexus                | W   | 0.314      | 0.435        | 0.000 (0.000)    | 0.373 (0.051)    | 0 (0.000) |     3.37 | bnox, Demho, DGL, morelz, TOAO    |
|            4 |     2510 | 2023-04-18 | Enterprise           | L   | 0.312      | -            | -                | -                | -         |    -6.06 | bnox, Demho, DGL, morelz, TOAO    |
|            3 |     2543 | 2023-04-16 | PGE Turow            | L   | 0.301      | -            | -                | -                | -         |    -3.76 | bnox, Demho, DGL, morelz, TOAO    |
|            2 |     2626 | 2023-04-13 | Singularity          | W   | 0.280      | 0.360        | 0.041 (0.004)    | 0.384 (0.039)    | 0 (0.000) |     5.35 | bnox, Demho, DGL, morelz, TOAO    |
|            1 |     2844 | 2023-04-03 | Sashi                | W   | 0.213      | 0.143        | 0.005 (0.000)    | 0.081 (0.002)    | 0 (0.000) |     2.96 | bnox, Demho, DGL, morelz, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,061.56)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-18 |      0.721 | $1,697.00      | $1,224.19       |
| 2023-06-11 |      0.674 | $2,997.00      | $2,020.08       |
| 2023-04-16 |      0.301 | $2,716.00      | $817.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
