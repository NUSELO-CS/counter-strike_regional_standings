### Roster Details<br />
Team Name: G2 Esports<br />
Roster: HeavyGod, huNter-, malbsMd, matys, SunPayus<br />
Global Rank: [12](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  1584.0<br />
<br />
Final Rank Value (1584.0) = Starting Rank Value (1536.1) + Head To Head Adjustments (47.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.719[<sup>1</sup>](#table2)
- Bounty Collected: 0.589[<sup>2</sup>](#table1)
- Opponent Network: 0.309[<sup>2</sup>](#table1)
- LAN Wins: 0.753[<sup>2</sup>](#table1)

The average of these factors is 0.592<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1536.1
- 400 + ( ( 0.592 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 1536.1


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
|           30 |       39 | 2025-07-29 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -13.21 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           29 |       48 | 2025-07-28 | 3DMAX              | W   | 1.000      | 1.000        | 0.335 (0.335)    | 0.571 (0.571)    | 1 (1.000) |    14.93 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           28 |       65 | 2025-07-27 | Team Vitality      | L   | 1.000      | -            | -                | -                | -         |    -1.98 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           27 |       95 | 2025-07-26 | FURIA              | W   | 1.000      | 1.000        | 0.481 (0.481)    | 0.621 (0.621)    | 1 (1.000) |    17.46 | HeavyGod, huNter-, malbsMd, matys, SunPayus |
|           26 |      641 | 2025-06-15 | The MongolZ        | L   | 0.866      | -            | -                | -                | -         |    -6.30 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           25 |      666 | 2025-06-14 | Natus Vincere      | L   | 0.859      | -            | -                | -                | -         |    -8.20 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           24 |      717 | 2025-06-13 | Aurora Gaming      | W   | 0.852      | -            | -                | -                | 1 (0.852) |    15.57 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           23 |      733 | 2025-06-12 | PaiN Gaming        | W   | 0.847      | -            | -                | -                | 1 (0.847) |     8.56 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           22 |      747 | 2025-06-12 | 3DMAX              | L   | 0.845      | -            | -                | -                | -         |   -11.59 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           21 |     1017 | 2025-05-21 | GamerLegion        | L   | 0.701      | -            | -                | -                | -         |   -10.74 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           20 |     1022 | 2025-05-21 | 3DMAX              | W   | 0.699      | 1.000        | 0.335 (0.234)    | 0.571 (0.399)    | 1 (0.699) |    12.44 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           19 |     1042 | 2025-05-20 | The MongolZ        | L   | 0.694      | -            | -                | -                | -         |    -4.31 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           18 |     1073 | 2025-05-19 | Lynn Vision Gaming | W   | 0.687      | 1.000        | 0.233 (0.160)    | 0.639 (0.439)    | 1 (0.687) |     8.25 | hades, HeavyGod, huNter-, malbsMd, Snax     |
|           17 |     1907 | 2025-04-13 | Team Falcons       | L   | 0.445      | -            | -                | -                | -         |    -4.40 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           16 |     1920 | 2025-04-12 | Complexity         | W   | 0.439      | 1.000        | 0.256 (0.112)    | 0.423 (0.186)    | 1 (0.439) |     3.96 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           15 |     1945 | 2025-04-11 | Virtus.pro         | W   | 0.431      | 1.000        | 0.159 (0.069)    | 0.414 (0.179)    | 1 (0.431) |     4.30 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           14 |     2044 | 2025-04-08 | Complexity         | W   | 0.410      | 1.000        | 0.256 (0.105)    | 0.423 (0.174)    | 1 (0.410) |     3.56 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           13 |     2070 | 2025-04-07 | Rare Atom          | W   | 0.403      | 1.000        | -                | 0.468 (0.188)    | 1 (0.403) |     1.18 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           12 |     2085 | 2025-04-06 | GamerLegion        | W   | 0.396      | 1.000        | 0.453 (0.180)    | 0.420 (0.166)    | -         |     7.23 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           11 |     2405 | 2025-03-28 | MOUZ               | L   | 0.338      | -            | -                | -                | -         |    -1.17 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|           10 |     2598 | 2025-03-24 | The MongolZ        | W   | 0.312      | 0.715        | 1.000 (0.223)    | -                | -         |     8.36 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            9 |     2607 | 2025-03-23 | M80                | W   | 0.306      | 0.715        | -                | 0.767 (0.168)    | -         |     1.20 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            8 |     2622 | 2025-03-22 | Aurora Gaming      | L   | 0.299      | -            | -                | -                | -         |    -3.28 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            7 |     2667 | 2025-03-20 | Imperial Esports   | W   | 0.284      | -            | -                | -                | -         |     0.38 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            6 |     2803 | 2025-03-13 | MOUZ               | L   | 0.239      | -            | -                | -                | -         |    -0.83 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            5 |     2836 | 2025-03-11 | GamerLegion        | W   | 0.226      | 1.000        | 0.453 (0.102)    | -                | -         |     4.26 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            4 |     2871 | 2025-03-10 | Natus Vincere      | L   | 0.219      | -            | -                | -                | -         |    -1.64 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            3 |     2941 | 2025-03-09 | SAW                | W   | 0.211      | -            | -                | -                | -         |     2.07 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            2 |     3015 | 2025-03-08 | The MongolZ        | L   | 0.204      | -            | -                | -                | -         |    -0.92 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |
|            1 |     3066 | 2025-03-07 | PaiN Gaming        | W   | 0.199      | -            | -                | -                | -         |     2.68 | HeavyGod, huNter-, m0NESY, malbsMd, Snax    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($177,520.00)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-03 |      1.000 | $38,000.00     | $38,000.00      |
| 2025-05-25 |      0.726 | $47,000.00     | $34,120.69      |
| 2025-04-13 |      0.445 | $187,500.00    | $83,385.42      |
| 2025-03-30 |      0.352 | $20,000.00     | $7,030.56       |
| 2025-03-16 |      0.258 | $58,000.00     | $14,983.33      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
