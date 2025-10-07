### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Global Rank: [75](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [56]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  899.6<br />
<br />
Final Rank Value (899.6) = Starting Rank Value (869.2) + Head To Head Adjustments (30.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.452[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.213[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.187[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.2
- 400 + ( ( 0.243 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 869.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      690 | 2023-07-30 | NIP Impact           | W   | 0.999      | 0.250        | 0.006 (0.001)    | 0.101 (0.025)    | 0 (0.000) |     6.79 | Angelka, Hanka, LETi, Liina, vicu |
|           12 |     1428 | 2023-06-04 | Nigma Galaxy         | L   | 0.628      | -            | -                | -                | -         |    -8.68 | Angelka, Hanka, LETi, Liina, vicu |
|           11 |     1437 | 2023-06-04 | FlyQuest RED         | W   | 0.627      | 0.524        | 0.036 (0.012)    | 0.163 (0.054)    | 1 (0.627) |     7.34 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     1488 | 2023-06-02 | B4 fe                | W   | 0.615      | 0.524        | 0.053 (0.017)    | 0.118 (0.038)    | 1 (0.615) |     7.69 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     1508 | 2023-06-02 | HSG fe               | W   | 0.613      | 0.524        | 0.009 (0.003)    | -                | 1 (0.613) |     2.68 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     2271 | 2023-04-29 | NIP Impact           | W   | 0.387      | 0.143        | 0.006 (0.000)    | 0.101 (0.006)    | 0 (0.000) |     2.99 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     2302 | 2023-04-28 | 9 Pandas Fearless    | W   | 0.380      | 0.143        | 0.021 (0.001)    | 0.158 (0.009)    | 0 (0.000) |     4.04 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     2419 | 2023-04-23 | NIP Impact           | W   | 0.346      | 0.250        | 0.006 (0.000)    | 0.101 (0.009)    | 0 (0.000) |     2.61 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     2662 | 2023-04-12 | Flames Shieldmaidens | W   | 0.274      | 0.329        | 0.001 (0.000)    | 0.018 (0.002)    | 0 (0.000) |     1.56 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     2807 | 2023-04-06 | GUILD                | W   | 0.234      | 0.329        | 0.001 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     1.37 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     3167 | 2023-03-22 | 9 Pandas Fearless    | W   | 0.134      | 0.329        | 0.021 (0.001)    | 0.158 (0.007)    | 0 (0.000) |     1.41 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     3397 | 2023-03-15 | VP.Angels            | W   | 0.088      | 0.329        | -                | 0.048 (0.001)    | -         |     0.35 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     3606 | 2023-03-08 | G2 Oya               | W   | 0.041      | -            | -                | -                | -         |     0.27 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,708.82)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-07-30 |      0.999 | $750.00        | $749.59         |
| 2023-06-04 |      0.628 | $25,000.00     | $15,699.42      |
| 2023-04-23 |      0.346 | $750.00        | $259.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
