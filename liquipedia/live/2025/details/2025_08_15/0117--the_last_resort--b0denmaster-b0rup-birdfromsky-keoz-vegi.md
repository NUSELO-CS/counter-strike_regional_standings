### Roster Details<br />
Team Name: The Last Resort<br />
Roster: b0denmaster, b0RUP, birdfromsky, Keoz, Vegi<br />
Global Rank: [117](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [77]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  751.4<br />
<br />
Final Rank Value (751.4) = Starting Rank Value (755.8) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.219[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.209[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.118[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.8
- 400 + ( ( 0.182 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 755.8


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
|           20 |      353 | 2025-07-19 | NXT                    | L   | 1.000      | -            | -                | -                | -         |   -14.37 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           19 |      358 | 2025-07-19 | AimerLegion            | W   | 1.000      | 0.300        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.60 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           18 |      381 | 2025-07-18 | Iberian Soul           | L   | 1.000      | -            | -                | -                | -         |    -1.54 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           17 |      861 | 2025-06-14 | TEAM NEXT LEVEL        | L   | 0.778      | -            | -                | -                | -         |    -2.10 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           16 |      880 | 2025-06-14 | Eternal Fire           | W   | 0.776      | 0.360        | 0.002 (0.000)    | 0.416 (0.116)    | 1 (0.776) |    15.37 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           15 |      890 | 2025-06-13 | Fnatic                 | L   | 0.772      | -            | -                | -                | -         |    -1.29 | b0denmaster, b0RUP, birdfromsky, Keoz, Vegi |
|           14 |     2287 | 2025-04-05 | BC.Game Esports        | L   | 0.310      | -            | -                | -                | -         |    -3.59 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           13 |     2483 | 2025-03-30 | 9INE                   | L   | 0.270      | -            | -                | -                | -         |    -0.98 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|           12 |     2535 | 2025-03-29 | NOVAQ                  | L   | 0.264      | -            | -                | -                | -         |    -6.01 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           11 |     2581 | 2025-03-28 | 9INE                   | L   | 0.259      | -            | -                | -                | -         |    -0.97 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|           10 |     2663 | 2025-03-27 | Dynamo Eclot           | W   | 0.251      | 0.769        | 0.083 (0.016)    | 0.597 (0.115)    | 0 (0.000) |     5.91 | b0RUP, birdfromsky, CRUC1AL, Keoz, Vegi     |
|            9 |     2810 | 2025-03-22 | Zero Tenacity          | W   | 0.218      | 0.362        | 0.012 (0.001)    | 0.676 (0.053)    | 0 (0.000) |     4.79 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            8 |     2823 | 2025-03-21 | Zero Tenacity          | L   | 0.212      | -            | -                | -                | -         |    -2.03 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            7 |     2879 | 2025-03-19 | Inputprayers           | W   | 0.198      | 0.396        | 0.000 (0.000)    | 0.041 (0.003)    | 0 (0.000) |     1.27 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            6 |     2941 | 2025-03-16 | Betclic Apogee Esports | L   | 0.178      | -            | -                | -                | -         |    -0.76 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            5 |     2949 | 2025-03-16 | Monte                  | L   | 0.177      | -            | -                | -                | -         |    -3.02 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            4 |     3013 | 2025-03-12 | 9INE                   | L   | 0.151      | -            | -                | -                | -         |    -0.56 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            3 |     3205 | 2025-03-08 | Sashi Esport           | W   | 0.123      | 0.362        | 0.011 (0.001)    | 1.000 (0.045)    | 0 (0.000) |     3.08 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            2 |     3567 | 2025-02-25 | Fire Flux Esports      | L   | 0.050      | -            | -                | -                | -         |    -0.70 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |
|            1 |     3586 | 2025-02-24 | Sangal Esports         | L   | 0.045      | -            | -                | -                | -         |    -0.43 | birdfromsky, Keoz, REDSTAR, smooya, Vegi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100.58)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      1.000 | $100.58        | $100.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
