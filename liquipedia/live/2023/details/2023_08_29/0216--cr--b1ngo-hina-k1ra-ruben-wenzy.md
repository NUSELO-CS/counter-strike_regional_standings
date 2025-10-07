### Roster Details<br />
Team Name: CR<br />
Roster: B1NGO, HiNa, K1ra, rubeN, Wenzy<br />
Global Rank: [216](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2023_08_29.md)<br />
Regional Rank: [19]( ../../standings_asia_2023_08_29.md)<br />
<br />
Final Rank Value:  622.5<br />
<br />
Final Rank Value (622.5) = Starting Rank Value (633.1) + Head To Head Adjustments (-10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.1
- 400 + ( ( 0.121 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 633.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1169 | 2023-06-16 | 5yclone    | L   | 0.706      | -            | -                | -                | -         |    -4.50 | B1NGO, HiNa, K1ra, rubeN, Wenzy |
|            4 |     1186 | 2023-06-15 | JiJieHao   | W   | 0.697      | 0.380        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.06 | B1NGO, HiNa, K1ra, rubeN, Wenzy |
|            3 |     1200 | 2023-06-14 | ATOX       | L   | 0.691      | -            | -                | -                | -         |    -7.04 | B1NGO, HiNa, K1ra, rubeN, Wenzy |
|            2 |     1838 | 2023-05-24 | NKT        | L   | 0.553      | -            | -                | -                | -         |    -5.24 | HiNa, K1ra, Risk, rubeN, Wenzy  |
|            1 |     1878 | 2023-05-23 | TheMongolz | L   | 0.546      | -            | -                | -                | -         |    -1.88 | HiNa, K1ra, Risk, rubeN, Wenzy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,070.34)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-18 |      0.720 | $1,125.00      | $809.44         |
| 2023-05-28 |      0.580 | $450.00        | $260.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
