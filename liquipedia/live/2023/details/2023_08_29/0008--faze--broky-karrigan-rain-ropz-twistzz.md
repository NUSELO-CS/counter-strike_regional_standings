### Roster Details<br />
Team Name: FaZe<br />
Roster: broky, karrigan, rain, ropz, Twistzz<br />
Global Rank: [8](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [8]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1592.5<br />
<br />
Final Rank Value (1592.5) = Starting Rank Value (1622.1) + Head To Head Adjustments (-29.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.794[<sup>1</sup>](#table2)
- Bounty Collected: 0.601[<sup>2</sup>](#table1)
- Opponent Network: 0.295[<sup>2</sup>](#table1)
- LAN Wins: 0.837[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.509[<sup>2</sup>](#table1)

The average of these factors is 0.632<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1622.1
- 400 + ( ( 0.632 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1622.1


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
|           45 |      234 | 2023-08-17 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |   -11.27 | broky, karrigan, rain, ropz, Twistzz |
|           44 |      642 | 2023-08-01 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -22.64 | broky, karrigan, rain, ropz, Twistzz |
|           43 |      661 | 2023-07-31 | G2                | L   | 1.000      | -            | -                | -                | -         |    -7.21 | broky, karrigan, rain, ropz, Twistzz |
|           42 |      684 | 2023-07-30 | Ninjas in Pyjamas | W   | 1.000      | 1.000        | 0.194 (0.194)    | 0.670 (0.670)    | 1 (1.000) |     5.35 | broky, karrigan, rain, ropz, Twistzz |
|           41 |      827 | 2023-07-20 | Liquid            | W   | 0.934      | 0.571        | 0.218 (0.116)    | 0.329 (0.176)    | 1 (0.934) |     6.06 | broky, karrigan, rain, ropz, Twistzz |
|           40 |      845 | 2023-07-19 | G2                | W   | 0.926      | 0.571        | 1.000 (0.529)    | 0.621 (0.329)    | 1 (0.926) |    23.85 | broky, karrigan, rain, ropz, Twistzz |
|           39 |      877 | 2023-07-17 | Liquid            | L   | 0.913      | -            | -                | -                | -         |   -22.72 | broky, karrigan, rain, ropz, Twistzz |
|           38 |      936 | 2023-07-14 | OG                | W   | 0.894      | 0.571        | -                | 0.386 (0.197)    | 1 (0.894) |     0.92 | broky, karrigan, rain, ropz, Twistzz |
|           37 |     1047 | 2023-07-08 | LEGENDS           | W   | 0.853      | -            | -                | -                | -         |     0.03 | broky, karrigan, rain, ropz, Twistzz |
|           36 |     1280 | 2023-06-09 | Vitality          | L   | 0.661      | -            | -                | -                | -         |    -2.57 | broky, karrigan, rain, ropz, Twistzz |
|           35 |     1311 | 2023-06-08 | Heroic            | L   | 0.656      | -            | -                | -                | -         |    -4.77 | broky, karrigan, rain, ropz, Twistzz |
|           34 |     1356 | 2023-06-07 | Astralis          | W   | 0.648      | 0.729        | 0.582 (0.275)    | 0.660 (0.312)    | 1 (0.648) |    12.14 | broky, karrigan, rain, ropz, Twistzz |
|           33 |     1458 | 2023-06-03 | ENCE              | L   | 0.622      | -            | -                | -                | -         |    -3.30 | broky, karrigan, rain, ropz, Twistzz |
|           32 |     1484 | 2023-06-02 | G2                | W   | 0.616      | 0.624        | 1.000 (0.384)    | 0.621 (0.239)    | 1 (0.616) |    16.69 | broky, karrigan, rain, ropz, Twistzz |
|           31 |     1557 | 2023-05-31 | Cloud9            | W   | 0.602      | 0.624        | 0.743 (0.279)    | 0.484 (0.182)    | 1 (0.602) |    10.04 | broky, karrigan, rain, ropz, Twistzz |
|           30 |     1578 | 2023-05-31 | Liquid            | W   | 0.600      | 0.624        | 0.218 (0.082)    | -                | 1 (0.600) |     3.75 | broky, karrigan, rain, ropz, Twistzz |
|           29 |     1603 | 2023-05-30 | ENCE              | L   | 0.594      | -            | -                | -                | -         |    -2.88 | broky, karrigan, rain, ropz, Twistzz |
|           28 |     1648 | 2023-05-29 | Evil Geniuses     | W   | 0.587      | -            | -                | -                | 1 (0.587) |     0.12 | broky, karrigan, rain, ropz, Twistzz |
|           27 |     1957 | 2023-05-18 | Heroic            | L   | 0.513      | -            | -                | -                | -         |    -3.03 | broky, karrigan, rain, ropz, Twistzz |
|           26 |     2003 | 2023-05-16 | Natus Vincere     | W   | 0.499      | -            | -                | -                | 1 (0.499) |     1.15 | broky, karrigan, rain, ropz, Twistzz |
|           25 |     2015 | 2023-05-15 | Bad News Eagles   | W   | 0.492      | 1.000        | 0.135 (0.066)    | 0.751 (0.369)    | -         |     1.36 | broky, karrigan, rain, ropz, Twistzz |
|           24 |     2019 | 2023-05-14 | 9INE              | W   | 0.486      | 1.000        | 0.265 (0.129)    | 0.734 (0.357)    | -         |     1.46 | broky, karrigan, rain, ropz, Twistzz |
|           23 |     2031 | 2023-05-13 | Into the Breach   | L   | 0.481      | -            | -                | -                | -         |   -13.59 | broky, karrigan, rain, ropz, Twistzz |
|           22 |     2042 | 2023-05-13 | Heroic            | L   | 0.479      | -            | -                | -                | -         |    -3.06 | broky, karrigan, rain, ropz, Twistzz |
|           21 |     2073 | 2023-05-10 | FORZE             | W   | 0.459      | -            | -                | -                | -         |     1.80 | broky, karrigan, rain, ropz, Twistzz |
|           20 |     2089 | 2023-05-09 | ENCE              | L   | 0.453      | -            | -                | -                | -         |    -2.02 | broky, karrigan, rain, ropz, Twistzz |
|           19 |     2108 | 2023-05-08 | paiN              | W   | 0.446      | -            | -                | -                | -         |     0.45 | broky, karrigan, rain, ropz, Twistzz |
|           18 |     2118 | 2023-05-08 | Monte             | W   | 0.445      | -            | -                | -                | -         |     4.28 | broky, karrigan, rain, ropz, Twistzz |
|           17 |     2485 | 2023-04-19 | Vitality          | L   | 0.320      | -            | -                | -                | -         |    -1.17 | broky, karrigan, rain, ropz, Twistzz |
|           16 |     2501 | 2023-04-18 | FURIA             | L   | 0.314      | -            | -                | -                | -         |    -9.60 | broky, karrigan, rain, ropz, Twistzz |
|           15 |     2519 | 2023-04-17 | 9z                | W   | 0.307      | 0.624        | -                | 0.650 (0.124)    | -         |     0.49 | broky, karrigan, rain, ropz, Twistzz |
|           14 |     2573 | 2023-04-15 | Cloud9            | W   | 0.293      | -            | -                | -                | -         |     4.73 | broky, karrigan, rain, ropz, Twistzz |
|           13 |     2599 | 2023-04-14 | Aurora            | W   | 0.287      | -            | -                | -                | -         |     0.65 | broky, karrigan, rain, ropz, Twistzz |
|           12 |     2732 | 2023-04-09 | MOUZ              | L   | 0.253      | -            | -                | -                | -         |    -5.82 | broky, karrigan, rain, ropz, Twistzz |
|           11 |     2749 | 2023-04-08 | Bad News Eagles   | L   | 0.247      | -            | -                | -                | -         |    -7.21 | broky, karrigan, rain, ropz, Twistzz |
|           10 |     2776 | 2023-04-07 | Natus Vincere     | L   | 0.240      | -            | -                | -                | -         |    -7.19 | broky, karrigan, rain, ropz, Twistzz |
|            9 |     2811 | 2023-04-06 | Apeks             | W   | 0.233      | -            | -                | -                | -         |     1.28 | broky, karrigan, rain, ropz, Twistzz |
|            8 |     2816 | 2023-04-06 | OG                | W   | 0.232      | -            | -                | -                | -         |     0.36 | broky, karrigan, rain, ropz, Twistzz |
|            7 |     3033 | 2023-03-26 | Cloud9            | W   | 0.160      | 0.934        | 0.743 (0.111)    | -                | -         |     2.54 | broky, karrigan, rain, ropz, Twistzz |
|            6 |     3055 | 2023-03-25 | Natus Vincere     | W   | 0.155      | -            | -                | -                | -         |     0.24 | broky, karrigan, rain, ropz, Twistzz |
|            5 |     3098 | 2023-03-24 | FORZE             | W   | 0.147      | -            | -                | -                | -         |     0.48 | broky, karrigan, rain, ropz, Twistzz |
|            4 |     3169 | 2023-03-22 | FURIA             | W   | 0.134      | -            | -                | -                | -         |     0.10 | broky, karrigan, rain, ropz, Twistzz |
|            3 |     3482 | 2023-03-12 | Vitality          | L   | 0.067      | -            | -                | -                | -         |    -0.25 | broky, karrigan, rain, ropz, Twistzz |
|            2 |     3577 | 2023-03-09 | Ninjas in Pyjamas | W   | 0.047      | -            | -                | -                | -         |     0.36 | broky, karrigan, rain, ropz, Twistzz |
|            1 |     3619 | 2023-03-08 | Rooster           | W   | 0.040      | -            | -                | -                | -         |     0.01 | broky, karrigan, rain, ropz, Twistzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($149,630.32)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.55) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-20 |      1.000 | $15,000.00     | $15,000.00      |
| 2023-08-06 |      1.000 | $16,000.00     | $16,000.00      |
| 2023-07-23 |      0.954 | $27,500.00     | $26,222.35      |
| 2023-07-08 |      0.853 | $10,000.00     | $8,534.69       |
| 2023-06-11 |      0.675 | $20,000.00     | $13,493.74      |
| 2023-06-04 |      0.627 | $20,000.00     | $12,546.94      |
| 2023-05-21 |      0.533 | $45,000.00     | $23,997.00      |
| 2023-04-23 |      0.347 | $5,000.00      | $1,736.09       |
| 2023-03-26 |      0.160 | $200,000.00    | $32,099.51      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
