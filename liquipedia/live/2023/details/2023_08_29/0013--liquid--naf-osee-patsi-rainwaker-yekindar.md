### Roster Details<br />
Team Name: Liquid<br />
Roster: NAF, oSee, Patsi, Rainwaker, YEKINDAR<br />
Global Rank: [13](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [13]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1352.7<br />
<br />
Final Rank Value (1352.7) = Starting Rank Value (1362.4) + Head To Head Adjustments (-9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.602[<sup>1</sup>](#table2)
- Bounty Collected: 0.519[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.713[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.329[<sup>2</sup>](#table1)

The average of these factors is 0.498<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1362.4
- 400 + ( ( 0.498 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1362.4


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
|           33 |      250 | 2023-08-16 | ENCE            | L   | 1.000      | -            | -                | -                | -         |    -1.44 | NAF, oSee, Patsi, Rainwaker, YEKINDAR |
|           32 |      721 | 2023-07-28 | 9INE            | L   | 0.987      | -            | -                | -                | -         |   -21.35 | NAF, oSee, Patsi, Rainwaker, YEKINDAR |
|           31 |      732 | 2023-07-27 | BIG             | W   | 0.980      | 0.143        | 0.163 (0.023)    | 0.525 (0.074)    | 1 (0.980) |     8.09 | NAF, oSee, Patsi, Rainwaker, YEKINDAR |
|           30 |      746 | 2023-07-26 | Astralis        | L   | 0.973      | -            | -                | -                | -         |    -6.67 | NAF, oSee, Patsi, Rainwaker, YEKINDAR |
|           29 |      789 | 2023-07-22 | Astralis        | L   | 0.947      | -            | -                | -                | -         |    -6.89 | NAF, oSee, Patsi, Rainwaker, YEKINDAR |
|           28 |      827 | 2023-07-20 | FaZe            | L   | 0.934      | -            | -                | -                | -         |    -6.06 | NAF, oSee, Patsi, Rainwaker, YEKINDAR |
|           27 |      877 | 2023-07-17 | FaZe            | W   | 0.913      | 0.571        | 0.549 (0.287)    | 0.509 (0.265)    | 1 (0.913) |    22.72 | NAF, oSee, Patsi, Rainwaker, YEKINDAR |
|           26 |      928 | 2023-07-15 | G2              | W   | 0.899      | 0.571        | 1.000 (0.513)    | 0.621 (0.319)    | 1 (0.899) |    27.10 | NAF, oSee, Patsi, Rainwaker, YEKINDAR |
|           25 |     1578 | 2023-05-31 | FaZe            | L   | 0.600      | -            | -                | -                | -         |    -3.75 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           24 |     1612 | 2023-05-30 | Grayhound       | W   | 0.594      | 0.624        | 0.066 (0.024)    | 0.189 (0.070)    | 1 (0.594) |     2.17 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           23 |     1638 | 2023-05-29 | Astralis        | L   | 0.588      | -            | -                | -                | -         |    -2.14 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           22 |     1952 | 2023-05-19 | Apeks           | L   | 0.520      | -            | -                | -                | -         |    -7.53 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           21 |     2013 | 2023-05-15 | Into the Breach | W   | 0.493      | 1.000        | 0.169 (0.084)    | 0.530 (0.261)    | 1 (0.493) |     5.52 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           20 |     2021 | 2023-05-14 | Heroic          | L   | 0.486      | -            | -                | -                | -         |    -0.83 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           19 |     2038 | 2023-05-13 | Natus Vincere   | W   | 0.480      | 1.000        | 0.094 (0.045)    | 0.146 (0.070)    | 1 (0.480) |     3.58 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           18 |     2047 | 2023-05-13 | 9INE            | W   | 0.478      | 1.000        | 0.265 (0.127)    | 0.734 (0.351)    | 1 (0.478) |     4.67 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           17 |     2058 | 2023-05-11 | Grayhound       | W   | 0.467      | -            | -                | -                | 1 (0.467) |     1.77 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           16 |     2074 | 2023-05-10 | Complexity      | W   | 0.459      | 0.143        | 0.120 (0.008)    | -                | 1 (0.459) |     3.37 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           15 |     2087 | 2023-05-09 | Fluxo           | W   | 0.454      | -            | -                | -                | 1 (0.454) |     0.59 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           14 |     2100 | 2023-05-08 | FORZE           | L   | 0.447      | -            | -                | -                | -         |    -8.92 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           13 |     2113 | 2023-05-08 | Apeks           | L   | 0.446      | -            | -                | -                | -         |    -6.83 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           12 |     2723 | 2023-04-09 | Nouns           | W   | 0.256      | -            | -                | -                | -         |     0.64 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           11 |     2740 | 2023-04-08 | FURIA           | L   | 0.250      | -            | -                | -                | -         |    -7.05 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|           10 |     2772 | 2023-04-07 | Flamengo        | W   | 0.241      | -            | -                | -                | -         |     0.16 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|            9 |     2802 | 2023-04-06 | Fake Natty      | W   | 0.235      | -            | -                | -                | -         |     0.46 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|            8 |     2867 | 2023-04-01 | paiN            | L   | 0.201      | -            | -                | -                | -         |    -5.66 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|            7 |     2908 | 2023-03-30 | Nouns           | W   | 0.188      | 0.461        | 0.091 (0.008)    | 0.601 (0.052)    | -         |     0.45 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|            6 |     3210 | 2023-03-21 | paiN            | L   | 0.127      | -            | -                | -                | -         |    -3.60 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|            5 |     3263 | 2023-03-19 | Astralis        | W   | 0.114      | 0.934        | 0.582 (0.062)    | 0.660 (0.070)    | -         |     3.22 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|            4 |     3286 | 2023-03-18 | 5yclone         | W   | 0.107      | 0.934        | -                | 0.362 (0.036)    | -         |     0.20 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|            3 |     3335 | 2023-03-17 | Spirit          | L   | 0.100      | -            | -                | -                | -         |    -3.07 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|            2 |     3361 | 2023-03-16 | ATK             | W   | 0.094      | -            | -                | -                | -         |     0.09 | EliGE, NAF, nitr0, oSee, YEKINDAR     |
|            1 |     3402 | 2023-03-15 | 5yclone         | L   | 0.087      | -            | -                | -                | -         |    -2.60 | EliGE, NAF, nitr0, oSee, YEKINDAR     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($59,457.19)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.22) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-20 |      1.000 | $15,000.00     | $15,000.00      |
| 2023-07-28 |      0.988 | $4,500.00      | $4,445.31       |
| 2023-07-23 |      0.954 | $8,500.00      | $8,105.09       |
| 2023-06-04 |      0.627 | $5,000.00      | $3,136.74       |
| 2023-05-21 |      0.533 | $45,000.00     | $23,997.00      |
| 2023-04-02 |      0.208 | $7,500.00      | $1,563.11       |
| 2023-03-26 |      0.160 | $20,000.00     | $3,209.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
