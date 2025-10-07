### Roster Details<br />
Team Name: ex-777<br />
Roster: akez, Jimbo, mikki, PALM1, SLY<br />
Global Rank: [128](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [88]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  755.5<br />
<br />
Final Rank Value (755.5) = Starting Rank Value (743.3) + Head To Head Adjustments (12.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.111[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.114[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.3
- 400 + ( ( 0.177 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 743.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1181 | 2023-06-15 | The Prodigies | L   | 0.700      | -            | -                | -                | -         |   -11.37 | akez, Jimbo, mikki, PALM1, SLY |
|            6 |     1193 | 2023-06-14 | JANO          | W   | 0.694      | 0.338        | 0.007 (0.002)    | 0.427 (0.100)    | 0 (0.000) |    10.75 | akez, Jimbo, mikki, PALM1, SLY |
|            5 |     1201 | 2023-06-13 | AVANGAR       | W   | 0.687      | 0.338        | 0.008 (0.002)    | 0.080 (0.018)    | 0 (0.000) |     9.00 | akez, Jimbo, mikki, PALM1, SLY |
|            4 |     1209 | 2023-06-12 | Question Mark | L   | 0.679      | -            | -                | -                | -         |    -6.67 | akez, Jimbo, mikki, PALM1, SLY |
|            3 |     2022 | 2023-05-14 | Wizard        | W   | 0.486      | 0.358        | 0.009 (0.002)    | 0.024 (0.004)    | 1 (0.486) |     6.22 | akez, Jimbo, mikki, PALM1, SLY |
|            2 |     2046 | 2023-05-13 | Apeks Rebels  | W   | 0.478      | 0.358        | 0.003 (0.001)    | 0.011 (0.002)    | 1 (0.478) |     4.47 | akez, Jimbo, mikki, PALM1, SLY |
|            1 |     3748 | 2023-03-03 | Wizard        | L   | 0.007      | -            | -                | -                | -         |    -0.12 | akez, Jimbo, mikki, PALM1, SLY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,966.81)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-05-14 |      0.486 | $8,129.00      | $3,950.12       |
| 2023-03-04 |      0.013 | $1,253.00      | $16.69          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
