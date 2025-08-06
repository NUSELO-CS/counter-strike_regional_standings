### Roster Details<br />
Team Name: The Last Resort<br />
Roster: b0denmaster, b0RUP, birdfromsky, Keoz, Vegi<br />
Global Rank: [118](../../standings_global_2025_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_03.md)<br />
Regional Rank: [78]( ../../standings_europe_2025_08_03.md)<br />
<br />
Final Rank Value:  749.5<br />
<br />
Final Rank Value (749.5) = Starting Rank Value (753.7) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.216[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.206[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.147[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 753.7
- 400 + ( ( 0.187 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 753.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      170 | 2025-07-19 | NXT                    | L   | 1.000      | -            | -                | -                | -         |   -14.06 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           19 |      175 | 2025-07-19 | AimerLegion            | W   | 1.000      | 0.300        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.64 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           18 |      198 | 2025-07-18 | Iberian Soul           | L   | 1.000      | -            | -                | -                | -         |    -1.93 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           17 |      678 | 2025-06-14 | TEAM NEXT LEVEL        | L   | 0.858      | -            | -                | -                | -         |    -2.26 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           16 |      697 | 2025-06-14 | Eternal Fire           | W   | 0.856      | 0.360        | 0.002 (0.001)    | 0.487 (0.150)    | 1 (0.856) |    17.18 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           15 |      707 | 2025-06-13 | Fnatic                 | L   | 0.852      | -            | -                | -                | -         |    -1.64 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           14 |     2104 | 2025-04-05 | BC.Game Esports        | L   | 0.390      | -            | -                | -                | -         |    -4.07 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           13 |     2300 | 2025-03-30 | 9INE                   | L   | 0.350      | -            | -                | -                | -         |    -1.24 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           12 |     2352 | 2025-03-29 | NOVAQ                  | L   | 0.344      | -            | -                | -                | -         |    -7.72 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           11 |     2398 | 2025-03-28 | 9INE                   | L   | 0.339      | -            | -                | -                | -         |    -1.24 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           10 |     2480 | 2025-03-27 | Dynamo Eclot           | W   | 0.331      | 0.769        | 0.081 (0.021)    | 0.734 (0.187)    | 0 (0.000) |     7.94 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|            9 |     2627 | 2025-03-22 | Zero Tenacity          | W   | 0.298      | 0.362        | 0.012 (0.001)    | 0.791 (0.085)    | 0 (0.000) |     6.40 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            8 |     2640 | 2025-03-21 | Zero Tenacity          | L   | 0.292      | -            | -                | -                | -         |    -2.96 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            7 |     2696 | 2025-03-19 | Inputprayers           | W   | 0.278      | 0.396        | 0.000 (0.000)    | 0.060 (0.007)    | 0 (0.000) |     1.83 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            6 |     2758 | 2025-03-16 | Betclic Apogee Esports | L   | 0.258      | -            | -                | -                | -         |    -1.12 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            5 |     2766 | 2025-03-16 | Monte                  | L   | 0.257      | -            | -                | -                | -         |    -4.19 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            4 |     2830 | 2025-03-12 | 9INE                   | L   | 0.231      | -            | -                | -                | -         |    -0.83 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            3 |     3022 | 2025-03-08 | Sashi Esport           | W   | 0.203      | 0.362        | 0.011 (0.001)    | 1.000 (0.074)    | 0 (0.000) |     5.01 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            2 |     3384 | 2025-02-25 | Fire Flux Esports      | L   | 0.131      | -            | -                | -                | -         |    -1.68 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            1 |     3403 | 2025-02-24 | Sangal Esports         | L   | 0.126      | -            | -                | -                | -         |    -1.20 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100.58)
- Divide that value by the 5th highest value among all rosters ($439,157.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      1.000 | $100.58        | $100.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
