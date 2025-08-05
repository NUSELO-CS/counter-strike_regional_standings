### Roster Details<br />
Team Name: G2 Esports<br />
Roster: hades, HeavyGod, malbsMd, Snax, TaZ<br />
Global Rank: [73](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [51]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  905.1<br />
<br />
Final Rank Value (905.1) = Starting Rank Value (881.2) + Head To Head Adjustments (23.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.432[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.142[<sup>2</sup>](#table1)

The average of these factors is 0.252<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.2
- 400 + ( ( 0.252 - 0.000 ) / ( 0.839 - 0.000 ) ) * 1600 = 881.2


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
|            5 |     1195 | 2025-05-13 | Ninjas in Pyjamas | L   | 0.649      | -            | -                | -                | -         |    -0.71 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            4 |     1227 | 2025-05-13 | BIG               | W   | 0.643      | 1.000        | 0.183 (0.118)    | 0.327 (0.210)    | 1 (0.643) |    17.28 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            3 |     1246 | 2025-05-12 | M80               | W   | 0.637      | 1.000        | 0.101 (0.064)    | 0.767 (0.489)    | 1 (0.637) |    17.35 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            2 |     1268 | 2025-05-11 | ODDIK             | L   | 0.631      | -            | -                | -                | -         |    -8.51 | hades, HeavyGod, malbsMd, Snax, TaZ |
|            1 |     1307 | 2025-05-10 | MIBR              | L   | 0.623      | -            | -                | -                | -         |    -1.48 | hades, HeavyGod, malbsMd, Snax, TaZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,163.19)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-18 |      0.677 | $31,250.00     | $21,163.19      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
