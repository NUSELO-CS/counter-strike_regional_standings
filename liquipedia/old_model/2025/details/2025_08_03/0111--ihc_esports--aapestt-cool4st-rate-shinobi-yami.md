### Roster Details<br />
Team Name: IHC Esports<br />
Roster: Aapestt, cool4st, rate, shinobi, yAmi<br />
Global Rank: [111](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_03.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_08_03.md)<br />
<br />
Final Rank Value:  752.2<br />
<br />
Final Rank Value (752.2) = Starting Rank Value (660.4) + Head To Head Adjustments (91.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.4
- 400 + ( ( 0.138 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 660.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      293 | 2025-07-14 | HOTU                    | L   | 1.000      | -            | -                | -                | -         |    -7.15 | Aapestt, cool4st, rate, shinobi, yAmi |
|           13 |      298 | 2025-07-14 | Chinggis Warriors       | W   | 1.000      | 0.143        | 0.028 (0.004)    | 0.597 (0.085)    | 0 (0.000) |    25.55 | Aapestt, cool4st, rate, shinobi, yAmi |
|           12 |      312 | 2025-07-13 | SemperFi Esports        | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.441 (0.063)    | 0 (0.000) |    18.60 | Aapestt, cool4st, rate, shinobi, yAmi |
|           11 |      315 | 2025-07-13 | Nomads (Mongolian team) | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.153 (0.022)    | 0 (0.000) |    17.89 | Aapestt, cool4st, rate, shinobi, yAmi |
|           10 |      334 | 2025-07-12 | FengDa Gaming           | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.183 (0.026)    | 0 (0.000) |    15.94 | Aapestt, cool4st, rate, shinobi, yAmi |
|            9 |      339 | 2025-07-12 | HOTU                    | L   | 1.000      | -            | -                | -                | -         |    -6.11 | Aapestt, cool4st, rate, shinobi, yAmi |
|            8 |      375 | 2025-07-11 | Wings Up Gaming         | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.190 (0.027)    | 0 (0.000) |    20.72 | Aapestt, cool4st, rate, shinobi, yAmi |
|            7 |     2371 | 2025-03-28 | Chinggis Warriors       | L   | 0.341      | -            | -                | -                | -         |    -1.09 | Aapestt, cool4st, me1o, rate, shinobi |
|            6 |     2435 | 2025-03-27 | Victores Sumus          | W   | 0.335      | 0.143        | 0.001 (0.000)    | 0.031 (0.001)    | 0 (0.000) |     4.51 | Aapestt, cool4st, me1o, rate, shinobi |
|            5 |     2493 | 2025-03-27 | The Huns Esports        | L   | 0.330      | -            | -                | -                | -         |    -1.45 | Aapestt, cool4st, me1o, rate, shinobi |
|            4 |     2768 | 2025-03-15 | Nomads (Mongolian team) | W   | 0.255      | 0.333        | 0.013 (0.001)    | 0.153 (0.013)    | 1 (0.255) |     5.05 | Aapestt, cool4st, me1o, rate, shinobi |
|            3 |     2781 | 2025-03-15 | Chinggis Warriors       | L   | 0.249      | -            | -                | -                | -         |    -0.74 | Aapestt, cool4st, me1o, rate, shinobi |
|            2 |     3798 | 2025-02-08 | The Huns Esports        | L   | 0.017      | -            | -                | -                | -         |    -0.07 | clouden, cool4st, me1o, rate, yAmi    |
|            1 |     3802 | 2025-02-08 | Nomads (Mongolian team) | W   | 0.017      | 0.143        | 0.000 (0.000)    | 0.107 (0.000)    | 0 (0.000) |     0.16 | clouden, cool4st, me1o, rate, yAmi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($384.17)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      0.256 | $1,500.00      | $384.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
