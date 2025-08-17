### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: Gnøffe, n1Xen, PR1mE, sL1m3, Vster<br />
Global Rank: [245](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [123]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  439.3<br />
<br />
Final Rank Value (439.3) = Starting Rank Value (436.2) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.019<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 436.2
- 400 + ( ( 0.019 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 436.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1189 | 2025-05-22 | Johnny Speeds    | L   | 0.625      | -            | -                | -                | -         |    -0.96 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            6 |     1209 | 2025-05-21 | En av de lette   | W   | 0.618      | 0.500        | 0.000 (0.000)    | 0.040 (0.012)    | 1 (0.618) |     9.10 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            5 |     1245 | 2025-05-20 | ENCE Academy     | L   | 0.610      | -            | -                | -                | -         |    -2.26 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            4 |     1831 | 2025-04-26 | HEROIC Academy   | L   | 0.452      | -            | -                | -                | -         |    -2.41 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            3 |     3109 | 2025-03-09 | LEON Esports     | L   | 0.131      | -            | -                | -                | -         |    -1.83 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            2 |     3159 | 2025-03-08 | Inputprayers     | W   | 0.126      | 0.372        | 0.000 (0.000)    | 0.041 (0.002)    | 0 (0.000) |     2.41 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |
|            1 |     3375 | 2025-03-04 | Ex-Heimo Esports | L   | 0.098      | -            | -                | -                | -         |    -0.98 | Gnøffe, n1Xen, PR1mE, sL1m3, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
