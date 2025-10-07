### Roster Details<br />
Team Name: Bad News Bears<br />
Roster: bew, Jonji, Sonic, steel, Umar<br />
Global Rank: [150](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [39]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  717.0<br />
<br />
Final Rank Value (717.0) = Starting Rank Value (718.3) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.286[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.3
- 400 + ( ( 0.165 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 718.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       18 | 2023-08-27 | Evil Geniuses | L   | 1.000      | -            | -                | -                | -         |    -7.61 | bew, Jonji, Sonic, steel, Umar  |
|           12 |      115 | 2023-08-24 | Reason        | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.175 (0.067)    | 0 (0.000) |    11.77 | bew, Jonji, Sonic, steel, Umar  |
|           11 |      131 | 2023-08-23 | Rocket        | L   | 1.000      | -            | -                | -                | -         |   -14.59 | Jonji, nicx, Sonic, SummY, Umar |
|           10 |      171 | 2023-08-21 | 7AM NA        | W   | 1.000      | 0.384        | 0.004 (0.002)    | 0.011 (0.004)    | 0 (0.000) |     9.13 | bew, Jonji, Sonic, steel, Umar  |
|            9 |      246 | 2023-08-16 | M80           | L   | 1.000      | -            | -                | -                | -         |    -7.55 | nicx, Sonic, steel, SummY, Umar |
|            8 |      266 | 2023-08-15 | Mythic        | L   | 1.000      | -            | -                | -                | -         |   -23.96 | bew, nicx, steel, SummY, Umar   |
|            7 |      331 | 2023-08-12 | Forsaken      | L   | 1.000      | -            | -                | -                | -         |   -13.00 | bew, Jonji, Sonic, steel, Umar  |
|            6 |      336 | 2023-08-12 | Kari          | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.129 (0.018)    | 0 (0.000) |    10.19 | bew, Jonji, Sonic, steel, Umar  |
|            5 |      386 | 2023-08-11 | Wildcard      | W   | 1.000      | 0.143        | 0.128 (0.018)    | 0.804 (0.115)    | 0 (0.000) |    21.73 | bew, Jonji, Sonic, steel, Umar  |
|            4 |      482 | 2023-08-09 | M80           | L   | 1.000      | -            | -                | -                | -         |    -9.80 | bew, Jonji, Sonic, steel, Umar  |
|            3 |      650 | 2023-07-31 | Wildcard      | L   | 1.000      | -            | -                | -                | -         |    -9.89 | bew, Jonji, Sonic, steel, Umar  |
|            2 |      676 | 2023-07-30 | Badass        | W   | 1.000      | 0.371        | 0.013 (0.005)    | 0.517 (0.191)    | 0 (0.000) |    16.21 | bew, Jonji, Sonic, steel, Umar  |
|            1 |      905 | 2023-07-15 | Forsaken      | W   | 0.903      | 0.143        | 0.018 (0.002)    | 0.524 (0.068)    | 0 (0.000) |    16.09 | bew, Jonji, Sonic, steel, Umar  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-31 |      1.000 | $2,500.00      | $2,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
