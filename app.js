const hbs = require("hbs");
const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.json());
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.set("view engine", hbs);

app.get("/", (req, res) => {
  res.redirect("product-form");
});

app.get("/characters", (req, res) => {
  const data = {
    scripts: ["characters.js"]
  };
  res.render("form-product.hbs", data);
});

app.get("/api/products/", (req, res) => {
  res.send(products);
});

app.post("/api/product", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.send("ok");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("runs @ http://localhost:" + listener.address().port);
});