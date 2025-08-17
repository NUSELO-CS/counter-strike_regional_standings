### Roster Details<br />
Team Name: ESC Gaming<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [224](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [117]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  512.6<br />
<br />
Final Rank Value (512.6) = Starting Rank Value (511.9) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.003[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 511.9
- 400 + ( ( 0.057 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 511.9


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
|            6 |     3471 | 2025-02-28 | Tricked Esport    | L   | 0.070      | -            | -                | -                | -         |    -0.17 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            5 |     3559 | 2025-02-25 | OG                | L   | 0.051      | -            | -                | -                | -         |    -0.85 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            4 |     3599 | 2025-02-24 | Ninjas in Pyjamas | W   | 0.043      | 0.384        | 0.211 (0.003)    | 0.692 (0.011)    | 0 (0.000) |     1.35 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            3 |     3612 | 2025-02-23 | TPuDCATb TPu      | L   | 0.038      | -            | -                | -                | -         |    -0.18 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            2 |     3623 | 2025-02-22 | Fire Flux Esports | L   | 0.032      | -            | -                | -                | -         |    -0.17 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            1 |     3644 | 2025-02-21 | KOLESIE           | W   | 0.025      | 0.384        | 0.056 (0.001)    | 0.480 (0.005)    | 0 (0.000) |     0.77 | AMSALEM, bajmi, maaryy, mASKED, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
