### Roster Details<br />
Team Name: Alter Ego<br />
Roster: b1lal, BnTeT, Gratisfaction, rate, tomiko<br />
Global Rank: [200](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [114]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  563.2<br />
<br />
Final Rank Value (563.2) = Starting Rank Value (515.5) + Head To Head Adjustments (47.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.136[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.5
- 400 + ( ( 0.059 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 515.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      496 | 2025-09-16 | The Huns Esports | L   | 1.000      | -            | -                | -                | -         |    -0.63 | b1lal, BnTeT, Gratisfaction, rate, tomiko |
|            6 |      521 | 2025-09-15 | SemperFi Esports | W   | 1.000      | 0.143        | 0.029 (0.004)    | 0.510 (0.073)    | 0 (0.000) |    26.69 | b1lal, BnTeT, Gratisfaction, rate, tomiko |
|            5 |      550 | 2025-09-14 | Beyman Esports   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.98 | b1lal, BnTeT, Gratisfaction, rate, tomiko |
|            4 |     1757 | 2025-08-01 | FlyQuest         | L   | 0.756      | -            | -                | -                | -         |    -0.45 | b1lal, BnTeT, ImpressioN, kaito, tomiko   |
|            3 |     2149 | 2025-07-11 | SemperFi Esports | L   | 0.616      | -            | -                | -                | -         |    -3.97 | BnTeT, kaito, Ph1NNN, Senpai, tomiko      |
|            2 |     2157 | 2025-07-10 | Shika            | W   | 0.615      | 0.143        | 0.001 (0.000)    | 0.018 (0.002)    | 0 (0.000) |     9.67 | BnTeT, kaito, Ph1NNN, Senpai, tomiko      |
|            1 |     2202 | 2025-07-09 | SIXIXIXIXIX      | W   | 0.603      | 0.147        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.44 | BnTeT, kaito, Ph1NNN, Senpai, tomiko      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
