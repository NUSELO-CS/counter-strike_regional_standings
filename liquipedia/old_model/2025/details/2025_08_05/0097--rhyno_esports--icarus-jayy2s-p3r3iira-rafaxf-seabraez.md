### Roster Details<br />
Team Name: Rhyno Esports<br />
Roster: Icarus, Jayy2s, P3R3IIRA, rafaxF, seabraez<br />
Global Rank: [97](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [67]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  808.8<br />
<br />
Final Rank Value (808.8) = Starting Rank Value (802.3) + Head To Head Adjustments (6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.318[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.143[<sup>2</sup>](#table1)

The average of these factors is 0.211<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.3
- 400 + ( ( 0.211 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 802.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       98 | 2025-07-27 | Iberian Soul           | L   | 1.000      | -            | -                | -                | -         |    -2.57 | Icarus, Jayy2s, P3R3IIRA, rafaxF, seabraez  |
|           12 |      106 | 2025-07-27 | É MÁFIA                | W   | 1.000      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.86 | Icarus, Jayy2s, P3R3IIRA, rafaxF, seabraez  |
|           11 |     1316 | 2025-05-11 | Desemprego             | W   | 0.611      | 0.315        | 0.004 (0.001)    | 0.124 (0.024)    | 1 (0.611) |    10.68 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|           10 |     1338 | 2025-05-10 | LA MASIA               | W   | 0.604      | 0.315        | 0.008 (0.001)    | 0.023 (0.004)    | 1 (0.604) |     5.48 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            9 |     1362 | 2025-05-09 | Impulse GW             | W   | 0.598      | 0.315        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.598) |     3.27 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            8 |     2684 | 2025-03-21 | TPuDCATb TPu           | L   | 0.272      | -            | -                | -                | -         |    -3.82 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            7 |     2817 | 2025-03-15 | Desemprego             | L   | 0.232      | -            | -                | -                | -         |    -3.40 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            6 |     2821 | 2025-03-15 | ECSTATIC               | L   | 0.231      | -            | -                | -                | -         |    -0.52 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            5 |     3101 | 2025-03-07 | Zero Tenacity          | L   | 0.179      | -            | -                | -                | -         |    -2.34 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            4 |     3356 | 2025-02-27 | BC.Game Esports        | L   | 0.123      | -            | -                | -                | -         |    -1.77 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            3 |     3402 | 2025-02-26 | Alliance               | L   | 0.116      | -            | -                | -                | -         |    -0.36 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            2 |     3526 | 2025-02-20 | Betclic Apogee Esports | L   | 0.077      | -            | -                | -                | -         |    -0.51 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |
|            1 |     3550 | 2025-02-19 | PARIVISION             | L   | 0.071      | -            | -                | -                | -         |    -0.50 | aragornN, Icarus, krazy, P3R3IIRA, seabraez |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,435.32)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-27 |      1.000 | $587.33        | $587.33         |
| 2025-05-11 |      0.611 | $2,813.40      | $1,718.13       |
| 2025-03-16 |      0.238 | $546.12        | $129.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
