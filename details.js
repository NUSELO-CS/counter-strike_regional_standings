const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "state.json");
const outputFile = path.join(__dirname, "championships.csv");

// IDs you want to exclude
const excludeIds = new Set([
  "4ca2d7ca-d60f-4289-bf52-d69ed47a04bc",
  "5227a49c-f172-485e-a19b-a666ddeb3140",
  "ec39d65c-4069-4c0c-b2e1-5f957e7787f1",
  "d2acd259-12dc-4fe7-92c4-51eb471a0b20",
  "33e1900a-9cf9-4050-ad08-41faf1e9068f",
  "49e7fd30-ae54-469c-ac03-ce5a6ecbe2eb",
  "1dcf4db9-19e7-4e82-850e-cbfacd6f8376",
  "82ed3bfd-5ffe-45fe-b731-4a6d0e9d6023",
]);

// Read JSON
const rawData = fs.readFileSync(inputFile, "utf-8");
const data = JSON.parse(rawData);

// Collect all championships
let championships = [];

for (const region of data.payload.regions) {
  for (const division of region.divisions) {
    for (const stage of division.stages) {
      for (const conf of stage.conferences) {
        championships.push({
          championship_id: conf.championship_id,
          region: region.name,
          division: division.name,
          stage: stage.name,
          conference: conf.name
        });
      }
    }
  }
}

// Filter out excluded IDs
const results = championships.filter(c => !excludeIds.has(c.championship_id));

// Convert to CSV
if (results.length > 0) {
  const headers = Object.keys(results[0]);
  const csvRows = [
    headers.join(","), // header row
    ...results.map(obj =>
      headers.map(h => JSON.stringify(obj[h] ?? "")).join(",")
    )
  ];

  fs.writeFileSync(outputFile, csvRows.join("\n"), "utf-8");
  console.log(`✅ CSV saved to ${outputFile}`);
} else {
  console.log("⚠️ No championships found after filtering.");
}
