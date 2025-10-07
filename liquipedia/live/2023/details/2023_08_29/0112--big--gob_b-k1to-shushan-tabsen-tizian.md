### Roster Details<br />
Team Name: BIG<br />
Roster: gob b, k1to, shushan, tabseN, tiziaN<br />
Global Rank: [112](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [79]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  782.4<br />
<br />
Final Rank Value (782.4) = Starting Rank Value (745.2) + Head To Head Adjustments (37.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 745.2
- 400 + ( ( 0.178 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 745.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1225 | 2023-06-11 | SAW             | L   | 0.673      | -            | -                | -                | -         |    -1.83 | gob b, k1to, shushan, tabseN, tiziaN |
|            4 |     1233 | 2023-06-11 | Young Ninjas    | W   | 0.672      | 0.435        | 0.029 (0.009)    | 0.327 (0.096)    | 0 (0.000) |    14.95 | hyped, k1to, Krimbo, tabseN, tiziaN  |
|            3 |     1255 | 2023-06-10 | Astralis Talent | W   | 0.666      | 0.435        | 0.110 (0.032)    | 0.582 (0.169)    | 0 (0.000) |    16.80 | hyped, k1to, Krimbo, tabseN, tiziaN  |
|            2 |     1302 | 2023-06-09 | Illuminar       | W   | 0.659      | 0.435        | 0.015 (0.004)    | 0.187 (0.054)    | 0 (0.000) |    10.97 | hyped, k1to, Krimbo, tabseN, tiziaN  |
|            1 |     1342 | 2023-06-08 | Astralis Talent | L   | 0.653      | -            | -                | -                | -         |    -3.71 | hyped, k1to, Krimbo, tabseN, tiziaN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,730.37)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-11 |      0.673 | $10,000.00     | $6,730.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
