### Roster Details<br />
Team Name: Evil Geniuses<br />
Roster: autimatic, Brehze, neaLaN, refrezh, wiz<br />
Global Rank: [166](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [46]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  690.5<br />
<br />
Final Rank Value (690.5) = Starting Rank Value (695.2) + Head To Head Adjustments (-4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.027[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.095[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.2
- 400 + ( ( 0.153 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 695.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1614 | 2023-05-30 | Complexity      | L   | 0.594      | -            | -                | -                | -         |    -1.59 | autimatic, Brehze, neaLaN, refrezh, wiz |
|           14 |     1648 | 2023-05-29 | FaZe            | L   | 0.587      | -            | -                | -                | -         |    -0.12 | autimatic, Brehze, neaLaN, refrezh, wiz |
|           13 |     1939 | 2023-05-19 | the jungle      | L   | 0.523      | -            | -                | -                | -         |    -9.03 | autimatic, Brehze, neaLaN, refrezh, wiz |
|           12 |     1946 | 2023-05-19 | puggers         | W   | 0.522      | 0.303        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.59 | autimatic, Brehze, neaLaN, refrezh, wiz |
|           11 |     1985 | 2023-05-16 | Nouns           | L   | 0.502      | -            | -                | -                | -         |    -3.44 | autimatic, Brehze, neaLaN, refrezh, wiz |
|           10 |     1988 | 2023-05-16 | Cartel terraza  | W   | 0.502      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.48 | autimatic, Brehze, neaLaN, refrezh, wiz |
|            9 |     2203 | 2023-05-03 | Monte           | L   | 0.412      | -            | -                | -                | -         |    -0.19 | autimatic, Brehze, neaLaN, refrezh, wiz |
|            8 |     2229 | 2023-05-01 | LDLC            | W   | 0.400      | 0.435        | 0.001 (0.000)    | 0.110 (0.019)    | 0 (0.000) |     6.62 | autimatic, Brehze, neaLaN, refrezh, wiz |
|            7 |     2310 | 2023-04-28 | EYEBALLERS      | L   | 0.378      | -            | -                | -                | -         |    -2.88 | autimatic, Brehze, neaLaN, refrezh, wiz |
|            6 |     2549 | 2023-04-15 | Badass          | L   | 0.296      | -            | -                | -                | -         |    -4.41 | autimatic, Brehze, neaLaN, refrezh, wiz |
|            5 |     2558 | 2023-04-15 | Unjustified     | W   | 0.295      | 0.303        | 0.001 (0.000)    | 0.349 (0.031)    | 0 (0.000) |     4.12 | autimatic, Brehze, neaLaN, refrezh, wiz |
|            4 |     2686 | 2023-04-11 | WITHOUT WARNING | L   | 0.269      | -            | -                | -                | -         |    -4.11 | autimatic, Brehze, neaLaN, refrezh, wiz |
|            3 |     2744 | 2023-04-08 | Paquetá         | L   | 0.248      | -            | -                | -                | -         |    -1.93 | autimatic, Brehze, HexT, neaLaN, wiz    |
|            2 |     2771 | 2023-04-07 | FURIA           | L   | 0.241      | -            | -                | -                | -         |    -1.41 | autimatic, Brehze, HexT, neaLaN, wiz    |
|            1 |     2794 | 2023-04-06 | Imperial        | W   | 0.236      | 0.143        | 0.141 (0.005)    | 0.257 (0.009)    | 1 (0.236) |     6.59 | autimatic, Brehze, HexT, neaLaN, wiz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,348.71)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-04 |      0.627 | $4,000.00      | $2,509.39       |
| 2023-05-04 |      0.420 | $2,000.00      | $839.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
