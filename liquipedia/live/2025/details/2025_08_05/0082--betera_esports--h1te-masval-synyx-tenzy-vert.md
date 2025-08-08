### Roster Details<br />
Team Name: Betera Esports<br />
Roster: h1te, MaSvAl, synyx, tENZY, Vert<br />
Global Rank: [82](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [55]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  864.5<br />
<br />
Final Rank Value (864.5) = Starting Rank Value (777.1) + Head To Head Adjustments (87.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.109[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.285[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 777.1
- 400 + ( ( 0.198 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 777.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       87 | 2025-07-28 | RUBY            | W   | 1.000      | 0.143        | 0.024 (0.003)    | 0.927 (0.132)    | 0 (0.000) |    18.12 | h1te, MaSvAl, synyx, tENZY, Vert |
|           11 |      156 | 2025-07-24 | TPuDCATb TPu    | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.931 (0.133)    | 0 (0.000) |    16.35 | h1te, MaSvAl, synyx, tENZY, Vert |
|           10 |      166 | 2025-07-23 | NIP Impact      | W   | 1.000      | 0.143        | 0.044 (0.006)    | 0.120 (0.017)    | 0 (0.000) |    14.18 | h1te, MaSvAl, synyx, tENZY, Vert |
|            9 |      210 | 2025-07-19 | TEAM NEXT LEVEL | L   | 1.000      | -            | -                | -                | -         |    -2.46 | H1te, MaSvAl, synyx, tENZY, Vert |
|            8 |      310 | 2025-07-15 | 9INE            | W   | 1.000      | 0.371        | 0.020 (0.007)    | 0.763 (0.283)    | 0 (0.000) |    23.21 | H1te, MaSvAl, synyx, tENZY, Vert |
|            7 |      335 | 2025-07-14 | GUN5 Esports    | L   | 1.000      | -            | -                | -                | -         |    -9.50 | H1te, MaSvAl, synyx, tENZY, Vert |
|            6 |      355 | 2025-07-13 | 9INE            | W   | 1.000      | 0.371        | 0.020 (0.007)    | 0.763 (0.283)    | 0 (0.000) |    24.42 | H1te, MaSvAl, synyx, tENZY, Vert |
|            5 |      456 | 2025-07-09 | ESC Gaming      | L   | 1.000      | -            | -                | -                | -         |   -11.49 | H1te, MaSvAl, synyx, tENZY, Vert |
|            4 |      463 | 2025-07-09 | MAJOR WINNERS   | W   | 1.000      | 0.147        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.16 | H1te, MaSvAl, synyx, tENZY, Vert |
|            3 |     1360 | 2025-05-09 | PARIVISION      | L   | 0.599      | -            | -                | -                | -         |    -4.07 | h1te, MaSvAl, synyx, tENZY, Vert |
|            2 |     1384 | 2025-05-08 | FUT Esports     | W   | 0.592      | 0.500        | 0.298 (0.088)    | 0.813 (0.241)    | 0 (0.000) |    16.18 | h1te, MaSvAl, synyx, tENZY, Vert |
|            1 |     1408 | 2025-05-07 | B8              | L   | 0.585      | -            | -                | -                | -         |    -0.79 | h1te, MaSvAl, synyx, tENZY, Vert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,202.71)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.612 | $8,500.00      | $5,202.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
