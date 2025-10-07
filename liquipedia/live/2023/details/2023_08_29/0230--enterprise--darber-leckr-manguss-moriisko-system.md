### Roster Details<br />
Team Name: Enterprise<br />
Roster: darber, leckr, manguss, MoriiSko, SYSTEM<br />
Global Rank: [230](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [140]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  609.7<br />
<br />
Final Rank Value (609.7) = Starting Rank Value (677.2) + Head To Head Adjustments (-67.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.194[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.2
- 400 + ( ( 0.143 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 677.2


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
|           18 |      265 | 2023-08-16 | KS              | L   | 1.000      | -            | -                | -                | -         |    -8.48 | darber, leckr, manguss, MoriiSko, SYSTEM |
|           17 |      281 | 2023-08-15 | Pompa           | L   | 1.000      | -            | -                | -                | -         |    -2.96 | darber, leckr, manguss, MoriiSko, SYSTEM |
|           16 |      641 | 2023-08-01 | ENCE Academy    | L   | 1.000      | -            | -                | -                | -         |    -9.09 | darber, leckr, manguss, MoriiSko, SYSTEM |
|           15 |      860 | 2023-07-18 | Nemiga          | L   | 0.920      | -            | -                | -                | -         |   -18.18 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|           14 |      862 | 2023-07-18 | ECLOT           | L   | 0.919      | -            | -                | -                | -         |    -3.17 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|           13 |      872 | 2023-07-17 | GhoulsW         | L   | 0.914      | -            | -                | -                | -         |   -19.40 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|           12 |      876 | 2023-07-17 | Nemiga          | W   | 0.913      | 0.143        | 0.000 (0.000)    | 0.217 (0.028)    | 0 (0.000) |     8.81 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|           11 |      881 | 2023-07-17 | SINNERS         | L   | 0.912      | -            | -                | -                | -         |    -3.74 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|           10 |      960 | 2023-07-13 | Ambush          | W   | 0.885      | 0.371        | 0.000 (0.000)    | 0.114 (0.037)    | 0 (0.000) |     8.10 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|            9 |     1067 | 2023-06-29 | SINNERS Academy | L   | 0.794      | -            | -                | -                | -         |   -17.82 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|            8 |     1069 | 2023-06-29 | Ukraine         | L   | 0.793      | -            | -                | -                | -         |    -7.77 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|            7 |     1079 | 2023-06-26 | Singularity     | L   | 0.771      | -            | -                | -                | -         |    -9.05 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|            6 |     1085 | 2023-06-25 | BRUTE           | W   | 0.764      | 0.333        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.93 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|            5 |     1095 | 2023-06-24 | Zero Tenacity   | L   | 0.758      | -            | -                | -                | -         |    -6.62 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|            4 |     1108 | 2023-06-20 | los kogutos     | L   | 0.733      | -            | -                | -                | -         |    -6.87 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|            3 |     1113 | 2023-06-19 | ENCE Academy    | W   | 0.727      | 0.338        | 0.014 (0.003)    | 0.580 (0.143)    | 0 (0.000) |    15.40 | leckr, manguss, MoriiSko, SYSTEM, zur1s  |
|            2 |     1136 | 2023-06-18 | Zero Tenacity   | L   | 0.718      | -            | -                | -                | -         |    -6.69 | leckr, M1key, MoriiSko, SYSTEM, zur1s    |
|            1 |     1160 | 2023-06-17 | Ignis Serpens   | W   | 0.712      | 0.338        | 0.030 (0.007)    | 0.102 (0.024)    | 0 (0.000) |    13.11 | leckr, M1key, MoriiSko, SYSTEM, zur1s    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,159.20)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-26 |      0.773 | $1,500.00      | $1,159.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
