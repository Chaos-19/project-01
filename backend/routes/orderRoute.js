const route = require("express").Router();

const orderController = require("../controller/orderController");

route.get("/get", orderController.getOrder);
route.post("/placeOrder", orderController.addOrder);
route.put("/update/:orderId", orderController.editeOrder);
route.delete("/delete/:orderId", orderController.deleteOrder);

module.exports = route;
