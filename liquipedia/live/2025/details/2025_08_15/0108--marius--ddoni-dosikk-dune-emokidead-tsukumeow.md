### Roster Details<br />
Team Name: Marius<br />
Roster: ddoni, dosikk, dune, emokidead, tsukumeow<br />
Global Rank: [108](../../standings_global_2025_08_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_15.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_08_15.md)<br />
<br />
Final Rank Value:  760.5<br />
<br />
Final Rank Value (760.5) = Starting Rank Value (866.5) + Head To Head Adjustments (-106.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.342[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.168[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

And hidden factors not included in the average:<br />
- Own Network: 0.457[<sup>2</sup>](#table1)

The average of these factors is 0.239<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 866.5
- 400 + ( ( 0.239 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 866.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      457 | 2025-07-15 | Hesta              | L   | 0.984      | -            | -                | -                | -         |   -22.41 | ddoni, dosikk, dune, emokidead, tsukumeow    |
|           41 |      519 | 2025-07-12 | PARIVISION         | L   | 0.964      | -            | -                | -                | -         |    -5.25 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           40 |      561 | 2025-07-11 | 9INE               | W   | 0.956      | 0.483        | 0.026 (0.012)    | 0.732 (0.338)    | 0 (0.000) |    24.84 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           39 |      621 | 2025-07-08 | UNiTY esports      | W   | 0.938      | 0.435        | -                | 0.178 (0.072)    | 0 (0.000) |     7.04 | ddoni, dosikk, dune, emokidead, tsukumeow    |
|           38 |      639 | 2025-07-06 | HEROIC Academy     | W   | 0.923      | 0.483        | 0.002 (0.001)    | 0.184 (0.082)    | 0 (0.000) |    14.04 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           37 |      650 | 2025-07-03 | TPuDCATb TPu       | L   | 0.904      | -            | -                | -                | -         |   -10.96 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           36 |      658 | 2025-07-02 | MANA eSports       | L   | 0.898      | -            | -                | -                | -         |   -20.84 | ddoni, dosikk, dune, emokidead, tsukumeow    |
|           35 |      664 | 2025-07-01 | Anonymo Esports    | W   | 0.891      | -            | -                | -                | 0 (0.000) |     4.93 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           34 |      696 | 2025-06-25 | FORZE Reload       | L   | 0.851      | -            | -                | -                | -         |   -14.09 | ddoni, dosikk, dune, emokidead, tsukumeow    |
|           33 |      761 | 2025-06-19 | FUT Esports        | L   | 0.812      | -            | -                | -                | -         |    -2.99 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           32 |      777 | 2025-06-18 | ENCE Academy       | L   | 0.804      | -            | -                | -                | -         |   -13.10 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           31 |      778 | 2025-06-18 | Nexus Gaming       | W   | 0.804      | 0.435        | 0.154 (0.054)    | 0.767 (0.268)    | 0 (0.000) |    19.27 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           30 |      799 | 2025-06-17 | 9INE               | L   | 0.796      | -            | -                | -                | -         |    -3.89 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           29 |      813 | 2025-06-16 | RUBY               | W   | 0.790      | 0.435        | 0.026 (0.009)    | 0.777 (0.267)    | 0 (0.000) |    16.97 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           28 |      825 | 2025-06-15 | Modeame            | W   | 0.785      | 0.435        | 0.004 (0.001)    | 0.271 (0.093)    | 0 (0.000) |     8.77 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           27 |      830 | 2025-06-15 | Fire Flux Esports  | W   | 0.784      | 0.485        | 0.003 (0.001)    | 0.390 (0.148)    | -         |    14.65 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           26 |      868 | 2025-06-14 | CYBERSHOKE Esports | L   | 0.778      | -            | -                | -                | -         |    -5.38 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           25 |      870 | 2025-06-14 | Fisher College     | W   | 0.777      | 0.435        | 0.001 (0.000)    | 0.199 (0.067)    | -         |     9.55 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           24 |      872 | 2025-06-14 | Roler Coaster      | L   | 0.776      | -            | -                | -                | -         |   -18.56 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           23 |      938 | 2025-06-12 | Ex-Sabre Esports   | L   | 0.764      | -            | -                | -                | -         |   -12.24 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           22 |      947 | 2025-06-11 | NOVAQ              | L   | 0.758      | -            | -                | -                | -         |   -17.00 | dosikk, dune, kaziken, m1te, tsukumeow       |
|           21 |      966 | 2025-06-10 | Zero Tenacity      | L   | 0.749      | -            | -                | -                | -         |    -8.12 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           20 |      967 | 2025-06-10 | GUN5 Esports       | W   | 0.749      | 0.485        | 0.056 (0.020)    | 0.694 (0.252)    | -         |    16.83 | dosikk, dune, kaziken, m1te, tsukumeow       |
|           19 |      994 | 2025-06-08 | PARIVISION         | L   | 0.737      | -            | -                | -                | -         |    -3.60 | dosikk, dune, kaziken, mixmeister, tsukumeow |
|           18 |     1128 | 2025-05-26 | Partizan Esports   | L   | 0.652      | -            | -                | -                | -         |    -7.05 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|           17 |     1161 | 2025-05-24 | Ex-Sabre Esports   | W   | 0.636      | 0.435        | 0.003 (0.001)    | 0.336 (0.093)    | -         |     9.91 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|           16 |     1186 | 2025-05-22 | Zero Tenacity      | L   | 0.625      | -            | -                | -                | -         |    -6.14 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|           15 |     1214 | 2025-05-21 | Monte              | L   | 0.618      | -            | -                | -                | -         |    -7.53 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|           14 |     1273 | 2025-05-19 | SINNERS Esports    | L   | 0.604      | -            | -                | -                | -         |    -7.15 | batyazzz, ddoni, dune, Killmisker, tsukumeow |
|           13 |     1348 | 2025-05-15 | CYBERSHOKE Esports | L   | 0.577      | -            | -                | -                | -         |    -6.11 | batyazzz, ddoni, dune, Killmisker, tsukumeow |
|           12 |     1427 | 2025-05-12 | Passion UA         | L   | 0.557      | -            | -                | -                | -         |    -1.60 | batyazzz, ddoni, dune, Killmisker, tsukumeow |
|           11 |     1589 | 2025-05-06 | Portuguese Family  | L   | 0.519      | -            | -                | -                | -         |   -13.41 | ddoni, dosikk, dune, m1te, tsukumeow         |
|           10 |     1675 | 2025-05-03 | Ex-Sabre Esports   | L   | 0.497      | -            | -                | -                | -         |    -8.68 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|            9 |     1688 | 2025-05-02 | TEAM NEXT LEVEL    | L   | 0.492      | -            | -                | -                | -         |    -2.15 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|            8 |     1732 | 2025-04-30 | RUBY               | L   | 0.479      | -            | -                | -                | -         |    -6.33 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|            7 |     1775 | 2025-04-29 | Dynamo Eclot       | L   | 0.470      | -            | -                | -                | -         |   -12.86 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|            6 |     1780 | 2025-04-28 | Modeame            | L   | 0.465      | -            | -                | -                | -         |    -9.98 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|            5 |     2263 | 2025-04-06 | DEPO               | W   | 0.317      | -            | -                | -                | 1 (0.317) |     2.25 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|            4 |     2267 | 2025-04-06 | RAGE (Kazakh team) | W   | 0.316      | -            | -                | -                | 1 (0.316) |     2.35 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|            3 |     2271 | 2025-04-05 | ALLINNERS          | W   | 0.315      | 0.333        | 0.003 (0.000)    | -                | 1 (0.315) |     1.42 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|            2 |     2286 | 2025-04-05 | RAGE (Kazakh team) | L   | 0.310      | -            | -                | -                | -         |    -7.51 | ddoni, dosikk, dune, mixmeister, tsukumeow   |
|            1 |     2939 | 2025-03-16 | Modeame            | L   | 0.179      | -            | -                | -                | -         |    -3.91 | ddoni, dosikk, dune, mixmeister, tsukumeow   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,426.97)
- Divide that value by the 5th highest value among all rosters ($368,914.78)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-13 |      0.972 | $2,922.60      | $2,841.21       |
| 2025-04-06 |      0.317 | $5,000.00      | $1,585.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by LiquipediaDB_<br />
