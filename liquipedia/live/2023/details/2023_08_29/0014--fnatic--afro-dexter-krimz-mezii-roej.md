### Roster Details<br />
Team Name: fnatic<br />
Roster: afro, dexter, KRIMZ, mezii, roeJ<br />
Global Rank: [14](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [14]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1315.4<br />
<br />
Final Rank Value (1315.4) = Starting Rank Value (1288.2) + Head To Head Adjustments (27.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.569[<sup>1</sup>](#table2)
- Bounty Collected: 0.544[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.565[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.347[<sup>2</sup>](#table1)

The average of these factors is 0.459<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1288.2
- 400 + ( ( 0.459 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1288.2


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
|           28 |      260 | 2023-08-16 | Cloud9            | L   | 1.000      | -            | -                | -                | -         |    -5.37 | afro, dexter, KRIMZ, mezii, roeJ    |
|           27 |      652 | 2023-07-31 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |    -7.40 | afro, dexter, KRIMZ, mezii, roeJ    |
|           26 |      687 | 2023-07-30 | ENCE              | L   | 1.000      | -            | -                | -                | -         |    -1.38 | afro, dexter, KRIMZ, mezii, roeJ    |
|           25 |      712 | 2023-07-29 | Cloud9            | W   | 0.992      | 1.000        | 0.743 (0.737)    | 0.484 (0.481)    | 1 (0.992) |    25.74 | afro, dexter, KRIMZ, mezii, roeJ    |
|           24 |      740 | 2023-07-26 | 9INE              | W   | 0.974      | 0.143        | 0.265 (0.037)    | 0.734 (0.102)    | 1 (0.974) |    12.09 | afro, dexter, KRIMZ, mezii, roeJ    |
|           23 |      749 | 2023-07-26 | Complexity        | W   | 0.973      | 0.143        | 0.120 (0.017)    | 0.373 (0.052)    | 1 (0.973) |     8.64 | afro, dexter, KRIMZ, mezii, roeJ    |
|           22 |     1959 | 2023-05-18 | Looking4Org       | W   | 0.512      | 0.143        | 0.065 (0.005)    | 0.882 (0.065)    | 0 (0.000) |     3.13 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           21 |     1961 | 2023-05-18 | 500               | W   | 0.511      | 0.143        | 0.075 (0.006)    | 1.000 (0.073)    | -         |     2.19 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           20 |     1971 | 2023-05-17 | GTZ               | W   | 0.508      | -            | -                | -                | -         |     2.10 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           19 |     1978 | 2023-05-17 | Sprout            | W   | 0.508      | 0.143        | -                | 0.420 (0.030)    | -         |     1.65 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           18 |     2001 | 2023-05-16 | Into the Breach   | L   | 0.500      | -            | -                | -                | -         |    -8.85 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           17 |     2012 | 2023-05-15 | G2                | W   | 0.493      | 1.000        | 1.000 (0.493)    | 0.621 (0.307)    | 1 (0.493) |    15.22 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           16 |     2027 | 2023-05-14 | GamerLegion       | L   | 0.485      | -            | -                | -                | -         |    -2.94 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           15 |     2037 | 2023-05-13 | Monte             | L   | 0.480      | -            | -                | -                | -         |    -4.14 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           14 |     2043 | 2023-05-13 | Ninjas in Pyjamas | W   | 0.478      | 1.000        | 0.194 (0.093)    | 0.670 (0.320)    | 1 (0.478) |    10.45 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           13 |     2486 | 2023-04-19 | OG                | L   | 0.319      | -            | -                | -                | -         |    -7.09 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           12 |     2504 | 2023-04-18 | 9z                | W   | 0.313      | 0.624        | 0.273 (0.053)    | 0.650 (0.127)    | 1 (0.313) |     2.64 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           11 |     2518 | 2023-04-17 | FURIA             | L   | 0.307      | -            | -                | -                | -         |    -8.13 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|           10 |     2775 | 2023-04-07 | B8                | W   | 0.240      | -            | -                | -                | 1 (0.240) |     0.70 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|            9 |     2810 | 2023-04-06 | 1WIN              | W   | 0.233      | 0.143        | 0.298 (0.010)    | 0.772 (0.026)    | 1 (0.233) |     3.26 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|            8 |     2824 | 2023-04-06 | THE FREE          | W   | 0.232      | -            | -                | -                | 1 (0.232) |     0.50 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|            7 |     2846 | 2023-04-03 | OG                | L   | 0.212      | -            | -                | -                | -         |    -4.94 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|            6 |     2860 | 2023-04-02 | Ninjas in Pyjamas | W   | 0.206      | 0.143        | 0.194 (0.006)    | -                | -         |     4.44 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|            5 |     2880 | 2023-04-01 | Spirit            | W   | 0.199      | -            | -                | -                | -         |     0.27 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|            4 |     2896 | 2023-03-31 | GODSENT           | L   | 0.192      | -            | -                | -                | -         |    -5.77 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|            3 |     2911 | 2023-03-30 | 9INE              | L   | 0.188      | -            | -                | -                | -         |    -3.93 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|            2 |     3214 | 2023-03-21 | FURIA             | L   | 0.126      | -            | -                | -                | -         |    -3.42 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |
|            1 |     3424 | 2023-03-14 | Let us cook       | L   | 0.081      | -            | -                | -                | -         |    -2.46 | FASHR, KRIMZ, mezii, nicoodoz, roeJ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,649.39)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-20 |      1.000 | $15,000.00     | $15,000.00      |
| 2023-08-06 |      1.000 | $16,000.00     | $16,000.00      |
| 2023-05-21 |      0.533 | $20,000.00     | $10,665.33      |
| 2023-04-23 |      0.347 | $5,000.00      | $1,736.09       |
| 2023-04-02 |      0.208 | $5,000.00      | $1,038.02       |
| 2023-03-26 |      0.160 | $20,000.00     | $3,209.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
