const fs = require("fs");
const GPS = require("./PointTransLateUtil");

console.log("GPS:", GPS);

const fileName = "路网组成总";
const rawdata = fs.readFileSync(`./src/${fileName}.json`);

const raw = JSON.parse(rawdata);

const originData = raw.features.map((feature) => feature.geometry.paths);
// const data = JSON.stringify(originData);

// console.log("data:", data);

// fs.writeFileSync(`./export/${fileName}.json`, "");
// fs.writeFileSync(`./export/${fileName}.json`, data);

const promiseArr = [];
const points = originData;
// console.log("points:", points);

points.forEach((feature, fIndex) => {
  feature.forEach((line, lIndex) => {
    line.forEach((point, pIndex) => {
      function delay(target, fIndex, lIndex, pIndex) {
        // console.log("target:", target);

        return new Promise(function (resolve, _reject) {
          setTimeout(function () {
            const WGS84toGCJ02 = GPS.gcj_encrypt(target[0], target[1]);
            const data = GPS.bd_encrypt(WGS84toGCJ02.lat, WGS84toGCJ02.lon);
            resolve({
              // point: { lat: data.lat, lng: data.lon },
              point: [data.lat, data.lon],
              fIndex,
              lIndex,
              pIndex,
            });
          });
        });
      }
      promiseArr.push(delay([point[0], point[1]], fIndex, lIndex, pIndex));
    });
  });
});

Promise.all(promiseArr).then((res) => {
  console.log("res[0]:", res[0]);

  const result = [];
  try {
    res.forEach((r) => {
      // console.log("r.lindex:", r.lIndex);

      if (!result[r.fIndex]) {
        result[r.fIndex] = [];
      }
      // 因为默认只有一条线，所以干脆略过此条线，直接吧点位放置在features下面，故忽略此处
      // if (!result[r.fIndex][r.lIndex]) {
      //   result[r.fIndex][r.lIndex] = [];
      // }

      // result[r.fIndex][r.lIndex][r.pIndex] = r.point;
      // 为了减少 数组的层级。 直接略过 line 这一层 故上方语句改为如下
      result[r.fIndex][r.pIndex] = r.point;
    });

    // console.log("trans-res-end:", result);
    const text = JSON.stringify(result);
    fs.writeFileSync(`./export/${fileName}-local-withoutObj.json`, "");
    fs.writeFileSync(`./export/${fileName}-local-withoutObj.json`, text);
    // localStorage.setItem("geo", text);
  } catch (error) {
    console.log(error);
    throw new Error("error in promise");
  }
});
