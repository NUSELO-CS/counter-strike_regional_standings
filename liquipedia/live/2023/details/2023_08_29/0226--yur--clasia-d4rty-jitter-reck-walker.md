### Roster Details<br />
Team Name: yur<br />
Roster: CLASIA, d4rty, jitter, reck, walker<br />
Global Rank: [226](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [68]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  611.4<br />
<br />
Final Rank Value (611.4) = Starting Rank Value (611.5) + Head To Head Adjustments (-0.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.236[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 611.5
- 400 + ( ( 0.109 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 611.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2763 | 2023-04-07 | Nouns     | L   | 0.243      | -            | -                | -                | -         |    -1.24 | CLASIA, d4rty, jitter, reck, walker |
|            5 |     2792 | 2023-04-06 | Fluxo     | L   | 0.236      | -            | -                | -                | -         |    -2.30 | CLASIA, d4rty, jitter, reck, walker |
|            4 |     3232 | 2023-03-20 | Mad Kings | W   | 0.122      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.37 | CLASIA, d4rty, jitter, reck, walker |
|            3 |     3502 | 2023-03-11 | Nouns     | L   | 0.062      | -            | -                | -                | -         |    -0.31 | CLASIA, d4rty, jitter, reck, walker |
|            2 |     3528 | 2023-03-10 | Strife    | W   | 0.056      | 0.143        | 0.004 (0.000)    | 0.043 (0.000)    | 0 (0.000) |     1.03 | CLASIA, d4rty, jitter, reck, walker |
|            1 |     3533 | 2023-03-10 | Wildcard  | W   | 0.055      | 0.143        | 0.128 (0.001)    | 0.804 (0.006)    | 0 (0.000) |     1.43 | CLASIA, d4rty, jitter, reck, walker |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($156.07)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-03-25 |      0.156 | $1,000.00      | $156.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
