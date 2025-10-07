### Roster Details<br />
Team Name: Vantage Esports<br />
Roster: Arctic, Kiyo, neo, Oath, tidy<br />
Global Rank: [186](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_05.md)<br />
Regional Rank: [28]( ../../standings_asia_2025_10_05.md)<br />
<br />
Final Rank Value:  603.6<br />
<br />
Final Rank Value (603.6) = Starting Rank Value (611.7) + Head To Head Adjustments (-8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.084[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 611.7
- 400 + ( ( 0.108 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 611.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       30 | 2025-10-03 | Mindfreak (Australian team) | L   | 1.000      | -            | -                | -                | -         |   -16.77 | Arctic, Kiyo, neo, Oath, tidy |
|            4 |       33 | 2025-10-03 | SemperFi Esports            | L   | 1.000      | -            | -                | -                | -         |    -6.68 | Arctic, Kiyo, neo, Oath, tidy |
|            3 |      163 | 2025-09-28 | BBBCBMBS                    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.042 (0.006)    | 0 (0.000) |    10.56 | Arctic, Kiyo, neo, Oath, tidy |
|            2 |      170 | 2025-09-27 | Ground Zero Gaming          | L   | 1.000      | -            | -                | -                | -         |   -12.37 | Arctic, Kiyo, neo, Oath, tidy |
|            1 |      175 | 2025-09-27 | Underground Esports Club    | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.126 (0.018)    | 0 (0.000) |    17.20 | Arctic, Kiyo, neo, Oath, tidy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($330.10)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-04 |      1.000 | $330.10        | $330.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
