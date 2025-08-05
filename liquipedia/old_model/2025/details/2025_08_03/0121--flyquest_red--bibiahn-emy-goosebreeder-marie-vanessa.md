### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, emy, GooseBreeder, marie, vanessa<br />
Global Rank: [121](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_03.md)<br />
Regional Rank: [29]( ../../standings_americas_2025_08_03.md)<br />
<br />
Final Rank Value:  728.5<br />
<br />
Final Rank Value (728.5) = Starting Rank Value (743.5) + Head To Head Adjustments (-15.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.079[<sup>2</sup>](#table1)

The average of these factors is 0.179<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.5
- 400 + ( ( 0.179 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 743.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      982 | 2025-05-23 | Imperial Female      | L   | 0.713      | -            | -                | -                | -         |    -9.89 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|           14 |      988 | 2025-05-23 | MIBR Female          | W   | 0.711      | 0.624        | 0.013 (0.006)    | 0.077 (0.034)    | 1 (0.711) |     9.19 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|           13 |      999 | 2025-05-22 | Imperial Female      | L   | 0.706      | -            | -                | -                | -         |    -9.82 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|           12 |     1641 | 2025-04-26 | NRG                  | L   | 0.535      | -            | -                | -                | -         |    -2.26 | BiBiAhn, emy, GooseBreeder, Shakezullah, vanessa |
|           11 |     1932 | 2025-04-11 | Ghost Gaming         | W   | 0.434      | 0.323        | 0.001 (0.000)    | 0.033 (0.005)    | 0 (0.000) |     4.42 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|           10 |     2175 | 2025-04-02 | Black mold           | W   | 0.374      | 0.323        | 0.001 (0.000)    | 0.029 (0.003)    | 0 (0.000) |     3.89 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            9 |     2391 | 2025-03-28 | Daaku                | L   | 0.340      | -            | -                | -                | -         |    -8.50 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            8 |     2455 | 2025-03-27 | Chicken Coop Esports | L   | 0.334      | -            | -                | -                | -         |    -8.04 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            7 |     2526 | 2025-03-26 | MEGA JUNERS          | W   | 0.327      | 0.323        | 0.001 (0.000)    | 0.019 (0.002)    | 0 (0.000) |     3.04 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            6 |     2686 | 2025-03-19 | Nyx Empyre           | W   | 0.281      | 0.323        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.91 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            5 |     2798 | 2025-03-13 | Girl kissers         | W   | 0.241      | 0.323        | 0.001 (0.000)    | 0.095 (0.007)    | 0 (0.000) |     2.52 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            4 |     3108 | 2025-03-06 | Supernova Comets     | L   | 0.194      | -            | -                | -                | -         |    -1.81 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            3 |     3324 | 2025-02-26 | Lumen                | W   | 0.141      | 0.323        | 0.002 (0.000)    | 0.076 (0.003)    | 0 (0.000) |     1.49 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            2 |     3723 | 2025-02-09 | JERSA ESPORTS        | L   | 0.026      | -            | -                | -                | -         |    -0.64 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            1 |     3770 | 2025-02-08 | InControl            | L   | 0.019      | -            | -                | -                | -         |    -0.46 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,322.64)
- Divide that value by the 5th highest value among all rosters ($436,168.75)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.725 | $17,000.00     | $12,322.64      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
