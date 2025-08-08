### Roster Details<br />
Team Name: IHC Esports<br />
Roster: Aapestt, cool4st, rate, shinobi, yAmi<br />
Global Rank: [110](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_05.md)<br />
Regional Rank: [11]( ../../standings_asia_2025_08_05.md)<br />
<br />
Final Rank Value:  750.9<br />
<br />
Final Rank Value (750.9) = Starting Rank Value (660.1) + Head To Head Adjustments (90.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.271[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.1
- 400 + ( ( 0.137 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 660.1


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
|           12 |      338 | 2025-07-14 | HOTU                    | L   | 1.000      | -            | -                | -                | -         |    -7.28 | Aapestt, cool4st, rate, shinobi, yAmi |
|           11 |      343 | 2025-07-14 | Chinggis Warriors       | W   | 1.000      | 0.143        | 0.028 (0.004)    | 0.592 (0.085)    | 0 (0.000) |    25.56 | Aapestt, cool4st, rate, shinobi, yAmi |
|           10 |      357 | 2025-07-13 | SemperFi Esports        | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.446 (0.064)    | 0 (0.000) |    18.49 | Aapestt, cool4st, rate, shinobi, yAmi |
|            9 |      360 | 2025-07-13 | Nomads (Mongolian team) | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.154 (0.022)    | 0 (0.000) |    17.94 | Aapestt, cool4st, rate, shinobi, yAmi |
|            8 |      379 | 2025-07-12 | FengDa Gaming           | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.178 (0.025)    | 0 (0.000) |    15.96 | Aapestt, cool4st, rate, shinobi, yAmi |
|            7 |      384 | 2025-07-12 | HOTU                    | L   | 1.000      | -            | -                | -                | -         |    -6.23 | Aapestt, cool4st, rate, shinobi, yAmi |
|            6 |      420 | 2025-07-11 | Wings Up Gaming         | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.183 (0.026)    | 0 (0.000) |    20.64 | Aapestt, cool4st, rate, shinobi, yAmi |
|            5 |     2416 | 2025-03-28 | Chinggis Warriors       | L   | 0.321      | -            | -                | -                | -         |    -1.04 | Aapestt, cool4st, me1o, rate, shinobi |
|            4 |     2480 | 2025-03-27 | Victores Sumus          | W   | 0.315      | 0.143        | 0.001 (0.000)    | 0.029 (0.001)    | 0 (0.000) |     4.22 | Aapestt, cool4st, me1o, rate, shinobi |
|            3 |     2538 | 2025-03-27 | The Huns Esports        | L   | 0.310      | -            | -                | -                | -         |    -1.37 | Aapestt, cool4st, me1o, rate, shinobi |
|            2 |     2813 | 2025-03-15 | Nomads (Mongolian team) | W   | 0.235      | 0.333        | 0.013 (0.001)    | 0.154 (0.012)    | 1 (0.235) |     4.65 | Aapestt, cool4st, me1o, rate, shinobi |
|            1 |     2826 | 2025-03-15 | Chinggis Warriors       | L   | 0.229      | -            | -                | -                | -         |    -0.69 | Aapestt, cool4st, me1o, rate, shinobi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($353.96)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      0.236 | $1,500.00      | $353.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
