### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, history, kye, mlhzin, piriajr<br />
Global Rank: [133](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_05.md)<br />
Regional Rank: [37]( ../../standings_americas_2025_08_05.md)<br />
<br />
Final Rank Value:  703.0<br />
<br />
Final Rank Value (703.0) = Starting Rank Value (680.1) + Head To Head Adjustments (22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.1
- 400 + ( ( 0.147 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 680.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2876 | 2025-03-11 | ShindeN             | W   | 0.207      | 0.371        | 0.005 (0.000)    | 0.387 (0.030)    | 0 (0.000) |     3.48 | arT, history, kye, mlhzin, piriajr |
|           13 |     2882 | 2025-03-11 | Keyd Stars          | W   | 0.206      | 0.371        | 0.007 (0.001)    | 0.437 (0.033)    | 0 (0.000) |     3.70 | arT, history, kye, mlhzin, piriajr |
|           12 |     2908 | 2025-03-10 | SELVA               | L   | 0.200      | -            | -                | -                | -         |    -2.50 | arT, history, kye, mlhzin, piriajr |
|           11 |     2926 | 2025-03-10 | ODDIK               | W   | 0.198      | 0.371        | 0.074 (0.005)    | 0.623 (0.046)    | 0 (0.000) |     5.07 | arT, history, kye, mlhzin, piriajr |
|           10 |     2952 | 2025-03-09 | SELVA               | W   | 0.193      | 0.769        | 0.017 (0.003)    | 0.371 (0.055)    | 0 (0.000) |     3.73 | arT, history, kye, mlhzin, piriajr |
|            9 |     3003 | 2025-03-08 | Game Hunters        | W   | 0.188      | 0.769        | 0.004 (0.001)    | 0.431 (0.062)    | 0 (0.000) |     3.78 | arT, history, kye, mlhzin, piriajr |
|            8 |     3043 | 2025-03-08 | LaChampionsLiga     | W   | 0.185      | 0.371        | 0.000 (0.000)    | 0.100 (0.007)    | 0 (0.000) |     1.68 | arT, history, kye, mlhzin, piriajr |
|            7 |     3095 | 2025-03-07 | Fudidos e anonymous | W   | 0.179      | 0.769        | 0.000 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     1.47 | arT, history, kye, mlhzin, piriajr |
|            6 |     3484 | 2025-02-22 | Imperial Esports    | L   | 0.093      | -            | -                | -                | -         |    -0.42 | arT, history, kye, nicks, piriajr  |
|            5 |     3499 | 2025-02-21 | SELVA               | W   | 0.086      | 0.371        | 0.017 (0.001)    | 0.371 (0.012)    | 0 (0.000) |     1.70 | arT, history, kye, nicks, piriajr  |
|            4 |     3678 | 2025-02-12 | Legacy              | L   | 0.027      | -            | -                | -                | -         |    -0.01 | arT, history, kye, nicks, piriajr  |
|            3 |     3682 | 2025-02-12 | Sharks Esports      | W   | 0.026      | 0.769        | 0.055 (0.001)    | 0.650 (0.013)    | 0 (0.000) |     0.67 | arT, history, kye, nicks, piriajr  |
|            2 |     3699 | 2025-02-11 | Legacy              | L   | 0.021      | -            | -                | -                | -         |    -0.01 | arT, history, kye, nicks, piriajr  |
|            1 |     3705 | 2025-02-11 | Imperial Esports    | W   | 0.019      | 0.769        | 0.121 (0.002)    | 0.691 (0.010)    | 0 (0.000) |     0.53 | arT, history, kye, nicks, piriajr  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,214.03)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-11 |      0.207 | $10,000.00     | $2,072.92       |
| 2025-02-22 |      0.094 | $1,500.00      | $141.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
