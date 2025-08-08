### Roster Details<br />
Team Name: Team GATERON<br />
Roster: DimSuM, Kon, Mrx, Pupu, zyHan<br />
Global Rank: [249](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_05.md)<br />
Regional Rank: [41]( ../../standings_asia_2025_08_05.md)<br />
<br />
Final Rank Value:  416.6<br />
<br />
Final Rank Value (416.6) = Starting Rank Value (425.0) + Head To Head Adjustments (-8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.052[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.013<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 425.0
- 400 + ( ( 0.013 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 425.0


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
|            5 |     1288 | 2025-05-12 | Steel Helmet      | L   | 0.617      | -            | -                | -                | -         |   -10.43 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            4 |     1390 | 2025-05-08 | Wings Up Gaming   | L   | 0.591      | -            | -                | -                | -         |    -2.13 | DimSuM, Kon, Mrx, Pupu, zyHan  |
|            3 |     1725 | 2025-04-25 | Only One Word     | L   | 0.504      | -            | -                | -                | -         |    -3.47 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            2 |     1809 | 2025-04-19 | KZG               | W   | 0.464      | 0.143        | 0.000 (0.000)    | 0.039 (0.003)    | 1 (0.464) |     8.09 | DimSuM, Kon, Owbb, Pupu, zyHan |
|            1 |     1832 | 2025-04-18 | Chinggis Warriors | L   | 0.457      | -            | -                | -                | -         |    -0.52 | DimSuM, Kon, Owbb, Pupu, zyHan |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
