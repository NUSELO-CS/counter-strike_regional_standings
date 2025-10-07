### Roster Details<br />
Team Name: Illuminar<br />
Roster: bnox, mASKED, morelz, TOAO, zaNNN<br />
Global Rank: [227](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [139]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  611.1<br />
<br />
Final Rank Value (611.1) = Starting Rank Value (612.5) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.202[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.013[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 612.5
- 400 + ( ( 0.110 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 612.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2946 | 2023-03-29 | BIG Academy     | L   | 0.181      | -            | -                | -                | -         |    -1.93 | bnox, mASKED, morelz, TOAO, zaNNN |
|           12 |     2989 | 2023-03-28 | ENCE Academy    | L   | 0.173      | -            | -                | -                | -         |    -0.92 | bnox, mASKED, morelz, TOAO, zaNNN |
|           11 |     3041 | 2023-03-26 | BIG Academy     | L   | 0.159      | -            | -                | -                | -         |    -1.73 | bnox, mASKED, morelz, TOAO, zaNNN |
|           10 |     3099 | 2023-03-24 | SINNERS         | W   | 0.147      | 0.435        | 0.001 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     2.44 | bnox, mASKED, morelz, TOAO, zaNNN |
|            9 |     3145 | 2023-03-23 | ECSTATIC        | L   | 0.140      | -            | -                | -                | -         |    -0.44 | bnox, mASKED, morelz, TOAO, zaNNN |
|            8 |     3181 | 2023-03-22 | Question Mark   | L   | 0.132      | -            | -                | -                | -         |    -0.74 | bnox, mASKED, morelz, TOAO, zaNNN |
|            7 |     3222 | 2023-03-21 | 1WIN            | L   | 0.126      | -            | -                | -                | -         |    -0.12 | bnox, mASKED, morelz, TOAO, zaNNN |
|            6 |     3274 | 2023-03-19 | Astralis Talent | W   | 0.112      | 0.435        | 0.110 (0.005)    | 0.582 (0.028)    | 0 (0.000) |     3.21 | bnox, mASKED, morelz, TOAO, zaNNN |
|            5 |     3614 | 2023-03-08 | ex-Partizan     | L   | 0.040      | -            | -                | -                | -         |    -0.56 | bnox, mASKED, morelz, TOAO, zaNNN |
|            4 |     3647 | 2023-03-07 | Let us cook     | L   | 0.033      | -            | -                | -                | -         |    -0.37 | bnox, mASKED, morelz, TOAO, zaNNN |
|            3 |     3700 | 2023-03-05 | VOYVODA         | L   | 0.018      | -            | -                | -                | -         |    -0.37 | bnox, mASKED, morelz, TOAO, zaNNN |
|            2 |     3759 | 2023-03-03 | GODSENT         | W   | 0.005      | 0.435        | 0.016 (0.000)    | 0.127 (0.000)    | 0 (0.000) |     0.10 | bnox, mASKED, morelz, TOAO, zaNNN |
|            1 |     3765 | 2023-03-02 | Endpoint        | W   | 0.000      | 0.384        | 0.046 (0.000)    | 0.790 (0.000)    | 0 (0.000) |     0.00 | bnox, mASKED, morelz, TOAO, zaNNN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30.56)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-11 |      0.061 | $500.00        | $30.56          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
