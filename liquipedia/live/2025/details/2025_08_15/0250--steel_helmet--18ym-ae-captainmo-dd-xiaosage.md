### Roster Details<br />
Team Name: Steel Helmet<br />
Roster: 18yM, AE, captainMo, DD, XiaosaGe<br />
Global Rank: [250](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_15.md)<br />
Regional Rank: [42]( ../../standings_asia_2025_08_15.md)<br />
<br />
Final Rank Value:  403.6<br />
<br />
Final Rank Value (403.6) = Starting Rank Value (400.2) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.2
- 400 + ( ( 0.000 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 400.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1403 | 2025-05-13 | Wings Up Gaming | L   | 0.564      | -            | -                | -                | -         |    -1.47 | 18yM, AE, captainMo, DD, XiaosaGe |
|            4 |     1426 | 2025-05-12 | Team GATERON    | W   | 0.557      | 0.303        | 0.000 (0.000)    | 0.019 (0.003)    | 0 (0.000) |     9.39 | 18yM, AE, captainMo, DD, XiaosaGe |
|            3 |     1502 | 2025-05-09 | Shika           | L   | 0.538      | -            | -                | -                | -         |    -3.67 | 18yM, AE, captainMo, DD, XiaosaGe |
|            2 |     2619 | 2025-03-27 | Wings Up Gaming | L   | 0.255      | -            | -                | -                | -         |    -0.71 | 18yM, AE, captainMo, DD, xiaosaGe |
|            1 |     2695 | 2025-03-26 | Rare Atom       | L   | 0.248      | -            | -                | -                | -         |    -0.13 | 18yM, AE, captainMo, DD, xiaosaGe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
