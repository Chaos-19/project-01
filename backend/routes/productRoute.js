const route = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded files

const productController = require("../controller/productController");

route.get("/get", productController.getProducts);
route.post("/addProduct", upload.single("file"), productController.addProducts);
route.delete("/delete/:id", productController.deleteProducts);

module.exports = route;
