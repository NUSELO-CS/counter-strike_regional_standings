### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, drop, exit, insani, saffee<br />
Global Rank: [40](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [4]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  1027.8<br />
<br />
Final Rank Value (1027.8) = Starting Rank Value (967.9) + Head To Head Adjustments (60.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.548[<sup>1</sup>](#table2)
- Bounty Collected: 0.380[<sup>2</sup>](#table1)
- Opponent Network: 0.190[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.596[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 967.9
- 400 + ( ( 0.294 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 967.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      253 | 2023-08-16 | Vitality         | L   | 1.000      | -            | -                | -                | -         |    -0.22 | brnz4n, drop, exit, insani, saffee  |
|           45 |      515 | 2023-08-08 | Aurora           | L   | 1.000      | -            | -                | -                | -         |   -10.43 | brnz4n, drop, exit, insani, saffee  |
|           44 |      528 | 2023-08-07 | Spirit           | L   | 1.000      | -            | -                | -                | -         |    -3.71 | brnz4n, drop, exit, insani, saffee  |
|           43 |      554 | 2023-08-05 | Bad News Eagles  | W   | 1.000      | 0.589        | 0.135 (0.079)    | 0.751 (0.442)    | 0 (0.000) |    18.36 | brnz4n, drop, exit, insani, saffee  |
|           42 |      592 | 2023-08-03 | Anonymo          | W   | 1.000      | 0.589        | 0.035 (0.021)    | 0.712 (0.419)    | 0 (0.000) |    10.61 | brnz4n, drop, exit, insani, saffee  |
|           41 |      695 | 2023-07-30 | Evil Geniuses    | L   | 0.999      | -            | -                | -                | -         |   -20.25 | brnz4n, drop, exit, insani, saffee  |
|           40 |      701 | 2023-07-29 | IKLA             | W   | 0.994      | 0.435        | -                | 0.238 (0.103)    | 0 (0.000) |     5.11 | brnz4n, drop, exit, insani, saffee  |
|           39 |     1741 | 2023-05-26 | Evil Geniuses    | W   | 0.570      | 0.435        | 0.077 (0.019)    | 0.580 (0.144)    | 0 (0.000) |     5.97 | brnz4n, exit, HEN1, insani, Tuurtle |
|           38 |     1776 | 2023-05-25 | M80              | W   | 0.562      | 0.435        | 0.058 (0.014)    | 0.753 (0.184)    | 0 (0.000) |     6.16 | brnz4n, exit, HEN1, insani, Tuurtle |
|           37 |     1855 | 2023-05-23 | Evil Geniuses    | L   | 0.549      | -            | -                | -                | -         |   -11.71 | brnz4n, exit, HEN1, insani, Tuurtle |
|           36 |     1896 | 2023-05-22 | paiN             | W   | 0.543      | 0.435        | 0.085 (0.020)    | 0.404 (0.095)    | 0 (0.000) |     8.34 | brnz4n, exit, HEN1, insani, Tuurtle |
|           35 |     1917 | 2023-05-21 | FLUFFY AIMERS    | W   | 0.536      | -            | -                | -                | 0 (0.000) |     2.66 | brnz4n, exit, HEN1, insani, Tuurtle |
|           34 |     1963 | 2023-05-17 | M80              | W   | 0.510      | -            | -                | -                | 0 (0.000) |     5.36 | brnz4n, exit, HEN1, insani, Tuurtle |
|           33 |     1966 | 2023-05-17 | Nouns            | W   | 0.509      | -            | -                | -                | -         |     6.43 | brnz4n, exit, HEN1, insani, Tuurtle |
|           32 |     1986 | 2023-05-16 | Badass           | W   | 0.502      | -            | -                | -                | -         |     2.71 | brnz4n, exit, HEN1, insani, Tuurtle |
|           31 |     1992 | 2023-05-16 | Xmplfy           | W   | 0.502      | -            | -                | -                | -         |     0.53 | brnz4n, exit, HEN1, insani, Tuurtle |
|           30 |     2008 | 2023-05-15 | Wildcard         | W   | 0.496      | 0.435        | 0.128 (0.028)    | 0.804 (0.173)    | -         |     5.03 | brnz4n, exit, HEN1, insani, Tuurtle |
|           29 |     2029 | 2023-05-13 | Unjustified      | W   | 0.483      | -            | -                | -                | -         |     1.85 | brnz4n, exit, HEN1, insani, Tuurtle |
|           28 |     2055 | 2023-05-11 | M80              | W   | 0.470      | 0.435        | 0.058 (0.012)    | 0.753 (0.154)    | -         |     4.88 | brnz4n, exit, HEN1, insani, Tuurtle |
|           27 |     2064 | 2023-05-10 | Limitless        | W   | 0.463      | -            | -                | -                | -         |     0.73 | brnz4n, exit, HEN1, insani, Tuurtle |
|           26 |     2066 | 2023-05-10 | Take Flyte       | W   | 0.462      | -            | -                | -                | -         |     1.85 | brnz4n, exit, HEN1, insani, Tuurtle |
|           25 |     2084 | 2023-05-09 | Strife           | W   | 0.455      | -            | -                | -                | -         |     2.99 | brnz4n, exit, HEN1, insani, Tuurtle |
|           24 |     2098 | 2023-05-08 | Party Astronauts | W   | 0.449      | 0.435        | -                | 0.420 (0.082)    | -         |     3.94 | brnz4n, exit, HEN1, insani, Tuurtle |
|           23 |     2123 | 2023-05-07 | Strife           | L   | 0.441      | -            | -                | -                | -         |   -11.09 | brnz4n, exit, HEN1, insani, Tuurtle |
|           22 |     2137 | 2023-05-06 | Wildcard         | W   | 0.436      | 0.303        | 0.128 (0.017)    | 0.804 (0.106)    | -         |     4.67 | brnz4n, exit, HEN1, insani, Tuurtle |
|           21 |     2140 | 2023-05-06 | WITHOUT WARNING  | W   | 0.435      | -            | -                | -                | -         |     2.36 | brnz4n, exit, HEN1, insani, Tuurtle |
|           20 |     2164 | 2023-05-04 | 9z               | L   | 0.423      | -            | -                | -                | -         |    -4.88 | brnz4n, exit, HEN1, insani, Tuurtle |
|           19 |     2193 | 2023-05-03 | 9z               | W   | 0.416      | 0.143        | 0.273 (0.016)    | -                | -         |     8.43 | brnz4n, exit, HEN1, insani, Tuurtle |
|           18 |     2194 | 2023-05-03 | W7M              | W   | 0.415      | -            | -                | -                | -         |     2.94 | brnz4n, exit, HEN1, insani, Tuurtle |
|           17 |     2505 | 2023-04-18 | Vitality         | L   | 0.313      | -            | -                | -                | -         |    -0.04 | brnz4n, exit, HEN1, insani, Tuurtle |
|           16 |     2523 | 2023-04-17 | Cloud9           | L   | 0.307      | -            | -                | -                | -         |    -0.27 | brnz4n, exit, HEN1, insani, Tuurtle |
|           15 |     2550 | 2023-04-15 | W7M              | W   | 0.296      | -            | -                | -                | -         |     1.99 | brnz4n, exit, HEN1, insani, Tuurtle |
|           14 |     2562 | 2023-04-15 | ODDIK            | W   | 0.295      | -            | -                | -                | -         |     2.02 | brnz4n, exit, HEN1, insani, Tuurtle |
|           13 |     2587 | 2023-04-14 | Case             | W   | 0.289      | -            | -                | -                | -         |     2.52 | brnz4n, exit, HEN1, insani, Tuurtle |
|           12 |     2726 | 2023-04-09 | Complexity       | L   | 0.254      | -            | -                | -                | -         |    -2.39 | brnz4n, exit, HEN1, insani, Tuurtle |
|           11 |     2743 | 2023-04-08 | BESTIA           | W   | 0.249      | -            | -                | -                | 1 (0.249) |     4.62 | brnz4n, exit, HEN1, insani, Tuurtle |
|           10 |     2765 | 2023-04-07 | Fake Natty       | W   | 0.242      | -            | -                | -                | 1 (0.242) |     2.76 | brnz4n, exit, HEN1, insani, Tuurtle |
|            9 |     2793 | 2023-04-06 | Flamengo         | L   | 0.236      | -            | -                | -                | -         |    -6.35 | brnz4n, exit, HEN1, insani, Tuurtle |
|            8 |     2938 | 2023-03-29 | paiN             | L   | 0.182      | -            | -                | -                | -         |    -2.88 | brnz4n, exit, HEN1, insani, Tuurtle |
|            7 |     3025 | 2023-03-26 | ATK              | W   | 0.162      | -            | -                | -                | -         |     1.15 | brnz4n, exit, HEN1, insani, Tuurtle |
|            6 |     3046 | 2023-03-25 | Nouns            | W   | 0.156      | -            | -                | -                | -         |     2.03 | brnz4n, exit, HEN1, insani, Tuurtle |
|            5 |     3077 | 2023-03-24 | Vendetta         | W   | 0.149      | -            | -                | -                | -         |     0.62 | brnz4n, exit, HEN1, insani, Tuurtle |
|            4 |     3113 | 2023-03-23 | ATK              | W   | 0.142      | -            | -                | -                | -         |     1.02 | brnz4n, exit, HEN1, insani, Tuurtle |
|            3 |     3155 | 2023-03-22 | Nouns            | W   | 0.136      | -            | -                | -                | -         |     1.83 | brnz4n, exit, HEN1, insani, Tuurtle |
|            2 |     3195 | 2023-03-21 | Wildcard         | W   | 0.129      | 0.435        | 0.128 (0.007)    | -                | -         |     1.55 | brnz4n, exit, HEN1, insani, Tuurtle |
|            1 |     3230 | 2023-03-20 | Zero MarksMen    | W   | 0.123      | -            | -                | -                | -         |     0.15 | brnz4n, exit, HEN1, insani, Tuurtle |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,788.31)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.15) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-20 |      1.000 | $15,000.00     | $15,000.00      |
| 2023-08-10 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-07-31 |      1.000 | $2,000.00      | $2,000.00       |
| 2023-05-26 |      0.570 | $20,000.00     | $11,393.86      |
| 2023-04-23 |      0.347 | $4,000.00      | $1,388.87       |
| 2023-04-02 |      0.208 | $5,000.00      | $1,042.08       |
| 2023-03-26 |      0.162 | $20,000.00     | $3,246.78       |
| 2023-03-25 |      0.156 | $11,000.00     | $1,716.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
