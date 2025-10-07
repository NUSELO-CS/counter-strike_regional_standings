### Roster Details<br />
Team Name: Into the Bin<br />
Roster: Adam9130, dobbo, PANIX, robiin, Wolfie<br />
Global Rank: [223](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [136]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  612.8<br />
<br />
Final Rank Value (612.8) = Starting Rank Value (608.9) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.032[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 608.9
- 400 + ( ( 0.108 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 608.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     2853 | 2023-04-02 | ROYALS        | W   | 0.207      | 0.277        | 0.001 (0.000)    | 0.020 (0.001)    | 0 (0.000) |     3.16 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|           12 |     2858 | 2023-04-02 | FROGS         | W   | 0.206      | 0.277        | 0.000 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     3.04 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|           11 |     2870 | 2023-04-01 | Choppers      | W   | 0.200      | 0.277        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.52 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|           10 |     2923 | 2023-03-30 | Insilio       | L   | 0.186      | -            | -                | -                | -         |    -2.25 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|            9 |     2948 | 2023-03-29 | Zero Tenacity | L   | 0.180      | -            | -                | -                | -         |    -0.92 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|            8 |     3201 | 2023-03-21 | Ignis Serpens | L   | 0.128      | -            | -                | -                | -         |    -1.46 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|            7 |     3646 | 2023-03-07 | ex-BLUEJAYS   | L   | 0.033      | -            | -                | -                | -         |    -0.72 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|            6 |     3657 | 2023-03-06 | GTZ           | W   | 0.028      | 0.143        | 0.025 (0.000)    | 0.229 (0.001)    | 0 (0.000) |     0.75 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|            5 |     3679 | 2023-03-05 | Spirit        | L   | 0.021      | -            | -                | -                | -         |    -0.01 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|            4 |     3684 | 2023-03-05 | GTZ           | W   | 0.020      | 0.143        | 0.025 (0.000)    | 0.229 (0.001)    | 0 (0.000) |     0.55 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|            3 |     3711 | 2023-03-04 | Endpoint      | L   | 0.014      | -            | -                | -                | -         |    -0.07 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|            2 |     3714 | 2023-03-04 | FTW           | W   | 0.014      | 0.143        | 0.019 (0.000)    | 0.198 (0.000)    | 0 (0.000) |     0.34 | Adam9130, dobbo, PANIX, robiin, Wolfie |
|            1 |     3721 | 2023-03-04 | Endpoint      | L   | 0.013      | -            | -                | -                | -         |    -0.06 | Adam9130, dobbo, PANIX, robiin, Wolfie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($306.71)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-04-02 |      0.207 | $1,480.00      | $306.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
