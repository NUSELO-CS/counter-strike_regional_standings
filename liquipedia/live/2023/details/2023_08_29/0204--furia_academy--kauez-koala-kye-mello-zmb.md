### Roster Details<br />
Team Name: FURIA Academy<br />
Roster: kauez, koala, kye, mello, zmb<br />
Global Rank: [204](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [60]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  638.0<br />
<br />
Final Rank Value (638.0) = Starting Rank Value (632.7) + Head To Head Adjustments (5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.027[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.7
- 400 + ( ( 0.120 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 632.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2850 | 2023-04-02 | MIBR Academy | W   | 0.208      | 0.384        | 0.004 (0.000)    | 0.294 (0.024)    | 0 (0.000) |     3.66 | kauez, koala, kye, mello, zmb |
|            4 |     2866 | 2023-04-01 | Boca Juniors | L   | 0.202      | -            | -                | -                | -         |    -1.36 | kauez, koala, kye, mello, zmb |
|            3 |     2934 | 2023-03-29 | WINDINGO     | W   | 0.182      | 0.384        | 0.006 (0.000)    | 0.409 (0.029)    | 0 (0.000) |     3.58 | kauez, koala, kye, mello, zmb |
|            2 |     3005 | 2023-03-27 | FUSION       | W   | 0.168      | 0.384        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.80 | kauez, koala, kye, mello, zmb |
|            1 |     3051 | 2023-03-25 | Furious      | L   | 0.156      | -            | -                | -                | -         |    -2.37 | kauez, koala, kye, mello, zmb |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($756.18)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-04-16 |      0.302 | $2,500.00      | $756.18         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
