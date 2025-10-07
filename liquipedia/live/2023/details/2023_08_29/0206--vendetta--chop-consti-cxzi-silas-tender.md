### Roster Details<br />
Team Name: Vendetta<br />
Roster: chop, consti, cxzi, silas, Tender<br />
Global Rank: [206](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [62]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  636.3<br />
<br />
Final Rank Value (636.3) = Starting Rank Value (631.9) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.027[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.9
- 400 + ( ( 0.120 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 631.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2966 | 2023-03-28 | Evil Geniuses | L   | 0.175      | -            | -                | -                | -         |    -1.14 | chop, consti, cxzi, silas, Tender   |
|           14 |     2997 | 2023-03-27 | Strife        | W   | 0.170      | 0.143        | 0.004 (0.000)    | 0.043 (0.001)    | 0 (0.000) |     3.04 | chop, consti, cxzi, silas, Tender   |
|           13 |     3001 | 2023-03-27 | ATK           | L   | 0.169      | -            | -                | -                | -         |    -1.81 | chop, consti, cxzi, silas, Tender   |
|           12 |     3077 | 2023-03-24 | MIBR          | L   | 0.149      | -            | -                | -                | -         |    -0.62 | chop, consti, cxzi, silas, Tender   |
|           11 |     3192 | 2023-03-21 | Tsunami       | W   | 0.129      | 0.384        | 0.001 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.80 | chop, consti, cxzi, silas, Tender   |
|           10 |     3229 | 2023-03-20 | Badass        | W   | 0.123      | 0.143        | 0.013 (0.000)    | 0.517 (0.009)    | 0 (0.000) |     2.44 | chop, consti, cxzi, silas, Tender   |
|            9 |     3234 | 2023-03-20 | Strife        | L   | 0.122      | -            | -                | -                | -         |    -1.70 | chop, consti, cxzi, silas, Tender   |
|            8 |     3256 | 2023-03-19 | Wildcard      | W   | 0.116      | 0.143        | 0.128 (0.002)    | 0.804 (0.013)    | 0 (0.000) |     2.93 | chop, consti, cxzi, silas, Tender   |
|            7 |     3626 | 2023-03-07 | Nouns         | L   | 0.036      | -            | -                | -                | -         |    -0.19 | chop, consti, cxzi, silas, Tender   |
|            6 |     3653 | 2023-03-06 | Strife        | L   | 0.030      | -            | -                | -                | -         |    -0.41 | chop, consti, cxzi, silas, Tender   |
|            5 |     3675 | 2023-03-05 | TeamOne       | L   | 0.022      | -            | -                | -                | -         |    -0.33 | chop, cxzi, Jackinho, silas, Tender |
|            4 |     3702 | 2023-03-04 | Strife        | W   | 0.017      | 0.143        | 0.004 (0.000)    | 0.043 (0.000)    | 0 (0.000) |     0.30 | chop, cxzi, Jackinho, silas, Tender |
|            3 |     3704 | 2023-03-04 | Nouns         | L   | 0.016      | -            | -                | -                | -         |    -0.08 | chop, cxzi, Jackinho, silas, Tender |
|            2 |     3733 | 2023-03-03 | Limitless     | W   | 0.009      | 0.143        | 0.000 (0.000)    | 0.015 (0.000)    | 0 (0.000) |     0.08 | chop, consti, cxzi, silas, Tender   |
|            1 |     3735 | 2023-03-03 | Take Flyte    | W   | 0.009      | 0.143        | 0.002 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.13 | chop, consti, cxzi, silas, Tender   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($390.16)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-25 |      0.156 | $2,500.00      | $390.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
