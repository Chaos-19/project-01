const route = require("express").Router();
const productController = require("../controller/productController");

route.get("/get", productController.getProducts);
route.post("/addProduct", productController.addProducts);

module.exports = route;
