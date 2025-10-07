### Roster Details<br />
Team Name: CEPTER<br />
Roster: alexsomfan, kiR, LUMSEN, Makiii, Ryxxo<br />
Global Rank: [295](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [175]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  433.2<br />
<br />
Final Rank Value (433.2) = Starting Rank Value (432.6) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.066[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.017<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 432.6
- 400 + ( ( 0.017 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 432.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      956 | 2023-07-13 | SQUAD           | L   | 0.887      | -            | -                | -                | -         |   -11.06 | alexsomfan, kiR, LUMSEN, Makiii, Ryxxo |
|            5 |      970 | 2023-07-12 | smaek           | L   | 0.881      | -            | -                | -                | -         |   -10.86 | alexsomfan, kiR, LUMSEN, Makiii, Ryxxo |
|            4 |      979 | 2023-07-12 | SQUAD           | W   | 0.880      | 0.143        | 0.000 (0.000)    | 0.134 (0.017)    | 0 (0.000) |    15.84 | alexsomfan, kiR, LUMSEN, Makiii, Ryxxo |
|            3 |     1709 | 2023-05-27 | Astralis Talent | L   | 0.574      | -            | -                | -                | -         |    -0.66 | alexsomfan, kiR, Ryxxo, scott, smF     |
|            2 |     1719 | 2023-05-27 | XI              | W   | 0.573      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.573) |     8.10 | alexsomfan, kiR, Ryxxo, scott, smF     |
|            1 |     1731 | 2023-05-27 | Espionage       | L   | 0.572      | -            | -                | -                | -         |    -0.77 | alexsomfan, kiR, Ryxxo, scott, smF     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
