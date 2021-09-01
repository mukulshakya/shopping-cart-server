const fs = require("fs");

const dir = fs.readdirSync(__dirname);
const Controllers = {};
dir
  .filter((file) => file !== "index.js" && file.endsWith(".js"))
  .map((file) => file.replace(".js", ""))
  .forEach((file) => {
    Controllers[file] = require(`./${file}`);
  });

module.exports = Controllers;
