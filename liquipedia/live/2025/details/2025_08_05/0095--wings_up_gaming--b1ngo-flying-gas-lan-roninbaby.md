### Roster Details<br />
Team Name: Wings Up Gaming<br />
Roster: B1NGO, flying, gas, lan, Roninbaby<br />
Global Rank: [95](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_05.md)<br />
Regional Rank: [9]( ../../standings_asia_2025_08_05.md)<br />
<br />
Final Rank Value:  822.8<br />
<br />
Final Rank Value (822.8) = Starting Rank Value (820.4) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.330[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.129[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.183[<sup>2</sup>](#table1)

The average of these factors is 0.221<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.4
- 400 + ( ( 0.221 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 820.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      420 | 2025-07-11 | IHC Esports        | L   | 1.000      | -            | -                | -                | -         |   -22.21 | B1NGO, flying, gas, lan, Roninbaby   |
|           25 |      500 | 2025-07-06 | Rare Atom          | L   | 0.983      | -            | -                | -                | -         |    -4.73 | B1NGO, flying, gas, lan, Roninbaby   |
|           24 |      504 | 2025-07-05 | FengDa Gaming      | W   | 0.977      | 0.333        | 0.004 (0.001)    | 0.178 (0.058)    | 1 (0.977) |    10.46 | B1NGO, flying, gas, lan, Roninbaby   |
|           23 |     1173 | 2025-05-16 | Rare Atom          | L   | 0.648      | -            | -                | -                | -         |    -3.11 | 2X2X, B1NGO, heartZ, lan, Roninbaby  |
|           22 |     1265 | 2025-05-13 | Steel Helmet       | W   | 0.624      | -            | -                | -                | 0 (0.000) |     1.57 | 2X2X, B1NGO, heartZ, lan, Roninbaby  |
|           21 |     1340 | 2025-05-10 | TYLOO              | L   | 0.604      | -            | -                | -                | -         |    -0.12 | 2X2X, B1NGO, heartZ, lan, Roninbaby  |
|           20 |     1390 | 2025-05-08 | Team GATERON       | W   | 0.591      | -            | -                | -                | 0 (0.000) |     1.70 | 2X2X, B1NGO, heartZ, lan, Roninbaby  |
|           19 |     1888 | 2025-04-16 | Rare Atom          | L   | 0.444      | -            | -                | -                | -         |    -1.93 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|           18 |     1913 | 2025-04-15 | TYLOO              | L   | 0.437      | -            | -                | -                | -         |    -0.07 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|           17 |     2347 | 2025-03-30 | Rare Atom          | L   | 0.329      | -            | -                | -                | -         |    -1.47 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|           16 |     2350 | 2025-03-29 | Lynn Vision Gaming | W   | 0.328      | 0.624        | 0.280 (0.057)    | 0.634 (0.130)    | 0 (0.000) |    10.21 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|           15 |     2402 | 2025-03-29 | Kaleido Gaming     | W   | 0.323      | 0.624        | 0.011 (0.002)    | 0.142 (0.029)    | 0 (0.000) |     3.95 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|           14 |     2411 | 2025-03-28 | TYLOO              | W   | 0.322      | 0.624        | 0.889 (0.179)    | 0.731 (0.147)    | 0 (0.000) |    10.10 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|           13 |     2481 | 2025-03-27 | Steel Helmet       | W   | 0.315      | 0.624        | -                | 0.031 (0.006)    | 0 (0.000) |     0.87 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|           12 |     2553 | 2025-03-26 | Kaleido Gaming     | L   | 0.309      | -            | -                | -                | -         |    -5.96 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|           11 |     3077 | 2025-03-07 | JiJieHao           | L   | 0.181      | -            | -                | -                | -         |    -1.51 | B1NGO, heartZ, lan, Roninbaby, TiGeR |
|           10 |     3186 | 2025-03-06 | Only One Word      | W   | 0.170      | 0.769        | 0.001 (0.000)    | 0.143 (0.019)    | 1 (0.170) |     1.78 | B1NGO, heartZ, lan, Roninbaby, TiGeR |
|            9 |     3187 | 2025-03-05 | Chinggis Warriors  | L   | 0.169      | -            | -                | -                | -         |    -1.03 | B1NGO, heartZ, lan, Roninbaby, TiGeR |
|            8 |     3355 | 2025-02-27 | Shika              | W   | 0.123      | 0.624        | 0.002 (0.000)    | 0.104 (0.008)    | 0 (0.000) |     0.95 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|            7 |     3357 | 2025-02-26 | Change The Game    | W   | 0.122      | 0.624        | -                | 0.111 (0.008)    | 0 (0.000) |     0.71 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|            6 |     3404 | 2025-02-25 | Kaleido Gaming     | W   | 0.116      | 0.624        | 0.011 (0.001)    | 0.142 (0.010)    | -         |     1.47 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|            5 |     3432 | 2025-02-25 | Rare Atom          | L   | 0.110      | -            | -                | -                | -         |    -0.53 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|            4 |     3464 | 2025-02-23 | FengDa Gaming      | W   | 0.102      | 0.624        | 0.004 (0.000)    | 0.178 (0.011)    | -         |     1.12 | B1NGO, BZA, lan, Roninbaby, TiGeR    |
|            3 |     3757 | 2025-02-09 | Rare Atom          | L   | 0.009      | -            | -                | -                | -         |    -0.04 | B1NGO, BZA, heartZ, lan, Roninbaby   |
|            2 |     3760 | 2025-02-09 | JiJieHao           | W   | 0.008      | 0.500        | 0.052 (0.000)    | -                | -         |     0.20 | B1NGO, BZA, heartZ, lan, Roninbaby   |
|            1 |     3794 | 2025-02-08 | Ground Zero Gaming | W   | 0.002      | 0.500        | 0.005 (0.000)    | -                | -         |     0.01 | B1NGO, BZA, heartZ, lan, Roninbaby   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,932.05)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-06 |      0.983 | $3,000.00      | $2,948.75       |
| 2025-05-17 |      0.656 | $1,500.00      | $983.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
