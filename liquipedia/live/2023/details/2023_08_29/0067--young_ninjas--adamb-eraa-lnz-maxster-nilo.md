### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: adamb, eraa, LNZ, maxster, nilo<br />
Global Rank: [67](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [52]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  924.5<br />
<br />
Final Rank Value (924.5) = Starting Rank Value (894.1) + Head To Head Adjustments (30.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.395[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.109[<sup>2</sup>](#table1)
- LAN Wins: 0.162[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.327[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 894.1
- 400 + ( ( 0.255 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 894.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     1126 | 2023-06-18 | PROSPECTS            | L   | 0.720      | -            | -                | -                | -         |   -10.92 | adamb, eraa, LNZ, maxster, nilo |
|           25 |     1158 | 2023-06-17 | PROSPECTS            | W   | 0.712      | 0.377        | 0.050 (0.014)    | 0.455 (0.122)    | 1 (0.712) |    11.71 | adamb, eraa, LNZ, maxster, nilo |
|           24 |     1170 | 2023-06-16 | ex-THUNDR            | W   | 0.705      | 0.377        | 0.006 (0.002)    | -                | 1 (0.705) |     2.47 | adamb, eraa, LNZ, maxster, nilo |
|           23 |     1233 | 2023-06-11 | BIG                  | L   | 0.672      | -            | -                | -                | -         |   -14.95 | adamb, eraa, LNZ, maxster, nilo |
|           22 |     1270 | 2023-06-10 | Looking4Org          | W   | 0.665      | 0.435        | 0.065 (0.019)    | 0.882 (0.255)    | 0 (0.000) |    13.39 | adamb, eraa, LNZ, nilo, phzy    |
|           21 |     1285 | 2023-06-09 | Apeks                | W   | 0.661      | 0.435        | 0.349 (0.100)    | 0.776 (0.223)    | 0 (0.000) |    19.57 | adamb, eraa, LNZ, nilo, phzy    |
|           20 |     1417 | 2023-06-05 | Sangal               | W   | 0.634      | 0.435        | -                | 0.409 (0.113)    | 0 (0.000) |     7.11 | adamb, eraa, LNZ, maxster, nilo |
|           19 |     1496 | 2023-06-02 | HAVU                 | W   | 0.614      | 0.435        | 0.017 (0.005)    | 0.395 (0.105)    | 0 (0.000) |    11.03 | adamb, eraa, LNZ, maxster, nilo |
|           18 |     1543 | 2023-06-01 | Let us cook          | L   | 0.606      | -            | -                | -                | -         |   -13.81 | adamb, eraa, LNZ, maxster, nilo |
|           17 |     1613 | 2023-05-30 | ENCE Academy         | W   | 0.594      | 0.435        | 0.014 (0.004)    | 0.580 (0.150)    | 0 (0.000) |     8.81 | adamb, eraa, LNZ, maxster, nilo |
|           16 |     1740 | 2023-05-27 | MASONIC              | W   | 0.571      | 0.143        | 0.012 (0.001)    | 0.262 (0.021)    | 0 (0.000) |     9.80 | adamb, eraa, LNZ, maxster, nilo |
|           15 |     1759 | 2023-05-26 | K23                  | W   | 0.567      | -            | -                | -                | 0 (0.000) |     4.00 | adamb, eraa, LNZ, maxster, nilo |
|           14 |     1773 | 2023-05-26 | PlusW                | W   | 0.565      | -            | -                | -                | 0 (0.000) |     1.14 | abdi, adamb, eraa, LNZ, maxster |
|           13 |     1804 | 2023-05-25 | Los Alpacas          | L   | 0.559      | -            | -                | -                | -         |   -12.27 | abdi, adamb, eraa, LNZ, maxster |
|           12 |     2380 | 2023-04-25 | PROSPECTS            | L   | 0.360      | -            | -                | -                | -         |    -4.01 | adamb, eraa, LNZ, maxster, nilo |
|           11 |     2916 | 2023-03-30 | Endpoint             | L   | 0.187      | -            | -                | -                | -         |    -2.59 | adamb, eraa, LNZ, maxster, nilo |
|           10 |     2971 | 2023-03-28 | MOUZ NXT             | W   | 0.174      | 0.435        | 0.057 (0.004)    | 0.601 (0.046)    | -         |     2.63 | adamb, eraa, LNZ, maxster, nilo |
|            9 |     3058 | 2023-03-25 | PROSPECTS            | L   | 0.154      | -            | -                | -                | -         |    -1.86 | adamb, eraa, LNZ, maxster, nilo |
|            8 |     3166 | 2023-03-22 | Astralis Talent      | W   | 0.134      | 0.435        | 0.110 (0.006)    | 0.582 (0.034)    | -         |     2.90 | adamb, eraa, LNZ, maxster, nilo |
|            7 |     3225 | 2023-03-21 | Endpoint             | L   | 0.125      | -            | -                | -                | -         |    -1.75 | abdi, adamb, delle, eraa, LNZ   |
|            6 |     3292 | 2023-03-18 | THE FREE             | W   | 0.107      | -            | -                | -                | -         |     1.32 | adamb, eraa, LNZ, maxster, nilo |
|            5 |     3398 | 2023-03-15 | MOUZ NXT             | L   | 0.088      | -            | -                | -                | -         |    -1.42 | adamb, eraa, LNZ, maxster, nilo |
|            4 |     3455 | 2023-03-13 | LDLC                 | L   | 0.074      | -            | -                | -                | -         |    -1.81 | adamb, eraa, LNZ, maxster, nilo |
|            3 |     3509 | 2023-03-11 | Espionage            | W   | 0.061      | 0.435        | 0.022 (0.001)    | 0.764 (0.020)    | -         |     1.25 | adamb, eraa, LNZ, maxster, nilo |
|            2 |     3567 | 2023-03-09 | Endpoint             | L   | 0.048      | -            | -                | -                | -         |    -0.69 | adamb, eraa, LNZ, maxster, nilo |
|            1 |     3636 | 2023-03-07 | ex-Copenhagen Flames | L   | 0.034      | -            | -                | -                | -         |    -0.66 | adamb, eraa, LNZ, maxster, nilo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,992.20)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-18 |      0.720 | $5,845.00      | $4,208.54       |
| 2023-06-11 |      0.673 | $5,000.00      | $3,365.19       |
| 2023-03-31 |      0.194 | $2,000.00      | $387.91         |
| 2023-03-11 |      0.061 | $500.00        | $30.56          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
