### Roster Details<br />
Team Name: Akimbo Esports<br />
Roster: dantemoren, laxiee, N2o, obi, zy<br />
Global Rank: [214](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_05.md)<br />
Regional Rank: [33]( ../../standings_asia_2025_10_05.md)<br />
<br />
Final Rank Value:  543.1<br />
<br />
Final Rank Value (543.1) = Starting Rank Value (541.8) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 541.8
- 400 + ( ( 0.073 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 541.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2495 | 2025-06-13 | Team Aether      | W   | 0.434      | 0.333        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     6.00 | dantemoren, laxiee, N2o, obi, zy |
|            4 |     2687 | 2025-06-01 | Life's A Game    | L   | 0.353      | -            | -                | -                | -         |    -2.62 | kmrn, laxiee, N2o, obi, zy       |
|            3 |     3208 | 2025-05-06 | Party Astronauts | L   | 0.181      | -            | -                | -                | -         |    -2.05 | kmrn, laxiee, N2o, obi, zy       |
|            2 |     3781 | 2025-04-09 | Life's A Game    | L   | 0.001      | -            | -                | -                | -         |    -0.01 | kmrn, laxiee, N2o, obi, zy       |
|            1 |     3785 | 2025-04-09 | Life's A Game    | L   | 0.001      | -            | -                | -                | -         |    -0.01 | kmrn, laxiee, N2o, obi, zy       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,329.10)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-30 |      0.547 | $1,000.00      | $547.27         |
| 2025-06-01 |      0.353 | $1,000.00      | $353.50         |
| 2025-05-11 |      0.214 | $2,000.00      | $428.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
