### Roster Details<br />
Team Name: sYnck<br />
Roster: aNdu, eku, fejtZ, Sickta, Wahtzz<br />
Global Rank: [102](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [74]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  806.1<br />
<br />
Final Rank Value (806.1) = Starting Rank Value (862.6) + Head To Head Adjustments (-56.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.264[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.239<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 862.6
- 400 + ( ( 0.239 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 862.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      356 | 2023-08-12 | Anonymo          | L   | 1.000      | -            | -                | -                | -         |   -14.00 | aNdu, eku, fejtZ, Sickta, Wahtzz |
|           25 |      825 | 2023-07-20 | ex-iNation       | L   | 0.934      | -            | -                | -                | -         |   -21.22 | aNdu, consss, eku, fejtZ, Wahtzz |
|           24 |      846 | 2023-07-19 | ENCE Academy     | L   | 0.926      | -            | -                | -                | -         |   -16.01 | aNdu, consss, eku, fejtZ, Wahtzz |
|           23 |     1010 | 2023-07-11 | 9INE             | L   | 0.874      | -            | -                | -                | -         |    -4.48 | aNdu, consss, eku, fejtZ, Wahtzz |
|           22 |     1434 | 2023-06-04 | Nakama           | W   | 0.627      | 0.294        | 0.012 (0.002)    | 0.094 (0.017)    | 0 (0.000) |     5.89 | aNdu, consss, eku, fejtZ, Wahtzz |
|           21 |     1443 | 2023-06-04 | Ambush           | W   | 0.626      | 0.294        | -                | 0.114 (0.021)    | 0 (0.000) |     2.48 | aNdu, consss, eku, fejtZ, Wahtzz |
|           20 |     1571 | 2023-05-31 | ALTERNATE aTTaX  | L   | 0.601      | -            | -                | -                | -         |    -6.80 | aNdu, consss, eku, fejtZ, Wahtzz |
|           19 |     1619 | 2023-05-30 | The Prodigies    | L   | 0.593      | -            | -                | -                | -         |   -13.61 | aNdu, consss, eku, fejtZ, Wahtzz |
|           18 |     1689 | 2023-05-28 | MASONIC          | W   | 0.579      | 0.318        | 0.012 (0.002)    | 0.262 (0.048)    | 1 (0.579) |    10.63 | aNdu, consss, eku, fejtZ, Wahtzz |
|           17 |     1698 | 2023-05-28 | Espionage        | W   | 0.578      | 0.318        | 0.022 (0.004)    | 0.764 (0.141)    | 1 (0.578) |    12.52 | aNdu, consss, eku, fejtZ, Wahtzz |
|           16 |     1711 | 2023-05-27 | ex-Flames Ascent | W   | 0.574      | -            | -                | -                | 1 (0.574) |     2.67 | aNdu, consss, eku, fejtZ, Wahtzz |
|           15 |     1720 | 2023-05-27 | MASONIC          | L   | 0.573      | -            | -                | -                | -         |    -7.56 | aNdu, consss, eku, fejtZ, Wahtzz |
|           14 |     1735 | 2023-05-27 | Atlantic         | W   | 0.572      | 0.318        | 0.004 (0.001)    | 0.034 (0.006)    | 1 (0.572) |     4.91 | aNdu, consss, eku, fejtZ, Wahtzz |
|           13 |     1898 | 2023-05-22 | Ignis Serpens    | L   | 0.541      | -            | -                | -                | -         |   -11.61 | aNdu, consss, eku, fejtZ, Wahtzz |
|           12 |     2053 | 2023-05-12 | Sampi            | L   | 0.472      | -            | -                | -                | -         |    -5.08 | aNdu, consss, eku, fejtZ, Wahtzz |
|           11 |     2062 | 2023-05-11 | The Prodigies    | W   | 0.465      | 0.333        | 0.003 (0.000)    | 0.453 (0.070)    | 0 (0.000) |     4.14 | aNdu, consss, eku, fejtZ, Wahtzz |
|           10 |     2095 | 2023-05-09 | Zero Tenacity    | W   | 0.451      | 0.333        | 0.037 (0.006)    | 0.915 (0.138)    | 0 (0.000) |     7.34 | aNdu, consss, eku, fejtZ, Wahtzz |
|            9 |     2132 | 2023-05-07 | JANO             | L   | 0.439      | -            | -                | -                | -         |    -8.14 | aNdu, consss, eku, fejtZ, Wahtzz |
|            8 |     2668 | 2023-04-12 | Zero Tenacity    | L   | 0.273      | -            | -                | -                | -         |    -3.92 | aNdu, consss, eku, fejtZ, Wahtzz |
|            7 |     2711 | 2023-04-11 | Astralis Talent  | L   | 0.265      | -            | -                | -                | -         |    -2.46 | aNdu, consss, eku, fejtZ, Wahtzz |
|            6 |     2784 | 2023-04-07 | NAVI Youth       | W   | 0.239      | 0.371        | 0.004 (0.000)    | 0.106 (0.009)    | 0 (0.000) |     1.65 | aNdu, consss, eku, fejtZ, Wahtzz |
|            5 |     2881 | 2023-04-01 | OG               | L   | 0.199      | -            | -                | -                | -         |    -1.43 | aNdu, consss, eku, fejtZ, Wahtzz |
|            4 |     2898 | 2023-03-31 | Cloud9           | L   | 0.192      | -            | -                | -                | -         |    -0.09 | aNdu, consss, eku, fejtZ, Wahtzz |
|            3 |     3119 | 2023-03-23 | 9 Pandas         | W   | 0.141      | 0.143        | 0.074 (0.001)    | 1.000 (0.020)    | 0 (0.000) |     3.61 | aNdu, consss, eku, fejtZ, Wahtzz |
|            2 |     3131 | 2023-03-23 | Lazer Cats       | W   | 0.141      | 0.143        | 0.002 (0.000)    | -                | -         |     0.99 | aNdu, consss, eku, fejtZ, Wahtzz |
|            1 |     3139 | 2023-03-23 | Espionage        | W   | 0.140      | 0.143        | 0.022 (0.000)    | 0.764 (0.015)    | -         |     3.01 | aNdu, consss, eku, fejtZ, Wahtzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,164.86)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-07 |      0.648 | $1,079.00      | $698.72         |
| 2023-06-04 |      0.627 | $3,000.00      | $1,882.37       |
| 2023-05-28 |      0.579 | $5,762.00      | $3,338.01       |
| 2023-05-15 |      0.492 | $500.00        | $245.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
