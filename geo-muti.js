const fs = require("fs");

// const rawdata = fs.readFileSync("./src/胶济铁路.json");
// const rawdata = fs.readFileSync("./src/潍荣高铁-潍莱.json");
const rawdata = fs.readFileSync("./src/潍荣高铁1.json");

const raw = JSON.parse(rawdata);

const originData = raw.features.map((feature) => feature.geometry.paths);
const data = JSON.stringify(originData);

console.log("data:", data);

fs.writeFileSync("./export/潍荣高铁1.json", "");
fs.writeFileSync("./export/潍荣高铁1.json", data);
