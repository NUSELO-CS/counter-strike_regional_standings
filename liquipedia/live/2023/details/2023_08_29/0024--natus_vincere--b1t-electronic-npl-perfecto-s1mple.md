### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: b1t, electroNic, npl, Perfecto, s1mple<br />
Global Rank: [24](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [24]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  1138.3<br />
<br />
Final Rank Value (1138.3) = Starting Rank Value (1078.7) + Head To Head Adjustments (59.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.494[<sup>1</sup>](#table2)
- Bounty Collected: 0.473[<sup>2</sup>](#table1)
- Opponent Network: 0.107[<sup>2</sup>](#table1)
- LAN Wins: 0.330[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.146[<sup>2</sup>](#table1)

The average of these factors is 0.351<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1078.7
- 400 + ( ( 0.351 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 1078.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     2003 | 2023-05-16 | FaZe              | L   | 0.499      | -            | -                | -                | -         |    -1.15 | b1t, electroNic, npl, Perfecto, s1mple |
|           19 |     2014 | 2023-05-15 | Monte             | L   | 0.492      | -            | -                | -                | -         |    -2.33 | b1t, electroNic, npl, Perfecto, s1mple |
|           18 |     2028 | 2023-05-14 | Ninjas in Pyjamas | W   | 0.485      | 1.000        | 0.194 (0.094)    | 0.670 (0.325)    | 1 (0.485) |    12.52 | b1t, electroNic, npl, Perfecto, s1mple |
|           17 |     2038 | 2023-05-13 | Liquid            | L   | 0.480      | -            | -                | -                | -         |    -3.58 | b1t, electroNic, npl, Perfecto, s1mple |
|           16 |     2048 | 2023-05-13 | GamerLegion       | W   | 0.478      | 1.000        | 0.556 (0.266)    | 0.332 (0.159)    | 1 (0.478) |    13.69 | b1t, electroNic, npl, Perfecto, s1mple |
|           15 |     2426 | 2023-04-22 | Heroic            | L   | 0.341      | -            | -                | -                | -         |    -0.17 | b1t, electroNic, npl, Perfecto, s1mple |
|           14 |     2480 | 2023-04-19 | BIG               | W   | 0.321      | 0.624        | 0.080 (0.016)    | 0.312 (0.062)    | 1 (0.321) |     3.39 | b1t, electroNic, npl, Perfecto, s1mple |
|           13 |     2515 | 2023-04-17 | Ninjas in Pyjamas | W   | 0.308      | 0.624        | 0.194 (0.037)    | 0.670 (0.129)    | 1 (0.308) |     8.19 | b1t, electroNic, npl, Perfecto, s1mple |
|           12 |     2527 | 2023-04-17 | TheMongolz        | W   | 0.306      | 0.624        | 0.066 (0.013)    | 0.439 (0.084)    | 1 (0.306) |     3.44 | b1t, electroNic, npl, Perfecto, s1mple |
|           11 |     2776 | 2023-04-07 | FaZe              | W   | 0.240      | 0.143        | 0.549 (0.019)    | -                | 1 (0.240) |     7.19 | b1t, electroNic, npl, Perfecto, s1mple |
|           10 |     2813 | 2023-04-06 | Falcons           | W   | 0.233      | -            | -                | -                | 1 (0.233) |     0.91 | b1t, electroNic, npl, Perfecto, s1mple |
|            9 |     2823 | 2023-04-06 | Into the Breach   | W   | 0.232      | -            | -                | -                | 1 (0.232) |     4.84 | b1t, electroNic, npl, Perfecto, s1mple |
|            8 |     3055 | 2023-03-25 | FaZe              | L   | 0.155      | -            | -                | -                | -         |    -0.24 | b1t, electroNic, npl, Perfecto, s1mple |
|            7 |     3088 | 2023-03-24 | Heroic            | W   | 0.148      | 0.934        | 1.000 (0.138)    | 0.632 (0.087)    | 1 (0.148) |     4.59 | b1t, electroNic, npl, Perfecto, s1mple |
|            6 |     3172 | 2023-03-22 | Virtus.pro        | W   | 0.133      | 0.934        | 1.000 (0.124)    | 0.553 (0.069)    | 1 (0.133) |     4.12 | b1t, electroNic, npl, Perfecto, s1mple |
|            5 |     3203 | 2023-03-21 | Fake Natty        | W   | 0.128      | 0.934        | 0.058 (0.007)    | 0.541 (0.065)    | -         |     0.93 | b1t, electroNic, npl, Perfecto, s1mple |
|            4 |     3289 | 2023-03-18 | Spirit            | W   | 0.107      | -            | -                | -                | -         |     0.39 | b1t, electroNic, npl, Perfecto, s1mple |
|            3 |     3325 | 2023-03-17 | 5yclone           | W   | 0.101      | 0.934        | -                | 0.362 (0.034)    | -         |     0.72 | b1t, electroNic, npl, Perfecto, s1mple |
|            2 |     3357 | 2023-03-16 | Astralis          | W   | 0.095      | 0.934        | 0.582 (0.051)    | 0.660 (0.058)    | -         |     2.91 | b1t, electroNic, npl, Perfecto, s1mple |
|            1 |     3409 | 2023-03-15 | FORZE             | L   | 0.087      | -            | -                | -                | -         |    -0.80 | b1t, electroNic, npl, Perfecto, s1mple |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,634.58)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-05-21 |      0.533 | $20,000.00     | $10,665.33      |
| 2023-04-23 |      0.347 | $20,000.00     | $6,944.37       |
| 2023-03-26 |      0.160 | $50,000.00     | $8,024.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
