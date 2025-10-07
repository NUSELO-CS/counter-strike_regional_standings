### Roster Details<br />
Team Name: Sprout<br />
Roster: alpha, lauNX, Staehr, XELLOW, Zyphon<br />
Global Rank: [62](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [49]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  942.5<br />
<br />
Final Rank Value (942.5) = Starting Rank Value (864.6) + Head To Head Adjustments (77.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.142[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.420[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 864.6
- 400 + ( ( 0.240 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 864.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |     1244 | 2023-06-10 | MOUZ NXT             | L   | 0.668      | -            | -                | -                | -         |   -10.50 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           40 |     1262 | 2023-06-10 | 9 Pandas             | W   | 0.666      | 0.435        | 0.074 (0.021)    | 1.000 (0.289)    | 0 (0.000) |    14.40 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           39 |     1282 | 2023-06-09 | Astralis Talent      | W   | 0.661      | 0.435        | 0.110 (0.032)    | 0.582 (0.167)    | 0 (0.000) |    12.99 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           38 |     1293 | 2023-06-09 | Astralis Talent      | L   | 0.660      | -            | -                | -                | -         |    -7.88 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           37 |     1347 | 2023-06-08 | Nexus                | W   | 0.652      | 0.435        | -                | 0.373 (0.106)    | 0 (0.000) |     4.56 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           36 |     1537 | 2023-06-01 | PORTUGAL             | W   | 0.607      | -            | -                | -                | 0 (0.000) |     2.58 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           35 |     1669 | 2023-05-29 | Illuminar            | W   | 0.585      | 0.435        | 0.015 (0.004)    | -                | 0 (0.000) |     5.11 | alpha, lauNX, XELLOW, xicoz, Zyphon  |
|           34 |     1789 | 2023-05-25 | Monte                | L   | 0.560      | -            | -                | -                | -         |    -0.94 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           33 |     1798 | 2023-05-25 | Sangal               | W   | 0.559      | 0.384        | -                | 0.409 (0.088)    | 0 (0.000) |     5.36 | lauNX, Staehr, XELLOW, xicoz, Zyphon |
|           32 |     1820 | 2023-05-24 | 9INE                 | W   | 0.554      | 0.435        | 0.265 (0.064)    | 0.734 (0.177)    | 0 (0.000) |    14.08 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           31 |     1869 | 2023-05-23 | Ignis Serpens        | W   | 0.547      | 0.435        | 0.030 (0.007)    | -                | 0 (0.000) |     4.84 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           30 |     1903 | 2023-05-22 | FORZE                | W   | 0.540      | 0.435        | 0.364 (0.086)    | 0.409 (0.096)    | 0 (0.000) |    15.06 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           29 |     1911 | 2023-05-22 | 9 Pandas             | L   | 0.538      | -            | -                | -                | -         |    -3.60 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           28 |     1978 | 2023-05-17 | fnatic               | L   | 0.508      | -            | -                | -                | -         |    -1.65 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           27 |     1980 | 2023-05-17 | Astralis Talent      | L   | 0.506      | -            | -                | -                | -         |    -4.85 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           26 |     2049 | 2023-05-12 | Fake Natty           | W   | 0.474      | 0.548        | 0.058 (0.015)    | 0.541 (0.141)    | -         |     7.05 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           25 |     2086 | 2023-05-09 | Looking4Org          | W   | 0.454      | 0.435        | 0.065 (0.013)    | 0.882 (0.174)    | -         |     9.60 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           24 |     2159 | 2023-05-05 | Insilio              | W   | 0.427      | -            | -                | -                | -         |     3.52 | alpha, lauNX, Staehr, XELLOW, Zyphon |
|           23 |     2185 | 2023-05-04 | ECLOT                | W   | 0.419      | 0.384        | 0.114 (0.018)    | 0.710 (0.114)    | -         |    10.88 | lauNX, Staehr, XELLOW, xicoz, Zyphon |
|           22 |     2222 | 2023-05-02 | Websterz             | L   | 0.406      | -            | -                | -                | -         |    -4.74 | lauNX, Staehr, XELLOW, xicoz, Zyphon |
|           21 |     2247 | 2023-04-30 | 9INE                 | L   | 0.394      | -            | -                | -                | -         |    -1.78 | lauNX, Staehr, XELLOW, xicoz, Zyphon |
|           20 |     2276 | 2023-04-29 | Imperial             | W   | 0.386      | 0.677        | 0.141 (0.037)    | 0.257 (0.067)    | -         |     8.93 | lauNX, Staehr, XELLOW, xicoz, Zyphon |
|           19 |     2332 | 2023-04-27 | Cloud9               | L   | 0.373      | -            | -                | -                | -         |    -0.17 | lauNX, Staehr, XELLOW, xicoz, Zyphon |
|           18 |     2363 | 2023-04-26 | ex-iNation           | W   | 0.365      | -            | -                | -                | -         |     2.98 | lauNX, Staehr, XELLOW, xicoz, Zyphon |
|           17 |     2481 | 2023-04-19 | Sangal               | L   | 0.321      | -            | -                | -                | -         |    -6.74 | BERRY, lauNX, Staehr, XELLOW, Zyphon |
|           16 |     2758 | 2023-04-08 | Apeks                | L   | 0.245      | -            | -                | -                | -         |    -0.50 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|           15 |     2781 | 2023-04-07 | THE FREE             | W   | 0.239      | -            | -                | -                | 1 (0.239) |     3.17 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|           14 |     2805 | 2023-04-06 | Into the Breach      | L   | 0.234      | -            | -                | -                | -         |    -0.92 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|           13 |     2819 | 2023-04-06 | Falcons              | L   | 0.232      | -            | -                | -                | -         |    -4.88 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|           12 |     3096 | 2023-03-24 | PROSPECTS            | W   | 0.147      | -            | -                | -                | -         |     3.07 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|           11 |     3101 | 2023-03-24 | Boston crab          | W   | 0.146      | -            | -                | -                | -         |     1.10 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|           10 |     3140 | 2023-03-23 | Question Mark        | L   | 0.140      | -            | -                | -                | -         |    -2.05 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|            9 |     3272 | 2023-03-19 | ex-Copenhagen Flames | L   | 0.112      | -            | -                | -                | -         |    -2.04 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|            8 |     3340 | 2023-03-17 | HAVU                 | W   | 0.099      | -            | -                | -                | -         |     1.95 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|            7 |     3342 | 2023-03-17 | DUSTY                | W   | 0.098      | -            | -                | -                | -         |     0.21 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|            6 |     3457 | 2023-03-13 | 500                  | L   | 0.073      | -            | -                | -                | -         |    -0.87 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|            5 |     3583 | 2023-03-09 | FORZE                | L   | 0.047      | -            | -                | -                | -         |    -0.16 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|            4 |     3600 | 2023-03-08 | Apeks                | W   | 0.042      | -            | -                | -                | -         |     1.23 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|            3 |     3620 | 2023-03-08 | ECSTATIC             | L   | 0.040      | -            | -                | -                | -         |    -0.40 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|            2 |     3644 | 2023-03-07 | Into the Breach      | L   | 0.033      | -            | -                | -                | -         |    -0.13 | AZR, lauNX, Staehr, XELLOW, Zyphon   |
|            1 |     3717 | 2023-03-04 | Apeks                | L   | 0.014      | -            | -                | -                | -         |    -0.03 | AZR, lauNX, Staehr, XELLOW, Zyphon   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,127.13)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-10 |      0.668 | $10,000.00     | $6,675.65       |
| 2023-05-28 |      0.581 | $2,500.00      | $1,451.48       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
