### Roster Details<br />
Team Name: Falcons<br />
Roster: bodyy, kennyS, misutaaa, NBK-, Python<br />
Global Rank: [121](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [83]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  762.9<br />
<br />
Final Rank Value (762.9) = Starting Rank Value (733.9) + Head To Head Adjustments (29.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.9
- 400 + ( ( 0.173 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 733.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2215 | 2023-05-02 | Hungary         | W   | 0.407      | 0.435        | 0.040 (0.007)    | 0.746 (0.132)    | 0 (0.000) |     8.70 | bodyy, kennyS, misutaaa, NBK-, Python |
|           14 |     2351 | 2023-04-26 | 9INE            | L   | 0.367      | -            | -                | -                | -         |    -0.96 | bodyy, kennyS, misutaaa, NBK-, Python |
|           13 |     2594 | 2023-04-14 | BIG             | L   | 0.287      | -            | -                | -                | -         |    -2.06 | bodyy, kennyS, misutaaa, NBK-, Python |
|           12 |     2658 | 2023-04-12 | B8              | W   | 0.274      | 0.435        | 0.003 (0.000)    | 0.561 (0.067)    | 0 (0.000) |     5.65 | bodyy, kennyS, misutaaa, NBK-, Python |
|           11 |     2737 | 2023-04-09 | OG              | L   | 0.252      | -            | -                | -                | -         |    -0.97 | bodyy, kennyS, misutaaa, NBK-, Python |
|           10 |     2754 | 2023-04-08 | GamerLegion     | L   | 0.246      | -            | -                | -                | -         |    -0.08 | bodyy, kennyS, misutaaa, NBK-, Python |
|            9 |     2787 | 2023-04-07 | MOUZ            | W   | 0.238      | 0.143        | 0.292 (0.010)    | 0.533 (0.018)    | 1 (0.238) |     7.35 | bodyy, kennyS, misutaaa, NBK-, Python |
|            8 |     2813 | 2023-04-06 | Natus Vincere   | L   | 0.233      | -            | -                | -                | -         |    -0.91 | bodyy, kennyS, misutaaa, NBK-, Python |
|            7 |     2819 | 2023-04-06 | Sprout          | W   | 0.232      | 0.143        | 0.030 (0.001)    | 0.420 (0.014)    | 1 (0.232) |     4.88 | bodyy, kennyS, misutaaa, NBK-, Python |
|            6 |     2925 | 2023-03-30 | Cloud9          | L   | 0.186      | -            | -                | -                | -         |    -0.04 | bodyy, kennyS, misutaaa, NBK-, Python |
|            5 |     2987 | 2023-03-28 | GamerLegion     | L   | 0.173      | -            | -                | -                | -         |    -0.05 | bodyy, kennyS, misutaaa, NBK-, Python |
|            4 |     3012 | 2023-03-27 | 1WIN            | W   | 0.167      | 0.657        | 0.298 (0.033)    | 0.772 (0.084)    | 0 (0.000) |     4.94 | bodyy, kennyS, misutaaa, NBK-, Python |
|            3 |     3432 | 2023-03-14 | Sangal          | W   | 0.080      | 0.657        | 0.001 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     0.97 | bodyy, kennyS, misutaaa, NBK-, Python |
|            2 |     3590 | 2023-03-09 | Into the Breach | W   | 0.046      | 0.657        | 0.169 (0.005)    | 0.530 (0.016)    | 0 (0.000) |     1.35 | bodyy, kennyS, misutaaa, NBK-, Python |
|            1 |     3750 | 2023-03-03 | FORZE           | W   | 0.006      | 0.657        | 0.364 (0.002)    | 0.409 (0.002)    | 0 (0.000) |     0.19 | bodyy, kennyS, misutaaa, NBK-, Python |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,095.62)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-04-04 |      0.219 | $5,000.00      | $1,095.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
