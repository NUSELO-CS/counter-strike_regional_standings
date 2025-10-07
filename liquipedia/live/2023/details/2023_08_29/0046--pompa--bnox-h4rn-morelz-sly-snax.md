### Roster Details<br />
Team Name: Pompa<br />
Roster: bnox, h4rn, morelz, SLY, Snax<br />
Global Rank: [46](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [41]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  998.1<br />
<br />
Final Rank Value (998.1) = Starting Rank Value (1086.3) + Head To Head Adjustments (-88.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.376[<sup>2</sup>](#table1)
- Opponent Network: 0.285[<sup>2</sup>](#table1)
- LAN Wins: 0.344[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.626[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1086.3
- 400 + ( ( 0.355 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1086.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |       24 | 2023-08-27 | ECLOT             | W   | 1.000      | 0.371        | 0.114 (0.042)    | 0.710 (0.263)    | 1 (1.000) |    18.07 | bnox, h4rn, morelz, SLY, Snax    |
|           26 |       45 | 2023-08-26 | ECLOT             | W   | 1.000      | 0.371        | 0.114 (0.042)    | 0.710 (0.263)    | 1 (1.000) |    18.95 | bnox, h4rn, morelz, SLY, Snax    |
|           25 |       67 | 2023-08-26 | 500               | W   | 1.000      | 0.371        | 0.075 (0.028)    | 1.000 (0.371)    | 1 (1.000) |    16.91 | bnox, h4rn, morelz, SLY, Snax    |
|           24 |      165 | 2023-08-22 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -15.61 | bnox, h4rn, morelz, SLY, Snax    |
|           23 |      184 | 2023-08-21 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -11.63 | bnox, h4rn, morelz, SLY, Snax    |
|           22 |      208 | 2023-08-19 | KS                | L   | 1.000      | -            | -                | -                | -         |   -22.71 | bnox, h4rn, morelz, SLY, Snax    |
|           21 |      214 | 2023-08-18 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.037 (0.016)    | 0.915 (0.398)    | 0 (0.000) |     8.48 | bnox, h4rn, morelz, SLY, Snax    |
|           20 |      225 | 2023-08-18 | Zero Tenacity     | W   | 1.000      | 0.333        | 0.037 (0.012)    | 0.915 (0.305)    | 0 (0.000) |     9.11 | bnox, h4rn, morelz, SLY, Snax    |
|           19 |      233 | 2023-08-17 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -22.88 | bnox, h4rn, morelz, SLY, Snax    |
|           18 |      240 | 2023-08-17 | Singularity       | L   | 1.000      | -            | -                | -                | -         |   -26.00 | bnox, h4rn, morelz, SLY, Snax    |
|           17 |      281 | 2023-08-15 | Enterprise        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.96 | bnox, h4rn, morelz, SLY, Snax    |
|           16 |      295 | 2023-08-14 | Sampi             | W   | 1.000      | 0.435        | 0.087 (0.038)    | 1.000 (0.435)    | 0 (0.000) |    11.25 | bnox, h4rn, morelz, SLY, Snax    |
|           15 |      308 | 2023-08-13 | Anonymo           | W   | 1.000      | 0.143        | 0.035 (0.005)    | 0.712 (0.102)    | 0 (0.000) |    10.19 | bnox, h4rn, morelz, SLY, Snax    |
|           14 |      316 | 2023-08-13 | ThunderFlash      | W   | 1.000      | 0.143        | -                | 0.724 (0.103)    | 0 (0.000) |    10.70 | bnox, h4rn, morelz, SLY, Snax    |
|           13 |      322 | 2023-08-13 | PACT              | W   | 1.000      | 0.143        | 0.018 (0.003)    | -                | 0 (0.000) |    10.85 | bnox, h4rn, morelz, SLY, Snax    |
|           12 |      367 | 2023-08-12 | PGE Turow         | W   | 1.000      | 0.143        | 0.045 (0.006)    | -                | -         |    10.07 | bnox, h4rn, morelz, SLY, Snax    |
|           11 |      400 | 2023-08-11 | Aurora Young Blud | W   | 1.000      | -            | -                | -                | -         |     3.59 | bnox, h4rn, morelz, SLY, Snax    |
|           10 |      412 | 2023-08-11 | Benched Heroes    | W   | 1.000      | -            | -                | -                | -         |     1.22 | bnox, h4rn, morelz, SLY, Snax    |
|            9 |      438 | 2023-08-10 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -23.34 | bnox, h4rn, morelz, SLY, Snax    |
|            8 |      604 | 2023-08-03 | FTW               | L   | 1.000      | -            | -                | -                | -         |   -22.87 | Blytz, Demho, h4rn, morelz, Snax |
|            7 |      623 | 2023-08-02 | Sampi             | L   | 1.000      | -            | -                | -                | -         |   -16.95 | Blytz, Demho, h4rn, morelz, Snax |
|            6 |      713 | 2023-07-29 | 9 Pandas          | W   | 0.992      | 0.384        | 0.074 (0.028)    | 1.000 (0.381)    | -         |    18.02 | Blytz, Demho, h4rn, morelz, Snax |
|            5 |      763 | 2023-07-24 | HAVU              | L   | 0.959      | -            | -                | -                | -         |   -19.56 | Blytz, Demho, h4rn, morelz, Snax |
|            4 |      788 | 2023-07-22 | Espionage         | L   | 0.948      | -            | -                | -                | -         |   -15.53 | Blytz, Demho, h4rn, morelz, Snax |
|            3 |      815 | 2023-07-21 | ARCRED            | L   | 0.938      | -            | -                | -                | -         |   -21.54 | Blytz, Demho, h4rn, morelz, Snax |
|            2 |      839 | 2023-07-19 | B8                | W   | 0.927      | 0.435        | -                | 0.561 (0.226)    | -         |     6.43 | Blytz, Demho, h4rn, morelz, Snax |
|            1 |     1008 | 2023-07-11 | Sashi Mix         | L   | 0.874      | -            | -                | -                | -         |   -26.32 | Blytz, h4rn, s0und, SLY, Snax    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,500.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-08-21 |      1.000 | $500.00        | $500.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
