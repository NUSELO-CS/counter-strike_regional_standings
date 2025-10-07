### Roster Details<br />
Team Name: Strife<br />
Roster: CLASIA, d4rty, Infinite, motm, stamina<br />
Global Rank: [129](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [34]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  754.6<br />
<br />
Final Rank Value (754.6) = Starting Rank Value (711.3) + Head To Head Adjustments (43.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.226[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.3
- 400 + ( ( 0.161 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 711.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     2063 | 2023-05-10 | Take Flyte       | W   | 0.463      | 0.435        | 0.002 (0.000)    | 0.089 (0.018)    | 0 (0.000) |     5.12 | CLASIA, d4rty, Infinite, motm, stamina |
|           18 |     2080 | 2023-05-09 | Unjustified      | W   | 0.456      | 0.435        | 0.001 (0.000)    | 0.349 (0.069)    | 0 (0.000) |     5.17 | aris, CLASIA, d4rty, Infinite, stamina |
|           17 |     2084 | 2023-05-09 | MIBR             | L   | 0.455      | -            | -                | -                | -         |    -2.99 | aris, CLASIA, d4rty, Infinite, stamina |
|           16 |     2120 | 2023-05-07 | Party Astronauts | L   | 0.443      | -            | -                | -                | -         |    -5.88 | CLASIA, d4rty, Infinite, motm, stamina |
|           15 |     2123 | 2023-05-07 | MIBR             | W   | 0.441      | 0.303        | 0.150 (0.020)    | 0.596 (0.080)    | 0 (0.000) |    11.09 | CLASIA, d4rty, Infinite, motm, stamina |
|           14 |     2139 | 2023-05-06 | Evil Geniuses    | W   | 0.435      | 0.303        | 0.077 (0.010)    | 0.580 (0.076)    | 0 (0.000) |     9.35 | CLASIA, d4rty, Infinite, motm, stamina |
|           13 |     2146 | 2023-05-06 | Mach 5           | W   | 0.435      | 0.303        | 0.000 (0.000)    | -                | 0 (0.000) |     1.85 | CLASIA, d4rty, Infinite, motm, stamina |
|           12 |     2205 | 2023-05-02 | Limitless        | W   | 0.409      | 0.435        | -                | 0.015 (0.003)    | 0 (0.000) |     2.43 | aris, CLASIA, d4rty, Infinite, stamina |
|           11 |     2244 | 2023-04-30 | ATK              | L   | 0.395      | -            | -                | -                | -         |    -5.47 | CLASIA, d4rty, Infinite, motm, stamina |
|           10 |     2262 | 2023-04-29 | Wildcard         | W   | 0.389      | 0.303        | 0.128 (0.015)    | 0.804 (0.095)    | 0 (0.000) |     8.35 | CLASIA, d4rty, Infinite, motm, stamina |
|            9 |     2344 | 2023-04-26 | ATK              | W   | 0.369      | 0.435        | 0.033 (0.005)    | 0.130 (0.021)    | 0 (0.000) |     6.77 | aris, CLASIA, d4rty, Infinite, stamina |
|            8 |     2535 | 2023-04-16 | ATK              | L   | 0.302      | -            | -                | -                | -         |    -4.06 | CLASIA, d4rty, Infinite, motm, stamina |
|            7 |     2538 | 2023-04-16 | paiN             | W   | 0.302      | 0.303        | 0.085 (0.008)    | 0.404 (0.037)    | 0 (0.000) |     7.77 | CLASIA, d4rty, Infinite, motm, stamina |
|            6 |     2548 | 2023-04-15 | Party Astronauts | W   | 0.296      | 0.303        | 0.017 (0.001)    | 0.420 (0.038)    | 0 (0.000) |     5.78 | CLASIA, d4rty, Infinite, motm, stamina |
|            5 |     2553 | 2023-04-15 | Cartel terraza   | W   | 0.295      | -            | -                | -                | -         |     1.41 | CLASIA, d4rty, Infinite, motm, stamina |
|            4 |     2684 | 2023-04-11 | FLUFFY AIMERS    | L   | 0.269      | -            | -                | -                | -         |    -4.15 | aris, CLASIA, d4rty, Infinite, stamina |
|            3 |     2901 | 2023-03-30 | ATK              | L   | 0.190      | -            | -                | -                | -         |    -2.60 | aris, CLASIA, d4rty, Infinite, stamina |
|            2 |     2907 | 2023-03-30 | Kari             | W   | 0.188      | 0.303        | 0.005 (0.000)    | 0.129 (0.007)    | -         |     2.52 | aris, CLASIA, d4rty, Infinite, stamina |
|            1 |     2933 | 2023-03-29 | GGPR Remastered  | W   | 0.183      | -            | -                | -                | -         |     0.86 | aris, CLASIA, d4rty, Infinite, stamina |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($934.81)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-05-07 |      0.443 | $1,000.00      | $442.61         |
| 2023-04-16 |      0.302 | $1,000.00      | $302.49         |
| 2023-03-30 |      0.190 | $1,000.00      | $189.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
