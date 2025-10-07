### Roster Details<br />
Team Name: BIG<br />
Roster: Krimbo, mantuu, prosus, s1n, tabseN<br />
Global Rank: [20](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [20]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1202.5<br />
<br />
Final Rank Value (1202.5) = Starting Rank Value (1185.2) + Head To Head Adjustments (17.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.559[<sup>1</sup>](#table2)
- Bounty Collected: 0.461[<sup>2</sup>](#table1)
- Opponent Network: 0.315[<sup>2</sup>](#table1)
- LAN Wins: 0.289[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.525[<sup>2</sup>](#table1)

The average of these factors is 0.406<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1185.2
- 400 + ( ( 0.406 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1185.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |       21 | 2023-08-27 | Monte           | W   | 1.000      | 0.435        | 0.318 (0.138)    | 1.000 (0.435)    | 0 (0.000) |    20.78 | Krimbo, mantuu, prosus, s1n, tabseN |
|           21 |       34 | 2023-08-27 | los kogutos     | W   | 1.000      | 0.435        | 0.038 (0.017)    | 0.950 (0.413)    | 0 (0.000) |     6.21 | Krimbo, mantuu, prosus, s1n, tabseN |
|           20 |       52 | 2023-08-26 | SAW             | W   | 1.000      | 0.435        | 0.240 (0.104)    | 0.968 (0.421)    | 0 (0.000) |    14.95 | Krimbo, mantuu, prosus, s1n, tabseN |
|           19 |      122 | 2023-08-24 | Endpoint        | W   | 1.000      | 0.435        | 0.046 (0.020)    | 0.790 (0.343)    | 0 (0.000) |     7.96 | Krimbo, mantuu, prosus, s1n, tabseN |
|           18 |      204 | 2023-08-19 | Space           | L   | 1.000      | -            | -                | -                | -         |   -23.81 | Krimbo, mantuu, prosus, s1n, tabseN |
|           17 |      235 | 2023-08-17 | IKLA            | W   | 1.000      | 0.435        | -                | 0.238 (0.103)    | 0 (0.000) |     3.35 | Krimbo, mantuu, prosus, s1n, tabseN |
|           16 |      313 | 2023-08-13 | MOUZ            | L   | 1.000      | -            | -                | -                | -         |    -5.47 | Krimbo, mantuu, prosus, s1n, tabseN |
|           15 |      368 | 2023-08-12 | Looking4Org     | W   | 1.000      | 0.384        | 0.065 (0.025)    | 0.882 (0.339)    | 0 (0.000) |    12.03 | Krimbo, mantuu, prosus, s1n, tabseN |
|           14 |      437 | 2023-08-10 | Victory Zigzag  | L   | 1.000      | -            | -                | -                | -         |   -30.35 | Krimbo, mantuu, prosus, s1n, tabseN |
|           13 |      450 | 2023-08-10 | B8              | W   | 1.000      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |     3.77 | Krimbo, mantuu, prosus, s1n, tabseN |
|           12 |      459 | 2023-08-10 | ALTERNATE aTTaX | W   | 1.000      | 0.384        | 0.046 (0.018)    | 0.884 (0.340)    | -         |     9.34 | Krimbo, mantuu, prosus, s1n, tabseN |
|           11 |      517 | 2023-08-08 | Sprout          | W   | 1.000      | -            | -                | -                | -         |     1.32 | Krimbo, mantuu, prosus, s1n, tabseN |
|           10 |      732 | 2023-07-27 | Liquid          | L   | 0.980      | -            | -                | -                | -         |    -8.09 | Krimbo, prosus, s1n, S3NSEY, tabseN |
|            9 |      743 | 2023-07-26 | Apeks           | L   | 0.974      | -            | -                | -                | -         |    -7.22 | Krimbo, prosus, s1n, S3NSEY, tabseN |
|            8 |      777 | 2023-07-23 | Vitality        | L   | 0.953      | -            | -                | -                | -         |    -0.46 | Krimbo, mantuu, prosus, s1n, tabseN |
|            7 |      806 | 2023-07-21 | OG              | W   | 0.940      | 0.571        | 0.075 (0.040)    | 0.386 (0.207)    | 1 (0.940) |     7.79 | Krimbo, mantuu, prosus, s1n, tabseN |
|            6 |      856 | 2023-07-18 | Natus Vincere   | L   | 0.921      | -            | -                | -                | -         |    -6.36 | Krimbo, mantuu, prosus, s1n, tabseN |
|            5 |      890 | 2023-07-16 | Astralis        | W   | 0.907      | 0.571        | 0.582 (0.301)    | 0.660 (0.342)    | 1 (0.907) |    26.09 | Krimbo, mantuu, prosus, s1n, tabseN |
|            4 |      946 | 2023-07-14 | Heroic          | L   | 0.892      | -            | -                | -                | -         |    -0.58 | Krimbo, mantuu, prosus, s1n, tabseN |
|            3 |     1220 | 2023-06-11 | ALTERNATE aTTaX | W   | 0.674      | 0.347        | 0.046 (0.011)    | 0.884 (0.207)    | 1 (0.674) |     4.87 | hyped, Krimbo, prosus, s1n, skyye   |
|            2 |     2301 | 2023-04-28 | paiN            | L   | 0.380      | -            | -                | -                | -         |    -8.88 | hyped, k1to, Krimbo, prosus, tabseN |
|            1 |     2349 | 2023-04-26 | Fake Natty      | L   | 0.368      | -            | -                | -                | -         |    -9.89 | hyped, k1to, Krimbo, prosus, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,420.42)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-08-27 |      1.000 | $22,000.00     | $22,000.00      |
| 2023-08-20 |      1.000 | $2,000.00      | $2,000.00       |
| 2023-08-13 |      1.000 | $5,000.00      | $5,000.00       |
| 2023-07-28 |      0.988 | $2,500.00      | $2,469.61       |
| 2023-07-23 |      0.954 | $8,500.00      | $8,105.09       |
| 2023-06-11 |      0.674 | $7,193.00      | $4,845.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
