### Roster Details<br />
Team Name: Phantom Esports<br />
Roster: Ayteel, DGL, Kunai, szejn, TOAO<br />
Global Rank: [130](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [81]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  739.6<br />
<br />
Final Rank Value (739.6) = Starting Rank Value (685.2) + Head To Head Adjustments (54.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.2
- 400 + ( ( 0.146 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 685.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      202 | 2025-09-27 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -1.41 | Ayteel, DGL, Kunai, szejn, TOAO |
|            6 |      221 | 2025-09-27 | Fnatic            | L   | 1.000      | -            | -                | -                | -         |    -0.67 | Ayteel, DGL, Kunai, szejn, TOAO |
|            5 |      249 | 2025-09-26 | Wildcard          | W   | 1.000      | 0.354        | 0.056 (0.020)    | 0.840 (0.297)    | 1 (1.000) |    28.80 | Ayteel, DGL, Kunai, szejn, TOAO |
|            4 |      271 | 2025-09-26 | ESC Gaming        | W   | 1.000      | 0.354        | 0.126 (0.044)    | 0.986 (0.349)    | 1 (1.000) |    30.27 | Ayteel, DGL, Kunai, szejn, TOAO |
|            3 |      852 | 2025-09-07 | FUT Esports       | L   | 1.000      | -            | -                | -                | -         |    -1.49 | Ayteel, DGL, Kunai, szejn, TOAO |
|            2 |     2493 | 2025-06-14 | Johnny Speeds     | L   | 0.436      | -            | -                | -                | -         |    -0.99 | Ayteel, DGL, Kunai, szejn, TOAO |
|            1 |     2505 | 2025-06-13 | Ninjas in Pyjamas | L   | 0.432      | -            | -                | -                | -         |    -0.08 | Ayteel, DGL, Kunai, szejn, TOAO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
