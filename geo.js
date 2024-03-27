// import json from "./370000.geojson";
const fs = require("fs");

let rawdata = fs.readFileSync("./370000.geojson");
let raw = JSON.parse(rawdata);
// console.log(student);

// const originData = raw.features;
// // console.log("originData:", originData);
// let jjtl = originData.filter((item) => item.properties.name === "胶济铁路");
// // console.log("jjtl:", jjtl);
// jjtl = jjtl.map((item) => item.geometry.coordinates[0]);
// // console.log("jjtl--2:", jjtl);
// let data = JSON.stringify(jjtl);
// fs.writeFileSync("jjtl.json", "");
// fs.writeFileSync("jjtl.json", data);

// let qytl = originData.filter((item) => item.properties.name === "青盐铁路");
// qytl = qytl.map((item) => item.geometry.coordinates[0]);
// let data2 = JSON.stringify(qytl);
// fs.writeFileSync("qytl.json", "");
// fs.writeFileSync("qytl.json", data2);

// const a = {
//   type: "Feature",
//   properties: {
//     osm_id: "25043794",
//     code: 6101,
//     fclass: "rail",
//     name: "京沪线",
//     layer: 0,
//     bridge: "F",
//     tunnel: "F",
//   },
//   geometry: {
//     type: "MultiLineString",
//     coordinates: [
//       [
//         [116.7715332, 36.7988907],
//         [116.7726708, 36.798345],
//         [116.7734817, 36.7977976],
//         [116.77418, 36.7972799],
//         [116.7748195, 36.7966407],
//         [116.7752689, 36.796093],
//         [116.7756883, 36.7954199],
//         [116.7760253, 36.7947462],
//         [116.7762564, 36.7940628],
//         [116.7764082, 36.7933079],
//         [116.7764735, 36.7924042],
//         [116.7764799, 36.7917232],
//         [116.7764814, 36.791559],
//         [116.7764044, 36.7796634],
//         [116.7763413, 36.7658517],
//         [116.7763332, 36.7653881],
//         [116.7763298, 36.7649123],
//         [116.7763735, 36.764485],
//         [116.776554, 36.7633899],
//       ],
//     ],
//   },
// };

const originData = raw.features;
const res = originData.filter((item) => {
  if (
    item.properties.name === "胶济铁路" ||
    item.properties.name === "青盐铁路" ||
    item.properties.name === "胶济客专线"
  ) {
    return true;
  }
});

raw.features = res;
let data = JSON.stringify(raw);
fs.writeFileSync("res.geojson", "");
fs.writeFileSync("res.geojson", data);
// console.log("res:", raw);
