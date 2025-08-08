### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: draken, MaiL09, Sapec, SHiNE, Svedjehed<br />
Global Rank: [62](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [42]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  948.2<br />
<br />
Final Rank Value (948.2) = Starting Rank Value (942.5) + Head To Head Adjustments (5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.421[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.277[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 942.5
- 400 + ( ( 0.285 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 942.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      724 | 2025-06-14 | ECSTATIC        | L   | 0.838      | -            | -                | -                | -         |    -4.18 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|           13 |      743 | 2025-06-14 | Phantom Esports | W   | 0.836      | 0.360        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.836) |     1.14 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|           12 |      754 | 2025-06-13 | Metizport       | L   | 0.832      | -            | -                | -                | -         |   -14.05 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|           11 |     1021 | 2025-05-24 | Alliance        | L   | 0.697      | -            | -                | -                | -         |    -7.56 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|           10 |     1032 | 2025-05-23 | ENCE Academy    | W   | 0.692      | 0.500        | 0.021 (0.007)    | 0.207 (0.072)    | 1 (0.692) |     6.03 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            9 |     1051 | 2025-05-22 | WOPA Esport     | W   | 0.684      | 0.500        | 0.000 (0.000)    | 0.044 (0.015)    | 1 (0.684) |     1.08 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            8 |     1103 | 2025-05-20 | ECSTATIC        | L   | 0.671      | -            | -                | -                | -         |    -3.62 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            7 |     1111 | 2025-05-20 | JANO Esports    | W   | 0.670      | 0.500        | 0.001 (0.000)    | 0.089 (0.030)    | 1 (0.670) |     3.36 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            6 |     1336 | 2025-05-10 | Viperio         | W   | 0.605      | 0.435        | 0.000 (0.000)    | 0.053 (0.014)    | 0 (0.000) |     0.84 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            5 |     1528 | 2025-05-03 | Alliance        | W   | 0.558      | 0.435        | 0.052 (0.013)    | 0.681 (0.165)    | 0 (0.000) |    12.75 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            4 |     1530 | 2025-05-03 | EYEBALLERS      | W   | 0.558      | 0.435        | 0.024 (0.006)    | 0.410 (0.099)    | 0 (0.000) |     5.36 | draken, MaiL09, Sapec, SHiNE, Svedjehed |
|            3 |     1950 | 2025-04-13 | Sashi Esport    | W   | 0.425      | 0.311        | 0.011 (0.001)    | 1.000 (0.132)    | 1 (0.425) |     7.08 | draken, MaiL09, Ro1f, Sapec, SHiNE      |
|            2 |     1953 | 2025-04-13 | TEAM NEXT LEVEL | L   | 0.424      | -            | -                | -                | -         |    -3.11 | draken, MaiL09, Ro1f, Sapec, SHiNE      |
|            1 |     1958 | 2025-04-13 | Astralis Talent | W   | 0.423      | 0.311        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.423) |     0.61 | draken, MaiL09, Ro1f, Sapec, SHiNE      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,909.98)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-24 |      0.698 | $15,000.00     | $10,475.00      |
| 2025-04-13 |      0.425 | $1,023.14      | $434.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
