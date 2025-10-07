### Roster Details<br />
Team Name: BetBoom<br />
Roster: danistzz, KaiR0N-, nafany, s1ren, zorte<br />
Global Rank: [89](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [66]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  849.0<br />
<br />
Final Rank Value (849.0) = Starting Rank Value (637.3) + Head To Head Adjustments (211.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.362[<sup>2</sup>](#table1)
- Opponent Network: 0.129[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.484[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.3
- 400 + ( ( 0.123 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 637.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       92 | 2023-08-25 | 9INE              | W   | 1.000      | 0.143        | 0.265 (0.038)    | 0.734 (0.105)    | 0 (0.000) |    27.99 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           12 |      102 | 2023-08-25 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -4.24 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           11 |      114 | 2023-08-24 | Ninjas in Pyjamas | W   | 1.000      | 0.143        | 0.194 (0.028)    | 0.670 (0.096)    | 0 (0.000) |    29.80 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|           10 |      123 | 2023-08-24 | Victory Zigzag    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.194 (0.028)    | 0 (0.000) |    10.11 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            9 |      140 | 2023-08-23 | Apeks             | L   | 1.000      | -            | -                | -                | -         |    -1.56 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            8 |      148 | 2023-08-23 | OG                | W   | 1.000      | 0.143        | 0.075 (0.011)    | 0.386 (0.055)    | 0 (0.000) |    25.51 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            7 |      179 | 2023-08-21 | Romania           | W   | 1.000      | 0.435        | 0.000 (0.000)    | 0.239 (0.104)    | 0 (0.000) |    12.34 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            6 |      210 | 2023-08-19 | JANO              | W   | 1.000      | 0.435        | 0.007 (0.003)    | 0.427 (0.186)    | 0 (0.000) |    16.31 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            5 |      251 | 2023-08-16 | Space             | W   | 1.000      | 0.435        | 0.099 (0.043)    | 0.904 (0.393)    | 0 (0.000) |    24.14 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            4 |      269 | 2023-08-15 | Preasy            | L   | 1.000      | -            | -                | -                | -         |   -12.19 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            3 |      429 | 2023-08-10 | Into the Breach   | W   | 1.000      | 0.143        | 0.169 (0.024)    | 0.530 (0.076)    | 0 (0.000) |    28.69 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            2 |      439 | 2023-08-10 | 500               | W   | 1.000      | 0.143        | 0.075 (0.011)    | 1.000 (0.143)    | 0 (0.000) |    26.30 | danistzz, KaiR0N-, nafany, s1ren, zorte |
|            1 |      448 | 2023-08-10 | ECLOT             | W   | 1.000      | 0.143        | 0.114 (0.016)    | 0.710 (0.101)    | 0 (0.000) |    28.48 | danistzz, KaiR0N-, nafany, s1ren, zorte |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
