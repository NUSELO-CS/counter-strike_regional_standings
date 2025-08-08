### Roster Details<br />
Team Name: G2 Esports<br />
Roster: HeavyGod, huNter-, malbsMd, matys, SunPayus<br />
Global Rank: [12](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  1610.3<br />
<br />
Final Rank Value (1610.3) = Starting Rank Value (1568.3) + Head To Head Adjustments (42.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.740[<sup>1</sup>](#table2)
- Bounty Collected: 0.633[<sup>2</sup>](#table1)
- Opponent Network: 0.337[<sup>2</sup>](#table1)
- LAN Wins: 0.746[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.353[<sup>2</sup>](#table1)

The average of these factors is 0.614<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1568.3
- 400 + ( ( 0.614 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1568.3


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
|           30 |       65 | 2025-07-29 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -12.77 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           29 |       78 | 2025-07-28 | 3DMAX              | W   | 1.000      | 1.000        | 0.378 (0.378)    | 0.571 (0.571)    | 1 (1.000) |    14.64 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           28 |       97 | 2025-07-27 | Team Vitality      | L   | 1.000      | -            | -                | -                | -         |    -2.25 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           27 |      133 | 2025-07-26 | FURIA              | W   | 1.000      | 1.000        | 0.486 (0.486)    | 0.626 (0.626)    | 1 (1.000) |    18.06 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           26 |      686 | 2025-06-15 | The MongolZ        | L   | 0.845      | -            | -                | -                | -         |    -6.50 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           25 |      711 | 2025-06-14 | Natus Vincere      | L   | 0.839      | -            | -                | -                | -         |    -7.69 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           24 |      762 | 2025-06-13 | Aurora Gaming      | W   | 0.831      | 1.000        | 0.591 (0.491)    | 0.455 (0.379)    | 1 (0.831) |    14.92 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           23 |      778 | 2025-06-12 | PaiN Gaming        | W   | 0.827      | 1.000        | 0.300 (0.248)    | 0.367 (0.303)    | 1 (0.827) |     9.35 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           22 |      792 | 2025-06-12 | 3DMAX              | L   | 0.825      | -            | -                | -                | -         |   -11.52 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           21 |     1062 | 2025-05-21 | GamerLegion        | L   | 0.680      | -            | -                | -                | -         |   -11.28 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           20 |     1067 | 2025-05-21 | 3DMAX              | W   | 0.679      | 1.000        | 0.378 (0.257)    | 0.571 (0.387)    | 1 (0.679) |    11.82 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           19 |     1087 | 2025-05-20 | The MongolZ        | L   | 0.674      | -            | -                | -                | -         |    -4.53 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           18 |     1118 | 2025-05-19 | Lynn Vision Gaming | W   | 0.667      | 1.000        | 0.280 (0.186)    | 0.634 (0.423)    | 1 (0.667) |     7.75 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           17 |     1952 | 2025-04-13 | Team Falcons       | L   | 0.425      | -            | -                | -                | -         |    -4.92 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           16 |     1965 | 2025-04-12 | Complexity         | W   | 0.419      | 1.000        | 0.257 (0.108)    | 0.417 (0.175)    | 1 (0.419) |     3.16 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           15 |     1990 | 2025-04-11 | Virtus.pro         | W   | 0.411      | 1.000        | -                | 0.411 (0.169)    | 1 (0.411) |     4.78 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           14 |     2089 | 2025-04-08 | Complexity         | W   | 0.390      | 1.000        | 0.257 (0.100)    | 0.417 (0.163)    | 1 (0.390) |     2.81 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           13 |     2115 | 2025-04-07 | Rare Atom          | W   | 0.382      | 1.000        | -                | 0.457 (0.175)    | 1 (0.382) |     0.91 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           12 |     2130 | 2025-04-06 | GamerLegion        | W   | 0.376      | 1.000        | 0.454 (0.171)    | -                | -         |     6.18 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           11 |     2450 | 2025-03-28 | MOUZ               | L   | 0.318      | -            | -                | -                | -         |    -1.14 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           10 |     2643 | 2025-03-24 | The MongolZ        | W   | 0.292      | 0.715        | 1.000 (0.209)    | -                | -         |     7.62 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            9 |     2652 | 2025-03-23 | M80                | W   | 0.286      | -            | -                | -                | -         |     0.99 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            8 |     2667 | 2025-03-22 | Aurora Gaming      | L   | 0.279      | -            | -                | -                | -         |    -3.25 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            7 |     2712 | 2025-03-20 | Imperial Esports   | W   | 0.263      | -            | -                | -                | -         |     0.30 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            6 |     2848 | 2025-03-13 | MOUZ               | L   | 0.219      | -            | -                | -                | -         |    -0.78 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            5 |     2881 | 2025-03-11 | GamerLegion        | W   | 0.206      | -            | -                | -                | -         |     3.49 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            4 |     2916 | 2025-03-10 | Natus Vincere      | L   | 0.199      | -            | -                | -                | -         |    -1.42 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            3 |     2986 | 2025-03-09 | SAW                | W   | 0.191      | -            | -                | -                | -         |     1.57 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            2 |     3060 | 2025-03-08 | The MongolZ        | L   | 0.184      | -            | -                | -                | -         |    -0.97 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            1 |     3111 | 2025-03-07 | PaiN Gaming        | W   | 0.179      | -            | -                | -                | -         |     2.66 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($189,076.60)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.45) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $38,000.00     | $38,000.00      |
| 2025-06-22 |      0.892 | $20,000.00     | $17,850.00      |
| 2025-05-25 |      0.706 | $47,000.00     | $33,174.17      |
| 2025-04-13 |      0.425 | $187,500.00    | $79,609.38      |
| 2025-03-30 |      0.331 | $20,000.00     | $6,627.78       |
| 2025-03-16 |      0.238 | $58,000.00     | $13,815.28      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
