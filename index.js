const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
process.env["NODE_CONFIG_DIR"] = __dirname + "/config";
const { db } = require("config");

const env = process.env.NODE_ENV || "local";
const port = process.env.PORT || 4040;

// Middlewares
app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  Object.assign(res, require("./utils/responseSender"));
  next();
});

// DB connection
mongoose
  .connect(db.url[env], db.options)
  .then(async () => {
    console.log("Mongoose connection success");

    // Listen to server only when connection to mongo is successful
    app.listen(port, () => console.log("Server up on port", port));

    // SEED PRODUCTS
    // if (process.env.NODE_ENV === "production") {
    //   const db = require("./models");
    //   const seedingData = require("./config/seedingData");

    //   const categories = [...seedingData.categories];
    //   const products = categories.flatMap((category) => category.getProducts());

    //   await db.Category.deleteMany({});
    //   await db.Product.deleteMany({});
    //   await db.Category.insertMany(categories);
    //   await db.Product.insertMany(products);
    // }
  })
  .catch((e) => console.log("Mongoose connection error", e.message));

// Routes
app.use("/v1", require("./api/v1"));

app.get("/", (req, res) => {
  res.success();
});

// Error handler ro
app.use(async (error, req, res, next) => {
  return res.error(error);
});
