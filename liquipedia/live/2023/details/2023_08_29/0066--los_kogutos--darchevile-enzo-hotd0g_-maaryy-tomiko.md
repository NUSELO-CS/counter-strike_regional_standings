### Roster Details<br />
Team Name: los kogutos<br />
Roster: darchevile, Enzo, hotd0g , maaryy, tomiko<br />
Global Rank: [66](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [51]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  924.8<br />
<br />
Final Rank Value (924.8) = Starting Rank Value (940.0) + Head To Head Adjustments (-15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.304[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.950[<sup>2</sup>](#table1)

The average of these factors is 0.279<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 940.0
- 400 + ( ( 0.279 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 940.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           76 |       34 | 2023-08-27 | BIG           | L   | 1.000      | -            | -                | -                | -         |    -6.21 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           75 |       74 | 2023-08-26 | SINNERS       | W   | 1.000      | 0.435        | 0.069 (0.030)    | 1.000 (0.435)    | 0 (0.000) |    21.89 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           74 |       80 | 2023-08-25 | Apeks         | W   | 1.000      | 0.435        | 0.349 (0.152)    | 0.776 (0.337)    | 0 (0.000) |    28.75 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           73 |      168 | 2023-08-22 | Romania       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.43 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           72 |      175 | 2023-08-21 | Espionage     | L   | 1.000      | -            | -                | -                | -         |    -7.97 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           71 |      182 | 2023-08-21 | Endpoint      | L   | 1.000      | -            | -                | -                | -         |   -12.55 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           70 |      203 | 2023-08-19 | Preasy        | L   | 1.000      | -            | -                | -                | -         |   -18.71 | darchevile, Enzo, hotd0g , sh3nanigan, tomiko |
|           69 |      245 | 2023-08-17 | Zero Tenacity | W   | 1.000      | 0.435        | 0.037 (0.016)    | 0.915 (0.398)    | 0 (0.000) |    12.51 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           68 |      255 | 2023-08-16 | ORKS          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.18 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           67 |      262 | 2023-08-16 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -18.88 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           66 |      272 | 2023-08-15 | EYEBALLERS    | W   | 1.000      | 0.435        | 0.017 (0.008)    | 0.609 (0.265)    | 0 (0.000) |    14.61 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           65 |      290 | 2023-08-14 | OG            | L   | 1.000      | -            | -                | -                | -         |    -9.30 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           64 |      294 | 2023-08-14 | PGE Turow     | L   | 1.000      | -            | -                | -                | -         |   -19.36 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           63 |      309 | 2023-08-13 | Espionage     | L   | 1.000      | -            | -                | -                | -         |   -10.31 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           62 |      504 | 2023-08-08 | Eternal Fire  | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.749 (0.325)    | 0 (0.000) |    21.91 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           61 |      597 | 2023-08-03 | FTW           | W   | 1.000      | 0.435        | 0.019 (0.008)    | -                | 0 (0.000) |    12.51 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           60 |      607 | 2023-08-03 | 7AM           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.65 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           59 |      711 | 2023-07-29 | SAW           | L   | 0.993      | -            | -                | -                | -         |    -4.23 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           58 |      747 | 2023-07-26 | HAVU          | W   | 0.973      | 0.435        | -                | 0.395 (0.167)    | 0 (0.000) |    16.51 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           57 |      753 | 2023-07-26 | PACT          | L   | 0.971      | -            | -                | -                | -         |   -15.77 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           56 |      754 | 2023-07-25 | Espionage     | L   | 0.967      | -            | -                | -                | -         |   -10.62 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           55 |      757 | 2023-07-25 | ECLOT         | L   | 0.965      | -            | -                | -                | -         |    -9.44 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           54 |      778 | 2023-07-23 | Sampi         | W   | 0.953      | 0.435        | 0.087 (0.036)    | 1.000 (0.414)    | -         |    19.03 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           53 |      781 | 2023-07-23 | Anonymo       | W   | 0.951      | 0.371        | 0.035 (0.012)    | 0.712 (0.251)    | -         |    16.82 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           52 |      809 | 2023-07-21 | SINNERS       | L   | 0.940      | -            | -                | -                | -         |   -10.15 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           51 |      814 | 2023-07-21 | ThunderFlash  | W   | 0.939      | 0.371        | -                | 0.724 (0.252)    | -         |    16.19 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           50 |      847 | 2023-07-19 | 7AM           | W   | 0.925      | -            | -                | -                | -         |     9.21 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           49 |      864 | 2023-07-18 | Websterz      | W   | 0.919      | 0.435        | 0.044 (0.018)    | 0.489 (0.195)    | -         |    16.50 | darchevile, Enzo, hotd0g , maaryy, xKacpersky |
|           48 |      929 | 2023-07-15 | Espionage     | L   | 0.898      | -            | -                | -                | -         |    -7.95 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           47 |     1025 | 2023-07-11 | 7AM           | W   | 0.871      | -            | -                | -                | -         |     9.02 | darchevile, Enzo, hotd0g , maaryy, tomiko     |
|           46 |     1100 | 2023-06-23 | Hungary       | L   | 0.753      | -            | -                | -                | -         |    -9.02 | asran, darchevile, Enzo, snatchie, tomiko     |
|           45 |     1108 | 2023-06-20 | Enterprise    | W   | 0.733      | -            | -                | -                | -         |     6.87 | asran, darchevile, Enzo, maaryy, tomiko       |
|           44 |     1115 | 2023-06-19 | Nemiga        | W   | 0.726      | -            | -                | -                | -         |     3.28 | asran, darchevile, Enzo, maaryy, tomiko       |
|           43 |     1133 | 2023-06-18 | Ignis Serpens | W   | 0.719      | -            | -                | -                | -         |     8.01 | asran, darchevile, Enzo, maaryy, tomiko       |
|           42 |     1156 | 2023-06-17 | Zero Tenacity | L   | 0.712      | -            | -                | -                | -         |   -11.55 | asran, darchevile, Enzo, maaryy, tomiko       |
|           41 |     1251 | 2023-06-10 | Anonymo       | L   | 0.667      | -            | -                | -                | -         |    -8.06 | asran, darchevile, Enzo, maaryy, tomiko       |
|           40 |     1299 | 2023-06-09 | Question Mark | L   | 0.659      | -            | -                | -                | -         |    -9.75 | asran, darchevile, Enzo, maaryy, tomiko       |
|           39 |     1348 | 2023-06-08 | Sampi         | L   | 0.652      | -            | -                | -                | -         |    -6.54 | asran, darchevile, Enzo, maaryy, tomiko       |
|           38 |     1422 | 2023-06-05 | PROSPECTS     | W   | 0.633      | 0.371        | 0.050 (0.012)    | -                | -         |    12.58 | asran, darchevile, Enzo, maaryy, tomiko       |
|           37 |     1479 | 2023-06-03 | The Prodigies | W   | 0.618      | -            | -                | -                | -         |     6.47 | asran, darchevile, Enzo, maaryy, tomiko       |
|           36 |     1546 | 2023-06-01 | Ukraine       | L   | 0.605      | -            | -                | -                | -         |   -10.88 | asran, darchevile, Enzo, maaryy, tomiko       |
|           35 |     1700 | 2023-05-28 | The Prodigies | W   | 0.578      | -            | -                | -                | -         |     5.12 | asran, darchevile, Enzo, maaryy, tomiko       |
|           34 |     1828 | 2023-05-24 | PORTUGAL      | L   | 0.554      | -            | -                | -                | -         |   -14.90 | asran, darchevile, Enzo, maaryy, tomiko       |
|           33 |     1873 | 2023-05-23 | MASONIC       | L   | 0.547      | -            | -                | -                | -         |    -7.83 | asran, darchevile, Enzo, maaryy, tomiko       |
|           32 |     1879 | 2023-05-23 | Nakama        | W   | 0.546      | -            | -                | -                | -         |     4.50 | asran, darchevile, Enzo, maaryy, tomiko       |
|           31 |     1892 | 2023-05-23 | OG            | L   | 0.545      | -            | -                | -                | -         |    -3.25 | asran, darchevile, Enzo, maaryy, tomiko       |
|           30 |     2091 | 2023-05-09 | Entropiq      | L   | 0.452      | -            | -                | -                | -         |   -10.63 | asran, darchevile, Enzo, maaryy, tomiko       |
|           29 |     2110 | 2023-05-08 | Cryptova      | L   | 0.446      | -            | -                | -                | -         |   -10.09 | asran, darchevile, Enzo, maaryy, tomiko       |
|           28 |     2252 | 2023-04-30 | Entropiq      | W   | 0.393      | -            | -                | -                | -         |     3.10 | asran, darchevile, Enzo, maaryy, tomiko       |
|           27 |     2274 | 2023-04-29 | B8            | L   | 0.387      | -            | -                | -                | -         |    -6.77 | asran, darchevile, Enzo, maaryy, tomiko       |
|           26 |     2357 | 2023-04-26 | BLINK         | W   | 0.366      | -            | -                | -                | -         |     2.40 | asran, darchevile, Enzo, maaryy, tomiko       |
|           25 |     2405 | 2023-04-24 | KS            | W   | 0.353      | -            | -                | -                | -         |     0.63 | asran, darchevile, Enzo, maaryy, tomiko       |
|           24 |     2421 | 2023-04-23 | Nexus         | L   | 0.346      | -            | -                | -                | -         |    -9.19 | asran, darchevile, Enzo, maaryy, tomiko       |
|           23 |     2620 | 2023-04-13 | PGE Turow     | L   | 0.281      | -            | -                | -                | -         |    -5.68 | asran, darchevile, Enzo, maaryy, tomiko       |
|           22 |     2657 | 2023-04-12 | ThunderFlash  | W   | 0.274      | -            | -                | -                | -         |     3.81 | asran, darchevile, Enzo, maaryy, tomiko       |
|           21 |     2677 | 2023-04-12 | PROSPECTS     | L   | 0.271      | -            | -                | -                | -         |    -3.56 | asran, darchevile, Enzo, maaryy, tomiko       |
|           20 |     2721 | 2023-04-10 | Ukraine       | W   | 0.258      | -            | -                | -                | -         |     2.83 | asran, darchevile, Enzo, maaryy, tomiko       |
|           19 |     2818 | 2023-04-06 | BLINK         | L   | 0.232      | -            | -                | -                | -         |    -5.91 | asran, darchevile, Enzo, maaryy, tomiko       |
|           18 |     2869 | 2023-04-01 | EPIC DUDES    | L   | 0.201      | -            | -                | -                | -         |    -4.99 | asran, darchevile, Enzo, maaryy, tomiko       |
|           17 |     2875 | 2023-04-01 | ex-Fourteen   | W   | 0.199      | -            | -                | -                | -         |     0.82 | asran, darchevile, Enzo, maaryy, tomiko       |
|           16 |     2891 | 2023-03-31 | EPIC DUDES    | L   | 0.194      | -            | -                | -                | -         |    -4.83 | asran, darchevile, Enzo, maaryy, tomiko       |
|           15 |     3177 | 2023-03-22 | Katuna        | L   | 0.133      | -            | -                | -                | -         |    -3.81 | asran, darchevile, Enzo, maaryy, tomiko       |
|           14 |     3237 | 2023-03-20 | SINNERS       | L   | 0.121      | -            | -                | -                | -         |    -3.24 | asran, darchevile, Enzo, maaryy, tomiko       |
|           13 |     3262 | 2023-03-19 | ex-Partizan   | L   | 0.114      | -            | -                | -                | -         |    -2.99 | asran, darchevile, Enzo, maaryy, tomiko       |
|           12 |     3329 | 2023-03-17 | Nexus         | L   | 0.101      | -            | -                | -                | -         |    -2.76 | asran, AxEcHo, darchevile, Enzo, tomiko       |
|           11 |     3367 | 2023-03-16 | Endpoint      | L   | 0.094      | -            | -                | -                | -         |    -1.55 | asran, darchevile, Enzo, maaryy, tomiko       |
|           10 |     3373 | 2023-03-16 | Nexus         | W   | 0.093      | -            | -                | -                | -         |     0.38 | asran, darchevile, Enzo, maaryy, tomiko       |
|            9 |     3433 | 2023-03-14 | Spirit        | L   | 0.080      | -            | -                | -                | -         |    -0.17 | asran, darchevile, Enzo, maaryy, tomiko       |
|            8 |     3481 | 2023-03-12 | MOUZ NXT      | W   | 0.067      | -            | -                | -                | -         |     0.88 | asran, darchevile, Enzo, maaryy, tomiko       |
|            7 |     3489 | 2023-03-12 | Enterprise    | W   | 0.067      | -            | -                | -                | -         |     0.34 | asran, darchevile, Enzo, maaryy, tomiko       |
|            6 |     3499 | 2023-03-12 | EYEBALLERS    | W   | 0.065      | -            | -                | -                | -         |     0.84 | asran, darchevile, Enzo, maaryy, tomiko       |
|            5 |     3581 | 2023-03-09 | Looking4Org   | W   | 0.047      | -            | -                | -                | -         |     0.76 | asran, darchevile, Enzo, maaryy, tomiko       |
|            4 |     3630 | 2023-03-07 | EPIC DUDES    | W   | 0.035      | -            | -                | -                | -         |     0.21 | asran, darchevile, Enzo, maaryy, tomiko       |
|            3 |     3664 | 2023-03-06 | GenOne        | W   | 0.027      | -            | -                | -                | -         |     0.04 | asran, darchevile, Enzo, maaryy, tomiko       |
|            2 |     3682 | 2023-03-05 | ex-Coalesce   | L   | 0.021      | -            | -                | -                | -         |    -0.49 | asran, darchevile, Enzo, maaryy, tomiko       |
|            1 |     3687 | 2023-03-05 | GenOne        | W   | 0.020      | -            | -                | -                | -         |     0.03 | asran, darchevile, Enzo, maaryy, tomiko       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,466.27)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-07-27 |      0.979 | $3,000.00      | $2,935.54       |
| 2023-06-11 |      0.674 | $2,997.00      | $2,020.08       |
| 2023-04-16 |      0.301 | $1,697.00      | $510.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
