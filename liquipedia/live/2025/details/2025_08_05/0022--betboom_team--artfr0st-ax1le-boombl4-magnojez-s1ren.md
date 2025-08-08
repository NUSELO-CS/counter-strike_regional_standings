### Roster Details<br />
Team Name: BetBoom Team<br />
Roster: ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren<br />
Global Rank: [22](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [15]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  1361.2<br />
<br />
Final Rank Value (1361.2) = Starting Rank Value (1415.3) + Head To Head Adjustments (-54.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.673[<sup>1</sup>](#table2)
- Bounty Collected: 0.532[<sup>2</sup>](#table1)
- Opponent Network: 0.330[<sup>2</sup>](#table1)
- LAN Wins: 0.600[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.625[<sup>2</sup>](#table1)

The average of these factors is 0.534<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1415.3
- 400 + ( ( 0.534 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1415.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      205 | 2025-07-19 | Astralis               | L   | 1.000      | -            | -                | -                | -         |    -3.33 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren |
|           54 |      238 | 2025-07-18 | GamerLegion            | W   | 1.000      | 1.000        | 0.454 (0.454)    | 0.418 (0.418)    | 1 (1.000) |    25.22 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren |
|           53 |      255 | 2025-07-17 | BIG                    | W   | 1.000      | 1.000        | 0.182 (0.182)    | 0.323 (0.323)    | 1 (1.000) |     9.15 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren |
|           52 |      288 | 2025-07-16 | HEROIC                 | W   | 1.000      | 1.000        | 0.406 (0.406)    | 0.646 (0.646)    | 1 (1.000) |    24.24 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren |
|           51 |      311 | 2025-07-15 | Complexity             | L   | 1.000      | -            | -                | -                | -         |   -13.20 | ArtFr0st, Ax1Le, Boombl4, Magnojez, s1ren |
|           50 |      846 | 2025-06-08 | MIBR                   | L   | 0.799      | -            | -                | -                | -         |   -12.22 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           49 |      863 | 2025-06-07 | HEROIC                 | L   | 0.793      | -            | -                | -                | -         |    -4.71 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           48 |      873 | 2025-06-07 | 3DMAX                  | L   | 0.792      | -            | -                | -                | -         |    -2.95 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           47 |      891 | 2025-06-05 | Wildcard               | W   | 0.779      | 0.624        | -                | 0.409 (0.199)    | 1 (0.779) |     4.25 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           46 |      911 | 2025-06-04 | Legacy                 | W   | 0.771      | 0.624        | 0.113 (0.055)    | 0.917 (0.442)    | 1 (0.771) |    11.64 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           45 |      919 | 2025-06-03 | FlyQuest               | L   | 0.766      | -            | -                | -                | -         |   -10.88 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           44 |      927 | 2025-06-03 | Nemiga Gaming          | W   | 0.765      | 0.624        | 0.075 (0.036)    | 0.730 (0.349)    | 1 (0.765) |     8.03 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           43 |     1204 | 2025-05-15 | ECSTATIC               | L   | 0.638      | -            | -                | -                | -         |   -12.36 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           42 |     1337 | 2025-05-10 | ECSTATIC               | L   | 0.605      | -            | -                | -                | -         |   -12.28 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           41 |     1505 | 2025-05-04 | RUBY                   | L   | 0.563      | -            | -                | -                | -         |   -16.37 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           40 |     1529 | 2025-05-03 | GUN5 Esports           | W   | 0.558      | -            | -                | -                | 0 (0.000) |     1.84 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           39 |     1669 | 2025-04-27 | HEROIC                 | L   | 0.517      | -            | -                | -                | -         |    -3.97 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           38 |     1697 | 2025-04-26 | B8                     | L   | 0.511      | -            | -                | -                | -         |    -8.75 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           37 |     1719 | 2025-04-25 | Imperial Esports       | W   | 0.505      | 0.548        | 0.121 (0.034)    | 0.691 (0.191)    | 0 (0.000) |     2.05 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           36 |     1741 | 2025-04-24 | Wildcard               | W   | 0.498      | -            | -                | -                | 0 (0.000) |     1.84 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           35 |     1797 | 2025-04-20 | ENCE                   | L   | 0.470      | -            | -                | -                | -         |   -12.57 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           34 |     1821 | 2025-04-18 | ENCE                   | W   | 0.458      | 0.657        | 0.139 (0.042)    | 0.721 (0.217)    | 0 (0.000) |     2.10 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           33 |     1833 | 2025-04-18 | LA MASIA               | W   | 0.457      | -            | -                | -                | -         |     0.24 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           32 |     1847 | 2025-04-17 | Team Spirit Academy    | W   | 0.452      | -            | -                | -                | -         |     1.54 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           31 |     1851 | 2025-04-17 | Metizport              | W   | 0.451      | -            | -                | -                | -         |     1.24 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           30 |     1865 | 2025-04-17 | Nexus Gaming           | W   | 0.450      | 0.657        | 0.151 (0.045)    | 0.883 (0.261)    | -         |     1.07 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           29 |     1891 | 2025-04-16 | 9Pandas                | W   | 0.443      | -            | -                | -                | -         |     0.88 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           28 |     1914 | 2025-04-15 | Fnatic                 | W   | 0.437      | -            | -                | -                | -         |     4.53 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           27 |     1924 | 2025-04-14 | Nemiga Gaming          | L   | 0.432      | -            | -                | -                | -         |    -8.97 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           26 |     1937 | 2025-04-14 | SAW                    | W   | 0.430      | -            | -                | -                | -         |     7.03 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           25 |     1971 | 2025-04-12 | BC.Game Esports        | W   | 0.417      | -            | -                | -                | -         |     0.72 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           24 |     2184 | 2025-04-03 | Partizan Esports       | L   | 0.358      | -            | -                | -                | -         |   -10.39 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           23 |     2191 | 2025-04-03 | LA MASIA               | W   | 0.357      | -            | -                | -                | -         |     0.19 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           22 |     2201 | 2025-04-03 | Nexus Gaming           | W   | 0.356      | 0.607        | 0.151 (0.033)    | -                | -         |     0.91 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           21 |     2235 | 2025-04-02 | Dynamo Eclot           | W   | 0.351      | -            | -                | -                | -         |     0.92 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           20 |     2256 | 2025-04-02 | ENCE                   | W   | 0.350      | -            | -                | -                | -         |     1.47 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           19 |     2332 | 2025-03-30 | Metizport              | L   | 0.331      | -            | -                | -                | -         |    -9.68 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           18 |     2340 | 2025-03-30 | TEAM NEXT LEVEL        | W   | 0.330      | 0.769        | 0.128 (0.033)    | 1.000 (0.254)    | -         |     2.08 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           17 |     2379 | 2025-03-29 | Monte                  | W   | 0.325      | -            | -                | -                | -         |     0.28 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           16 |     2400 | 2025-03-29 | 9Pandas                | W   | 0.324      | -            | -                | -                | -         |     0.49 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           15 |     2470 | 2025-03-28 | OG                     | W   | 0.316      | -            | -                | -                | -         |     1.55 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           14 |     2535 | 2025-03-27 | TEAM NEXT LEVEL        | L   | 0.310      | -            | -                | -                | -         |    -7.85 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           13 |     2857 | 2025-03-13 | FUT Esports            | L   | 0.217      | -            | -                | -                | -         |    -5.97 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           12 |     2889 | 2025-03-11 | Betclic Apogee Esports | L   | 0.205      | -            | -                | -                | -         |    -5.60 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           11 |     2911 | 2025-03-10 | Nemiga Gaming          | W   | 0.199      | -            | -                | -                | -         |     1.87 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|           10 |     2932 | 2025-03-10 | Team Spirit Academy    | W   | 0.198      | -            | -                | -                | -         |     0.63 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|            9 |     2958 | 2025-03-09 | Zero Tenacity          | W   | 0.192      | -            | -                | -                | -         |     0.29 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|            8 |     2988 | 2025-03-09 | CYBERSHOKE Esports     | W   | 0.190      | -            | -                | -                | -         |     0.31 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|            7 |     3041 | 2025-03-08 | 9Pandas                | L   | 0.185      | -            | -                | -                | -         |    -5.58 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|            6 |     3061 | 2025-03-08 | Team Spirit Academy    | L   | 0.184      | -            | -                | -                | -         |    -5.24 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|            5 |     3124 | 2025-03-07 | ARCRED                 | W   | 0.178      | -            | -                | -                | -         |     0.21 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|            4 |     3707 | 2025-02-11 | Astralis               | L   | 0.019      | -            | -                | -                | -         |    -0.07 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|            3 |     3714 | 2025-02-11 | Hesta                  | W   | 0.017      | -            | -                | -                | -         |     0.00 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|            2 |     3742 | 2025-02-10 | Team Falcons           | L   | 0.012      | -            | -                | -                | -         |    -0.06 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |
|            1 |     3751 | 2025-02-10 | Nemiga Gaming          | W   | 0.010      | -            | -                | -                | -         |     0.09 | Ax1Le, Boombl4, Magnojez, s1ren, zorte    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($138,228.47)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      1.000 | $105,000.00    | $105,000.00     |
| 2025-06-10 |      0.813 | $10,000.00     | $8,127.78       |
| 2025-05-11 |      0.611 | $2,014.05      | $1,231.09       |
| 2025-04-27 |      0.518 | $20,000.00     | $10,363.89      |
| 2025-04-20 |      0.472 | $21,000.00     | $9,915.21       |
| 2025-04-03 |      0.359 | $10,000.00     | $3,590.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
