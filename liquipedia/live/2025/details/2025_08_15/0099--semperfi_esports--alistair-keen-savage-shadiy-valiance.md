### Roster Details<br />
Team Name: SemperFi Esports<br />
Roster: aliStair, keen, SaVage, shadiy, Valiance<br />
Global Rank: [99](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_15.md)<br />
Regional Rank: [10]( ../../standings_asia_2025_08_15.md)<br />
<br />
Final Rank Value:  812.9<br />
<br />
Final Rank Value (812.9) = Starting Rank Value (774.6) + Head To Head Adjustments (38.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.126[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.383[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 774.6
- 400 + ( ( 0.192 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 774.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      177 | 2025-07-31 | Eruption             | L   | 1.000      | -            | -                | -                | -         |   -13.99 | aliStair, keen, SaVage, shadiy, Valiance |
|           30 |      388 | 2025-07-17 | Rooster              | W   | 1.000      | 0.314        | 0.011 (0.003)    | 0.221 (0.069)    | 0 (0.000) |    13.03 | aliStair, keen, SaVage, shadiy, Valiance |
|           29 |      407 | 2025-07-17 | KZG                  | W   | 0.997      | 0.314        | 0.003 (0.001)    | 0.177 (0.055)    | 0 (0.000) |    10.59 | aliStair, keen, SaVage, shadiy, Valiance |
|           28 |      409 | 2025-07-17 | Ground Zero Gaming   | W   | 0.996      | 0.314        | 0.004 (0.001)    | 0.164 (0.051)    | 0 (0.000) |    10.34 | aliStair, keen, SaVage, shadiy, Valiance |
|           27 |      440 | 2025-07-16 | Ex-TALON             | W   | 0.989      | 0.314        | 0.002 (0.001)    | 0.138 (0.043)    | 0 (0.000) |    10.49 | aliStair, keen, SaVage, shadiy, Valiance |
|           26 |      478 | 2025-07-14 | FURY                 | W   | 0.977      | 0.314        | -                | 0.107 (0.033)    | 0 (0.000) |     8.31 | aliStair, keen, SaVage, shadiy, Valiance |
|           25 |      495 | 2025-07-13 | IHC Esports          | L   | 0.970      | -            | -                | -                | -         |   -17.84 | aliStair, keen, SaVage, shadiy, Valiance |
|           24 |      499 | 2025-07-13 | Unsettled Resentment | W   | 0.969      | 0.143        | -                | 0.175 (0.024)    | -         |     7.45 | aliStair, keen, SaVage, shadiy, Valiance |
|           23 |      500 | 2025-07-13 | KZG                  | L   | 0.969      | -            | -                | -                | -         |   -19.95 | aliStair, keen, SaVage, shadiy, Valiance |
|           22 |      515 | 2025-07-12 | HOTU                 | L   | 0.964      | -            | -                | -                | -         |    -9.82 | aliStair, keen, SaVage, shadiy, Valiance |
|           21 |      523 | 2025-07-12 | FengDa Gaming        | W   | 0.963      | 0.143        | 0.004 (0.001)    | -                | -         |    11.83 | aliStair, keen, SaVage, shadiy, Valiance |
|           20 |      557 | 2025-07-11 | Alter Ego            | W   | 0.956      | -            | -                | -                | -         |     3.08 | aliStair, keen, SaVage, shadiy, Valiance |
|           19 |     2011 | 2025-04-16 | FlyQuest             | L   | 0.389      | -            | -                | -                | -         |    -0.53 | aliStair, keen, SaVage, shadiy, Valiance |
|           18 |     2012 | 2025-04-16 | Ex-TALON             | W   | 0.388      | 0.525        | 0.002 (0.000)    | 0.138 (0.028)    | -         |     4.37 | aliStair, keen, SaVage, shadiy, Valiance |
|           17 |     2037 | 2025-04-15 | FlyQuest             | L   | 0.381      | -            | -                | -                | -         |    -0.51 | aliStair, keen, SaVage, shadiy, Valiance |
|           16 |     2061 | 2025-04-14 | Ex-TALON             | W   | 0.375      | 0.525        | -                | 0.138 (0.027)    | -         |     4.24 | aliStair, keen, SaVage, shadiy, Valiance |
|           15 |     2449 | 2025-03-31 | JiJieHao             | L   | 0.276      | -            | -                | -                | -         |    -2.07 | aliStair, keen, SaVage, shadiy, Valiance |
|           14 |     2484 | 2025-03-30 | Rooster              | W   | 0.269      | 0.624        | 0.011 (0.002)    | 0.221 (0.037)    | -         |     3.48 | aliStair, keen, SaVage, shadiy, Valiance |
|           13 |     2547 | 2025-03-29 | Rooster              | W   | 0.263      | 0.624        | 0.011 (0.002)    | 0.221 (0.036)    | -         |     3.42 | aliStair, keen, SaVage, shadiy, Valiance |
|           12 |     2612 | 2025-03-28 | Vantage Esports      | W   | 0.256      | -            | -                | -                | -         |     1.32 | aliStair, keen, SaVage, shadiy, Valiance |
|           11 |     2692 | 2025-03-26 | Ex-TALON             | W   | 0.249      | -            | -                | -                | -         |     2.97 | aliStair, keen, SaVage, shadiy, Valiance |
|           10 |     2799 | 2025-03-23 | Ex-TALON             | W   | 0.223      | -            | -                | -                | 1 (0.223) |     2.87 | aliStair, keen, SaVage, shadiy, Valiance |
|            9 |     2802 | 2025-03-22 | Rooster              | W   | 0.222      | 0.345        | 0.011 (0.001)    | -                | 1 (0.222) |     2.97 | aliStair, keen, SaVage, shadiy, Valiance |
|            8 |     2803 | 2025-03-22 | Ground Zero Gaming   | W   | 0.221      | -            | -                | -                | 1 (0.221) |     2.62 | aliStair, keen, SaVage, shadiy, Valiance |
|            7 |     2817 | 2025-03-21 | Ex-TALON             | L   | 0.215      | -            | -                | -                | -         |    -4.05 | aliStair, keen, SaVage, shadiy, Valiance |
|            6 |     2854 | 2025-03-19 | Rooster              | W   | 0.202      | 0.345        | 0.011 (0.001)    | -                | 1 (0.202) |     2.71 | aliStair, keen, SaVage, shadiy, Valiance |
|            5 |     2866 | 2025-03-19 | Only One Word        | W   | 0.201      | -            | -                | -                | 1 (0.201) |     2.46 | aliStair, keen, SaVage, shadiy, Valiance |
|            4 |     3280 | 2025-03-06 | Eruption             | L   | 0.116      | -            | -                | -                | -         |    -1.49 | keen, SaVage, shadiy, Valiance, vision   |
|            3 |     3282 | 2025-03-06 | JiJieHao             | L   | 0.115      | -            | -                | -                | -         |    -0.80 | keen, SaVage, shadiy, Valiance, vision   |
|            2 |     3574 | 2025-02-25 | KZG                  | W   | 0.050      | -            | -                | -                | -         |     0.26 | keen, SaVage, shadiy, Valiance, vision   |
|            1 |     3600 | 2025-02-24 | Only One Word        | W   | 0.043      | -            | -                | -                | -         |     0.52 | keen, SaVage, shadiy, Valiance, vision   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,654.21)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-17 |      1.000 | $3,253.85      | $3,253.85       |
| 2025-03-23 |      0.223 | $6,280.00      | $1,400.35       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
