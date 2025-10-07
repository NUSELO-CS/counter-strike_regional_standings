### Roster Details<br />
Team Name: Strife<br />
Roster: aris, Infinite, J0LZ, Snakes, stamina<br />
Global Rank: [177](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [51]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  679.5<br />
<br />
Final Rank Value (679.5) = Starting Rank Value (673.1) + Head To Head Adjustments (6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.043[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.1
- 400 + ( ( 0.141 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 673.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2997 | 2023-03-27 | Vendetta             | L   | 0.170      | -            | -                | -                | -         |    -3.04 | aris, Infinite, J0LZ, Snakes, stamina  |
|           20 |     3002 | 2023-03-27 | Evil Geniuses        | L   | 0.168      | -            | -                | -                | -         |    -1.33 | aris, Infinite, J0LZ, Snakes, stamina  |
|           19 |     3082 | 2023-03-24 | Evil Geniuses        | L   | 0.149      | -            | -                | -                | -         |    -1.17 | aris, Infinite, J0LZ, Snakes, stamina  |
|           18 |     3110 | 2023-03-23 | Nouns                | W   | 0.142      | 0.435        | 0.091 (0.006)    | 0.601 (0.037)    | 0 (0.000) |     3.53 | aris, Infinite, J0LZ, Snakes, stamina  |
|           17 |     3154 | 2023-03-22 | Badass               | W   | 0.137      | 0.435        | 0.013 (0.001)    | 0.517 (0.031)    | 0 (0.000) |     2.42 | aris, Infinite, J0LZ, Snakes, stamina  |
|           16 |     3161 | 2023-03-22 | Wildcard             | W   | 0.135      | 0.384        | 0.128 (0.007)    | 0.804 (0.042)    | 0 (0.000) |     3.23 | aris, Infinite, J0LZ, Snakes, stamina  |
|           15 |     3191 | 2023-03-21 | ATK                  | L   | 0.130      | -            | -                | -                | -         |    -1.64 | aris, Infinite, J0LZ, Snakes, stamina  |
|           14 |     3196 | 2023-03-21 | Vireo.pro            | W   | 0.129      | 0.384        | 0.000 (0.000)    | -                | 0 (0.000) |     0.71 | aris, Infinite, J0LZ, Snakes, stamina  |
|           13 |     3234 | 2023-03-20 | Vendetta             | W   | 0.122      | 0.143        | 0.001 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     1.70 | aris, Infinite, J0LZ, Snakes, stamina  |
|           12 |     3259 | 2023-03-19 | Tsunami              | W   | 0.115      | 0.143        | 0.001 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.42 | aris, Infinite, J0LZ, Snakes, stamina  |
|           11 |     3385 | 2023-03-15 | Nouns                | L   | 0.089      | -            | -                | -                | -         |    -0.58 | aris, Infinite, J0LZ, Snakes, stamina  |
|           10 |     3420 | 2023-03-14 | Evil Geniuses        | L   | 0.082      | -            | -                | -                | -         |    -0.63 | aris, Infinite, J0LZ, Snakes, stamina  |
|            9 |     3469 | 2023-03-12 | Nouns                | L   | 0.069      | -            | -                | -                | -         |    -0.46 | aris, Infinite, J0LZ, Snakes, stamina  |
|            8 |     3501 | 2023-03-11 | Badass               | W   | 0.063      | 0.143        | 0.013 (0.000)    | 0.517 (0.005)    | 0 (0.000) |     1.14 | aris, J0LZ, Pluto, Snakes, stamina     |
|            7 |     3526 | 2023-03-10 | Wildcard             | W   | 0.056      | 0.143        | 0.128 (0.001)    | 0.804 (0.006)    | 0 (0.000) |     1.37 | aris, J0LZ, Pluto, Snakes, stamina     |
|            6 |     3528 | 2023-03-10 | yur                  | L   | 0.056      | -            | -                | -                | -         |    -1.03 | aris, J0LZ, Pluto, Snakes, stamina     |
|            5 |     3529 | 2023-03-10 | Limitless            | W   | 0.055      | 0.143        | -                | 0.015 (0.000)    | 0 (0.000) |     0.43 | aris, J0LZ, Pluto, Snakes, stamina     |
|            4 |     3594 | 2023-03-08 | Davenport University | W   | 0.043      | 0.435        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.49 | aris, Infinite, J0LZ, Snakes, stamina  |
|            3 |     3653 | 2023-03-06 | Vendetta             | W   | 0.030      | 0.435        | 0.001 (0.000)    | 0.027 (0.000)    | -         |     0.41 | aris, Infinite, J0LZ, Snakes, stamina  |
|            2 |     3702 | 2023-03-04 | Vendetta             | L   | 0.017      | -            | -                | -                | -         |    -0.30 | Calix, Infinite, J0LZ, Snakes, stamina |
|            1 |     3705 | 2023-03-04 | TeamOne              | L   | 0.015      | -            | -                | -                | -         |    -0.26 | Calix, Infinite, J0LZ, Snakes, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,039.52)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-26 |      0.162 | $4,000.00      | $649.36         |
| 2023-03-25 |      0.156 | $2,500.00      | $390.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
