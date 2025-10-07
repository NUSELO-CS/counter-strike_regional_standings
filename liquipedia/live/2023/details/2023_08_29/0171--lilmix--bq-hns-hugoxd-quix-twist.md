### Roster Details<br />
Team Name: Lilmix<br />
Roster: bq, hns, HugoXD, quix, twist<br />
Global Rank: [171](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [112]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  688.7<br />
<br />
Final Rank Value (688.7) = Starting Rank Value (692.2) + Head To Head Adjustments (-3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.2
- 400 + ( ( 0.151 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 692.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1140 | 2023-06-17 | PROSPECTS | L   | 0.714      | -            | -                | -                | -         |    -4.53 | bq, hns, HugoXD, quix, twist |
|            4 |     1163 | 2023-06-16 | ex-THUNDR | W   | 0.707      | 0.377        | 0.006 (0.002)    | 0.000 (0.000)    | 1 (0.707) |     6.93 | bq, hns, HugoXD, quix, twist |
|            3 |     1166 | 2023-06-16 | PROSPECTS | L   | 0.706      | -            | -                | -                | -         |    -4.28 | bq, hns, HugoXD, quix, twist |
|            2 |     3544 | 2023-03-10 | Nexus     | L   | 0.054      | -            | -                | -                | -         |    -1.07 | bq, hns, HugoXD, quix, WolfY |
|            1 |     3640 | 2023-03-07 | Insilio   | L   | 0.034      | -            | -                | -                | -         |    -0.54 | bq, hns, HugoXD, quix, WolfY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,753.26)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-18 |      0.720 | $2,435.00      | $1,753.26       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
