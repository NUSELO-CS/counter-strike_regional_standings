### Roster Details<br />
Team Name: KZG<br />
Roster: alecc, dearlucid, dpr, Mingovi, vinhy<br />
Global Rank: [137](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_08_05.md)<br />
Regional Rank: [15]( ../../standings_asia_2025_08_05.md)<br />
<br />
Final Rank Value:  678.1<br />
<br />
Final Rank Value (678.1) = Starting Rank Value (652.6) + Head To Head Adjustments (25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.204[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.6
- 400 + ( ( 0.133 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 652.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      269 | 2025-07-17 | SemperFi Esports         | L   | 1.000      | -            | -                | -                | -         |   -10.37 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            5 |      272 | 2025-07-16 | Rooster                  | L   | 1.000      | -            | -                | -                | -         |   -13.15 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            4 |      320 | 2025-07-15 | Ground Zero Gaming       | W   | 1.000      | 0.314        | 0.005 (0.001)    | 0.208 (0.065)    | 0 (0.000) |    14.68 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            3 |      362 | 2025-07-13 | SemperFi Esports         | W   | 1.000      | 0.314        | 0.012 (0.004)    | 0.446 (0.140)    | 0 (0.000) |    20.93 | alecc, dearlucid, dpr, Mingovi, vinhy |
|            2 |      418 | 2025-07-11 | Underground Esports Club | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.072 (0.023)    | 0 (0.000) |     7.75 | alecc, Brh2203, dpr, Mingovi, vinhy   |
|            1 |      439 | 2025-07-10 | DOG                      | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.69 | alecc, dearlucid, dpr, Mingovi, vinhy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($976.16)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-17 |      1.000 | $976.16        | $976.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
