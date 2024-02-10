const route = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // Temporary storage for uploaded files

const verifyJWT = require("../middleware/verifyJWT")

const productController = require("../controller/productController");

route.get("/get", productController.getProducts);
route.post("/add", verifyJWT, upload.single("file"), productController.addProducts);
route.put(
    "/update/:id", verifyJWT,
    upload.single("file"),
    productController.updateProduct
);
route.delete("/delete/:id", verifyJWT, productController.deleteProducts);

module.exports = route;
