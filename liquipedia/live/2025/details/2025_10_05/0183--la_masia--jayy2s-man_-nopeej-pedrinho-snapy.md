### Roster Details<br />
Team Name: LA MASIA<br />
Roster: Jayy2s, Mané, NOPEEj, Pedrinho, snapy<br />
Global Rank: [183](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [109]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  610.2<br />
<br />
Final Rank Value (610.2) = Starting Rank Value (615.2) + Head To Head Adjustments (-5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.263[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 615.2
- 400 + ( ( 0.110 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 615.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2987 | 2025-05-14 | ENCE                 | L   | 0.232      | -            | -                | -                | -         |    -0.06 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|           12 |     3108 | 2025-05-10 | Rhyno Esports        | L   | 0.205      | -            | -                | -                | -         |    -2.90 | Jayy2s, Mané, NOPEEj, Pedrinho, snapy |
|           11 |     3255 | 2025-05-05 | SINNERS Esports      | L   | 0.171      | -            | -                | -                | -         |    -0.46 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|           10 |     3359 | 2025-04-30 | Monte                | L   | 0.139      | -            | -                | -                | -         |    -0.13 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|            9 |     3388 | 2025-04-30 | UNiTY esports        | L   | 0.136      | -            | -                | -                | -         |    -1.46 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|            8 |     3588 | 2025-04-18 | Team Spirit Academy  | L   | 0.059      | -            | -                | -                | -         |    -0.25 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|            7 |     3595 | 2025-04-18 | Nexus Gaming         | L   | 0.058      | -            | -                | -                | -         |    -0.17 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|            6 |     3604 | 2025-04-18 | BetBoom Team         | L   | 0.057      | -            | -                | -                | -         |    -0.01 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|            5 |     3614 | 2025-04-17 | ENCE                 | L   | 0.053      | -            | -                | -                | -         |    -0.01 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|            4 |     3623 | 2025-04-17 | NOVAQ                | L   | 0.051      | -            | -                | -                | -         |    -0.25 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|            3 |     3631 | 2025-04-17 | Metizport            | W   | 0.051      | 0.657        | 0.007 (0.000)    | 0.322 (0.011)    | 0 (0.000) |     1.20 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|            2 |     3658 | 2025-04-16 | Fire Flux Esports    | L   | 0.044      | -            | -                | -                | -         |    -0.48 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |
|            1 |     3760 | 2025-04-11 | Inner Circle Esports | L   | 0.011      | -            | -                | -                | -         |    -0.01 | Jayy2s, Linko, NOPEEj, rafaxF, snapy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($587.97)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.211 | $731.48        | $154.22         |
| 2025-04-20 |      0.072 | $6,000.00      | $433.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
