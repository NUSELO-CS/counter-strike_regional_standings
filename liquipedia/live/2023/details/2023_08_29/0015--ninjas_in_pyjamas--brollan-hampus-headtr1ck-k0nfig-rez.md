### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: Brollan, hampus, headtr1ck, k0nfig, REZ<br />
Global Rank: [15](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [15]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1305.4<br />
<br />
Final Rank Value (1305.4) = Starting Rank Value (1417.0) + Head To Head Adjustments (-111.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.584[<sup>1</sup>](#table2)
- Bounty Collected: 0.533[<sup>2</sup>](#table1)
- Opponent Network: 0.179[<sup>2</sup>](#table1)
- LAN Wins: 0.807[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.670[<sup>2</sup>](#table1)

The average of these factors is 0.526<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1417.0
- 400 + ( ( 0.526 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1417.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |      114 | 2023-08-24 | BetBoom         | L   | 1.000      | -            | -                | -                | -         |   -29.80 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           55 |      120 | 2023-08-24 | OG              | W   | 1.000      | 0.143        | -                | 0.386 (0.055)    | -         |     4.64 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           54 |      139 | 2023-08-23 | 9INE            | L   | 1.000      | -            | -                | -                | -         |   -20.93 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           53 |      144 | 2023-08-23 | 1WIN            | W   | 1.000      | 0.143        | 0.298 (0.043)    | 0.772 (0.110)    | -         |    12.23 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           52 |      663 | 2023-07-31 | Astralis        | L   | 1.000      | -            | -                | -                | -         |    -5.84 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           51 |      684 | 2023-07-30 | FaZe            | L   | 1.000      | -            | -                | -                | -         |    -5.35 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           50 |      717 | 2023-07-28 | Imperial        | W   | 0.988      | -            | -                | -                | 1 (0.988) |     5.81 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           49 |      741 | 2023-07-26 | MOUZ            | L   | 0.974      | -            | -                | -                | -         |   -11.85 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           48 |      751 | 2023-07-26 | Into the Breach | W   | 0.972      | 0.143        | 0.169 (0.024)    | 0.530 (0.074)    | 1 (0.972) |     7.91 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           47 |      841 | 2023-07-19 | Vitality        | W   | 0.927      | 0.571        | 1.000 (0.529)    | 0.680 (0.360)    | 1 (0.927) |    28.34 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           46 |      859 | 2023-07-18 | Complexity      | W   | 0.920      | 0.571        | 0.120 (0.063)    | 0.373 (0.196)    | 1 (0.920) |     7.58 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           45 |      917 | 2023-07-15 | Evil Geniuses   | W   | 0.901      | 0.571        | 0.077 (0.039)    | 0.580 (0.298)    | 1 (0.901) |     2.50 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           44 |      955 | 2023-07-13 | Complexity      | L   | 0.887      | -            | -                | -                | -         |   -21.05 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           43 |      976 | 2023-07-12 | SAW             | L   | 0.880      | -            | -                | -                | -         |   -17.52 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           42 |      994 | 2023-07-11 | Eternal Fire    | W   | 0.875      | 0.143        | -                | 0.749 (0.094)    | -         |     3.73 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           41 |     1012 | 2023-07-11 | Hawks           | W   | 0.874      | -            | -                | -                | -         |     0.14 | Brollan, hampus, headtr1ck, k0nfig, REZ  |
|           40 |     1738 | 2023-05-27 | 9INE            | L   | 0.572      | -            | -                | -                | -         |   -13.46 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           39 |     1760 | 2023-05-26 | Into the Breach | L   | 0.566      | -            | -                | -                | -         |   -11.88 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           38 |     1874 | 2023-05-23 | Meta            | W   | 0.547      | 0.589        | -                | 0.471 (0.151)    | -         |     0.53 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           37 |     1920 | 2023-05-21 | BIG             | L   | 0.533      | -            | -                | -                | -         |   -15.03 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           36 |     1922 | 2023-05-21 | HOTU            | W   | 0.531      | -            | -                | -                | -         |     0.71 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           35 |     1931 | 2023-05-20 | Looking For Org | W   | 0.526      | -            | -                | -                | -         |     0.15 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           34 |     1935 | 2023-05-20 | Hungary         | L   | 0.525      | -            | -                | -                | -         |   -15.60 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           33 |     1999 | 2023-05-16 | Apeks           | L   | 0.501      | -            | -                | -                | -         |    -8.75 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           32 |     2016 | 2023-05-15 | ENCE            | W   | 0.492      | 1.000        | 1.000 (0.492)    | 0.632 (0.311)    | 1 (0.492) |    14.63 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           31 |     2028 | 2023-05-14 | Natus Vincere   | L   | 0.485      | -            | -                | -                | -         |   -12.52 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           30 |     2034 | 2023-05-13 | FURIA           | W   | 0.480      | 1.000        | 0.082 (0.039)    | -                | 1 (0.480) |     1.37 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           29 |     2043 | 2023-05-13 | fnatic          | L   | 0.478      | -            | -                | -                | -         |   -10.45 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           28 |     2070 | 2023-05-10 | Grayhound       | W   | 0.460      | -            | -                | -                | 1 (0.460) |     1.18 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           27 |     2092 | 2023-05-09 | OG              | W   | 0.452      | -            | -                | -                | 1 (0.452) |     2.57 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           26 |     2105 | 2023-05-08 | ENCE            | L   | 0.447      | -            | -                | -                | -         |    -0.75 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           25 |     2112 | 2023-05-08 | MOUZ            | W   | 0.446      | -            | -                | -                | 1 (0.446) |     7.29 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           24 |     2483 | 2023-04-19 | Heroic          | L   | 0.321      | -            | -                | -                | -         |    -0.77 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           23 |     2497 | 2023-04-18 | 9INE            | W   | 0.314      | 0.624        | 0.265 (0.052)    | 0.734 (0.144)    | -         |     2.25 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           22 |     2515 | 2023-04-17 | Natus Vincere   | L   | 0.308      | -            | -                | -                | -         |    -8.19 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           21 |     2528 | 2023-04-17 | Imperial        | W   | 0.306      | 0.624        | 0.141 (0.027)    | -                | -         |     1.15 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           20 |     2606 | 2023-04-14 | BIG             | W   | 0.285      | -            | -                | -                | -         |     0.72 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           19 |     2639 | 2023-04-13 | Astralis        | W   | 0.278      | 0.143        | 0.582 (0.023)    | -                | -         |     7.53 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           18 |     2679 | 2023-04-12 | FORZE           | L   | 0.271      | -            | -                | -                | -         |    -5.97 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           17 |     2700 | 2023-04-11 | Vitality        | L   | 0.267      | -            | -                | -                | -         |    -0.33 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           16 |     2707 | 2023-04-11 | Eternal Fire    | W   | 0.266      | -            | -                | -                | -         |     0.70 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           15 |     2860 | 2023-04-02 | fnatic          | L   | 0.206      | -            | -                | -                | -         |    -4.44 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           14 |     2876 | 2023-04-01 | Cloud9          | L   | 0.199      | -            | -                | -                | -         |    -1.47 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           13 |     2892 | 2023-03-31 | Cloud9          | L   | 0.193      | -            | -                | -                | -         |    -1.45 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           12 |     2900 | 2023-03-31 | OG              | W   | 0.192      | -            | -                | -                | -         |     0.84 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           11 |     2950 | 2023-03-29 | OG              | W   | 0.180      | -            | -                | -                | -         |     0.79 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|           10 |     2970 | 2023-03-28 | Monte           | W   | 0.174      | -            | -                | -                | -         |     3.02 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|            9 |     2978 | 2023-03-28 | Question Mark   | W   | 0.174      | -            | -                | -                | -         |     0.29 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|            8 |     2985 | 2023-03-28 | Looking4Org     | W   | 0.173      | -            | -                | -                | -         |     0.38 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|            7 |     3129 | 2023-03-23 | 9 Pandas        | L   | 0.141      | -            | -                | -                | -         |    -3.70 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|            6 |     3133 | 2023-03-23 | HOTU            | W   | 0.140      | -            | -                | -                | -         |     0.14 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|            5 |     3474 | 2023-03-12 | Fake Natty      | L   | 0.068      | -            | -                | -                | -         |    -2.05 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|            4 |     3505 | 2023-03-11 | OG              | W   | 0.061      | -            | -                | -                | -         |     0.27 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|            3 |     3534 | 2023-03-10 | Grayhound       | L   | 0.055      | -            | -                | -                | -         |    -1.61 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|            2 |     3577 | 2023-03-09 | FaZe            | L   | 0.047      | -            | -                | -                | -         |    -0.36 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |
|            1 |     3617 | 2023-03-08 | paiN            | W   | 0.040      | -            | -                | -                | -         |     0.10 | Aleksib, Brollan, headtr1ck, k0nfig, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($52,935.49)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-06 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-07-23 |      0.954 | $27,500.00     | $26,222.35      |
| 2023-05-21 |      0.533 | $20,000.00     | $10,665.33      |
| 2023-04-23 |      0.347 | $6,000.00      | $2,083.31       |
| 2023-04-02 |      0.208 | $7,500.00      | $1,557.03       |
| 2023-03-26 |      0.160 | $15,000.00     | $2,407.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
