### Roster Details<br />
Team Name: Supernova Comets<br />
Roster: empathy, Fawx, raven, Serendipity, Stx<br />
Global Rank: [105](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_03.md)<br />
Regional Rank: [24]( ../../standings_americas_2025_08_03.md)<br />
<br />
Final Rank Value:  781.3<br />
<br />
Final Rank Value (781.3) = Starting Rank Value (895.5) + Head To Head Adjustments (-114.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.470[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.255[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 895.5
- 400 + ( ( 0.262 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 895.5


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
|           27 |       20 | 2025-08-01 | M80              | L   | 1.000      | -            | -                | -                | -         |    -2.67 | empathy, Fawx, raven, Serendipity, Stx |
|           26 |       85 | 2025-07-26 | Getting Info     | L   | 1.000      | -            | -                | -                | -         |   -12.21 | empathy, Fawx, raven, Serendipity, Stx |
|           25 |       98 | 2025-07-25 | Team Aether      | L   | 1.000      | -            | -                | -                | -         |   -24.89 | empathy, Fawx, raven, Serendipity, Stx |
|           24 |      352 | 2025-07-11 | Marca Registrada | L   | 1.000      | -            | -                | -                | -         |   -22.55 | empathy, Fawx, raven, Serendipity, Stx |
|           23 |      960 | 2025-05-25 | FURIA Female     | L   | 0.725      | -            | -                | -                | -         |    -7.47 | empathy, Fawx, raven, Serendipity, Stx |
|           22 |      974 | 2025-05-24 | NIP Impact       | W   | 0.718      | 0.624        | 0.044 (0.020)    | 0.123 (0.055)    | 1 (0.718) |    10.63 | empathy, Fawx, raven, Serendipity, Stx |
|           21 |      980 | 2025-05-23 | Zerance          | W   | 0.714      | 0.624        | 0.028 (0.012)    | 0.100 (0.044)    | 1 (0.714) |     8.81 | empathy, Fawx, raven, Serendipity, Stx |
|           20 |      998 | 2025-05-22 | FURIA Female     | L   | 0.707      | -            | -                | -                | -         |    -7.31 | empathy, Fawx, raven, Serendipity, Stx |
|           19 |     1001 | 2025-05-22 | Zerance          | W   | 0.706      | 0.624        | 0.028 (0.012)    | 0.100 (0.044)    | 1 (0.706) |     8.78 | empathy, Fawx, raven, Serendipity, Stx |
|           18 |     1260 | 2025-05-11 | MIGHT            | L   | 0.633      | -            | -                | -                | -         |   -15.22 | empathy, Fawx, raven, Serendipity, Stx |
|           17 |     1335 | 2025-05-08 | Legacy           | L   | 0.613      | -            | -                | -                | -         |    -1.29 | empathy, Fawx, raven, Serendipity, Stx |
|           16 |     1639 | 2025-04-26 | Game Hunters     | L   | 0.535      | -            | -                | -                | -         |   -10.41 | empathy, Fawx, raven, Serendipity, Stx |
|           15 |     1769 | 2025-04-18 | BLUEJAYS         | L   | 0.481      | -            | -                | -                | -         |    -7.56 | empathy, Fawx, raven, Serendipity, Stx |
|           14 |     1899 | 2025-04-13 | Team Aether      | L   | 0.448      | -            | -                | -                | -         |   -12.01 | empathy, Fawx, raven, Serendipity, Stx |
|           13 |     1930 | 2025-04-11 | Black mold       | W   | 0.434      | 0.533        | 0.001 (0.000)    | 0.029 (0.007)    | 0 (0.000) |     2.46 | empathy, Fawx, raven, Serendipity, Stx |
|           12 |     1954 | 2025-04-10 | Super Shy        | W   | 0.427      | -            | -                | -                | 0 (0.000) |     0.88 | empathy, Fawx, raven, Serendipity, Stx |
|           11 |     2025 | 2025-04-08 | Arrival Seven    | L   | 0.413      | -            | -                | -                | -         |    -8.78 | empathy, Fawx, raven, Serendipity, Stx |
|           10 |     2123 | 2025-04-03 | Girl kissers     | W   | 0.380      | 0.533        | 0.001 (0.000)    | 0.095 (0.019)    | 0 (0.000) |     2.28 | empathy, Fawx, raven, Serendipity, Stx |
|            9 |     2385 | 2025-03-28 | LL               | L   | 0.340      | -            | -                | -                | -         |    -9.46 | empathy, Fawx, raven, Serendipity, Stx |
|            8 |     2440 | 2025-03-27 | Hooligangsters   | L   | 0.334      | -            | -                | -                | -         |    -9.33 | empathy, Fawx, raven, Serendipity, Stx |
|            7 |     2446 | 2025-03-27 | Lumen            | W   | 0.334      | 0.533        | 0.002 (0.000)    | 0.076 (0.013)    | 0 (0.000) |     1.94 | empathy, Fawx, raven, Serendipity, Stx |
|            6 |     2649 | 2025-03-20 | MEGA JUNERS      | W   | 0.287      | 0.533        | 0.001 (0.000)    | 0.019 (0.003)    | 0 (0.000) |     1.41 | empathy, Fawx, raven, Serendipity, Stx |
|            5 |     2814 | 2025-03-12 | Ghost Gaming     | W   | 0.234      | 0.533        | 0.001 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     1.27 | empathy, Fawx, raven, Serendipity, Stx |
|            4 |     3108 | 2025-03-06 | FlyQuest RED     | W   | 0.194      | 0.533        | 0.028 (0.003)    | 0.124 (0.013)    | -         |     1.83 | empathy, Fawx, raven, Serendipity, Stx |
|            3 |     3246 | 2025-03-01 | LAG Gaming       | L   | 0.160      | -            | -                | -                | -         |    -4.10 | empathy, Fawx, raven, Serendipity, Stx |
|            2 |     3253 | 2025-03-01 | F5 Esports       | W   | 0.160      | -            | -                | -                | 1 (0.160) |     0.29 | empathy, Fawx, raven, Serendipity, Stx |
|            1 |     3323 | 2025-02-26 | Nyx Empyre       | W   | 0.141      | 0.533        | 0.001 (0.000)    | 0.000 (0.000)    | -         |     0.48 | empathy, Fawx, raven, Serendipity, Stx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,618.75)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.725 | $45,000.00     | $32,618.75      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
