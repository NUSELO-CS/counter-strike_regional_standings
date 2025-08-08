### Roster Details<br />
Team Name: QMISTRY<br />
Roster: Fugor, keis, Masi, virtuoso, Xydoo<br />
Global Rank: [138](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [86]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  686.2<br />
<br />
Final Rank Value (686.2) = Starting Rank Value (647.5) + Head To Head Adjustments (38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.221[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 647.5
- 400 + ( ( 0.130 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 647.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      412 | 2025-07-11 | PARIVISION       | L   | 1.000      | -            | -                | -                | -         |    -3.73 | Fugor, keis, Masi, virtuoso, Xydoo |
|           14 |      490 | 2025-07-07 | Wildcard Academy | W   | 0.991      | 0.483        | 0.000 (0.000)    | 0.128 (0.061)    | 0 (0.000) |    14.35 | Fugor, keis, Masi, virtuoso, Xydoo |
|           13 |      497 | 2025-07-06 | NOVAQ            | W   | 0.985      | 0.483        | 0.000 (0.000)    | 0.380 (0.180)    | 0 (0.000) |    13.42 | Fugor, keis, Masi, virtuoso, Xydoo |
|           12 |      509 | 2025-07-04 | Anonymo Esports  | W   | 0.970      | 0.483        | 0.000 (0.000)    | 0.050 (0.023)    | 0 (0.000) |     8.49 | Fugor, keis, Masi, virtuoso, Xydoo |
|           11 |      522 | 2025-07-02 | TPuDCATb TPu     | L   | 0.956      | -            | -                | -                | -         |    -8.55 | Fugor, keis, Masi, virtuoso, Xydoo |
|           10 |      836 | 2025-06-09 | HEROIC Academy   | L   | 0.805      | -            | -                | -                | -         |    -9.99 | Fugor, keis, Masi, showk, Xydoo    |
|            9 |      857 | 2025-06-08 | NOVAQ            | W   | 0.797      | 0.384        | 0.000 (0.000)    | 0.380 (0.116)    | 0 (0.000) |    11.31 | Fugor, keis, Masi, showk, Xydoo    |
|            8 |      899 | 2025-06-05 | Modeame          | W   | 0.777      | 0.384        | 0.004 (0.001)    | 0.328 (0.098)    | 0 (0.000) |    13.73 | Fugor, keis, Masi, showk, Xydoo    |
|            7 |      909 | 2025-06-04 | AMKAL ESPORTS    | L   | 0.771      | -            | -                | -                | -         |    -7.36 | Fugor, keis, Masi, showk, Xydoo    |
|            6 |     2705 | 2025-03-20 | Ex-Sabre Esports | L   | 0.265      | -            | -                | -                | -         |    -2.86 | Fugor, keis, Masi, showk, Xydoo    |
|            5 |     2776 | 2025-03-18 | Modeame          | W   | 0.252      | 0.372        | 0.004 (0.000)    | 0.328 (0.031)    | 0 (0.000) |     4.87 | Fugor, keis, Masi, showk, Xydoo    |
|            4 |     2834 | 2025-03-14 | Nuclear TigeRES  | W   | 0.225      | 0.372        | 0.001 (0.000)    | 0.019 (0.002)    | 0 (0.000) |     2.27 | Fugor, keis, Masi, showk, Xydoo    |
|            3 |     2865 | 2025-03-12 | FUT Esports      | W   | 0.212      | 0.372        | 0.000 (0.000)    | 0.155 (0.012)    | 0 (0.000) |     3.88 | Fugor, keis, Masi, showk, Xydoo    |
|            2 |     3025 | 2025-03-08 | AMKAL ESPORTS    | L   | 0.185      | -            | -                | -                | -         |    -3.34 | Fugor, keis, Masi, showk, Xydoo    |
|            1 |     3170 | 2025-03-06 | Ex-Heimo Esports | W   | 0.172      | 0.372        | 0.000 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     2.19 | Fugor, keis, Masi, showk, Xydoo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($556.39)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-22 |      0.278 | $2,000.00      | $556.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
