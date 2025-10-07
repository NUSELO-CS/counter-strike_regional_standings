### Roster Details<br />
Team Name: GUILD<br />
Roster: Ann4, KiKi, Minnie, Nea, pullox<br />
Global Rank: [225](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [138]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  611.5<br />
<br />
Final Rank Value (611.5) = Starting Rank Value (611.6) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 611.6
- 400 + ( ( 0.109 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 611.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2656 | 2023-04-12 | G2 Oya               | W   | 0.274      | 0.329        | 0.004 (0.000)    | 0.060 (0.005)    | 0 (0.000) |     4.59 | Ann4, KiKi, Minnie, Nea, pullox |
|            4 |     2807 | 2023-04-06 | NAVI Javelins        | L   | 0.234      | -            | -                | -                | -         |    -1.37 | Ann4, KiKi, Minnie, Nea, pullox |
|            3 |     2943 | 2023-03-29 | Flames Shieldmaidens | L   | 0.181      | -            | -                | -                | -         |    -2.94 | Ann4, KiKi, Minnie, Nea, pullox |
|            2 |     3362 | 2023-03-16 | 9 Pandas Fearless    | L   | 0.094      | -            | -                | -                | -         |    -0.95 | Ann4, KiKi, Minnie, Nea, pullox |
|            1 |     3570 | 2023-03-09 | VP.Angels            | W   | 0.048      | 0.329        | 0.001 (0.000)    | 0.048 (0.001)    | 0 (0.000) |     0.57 | Ann4, KiKi, Minnie, Nea, pullox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($293.87)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-04-15 |      0.294 | $1,000.00      | $293.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
