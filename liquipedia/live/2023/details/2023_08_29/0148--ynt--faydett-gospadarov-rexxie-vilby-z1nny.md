### Roster Details<br />
Team Name: YNT<br />
Roster: faydett, Gospadarov, rexxie, VILBy, z1Nny<br />
Global Rank: [148](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [101]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  721.2<br />
<br />
Final Rank Value (721.2) = Starting Rank Value (723.9) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.358[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 723.9
- 400 + ( ( 0.167 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 723.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      320 | 2023-08-13 | HOTU     | L   | 1.000      | -            | -                | -                | -         |   -11.17 | faydett, Gospadarov, rexxie, VILBy, z1Nny |
|            4 |      351 | 2023-08-12 | Websterz | L   | 1.000      | -            | -                | -                | -         |   -10.13 | faydett, Gospadarov, rexxie, VILBy, z1Nny |
|            3 |      671 | 2023-07-30 | 9 Pandas | W   | 1.000      | 0.338        | 0.074 (0.025)    | 1.000 (0.338)    | 0 (0.000) |    27.08 | faydett, Gospadarov, rexxie, VILBy, z1Nny |
|            2 |     1009 | 2023-07-11 | Spirit   | L   | 0.874      | -            | -                | -                | -         |    -0.60 | faydett, Gospadarov, rexxie, VILBy, z1Nny |
|            1 |     2178 | 2023-05-04 | Arcadia  | L   | 0.420      | -            | -                | -                | -         |    -7.82 | faydett, Gospadarov, rexxie, VILBy, z1Nny |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,420.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-13 |      1.000 | $4,420.00      | $4,420.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
