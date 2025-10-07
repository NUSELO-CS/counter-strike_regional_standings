### Roster Details<br />
Team Name: ROYALS<br />
Roster: Atrox, entz, Swaggy, tvs, xavi<br />
Global Rank: [246](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [149]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  595.4<br />
<br />
Final Rank Value (595.4) = Starting Rank Value (597.9) + Head To Head Adjustments (-2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.102<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 597.9
- 400 + ( ( 0.102 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 597.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2853 | 2023-04-02 | Into the Bin | L   | 0.207      | -            | -                | -                | -         |    -3.16 | Atrox, entz, Swaggy, tvs, xavi |
|            4 |     2856 | 2023-04-02 | RAPTORS EC   | W   | 0.206      | 0.277        | 0.003 (0.000)    | 0.058 (0.003)    | 0 (0.000) |     3.61 | Atrox, entz, Swaggy, tvs, xavi |
|            3 |     2874 | 2023-04-01 | K10          | W   | 0.199      | 0.277        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.58 | Atrox, entz, Swaggy, tvs, xavi |
|            2 |     2928 | 2023-03-30 | Arcadia      | L   | 0.185      | -            | -                | -                | -         |    -2.38 | Atrox, entz, Swaggy, tvs, xavi |
|            1 |     2955 | 2023-03-29 | K23          | L   | 0.179      | -            | -                | -                | -         |    -2.13 | Atrox, entz, Swaggy, tvs, xavi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($153.36)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-04-02 |      0.207 | $740.00        | $153.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
