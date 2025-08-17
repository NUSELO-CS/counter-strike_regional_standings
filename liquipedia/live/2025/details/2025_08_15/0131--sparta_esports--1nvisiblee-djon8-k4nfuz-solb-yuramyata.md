### Roster Details<br />
Team Name: SPARTA Esports<br />
Roster: 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata<br />
Global Rank: [131](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [83]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  721.6<br />
<br />
Final Rank Value (721.6) = Starting Rank Value (621.8) + Head To Head Adjustments (99.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.340[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.208[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.8
- 400 + ( ( 0.114 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 621.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       30 | 2025-08-11 | ENCE            | L   | 1.000      | -            | -                | -                | -         |    -3.22 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|           11 |       34 | 2025-08-10 | Metizport       | W   | 1.000      | 0.384        | 0.027 (0.010)    | 0.426 (0.164)    | 0 (0.000) |    22.74 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|           10 |       52 | 2025-08-10 | RUBY            | W   | 1.000      | 0.384        | 0.026 (0.010)    | 0.777 (0.299)    | 0 (0.000) |    23.31 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|            9 |       68 | 2025-08-09 | Metizport       | L   | 1.000      | -            | -                | -                | -         |    -6.98 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|            8 |      169 | 2025-08-01 | Fnatic          | L   | 1.000      | -            | -                | -                | -         |    -1.26 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|            7 |     1050 | 2025-06-04 | Iberian Soul    | W   | 0.711      | 0.393        | 0.205 (0.057)    | 1.000 (0.279)    | 0 (0.000) |    21.74 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|            6 |     1069 | 2025-06-03 | Reason Gaming   | L   | 0.704      | -            | -                | -                | -         |    -6.41 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|            5 |     1133 | 2025-05-26 | SINNERS Esports | W   | 0.651      | 0.393        | 0.041 (0.010)    | 0.558 (0.143)    | 0 (0.000) |    16.50 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|            4 |     1235 | 2025-05-20 | Dynamo Eclot    | W   | 0.611      | 0.393        | 0.083 (0.020)    | 0.597 (0.143)    | 0 (0.000) |    16.14 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|            3 |     1402 | 2025-05-13 | KONO.ECF        | W   | 0.564      | 0.393        | 0.000 (0.000)    | 0.024 (0.005)    | 0 (0.000) |     6.45 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|            2 |     1561 | 2025-05-07 | Sashi Esport    | L   | 0.524      | -            | -                | -                | -         |    -2.18 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |
|            1 |     1735 | 2025-04-30 | SINNERS Esports | W   | 0.478      | 0.393        | 0.041 (0.008)    | 0.558 (0.105)    | 0 (0.000) |    12.90 | 1NVISIBLEE, Djon8, k4nfuz, SoLb, yuramyata |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
