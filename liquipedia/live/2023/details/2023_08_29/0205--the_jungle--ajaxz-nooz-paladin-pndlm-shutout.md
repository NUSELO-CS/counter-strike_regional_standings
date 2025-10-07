### Roster Details<br />
Team Name: the jungle<br />
Roster: AJaxz, nooz, PALADIN, PNDLM, shutout<br />
Global Rank: [205](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2023_08_29.md)<br />
Regional Rank: [61]( ../../standings_americas_2023_08_29.md)<br />
<br />
Final Rank Value:  636.6<br />
<br />
Final Rank Value (636.6) = Starting Rank Value (658.5) + Head To Head Adjustments (-21.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.256[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.5
- 400 + ( ( 0.134 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 658.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       16 | 2023-08-27 | Complexity      | L   | 1.000      | -            | -                | -                | -         |    -2.21 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|           14 |      109 | 2023-08-24 | undefined       | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.55 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|           13 |      153 | 2023-08-22 | Zomblers        | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.74 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|           12 |      677 | 2023-07-30 | Reason          | L   | 1.000      | -            | -                | -                | -         |   -15.10 | nooz, PALADIN, PNDLM, scar, shutout  |
|           11 |      783 | 2023-07-22 | Hound           | W   | 0.948      | 0.143        | 0.000 (0.000)    | 0.192 (0.026)    | 0 (0.000) |    10.10 | nooz, PALADIN, PNDLM, scar, shutout  |
|           10 |      802 | 2023-07-21 | PNEUMA          | L   | 0.942      | -            | -                | -                | -         |   -20.15 | nooz, PALADIN, PNDLM, scar, shutout  |
|            9 |     1214 | 2023-06-11 | Unjustified     | L   | 0.676      | -            | -                | -                | -         |   -10.84 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|            8 |     1239 | 2023-06-10 | Take Flyte      | W   | 0.669      | 0.143        | 0.012 (0.001)    | 0.153 (0.015)    | 0 (0.000) |    10.22 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|            7 |     1277 | 2023-06-09 | Badass          | L   | 0.662      | -            | -                | -                | -         |    -8.54 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|            6 |     1456 | 2023-06-03 | WITHOUT WARNING | L   | 0.623      | -            | -                | -                | -         |    -8.86 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|            5 |     1482 | 2023-06-02 | No Impact       | W   | 0.616      | 0.371        | 0.003 (0.001)    | 0.029 (0.007)    | 0 (0.000) |     8.85 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|            4 |     1552 | 2023-05-31 | Rocket          | L   | 0.603      | -            | -                | -                | -         |    -8.55 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|            3 |     1926 | 2023-05-20 | paiN            | L   | 0.528      | -            | -                | -                | -         |    -2.25 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|            2 |     1939 | 2023-05-19 | Evil Geniuses   | W   | 0.523      | 0.303        | 0.012 (0.002)    | 0.095 (0.015)    | 0 (0.000) |     9.03 | AJaxz, nooz, PALADIN, PNDLM, shutout |
|            1 |     1944 | 2023-05-19 | ClayMakers      | W   | 0.522      | 0.303        | 0.000 (0.000)    | 0.048 (0.008)    | 0 (0.000) |     3.09 | AJaxz, nooz, PALADIN, PNDLM, shutout |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,311.85)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-08 |      0.656 | $2,000.00      | $1,311.85       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
