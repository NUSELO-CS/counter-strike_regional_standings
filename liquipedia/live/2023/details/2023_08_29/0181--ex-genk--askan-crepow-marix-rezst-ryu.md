### Roster Details<br />
Team Name: ex-Genk<br />
Roster: Askan, CrePoW, Marix, Rezst, ryu<br />
Global Rank: [181](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [116]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  673.5<br />
<br />
Final Rank Value (673.5) = Starting Rank Value (670.8) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.061[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.8
- 400 + ( ( 0.140 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 670.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      938 | 2023-07-14 | ECLOT         | L   | 0.894      | -            | -                | -                | -         |    -3.68 | Askan, CrePoW, Marix, Rezst, ryu |
|            4 |     1441 | 2023-06-04 | EC Brugge     | W   | 0.627      | 0.337        | 0.007 (0.002)    | 0.032 (0.007)    | 0 (0.000) |     8.55 | Askan, CrePoW, Marix, Rezst, ryu |
|            3 |     1454 | 2023-06-04 | Tutel         | W   | 0.625      | 0.337        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.45 | Askan, CrePoW, Marix, Rezst, ryu |
|            2 |     1768 | 2023-05-26 | Zero Tenacity | L   | 0.565      | -            | -                | -                | -         |    -4.54 | Askan, CrePoW, Marix, Rezst, ryu |
|            1 |     1803 | 2023-05-25 | MOUZ NXT      | L   | 0.559      | -            | -                | -                | -         |    -4.10 | Askan, CrePoW, Marix, Rezst, ryu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,392.39)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-04 |      0.627 | $5,414.00      | $3,392.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
