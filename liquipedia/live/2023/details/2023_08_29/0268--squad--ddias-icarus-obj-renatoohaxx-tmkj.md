### Roster Details<br />
Team Name: SQUAD<br />
Roster: DDias, Icarus, obj, renatoohaxx, TMKj<br />
Global Rank: [268](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [160]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  533.4<br />
<br />
Final Rank Value (533.4) = Starting Rank Value (504.5) + Head To Head Adjustments (28.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.134[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.5
- 400 + ( ( 0.054 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 504.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      362 | 2023-08-12 | Preasy          | L   | 1.000      | -            | -                | -                | -         |    -5.80 | DDias, Icarus, obj, renatoohaxx, TMKj |
|            7 |      483 | 2023-08-09 | Astralis Talent | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.097 (0.014)    | 0 (0.000) |    12.15 | DDias, obj, renatoohaxx, sausol, TMKj |
|            6 |      501 | 2023-08-08 | PGE Turow       | L   | 1.000      | -            | -                | -                | -         |    -4.65 | DDias, obj, renatoohaxx, sausol, TMKj |
|            5 |      521 | 2023-08-08 | Astralis Talent | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.097 (0.014)    | 0 (0.000) |    12.43 | DDias, obj, renatoohaxx, sausol, TMKj |
|            4 |      896 | 2023-07-16 | Espionage       | L   | 0.906      | -            | -                | -                | -         |    -1.60 | DDias, Icarus, obj, renatoohaxx, TMKj |
|            3 |      956 | 2023-07-13 | CEPTER          | W   | 0.887      | 0.143        | 0.000 (0.000)    | 0.070 (0.009)    | 0 (0.000) |    11.06 | DDias, Icarus, obj, renatoohaxx, TMKj |
|            2 |      961 | 2023-07-13 | THE FREE        | W   | 0.885      | 0.143        | 0.012 (0.001)    | 0.425 (0.054)    | 0 (0.000) |    21.11 | DDias, Icarus, obj, renatoohaxx, TMKj |
|            1 |      979 | 2023-07-12 | CEPTER          | L   | 0.880      | -            | -                | -                | -         |   -15.84 | DDias, Icarus, obj, renatoohaxx, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
