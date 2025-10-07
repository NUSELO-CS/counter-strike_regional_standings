### Roster Details<br />
Team Name: FengDa Gaming<br />
Roster: 1337x9, 3gl, Biuckmt, chengking, p5p<br />
Global Rank: [133](../../standings_global_2025_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_05.md)<br />
Regional Rank: [17]( ../../standings_asia_2025_10_05.md)<br />
<br />
Final Rank Value:  730.2<br />
<br />
Final Rank Value (730.2) = Starting Rank Value (729.3) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.189[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.083[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.3
- 400 + ( ( 0.168 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 729.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1069 | 2025-08-28 | Kaleido Gaming            | L   | 0.936      | -            | -                | -                | -         |    -4.75 | 1337x9, 3gl, Biuckmt, chengking, p5p |
|            6 |     1124 | 2025-08-26 | BORING PLAYER             | W   | 0.923      | 0.143        | 0.000 (0.000)    | 0.077 (0.010)    | 1 (0.923) |     9.77 | 1337x9, 3gl, Biuckmt, chengking, p5p |
|            5 |     1128 | 2025-08-25 | Magic Cape                | W   | 0.921      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.921) |     4.05 | 1337x9, 3gl, Biuckmt, chengking, p5p |
|            4 |     1760 | 2025-07-31 | The Huns Esports          | L   | 0.755      | -            | -                | -                | -         |    -1.01 | 1337x9, 3gl, Biuckmt, chengking, p5p |
|            3 |     2237 | 2025-07-05 | Last Bullet               | L   | 0.577      | -            | -                | -                | -         |    -8.96 | 1337x9, 3gl, Biuckmt, Marek, p5p     |
|            2 |     3378 | 2025-04-30 | Rare Atom                 | L   | 0.137      | -            | -                | -                | -         |    -0.41 | 1337x9, 3gl, bea2, chengking, p5p    |
|            1 |     3405 | 2025-04-29 | Just Swing (Chinese team) | W   | 0.131      | 0.416        | 0.010 (0.001)    | 0.126 (0.007)    | 0 (0.000) |     2.25 | 1337x9, 3gl, bea2, chengking, p5p    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,449.64)
- Divide that value by the 5th highest value among all rosters ($378,640.21)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-28 |      0.936 | $698.91        | $654.44         |
| 2025-07-06 |      0.583 | $1,000.00      | $583.06         |
| 2025-05-04 |      0.163 | $1,300.00      | $212.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
