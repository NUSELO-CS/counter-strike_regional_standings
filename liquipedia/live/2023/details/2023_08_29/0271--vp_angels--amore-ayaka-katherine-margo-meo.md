### Roster Details<br />
Team Name: VP.Angels<br />
Roster: amore, ayaka, Katherine, Margo, meo<br />
Global Rank: [271](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [163]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  522.5<br />
<br />
Final Rank Value (522.5) = Starting Rank Value (523.3) + Head To Head Adjustments (-0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.3
- 400 + ( ( 0.064 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 523.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       87 | 2023-08-25 | Gimmik Pearls        | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.55 | amore, ayaka, Katherine, Margo, meo |
|            6 |     1130 | 2023-06-18 | 9 Pandas Fearless    | L   | 0.720      | -            | -                | -                | -         |    -4.74 | amore, ayaka, Ellie, Margo, meo     |
|            5 |     2661 | 2023-04-12 | 9 Pandas Fearless    | L   | 0.274      | -            | -                | -                | -         |    -1.85 | ayaka, Katherine, Margo, meo, uulis |
|            4 |     2915 | 2023-03-30 | Flames Shieldmaidens | L   | 0.187      | -            | -                | -                | -         |    -2.29 | ayaka, Katherine, Margo, meo, uulis |
|            3 |     3121 | 2023-03-23 | G2 Oya               | L   | 0.141      | -            | -                | -                | -         |    -1.56 | ayaka, Katherine, Margo, meo, uulis |
|            2 |     3397 | 2023-03-15 | NAVI Javelins        | L   | 0.088      | -            | -                | -                | -         |    -0.35 | ayaka, Katherine, Margo, meo, uulis |
|            1 |     3570 | 2023-03-09 | GUILD                | L   | 0.048      | -            | -                | -                | -         |    -0.57 | ayaka, Katherine, Margo, meo, uulis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($326.85)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-18 |      0.720 | $250.00        | $179.92         |
| 2023-04-15 |      0.294 | $500.00        | $146.93         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
