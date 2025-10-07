### Roster Details<br />
Team Name: BORING PLAYER<br />
Roster: Jun7, Miszary, Mystic, tutu, zdr<br />
Global Rank: [175](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_05.md)<br />
Regional Rank: [26]( ../../standings_asia_2025_10_05.md)<br />
<br />
Final Rank Value:  626.1<br />
<br />
Final Rank Value (626.1) = Starting Rank Value (574.0) + Head To Head Adjustments (52.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.095[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.077[<sup>2</sup>](#table1)

The average of these factors is 0.089<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 574.0
- 400 + ( ( 0.089 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 574.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      733 | 2025-09-10 | The Huns Esports          | L   | 1.000      | -            | -                | -                | -         |    -1.00 | Jun7, Miszary, Mystic, tutu, zdr |
|            8 |      782 | 2025-09-09 | Kaleido Gaming            | W   | 1.000      | 0.333        | 0.011 (0.004)    | 0.315 (0.105)    | 0 (0.000) |    28.12 | Jun7, Miszary, Mystic, tutu, zdr |
|            7 |      829 | 2025-09-08 | Rare Atom                 | L   | 1.000      | -            | -                | -                | -         |    -1.48 | Jun7, Miszary, Mystic, tutu, zdr |
|            6 |     1074 | 2025-08-27 | Kaleido Gaming            | L   | 0.935      | -            | -                | -                | -         |    -2.53 | Jun7, Miszary, Mystic, tutu, zdr |
|            5 |     1124 | 2025-08-26 | FengDa Gaming             | L   | 0.923      | -            | -                | -                | -         |    -9.77 | Jun7, Miszary, Mystic, tutu, zdr |
|            4 |     1127 | 2025-08-25 | Kaleido Gaming            | W   | 0.922      | 0.143        | 0.011 (0.001)    | 0.315 (0.042)    | 1 (0.922) |    26.76 | Jun7, Miszary, Mystic, tutu, zdr |
|            3 |     1473 | 2025-08-13 | Nomads (Mongolian team)   | L   | 0.838      | -            | -                | -                | -         |    -5.62 | Jun7, Miszary, Mystic, tutu, zdr |
|            2 |     1525 | 2025-08-12 | Just Swing (Chinese team) | W   | 0.831      | 0.333        | 0.010 (0.003)    | 0.126 (0.035)    | 0 (0.000) |    18.75 | Jun7, Miszary, Mystic, tutu, zdr |
|            1 |     1573 | 2025-08-11 | Rare Atom                 | L   | 0.824      | -            | -                | -                | -         |    -1.08 | Jun7, Miszary, Mystic, tutu, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
