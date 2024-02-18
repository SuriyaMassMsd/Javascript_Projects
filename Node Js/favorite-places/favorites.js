const fs = require("fs");
const dataFile = require("./data.json");

dataFile.forEach((place) => {
  const mj = place.place;
  fs.mkdir(mj, (error) => console.log(error));

  place.favorites.places.forEach((data) => {
    fs.writeFile(
      `${mj}/${data.name}.txt`,
      `Place : ${data.name},
About That Place : ${data.description},
Location Link : ${data.map},
Timing : ${data.time},
Money Range : ${data.average_money}.`,
      (error) => console.log(error)
    );
  });
});
