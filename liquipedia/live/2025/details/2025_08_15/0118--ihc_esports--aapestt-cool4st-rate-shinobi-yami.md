### Roster Details<br />
Team Name: IHC Esports<br />
Roster: Aapestt, cool4st, rate, shinobi, yAmi<br />
Global Rank: [118](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_15.md)<br />
Regional Rank: [13]( ../../standings_asia_2025_08_15.md)<br />
<br />
Final Rank Value:  750.6<br />
<br />
Final Rank Value (750.6) = Starting Rank Value (660.3) + Head To Head Adjustments (90.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.241[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.233[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.3
- 400 + ( ( 0.133 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 660.3


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
|           12 |      476 | 2025-07-14 | HOTU                    | L   | 0.977      | -            | -                | -                | -         |    -7.12 | Aapestt, cool4st, rate, shinobi, yAmi |
|           11 |      481 | 2025-07-14 | Chinggis Warriors       | W   | 0.976      | 0.143        | 0.028 (0.004)    | 0.475 (0.066)    | 0 (0.000) |    25.42 | Aapestt, cool4st, rate, shinobi, yAmi |
|           10 |      495 | 2025-07-13 | SemperFi Esports        | W   | 0.970      | 0.143        | 0.013 (0.002)    | 0.383 (0.053)    | 0 (0.000) |    17.80 | Aapestt, cool4st, rate, shinobi, yAmi |
|            9 |      498 | 2025-07-13 | Nomads (Mongolian team) | W   | 0.969      | 0.143        | 0.014 (0.002)    | 0.127 (0.018)    | 0 (0.000) |    18.15 | Aapestt, cool4st, rate, shinobi, yAmi |
|            8 |      517 | 2025-07-12 | FengDa Gaming           | W   | 0.964      | 0.143        | 0.004 (0.001)    | 0.134 (0.018)    | 0 (0.000) |    16.29 | Aapestt, cool4st, rate, shinobi, yAmi |
|            7 |      522 | 2025-07-12 | HOTU                    | L   | 0.963      | -            | -                | -                | -         |    -5.99 | Aapestt, cool4st, rate, shinobi, yAmi |
|            6 |      558 | 2025-07-11 | Wings Up Gaming         | W   | 0.956      | 0.143        | 0.010 (0.001)    | 0.139 (0.019)    | 0 (0.000) |    21.15 | Aapestt, cool4st, rate, shinobi, yAmi |
|            5 |     2554 | 2025-03-28 | Chinggis Warriors       | L   | 0.261      | -            | -                | -                | -         |    -0.80 | Aapestt, cool4st, me1o, rate, shinobi |
|            4 |     2618 | 2025-03-27 | Victores Sumus          | W   | 0.255      | 0.624        | 0.001 (0.000)    | 0.018 (0.003)    | 0 (0.000) |     3.36 | Aapestt, cool4st, me1o, rate, shinobi |
|            3 |     2676 | 2025-03-27 | The Huns Esports        | L   | 0.250      | -            | -                | -                | -         |    -1.10 | Aapestt, cool4st, me1o, rate, shinobi |
|            2 |     2951 | 2025-03-15 | Nomads (Mongolian team) | W   | 0.175      | 0.535        | 0.014 (0.001)    | 0.127 (0.012)    | 1 (0.175) |     3.60 | Aapestt, cool4st, me1o, rate, shinobi |
|            1 |     2964 | 2025-03-15 | Chinggis Warriors       | L   | 0.169      | -            | -                | -                | -         |    -0.49 | Aapestt, cool4st, me1o, rate, shinobi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($264.06)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      0.176 | $1,500.00      | $264.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
