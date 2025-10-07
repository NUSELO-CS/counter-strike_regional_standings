### Roster Details<br />
Team Name: ALLINNERS<br />
Roster: Botpa1, buster, demente, noni, weaveR<br />
Global Rank: [127](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [79]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  746.1<br />
<br />
Final Rank Value (746.1) = Starting Rank Value (760.0) + Head To Head Adjustments (-14.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.196[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 760.0
- 400 + ( ( 0.184 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 760.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      196 | 2025-09-27 | NOVAQ       | L   | 1.000      | -            | -                | -                | -         |    -8.63 | Botpa1, buster, demente, noni, weaveR  |
|            5 |      964 | 2025-08-31 | NOVAQ       | L   | 0.957      | -            | -                | -                | -         |    -8.87 | Botpa1, demente, noni, raiNyyy, weaveR |
|            4 |      969 | 2025-08-31 | DEPO        | W   | 0.957      | 0.333        | 0.004 (0.001)    | 0.040 (0.013)    | 1 (0.957) |    11.96 | Botpa1, demente, noni, raiNyyy, weaveR |
|            3 |      974 | 2025-08-31 | AK BARS     | W   | 0.956      | 0.333        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (0.956) |     6.68 | Botpa1, demente, noni, raiNyyy, weaveR |
|            2 |     1006 | 2025-08-30 | NOVAQ       | L   | 0.949      | -            | -                | -                | -         |    -9.02 | Botpa1, demente, noni, raiNyyy, weaveR |
|            1 |     2782 | 2025-05-23 | 100PingGods | L   | 0.295      | -            | -                | -                | -         |    -6.08 | areokk, demente, kumao, noni, weaveR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,234.67)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-27 |      1.000 | $552.15        | $552.15         |
| 2025-08-31 |      0.957 | $2,500.00      | $2,393.17       |
| 2025-05-23 |      0.295 | $979.22        | $289.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
