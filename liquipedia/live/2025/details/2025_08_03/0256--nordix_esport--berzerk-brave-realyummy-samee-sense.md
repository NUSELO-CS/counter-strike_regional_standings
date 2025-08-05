### Roster Details<br />
Team Name: Nordix Esport<br />
Roster: berzerk, Brave, realyummy, samee, sense<br />
Global Rank: [256](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [130]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  404.3<br />
<br />
Final Rank Value (404.3) = Starting Rank Value (400.3) + Head To Head Adjustments (4.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.3
- 400 + ( ( 0.000 - 0.000 ) / ( 0.839 - 0.000 ) ) * 1600 = 400.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1034 | 2025-05-21 | JANO Esports    | L   | 0.698      | -            | -                | -                | -         |    -4.01 | berzerk, Brave, realyummy, samee, sense |
|            4 |     1067 | 2025-05-20 | ECSTATIC        | L   | 0.690      | -            | -                | -                | -         |    -0.19 | berzerk, Brave, realyummy, samee, sense |
|            3 |     1676 | 2025-04-25 | 777 Esports     | W   | 0.525      | 0.435        | 0.000 (0.000)    | 0.025 (0.006)    | 0 (0.000) |     8.17 | berzerk, Brave, realyummy, samee, sense |
|            2 |     1693 | 2025-04-24 | INFURITY Gaming | W   | 0.518      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.06 | berzerk, Brave, realyummy, samee, sense |
|            1 |     1701 | 2025-04-23 | 777 Esports     | L   | 0.512      | -            | -                | -                | -         |    -7.97 | berzerk, Brave, realyummy, samee, sense |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
