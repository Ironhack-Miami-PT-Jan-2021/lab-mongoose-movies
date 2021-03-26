require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

const index = require("./routes/index");
app.use("/", index);

// require the routes from module/file
const celebrityRoutes = require("./routes/celebrity.routes");
// tell app to use the routes found in the module
app.use("/", celebrityRoutes);

module.exports = app;

// // How would you get the value of queries and params in the following examples?
// // PARAMS:
// // 1:
// // https://dummyexample.com/albums/123cool4lbum
// app.get("/albums/:albumId", (req, res) => {
//   console.log(req.params.albumId);
// });
// // 2:
// // https://dummyexample.com/students/nick
// app.get("/students/:name", (req, res) => {
//   console.log(req.params.name);
// });
// // 3:
// // https://dummyexample.com/nature/large/1
// app.get("/:imageType/:imageSize/:id", (req, res) => {
//   // grab them
//   const { imageType, imageSize, id } = req.params;
//   console.log(imageType, imageSize, id);
//   console.log(...req.params);
// });
// // 4:
// // https://dummyexample.com/stefan/123
// app.get("/:user/:albumId", (req, res) => {
//   const { user, albumId } = req.params;
//   console.log(user, albumId);
// });
// // QUERIES:
// // 5:
// // URL: https://localhost:3000/?category=coffee
// app.get("/", (req, res) => {
//   console.log(req.query.category);
// });
// // 6:
// // URL: https://localhost:3000/marketplace?category=code-review&type=apps
// app.get("/marketplace", (req, res) => {
//   // req.query { category: 'code-review', type: 'apps' }
//   const { category, type } = req.query;
//   console.log(category, type);
// });
// // 7:
// // URL: https://localhost:3000/search?city=barcelona&accommodation=hotel&transport=public
// app.get("/search", (req, res) => {
//   const { city, accomodation, transport } = req.query;
//   console.log(city, accomodation, transport);
// });
// 8: mix
// // URL: https://localhost:3000/products/toys?prodID=123
// app.get("/products/:category", (req, res) => {
//   console.log(req.query.prodID, req.params.category);
// });
