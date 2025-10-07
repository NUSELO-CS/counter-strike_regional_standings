### Roster Details<br />
Team Name: Saints<br />
Roster: buhnny, katalyyst, olya, sckrafft, Sinxysinxy<br />
Global Rank: [238](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [145]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  601.6<br />
<br />
Final Rank Value (601.6) = Starting Rank Value (611.3) + Head To Head Adjustments (-9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 611.3
- 400 + ( ( 0.109 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 611.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1672 | 2023-05-28 | Shimmer      | L   | 0.583      | -            | -                | -                | -         |    -6.61 | buhnny, katalyyst, olya, sckrafft, Sinxysinxy |
|            6 |     2645 | 2023-04-12 | Shimmer      | L   | 0.276      | -            | -                | -                | -         |    -3.38 | buhnny, daria, eychesdot, olya, sckrafft      |
|            5 |     2796 | 2023-04-06 | byte         | W   | 0.235      | 0.328        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.78 | buhnny, daria, eychesdot, olya, sckrafft      |
|            4 |     2936 | 2023-03-29 | FlyQuest RED | L   | 0.182      | -            | -                | -                | -         |    -1.47 | buhnny, daria, eychesdot, olya, sckrafft      |
|            3 |     3158 | 2023-03-22 | Shimmer      | L   | 0.136      | -            | -                | -                | -         |    -1.71 | buhnny, daria, eychesdot, olya, sckrafft      |
|            2 |     3383 | 2023-03-15 | byte         | W   | 0.090      | 0.328        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.06 | buhnny, daria, eychesdot, olya, sckrafft      |
|            1 |     3561 | 2023-03-09 | FlyQuest RED | L   | 0.049      | -            | -                | -                | -         |    -0.40 | buhnny, daria, eychesdot, olya, sckrafft      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($515.43)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-05-28 |      0.583 | $250.00        | $145.68         |
| 2023-04-15 |      0.296 | $1,250.00      | $369.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
