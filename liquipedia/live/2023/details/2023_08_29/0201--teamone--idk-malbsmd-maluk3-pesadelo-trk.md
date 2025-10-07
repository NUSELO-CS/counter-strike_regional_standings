### Roster Details<br />
Team Name: TeamOne<br />
Roster: iDk, malbsMd, Maluk3, pesadelo, trk<br />
Global Rank: [201](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [59]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  646.3<br />
<br />
Final Rank Value (646.3) = Starting Rank Value (646.1) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.008[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.1
- 400 + ( ( 0.127 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 646.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     2766 | 2023-04-07 | Imperial      | L   | 0.242      | -            | -                | -                | -         |    -0.69 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            8 |     2801 | 2023-04-06 | FURIA         | L   | 0.235      | -            | -                | -                | -         |    -1.08 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            7 |     3111 | 2023-03-23 | Evil Geniuses | L   | 0.142      | -            | -                | -                | -         |    -0.96 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            6 |     3157 | 2023-03-22 | Wildcard      | W   | 0.136      | 0.435        | 0.128 (0.008)    | 0.804 (0.048)    | 0 (0.000) |     3.36 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            5 |     3194 | 2023-03-21 | Nouns         | L   | 0.129      | -            | -                | -                | -         |    -0.74 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            4 |     3674 | 2023-03-05 | Nouns         | L   | 0.023      | -            | -                | -                | -         |    -0.14 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            3 |     3675 | 2023-03-05 | Vendetta      | W   | 0.022      | 0.143        | 0.001 (0.000)    | 0.027 (0.000)    | 0 (0.000) |     0.33 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            2 |     3703 | 2023-03-04 | Nouns         | L   | 0.017      | -            | -                | -                | -         |    -0.10 | iDk, malbsMd, Maluk3, pesadelo, trk |
|            1 |     3705 | 2023-03-04 | Strife        | W   | 0.015      | 0.143        | 0.004 (0.000)    | 0.043 (0.000)    | 0 (0.000) |     0.26 | iDk, malbsMd, Maluk3, pesadelo, trk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($405.85)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-26 |      0.162 | $2,500.00      | $405.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
