### Roster Details<br />
Team Name: Team GATERON<br />
Roster: DimSuM, Kon, Mrx, Pupu, zyHan<br />
Global Rank: [253](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_03.md)<br />
Regional Rank: [41]( ../../standings_asia_2025_08_03.md)<br />
<br />
Final Rank Value:  418.0<br />
<br />
Final Rank Value (418.0) = Starting Rank Value (426.0) + Head To Head Adjustments (-7.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.014<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 426.0
- 400 + ( ( 0.014 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 426.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1243 | 2025-05-12 | Steel Helmet      | L   | 0.637      | -            | -                | -                | -         |   -10.79 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            4 |     1345 | 2025-05-08 | Wings Up Gaming   | L   | 0.611      | -            | -                | -                | -         |    -1.73 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            3 |     1680 | 2025-04-25 | Only One Word     | L   | 0.524      | -            | -                | -                | -         |    -3.49 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            2 |     1764 | 2025-04-19 | KZG               | W   | 0.484      | 0.534        | 0.000 (0.000)    | 0.043 (0.011)    | 1 (0.484) |     8.56 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            1 |     1787 | 2025-04-18 | Chinggis Warriors | L   | 0.477      | -            | -                | -                | -         |    -0.49 | DimSuM, Kon, Owbb, Pupu, zyHan |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
