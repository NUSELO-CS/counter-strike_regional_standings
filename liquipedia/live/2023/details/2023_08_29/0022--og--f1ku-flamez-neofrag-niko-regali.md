### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, flameZ, NEOFRAG, niko, regali<br />
Global Rank: [22](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [22]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1153.5<br />
<br />
Final Rank Value (1153.5) = Starting Rank Value (1090.5) + Head To Head Adjustments (63.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.431[<sup>2</sup>](#table1)
- Opponent Network: 0.138[<sup>2</sup>](#table1)
- LAN Wins: 0.348[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.254[<sup>2</sup>](#table1)

The average of these factors is 0.357<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1090.5
- 400 + ( ( 0.357 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1090.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |     1562 | 2023-05-31 | MOUZ              | L   | 0.601      | -            | -                | -                | -         |    -3.86 | F1KU, flameZ, NEOFRAG, niko, regali  |
|           34 |     1596 | 2023-05-30 | 9z                | W   | 0.595      | 0.624        | 0.273 (0.101)    | 0.650 (0.242)    | 1 (0.595) |     7.62 | F1KU, flameZ, NEOFRAG, niko, regali  |
|           33 |     1631 | 2023-05-29 | G2                | L   | 0.588      | -            | -                | -                | -         |    -0.21 | F1KU, flameZ, NEOFRAG, niko, regali  |
|           32 |     1656 | 2023-05-29 | FURIA             | W   | 0.587      | 0.624        | 0.082 (0.030)    | 0.107 (0.039)    | 1 (0.587) |     5.46 | F1KU, flameZ, NEOFRAG, niko, regali  |
|           31 |     1805 | 2023-05-25 | Astralis          | L   | 0.559      | -            | -                | -                | -         |    -0.74 | F1KU, flameZ, NEOFRAG, niko, regali  |
|           30 |     1848 | 2023-05-24 | EYEBALLERS        | W   | 0.552      | 0.435        | -                | 0.609 (0.146)    | 0 (0.000) |     3.81 | F1KU, flameZ, NEOFRAG, niko, regali  |
|           29 |     1892 | 2023-05-23 | los kogutos       | W   | 0.545      | 0.435        | 0.038 (0.009)    | 0.950 (0.225)    | -         |     3.25 | F1KU, flameZ, NEOFRAG, niko, regali  |
|           28 |     2075 | 2023-05-10 | GamerLegion       | L   | 0.459      | -            | -                | -                | -         |    -1.43 | degster, F1KU, flameZ, NEOFRAG, niko |
|           27 |     2092 | 2023-05-09 | Ninjas in Pyjamas | L   | 0.452      | -            | -                | -                | -         |    -2.57 | degster, F1KU, flameZ, NEOFRAG, niko |
|           26 |     2099 | 2023-05-08 | MOUZ              | W   | 0.448      | 0.143        | 0.292 (0.019)    | 0.533 (0.034)    | 1 (0.448) |    11.65 | degster, F1KU, flameZ, NEOFRAG, niko |
|           25 |     2111 | 2023-05-08 | ENCE              | L   | 0.446      | -            | -                | -                | -         |    -0.16 | degster, F1KU, flameZ, NEOFRAG, niko |
|           24 |     2207 | 2023-05-02 | Cloud9            | L   | 0.408      | -            | -                | -                | -         |    -0.80 | degster, F1KU, flameZ, NEOFRAG, niko |
|           23 |     2236 | 2023-05-01 | SAW               | W   | 0.399      | 0.677        | 0.240 (0.065)    | 0.968 (0.261)    | -         |     8.05 | degster, F1KU, flameZ, NEOFRAG, niko |
|           22 |     2257 | 2023-04-30 | Eternal Fire      | W   | 0.392      | 0.677        | 0.046 (0.012)    | 0.749 (0.199)    | -         |     3.95 | degster, F1KU, flameZ, NEOFRAG, niko |
|           21 |     2294 | 2023-04-28 | Apeks             | L   | 0.381      | -            | -                | -                | -         |    -2.66 | degster, F1KU, flameZ, NEOFRAG, niko |
|           20 |     2354 | 2023-04-26 | GODSENT           | W   | 0.367      | -            | -                | -                | -         |     1.26 | degster, F1KU, flameZ, NEOFRAG, niko |
|           19 |     2475 | 2023-04-19 | Vitality          | L   | 0.322      | -            | -                | -                | -         |    -0.09 | degster, F1KU, flameZ, NEOFRAG, niko |
|           18 |     2486 | 2023-04-19 | fnatic            | W   | 0.319      | 0.624        | 0.175 (0.035)    | 0.347 (0.069)    | 1 (0.319) |     7.09 | degster, F1KU, flameZ, NEOFRAG, niko |
|           17 |     2496 | 2023-04-18 | Cloud9            | L   | 0.315      | -            | -                | -                | -         |    -0.57 | degster, F1KU, flameZ, NEOFRAG, niko |
|           16 |     2522 | 2023-04-17 | Vitality          | W   | 0.307      | 0.624        | 1.000 (0.191)    | 0.680 (0.130)    | 1 (0.307) |     9.59 | degster, F1KU, flameZ, NEOFRAG, niko |
|           15 |     2737 | 2023-04-09 | Falcons           | W   | 0.252      | -            | -                | -                | 1 (0.252) |     0.97 | degster, F1KU, flameZ, NEOFRAG, niko |
|           14 |     2760 | 2023-04-08 | 1WIN              | W   | 0.245      | 0.143        | 0.298 (0.010)    | -                | 1 (0.245) |     5.19 | degster, F1KU, flameZ, NEOFRAG, niko |
|           13 |     2780 | 2023-04-07 | SAW               | W   | 0.239      | 0.143        | 0.240 (0.008)    | 0.968 (0.033)    | 1 (0.239) |     4.94 | degster, F1KU, flameZ, NEOFRAG, niko |
|           12 |     2806 | 2023-04-06 | GamerLegion       | L   | 0.234      | -            | -                | -                | -         |    -0.49 | degster, F1KU, flameZ, NEOFRAG, niko |
|           11 |     2816 | 2023-04-06 | FaZe              | L   | 0.232      | -            | -                | -                | -         |    -0.36 | degster, F1KU, flameZ, NEOFRAG, niko |
|           10 |     2843 | 2023-04-03 | Cloud9            | L   | 0.213      | -            | -                | -                | -         |    -0.33 | degster, F1KU, flameZ, NEOFRAG, niko |
|            9 |     2846 | 2023-04-03 | fnatic            | W   | 0.212      | -            | -                | -                | -         |     4.94 | degster, F1KU, flameZ, NEOFRAG, niko |
|            8 |     2861 | 2023-04-02 | GODSENT           | W   | 0.206      | -            | -                | -                | -         |     0.83 | degster, F1KU, flameZ, NEOFRAG, niko |
|            7 |     2881 | 2023-04-01 | sYnck             | W   | 0.199      | -            | -                | -                | -         |     1.43 | degster, F1KU, flameZ, NEOFRAG, niko |
|            6 |     2900 | 2023-03-31 | Ninjas in Pyjamas | L   | 0.192      | -            | -                | -                | -         |    -0.84 | degster, F1KU, flameZ, NEOFRAG, niko |
|            5 |     2950 | 2023-03-29 | Ninjas in Pyjamas | L   | 0.180      | -            | -                | -                | -         |    -0.79 | F1KU, flameZ, NEOFRAG, niko, smooya  |
|            4 |     3505 | 2023-03-11 | Ninjas in Pyjamas | L   | 0.061      | -            | -                | -                | -         |    -0.27 | degster, F1KU, flameZ, NEOFRAG, niko |
|            3 |     3547 | 2023-03-10 | paiN              | L   | 0.054      | -            | -                | -                | -         |    -1.12 | degster, F1KU, flameZ, NEOFRAG, niko |
|            2 |     3586 | 2023-03-09 | Vitality          | L   | 0.047      | -            | -                | -                | -         |    -0.01 | degster, F1KU, flameZ, NEOFRAG, niko |
|            1 |     3607 | 2023-03-08 | Fake Natty        | W   | 0.041      | -            | -                | -                | 1 (0.041) |     0.28 | degster, F1KU, flameZ, NEOFRAG, niko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,145.05)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-04 |      0.627 | $6,000.00      | $3,764.08       |
| 2023-05-25 |      0.561 | $5,000.00      | $2,804.02       |
| 2023-05-11 |      0.467 | $10,000.00     | $4,667.89       |
| 2023-05-03 |      0.414 | $35,000.00     | $14,503.75      |
| 2023-04-23 |      0.347 | $6,000.00      | $2,083.31       |
| 2023-04-02 |      0.208 | $5,000.00      | $1,038.02       |
| 2023-03-26 |      0.160 | $8,000.00      | $1,283.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
