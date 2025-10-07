### Roster Details<br />
Team Name: ex-DomiNation<br />
Roster: bodito, coolio, Kamion, kolor, msN<br />
Global Rank: [169](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [110]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  688.9<br />
<br />
Final Rank Value (688.9) = Starting Rank Value (685.6) + Head To Head Adjustments (3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.6
- 400 + ( ( 0.148 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 685.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1179 | 2023-06-15 | Question Mark | L   | 0.700      | -            | -                | -                | -         |    -5.13 | bodito, coolio, Kamion, kolor, msN |
|            7 |     3406 | 2023-03-15 | Question Mark | W   | 0.087      | 0.371        | 0.032 (0.001)    | 0.689 (0.022)    | 0 (0.000) |     2.07 | Aaron, bodito, Kamion, kolor, msN  |
|            6 |     3458 | 2023-03-13 | Spirit        | W   | 0.073      | 0.371        | 0.376 (0.010)    | 0.833 (0.023)    | 0 (0.000) |     2.27 | Aaron, bodito, Kamion, kolor, msN  |
|            5 |     3522 | 2023-03-11 | THE FREE      | W   | 0.060      | 0.371        | 0.012 (0.000)    | 0.425 (0.009)    | 0 (0.000) |     1.26 | Aaron, bodito, Kamion, kolor, msN  |
|            4 |     3538 | 2023-03-10 | Aurora        | L   | 0.054      | -            | -                | -                | -         |    -0.12 | Aaron, bodito, Kamion, kolor, msN  |
|            3 |     3543 | 2023-03-10 | Monte         | W   | 0.054      | 0.143        | 0.318 (0.002)    | 1.000 (0.008)    | 0 (0.000) |     1.67 | Aaron, bodito, Kamion, kolor, msN  |
|            2 |     3557 | 2023-03-10 | Cloud9        | L   | 0.053      | -            | -                | -                | -         |    -0.01 | Aaron, bodito, Kamion, kolor, msN  |
|            1 |     3584 | 2023-03-09 | Space         | W   | 0.047      | 0.371        | 0.099 (0.002)    | 0.904 (0.016)    | 0 (0.000) |     1.25 | Aaron, bodito, Kamion, kolor, msN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,044.52)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-25 |      0.767 | $1,500.00      | $1,150.55       |
| 2023-03-21 |      0.128 | $7,000.00      | $893.97         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
