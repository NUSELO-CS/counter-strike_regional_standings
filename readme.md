# README

This is an unofficial repository, for the Counter Strike Regional Standings generated via the LiquipediaDB data and aligned to match the main VRS data as closely as possible.

The purpose of this is fork to enable simulation and testing of the model with more recent matchdata.json's. Additionally enable further testing and evaluation of the model as well as potential model changes.

Most recent LiquipediaDB matchdata samples are available in [`/data/`](https://github.com/NUSELO-CS/counter-strike_regional_standings/tree/liquipedia-main/data)

## Predictions

Read the [predictions README here](https://github.com/NUSELO-CS/counter-strike_regional_standings/tree/liquipedia-main/predictor/readme.md)

This is primarily a tool to help provide insight on how the model works and how matches can affect a teams ranking and influence others teams too.

This is not a catch all simulation and the model as a whole is very complex. I hopefully will include it in the future but this does not include the complexity of overflowing buckets in which it seems like there is limited benefit to a match / event. Its important to note that while an event may not provide immediate benefit, an overflowing bucket can provide future benefit compared to decay and future security.

For any complex calculations, particularly regarding the major check out [Udknud on twitter](https://x.com/JesperLarsen222) who has shared some great insight into the leadup. This tool is primarily used (currently) to simulate an individual events instantaneous effects.