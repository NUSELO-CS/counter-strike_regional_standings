### Roster Details<br />
Team Name: G2 Esports<br />
Roster: hades, HeavyGod, malbsMd, Snax, TaZ<br />
Global Rank: [112](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [73]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  784.0<br />
<br />
Final Rank Value (784.0) = Starting Rank Value (771.2) + Head To Head Adjustments (12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.374[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.190<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 771.2
- 400 + ( ( 0.190 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 771.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3005 | 2025-05-13 | Ninjas in Pyjamas | L   | 0.229      | -            | -                | -                | -         |    -0.07 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            4 |     3042 | 2025-05-13 | BIG               | W   | 0.223      | 1.000        | 0.099 (0.022)    | 0.731 (0.163)    | 1 (0.223) |     6.84 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            3 |     3061 | 2025-05-12 | M80               | W   | 0.217      | 1.000        | 0.165 (0.036)    | 0.695 (0.151)    | 1 (0.217) |     6.31 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            2 |     3083 | 2025-05-11 | ODDIK             | L   | 0.211      | -            | -                | -                | -         |    -0.20 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            1 |     3122 | 2025-05-10 | MIBR              | L   | 0.203      | -            | -                | -                | -         |    -0.10 | hades, HeavyGod, malbsMd, Snax, TaZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,038.19)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.257 | $31,250.00     | $8,038.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
