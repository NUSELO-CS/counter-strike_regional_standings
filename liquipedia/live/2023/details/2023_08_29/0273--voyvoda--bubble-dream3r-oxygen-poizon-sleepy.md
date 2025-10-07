### Roster Details<br />
Team Name: VOYVODA<br />
Roster: bubble, dream3r, oxygeN, poizon, sleepy<br />
Global Rank: [273](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [164]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  515.6<br />
<br />
Final Rank Value (515.6) = Starting Rank Value (509.0) + Head To Head Adjustments (6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.0
- 400 + ( ( 0.056 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 509.0


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
|            9 |     3454 | 2023-03-13 | 500             | L   | 0.074      | -            | -                | -                | -         |    -0.18 | bubble, dream3r, oxygeN, poizon, sleepy  |
|            8 |     3479 | 2023-03-12 | Cloud9          | L   | 0.067      | -            | -                | -                | -         |    -0.00 | bubble, dream3r, oxygeN, poizon, REDSTAR |
|            7 |     3488 | 2023-03-12 | Aurora          | W   | 0.067      | 0.143        | 0.173 (0.002)    | 0.990 (0.009)    | 0 (0.000) |     2.04 | bubble, dream3r, oxygeN, poizon, REDSTAR |
|            6 |     3510 | 2023-03-11 | Bad News Eagles | W   | 0.060      | 0.143        | 0.135 (0.001)    | 0.751 (0.006)    | 0 (0.000) |     1.86 | bubble, dream3r, oxygeN, poizon, REDSTAR |
|            5 |     3521 | 2023-03-11 | Eternal Fire    | W   | 0.060      | 0.143        | 0.046 (0.000)    | 0.749 (0.006)    | 0 (0.000) |     1.75 | bubble, dream3r, oxygeN, poizon, REDSTAR |
|            4 |     3612 | 2023-03-08 | Nexus           | W   | 0.041      | 0.435        | 0.000 (0.000)    | 0.373 (0.007)    | 0 (0.000) |     0.79 | bubble, dream3r, oxygeN, poizon, REDSTAR |
|            3 |     3700 | 2023-03-05 | Illuminar       | W   | 0.018      | 0.435        | 0.000 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     0.37 | bubble, dream3r, oxygeN, poizon, REDSTAR |
|            2 |     3710 | 2023-03-04 | Astralis Talent | L   | 0.014      | -            | -                | -                | -         |    -0.02 | bubble, dream3r, oxygeN, poizon, REDSTAR |
|            1 |     3764 | 2023-03-02 | Let us cook     | W   | 0.001      | 0.435        | 0.002 (0.000)    | 0.174 (0.000)    | 0 (0.000) |     0.02 | bubble, dream3r, oxygeN, poizon, REDSTAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
