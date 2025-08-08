### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, vilga, Zana<br />
Global Rank: [106](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  764.4<br />
<br />
Final Rank Value (764.4) = Starting Rank Value (812.4) + Head To Head Adjustments (-48.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.424[<sup>1</sup>](#table2)
- Bounty Collected: 0.279[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.155[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.120[<sup>2</sup>](#table1)

The average of these factors is 0.217<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 812.4
- 400 + ( ( 0.217 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 812.4


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
|           12 |      162 | 2025-07-24 | Eternal Fire          | L   | 1.000      | -            | -                | -                | -         |   -13.73 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           11 |      166 | 2025-07-23 | Betera Esports        | L   | 1.000      | -            | -                | -                | -         |   -14.16 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           10 |      260 | 2025-07-17 | Partizan Esports      | L   | 1.000      | -            | -                | -                | -         |   -11.59 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|            9 |      289 | 2025-07-16 | Metizport             | L   | 1.000      | -            | -                | -                | -         |   -11.62 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|            8 |     1019 | 2025-05-24 | Supernova Comets      | L   | 0.698      | -            | -                | -                | -         |   -10.37 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            7 |     1042 | 2025-05-22 | Imperial Female       | W   | 0.687      | 0.624        | 0.047 (0.020)    | 0.107 (0.046)    | 1 (0.687) |     9.50 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            6 |     1045 | 2025-05-22 | MIBR Female           | W   | 0.686      | 0.624        | 0.013 (0.006)    | 0.073 (0.031)    | 1 (0.686) |     6.75 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            5 |     1988 | 2025-04-11 | Eco Warriors          | L   | 0.412      | -            | -                | -                | -         |    -9.34 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            4 |     2229 | 2025-04-02 | Nomercy (Female team) | W   | 0.352      | 0.338        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.69 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            3 |     2582 | 2025-03-26 | AKA HERO KAJO         | W   | 0.306      | 0.338        | 0.001 (0.000)    | 0.032 (0.003)    | 0 (0.000) |     2.31 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            2 |     2867 | 2025-03-12 | Akuma (Female team)   | W   | 0.212      | 0.338        | 0.001 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     1.55 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            1 |     3383 | 2025-02-26 | BIG EQUIPA            | W   | 0.119      | 0.338        | 0.002 (0.000)    | 0.074 (0.003)    | 0 (0.000) |     0.96 | aiM, Nayomy, Qiyarah, ramziiN, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,675.14)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.705 | $26,500.00     | $18,675.14      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
