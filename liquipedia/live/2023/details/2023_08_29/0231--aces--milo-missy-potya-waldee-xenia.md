### Roster Details<br />
Team Name: Aces<br />
Roster: miLo, Missy, Potya, Waldee, Xenia<br />
Global Rank: [231](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [141]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  609.1<br />
<br />
Final Rank Value (609.1) = Starting Rank Value (604.6) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.106<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.6
- 400 + ( ( 0.106 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 604.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2660 | 2023-04-12 | Spirit fe    | W   | 0.274      | 0.329        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.16 | miLo, Missy, Potya, Waldee, Xenia    |
|            4 |     2833 | 2023-04-05 | Let Her Cook | W   | 0.227      | 0.329        | 0.001 (0.000)    | 0.048 (0.004)    | 0 (0.000) |     3.55 | miLo, Missy, Potya, Waldee, Xenia    |
|            3 |     3168 | 2023-03-22 | Nigma Galaxy | L   | 0.134      | -            | -                | -                | -         |    -0.55 | miLo, Missy, Potya, Waldee, Xenia    |
|            2 |     3399 | 2023-03-15 | NIP Impact   | L   | 0.088      | -            | -                | -                | -         |    -1.13 | MajmooNz, miLo, Missy, Potya, Waldee |
|            1 |     3604 | 2023-03-08 | BIG EQUIPA   | L   | 0.041      | -            | -                | -                | -         |    -0.61 | MajmooNz, miLo, Missy, Potya, Waldee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($293.87)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-04-15 |      0.294 | $1,000.00      | $293.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
