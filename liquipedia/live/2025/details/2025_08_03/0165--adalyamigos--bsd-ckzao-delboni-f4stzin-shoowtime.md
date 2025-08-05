### Roster Details<br />
Team Name: AdalYamigos<br />
Roster: bsd, ckzao, delboNi, f4stzin, SHOOWTiME<br />
Global Rank: [165](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_03.md)<br />
Regional Rank: [42]( ../../standings_americas_2025_08_03.md)<br />
<br />
Final Rank Value:  621.5<br />
<br />
Final Rank Value (621.5) = Starting Rank Value (628.9) + Head To Head Adjustments (-7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.9
- 400 + ( ( 0.120 - 0.000 ) / ( 0.839 - 0.000 ) ) * 1600 = 628.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2653 | 2025-03-20 | Bounty Hunters Esports | L   | 0.287      | -            | -                | -                | -         |    -3.09 | ckzao, delboNi, f4stzin, pesadelo, SHOOWTiME |
|           12 |     2654 | 2025-03-20 | Bounty Hunters Esports | L   | 0.287      | -            | -                | -                | -         |    -3.16 | ckzao, delboNi, f4stzin, pesadelo, SHOOWTiME |
|           11 |     2833 | 2025-03-11 | ShindeN                | L   | 0.227      | -            | -                | -                | -         |    -2.99 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME      |
|           10 |     2868 | 2025-03-10 | Sharks Esports         | W   | 0.219      | 0.371        | 0.053 (0.004)    | 0.582 (0.047)    | 0 (0.000) |     5.92 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME      |
|            9 |     2911 | 2025-03-09 | Elevate                | W   | 0.212      | 0.371        | 0.000 (0.000)    | 0.270 (0.021)    | 0 (0.000) |     2.48 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME      |
|            8 |     3005 | 2025-03-08 | ODDIK                  | L   | 0.205      | -            | -                | -                | -         |    -0.91 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME      |
|            7 |     3062 | 2025-03-07 | LaChampionsLiga        | L   | 0.199      | -            | -                | -                | -         |    -4.10 | bsd, ckzao, delboNi, f4stzin, SHOOWTiME      |
|            6 |     3569 | 2025-02-15 | MIBR Academy           | L   | 0.066      | -            | -                | -                | -         |    -1.43 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME   |
|            5 |     3622 | 2025-02-13 | Nitro.GG               | W   | 0.052      | 0.371        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.46 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME   |
|            4 |     3659 | 2025-02-11 | Bounty Hunters Esports | L   | 0.040      | -            | -                | -                | -         |    -0.43 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME   |
|            3 |     3728 | 2025-02-09 | Game Hunters           | L   | 0.026      | -            | -                | -                | -         |    -0.23 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME   |
|            2 |     3825 | 2025-02-07 | Imperial Esports       | L   | 0.012      | -            | -                | -                | -         |    -0.04 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME   |
|            1 |     3841 | 2025-02-06 | 2Game Esports          | W   | 0.006      | 0.500        | 0.022 (0.000)    | 0.548 (0.002)    | 0 (0.000) |     0.14 | cass1n, ckzao, delboNi, f4stzin, SHOOWTiME   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($341.15)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-11 |      0.227 | $1,500.00      | $341.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
