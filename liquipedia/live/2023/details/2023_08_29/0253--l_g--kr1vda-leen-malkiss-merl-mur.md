### Roster Details<br />
Team Name: L&G<br />
Roster: kr1vda, leen, Malkiss, MERL, muR<br />
Global Rank: [253](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [152]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  586.4<br />
<br />
Final Rank Value (586.4) = Starting Rank Value (566.0) + Head To Head Adjustments (20.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.086<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 566.0
- 400 + ( ( 0.086 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 566.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      849 | 2023-07-19 | Anonymo         | L   | 0.925      | -            | -                | -                | -         |    -3.98 | kr1vda, leen, Malkiss, MERL, muR |
|            9 |      943 | 2023-07-14 | PACT            | L   | 0.893      | -            | -                | -                | -         |    -6.28 | kr1vda, leen, Malkiss, MERL, muR |
|            8 |     1034 | 2023-07-10 | THE FREE        | W   | 0.866      | 0.371        | 0.012 (0.004)    | 0.425 (0.136)    | 0 (0.000) |    19.26 | kr1vda, leen, Malkiss, MERL, muR |
|            7 |     1131 | 2023-06-18 | NAVI Youth      | L   | 0.720      | -            | -                | -                | -         |    -9.17 | kr1vda, leen, Malkiss, MERL, muR |
|            6 |     1294 | 2023-06-09 | Ukraine         | L   | 0.660      | -            | -                | -                | -         |    -4.32 | kr1vda, leen, Malkiss, MERL, muR |
|            5 |     1332 | 2023-06-08 | Hungary         | L   | 0.653      | -            | -                | -                | -         |    -2.88 | kr1vda, leen, Malkiss, MERL, muR |
|            4 |     1492 | 2023-06-02 | The Prodigies   | L   | 0.614      | -            | -                | -                | -         |    -6.29 | kr1vda, leen, Malkiss, MERL, muR |
|            3 |     1528 | 2023-06-01 | ALTERNATE aTTaX | W   | 0.608      | 0.371        | 0.046 (0.010)    | 0.884 (0.199)    | 0 (0.000) |    17.04 | kr1vda, leen, Malkiss, MERL, muR |
|            2 |     1564 | 2023-05-31 | ECLOT           | W   | 0.601      | 0.371        | 0.114 (0.025)    | 0.710 (0.159)    | 0 (0.000) |    18.19 | kr1vda, leen, Malkiss, MERL, muR |
|            1 |     1624 | 2023-05-30 | ECSTATIC        | L   | 0.592      | -            | -                | -                | -         |    -1.11 | kr1vda, leen, Malkiss, MERL, muR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
