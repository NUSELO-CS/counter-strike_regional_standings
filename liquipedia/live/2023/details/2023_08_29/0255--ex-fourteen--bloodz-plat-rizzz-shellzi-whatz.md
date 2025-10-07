### Roster Details<br />
Team Name: ex-Fourteen<br />
Roster: BLOODZ, plat, RIZZZ, shellzi, whatz<br />
Global Rank: [255](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [153]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  582.4<br />
<br />
Final Rank Value (582.4) = Starting Rank Value (589.8) + Head To Head Adjustments (-7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.247[<sup>1</sup>](#table2)
- Bounty Collected: 0.146[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.001[<sup>2</sup>](#table1)

The average of these factors is 0.098<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 589.8
- 400 + ( ( 0.098 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 589.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2152 | 2023-05-06 | FTW         | L   | 0.434      | -            | -                | -                | -         |    -2.79 | BLOODZ, plat, RIZZZ, shellzi, whatz |
|            5 |     2875 | 2023-04-01 | los kogutos | L   | 0.199      | -            | -                | -                | -         |    -0.82 | BLOODZ, pr, RIZZZ, shellzi, whatz   |
|            4 |     2895 | 2023-03-31 | undefined   | L   | 0.193      | -            | -                | -                | -         |    -3.74 | BLOODZ, pr, RIZZZ, shellzi, whatz   |
|            3 |     3709 | 2023-03-04 | Arcadia     | L   | 0.014      | -            | -                | -                | -         |    -0.18 | BLOODZ, pr, RIZZZ, shellzi, whatz   |
|            2 |     3726 | 2023-03-04 | EC Brugge   | W   | 0.013      | 0.143        | 0.007 (0.000)    | 0.032 (0.000)    | 0 (0.000) |     0.23 | BLOODZ, pr, RIZZZ, shellzi, whatz   |
|            1 |     3756 | 2023-03-03 | Arcadia     | L   | 0.006      | -            | -                | -                | -         |    -0.07 | BLOODZ, pr, RIZZZ, shellzi, whatz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($242.48)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-05-07 |      0.440 | $551.00        | $242.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
