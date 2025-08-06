### Roster Details<br />
Team Name: Fnatic<br />
Roster: blameF, CYPHER, fear, jambo, KRIMZ<br />
Global Rank: [33](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [23]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  1220.8<br />
<br />
Final Rank Value (1220.8) = Starting Rank Value (1266.9) + Head To Head Adjustments (-46.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.508[<sup>1</sup>](#table2)
- Bounty Collected: 0.416[<sup>2</sup>](#table1)
- Opponent Network: 0.271[<sup>2</sup>](#table1)
- LAN Wins: 0.637[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.630[<sup>2</sup>](#table1)

The average of these factors is 0.458<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1266.9
- 400 + ( ( 0.458 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 1266.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |       12 | 2025-08-02 | ECSTATIC               | L   | 1.000      | -            | -                | -                | -         |   -13.67 | blameF, CYPHER, fear, jambo, KRIMZ   |
|           62 |       26 | 2025-08-01 | SPARTA Esports         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.25 | blameF, CYPHER, fear, jambo, KRIMZ   |
|           61 |      263 | 2025-07-15 | Passion UA             | L   | 1.000      | -            | -                | -                | -         |   -18.66 | blameF, fear, jambo, KRIMZ, zeRRoFIX |
|           60 |      271 | 2025-07-15 | Sashi Esport           | L   | 1.000      | -            | -                | -                | -         |   -25.45 | blameF, fear, jambo, KRIMZ, zeRRoFIX |
|           59 |      285 | 2025-07-14 | ESC Gaming             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.42 | blameF, fear, jambo, KRIMZ, zeRRoFIX |
|           58 |      537 | 2025-06-22 | TEAM NEXT LEVEL        | L   | 0.911      | -            | -                | -                | -         |   -17.11 | blameF, fear, jambo, KRIMZ, matys    |
|           57 |      543 | 2025-06-22 | Ninjas in Pyjamas      | W   | 0.909      | 0.485        | 0.193 (0.085)    | 0.844 (0.372)    | 0 (0.000) |    19.91 | blameF, fear, jambo, KRIMZ, matys    |
|           56 |      566 | 2025-06-20 | OG                     | W   | 0.898      | 0.485        | 0.046 (0.020)    | 0.590 (0.257)    | -         |     9.52 | blameF, fear, jambo, KRIMZ, matys    |
|           55 |      585 | 2025-06-19 | Zero Tenacity          | W   | 0.890      | 0.485        | -                | 0.791 (0.341)    | -         |     4.19 | blameF, fear, jambo, KRIMZ, matys    |
|           54 |      639 | 2025-06-15 | Passion UA             | L   | 0.866      | -            | -                | -                | -         |   -16.74 | blameF, fear, jambo, KRIMZ, matys    |
|           53 |      654 | 2025-06-15 | 9INE                   | W   | 0.863      | 0.360        | -                | 0.769 (0.239)    | 1 (0.863) |     7.88 | blameF, fear, jambo, KRIMZ, matys    |
|           52 |      674 | 2025-06-14 | Ninjas in Pyjamas      | W   | 0.858      | 0.360        | 0.193 (0.060)    | 0.844 (0.261)    | 1 (0.858) |    20.22 | blameF, fear, jambo, KRIMZ, matys    |
|           51 |      693 | 2025-06-14 | Passion UA             | W   | 0.856      | 0.360        | 0.097 (0.030)    | 1.000 (0.308)    | 1 (0.856) |     9.52 | blameF, fear, jambo, KRIMZ, matys    |
|           50 |      707 | 2025-06-13 | The Last Resort        | W   | 0.852      | -            | -                | -                | 1 (0.852) |     1.64 | blameF, fear, jambo, KRIMZ, matys    |
|           49 |      889 | 2025-06-01 | ENCE                   | W   | 0.772      | 0.405        | 0.140 (0.044)    | 0.729 (0.228)    | 1 (0.772) |     9.42 | blameF, fear, jambo, KRIMZ, matys    |
|           48 |      892 | 2025-06-01 | 9INE                   | W   | 0.771      | 0.405        | -                | 0.769 (0.240)    | 1 (0.771) |     7.52 | blameF, fear, jambo, KRIMZ, matys    |
|           47 |      895 | 2025-05-31 | ENCE                   | L   | 0.766      | -            | -                | -                | -         |   -14.89 | blameF, fear, jambo, KRIMZ, matys    |
|           46 |      904 | 2025-05-30 | 9INE                   | W   | 0.759      | 0.405        | -                | 0.769 (0.237)    | 1 (0.759) |     7.25 | blameF, fear, jambo, KRIMZ, matys    |
|           45 |     1131 | 2025-05-16 | Passion UA             | L   | 0.666      | -            | -                | -                | -         |   -12.06 | blameF, fear, jambo, KRIMZ, matys    |
|           44 |     1169 | 2025-05-15 | 9INE                   | L   | 0.656      | -            | -                | -                | -         |   -13.90 | blameF, fear, jambo, KRIMZ, matys    |
|           43 |     1181 | 2025-05-14 | 9INE                   | W   | 0.652      | -            | -                | -                | -         |     6.72 | blameF, fear, jambo, KRIMZ, matys    |
|           42 |     1340 | 2025-05-08 | Dynamo Eclot           | W   | 0.612      | -            | -                | -                | -         |     2.98 | blameF, fear, jambo, KRIMZ, matys    |
|           41 |     1419 | 2025-05-06 | ENCE                   | L   | 0.597      | -            | -                | -                | -         |   -13.38 | blameF, fear, jambo, KRIMZ, matys    |
|           40 |     1437 | 2025-05-05 | Passion UA             | W   | 0.591      | 0.384        | 0.097 (0.022)    | 1.000 (0.227)    | -         |     8.94 | blameF, fear, jambo, KRIMZ, matys    |
|           39 |     1582 | 2025-04-29 | Passion UA             | W   | 0.551      | 0.361        | 0.097 (0.019)    | -                | -         |     8.35 | blameF, fear, jambo, KRIMZ, matys    |
|           38 |     1675 | 2025-04-25 | MANA eSports           | W   | 0.525      | -            | -                | -                | -         |     0.37 | blameF, fear, jambo, KRIMZ, matys    |
|           37 |     1702 | 2025-04-23 | CYBERSHOKE Esports     | W   | 0.512      | -            | -                | -                | -         |     2.39 | blameF, fear, jambo, KRIMZ, matys    |
|           36 |     1852 | 2025-04-16 | ENCE                   | L   | 0.463      | -            | -                | -                | -         |   -10.59 | b0RUP, blameF, fear, jambo, matys    |
|           35 |     1869 | 2025-04-15 | BetBoom Team           | L   | 0.457      | -            | -                | -                | -         |    -4.86 | b0RUP, blameF, fear, jambo, matys    |
|           34 |     1880 | 2025-04-14 | GamerLegion            | W   | 0.452      | 0.147        | 0.450 (0.030)    | -                | -         |    12.58 | b0RUP, blameF, fear, jambo, matys    |
|           33 |     1891 | 2025-04-14 | BC.Game Esports        | L   | 0.450      | -            | -                | -                | -         |   -12.56 | b0RUP, blameF, fear, jambo, matys    |
|           32 |     2290 | 2025-03-30 | Ninjas in Pyjamas      | L   | 0.351      | -            | -                | -                | -         |    -2.28 | blameF, fear, jambo, KRIMZ, matys    |
|           31 |     2344 | 2025-03-29 | Ninjas in Pyjamas      | W   | 0.345      | 0.769        | 0.193 (0.051)    | -                | -         |     8.75 | blameF, fear, jambo, KRIMZ, matys    |
|           30 |     2400 | 2025-03-28 | Fire Flux Esports      | W   | 0.339      | -            | -                | -                | -         |     0.94 | blameF, fear, jambo, KRIMZ, matys    |
|           29 |     2416 | 2025-03-28 | Sangal Esports         | L   | 0.337      | -            | -                | -                | -         |    -9.24 | blameF, fear, jambo, KRIMZ, matys    |
|           28 |     2479 | 2025-03-27 | AMKAL ESPORTS          | W   | 0.331      | -            | -                | -                | -         |     0.76 | blameF, fear, jambo, KRIMZ, matys    |
|           27 |     2538 | 2025-03-26 | 9INE                   | W   | 0.325      | -            | -                | -                | -         |     3.35 | blameF, fear, jambo, KRIMZ, matys    |
|           26 |     2838 | 2025-03-11 | BC.Game Esports        | L   | 0.226      | -            | -                | -                | -         |    -6.39 | blameF, Burmylov, fear, KRIMZ, matys |
|           25 |     2846 | 2025-03-11 | Nexus Gaming           | W   | 0.225      | -            | -                | -                | -         |     1.25 | blameF, Burmylov, fear, KRIMZ, matys |
|           24 |     2850 | 2025-03-11 | PARIVISION             | L   | 0.224      | -            | -                | -                | -         |    -5.56 | blameF, Burmylov, fear, KRIMZ, matys |
|           23 |     2869 | 2025-03-10 | OG                     | L   | 0.219      | -            | -                | -                | -         |    -5.06 | blameF, Burmylov, fear, KRIMZ, matys |
|           22 |     2882 | 2025-03-10 | Betclic Apogee Esports | L   | 0.218      | -            | -                | -                | -         |    -5.18 | blameF, Burmylov, fear, KRIMZ, matys |
|           21 |     2889 | 2025-03-10 | Ninjas in Pyjamas      | W   | 0.217      | 0.769        | 0.193 (0.032)    | -                | -         |     5.43 | blameF, Burmylov, fear, KRIMZ, matys |
|           20 |     2894 | 2025-03-10 | 9Pandas                | W   | 0.217      | -            | -                | -                | -         |     0.66 | blameF, Burmylov, fear, KRIMZ, matys |
|           19 |     2914 | 2025-03-09 | Leo Team               | W   | 0.212      | -            | -                | -                | -         |     0.16 | blameF, Burmylov, fear, KRIMZ, matys |
|           18 |     2939 | 2025-03-09 | Dynamo Eclot           | W   | 0.211      | -            | -                | -                | -         |     1.09 | blameF, Burmylov, fear, KRIMZ, matys |
|           17 |     2946 | 2025-03-09 | Partizan Esports       | W   | 0.210      | -            | -                | -                | -         |     0.98 | blameF, Burmylov, fear, KRIMZ, matys |
|           16 |     2988 | 2025-03-08 | Ninjas in Pyjamas      | L   | 0.205      | -            | -                | -                | -         |    -1.30 | blameF, Burmylov, fear, KRIMZ, matys |
|           15 |     3019 | 2025-03-08 | Iberian Soul           | W   | 0.204      | -            | -                | -                | -         |     4.39 | blameF, Burmylov, fear, KRIMZ, matys |
|           14 |     3067 | 2025-03-07 | 500                    | W   | 0.198      | -            | -                | -                | -         |     0.55 | blameF, Burmylov, fear, KRIMZ, matys |
|           13 |     3167 | 2025-03-05 | Team Spirit Academy    | W   | 0.186      | -            | -                | -                | -         |     1.22 | blameF, Burmylov, fear, KRIMZ, matys |
|           12 |     3174 | 2025-03-05 | GUN5 Esports           | W   | 0.185      | -            | -                | -                | -         |     1.11 | blameF, Burmylov, fear, KRIMZ, matys |
|           11 |     3205 | 2025-03-03 | FUT Esports            | L   | 0.172      | -            | -                | -                | -         |    -4.15 | blameF, Burmylov, fear, KRIMZ, matys |
|           10 |     3213 | 2025-03-03 | Betclic Apogee Esports | L   | 0.171      | -            | -                | -                | -         |    -4.11 | blameF, Burmylov, fear, KRIMZ, matys |
|            9 |     3261 | 2025-03-01 | GUN5 Esports           | W   | 0.158      | -            | -                | -                | -         |     0.92 | blameF, Burmylov, fear, KRIMZ, matys |
|            8 |     3335 | 2025-02-26 | BC.Game Esports        | W   | 0.139      | -            | -                | -                | -         |     0.38 | blameF, Burmylov, fear, KRIMZ, matys |
|            7 |     3477 | 2025-02-20 | Dynamo Eclot           | L   | 0.098      | -            | -                | -                | -         |    -2.59 | blameF, Burmylov, fear, KRIMZ, matys |
|            6 |     3544 | 2025-02-17 | TPuDCATb TPu           | W   | 0.077      | -            | -                | -                | -         |     0.20 | blameF, Burmylov, fear, KRIMZ, matys |
|            5 |     3570 | 2025-02-15 | Monte                  | L   | 0.066      | -            | -                | -                | -         |    -2.03 | blameF, Burmylov, fear, KRIMZ, matys |
|            4 |     3623 | 2025-02-13 | 500                    | W   | 0.051      | -            | -                | -                | -         |     0.13 | blameF, Burmylov, fear, KRIMZ, matys |
|            3 |     3647 | 2025-02-12 | Partizan Esports       | L   | 0.043      | -            | -                | -                | -         |    -1.16 | blameF, Burmylov, fear, KRIMZ, matys |
|            2 |     3708 | 2025-02-10 | ECSTATIC               | W   | 0.030      | -            | -                | -                | -         |     0.48 | blameF, Burmylov, fear, KRIMZ, matys |
|            1 |     3845 | 2025-02-06 | Team Spirit Academy    | W   | 0.006      | -            | -                | -                | -         |     0.04 | blameF, Burmylov, fear, KRIMZ, matys |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,292.25)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      0.911 | $23,049.33     | $21,003.71      |
| 2025-06-15 |      0.866 | $3,163.22      | $2,738.68       |
| 2025-06-01 |      0.772 | $22,695.16     | $17,513.10      |
| 2025-05-19 |      0.685 | $5,000.00      | $3,423.61       |
| 2025-03-31 |      0.357 | $1,000.00      | $356.67         |
| 2025-03-11 |      0.226 | $10,000.00     | $2,256.48       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
