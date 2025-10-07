### Roster Details<br />
Team Name: FULL SEND<br />
Roster: 4TAYLOR, AMC, b1, Majesticzz, spamzzy<br />
Global Rank: [221](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [63]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  516.3<br />
<br />
Final Rank Value (516.3) = Starting Rank Value (525.3) + Head To Head Adjustments (-9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.147[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.3
- 400 + ( ( 0.064 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 525.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      704 | 2025-09-10 | Team Aether          | L   | 1.000      | -            | -                | -                | -         |   -10.24 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy |
|           13 |      749 | 2025-09-09 | Life's A Game        | L   | 1.000      | -            | -                | -                | -         |    -6.32 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy |
|           12 |      798 | 2025-09-08 | NYX (American team)  | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.042 (0.015)    | 0 (0.000) |    16.26 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy |
|           11 |     1152 | 2025-08-23 | True Synergy Gaming  | L   | 0.907      | -            | -                | -                | -         |   -14.96 | AMC, b1, Jardani, Majesticzz, spamzzy |
|           10 |     1184 | 2025-08-21 | Chicken Coop Esports | L   | 0.894      | -            | -                | -                | -         |    -6.43 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            9 |     1342 | 2025-08-15 | Regain               | L   | 0.854      | -            | -                | -                | -         |   -11.49 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            8 |     1389 | 2025-08-14 | InControl            | L   | 0.848      | -            | -                | -                | -         |    -7.15 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            7 |     1434 | 2025-08-13 | Life's A Game        | L   | 0.841      | -            | -                | -                | -         |    -6.31 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            6 |     1490 | 2025-08-12 | Getting Info         | W   | 0.834      | 0.363        | 0.019 (0.006)    | 0.407 (0.123)    | 0 (0.000) |    22.36 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            5 |     1539 | 2025-08-11 | Ghost Gaming         | W   | 0.828      | 0.363        | 0.000 (0.000)    | 0.055 (0.017)    | 0 (0.000) |    11.02 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            4 |     1544 | 2025-08-11 | BOSS                 | L   | 0.827      | -            | -                | -                | -         |    -5.75 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            3 |     1589 | 2025-08-10 | Arrival Seven        | W   | 0.820      | 0.333        | 0.002 (0.001)    | 0.100 (0.027)    | 0 (0.000) |    17.12 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            2 |     1657 | 2025-08-07 | BOSS                 | L   | 0.800      | -            | -                | -                | -         |    -5.28 | AMC, b1, Jardani, Majesticzz, spamzzy |
|            1 |     2096 | 2025-07-12 | Marsborne            | L   | 0.627      | -            | -                | -                | -         |    -1.87 | 4TAYLOR, amc, b1, Majestic, spamzzy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
