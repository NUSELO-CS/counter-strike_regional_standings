### Roster Details<br />
Team Name: The Neighbours<br />
Roster: Adam9130, bevve, dobbo, Extinct, smooya<br />
Global Rank: [122](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [84]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  761.9<br />
<br />
Final Rank Value (761.9) = Starting Rank Value (765.4) + Head To Head Adjustments (-3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.229[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 765.4
- 400 + ( ( 0.189 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 765.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      691 | 2023-07-30 | 7AM          | W   | 0.999      | 0.289        | 0.004 (0.001)    | 0.092 (0.026)    | 1 (0.999) |    14.80 | Adam9130, bevve, dobbo, Extinct, smooya |
|            5 |      697 | 2023-07-30 | Next in Line | W   | 0.998      | 0.289        | 0.002 (0.000)    | 0.048 (0.014)    | 1 (0.998) |    12.67 | Adam9130, bevve, dobbo, Extinct, smooya |
|            4 |      706 | 2023-07-29 | 7AM          | L   | 0.993      | -            | -                | -                | -         |   -16.08 | Adam9130, bevve, dobbo, Extinct, smooya |
|            3 |     1324 | 2023-06-08 | Hungary      | L   | 0.654      | -            | -                | -                | -         |    -5.82 | Adam9130, bevve, dobbo, mwlky, Vegi     |
|            2 |     2214 | 2023-05-02 | Sangal       | L   | 0.407      | -            | -                | -                | -         |    -6.61 | Adam9130, bevve, dobbo, mwlky, Vegi     |
|            1 |     2517 | 2023-04-17 | Looking4Org  | L   | 0.308      | -            | -                | -                | -         |    -2.51 | Adam9130, bevve, dobbo, mwlky, Vegi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,862.55)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-30 |      0.999 | $1,864.00      | $1,862.55       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
