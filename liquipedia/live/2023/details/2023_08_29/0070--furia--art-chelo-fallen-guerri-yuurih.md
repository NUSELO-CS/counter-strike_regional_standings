### Roster Details<br />
Team Name: FURIA<br />
Roster: arT, chelo, FalleN, guerri, yuurih<br />
Global Rank: [70](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [12]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  916.0<br />
<br />
Final Rank Value (916.0) = Starting Rank Value (910.6) + Head To Head Adjustments (5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.144[<sup>2</sup>](#table1)

The average of these factors is 0.264<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 910.6
- 400 + ( ( 0.264 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 910.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       53 | 2023-08-26 | 00NATION      | L   | 1.000      | -            | -                | -                | -         |   -11.23 | arT, chelo, FalleN, guerri, yuurih   |
|            8 |       91 | 2023-08-25 | Monte         | W   | 1.000      | 0.435        | 0.318 (0.138)    | 1.000 (0.435)    | 0 (0.000) |    28.69 | arT, chelo, FalleN, KSCERATO, yuurih |
|            7 |      116 | 2023-08-24 | Espionage     | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.764 (0.332)    | 0 (0.000) |    22.95 | arT, chelo, FalleN, KSCERATO, yuurih |
|            6 |      247 | 2023-08-16 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -1.21 | arT, chelo, FalleN, KSCERATO, yuurih |
|            5 |      444 | 2023-08-10 | Sprout        | L   | 1.000      | -            | -                | -                | -         |   -25.39 | arT, chelo, FalleN, KSCERATO, yuurih |
|            4 |      502 | 2023-08-08 | 500           | L   | 1.000      | -            | -                | -                | -         |   -12.04 | arT, chelo, FalleN, KSCERATO, yuurih |
|            3 |      724 | 2023-07-28 | TheMongolz    | L   | 0.986      | -            | -                | -                | -         |   -11.73 | arT, chelo, FalleN, KSCERATO, yuurih |
|            2 |      730 | 2023-07-27 | Monte         | L   | 0.981      | -            | -                | -                | -         |    -2.34 | arT, chelo, FalleN, KSCERATO, yuurih |
|            1 |      744 | 2023-07-26 | Grayhound     | W   | 0.973      | 0.143        | 0.066 (0.009)    | 0.189 (0.026)    | 1 (0.973) |    17.64 | arT, chelo, FalleN, KSCERATO, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,445.31)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-26 |      1.000 | $10,000.00     | $10,000.00      |
| 2023-08-20 |      1.000 | $15,000.00     | $15,000.00      |
| 2023-07-28 |      0.988 | $4,500.00      | $4,445.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
