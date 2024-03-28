const fs = require("fs");
// ---- logic ----
const fileName = "路网组成总";
const rawdata = fs.readFileSync(`./src/${fileName}.json`);

const raw = JSON.parse(rawdata);

const originData = raw.features.map((feature) => feature.geometry.paths);
const data = JSON.stringify(originData);

console.log("data:", data);

fs.writeFileSync(`./export/${fileName}.json`, "");
fs.writeFileSync(`./export/${fileName}.json`, data);
