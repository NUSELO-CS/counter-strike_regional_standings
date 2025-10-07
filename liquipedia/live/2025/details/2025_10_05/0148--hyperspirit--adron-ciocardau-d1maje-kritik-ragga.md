### Roster Details<br />
Team Name: HyperSpirit<br />
Roster: ADRON, Ciocardau, d1maje, kritik, ragga<br />
Global Rank: [148](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  698.0<br />
<br />
Final Rank Value (698.0) = Starting Rank Value (692.9) + Head To Head Adjustments (5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.9
- 400 + ( ( 0.150 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 692.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      279 | 2025-09-25 | BIG Academy           | L   | 1.000      | -            | -                | -                | -         |   -22.07 | ADRON, Ciocardau, d1maje, kritik, ragga |
|            4 |      287 | 2025-09-25 | Reason Gaming         | L   | 1.000      | -            | -                | -                | -         |    -4.74 | ADRON, Ciocardau, d1maje, kritik, ragga |
|            3 |     1037 | 2025-08-29 | 9INE                  | L   | 0.943      | -            | -                | -                | -         |    -0.77 | ADRON, Ciocardau, d1maje, kritik, ragga |
|            2 |     1041 | 2025-08-29 | Inner Circle Esports  | W   | 0.943      | 0.333        | 0.008 (0.003)    | 0.262 (0.082)    | 1 (0.943) |    26.61 | ADRON, Ciocardau, d1maje, kritik, ragga |
|            1 |     1820 | 2025-07-27 | Way2go (Latvian team) | W   | 0.725      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.06 | ADRON, Ciocardau, d1maje, kritik, ragga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($870.50)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-27 |      0.725 | $1,200.00      | $870.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
