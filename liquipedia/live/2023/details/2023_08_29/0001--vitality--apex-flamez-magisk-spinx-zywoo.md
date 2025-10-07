### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, Magisk, Spinx, ZywOo<br />
Global Rank: [1](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [1]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1943.3<br />
<br />
Final Rank Value (1943.3) = Starting Rank Value (1978.6) + Head To Head Adjustments (-35.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.789[<sup>2</sup>](#table1)
- Opponent Network: 0.475[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.680[<sup>2</sup>](#table1)

The average of these factors is 0.816<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1978.6
- 400 + ( ( 0.816 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1978.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      189 | 2023-08-20 | ENCE              | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.632 (0.632)    | 1 (1.000) |    14.44 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           40 |      198 | 2023-08-19 | G2                | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.621 (0.621)    | 1 (1.000) |    14.54 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           39 |      228 | 2023-08-17 | Natus Vincere     | W   | 1.000      | 1.000        | 0.278 (0.278)    | -                | 1 (1.000) |     2.20 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           38 |      253 | 2023-08-16 | MIBR              | W   | 1.000      | 1.000        | -                | 0.596 (0.596)    | 1 (1.000) |     0.22 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           37 |      563 | 2023-08-05 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -16.50 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           36 |      581 | 2023-08-04 | Cloud9            | W   | 1.000      | 1.000        | 0.743 (0.743)    | 0.484 (0.484)    | 1 (1.000) |     4.37 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           35 |      638 | 2023-08-01 | G2                | L   | 1.000      | -            | -                | -                | -         |   -18.97 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           34 |      664 | 2023-07-31 | MOUZ              | W   | 1.000      | 1.000        | 0.292 (0.292)    | 0.533 (0.533)    | 1 (1.000) |     1.92 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           33 |      694 | 2023-07-30 | OG                | W   | 0.999      | 1.000        | -                | 0.386 (0.385)    | 1 (0.999) |     0.21 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           32 |      777 | 2023-07-23 | BIG               | W   | 0.953      | -            | -                | -                | 1 (0.953) |     0.46 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           31 |      841 | 2023-07-19 | Ninjas in Pyjamas | L   | 0.927      | -            | -                | -                | -         |   -28.34 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           30 |      923 | 2023-07-15 | Complexity        | W   | 0.900      | -            | -                | -                | 1 (0.900) |     0.26 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           29 |      958 | 2023-07-13 | Evil Geniuses     | W   | 0.886      | -            | -                | -                | 1 (0.886) |     0.07 | apEX, flameZ, Magisk, Spinx, ZywOo  |
|           28 |     1216 | 2023-06-11 | Heroic            | L   | 0.675      | -            | -                | -                | -         |   -14.30 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           27 |     1240 | 2023-06-10 | G2                | W   | 0.669      | 0.729        | 1.000 (0.488)    | 0.621 (0.303)    | -         |     8.88 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           26 |     1280 | 2023-06-09 | FaZe              | W   | 0.661      | -            | -                | -                | -         |     2.57 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           25 |     1336 | 2023-06-08 | Cloud9            | W   | 0.653      | 0.729        | 0.743 (0.354)    | -                | -         |     2.36 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           24 |     1371 | 2023-06-07 | Imperial          | L   | 0.646      | -            | -                | -                | -         |   -20.25 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           23 |     1918 | 2023-05-21 | GamerLegion       | W   | 0.533      | 1.000        | 0.556 (0.296)    | -                | -         |     1.35 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           22 |     1927 | 2023-05-20 | Apeks             | W   | 0.527      | 1.000        | -                | 0.776 (0.409)    | -         |     0.54 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           21 |     1956 | 2023-05-18 | Into the Breach   | W   | 0.514      | -            | -                | -                | -         |     0.25 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           20 |     2023 | 2023-05-14 | Monte             | W   | 0.486      | 1.000        | -                | 1.000 (0.486)    | -         |     0.72 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           19 |     2036 | 2023-05-13 | ENCE              | W   | 0.480      | 1.000        | 1.000 (0.480)    | 0.632 (0.303)    | -         |     6.44 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           18 |     2040 | 2023-05-13 | G2                | W   | 0.479      | 1.000        | 1.000 (0.479)    | -                | -         |     7.77 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           17 |     2414 | 2023-04-23 | Heroic            | W   | 0.347      | -            | -                | -                | -         |     3.75 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           16 |     2430 | 2023-04-22 | Cloud9            | W   | 0.340      | -            | -                | -                | -         |     1.31 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           15 |     2446 | 2023-04-21 | BIG               | W   | 0.333      | -            | -                | -                | -         |     0.04 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           14 |     2475 | 2023-04-19 | OG                | W   | 0.322      | -            | -                | -                | -         |     0.09 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           13 |     2485 | 2023-04-19 | FaZe              | W   | 0.320      | -            | -                | -                | -         |     1.17 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           12 |     2505 | 2023-04-18 | MIBR              | W   | 0.313      | -            | -                | -                | -         |     0.04 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           11 |     2522 | 2023-04-17 | OG                | L   | 0.307      | -            | -                | -                | -         |    -9.59 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|           10 |     2578 | 2023-04-15 | Monte             | W   | 0.291      | -            | -                | -                | -         |     0.49 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            9 |     2603 | 2023-04-14 | G2                | W   | 0.285      | -            | -                | -                | -         |     4.73 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            8 |     2627 | 2023-04-13 | BIG               | W   | 0.280      | -            | -                | -                | -         |     0.03 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            7 |     2665 | 2023-04-12 | 9INE              | L   | 0.273      | -            | -                | -                | -         |    -8.51 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            6 |     2700 | 2023-04-11 | Ninjas in Pyjamas | W   | 0.267      | -            | -                | -                | -         |     0.33 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            5 |     2709 | 2023-04-11 | Astralis          | W   | 0.265      | -            | -                | -                | -         |     1.75 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            4 |     3117 | 2023-03-23 | ENCE              | L   | 0.142      | -            | -                | -                | -         |    -2.33 | apEX, dupreeh, Magisk, Spinx, ZywOo |
|            3 |     3482 | 2023-03-12 | FaZe              | W   | 0.067      | -            | -                | -                | -         |     0.25 | apEX, JACKZ, Magisk, Spinx, ZywOo   |
|            2 |     3586 | 2023-03-09 | OG                | W   | 0.047      | -            | -                | -                | -         |     0.01 | apEX, JACKZ, Magisk, Spinx, ZywOo   |
|            1 |     3611 | 2023-03-08 | Grayhound         | W   | 0.041      | -            | -                | -                | -         |     0.00 | apEX, JACKZ, Magisk, Spinx, ZywOo   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($861,007.91)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-20 |      1.000 | $400,000.00    | $400,000.00     |
| 2023-08-06 |      1.000 | $80,000.00     | $80,000.00      |
| 2023-07-23 |      0.954 | $17,500.00     | $16,686.95      |
| 2023-06-11 |      0.675 | $85,000.00     | $57,348.40      |
| 2023-05-21 |      0.533 | $500,000.00    | $266,633.29     |
| 2023-04-23 |      0.347 | $100,000.00    | $34,721.84      |
| 2023-03-26 |      0.160 | $35,000.00     | $5,617.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
