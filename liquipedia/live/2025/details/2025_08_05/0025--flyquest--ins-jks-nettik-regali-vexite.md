### Roster Details<br />
Team Name: FlyQuest<br />
Roster: INS, jks, nettik, regali, Vexite<br />
Global Rank: [25](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_05.md)<br />
Regional Rank: [4]( ../../standings_asia_2025_08_05.md)<br />
<br />
Final Rank Value:  1350.0<br />
<br />
Final Rank Value (1350.0) = Starting Rank Value (1341.2) + Head To Head Adjustments (8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.489[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.167[<sup>2</sup>](#table1)
- LAN Wins: 0.889[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.485[<sup>2</sup>](#table1)

The average of these factors is 0.495<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1341.2
- 400 + ( ( 0.495 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1341.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |       10 | 2025-08-03 | The Huns Esports        | W   | 1.000      | 0.143        | 0.035 (0.005)    | 0.299 (0.043)    | 1 (1.000) |     3.76 | INS, jks, nettik, regali, Vexite   |
|           32 |       17 | 2025-08-02 | Eruption                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.02 | INS, jks, nettik, regali, Vexite   |
|           31 |       48 | 2025-08-01 | Alter Ego               | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.17 | INS, jks, nettik, regali, Vexite   |
|           30 |      145 | 2025-07-25 | Team Liquid             | L   | 1.000      | -            | -                | -                | -         |   -15.37 | INS, jks, nettik, regali, Vexite   |
|           29 |      161 | 2025-07-24 | B8                      | W   | 1.000      | 0.769        | 0.138 (0.106)    | 0.623 (0.479)    | 1 (1.000) |    16.26 | INS, jks, nettik, regali, Vexite   |
|           28 |      173 | 2025-07-23 | FURIA                   | L   | 1.000      | -            | -                | -                | -         |    -4.28 | INS, jks, nettik, regali, Vexite   |
|           27 |      883 | 2025-06-06 | TYLOO                   | L   | 0.786      | -            | -                | -                | -         |    -2.77 | INS, Liazz, nettik, regali, Vexite |
|           26 |      890 | 2025-06-05 | Nemiga Gaming           | L   | 0.780      | -            | -                | -                | -         |   -16.43 | INS, Liazz, nettik, regali, Vexite |
|           25 |      906 | 2025-06-04 | HEROIC                  | L   | 0.772      | -            | -                | -                | -         |    -5.29 | INS, Liazz, nettik, regali, Vexite |
|           24 |      919 | 2025-06-03 | BetBoom Team            | W   | 0.766      | 0.624        | 0.326 (0.156)    | 0.625 (0.299)    | 1 (0.766) |    10.88 | INS, Liazz, nettik, regali, Vexite |
|           23 |      923 | 2025-06-03 | Fluxo                   | W   | 0.766      | 0.624        | 0.041 (0.019)    | 0.420 (0.201)    | 1 (0.766) |     3.86 | INS, Liazz, nettik, regali, Vexite |
|           22 |     1192 | 2025-05-15 | JiJieHao                | W   | 0.642      | 0.636        | 0.052 (0.021)    | 0.248 (0.101)    | 1 (0.642) |     3.08 | INS, Liazz, nettik, regali, Vexite |
|           21 |     1321 | 2025-05-11 | TYLOO                   | L   | 0.610      | -            | -                | -                | -         |    -1.87 | INS, Liazz, nettik, regali, Vexite |
|           20 |     1349 | 2025-05-10 | Rare Atom               | W   | 0.603      | 0.636        | 0.066 (0.025)    | 0.457 (0.175)    | 1 (0.603) |     4.60 | INS, Liazz, nettik, regali, Vexite |
|           19 |     1373 | 2025-05-08 | TYLOO                   | L   | 0.596      | -            | -                | -                | -         |    -1.82 | INS, Liazz, nettik, regali, Vexite |
|           18 |     1428 | 2025-05-07 | Nomads (Mongolian team) | W   | 0.583      | 0.636        | 0.013 (0.005)    | 0.154 (0.057)    | 1 (0.583) |     0.66 | INS, Liazz, nettik, regali, Vexite |
|           17 |     1568 | 2025-05-01 | FaZe Clan               | L   | 0.545      | -            | -                | -                | -         |    -1.78 | INS, Liazz, nettik, regali, Vexite |
|           16 |     1614 | 2025-04-30 | Team Spirit             | L   | 0.536      | -            | -                | -                | -         |    -0.52 | INS, Liazz, nettik, regali, Vexite |
|           15 |     1682 | 2025-04-26 | Team United Kingdom     | W   | 0.515      | -            | -                | -                | 1 (0.515) |     0.08 | INS, Liazz, nettik, SPUNJ, Vexite  |
|           14 |     1756 | 2025-04-22 | Natus Vincere           | L   | 0.488      | -            | -                | -                | -         |    -1.29 | INS, Liazz, nettik, regali, Vexite |
|           13 |     1769 | 2025-04-21 | Virtus.pro              | W   | 0.482      | 1.000        | 0.196 (0.094)    | 0.411 (0.198)    | -         |    11.39 | INS, Liazz, nettik, regali, Vexite |
|           12 |     1781 | 2025-04-21 | Team Vitality           | L   | 0.476      | -            | -                | -                | -         |    -0.33 | INS, Liazz, nettik, regali, Vexite |
|           11 |     1873 | 2025-04-16 | SemperFi Esports        | W   | 0.449      | -            | -                | -                | -         |     0.69 | INS, Liazz, nettik, regali, Vexite |
|           10 |     1899 | 2025-04-15 | SemperFi Esports        | W   | 0.441      | -            | -                | -                | -         |     0.66 | INS, Liazz, nettik, regali, Vexite |
|            9 |     1922 | 2025-04-14 | Rooster                 | W   | 0.435      | -            | -                | -                | -         |     0.42 | INS, Liazz, nettik, regali, Vexite |
|            8 |     3221 | 2025-03-05 | TYLOO                   | L   | 0.164      | -            | -                | -                | -         |    -0.33 | dexter, INS, Liazz, regali, Vexite |
|            7 |     3239 | 2025-03-04 | Aurora Gaming           | L   | 0.158      | -            | -                | -                | -         |    -0.69 | dexter, INS, Liazz, regali, Vexite |
|            6 |     3253 | 2025-03-03 | PaiN Gaming             | W   | 0.152      | 0.769        | 0.300 (0.035)    | 0.367 (0.043)    | -         |     3.98 | dexter, INS, Liazz, regali, Vexite |
|            5 |     3286 | 2025-03-02 | Lynn Vision Gaming      | W   | 0.143      | 0.769        | 0.280 (0.031)    | 0.634 (0.070)    | -         |     3.70 | dexter, INS, Liazz, regali, Vexite |
|            4 |     3316 | 2025-03-01 | M80                     | L   | 0.136      | -            | -                | -                | -         |    -2.90 | dexter, INS, Liazz, regali, Vexite |
|            3 |     3599 | 2025-02-16 | SAW                     | L   | 0.051      | -            | -                | -                | -         |    -0.71 | dexter, INS, Liazz, regali, Vexite |
|            2 |     3626 | 2025-02-15 | BIG                     | L   | 0.043      | -            | -                | -                | -         |    -0.92 | dexter, INS, Liazz, regali, Vexite |
|            1 |     3650 | 2025-02-14 | Team Falcons            | L   | 0.037      | -            | -                | -                | -         |    -0.14 | dexter, INS, Liazz, regali, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,199.81)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-25 |      1.000 | $4,500.00      | $4,500.00       |
| 2025-05-16 |      0.644 | $40,000.00     | $25,744.44      |
| 2025-05-04 |      0.564 | $10,000.00     | $5,643.06       |
| 2025-03-05 |      0.166 | $6,500.00      | $1,078.52       |
| 2025-02-23 |      0.099 | $12,500.00     | $1,233.80       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
