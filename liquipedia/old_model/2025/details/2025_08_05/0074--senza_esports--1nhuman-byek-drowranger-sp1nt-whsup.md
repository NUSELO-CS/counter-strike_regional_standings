### Roster Details<br />
Team Name: SENZA Esports<br />
Roster: 1nhuman, byek, drowranger, SP1NT, whsup<br />
Global Rank: [74](../../standings_global_2025_08_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_05.md)<br />
Regional Rank: [52]( ../../standings_europe_2025_08_05.md)<br />
<br />
Final Rank Value:  881.7<br />
<br />
Final Rank Value (881.7) = Starting Rank Value (775.8) + Head To Head Adjustments (106.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.381[<sup>2</sup>](#table1)

The average of these factors is 0.198<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 775.8
- 400 + ( ( 0.198 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 775.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       77 | 2025-07-28 | KOLESIE                 | W   | 1.000      | 0.143        | 0.049 (0.007)    | 0.551 (0.079)    | 0 (0.000) |    25.18 | 1nhuman, byek, drowranger, SP1NT, whsup      |
|           10 |      160 | 2025-07-24 | SINNERS Esports         | W   | 1.000      | 0.143        | 0.026 (0.004)    | 0.470 (0.067)    | 0 (0.000) |    16.48 | 1nhuman, bogemtdarf, byek, drowranger, whsup |
|            9 |      172 | 2025-07-23 | Dynamo Eclot            | W   | 1.000      | 0.143        | 0.081 (0.012)    | 0.725 (0.104)    | 0 (0.000) |    17.54 | 1nhuman, bogemtdarf, byek, drowranger, whsup |
|            8 |      383 | 2025-07-12 | GUN5 Esports            | L   | 1.000      | -            | -                | -                | -         |   -11.38 | 1nhuman, bogemtdarf, byek, drowranger, whsup |
|            7 |      436 | 2025-07-10 | ENCE                    | W   | 1.000      | 0.483        | 0.139 (0.067)    | 0.721 (0.348)    | 0 (0.000) |    26.50 | 1nhuman, bogemtdarf, byek, drowranger, whsup |
|            6 |      468 | 2025-07-09 | AMKAL ESPORTS           | W   | 1.000      | 0.483        | 0.005 (0.002)    | 0.611 (0.295)    | 0 (0.000) |    15.50 | 1nhuman, bogemtdarf, byek, drowranger, whsup |
|            5 |      484 | 2025-07-08 | Fire Flux Esports       | W   | 0.997      | 0.483        | 0.003 (0.001)    | 0.500 (0.241)    | 0 (0.000) |    14.73 | 1nhuman, bogemtdarf, byek, drowranger, whsup |
|            4 |      499 | 2025-07-06 | FORZE Reload            | L   | 0.983      | -            | -                | -                | -         |   -15.16 | 1nhuman, bogemtdarf, byek, drowranger, whsup |
|            3 |      530 | 2025-07-01 | HEROIC Academy          | W   | 0.949      | 0.483        | 0.002 (0.001)    | 0.223 (0.102)    | 0 (0.000) |    12.09 | 1nhuman, bogemtdarf, byek, drowranger, whsup |
|            2 |     1554 | 2025-05-02 | Chinggis Warriors       | L   | 0.550      | -            | -                | -                | -         |    -3.40 | 1nhuman, borosto, byek, spira, whsup         |
|            1 |     1607 | 2025-04-30 | Nomads (Mongolian team) | W   | 0.537      | 0.416        | 0.013 (0.003)    | 0.154 (0.034)    | 0 (0.000) |     7.88 | 1nhuman, borosto, byek, forzetsky, whsup     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,048.71)
- Divide that value by the 5th highest value among all rosters ($423,845.20)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-13 |      1.000 | $2,922.60      | $2,922.60       |
| 2025-05-04 |      0.563 | $2,000.00      | $1,126.11       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
