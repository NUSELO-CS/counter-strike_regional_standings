### Roster Details<br />
Team Name: Nakama<br />
Roster: Graviti, Kursy, Neityu, Razzmo, Snobling<br />
Global Rank: [167](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [109]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  689.7<br />
<br />
Final Rank Value (689.7) = Starting Rank Value (694.0) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.094[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 694.0
- 400 + ( ( 0.152 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 694.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     1413 | 2023-06-05 | Arcadia       | L   | 0.634      | -            | -                | -                | -         |   -10.87 | Graviti, Kursy, Neityu, Razzmo, Snobling |
|           12 |     1434 | 2023-06-04 | sYnck         | L   | 0.627      | -            | -                | -                | -         |    -5.89 | Graviti, Kursy, Neityu, Razzmo, Snobling |
|           11 |     1442 | 2023-06-04 | MASONIC       | W   | 0.627      | 0.294        | 0.012 (0.002)    | 0.262 (0.048)    | 0 (0.000) |    15.22 | Graviti, Kursy, Neityu, Razzmo, Snobling |
|           10 |     1677 | 2023-05-28 | Question Mark | W   | 0.581      | 0.294        | 0.032 (0.006)    | 0.689 (0.118)    | 0 (0.000) |    13.23 | Graviti, Kursy, Neityu, Razzmo, Snobling |
|            9 |     1844 | 2023-05-24 | PORTUGAL      | L   | 0.552      | -            | -                | -                | -         |   -12.05 | Graviti, Kursy, Neityu, oqald, Razzmo    |
|            8 |     1879 | 2023-05-23 | los kogutos   | L   | 0.546      | -            | -                | -                | -         |    -4.50 | Graviti, Kursy, Neityu, oqald, Razzmo    |
|            7 |     2307 | 2023-04-28 | Let us cook   | L   | 0.379      | -            | -                | -                | -         |    -5.41 | Kursy, Kyojin, Neityu, Razzmo, shox      |
|            6 |     2335 | 2023-04-27 | HAVU          | L   | 0.372      | -            | -                | -                | -         |    -2.30 | Kursy, Kyojin, Neityu, Razzmo, shox      |
|            5 |     2432 | 2023-04-22 | Arcadia       | W   | 0.340      | 0.435        | 0.007 (0.001)    | 0.080 (0.012)    | 0 (0.000) |     4.86 | flex0r, Kursy, Kyojin, Neityu, Razzmo    |
|            4 |     2451 | 2023-04-21 | Endpoint      | L   | 0.331      | -            | -                | -                | -         |    -5.21 | Jas_x, Kursy, Kyojin, Neityu, Razzmo     |
|            3 |     2855 | 2023-04-02 | EPIC DUDES    | W   | 0.207      | 0.143        | 0.006 (0.000)    | 0.083 (0.002)    | 0 (0.000) |     3.20 | Kursy, Kyojin, Neityu, Razzmo, shox      |
|            2 |     2941 | 2023-03-29 | K23           | W   | 0.181      | 0.143        | 0.004 (0.000)    | 0.100 (0.003)    | 0 (0.000) |     2.79 | Kursy, Kyojin, Neityu, Razzmo, shox      |
|            1 |     2949 | 2023-03-29 | Arcadia       | W   | 0.180      | 0.143        | 0.007 (0.000)    | 0.080 (0.002)    | 0 (0.000) |     2.60 | Kursy, Kyojin, Neityu, Razzmo, shox      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,230.88)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-07 |      0.647 | $1,330.00      | $860.99         |
| 2023-06-04 |      0.627 | $1,000.00      | $627.46         |
| 2023-05-28 |      0.581 | $3,000.00      | $1,742.43       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
