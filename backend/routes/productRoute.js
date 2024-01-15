const route = require("express").Router();
const productController = require("../controller/productController");

route.get("/get", productController.getProducts);

module.exports = route;
