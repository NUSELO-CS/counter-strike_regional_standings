### Roster Details<br />
Team Name: Take Flyte<br />
Roster: corn, nicx, Nifty, Umar, xCAPE<br />
Global Rank: [234](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [73]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  606.2<br />
<br />
Final Rank Value (606.2) = Starting Rank Value (635.1) + Head To Head Adjustments (-28.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.089[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 635.1
- 400 + ( ( 0.122 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 635.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1213 | 2023-06-11 | Kari             | L   | 0.676      | -            | -                | -                | -         |   -10.29 | corn, nicx, Nifty, Umar, xCAPE   |
|           17 |     1238 | 2023-06-10 | Badass           | L   | 0.669      | -            | -                | -                | -         |    -7.41 | corn, nicx, Nifty, Umar, xCAPE   |
|           16 |     1272 | 2023-06-09 | Take Flyte       | W   | 0.663      | 0.143        | 0.012 (0.001)    | 0.153 (0.014)    | 0 (0.000) |    11.59 | corn, nicx, Nifty, Umar, xCAPE   |
|           15 |     1389 | 2023-06-06 | Wildcard         | L   | 0.642      | -            | -                | -                | -         |    -4.36 | corn, nicx, Nifty, Umar, xCAPE   |
|           14 |     1994 | 2023-05-16 | Badass           | L   | 0.502      | -            | -                | -                | -         |    -5.82 | nicx, Nifty, SummY, Umar, xCAPE  |
|           13 |     1998 | 2023-05-16 | M80              | L   | 0.501      | -            | -                | -                | -         |    -3.21 | nicx, Nifty, SummY, Umar, xCAPE  |
|           12 |     2006 | 2023-05-15 | Party Astronauts | L   | 0.496      | -            | -                | -                | -         |    -4.25 | nicx, Nifty, SummY, Umar, xCAPE  |
|           11 |     2056 | 2023-05-11 | Unjustified      | L   | 0.469      | -            | -                | -                | -         |    -7.36 | nicx, Nifty, SummY, Umar, xCAPE  |
|           10 |     2063 | 2023-05-10 | Strife           | L   | 0.463      | -            | -                | -                | -         |    -5.12 | nicx, Nifty, SummY, Umar, xCAPE  |
|            9 |     2066 | 2023-05-10 | MIBR             | L   | 0.462      | -            | -                | -                | -         |    -1.85 | nicx, Nifty, SummY, Umar, xCAPE  |
|            8 |     2206 | 2023-05-02 | Wildcard         | L   | 0.409      | -            | -                | -                | -         |    -3.03 | nicx, Nifty, Umar, Wolffe, xCAPE |
|            7 |     2472 | 2023-04-19 | Limitless        | W   | 0.323      | 0.435        | 0.000 (0.000)    | 0.015 (0.002)    | 0 (0.000) |     2.83 | nicx, Nifty, Umar, Wolffe, xCAPE |
|            6 |     2641 | 2023-04-12 | Party Astronauts | L   | 0.276      | -            | -                | -                | -         |    -2.79 | nicx, Nifty, Umar, Wolffe, xCAPE |
|            5 |     2649 | 2023-04-12 | Wildcard         | L   | 0.275      | -            | -                | -                | -         |    -1.89 | nicx, Nifty, Umar, Wolffe, xCAPE |
|            4 |     2681 | 2023-04-11 | WITHOUT WARNING  | W   | 0.269      | 0.143        | 0.017 (0.001)    | 0.146 (0.006)    | 0 (0.000) |     5.02 | nicx, Nifty, Umar, Wolffe, xCAPE |
|            3 |     2687 | 2023-04-11 | Kari             | W   | 0.269      | 0.143        | 0.005 (0.000)    | 0.129 (0.005)    | 0 (0.000) |     4.42 | nicx, Nifty, Umar, Wolffe, xCAPE |
|            2 |     3044 | 2023-03-25 | Mythic           | W   | 0.156      | 0.143        | 0.000 (0.000)    | 0.157 (0.004)    | 0 (0.000) |     1.75 | hyza, nicx, Umar, Wolffe, xCAPE  |
|            1 |     3078 | 2023-03-24 | FLUFFY AIMERS    | W   | 0.149      | 0.143        | 0.011 (0.000)    | 0.288 (0.006)    | 0 (0.000) |     2.88 | hyza, nicx, Umar, Wolffe, xCAPE  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($496.87)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-09 |      0.662 | $750.00        | $496.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
