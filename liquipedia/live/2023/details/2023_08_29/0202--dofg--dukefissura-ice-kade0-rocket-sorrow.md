### Roster Details<br />
Team Name: DOFG<br />
Roster: dukefissura, ice, kade0, ROCKET, sorrow<br />
Global Rank: [202](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [127]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  644.4<br />
<br />
Final Rank Value (644.4) = Starting Rank Value (659.6) + Head To Head Adjustments (-15.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.030[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.6
- 400 + ( ( 0.134 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 659.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1096 | 2023-06-24 | AVANGAR         | L   | 0.758      | -            | -                | -                | -         |   -10.73 | dukefissura, ice, kade0, ROCKET, sorrow  |
|            6 |     1127 | 2023-06-18 | TEMP            | L   | 0.720      | -            | -                | -                | -         |   -10.19 | dukefissura, ice, kade0, ROCKET, sorrow  |
|            5 |     2020 | 2023-05-14 | CYBER           | W   | 0.486      | 0.284        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.92 | dukefissura, ice, kade0, ROCKET, sorrow  |
|            4 |     3370 | 2023-03-16 | K23             | L   | 0.093      | -            | -                | -                | -         |    -1.39 | dukefissura, ice, kAlash, ROCKET, sorrow |
|            3 |     3451 | 2023-03-13 | Sampi           | W   | 0.074      | 0.143        | 0.087 (0.001)    | 1.000 (0.011)    | 0 (0.000) |     2.03 | dukefissura, ice, kAlash, ROCKET, sorrow |
|            2 |     3475 | 2023-03-12 | Astralis Talent | L   | 0.068      | -            | -                | -                | -         |    -0.25 | dukefissura, ice, kAlash, ROCKET, sorrow |
|            1 |     3487 | 2023-03-12 | Levadia         | W   | 0.067      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.40 | dukefissura, ice, kAlash, ROCKET, sorrow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,716.56)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-24 |      0.758 | $1,675.00      | $1,269.82       |
| 2023-06-18 |      0.720 | $659.00        | $474.44         |
| 2023-05-14 |      0.486 | $2,000.00      | $972.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
