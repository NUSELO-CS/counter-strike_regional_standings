### Roster Details<br />
Team Name: Believe<br />
Roster: Banjo, isk, Maze, milky, suNny<br />
Global Rank: [285](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [170]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  495.6<br />
<br />
Final Rank Value (495.6) = Starting Rank Value (490.3) + Head To Head Adjustments (5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 490.3
- 400 + ( ( 0.047 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 490.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3032 | 2023-03-26 | Question Mark | L   | 0.161      | -            | -                | -                | -         |    -0.49 | Banjo, isk, Maze, milky, suNny  |
|            4 |     3059 | 2023-03-25 | FTW           | W   | 0.154      | 0.143        | 0.019 (0.000)    | 0.198 (0.004)    | 0 (0.000) |     4.22 | Banjo, isk, Maze, milky, suNny  |
|            3 |     3064 | 2023-03-25 | Budapest Five | W   | 0.153      | 0.143        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     2.45 | Banjo, isk, Maze, milky, suNny  |
|            2 |     3118 | 2023-03-23 | ex-Coalesce   | L   | 0.141      | -            | -                | -                | -         |    -0.89 | Banjo, Maze, milky, suNny, volt |
|            1 |     3541 | 2023-03-10 | SAW           | L   | 0.054      | -            | -                | -                | -         |    -0.03 | isk, Maze, milky, suNny, volt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
