### Roster Details<br />
Team Name: Outfit 49<br />
Roster: bezymecc, H0NeST, KmZ, sava9e, zeep<br />
Global Rank: [208](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [119]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  549.5<br />
<br />
Final Rank Value (549.5) = Starting Rank Value (509.7) + Head To Head Adjustments (39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.111[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.7
- 400 + ( ( 0.056 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 509.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      621 | 2025-09-12 | Team Aether          | L   | 1.000      | -            | -                | -                | -         |   -10.77 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            5 |      660 | 2025-09-11 | Marsborne            | L   | 1.000      | -            | -                | -                | -         |    -3.03 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            4 |      746 | 2025-09-09 | Chicken Coop Esports | W   | 1.000      | 0.363        | 0.001 (0.000)    | 0.281 (0.102)    | 0 (0.000) |    22.90 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            3 |      796 | 2025-09-08 | Team Aether          | W   | 1.000      | 0.363        | 0.003 (0.001)    | 0.299 (0.108)    | 0 (0.000) |    21.16 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            2 |     2129 | 2025-07-11 | M80                  | L   | 0.620      | -            | -                | -                | -         |    -0.40 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |
|            1 |     2139 | 2025-07-11 | Mythic               | W   | 0.618      | 0.143        | 0.000 (0.000)    | 0.078 (0.007)    | 0 (0.000) |     9.95 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
