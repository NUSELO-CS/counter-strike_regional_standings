### Roster Details<br />
Team Name: NinJa (Chinese team)<br />
Roster: expSasiKi, Miami, rage, risk, SPine<br />
Global Rank: [168](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_05.md)<br />
Regional Rank: [24]( ../../standings_asia_2025_10_05.md)<br />
<br />
Final Rank Value:  653.2<br />
<br />
Final Rank Value (653.2) = Starting Rank Value (651.9) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.299[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.029[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.9
- 400 + ( ( 0.129 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 651.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3166 | 2025-05-08 | The Huns Esports        | L   | 0.190      | -            | -                | -                | -         |    -0.16 | expSasiKi, Miami, rage, risk, SPine |
|            6 |     3236 | 2025-05-06 | Lynn Vision Gaming      | L   | 0.177      | -            | -                | -                | -         |    -0.12 | expSasiKi, Miami, rage, risk, SPine |
|            5 |     3439 | 2025-04-27 | Nomads (Mongolian team) | L   | 0.117      | -            | -                | -                | -         |    -1.10 | expSasiKi, Miami, rage, risk, SPine |
|            4 |     3443 | 2025-04-27 | The Art of War          | W   | 0.116      | 0.624        | 0.000 (0.000)    | 0.051 (0.004)    | 1 (0.116) |     1.54 | expSasiKi, Miami, rage, risk, SPine |
|            3 |     3498 | 2025-04-25 | TEAM XDM                | W   | 0.104      | 0.624        | 0.002 (0.000)    | 0.002 (0.000)    | 1 (0.104) |     1.10 | expSasiKi, Miami, rage, risk, SPine |
|            2 |     3582 | 2025-04-19 | The QUBE Esports        | W   | 0.064      | 0.624        | 0.008 (0.000)    | 0.068 (0.003)    | 1 (0.064) |     1.25 | expSasiKi, Miami, rage, risk, SPine |
|            1 |     3608 | 2025-04-18 | Exusiai                 | L   | 0.056      | -            | -                | -                | -         |    -1.26 | expSasiKi, Miami, rage, risk, SPine |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,706.25)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-16 |      0.244 | $7,000.00      | $1,706.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
