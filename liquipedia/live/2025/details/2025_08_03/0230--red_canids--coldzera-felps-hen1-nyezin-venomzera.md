### Roster Details<br />
Team Name: RED Canids<br />
Roster: coldzera, felps, HEN1, nyezin, venomzera<br />
Global Rank: [230](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_03.md)<br />
Regional Rank: [74]( ../../standings_americas_2025_08_03.md)<br />
<br />
Final Rank Value:  509.8<br />
<br />
Final Rank Value (509.8) = Starting Rank Value (508.6) + Head To Head Adjustments (1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.227[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.6
- 400 + ( ( 0.057 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 508.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2862 | 2025-03-10 | ShindeN     | L   | 0.220      | -            | -                | -                | -         |    -1.91 | coldzera, felps, HEN1, nyezin, venomzera |
|            5 |     2896 | 2025-03-09 | Dusty Roots | W   | 0.214      | 0.371        | 0.000 (0.000)    | 0.333 (0.026)    | 0 (0.000) |     3.70 | coldzera, felps, HEN1, nyezin, venomzera |
|            4 |     3492 | 2025-02-19 | SELVA       | L   | 0.093      | -            | -                | -                | -         |    -0.56 | coldzera, felps, HEN1, nyezin, venomzera |
|            3 |     3768 | 2025-02-08 | PaiN Gaming | L   | 0.019      | -            | -                | -                | -         |    -0.00 | coldzera, felps, HEN1, nyezin, venomzera |
|            2 |     3816 | 2025-02-07 | Nitro.GG    | L   | 0.014      | -            | -                | -                | -         |    -0.24 | coldzera, felps, HEN1, nyezin, venomzera |
|            1 |     3827 | 2025-02-07 | Elevate     | W   | 0.012      | 0.500        | 0.000 (0.000)    | 0.270 (0.002)    | 0 (0.000) |     0.20 | coldzera, felps, HEN1, nyezin, venomzera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($170.57)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-11 |      0.227 | $750.00        | $170.57         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
