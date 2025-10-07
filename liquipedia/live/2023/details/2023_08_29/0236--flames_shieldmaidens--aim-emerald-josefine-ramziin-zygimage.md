### Roster Details<br />
Team Name: Flames Shieldmaidens<br />
Roster: aiM, Emerald, josefine, ramziiN, Zygimage<br />
Global Rank: [236](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [143]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  602.3<br />
<br />
Final Rank Value (602.3) = Starting Rank Value (600.9) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 600.9
- 400 + ( ( 0.104 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 600.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2662 | 2023-04-12 | NAVI Javelins     | L   | 0.274      | -            | -                | -                | -         |    -1.56 | aiM, Emerald, josefine, ramziiN, Zygimage |
|            4 |     2915 | 2023-03-30 | VP.Angels         | W   | 0.187      | 0.329        | 0.001 (0.000)    | 0.048 (0.003)    | 0 (0.000) |     2.29 | aiM, Emerald, josefine, ramziiN, Zygimage |
|            3 |     2943 | 2023-03-29 | GUILD             | W   | 0.181      | 0.329        | 0.001 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     2.94 | aiM, Emerald, josefine, ramziiN, Zygimage |
|            2 |     3363 | 2023-03-16 | G2 Oya            | L   | 0.094      | -            | -                | -                | -         |    -1.36 | aiM, Emerald, josefine, ramziiN, Zygimage |
|            1 |     3405 | 2023-03-15 | 9 Pandas Fearless | L   | 0.087      | -            | -                | -                | -         |    -0.85 | aiM, Emerald, josefine, ramziiN, Zygimage |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($220.40)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-04-15 |      0.294 | $750.00        | $220.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
