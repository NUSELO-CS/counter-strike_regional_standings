## How to run the model

In a VS code (or IDE of your choice) create a folder and then run `git clone https://github.com/NUSELO-CS/counter-strike_regional_standings.git`

Rename data/matchdata_sample_20250803.json to data/matchdata.json

Delete the `/liquipedia` folder so you can generate new data for that match date

Then type `cd model` in terminal and run `node main.js` 

To modify matches / event weights you can make changes in `matchdata.json` , make any changes to the model formula in `/model`. Most aspects are contained in `team.js`

## Data source

LiquipediaDB and then manual tweaks were used to create the matchdata.json. If there are any issues with the data please make a pull request to get it fixed