### Roster Details<br />
Team Name: Imperial<br />
Roster: boltz, felps, HEN1, JOTA, VINI<br />
Global Rank: [28](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [3]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  1081.9<br />
<br />
Final Rank Value (1081.9) = Starting Rank Value (1060.2) + Head To Head Adjustments (21.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.540[<sup>1</sup>](#table2)
- Bounty Collected: 0.447[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.290[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.257[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1060.2
- 400 + ( ( 0.341 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1060.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      717 | 2023-07-28 | Ninjas in Pyjamas | L   | 0.988      | -            | -                | -                | -         |    -5.81 | boltz, felps, HEN1, JOTA, VINI   |
|           23 |      733 | 2023-07-27 | Grayhound         | W   | 0.980      | 0.143        | 0.066 (0.009)    | 0.189 (0.027)    | 1 (0.980) |    10.31 | boltz, felps, HEN1, JOTA, VINI   |
|           22 |      745 | 2023-07-26 | Monte             | L   | 0.973      | -            | -                | -                | -         |    -5.05 | boltz, felps, HEN1, JOTA, VINI   |
|           21 |     1243 | 2023-06-10 | Heroic            | L   | 0.668      | -            | -                | -                | -         |    -0.29 | boltz, chelo, FalleN, JOTA, VINI |
|           20 |     1287 | 2023-06-09 | Complexity        | W   | 0.660      | 0.729        | 0.120 (0.058)    | 0.373 (0.179)    | 1 (0.660) |    11.75 | boltz, chelo, FalleN, JOTA, VINI |
|           19 |     1326 | 2023-06-08 | G2                | L   | 0.654      | -            | -                | -                | -         |    -0.17 | boltz, chelo, FalleN, JOTA, VINI |
|           18 |     1371 | 2023-06-07 | Vitality          | W   | 0.646      | 0.729        | 1.000 (0.471)    | 0.680 (0.320)    | 1 (0.646) |    20.25 | boltz, chelo, FalleN, JOTA, VINI |
|           17 |     1432 | 2023-06-04 | ODDIK             | W   | 0.628      | 0.283        | 0.007 (0.001)    | 0.352 (0.062)    | 0 (0.000) |     4.25 | boltz, chelo, FalleN, JOTA, VINI |
|           16 |     1460 | 2023-06-03 | RED Canids        | W   | 0.622      | 0.283        | 0.008 (0.001)    | 0.262 (0.046)    | 0 (0.000) |     3.07 | boltz, chelo, FalleN, JOTA, VINI |
|           15 |     1779 | 2023-05-25 | Paquetá           | W   | 0.562      | 0.283        | 0.069 (0.011)    | 0.454 (0.072)    | 0 (0.000) |     5.68 | boltz, chelo, FalleN, JOTA, VINI |
|           14 |     1859 | 2023-05-23 | Sojoga            | W   | 0.548      | 0.283        | 0.009 (0.001)    | 0.314 (0.049)    | 0 (0.000) |     2.72 | boltz, chelo, FalleN, JOTA, VINI |
|           13 |     2276 | 2023-04-29 | Sprout            | L   | 0.386      | -            | -                | -                | -         |    -8.93 | boltz, FalleN, JOTA, lux, VINI   |
|           12 |     2319 | 2023-04-27 | 9INE              | L   | 0.374      | -            | -                | -                | -         |    -3.73 | boltz, FalleN, JOTA, lux, VINI   |
|           11 |     2514 | 2023-04-17 | TheMongolz        | L   | 0.308      | -            | -                | -                | -         |    -5.59 | boltz, chelo, FalleN, JOTA, VINI |
|           10 |     2528 | 2023-04-17 | Ninjas in Pyjamas | L   | 0.306      | -            | -                | -                | -         |    -1.15 | boltz, chelo, FalleN, JOTA, VINI |
|            9 |     2745 | 2023-04-08 | Complexity        | L   | 0.248      | -            | -                | -                | -         |    -3.19 | boltz, chelo, FalleN, JOTA, VINI |
|            8 |     2766 | 2023-04-07 | TeamOne           | W   | 0.242      | -            | -                | -                | 1 (0.242) |     0.69 | boltz, chelo, FalleN, JOTA, VINI |
|            7 |     2794 | 2023-04-06 | Evil Geniuses     | L   | 0.236      | -            | -                | -                | -         |    -6.59 | boltz, chelo, FalleN, JOTA, VINI |
|            6 |     2849 | 2023-04-02 | paiN              | W   | 0.208      | 0.461        | 0.085 (0.008)    | 0.404 (0.039)    | 0 (0.000) |     2.57 | boltz, chelo, FalleN, JOTA, VINI |
|            5 |     2865 | 2023-04-01 | Evil Geniuses     | W   | 0.202      | 0.461        | 0.077 (0.007)    | 0.580 (0.054)    | 0 (0.000) |     1.73 | boltz, chelo, FalleN, JOTA, VINI |
|            4 |     2886 | 2023-03-31 | Complexity        | W   | 0.195      | 0.461        | 0.120 (0.011)    | 0.373 (0.033)    | -         |     3.70 | boltz, chelo, FalleN, JOTA, VINI |
|            3 |     3021 | 2023-03-26 | The Union         | L   | 0.162      | -            | -                | -                | -         |    -4.37 | boltz, chelo, FalleN, JOTA, VINI |
|            2 |     3725 | 2023-03-04 | Complexity        | L   | 0.013      | -            | -                | -                | -         |    -0.16 | boltz, chelo, FalleN, JOTA, VINI |
|            1 |     3763 | 2023-03-02 | SAW               | L   | 0.001      | -            | -                | -                | -         |    -0.01 | boltz, chelo, FalleN, JOTA, VINI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,447.80)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-28 |      0.988 | $4,500.00      | $4,445.31       |
| 2023-06-11 |      0.675 | $40,000.00     | $26,987.48      |
| 2023-06-04 |      0.628 | $1,300.00      | $815.84         |
| 2023-04-23 |      0.347 | $4,000.00      | $1,388.87       |
| 2023-04-02 |      0.208 | $20,000.00     | $4,168.30       |
| 2023-03-26 |      0.160 | $4,000.00      | $641.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
