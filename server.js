var express = require("express");
var bp = require("body-parser");
var mongoose = require("mongoose");
var app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bp.json());
app.use(bp.urlencoded({ urlencoded: true }));

var url = mongoose.connect("mongodb://localhost/shop", { useNewUrlParser: true });

var Product = require("./product");
app.post("/l", function (req, res) {
  var i = new Product();
  i.title = req.body.title;
  i.price = req.body.price;
  i.save(function (err, saved) {
    res.send(saved);
    console.log("inserted");
  });
});




app.get("/get", (req, res) =>  res.send(i));

app.get("/h", function (req, res) {
  Product.find({}, function (err, products) {
    res.send(products);
  });
});
app.listen(3004, function () {
  console.log("3004");
});
