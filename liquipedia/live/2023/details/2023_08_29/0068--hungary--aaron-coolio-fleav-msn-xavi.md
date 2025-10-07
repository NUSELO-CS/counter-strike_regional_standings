### Roster Details<br />
Team Name: Hungary<br />
Roster: Aaron, coolio, fleav, msN, xavi<br />
Global Rank: [68](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [53]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  922.9<br />
<br />
Final Rank Value (922.9) = Starting Rank Value (896.6) + Head To Head Adjustments (26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.417[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.115[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.746[<sup>2</sup>](#table1)

The average of these factors is 0.257<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 896.6
- 400 + ( ( 0.257 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 896.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |        7 | 2023-08-28 | Poland            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.94 | Aaron, coolio, fleav, msN, xavi      |
|           33 |      280 | 2023-08-15 | 1WIN              | L   | 1.000      | -            | -                | -                | -         |    -4.75 | Aaron, coolio, fleav, Kamion, msN    |
|           32 |      537 | 2023-08-07 | Endpoint          | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.790 (0.343)    | 0 (0.000) |    18.04 | Aaron, coolio, fleav, Kamion, msN    |
|           31 |      573 | 2023-08-04 | ALTERNATE aTTaX   | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.884 (0.384)    | 0 (0.000) |    19.85 | Aaron, coolio, fleav, Kamion, msN    |
|           30 |      620 | 2023-08-02 | Nemiga            | W   | 1.000      | 0.435        | -                | 0.217 (0.094)    | 0 (0.000) |     4.74 | Aaron, coolio, fleav, Kamion, msN    |
|           29 |      635 | 2023-08-01 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -10.24 | Aaron, coolio, fleav, Kamion, msN    |
|           28 |      653 | 2023-07-31 | En av de lette    | L   | 1.000      | -            | -                | -                | -         |   -23.23 | Aaron, coolio, fleav, kory, msN      |
|           27 |      813 | 2023-07-21 | The Prodigies     | W   | 0.939      | 0.143        | -                | 0.453 (0.061)    | 0 (0.000) |     8.63 | Aaron, fleav, Kamion, kory, msN      |
|           26 |      854 | 2023-07-18 | Let us cook       | W   | 0.921      | -            | -                | -                | 0 (0.000) |     3.24 | Aaron, fleav, Kamion, kory, msN      |
|           25 |      863 | 2023-07-18 | Singularity       | W   | 0.919      | 0.143        | 0.041 (0.005)    | 0.384 (0.050)    | 0 (0.000) |     8.74 | Aaron, fleav, Kamion, kory, msN      |
|           24 |      880 | 2023-07-17 | ALTERNATE aTTaX   | L   | 0.912      | -            | -                | -                | -         |   -11.43 | Aaron, fleav, Kamion, kory, msN      |
|           23 |      934 | 2023-07-14 | ORKS              | L   | 0.894      | -            | -                | -                | -         |   -23.45 | Aaron, coolio, fleav, kory, msN      |
|           22 |     1091 | 2023-06-24 | Zero Tenacity     | L   | 0.760      | -            | -                | -                | -         |   -14.23 | Aaron, bodito, coolio, Kamion, msN   |
|           21 |     1100 | 2023-06-23 | los kogutos       | W   | 0.753      | 0.338        | 0.038 (0.010)    | 0.950 (0.242)    | 0 (0.000) |     9.02 | Aaron, bodito, coolio, Kamion, msN   |
|           20 |     1205 | 2023-06-13 | JANO              | W   | 0.685      | 0.338        | 0.007 (0.002)    | 0.427 (0.099)    | 0 (0.000) |     6.03 | Aaron, bodito, coolio, Kamion, msN   |
|           19 |     1212 | 2023-06-12 | Insilio           | W   | 0.678      | 0.338        | -                | 0.238 (0.055)    | 0 (0.000) |     4.10 | Aaron, bodito, coolio, Kamion, msN   |
|           18 |     1324 | 2023-06-08 | The Neighbours    | W   | 0.654      | -            | -                | -                | -         |     5.82 | Aaron, bodito, coolio, Kamion, msN   |
|           17 |     1332 | 2023-06-08 | L&G               | W   | 0.653      | -            | -                | -                | -         |     2.88 | Aaron, bodito, coolio, Kamion, msN   |
|           16 |     1365 | 2023-06-07 | Astralis Talent   | L   | 0.648      | -            | -                | -                | -         |    -7.79 | Aaron, bodito, coolio, Kamion, msN   |
|           15 |     1412 | 2023-06-05 | ECLOT             | W   | 0.634      | 0.432        | 0.114 (0.031)    | 0.710 (0.195)    | -         |    14.95 | Aaron, bodito, coolio, Kamion, msN   |
|           14 |     1436 | 2023-06-04 | BEE               | W   | 0.627      | -            | -                | -                | -         |     3.34 | Aaron, bodito, coolio, fleav, Kamion |
|           13 |     1495 | 2023-06-02 | BEE               | W   | 0.614      | -            | -                | -                | -         |     3.26 | Aaron, bodito, coolio, fleav, Kamion |
|           12 |     1502 | 2023-06-02 | Honvéd            | W   | 0.613      | -            | -                | -                | -         |     2.05 | Aaron, bodito, coolio, fleav, Kamion |
|           11 |     1539 | 2023-06-01 | Cryptova          | W   | 0.607      | 0.432        | 0.009 (0.002)    | -                | -         |     5.87 | Aaron, bodito, coolio, Kamion, msN   |
|           10 |     1862 | 2023-05-23 | BIG Academy       | W   | 0.548      | 0.432        | 0.007 (0.002)    | 0.252 (0.060)    | -         |     5.54 | Aaron, bodito, coolio, Kamion, msN   |
|            9 |     1923 | 2023-05-21 | BIG               | L   | 0.531      | -            | -                | -                | -         |    -6.18 | Aaron, bodito, coolio, Kamion, msN   |
|            8 |     1932 | 2023-05-20 | GODSENT           | L   | 0.526      | -            | -                | -                | -         |   -11.73 | Aaron, bodito, coolio, Kamion, msN   |
|            7 |     1935 | 2023-05-20 | Ninjas in Pyjamas | W   | 0.525      | 0.143        | 0.194 (0.015)    | -                | -         |    15.60 | Aaron, bodito, coolio, Kamion, msN   |
|            6 |     2072 | 2023-05-10 | BRUTE             | W   | 0.460      | -            | -                | -                | -         |     1.75 | Aaron, bodito, coolio, Kamion, msN   |
|            5 |     2167 | 2023-05-04 | GODSENT           | W   | 0.421      | 0.143        | 0.016 (0.001)    | -                | -         |     4.08 | Aaron, bodito, coolio, Kamion, msN   |
|            4 |     2179 | 2023-05-04 | ex-iNation        | W   | 0.420      | -            | -                | -                | -         |     3.08 | Aaron, bodito, coolio, Kamion, msN   |
|            3 |     2215 | 2023-05-02 | Falcons           | L   | 0.407      | -            | -                | -                | -         |    -8.70 | Aaron, bodito, coolio, Kamion, msN   |
|            2 |     2416 | 2023-04-23 | fightclub         | W   | 0.347      | -            | -                | -                | -         |     1.25 | Aaron, bodito, fleav, Kamion, msN    |
|            1 |     2619 | 2023-04-13 | LDLC              | L   | 0.281      | -            | -                | -                | -         |    -6.70 | Aaron, bodito, coolio, Kamion, msN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,936.12)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-31 |      1.000 | $2,500.00      | $2,500.00       |
| 2023-06-25 |      0.767 | $1,500.00      | $1,150.55       |
| 2023-06-07 |      0.648 | $7,557.00      | $4,893.60       |
| 2023-06-04 |      0.627 | $2,154.00      | $1,351.01       |
| 2023-04-23 |      0.347 | $3,000.00      | $1,040.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
