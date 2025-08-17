### Roster Details<br />
Team Name: QMISTRY<br />
Roster: Fugor, keis, Masi, virtuoso, Xydoo<br />
Global Rank: [146](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  679.9<br />
<br />
Final Rank Value (679.9) = Starting Rank Value (644.6) + Head To Head Adjustments (35.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.179[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 644.6
- 400 + ( ( 0.125 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 644.6


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
|           15 |      550 | 2025-07-11 | PARIVISION       | L   | 0.958      | -            | -                | -                | -         |    -3.22 | Fugor, keis, Masi, virtuoso, Xydoo |
|           14 |      628 | 2025-07-07 | Wildcard Academy | W   | 0.931      | 0.483        | 0.000 (0.000)    | 0.102 (0.046)    | 0 (0.000) |    13.66 | Fugor, keis, Masi, virtuoso, Xydoo |
|           13 |      635 | 2025-07-06 | NOVAQ            | W   | 0.925      | 0.483        | 0.000 (0.000)    | 0.309 (0.138)    | 0 (0.000) |    12.52 | Fugor, keis, Masi, virtuoso, Xydoo |
|           12 |      647 | 2025-07-04 | Anonymo Esports  | W   | 0.910      | 0.483        | 0.000 (0.000)    | 0.042 (0.018)    | 0 (0.000) |     8.19 | Fugor, keis, Masi, virtuoso, Xydoo |
|           11 |      660 | 2025-07-02 | TPuDCATb TPu     | L   | 0.896      | -            | -                | -                | -         |    -7.87 | Fugor, keis, Masi, virtuoso, Xydoo |
|           10 |      974 | 2025-06-09 | HEROIC Academy   | L   | 0.745      | -            | -                | -                | -         |    -9.04 | Fugor, keis, Masi, showk, Xydoo    |
|            9 |      995 | 2025-06-08 | NOVAQ            | W   | 0.737      | 0.384        | 0.000 (0.000)    | 0.309 (0.087)    | 0 (0.000) |    10.31 | Fugor, keis, Masi, showk, Xydoo    |
|            8 |     1037 | 2025-06-05 | Modeame          | W   | 0.717      | 0.384        | 0.004 (0.001)    | 0.271 (0.075)    | 0 (0.000) |    12.68 | Fugor, keis, Masi, showk, Xydoo    |
|            7 |     1047 | 2025-06-04 | AMKAL ESPORTS    | L   | 0.711      | -            | -                | -                | -         |    -7.81 | Fugor, keis, Masi, showk, Xydoo    |
|            6 |     2843 | 2025-03-20 | Ex-Sabre Esports | L   | 0.205      | -            | -                | -                | -         |    -2.26 | Fugor, keis, Masi, showk, Xydoo    |
|            5 |     2914 | 2025-03-18 | Modeame          | W   | 0.192      | 0.372        | 0.004 (0.000)    | 0.271 (0.019)    | 0 (0.000) |     3.65 | Fugor, keis, Masi, showk, Xydoo    |
|            4 |     2972 | 2025-03-14 | Nuclear TigeRES  | W   | 0.165      | 0.372        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     1.68 | Fugor, keis, Masi, showk, Xydoo    |
|            3 |     3003 | 2025-03-12 | FUT Esports      | W   | 0.153      | 0.372        | 0.000 (0.000)    | 0.131 (0.007)    | 0 (0.000) |     2.87 | Fugor, keis, Masi, showk, Xydoo    |
|            2 |     3163 | 2025-03-08 | AMKAL ESPORTS    | L   | 0.125      | -            | -                | -                | -         |    -1.45 | Fugor, keis, Masi, showk, Xydoo    |
|            1 |     3308 | 2025-03-06 | Ex-Heimo Esports | W   | 0.112      | 0.372        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     1.42 | Fugor, keis, Masi, showk, Xydoo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($436.53)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-22 |      0.218 | $2,000.00      | $436.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
