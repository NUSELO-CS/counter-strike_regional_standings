### Roster Details<br />
Team Name: G2 Esports<br />
Roster: HeavyGod, huNter-, malbsMd, matys, SunPayus<br />
Global Rank: [13](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [10]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  1627.3<br />
<br />
Final Rank Value (1627.3) = Starting Rank Value (1571.2) + Head To Head Adjustments (56.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.740[<sup>1</sup>](#table2)
- Bounty Collected: 0.636[<sup>2</sup>](#table1)
- Opponent Network: 0.346[<sup>2</sup>](#table1)
- LAN Wins: 0.753[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.355[<sup>2</sup>](#table1)

The average of these factors is 0.619<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1571.2
- 400 + ( ( 0.619 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 1571.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       39 | 2025-07-29 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -12.44 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           29 |       48 | 2025-07-28 | 3DMAX              | W   | 1.000      | 1.000        | 0.374 (0.374)    | 0.571 (0.571)    | 1 (1.000) |    16.26 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           28 |       65 | 2025-07-27 | Team Vitality      | L   | 1.000      | -            | -                | -                | -         |    -2.35 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           27 |       95 | 2025-07-26 | FURIA              | W   | 1.000      | 1.000        | 0.478 (0.478)    | 0.621 (0.621)    | 1 (1.000) |    18.53 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           26 |      641 | 2025-06-15 | The MongolZ        | L   | 0.866      | -            | -                | -                | -         |    -6.87 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           25 |      666 | 2025-06-14 | Natus Vincere      | L   | 0.859      | -            | -                | -                | -         |    -8.29 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           24 |      717 | 2025-06-13 | Aurora Gaming      | W   | 0.852      | 1.000        | 0.595 (0.507)    | 0.464 (0.395)    | 1 (0.852) |    15.27 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           23 |      733 | 2025-06-12 | PaiN Gaming        | W   | 0.847      | 1.000        | 0.299 (0.254)    | 0.368 (0.312)    | 1 (0.847) |    11.33 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           22 |      747 | 2025-06-12 | 3DMAX              | L   | 0.845      | -            | -                | -                | -         |    -9.98 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           21 |     1017 | 2025-05-21 | GamerLegion        | L   | 0.701      | -            | -                | -                | -         |   -11.35 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           20 |     1022 | 2025-05-21 | 3DMAX              | W   | 0.699      | 1.000        | 0.374 (0.261)    | 0.571 (0.399)    | 1 (0.699) |    13.82 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           19 |     1042 | 2025-05-20 | The MongolZ        | L   | 0.694      | -            | -                | -                | -         |    -4.79 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           18 |     1073 | 2025-05-19 | Lynn Vision Gaming | W   | 0.687      | 1.000        | 0.275 (0.189)    | 0.639 (0.439)    | 1 (0.687) |    10.51 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           17 |     1907 | 2025-04-13 | Team Falcons       | L   | 0.445      | -            | -                | -                | -         |    -5.00 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           16 |     1920 | 2025-04-12 | Complexity         | W   | 0.439      | 1.000        | 0.255 (0.112)    | 0.423 (0.186)    | 1 (0.439) |     3.47 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           15 |     1945 | 2025-04-11 | Virtus.pro         | W   | 0.431      | 1.000        | -                | 0.414 (0.179)    | 1 (0.431) |     6.32 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           14 |     2044 | 2025-04-08 | Complexity         | W   | 0.410      | 1.000        | 0.255 (0.104)    | 0.423 (0.174)    | 1 (0.410) |     3.11 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           13 |     2070 | 2025-04-07 | Rare Atom          | W   | 0.403      | 1.000        | -                | 0.468 (0.188)    | 1 (0.403) |     1.15 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           12 |     2085 | 2025-04-06 | GamerLegion        | W   | 0.396      | 1.000        | 0.450 (0.178)    | -                | -         |     6.72 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           11 |     2405 | 2025-03-28 | MOUZ               | L   | 0.338      | -            | -                | -                | -         |    -1.24 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           10 |     2598 | 2025-03-24 | The MongolZ        | W   | 0.312      | 0.715        | 1.000 (0.223)    | -                | -         |     8.12 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            9 |     2607 | 2025-03-23 | M80                | W   | 0.306      | -            | -                | -                | -         |     1.16 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            8 |     2622 | 2025-03-22 | Aurora Gaming      | L   | 0.299      | -            | -                | -                | -         |    -3.44 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            7 |     2667 | 2025-03-20 | Imperial Esports   | W   | 0.284      | -            | -                | -                | -         |     0.33 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            6 |     2803 | 2025-03-13 | MOUZ               | L   | 0.239      | -            | -                | -                | -         |    -0.88 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            5 |     2836 | 2025-03-11 | GamerLegion        | W   | 0.226      | -            | -                | -                | -         |     3.96 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            4 |     2871 | 2025-03-10 | Natus Vincere      | L   | 0.219      | -            | -                | -                | -         |    -1.60 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            3 |     2941 | 2025-03-09 | SAW                | W   | 0.211      | -            | -                | -                | -         |     1.79 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            2 |     3015 | 2025-03-08 | The MongolZ        | L   | 0.204      | -            | -                | -                | -         |    -1.09 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            1 |     3066 | 2025-03-07 | PaiN Gaming        | W   | 0.199      | -            | -                | -                | -         |     3.60 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($195,772.78)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.45) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $38,000.00     | $38,000.00      |
| 2025-06-22 |      0.913 | $20,000.00     | $18,252.78      |
| 2025-05-25 |      0.726 | $47,000.00     | $34,120.69      |
| 2025-04-13 |      0.445 | $187,500.00    | $83,385.42      |
| 2025-03-30 |      0.352 | $20,000.00     | $7,030.56       |
| 2025-03-16 |      0.258 | $58,000.00     | $14,983.33      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
