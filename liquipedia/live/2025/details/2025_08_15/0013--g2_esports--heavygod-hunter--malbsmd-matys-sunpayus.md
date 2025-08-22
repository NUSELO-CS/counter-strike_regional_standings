### Roster Details<br />
Team Name: G2 Esports<br />
Roster: HeavyGod, huNter-, malbsMd, matys, SunPayus<br />
Global Rank: [13](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [10]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  1621.5<br />
<br />
Final Rank Value (1621.5) = Starting Rank Value (1560.4) + Head To Head Adjustments (61.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.751[<sup>1</sup>](#table2)
- Bounty Collected: 0.630[<sup>2</sup>](#table1)
- Opponent Network: 0.275[<sup>2</sup>](#table1)
- LAN Wins: 0.722[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.334[<sup>2</sup>](#table1)

The average of these factors is 0.594<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1560.4
- 400 + ( ( 0.594 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 1560.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       60 | 2025-08-09 | Team Spirit        | L   | 1.000      | -            | -                | -                | -         |    -3.05 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           31 |      108 | 2025-08-05 | Nemiga Gaming      | W   | 1.000      | -            | -                | -                | -         |     3.72 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           30 |      200 | 2025-07-29 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -10.88 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           29 |      216 | 2025-07-28 | 3DMAX              | W   | 1.000      | 1.000        | 0.401 (0.401)    | 0.475 (0.475)    | 1 (1.000) |    17.44 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           28 |      235 | 2025-07-27 | Team Vitality      | L   | 1.000      | -            | -                | -                | -         |    -2.33 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           27 |      271 | 2025-07-26 | FURIA              | W   | 1.000      | 1.000        | 0.532 (0.532)    | 0.578 (0.578)    | 1 (1.000) |    20.36 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           26 |      824 | 2025-06-15 | The MongolZ        | L   | 0.786      | -            | -                | -                | -         |    -5.78 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           25 |      849 | 2025-06-14 | Natus Vincere      | L   | 0.779      | -            | -                | -                | -         |    -6.79 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           24 |      900 | 2025-06-13 | Aurora Gaming      | W   | 0.772      | 1.000        | 0.603 (0.465)    | 0.415 (0.320)    | 1 (0.772) |    13.90 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           23 |      916 | 2025-06-12 | PaiN Gaming        | W   | 0.767      | 1.000        | 0.318 (0.244)    | 0.349 (0.268)    | 1 (0.767) |    10.89 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           22 |      930 | 2025-06-12 | 3DMAX              | L   | 0.765      | -            | -                | -                | -         |    -8.21 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           21 |     1200 | 2025-05-21 | GamerLegion        | L   | 0.621      | -            | -                | -                | -         |    -9.22 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           20 |     1205 | 2025-05-21 | 3DMAX              | W   | 0.619      | 1.000        | 0.401 (0.248)    | 0.475 (0.294)    | 1 (0.619) |    12.99 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           19 |     1225 | 2025-05-20 | The MongolZ        | L   | 0.614      | -            | -                | -                | -         |    -3.90 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           18 |     1256 | 2025-05-19 | Lynn Vision Gaming | W   | 0.607      | 1.000        | 0.304 (0.185)    | 0.514 (0.312)    | 1 (0.607) |    10.24 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           17 |     2090 | 2025-04-13 | Team Falcons       | L   | 0.365      | -            | -                | -                | -         |    -4.08 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           16 |     2103 | 2025-04-12 | Complexity         | W   | 0.359      | 1.000        | 0.270 (0.097)    | 0.328 (0.118)    | 1 (0.359) |     2.78 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           15 |     2128 | 2025-04-11 | Virtus.pro         | W   | 0.351      | 1.000        | -                | 0.415 (0.146)    | 1 (0.351) |     5.06 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           14 |     2227 | 2025-04-08 | Complexity         | W   | 0.330      | 1.000        | 0.270 (0.089)    | -                | 1 (0.330) |     2.47 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           13 |     2253 | 2025-04-07 | Rare Atom          | W   | 0.322      | 1.000        | -                | 0.350 (0.113)    | 1 (0.322) |     0.83 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           12 |     2268 | 2025-04-06 | GamerLegion        | W   | 0.316      | 1.000        | 0.480 (0.152)    | 0.393 (0.124)    | -         |     5.76 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           11 |     2588 | 2025-03-28 | MOUZ               | L   | 0.258      | -            | -                | -                | -         |    -0.83 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           10 |     2781 | 2025-03-24 | The MongolZ        | W   | 0.232      | 0.715        | 1.000 (0.166)    | -                | -         |     6.08 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            9 |     2790 | 2025-03-23 | M80                | W   | 0.226      | -            | -                | -                | -         |     0.99 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            8 |     2805 | 2025-03-22 | Aurora Gaming      | L   | 0.219      | -            | -                | -                | -         |    -2.64 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            7 |     2850 | 2025-03-20 | Imperial Esports   | W   | 0.204      | -            | -                | -                | -         |     0.87 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            6 |     2986 | 2025-03-13 | MOUZ               | L   | 0.159      | -            | -                | -                | -         |    -0.50 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            5 |     3019 | 2025-03-11 | GamerLegion        | W   | 0.146      | -            | -                | -                | -         |     2.72 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            4 |     3054 | 2025-03-10 | Natus Vincere      | L   | 0.139      | -            | -                | -                | -         |    -0.92 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            3 |     3124 | 2025-03-09 | SAW                | W   | 0.131      | -            | -                | -                | -         |     1.59 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            2 |     3198 | 2025-03-08 | The MongolZ        | L   | 0.124      | -            | -                | -                | -         |    -0.64 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            1 |     3249 | 2025-03-07 | PaiN Gaming        | W   | 0.119      | -            | -                | -                | -         |     2.16 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($171,649.69)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-10 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-08-03 |      1.000 | $38,000.00     | $38,000.00      |
| 2025-06-22 |      0.833 | $20,000.00     | $16,651.39      |
| 2025-05-25 |      0.646 | $47,000.00     | $30,357.43      |
| 2025-04-13 |      0.365 | $187,500.00    | $68,372.40      |
| 2025-03-30 |      0.271 | $20,000.00     | $5,429.17       |
| 2025-03-16 |      0.178 | $58,000.00     | $10,339.31      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
