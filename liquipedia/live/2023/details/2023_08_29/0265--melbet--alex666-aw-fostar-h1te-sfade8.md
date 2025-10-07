### Roster Details<br />
Team Name: MelBet<br />
Roster: alex666, AW, fostar, h1te, sFade8<br />
Global Rank: [265](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [158]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  546.5<br />
<br />
Final Rank Value (546.5) = Starting Rank Value (534.8) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.042[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 534.8
- 400 + ( ( 0.070 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 534.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      992 | 2023-07-11 | ALTERNATE aTTaX      | L   | 0.875      | -            | -                | -                | -         |    -2.47 | alex666, AW, fostar, h1te, sFade8    |
|            4 |     1006 | 2023-07-11 | Into the Breach      | W   | 0.874      | 0.143        | 0.169 (0.021)    | 0.530 (0.066)    | 0 (0.000) |    26.92 | alex666, AW, fostar, h1te, sFade8    |
|            3 |     1514 | 2023-06-02 | GTZ                  | L   | 0.611      | -            | -                | -                | -         |    -1.80 | alex666, AW, L1GH7n1nG, sFade8, sm3t |
|            2 |     1577 | 2023-05-31 | Unluko5              | L   | 0.600      | -            | -                | -                | -         |    -8.15 | alex666, AW, L1GH7n1nG, sFade8, sm3t |
|            1 |     1657 | 2023-05-29 | ex-Copenhagen Flames | L   | 0.587      | -            | -                | -                | -         |    -2.75 | alex666, AW, L1GH7n1nG, sFade8, sm3t |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
