### Roster Details<br />
Team Name: Take Flyte<br />
Roster: Crisp, Drop, huncho, jared, Panic<br />
Global Rank: [197](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [53]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  572.7<br />
<br />
Final Rank Value (572.7) = Starting Rank Value (561.5) + Head To Head Adjustments (11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.113[<sup>2</sup>](#table1)

The average of these factors is 0.083<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 561.5
- 400 + ( ( 0.083 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 561.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      703 | 2025-09-10 | BOSS              | L   | 1.000      | -            | -                | -                | -         |    -7.41 | Crisp, Drop, huncho, jared, Panic    |
|            7 |      795 | 2025-09-08 | FlyQuest RED      | L   | 1.000      | -            | -                | -                | -         |   -13.49 | Crisp, Drop, huncho, jared, Panic    |
|            6 |      866 | 2025-09-06 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -0.22 | Crisp, Drop, huncho, jared, Panic    |
|            5 |      881 | 2025-09-06 | Mythic            | W   | 0.998      | 0.333        | 0.000 (0.000)    | 0.078 (0.026)    | 1 (0.998) |    12.48 | Crisp, Drop, huncho, jared, Panic    |
|            4 |     1344 | 2025-08-15 | Life's A Game     | L   | 0.854      | -            | -                | -                | -         |    -6.64 | Crisp, FxRE, HAMBOOGA, huncho, Panic |
|            3 |     1395 | 2025-08-14 | MIGHT             | W   | 0.848      | 0.363        | 0.000 (0.000)    | 0.111 (0.034)    | 0 (0.000) |    10.75 | Crisp, FxRE, HAMBOOGA, huncho, Panic |
|            2 |     1440 | 2025-08-13 | Akimbo Esports    | W   | 0.841      | 0.363        | 0.009 (0.003)    | 0.121 (0.037)    | 0 (0.000) |    18.14 | Crisp, FxRE, HAMBOOGA, huncho, Panic |
|            1 |     1488 | 2025-08-12 | Marsborne         | L   | 0.834      | -            | -                | -                | -         |    -2.45 | Crisp, FxRE, HAMBOOGA, huncho, Panic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
