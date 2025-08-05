### Roster Details<br />
Team Name: Copenhagen Wolves (American organization)<br />
Roster: aNdu, b1elany, Jackinho, kwezz, Tapewaare<br />
Global Rank: [134](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [85]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  694.1<br />
<br />
Final Rank Value (694.1) = Starting Rank Value (674.4) + Head To Head Adjustments (19.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.4
- 400 + ( ( 0.144 - 0.000 ) / ( 0.839 - 0.000 ) ) * 1600 = 674.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2182 | 2025-04-02 | KOLESIE                | W   | 0.372      | 0.500        | 0.048 (0.009)    | 0.543 (0.101)    | 0 (0.000) |    10.84 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|           12 |     2535 | 2025-03-26 | TPuDCATb TPu           | L   | 0.326      | -            | -                | -                | -         |    -2.92 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|           11 |     2690 | 2025-03-19 | Monte                  | W   | 0.279      | 0.500        | 0.004 (0.001)    | 0.175 (0.024)    | 0 (0.000) |     5.17 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|           10 |     3370 | 2025-02-25 | SINNERS Esports        | W   | 0.133      | 0.500        | 0.026 (0.002)    | 0.476 (0.032)    | 0 (0.000) |     3.31 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|            9 |     3517 | 2025-02-18 | 9Pandas                | W   | 0.086      | 0.500        | 0.028 (0.001)    | 0.260 (0.011)    | 0 (0.000) |     1.92 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|            8 |     3523 | 2025-02-18 | BC.Game Esports        | L   | 0.085      | -            | -                | -                | -         |    -0.79 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            7 |     3541 | 2025-02-17 | Portuguese Family      | W   | 0.078      | 0.435        | 0.000 (0.000)    | 0.065 (0.002)    | 0 (0.000) |     0.81 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            6 |     3606 | 2025-02-14 | Inputprayers           | W   | 0.057      | 0.435        | 0.000 (0.000)    | 0.060 (0.002)    | 0 (0.000) |     0.52 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            5 |     3646 | 2025-02-12 | Sashi Esport           | L   | 0.044      | -            | -                | -                | -         |    -0.19 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            4 |     3666 | 2025-02-11 | 9INE                   | L   | 0.038      | -            | -                | -                | -         |    -0.09 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            3 |     3738 | 2025-02-09 | Iberian Soul           | W   | 0.024      | 0.384        | 0.183 (0.002)    | 1.000 (0.009)    | 0 (0.000) |     0.74 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            2 |     3832 | 2025-02-07 | NXT                    | W   | 0.011      | 0.384        | 0.001 (0.000)    | 0.274 (0.001)    | 0 (0.000) |     0.24 | aNdu, b1elany, Jackinho, szejn, Tapewaare |
|            1 |     3855 | 2025-02-06 | Betclic Apogee Esports | W   | 0.005      | 0.384        | 0.043 (0.000)    | 0.350 (0.001)    | 0 (0.000) |     0.13 | aNdu, b1elany, Jackinho, szejn, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,896.67)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.632 | $3,000.00      | $1,896.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
