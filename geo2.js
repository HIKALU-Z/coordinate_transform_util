const fs = require("fs");
// const rawdata = fs.readFileSync("./Export_Output_3_FeaturesToJS1.json");
// const rawdata = fs.readFileSync("./src/潍荣高铁-潍莱.json");
// const rawdata = fs.readFileSync("./src/胶济客专.json");
// const rawdata = fs.readFileSync("./src/胶济铁路.json");
const rawdata = fs.readFileSync("./src/潍荣高铁1.json");

const raw = JSON.parse(rawdata);

const originData = raw.features[0].geometry.paths;

const data = JSON.stringify(originData);
fs.writeFileSync("./export/潍荣高铁1.json", "");
fs.writeFileSync("./export/潍荣高铁1.json", data);
