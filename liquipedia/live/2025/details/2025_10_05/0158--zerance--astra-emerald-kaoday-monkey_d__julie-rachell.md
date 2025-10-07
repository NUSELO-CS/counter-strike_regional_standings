### Roster Details<br />
Team Name: Zerance<br />
Roster: ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL<br />
Global Rank: [158](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_05.md)<br />
Regional Rank: [96]( ../../standings_europe_2025_10_05.md)<br />
<br />
Final Rank Value:  683.3<br />
<br />
Final Rank Value (683.3) = Starting Rank Value (684.8) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.349[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.013[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.8
- 400 + ( ( 0.146 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 684.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2784 | 2025-05-23 | Shimmer      | L   | 0.294      | -            | -                | -                | -         |    -2.88 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            4 |     2788 | 2025-05-23 | DMS          | W   | 0.292      | 0.624        | 0.006 (0.001)    | 0.001 (0.000)    | 1 (0.292) |     3.71 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            3 |     2806 | 2025-05-22 | Shimmer      | L   | 0.286      | -            | -                | -                | -         |    -2.77 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            2 |     3737 | 2025-04-12 | Eco Warriors | W   | 0.019      | 0.536        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.21 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |
|            1 |     3754 | 2025-04-11 | DMS          | W   | 0.012      | 0.536        | 0.006 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.15 | ASTRA, Emerald, Kaoday, Monkey D. Julie, RacheLL |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,182.64)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.305 | $17,000.00     | $5,182.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
