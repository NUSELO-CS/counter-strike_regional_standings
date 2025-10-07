### Roster Details<br />
Team Name: BIG<br />
Roster: faveN, hyped, k1to, Krimbo, tabseN<br />
Global Rank: [44](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [39]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1014.6<br />
<br />
Final Rank Value (1014.6) = Starting Rank Value (970.5) + Head To Head Adjustments (44.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.477[<sup>1</sup>](#table2)
- Bounty Collected: 0.414[<sup>2</sup>](#table1)
- Opponent Network: 0.121[<sup>2</sup>](#table1)
- LAN Wins: 0.168[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.312[<sup>2</sup>](#table1)

The average of these factors is 0.295<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 970.5
- 400 + ( ( 0.295 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 970.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |     1655 | 2023-05-29 | 9INE                 | L   | 0.587      | -            | -                | -                | -         |    -5.21 | faveN, hyped, k1to, Krimbo, tabseN |
|           37 |     1667 | 2023-05-29 | Into the Breach      | W   | 0.585      | 0.589        | 0.169 (0.058)    | 0.530 (0.183)    | 0 (0.000) |    14.44 | faveN, hyped, k1to, Krimbo, tabseN |
|           36 |     1688 | 2023-05-28 | Aurora               | L   | 0.579      | -            | -                | -                | -         |    -6.18 | faveN, hyped, k1to, Krimbo, tabseN |
|           35 |     1697 | 2023-05-28 | Endpoint             | W   | 0.578      | 0.589        | 0.046 (0.016)    | 0.790 (0.269)    | 0 (0.000) |     7.87 | faveN, hyped, k1to, Krimbo, tabseN |
|           34 |     1718 | 2023-05-27 | ex-Copenhagen Flames | W   | 0.573      | 0.589        | 0.017 (0.006)    | 0.414 (0.140)    | 0 (0.000) |     5.41 | faveN, hyped, k1to, Krimbo, tabseN |
|           33 |     1746 | 2023-05-26 | ECSTATIC             | L   | 0.568      | -            | -                | -                | -         |    -8.28 | faveN, hyped, k1to, Krimbo, tabseN |
|           32 |     1865 | 2023-05-23 | Corinthians          | W   | 0.547      | 0.589        | -                | 0.552 (0.178)    | -         |     3.02 | faveN, hyped, k1to, Krimbo, tabseN |
|           31 |     1900 | 2023-05-22 | ECSTATIC             | L   | 0.541      | -            | -                | -                | -         |    -8.38 | faveN, hyped, k1to, Krimbo, tabseN |
|           30 |     1908 | 2023-05-22 | GODSENT              | W   | 0.539      | -            | -                | -                | -         |     3.22 | faveN, hyped, k1to, Krimbo, tabseN |
|           29 |     1920 | 2023-05-21 | Ninjas in Pyjamas    | W   | 0.533      | 0.143        | 0.194 (0.015)    | 0.670 (0.051)    | -         |    15.03 | faveN, hyped, k1to, Krimbo, tabseN |
|           28 |     1923 | 2023-05-21 | Hungary              | W   | 0.531      | 0.143        | -                | 0.746 (0.057)    | -         |     6.18 | faveN, hyped, k1to, Krimbo, tabseN |
|           27 |     1930 | 2023-05-20 | Movistar Riders      | W   | 0.526      | 0.143        | 0.089 (0.007)    | -                | -         |     7.65 | faveN, hyped, k1to, Krimbo, tabseN |
|           26 |     1936 | 2023-05-20 | HOTU                 | L   | 0.525      | -            | -                | -                | -         |   -11.86 | faveN, hyped, k1to, Krimbo, tabseN |
|           25 |     2446 | 2023-04-21 | Vitality             | L   | 0.333      | -            | -                | -                | -         |    -0.04 | faveN, hyped, k1to, Krimbo, tabseN |
|           24 |     2480 | 2023-04-19 | Natus Vincere        | L   | 0.321      | -            | -                | -                | -         |    -3.39 | faveN, hyped, k1to, Krimbo, tabseN |
|           23 |     2513 | 2023-04-17 | Heroic               | W   | 0.309      | 0.624        | 1.000 (0.193)    | 0.632 (0.122)    | 1 (0.309) |     9.66 | faveN, hyped, k1to, Krimbo, tabseN |
|           22 |     2526 | 2023-04-17 | MOUZ                 | W   | 0.306      | 0.624        | 0.292 (0.056)    | 0.533 (0.102)    | 1 (0.306) |     8.96 | faveN, hyped, k1to, Krimbo, tabseN |
|           21 |     2577 | 2023-04-15 | Cloud9               | L   | 0.291      | -            | -                | -                | -         |    -0.25 | faveN, hyped, k1to, Krimbo, tabseN |
|           20 |     2594 | 2023-04-14 | Falcons              | W   | 0.287      | -            | -                | -                | 1 (0.287) |     2.06 | faveN, hyped, k1to, Krimbo, tabseN |
|           19 |     2606 | 2023-04-14 | Ninjas in Pyjamas    | L   | 0.285      | -            | -                | -                | -         |    -0.72 | faveN, hyped, k1to, Krimbo, tabseN |
|           18 |     2627 | 2023-04-13 | Vitality             | L   | 0.280      | -            | -                | -                | -         |    -0.03 | faveN, hyped, k1to, Krimbo, tabseN |
|           17 |     2674 | 2023-04-12 | 500                  | W   | 0.271      | 0.143        | -                | 1.000 (0.039)    | 1 (0.271) |     4.04 | faveN, hyped, k1to, Krimbo, tabseN |
|           16 |     2699 | 2023-04-11 | 9INE                 | L   | 0.267      | -            | -                | -                | -         |    -2.11 | faveN, hyped, k1to, Krimbo, tabseN |
|           15 |     2714 | 2023-04-11 | ex-iNation           | W   | 0.265      | -            | -                | -                | 1 (0.265) |     1.36 | faveN, hyped, k1to, Krimbo, tabseN |
|           14 |     2852 | 2023-04-02 | Cloud9               | L   | 0.208      | -            | -                | -                | -         |    -0.16 | faveN, hyped, k1to, Krimbo, tabseN |
|           13 |     2873 | 2023-04-01 | 9INE                 | W   | 0.200      | 0.461        | 0.265 (0.024)    | 0.734 (0.068)    | -         |     4.72 | faveN, hyped, k1to, Krimbo, tabseN |
|           12 |     2919 | 2023-03-30 | 5yclone              | W   | 0.187      | 0.461        | 0.037 (0.003)    | -                | -         |     2.08 | faveN, hyped, k1to, Krimbo, tabseN |
|           11 |     2991 | 2023-03-28 | GODSENT              | L   | 0.172      | -            | -                | -                | -         |    -4.30 | faveN, hyped, k1to, Krimbo, tabseN |
|           10 |     3136 | 2023-03-23 | Looking4Org          | L   | 0.140      | -            | -                | -                | -         |    -2.35 | faveN, hyped, k1to, Krimbo, tabseN |
|            9 |     3183 | 2023-03-22 | Apeks                | L   | 0.132      | -            | -                | -                | -         |    -0.46 | faveN, hyped, k1to, Krimbo, tabseN |
|            8 |     3216 | 2023-03-21 | HAVU                 | W   | 0.126      | -            | -                | -                | -         |     1.89 | faveN, hyped, k1to, Krimbo, tabseN |
|            7 |     3523 | 2023-03-11 | ex-Copenhagen Flames | L   | 0.059      | -            | -                | -                | -         |    -1.33 | faveN, hyped, k1to, Krimbo, tabseN |
|            6 |     3556 | 2023-03-10 | Monte                | W   | 0.053      | 0.384        | 0.318 (0.006)    | -                | -         |     1.56 | faveN, hyped, k1to, Krimbo, tabseN |
|            5 |     3677 | 2023-03-05 | Movistar Riders      | L   | 0.021      | -            | -                | -                | -         |    -0.35 | faveN, hyped, k1to, Krimbo, tabseN |
|            4 |     3693 | 2023-03-05 | Complexity           | W   | 0.019      | -            | -                | -                | 1 (0.019) |     0.43 | faveN, hyped, k1to, Krimbo, tabseN |
|            3 |     3713 | 2023-03-04 | FURIA                | L   | 0.014      | -            | -                | -                | -         |    -0.22 | faveN, hyped, k1to, Krimbo, tabseN |
|            2 |     3736 | 2023-03-03 | SAW                  | W   | 0.008      | -            | -                | -                | 1 (0.008) |     0.20 | faveN, hyped, k1to, Krimbo, tabseN |
|            1 |     3762 | 2023-03-02 | Heroic               | L   | 0.001      | -            | -                | -                | -         |     0.00 | faveN, hyped, k1to, Krimbo, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,849.26)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-05-31 |      0.599 | $5,000.00      | $2,997.39       |
| 2023-05-30 |      0.594 | $15,000.00     | $8,910.27       |
| 2023-04-23 |      0.347 | $10,000.00     | $3,472.18       |
| 2023-04-04 |      0.219 | $5,000.00      | $1,095.62       |
| 2023-04-02 |      0.208 | $12,500.00     | $2,595.05       |
| 2023-03-26 |      0.160 | $15,000.00     | $2,407.46       |
| 2023-03-23 |      0.140 | $2,000.00      | $279.59         |
| 2023-03-11 |      0.061 | $1,500.00      | $91.69          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
