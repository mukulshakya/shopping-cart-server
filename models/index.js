const fs = require("fs");

const dir = fs.readdirSync(__dirname);
const Models = {};
dir
  .filter((file) => file !== "index.js" && file.endsWith(".js"))
  .map((file) => file.replace(".js", ""))
  .forEach((file) => {
    const fileName = file[0].toUpperCase() + file.substr(1);
    Models[fileName] = require(`./${file}`);
  });

module.exports = Models;