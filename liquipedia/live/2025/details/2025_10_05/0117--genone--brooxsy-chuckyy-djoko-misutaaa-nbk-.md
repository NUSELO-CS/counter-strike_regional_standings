### Roster Details<br />
Team Name: GenOne<br />
Roster: Brooxsy, Chuckyy, Djoko, misutaaa, NBK-<br />
Global Rank: [117](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [75]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  771.9<br />
<br />
Final Rank Value (771.9) = Starting Rank Value (709.3) + Head To Head Adjustments (62.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.308[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.3
- 400 + ( ( 0.158 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 709.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      206 | 2025-09-27 | Passion UA    | L   | 1.000      | -            | -                | -                | -         |    -0.80 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK- |
|            4 |      232 | 2025-09-26 | FlyQuest      | W   | 1.000      | 0.339        | 0.065 (0.022)    | 0.316 (0.107)    | 1 (1.000) |    29.47 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK- |
|            3 |      254 | 2025-09-26 | Reason Gaming | W   | 1.000      | 0.339        | 0.007 (0.002)    | 0.977 (0.331)    | 1 (1.000) |    26.27 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK- |
|            2 |      280 | 2025-09-25 | MANA eSports  | W   | 1.000      | 0.339        | 0.000 (0.000)    | 0.121 (0.041)    | 1 (1.000) |    10.99 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK- |
|            1 |      291 | 2025-09-25 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |    -3.39 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK- |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
