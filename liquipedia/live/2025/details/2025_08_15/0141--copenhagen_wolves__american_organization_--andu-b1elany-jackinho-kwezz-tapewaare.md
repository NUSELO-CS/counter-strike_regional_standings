### Roster Details<br />
Team Name: Copenhagen Wolves (American organization)<br />
Roster: aNdu, b1elany, Jackinho, kwezz, Tapewaare<br />
Global Rank: [141](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  683.7<br />
<br />
Final Rank Value (683.7) = Starting Rank Value (672.2) + Head To Head Adjustments (11.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 672.2
- 400 + ( ( 0.139 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 672.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2365 | 2025-04-02 | KOLESIE         | W   | 0.292      | 0.500        | 0.056 (0.008)    | 0.480 (0.070)    | 0 (0.000) |     8.65 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|            5 |     2718 | 2025-03-26 | TPuDCATb TPu    | L   | 0.246      | -            | -                | -                | -         |    -2.21 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|            4 |     2873 | 2025-03-19 | Monte           | W   | 0.199      | 0.500        | 0.004 (0.000)    | 0.110 (0.011)    | 0 (0.000) |     3.61 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|            3 |     3553 | 2025-02-25 | SINNERS Esports | W   | 0.052      | 0.500        | 0.041 (0.001)    | 0.558 (0.015)    | 0 (0.000) |     1.35 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|            2 |     3700 | 2025-02-18 | 9Pandas         | W   | 0.006      | 0.500        | 0.027 (0.000)    | 0.178 (0.001)    | 0 (0.000) |     0.13 | aNdu, b1elany, Jackinho, kwezz, Tapewaare |
|            1 |     3706 | 2025-02-18 | BC.Game Esports | L   | 0.005      | -            | -                | -                | -         |    -0.04 | aNdu, b1elany, Jackinho, szejn, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,656.46)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.552 | $3,000.00      | $1,656.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
