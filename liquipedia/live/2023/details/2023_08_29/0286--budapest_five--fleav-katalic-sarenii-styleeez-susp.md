### Roster Details<br />
Team Name: Budapest Five<br />
Roster: fleav, Katalic, sarenii, stYleEeZ, susp<br />
Global Rank: [286](../../standings_global_2023_08_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2023_08_29.md)<br />
Regional Rank: [171]( ../../standings_europe_2023_08_29.md)<br />
<br />
Final Rank Value:  492.2<br />
<br />
Final Rank Value (492.2) = Starting Rank Value (490.1) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 490.1
- 400 + ( ( 0.047 - 0.000 ) / ( 0.827 - 0.000 ) ) * 1600 = 490.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3064 | 2023-03-25 | Believe       | L   | 0.153      | -            | -                | -                | -         |    -2.45 | fleav, Katalic, sarenii, stYleEeZ, susp |
|            6 |     3097 | 2023-03-24 | Looking4Org   | L   | 0.147      | -            | -                | -                | -         |    -0.33 | fleav, Katalic, sarenii, stYleEeZ, susp |
|            5 |     3211 | 2023-03-21 | Boston crab   | W   | 0.127      | 0.371        | 0.005 (0.000)    | 0.038 (0.002)    | 0 (0.000) |     2.88 | fleav, Katalic, sarenii, stYleEeZ, susp |
|            4 |     3452 | 2023-03-13 | Insilio       | L   | 0.074      | -            | -                | -                | -         |    -0.58 | fleav, Katalic, sarenii, stYleEeZ, susp |
|            3 |     3484 | 2023-03-12 | Nexus         | W   | 0.067      | 0.371        | 0.000 (0.000)    | 0.373 (0.009)    | 0 (0.000) |     1.36 | fleav, Katalic, sarenii, stYleEeZ, susp |
|            2 |     3519 | 2023-03-11 | EC Brugge     | W   | 0.060      | 0.371        | 0.007 (0.000)    | 0.032 (0.001)    | 0 (0.000) |     1.34 | fleav, Katalic, sarenii, stYleEeZ, susp |
|            1 |     3637 | 2023-03-07 | Question Mark | L   | 0.034      | -            | -                | -                | -         |    -0.10 | fleav, Katalic, sarenii, stYleEeZ, susp |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($272,334.82)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
