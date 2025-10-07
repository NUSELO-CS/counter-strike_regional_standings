### Roster Details<br />
Team Name: Forward<br />
Roster: Flarich, JIaYm, k0s, ProbLeM, xiELO<br />
Global Rank: [282](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [168]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  499.8<br />
<br />
Final Rank Value (499.8) = Starting Rank Value (497.3) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.3
- 400 + ( ( 0.050 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 497.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1955 | 2023-05-19 | PROSPECTS   | L   | 0.518      | -            | -                | -                | -         |    -1.12 | Flarich, JIaYm, k0s, ProbLeM, xiELO |
|            5 |     2133 | 2023-05-07 | K23         | W   | 0.438      | 0.548        | 0.004 (0.001)    | 0.100 (0.024)    | 0 (0.000) |    10.10 | JIaYm, k0s, mou, ProbLeM, xiELO     |
|            4 |     2170 | 2023-05-04 | Fake Natty  | L   | 0.421      | -            | -                | -                | -         |    -1.44 | JIaYm, k0s, mou, ProbLeM, xiELO     |
|            3 |     2198 | 2023-05-03 | BIG Academy | L   | 0.414      | -            | -                | -                | -         |    -2.36 | JIaYm, k0s, mou, ProbLeM, xiELO     |
|            2 |     2779 | 2023-04-07 | Websterz    | L   | 0.239      | -            | -                | -                | -         |    -0.57 | JIaYm, k0s, mou, ProbLeM, xiELO     |
|            1 |     2820 | 2023-04-06 | Boston crab | L   | 0.232      | -            | -                | -                | -         |    -2.16 | JIaYm, k0s, mou, ProbLeM, xiELO     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
