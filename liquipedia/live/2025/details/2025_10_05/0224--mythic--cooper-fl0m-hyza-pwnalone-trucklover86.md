### Roster Details<br />
Team Name: Mythic<br />
Roster: Cooper, fl0m, hyza, PwnAlone, Trucklover86<br />
Global Rank: [224](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_10_05.md)<br />
Regional Rank: [65]( ../../standings_americas_2025_10_05.md)<br />
<br />
Final Rank Value:  507.1<br />
<br />
Final Rank Value (507.1) = Starting Rank Value (523.8) + Head To Head Adjustments (-16.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.063<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.8
- 400 + ( ( 0.063 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 523.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      658 | 2025-09-11 | Team Aether          | L   | 1.000      | -            | -                | -                | -         |    -9.50 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            7 |      748 | 2025-09-09 | Getting Info         | L   | 1.000      | -            | -                | -                | -         |    -3.78 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            6 |      797 | 2025-09-08 | Anything else        | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.146 (0.053)    | 0 (0.000) |    13.87 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            5 |      881 | 2025-09-06 | Take Flyte           | L   | 0.998      | -            | -                | -                | -         |   -12.48 | Austin, BiBiAhn, Cooper, PwnAlone, Trucklover86 |
|            4 |     1394 | 2025-08-14 | Chicken Coop Esports | L   | 0.848      | -            | -                | -                | -         |    -5.71 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            3 |     1438 | 2025-08-13 | Getting Info         | W   | 0.841      | 0.363        | 0.019 (0.006)    | 0.407 (0.124)    | 0 (0.000) |    22.71 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            2 |     1540 | 2025-08-11 | Legacy Kingdom       | L   | 0.828      | -            | -                | -                | -         |   -11.80 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            1 |     2139 | 2025-07-11 | Outfit 49            | L   | 0.618      | -            | -                | -                | -         |    -9.95 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
