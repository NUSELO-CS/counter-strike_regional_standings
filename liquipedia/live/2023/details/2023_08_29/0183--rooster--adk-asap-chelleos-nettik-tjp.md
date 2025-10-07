### Roster Details<br />
Team Name: Rooster<br />
Roster: ADK, asap, chelleos, nettik, TjP<br />
Global Rank: [183](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [15]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  672.1<br />
<br />
Final Rank Value (672.1) = Starting Rank Value (661.5) + Head To Head Adjustments (10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.308[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.292[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 661.5
- 400 + ( ( 0.135 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 661.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      152 | 2023-08-23 | Australia       | L   | 1.000      | -            | -                | -                | -         |   -15.30 | ADK, asap, chelleos, nettik, TjP      |
|           21 |      166 | 2023-08-22 | VERTEX          | L   | 1.000      | -            | -                | -                | -         |   -14.99 | ADK, asap, chelleos, nettik, TjP      |
|           20 |      170 | 2023-08-22 | John Industries | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.159 (0.023)    | 0 (0.000) |    12.06 | ADK, asap, chelleos, nettik, TjP      |
|           19 |      984 | 2023-07-12 | VERTEX          | W   | 0.878      | 0.143        | 0.009 (0.001)    | 0.209 (0.026)    | 0 (0.000) |    14.44 | ADK, asap, chelleos, nettik, TjP      |
|           18 |     1023 | 2023-07-11 | e-LEMON-ators   | W   | 0.872      | 0.143        | 0.000 (0.000)    | 0.042 (0.005)    | 0 (0.000) |     5.23 | ADK, chelleos, dangeR, nettik, TjP    |
|           17 |     1037 | 2023-07-10 | Five5           | W   | 0.865      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.92 | ADK, asap, chelleos, nettik, TjP      |
|           16 |     1267 | 2023-06-10 | VERTEX          | L   | 0.665      | -            | -                | -                | -         |    -9.96 | ADK, asap, chelleos, nettik, TjP      |
|           15 |     1300 | 2023-06-09 | Australia       | W   | 0.659      | 0.333        | 0.003 (0.001)    | 0.374 (0.082)    | 0 (0.000) |    10.34 | ADK, asap, chelleos, nettik, TjP      |
|           14 |     1350 | 2023-06-08 | sunday school   | W   | 0.651      | 0.333        | 0.000 (0.000)    | 0.066 (0.014)    | 0 (0.000) |     6.55 | asap, chelleos, dangeR, nettik, TjP   |
|           13 |     1845 | 2023-05-24 | The Big Dogs    | W   | 0.552      | 0.333        | 0.000 (0.000)    | 0.091 (0.017)    | 0 (0.000) |     5.44 | ADK, asap, chelleos, nettik, TjP      |
|           12 |     1893 | 2023-05-23 | Stirlzs Angels  | W   | 0.544      | 0.333        | 0.000 (0.000)    | 0.048 (0.009)    | 0 (0.000) |     4.77 | ADK, asap, chelleos, nettik, TjP      |
|           11 |     2715 | 2023-04-11 | sunday school   | L   | 0.265      | -            | -                | -                | -         |    -5.82 | ADK, chelleos, dangeR, nettik, Rackem |
|           10 |     2995 | 2023-03-28 | e-LEMON-ators   | L   | 0.171      | -            | -                | -                | -         |    -2.94 | asap, nettik, Rackem, SWANKY, TjP     |
|            9 |     3076 | 2023-03-25 | VERTEX          | L   | 0.151      | -            | -                | -                | -         |    -2.16 | ADK, asap, nettik, Rackem, TjP        |
|            8 |     3105 | 2023-03-24 | Australia       | W   | 0.145      | 0.143        | 0.003 (0.000)    | 0.374 (0.008)    | 0 (0.000) |     2.25 | ADK, asap, nettik, Rackem, TjP        |
|            7 |     3106 | 2023-03-24 | VERTEX          | L   | 0.144      | -            | -                | -                | -         |    -2.07 | ADK, asap, nettik, Rackem, TjP        |
|            6 |     3273 | 2023-03-19 | VERTEX          | L   | 0.112      | -            | -                | -                | -         |    -1.64 | ADK, asap, nettik, Rackem, TjP        |
|            5 |     3275 | 2023-03-19 | Australia       | W   | 0.111      | 0.143        | 0.003 (0.000)    | 0.374 (0.006)    | 0 (0.000) |     1.71 | ADK, asap, nettik, Rackem, TjP        |
|            4 |     3303 | 2023-03-18 | VERTEX          | L   | 0.105      | -            | -                | -                | -         |    -1.54 | ADK, asap, nettik, Rackem, val        |
|            3 |     3524 | 2023-03-11 | Fake Natty      | L   | 0.059      | -            | -                | -                | -         |    -0.45 | ADK, asap, chelleos, nettik, TjP      |
|            2 |     3592 | 2023-03-09 | paiN            | L   | 0.046      | -            | -                | -                | -         |    -0.22 | ADK, asap, chelleos, nettik, TjP      |
|            1 |     3619 | 2023-03-08 | FaZe            | L   | 0.040      | -            | -                | -                | -         |    -0.01 | ADK, asap, chelleos, nettik, TjP      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,539.94)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-11 |      0.672 | $1,337.00      | $897.95         |
| 2023-03-26 |      0.160 | $4,000.00      | $641.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
