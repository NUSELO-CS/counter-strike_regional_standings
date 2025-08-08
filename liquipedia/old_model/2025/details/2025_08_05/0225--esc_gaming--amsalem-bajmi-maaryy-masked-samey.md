### Roster Details<br />
Team Name: ESC Gaming<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [225](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  511.8<br />
<br />
Final Rank Value (511.8) = Starting Rank Value (507.6) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.6
- 400 + ( ( 0.057 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 507.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3333 | 2025-02-28 | Tricked Esport    | L   | 0.130      | -            | -                | -                | -         |    -0.40 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            5 |     3421 | 2025-02-25 | OG                | L   | 0.111      | -            | -                | -                | -         |    -0.22 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            4 |     3461 | 2025-02-24 | Ninjas in Pyjamas | W   | 0.103      | 0.143        | 0.196 (0.003)    | 0.842 (0.012)    | 0 (0.000) |     3.23 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            3 |     3474 | 2025-02-23 | TPuDCATb TPu      | L   | 0.098      | -            | -                | -                | -         |    -0.46 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            2 |     3485 | 2025-02-22 | Fire Flux Esports | L   | 0.092      | -            | -                | -                | -         |    -0.51 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            1 |     3506 | 2025-02-21 | KOLESIE           | W   | 0.085      | 0.143        | 0.049 (0.001)    | 0.551 (0.007)    | 0 (0.000) |     2.60 | AMSALEM, bajmi, maaryy, mASKED, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
