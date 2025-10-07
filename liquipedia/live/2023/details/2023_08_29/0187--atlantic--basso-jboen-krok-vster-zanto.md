### Roster Details<br />
Team Name: Atlantic<br />
Roster: Basso, JBOEN, kroK, Vster, Zanto<br />
Global Rank: [187](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [119]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  669.7<br />
<br />
Final Rank Value (669.7) = Starting Rank Value (680.0) + Head To Head Adjustments (-10.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.082[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.0
- 400 + ( ( 0.145 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 680.0


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
|            5 |     1142 | 2023-06-17 | Astralis Talent  | L   | 0.714      | -            | -                | -                | -         |    -3.04 | Basso, JBOEN, kroK, Vster, Zanto |
|            4 |     1159 | 2023-06-17 | Sashi            | W   | 0.712      | 0.341        | 0.005 (0.001)    | 0.081 (0.020)    | 1 (0.712) |    12.04 | Basso, JBOEN, kroK, Vster, Zanto |
|            3 |     1721 | 2023-05-27 | ex-Flames Ascent | L   | 0.573      | -            | -                | -                | -         |   -12.44 | Basso, JBOEN, kroK, Vster, Zanto |
|            2 |     1735 | 2023-05-27 | sYnck            | L   | 0.572      | -            | -                | -                | -         |    -4.91 | Basso, JBOEN, kroK, Vster, Zanto |
|            1 |     3305 | 2023-03-18 | CEPTER           | L   | 0.105      | -            | -                | -                | -         |    -1.95 | Basso, JBOEN, kroK, Vster, Zanto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,048.17)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-17 |      0.714 | $1,468.00      | $1,048.17       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
