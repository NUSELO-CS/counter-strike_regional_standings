### Roster Details<br />
Team Name: BOSS<br />
Roster: ben1337, Bwills, d4rty, Fruitcupx, SLIGHT<br />
Global Rank: [106](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_15.md)<br />
Regional Rank: [25]( ../../standings_americas_2025_08_15.md)<br />
<br />
Final Rank Value:  765.0<br />
<br />
Final Rank Value (765.0) = Starting Rank Value (699.8) + Head To Head Adjustments (65.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.330[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 699.8
- 400 + ( ( 0.154 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 699.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       18 | 2025-08-12 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -3.41 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           16 |       22 | 2025-08-11 | Marca Registrada | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.191 (0.064)    | 0 (0.000) |    12.22 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           15 |       57 | 2025-08-09 | Marsborne        | L   | 1.000      | -            | -                | -                | -         |    -8.19 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           14 |       82 | 2025-08-07 | Marca Registrada | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.191 (0.064)    | 0 (0.000) |    12.22 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           13 |      141 | 2025-08-02 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -3.06 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           12 |      156 | 2025-08-01 | Getting Info     | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.343 (0.049)    | 0 (0.000) |    21.42 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           11 |      256 | 2025-07-26 | BLUEJAYS         | L   | 1.000      | -            | -                | -                | -         |    -6.56 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           10 |      487 | 2025-07-13 | Marsborne        | L   | 0.973      | -            | -                | -                | -         |    -8.82 | Bwills, d4rty, Fruitcupx, sauceboy, SLIGHT |
|            9 |      501 | 2025-07-12 | Getting Info     | L   | 0.967      | -            | -                | -                | -         |   -11.74 | Bwills, d4rty, Fruitcupx, sauceboy, SLIGHT |
|            8 |      507 | 2025-07-12 | Arrival Seven    | W   | 0.966      | 0.143        | 0.006 (0.001)    | 0.157 (0.022)    | 0 (0.000) |    14.92 | Bwills, d4rty, Fruitcupx, sauceboy, SLIGHT |
|            7 |      530 | 2025-07-11 | Golden Horde     | W   | 0.960      | 0.143        | 0.000 (0.000)    | 0.049 (0.007)    | 0 (0.000) |     6.29 | Bwills, d4rty, Fruitcupx, sauceboy, SLIGHT |
|            6 |      669 | 2025-06-30 | Getting Info     | L   | 0.887      | -            | -                | -                | -         |   -11.64 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            5 |      681 | 2025-06-28 | Akimbo Esports   | W   | 0.874      | 0.333        | 0.007 (0.002)    | 0.169 (0.049)    | 0 (0.000) |    11.10 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            4 |      684 | 2025-06-27 | Legacy Kingdom   | W   | 0.867      | 0.333        | 0.001 (0.000)    | 0.212 (0.061)    | 0 (0.000) |    11.56 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            3 |      843 | 2025-06-14 | Party Astronauts | W   | 0.781      | 0.333        | 0.005 (0.001)    | 0.241 (0.063)    | 0 (0.000) |    13.32 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            2 |      943 | 2025-06-11 | Akimbo Esports   | W   | 0.761      | 0.333        | 0.007 (0.002)    | 0.169 (0.043)    | 0 (0.000) |     9.95 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            1 |      970 | 2025-06-09 | Subtick          | W   | 0.747      | 0.333        | 0.000 (0.000)    | 0.035 (0.009)    | 0 (0.000) |     5.59 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,911.60)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-15 |      1.000 | $250.00        | $250.00         |
| 2025-06-30 |      0.887 | $3,000.00      | $2,661.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
