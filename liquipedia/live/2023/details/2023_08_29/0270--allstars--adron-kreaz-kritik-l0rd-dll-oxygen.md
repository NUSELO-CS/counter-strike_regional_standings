### Roster Details<br />
Team Name: allStars<br />
Roster: ADRON, kreaz, kritik, l0rd-dll, oxygeN<br />
Global Rank: [270](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [162]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  523.3<br />
<br />
Final Rank Value (523.3) = Starting Rank Value (500.9) + Head To Head Adjustments (22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.9
- 400 + ( ( 0.052 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 500.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1699 | 2023-05-28 | Sampi    | L   | 0.578      | -            | -                | -                | -         |    -1.31 | ADRON, kreaz, kritik, l0rd-dll, oxygeN |
|            4 |     1712 | 2023-05-27 | JANO     | W   | 0.574      | 0.143        | 0.007 (0.001)    | 0.427 (0.035)    | 0 (0.000) |    14.96 | ADRON, kreaz, kritik, l0rd-dll, oxygeN |
|            3 |     1753 | 2023-05-26 | Nexus    | L   | 0.567      | -            | -                | -                | -         |    -6.28 | ADRON, kreaz, kritik, l0rd-dll, oxygeN |
|            2 |     1762 | 2023-05-26 | JANO     | W   | 0.566      | 0.143        | 0.007 (0.001)    | 0.427 (0.035)    | 0 (0.000) |    15.05 | ADRON, kreaz, kritik, l0rd-dll, oxygeN |
|            1 |     2175 | 2023-05-04 | Monte    | L   | 0.420      | -            | -                | -                | -         |    -0.06 | ADRON, kritik, l0rd-dll, oxygeN, Topa  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
