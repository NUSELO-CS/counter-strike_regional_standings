### Roster Details<br />
Team Name: ESC Gaming<br />
Roster: AMSALEM, bajmi, maaryy, mASKED, SaMey<br />
Global Rank: [221](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [116]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  527.8<br />
<br />
Final Rank Value (527.8) = Starting Rank Value (522.5) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.5
- 400 + ( ( 0.065 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 522.5


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
|            6 |     3288 | 2025-02-28 | Tricked Esport    | L   | 0.150      | -            | -                | -                | -         |    -0.47 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            5 |     3376 | 2025-02-25 | OG                | L   | 0.131      | -            | -                | -                | -         |    -0.19 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            4 |     3416 | 2025-02-24 | Ninjas in Pyjamas | W   | 0.123      | 0.384        | 0.193 (0.009)    | 0.844 (0.040)    | 0 (0.000) |     3.86 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            3 |     3429 | 2025-02-23 | TPuDCATb TPu      | L   | 0.118      | -            | -                | -                | -         |    -0.56 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            2 |     3440 | 2025-02-22 | Fire Flux Esports | L   | 0.113      | -            | -                | -                | -         |    -0.59 | AMSALEM, bajmi, maaryy, mASKED, SaMey |
|            1 |     3461 | 2025-02-21 | KOLESIE           | W   | 0.105      | 0.384        | 0.048 (0.002)    | 0.543 (0.022)    | 0 (0.000) |     3.21 | AMSALEM, bajmi, maaryy, mASKED, SaMey |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
