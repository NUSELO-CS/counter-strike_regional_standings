### Roster Details<br />
Team Name: BC.Game Esports<br />
Roster: CYPHER, jkaem, nawwk, nexa, pr1metapz<br />
Global Rank: [179](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [106]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  619.8<br />
<br />
Final Rank Value (619.8) = Starting Rank Value (619.3) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.001[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.3
- 400 + ( ( 0.112 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 619.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3501 | 2025-04-25 | Partizan Esports | L   | 0.103      | -            | -                | -                | -         |    -0.11 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            6 |     3513 | 2025-04-24 | HEROIC           | L   | 0.097      | -            | -                | -                | -         |    -0.04 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            5 |     3666 | 2025-04-16 | B8               | L   | 0.043      | -            | -                | -                | -         |    -0.01 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            4 |     3688 | 2025-04-15 | BIG              | L   | 0.037      | -            | -                | -                | -         |    -0.01 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            3 |     3700 | 2025-04-14 | Metizport        | L   | 0.032      | -            | -                | -                | -         |    -0.26 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            2 |     3707 | 2025-04-14 | Fnatic           | W   | 0.030      | 0.525        | 0.148 (0.002)    | 0.907 (0.014)    | 0 (0.000) |     0.95 | CYPHER, jkaem, nawwk, nexa, pr1metapz |
|            1 |     3742 | 2025-04-12 | BetBoom Team     | L   | 0.017      | -            | -                | -                | -         |    -0.00 | CYPHER, jkaem, nawwk, nexa, pr1metapz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($177.50)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-27 |      0.118 | $1,500.00      | $177.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
