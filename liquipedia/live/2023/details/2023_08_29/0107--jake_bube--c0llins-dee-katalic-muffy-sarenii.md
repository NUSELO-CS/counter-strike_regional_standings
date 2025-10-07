### Roster Details<br />
Team Name: Jake Bube<br />
Roster: c0llins, dEE, Katalic, MUFFY, sarenii<br />
Global Rank: [107](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [76]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  796.0<br />
<br />
Final Rank Value (796.0) = Starting Rank Value (786.0) + Head To Head Adjustments (10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.158[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.200<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 786.0
- 400 + ( ( 0.200 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 786.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1147 | 2023-06-17 | Velež Mostar  | W   | 0.713      | 0.276        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.713) |     4.16 | c0llins, dEE, Katalic, MUFFY, sarenii |
|            5 |     1254 | 2023-06-10 | Zero Tenacity | W   | 0.666      | 0.338        | 0.037 (0.008)    | 0.915 (0.206)    | 1 (0.666) |    11.94 | andr1x, c0llins, dEE, DiMKE, sarenii  |
|            4 |     1420 | 2023-06-05 | iDestructive  | W   | 0.633      | 0.299        | 0.000 (0.000)    | 0.030 (0.006)    | 0 (0.000) |     2.23 | andr1x, c0llins, dEE, DiMKE, sarenii  |
|            3 |     1433 | 2023-06-04 | Zero Tenacity | L   | 0.628      | -            | -                | -                | -         |    -8.20 | andr1x, c0llins, dEE, DiMKE, sarenii  |
|            2 |     1497 | 2023-06-02 | Sangrija      | W   | 0.614      | 0.299        | 0.000 (0.000)    | 0.030 (0.006)    | 0 (0.000) |     2.01 | andr1x, c0llins, dEE, DiMKE, sarenii  |
|            1 |     1636 | 2023-05-29 | ECLOT         | L   | 0.588      | -            | -                | -                | -         |    -2.12 | dEE, fleav, Katalic, sarenii, susp    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,563.59)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2023-06-17 |      0.713 | $1,612.00      | $1,149.28       |
| 2023-06-10 |      0.666 | $6,624.00      | $4,414.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
