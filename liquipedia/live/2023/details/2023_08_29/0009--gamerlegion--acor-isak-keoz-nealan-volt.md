### Roster Details<br />
Team Name: GamerLegion<br />
Roster: acoR, isak, Keoz, neaLaN, volt<br />
Global Rank: [9](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [9]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1528.3<br />
<br />
Final Rank Value (1528.3) = Starting Rank Value (1579.0) + Head To Head Adjustments (-50.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.797[<sup>1</sup>](#table2)
- Bounty Collected: 0.566[<sup>2</sup>](#table1)
- Opponent Network: 0.339[<sup>2</sup>](#table1)
- LAN Wins: 0.737[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.332[<sup>2</sup>](#table1)

The average of these factors is 0.610<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1579.0
- 400 + ( ( 0.610 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1579.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      220 | 2023-08-18 | Heroic               | L   | 1.000      | -            | -                | -                | -         |    -4.96 | acoR, isak, Keoz, neaLaN, volt |
|           37 |      257 | 2023-08-16 | Apeks                | W   | 1.000      | 1.000        | 0.349 (0.349)    | 0.776 (0.776)    | 1 (1.000) |     7.32 | acoR, isak, Keoz, neaLaN, volt |
|           36 |      637 | 2023-08-01 | Cloud9               | L   | 1.000      | -            | -                | -                | -         |   -12.98 | acoR, isak, Keoz, neaLaN, volt |
|           35 |      652 | 2023-07-31 | fnatic               | W   | 1.000      | 1.000        | 0.175 (0.175)    | 0.347 (0.347)    | 1 (1.000) |     7.40 | acoR, isak, Keoz, neaLaN, volt |
|           34 |      675 | 2023-07-30 | TheMongolz           | W   | 1.000      | 1.000        | 0.066 (0.066)    | 0.439 (0.439)    | 1 (1.000) |     1.66 | acoR, isak, Keoz, neaLaN, volt |
|           33 |      714 | 2023-07-29 | Monte                | L   | 0.992      | -            | -                | -                | -         |   -22.03 | acoR, isak, Keoz, neaLaN, volt |
|           32 |     1918 | 2023-05-21 | Vitality             | L   | 0.533      | -            | -                | -                | -         |    -1.35 | acoR, iM, isak, Keoz, siuhy    |
|           31 |     1928 | 2023-05-20 | Heroic               | W   | 0.526      | 1.000        | 1.000 (0.526)    | 0.632 (0.332)    | 1 (0.526) |    14.11 | acoR, iM, isak, Keoz, siuhy    |
|           30 |     1953 | 2023-05-19 | Monte                | W   | 0.519      | 1.000        | 0.318 (0.165)    | 1.000 (0.519)    | 1 (0.519) |     6.29 | acoR, iM, isak, Keoz, siuhy    |
|           29 |     2011 | 2023-05-15 | Apeks                | W   | 0.494      | 1.000        | 0.349 (0.172)    | 0.776 (0.384)    | 1 (0.494) |     4.49 | acoR, iM, isak, Keoz, siuhy    |
|           28 |     2027 | 2023-05-14 | fnatic               | W   | 0.485      | 1.000        | 0.175 (0.085)    | 0.347 (0.168)    | 1 (0.485) |     2.94 | acoR, iM, isak, Keoz, siuhy    |
|           27 |     2033 | 2023-05-13 | 9INE                 | W   | 0.481      | 1.000        | 0.265 (0.127)    | 0.734 (0.353)    | 1 (0.481) |     2.02 | acoR, iM, isak, Keoz, siuhy    |
|           26 |     2048 | 2023-05-13 | Natus Vincere        | L   | 0.478      | -            | -                | -                | -         |   -13.69 | acoR, iM, isak, Keoz, siuhy    |
|           25 |     2061 | 2023-05-11 | FORZE                | W   | 0.465      | 0.143        | 0.364 (0.024)    | -                | 1 (0.465) |     2.52 | acoR, iM, isak, Keoz, siuhy    |
|           24 |     2075 | 2023-05-10 | OG                   | W   | 0.459      | -            | -                | -                | 1 (0.459) |     1.43 | acoR, iM, isak, Keoz, siuhy    |
|           23 |     2088 | 2023-05-09 | MOUZ                 | W   | 0.453      | 0.143        | 0.292 (0.019)    | 0.533 (0.034)    | -         |     4.68 | acoR, iM, isak, Keoz, siuhy    |
|           22 |     2102 | 2023-05-08 | TheMongolz           | L   | 0.447      | -            | -                | -                | -         |   -13.41 | acoR, iM, isak, Keoz, siuhy    |
|           21 |     2115 | 2023-05-08 | Complexity           | L   | 0.445      | -            | -                | -                | -         |   -12.88 | acoR, iM, isak, Keoz, siuhy    |
|           20 |     2283 | 2023-04-29 | ENCE                 | L   | 0.385      | -            | -                | -                | -         |    -1.30 | acoR, iM, isak, Keoz, siuhy    |
|           19 |     2340 | 2023-04-27 | Astralis             | L   | 0.371      | -            | -                | -                | -         |    -3.35 | acoR, iM, isak, Keoz, siuhy    |
|           18 |     2735 | 2023-04-09 | Bad News Eagles      | L   | 0.252      | -            | -                | -                | -         |    -7.15 | acoR, iM, isak, Keoz, siuhy    |
|           17 |     2754 | 2023-04-08 | Falcons              | W   | 0.246      | -            | -                | -                | -         |     0.08 | acoR, iM, isak, Keoz, siuhy    |
|           16 |     2789 | 2023-04-07 | 1WIN                 | W   | 0.238      | -            | -                | -                | -         |     0.99 | acoR, iM, isak, Keoz, siuhy    |
|           15 |     2806 | 2023-04-06 | OG                   | W   | 0.234      | -            | -                | -                | -         |     0.49 | acoR, iM, isak, Keoz, siuhy    |
|           14 |     2817 | 2023-04-06 | Apeks                | L   | 0.232      | -            | -                | -                | -         |    -5.72 | acoR, iM, isak, Keoz, siuhy    |
|           13 |     2972 | 2023-03-28 | EPIC DUDES           | L   | 0.174      | -            | -                | -                | -         |    -5.45 | acoR, iM, isak, Keoz, siuhy    |
|           12 |     2987 | 2023-03-28 | Falcons              | W   | 0.173      | -            | -                | -                | -         |     0.05 | acoR, iM, isak, Keoz, siuhy    |
|           11 |     3358 | 2023-03-16 | Astralis Talent      | L   | 0.095      | -            | -                | -                | -         |    -2.85 | acoR, iM, isak, Keoz, siuhy    |
|           10 |     3375 | 2023-03-16 | Let us cook          | W   | 0.093      | -            | -                | -                | -         |     0.02 | acoR, iM, isak, Keoz, siuhy    |
|            9 |     3412 | 2023-03-15 | SAW                  | W   | 0.086      | 0.435        | -                | 0.968 (0.036)    | -         |     0.31 | acoR, iM, isak, Keoz, siuhy    |
|            8 |     3463 | 2023-03-13 | ECSTATIC             | W   | 0.072      | -            | -                | -                | -         |     0.09 | acoR, iM, isak, Keoz, siuhy    |
|            7 |     3507 | 2023-03-11 | ex-Copenhagen Flames | W   | 0.061      | -            | -                | -                | -         |     0.03 | acoR, iM, isak, Keoz, siuhy    |
|            6 |     3515 | 2023-03-11 | Movistar Riders      | W   | 0.060      | -            | -                | -                | -         |     0.06 | acoR, iM, isak, Keoz, siuhy    |
|            5 |     3585 | 2023-03-09 | ex-Partizan          | W   | 0.047      | -            | -                | -                | -         |     0.01 | acoR, iM, isak, Keoz, siuhy    |
|            4 |     3680 | 2023-03-05 | 9INE                 | L   | 0.021      | -            | -                | -                | -         |    -0.60 | acoR, iM, isak, Keoz, siuhy    |
|            3 |     3690 | 2023-03-05 | ALTERNATE aTTaX      | W   | 0.020      | -            | -                | -                | -         |     0.02 | acoR, iM, isak, Keoz, siuhy    |
|            2 |     3716 | 2023-03-04 | Endpoint             | W   | 0.014      | -            | -                | -                | -         |     0.01 | acoR, iM, isak, Keoz, siuhy    |
|            1 |     3722 | 2023-03-04 | FTW                  | W   | 0.013      | -            | -                | -                | -         |     0.01 | acoR, iM, isak, Keoz, siuhy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($151,364.69)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.56) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-20 |      1.000 | $35,000.00     | $35,000.00      |
| 2023-08-06 |      1.000 | $24,000.00     | $24,000.00      |
| 2023-05-21 |      0.533 | $170,000.00    | $90,655.32      |
| 2023-03-16 |      0.095 | $10,000.00     | $945.25         |
| 2023-03-11 |      0.061 | $12,500.00     | $764.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
