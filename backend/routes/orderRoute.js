const route = require("express").Router();

const orderController = require("../controller/orderController");
const verifyJWT = require("../middleware/verifyJWT")

route.get("/get", verifyJWT, orderController.getOrder);
route.post("/placeOrder", orderController.addOrder);
route.put("/update/:orderId", verifyJWT, orderController.updateOrder);
route.delete("/delete/:orderId", verifyJWT, orderController.deleteOrder);

module.exports = route;
