### Roster Details<br />
Team Name: BOSS<br />
Roster: ben1337, Bwills, d4rty, Fruitcupx, SLIGHT<br />
Global Rank: [119](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [28]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  738.5<br />
<br />
Final Rank Value (738.5) = Starting Rank Value (684.1) + Head To Head Adjustments (54.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.331[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.1
- 400 + ( ( 0.149 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 684.1


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
|           13 |       20 | 2025-08-02 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -3.85 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           12 |       32 | 2025-08-01 | Getting Info     | W   | 1.000      | 0.143        | 0.011 (0.002)    | 0.394 (0.056)    | 0 (0.000) |    21.63 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           11 |      118 | 2025-07-26 | BLUEJAYS         | L   | 1.000      | -            | -                | -                | -         |    -7.07 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT  |
|           10 |      349 | 2025-07-13 | Marsborne        | L   | 1.000      | -            | -                | -                | -         |    -9.10 | Bwills, d4rty, Fruitcupx, sauceboy, SLIGHT |
|            9 |      363 | 2025-07-12 | Getting Info     | L   | 1.000      | -            | -                | -                | -         |   -11.79 | Bwills, d4rty, Fruitcupx, sauceboy, SLIGHT |
|            8 |      369 | 2025-07-12 | Arrival Seven    | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.210 (0.030)    | 0 (0.000) |    15.38 | Bwills, d4rty, Fruitcupx, sauceboy, SLIGHT |
|            7 |      392 | 2025-07-11 | Golden Horde     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.060 (0.009)    | 0 (0.000) |     6.83 | Bwills, d4rty, Fruitcupx, sauceboy, SLIGHT |
|            6 |      531 | 2025-06-30 | Getting Info     | L   | 0.947      | -            | -                | -                | -         |   -12.06 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            5 |      543 | 2025-06-28 | Akimbo Esports   | W   | 0.934      | 0.333        | 0.007 (0.002)    | 0.206 (0.064)    | 0 (0.000) |    11.80 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            4 |      546 | 2025-06-27 | Tsunami Esports  | W   | 0.927      | 0.333        | 0.001 (0.000)    | 0.206 (0.064)    | 0 (0.000) |    11.47 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            3 |      705 | 2025-06-14 | Party Astronauts | W   | 0.840      | 0.333        | 0.004 (0.001)    | 0.307 (0.086)    | 0 (0.000) |    14.05 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            2 |      805 | 2025-06-11 | Akimbo Esports   | W   | 0.821      | 0.333        | 0.007 (0.002)    | 0.206 (0.056)    | 0 (0.000) |    10.68 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |
|            1 |      832 | 2025-06-09 | Subtick          | W   | 0.807      | 0.333        | 0.000 (0.000)    | 0.042 (0.011)    | 0 (0.000) |     6.41 | d4rty, Fruitcupx, Minus, SLIGHT, snav      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,841.39)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-30 |      0.947 | $3,000.00      | $2,841.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
