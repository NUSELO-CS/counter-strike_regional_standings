### Roster Details<br />
Team Name: EPIC DUDES<br />
Roster: Bonga, DreaM, HadeZ, jansen, rapala<br />
Global Rank: [165](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [108]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  691.7<br />
<br />
Final Rank Value (691.7) = Starting Rank Value (681.6) + Head To Head Adjustments (10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.083[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.6
- 400 + ( ( 0.146 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 681.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1229 | 2023-06-11 | ALTERNATE aTTaX | L   | 0.672      | -            | -                | -                | -         |    -4.08 | Bonga, DreaM, HadeZ, jansen, rapala |
|           13 |     1683 | 2023-05-28 | Entropy         | W   | 0.580      | 0.143        | 0.005 (0.000)    | 0.082 (0.007)    | 0 (0.000) |     5.79 | Bonga, HadeZ, jansen, MRC9, rapala  |
|           12 |     1693 | 2023-05-28 | ALTERNATE aTTaX | L   | 0.579      | -            | -                | -                | -         |    -3.30 | Bonga, HadeZ, jansen, MRC9, rapala  |
|           11 |     1748 | 2023-05-26 | SNOGARD Dragons | W   | 0.568      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.92 | Bonga, HadeZ, jansen, MRC9, rapala  |
|           10 |     2855 | 2023-04-02 | Nakama          | L   | 0.207      | -            | -                | -                | -         |    -3.20 | Bonga, DreaM, HadeZ, jansen, rapala |
|            9 |     2869 | 2023-04-01 | los kogutos     | W   | 0.201      | 0.143        | 0.038 (0.001)    | 0.950 (0.027)    | 0 (0.000) |     4.99 | Bonga, DreaM, HadeZ, jansen, rapala |
|            8 |     2888 | 2023-03-31 | undefined       | L   | 0.194      | -            | -                | -                | -         |    -4.51 | Bonga, DreaM, HadeZ, jansen, rapala |
|            7 |     2891 | 2023-03-31 | los kogutos     | W   | 0.194      | 0.143        | 0.038 (0.001)    | 0.950 (0.026)    | 0 (0.000) |     4.83 | Bonga, DreaM, HadeZ, MRC9, rapala   |
|            6 |     2967 | 2023-03-28 | GODSENT         | L   | 0.175      | -            | -                | -                | -         |    -2.38 | Bonga, DreaM, HadeZ, jansen, rapala |
|            5 |     2972 | 2023-03-28 | GamerLegion     | W   | 0.174      | 0.143        | 0.556 (0.014)    | 0.332 (0.008)    | 0 (0.000) |     5.45 | Bonga, DreaM, HadeZ, jansen, rapala |
|            4 |     2982 | 2023-03-28 | Ukraine         | W   | 0.173      | 0.143        | 0.002 (0.000)    | 0.487 (0.012)    | 0 (0.000) |     3.65 | Bonga, DreaM, HadeZ, jansen, rapala |
|            3 |     3630 | 2023-03-07 | los kogutos     | L   | 0.035      | -            | -                | -                | -         |    -0.21 | Bonga, DreaM, HadeZ, jansen, rapala |
|            2 |     3738 | 2023-03-03 | Arcadia         | W   | 0.008      | 0.143        | 0.007 (0.000)    | 0.080 (0.000)    | 0 (0.000) |     0.12 | Bonga, DreaM, HadeZ, jansen, rapala |
|            1 |     3744 | 2023-03-03 | EC Brugge       | W   | 0.007      | 0.143        | 0.007 (0.000)    | 0.032 (0.000)    | 0 (0.000) |     0.10 | Bonga, DreaM, HadeZ, jansen, rapala |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,615.46)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-11 |      0.674 | $2,398.00      | $1,615.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
