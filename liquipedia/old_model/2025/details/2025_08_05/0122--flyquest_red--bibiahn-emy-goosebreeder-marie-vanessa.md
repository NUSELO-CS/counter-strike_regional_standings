### Roster Details<br />
Team Name: FlyQuest RED<br />
Roster: BiBiAhn, emy, GooseBreeder, marie, vanessa<br />
Global Rank: [122](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [30]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  725.8<br />
<br />
Final Rank Value (725.8) = Starting Rank Value (739.6) + Head To Head Adjustments (-13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.392[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.120[<sup>2</sup>](#table1)

The average of these factors is 0.178<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 739.6
- 400 + ( ( 0.178 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 739.6


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
|           14 |     1027 | 2025-05-23 | Imperial Female      | L   | 0.693      | -            | -                | -                | -         |    -9.67 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|           13 |     1033 | 2025-05-23 | MIBR Female          | W   | 0.691      | 0.624        | 0.013 (0.006)    | 0.073 (0.032)    | 1 (0.691) |     8.90 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|           12 |     1044 | 2025-05-22 | Imperial Female      | L   | 0.686      | -            | -                | -                | -         |    -9.60 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|           11 |     1686 | 2025-04-26 | NRG                  | L   | 0.515      | -            | -                | -                | -         |    -2.20 | BiBiAhn, emy, GooseBreeder, Shakezullah, vanessa |
|           10 |     1977 | 2025-04-11 | Ghost Gaming         | W   | 0.414      | 0.323        | 0.001 (0.000)    | 0.031 (0.004)    | 0 (0.000) |     4.21 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            9 |     2220 | 2025-04-02 | Black mold           | W   | 0.354      | 0.323        | 0.001 (0.000)    | 0.026 (0.003)    | 0 (0.000) |     3.68 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            8 |     2436 | 2025-03-28 | Daaku                | L   | 0.320      | -            | -                | -                | -         |    -7.98 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            7 |     2500 | 2025-03-27 | Chicken Coop Esports | L   | 0.313      | -            | -                | -                | -         |    -7.52 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            6 |     2571 | 2025-03-26 | MEGA JUNERS          | W   | 0.307      | 0.323        | 0.001 (0.000)    | 0.018 (0.002)    | 0 (0.000) |     2.88 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            5 |     2731 | 2025-03-19 | Nyx Empyre           | W   | 0.261      | 0.323        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.79 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            4 |     2843 | 2025-03-13 | Girl kissers         | W   | 0.221      | 0.323        | 0.001 (0.000)    | 0.093 (0.007)    | 0 (0.000) |     2.31 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            3 |     3153 | 2025-03-06 | Supernova Comets     | L   | 0.174      | -            | -                | -                | -         |    -1.65 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            2 |     3369 | 2025-02-26 | Lumen                | W   | 0.121      | 0.323        | 0.002 (0.000)    | 0.072 (0.003)    | 0 (0.000) |     1.28 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |
|            1 |     3768 | 2025-02-09 | JERSA ESPORTS        | L   | 0.006      | -            | -                | -                | -         |    -0.15 | BiBiAhn, emy, GooseBreeder, marie, vanessa       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,980.28)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.705 | $17,000.00     | $11,980.28      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
