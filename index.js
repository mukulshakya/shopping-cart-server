const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
process.env["NODE_CONFIG_DIR"] = __dirname + "/config";
const {
  db: { url, options },
} = require("config");

// Middlewares
app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  Object.assign(res, require("./utils/responseSender"));
  next();
});

// DB connection
const connectionUri =
  process.env.NODE_ENV === "production" ? url.production : url.local;
mongoose
  .connect(connectionUri, options)
  .then(async () => {
    console.log("Mongoose connection success");

    // SEED PRODUCTS
    // const db = require("./models");
    // const seedingData = require("./config/seedingData");

    // const categories = [...seedingData.categories];
    // const products = categories.flatMap((category) => category.getProducts());

    // await db.Category.deleteMany({});
    // await db.Product.deleteMany({});
    // await db.Category.insertMany(categories);
    // await db.Product.insertMany(products);
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

const port = process.env.PORT || 4040;
app.listen(port, () => console.log("Server up on port", port));
