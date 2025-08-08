### Roster Details<br />
Team Name: Nordix Esport<br />
Roster: berzerk, Brave, realyummy, samee, sense<br />
Global Rank: [252](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [126]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  404.0<br />
<br />
Final Rank Value (404.0) = Starting Rank Value (400.3) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.051[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.3
- 400 + ( ( 0.000 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 400.3


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
|            5 |     1079 | 2025-05-21 | JANO Esports    | L   | 0.677      | -            | -                | -                | -         |    -3.99 | berzerk, Brave, realyummy, samee, sense |
|            4 |     1112 | 2025-05-20 | ECSTATIC        | L   | 0.670      | -            | -                | -                | -         |    -0.19 | berzerk, Brave, realyummy, samee, sense |
|            3 |     1721 | 2025-04-25 | 777 Esports     | W   | 0.505      | 0.435        | 0.000 (0.000)    | 0.025 (0.005)    | 0 (0.000) |     7.86 | berzerk, Brave, realyummy, samee, sense |
|            2 |     1738 | 2025-04-24 | INFURITY Gaming | W   | 0.498      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.76 | berzerk, Brave, realyummy, samee, sense |
|            1 |     1746 | 2025-04-23 | 777 Esports     | L   | 0.492      | -            | -                | -                | -         |    -7.66 | berzerk, Brave, realyummy, samee, sense |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
