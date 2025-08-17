### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, vilga, Zana<br />
Global Rank: [121](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [78]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  747.8<br />
<br />
Final Rank Value (747.8) = Starting Rank Value (818.9) + Head To Head Adjustments (-71.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.428[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.148[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 818.9
- 400 + ( ( 0.214 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 818.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       94 | 2025-08-07 | TPuDCATb TPu          | L   | 1.000      | -            | -                | -                | -         |   -12.14 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           13 |      114 | 2025-08-05 | ARCRED                | L   | 1.000      | -            | -                | -                | -         |   -11.98 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           12 |      300 | 2025-07-24 | Eternal Fire          | L   | 1.000      | -            | -                | -                | -         |   -13.39 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           11 |      304 | 2025-07-23 | Betera Esports        | L   | 1.000      | -            | -                | -                | -         |   -14.28 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           10 |      398 | 2025-07-17 | Partizan Esports      | L   | 0.999      | -            | -                | -                | -         |   -11.08 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|            9 |      427 | 2025-07-16 | Metizport             | L   | 0.991      | -            | -                | -                | -         |   -10.80 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|            8 |     1157 | 2025-05-24 | Shimmer               | L   | 0.638      | -            | -                | -                | -         |    -9.30 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            7 |     1180 | 2025-05-22 | Imperial Female       | W   | 0.627      | 0.624        | 0.046 (0.018)    | 0.080 (0.031)    | 1 (0.627) |     8.82 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            6 |     1183 | 2025-05-22 | MIBR Female           | W   | 0.626      | 0.624        | 0.014 (0.005)    | 0.049 (0.019)    | 1 (0.626) |     6.16 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            5 |     2126 | 2025-04-11 | Eco Warriors          | L   | 0.352      | -            | -                | -                | -         |    -7.94 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            4 |     2367 | 2025-04-02 | Nomercy (Female team) | W   | 0.292      | 0.536        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.40 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            3 |     2720 | 2025-03-26 | AKA HERO KAJO         | W   | 0.246      | 0.536        | 0.001 (0.000)    | 0.023 (0.003)    | 0 (0.000) |     1.87 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            2 |     3005 | 2025-03-12 | Akuma (Female team)   | W   | 0.152      | 0.536        | 0.001 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.10 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            1 |     3521 | 2025-02-26 | BIG EQUIPA            | W   | 0.059      | 0.536        | 0.002 (0.000)    | 0.056 (0.002)    | 0 (0.000) |     0.48 | aiM, Nayomy, Qiyarah, ramziiN, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,086.98)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.645 | $26,500.00     | $17,086.98      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
