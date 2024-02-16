const route = require("express").Router()
const customerController = require("../controller/customerController")
const verifyJWT = require("../middleware/verifyJWT")


route.get("/", verifyJWT, customerController.getCustomerMessages)
route.post("/add", customerController.addCustomerMessage)
route.delete("/delete/:_id", verifyJWT, customerController.deleteCustomerMessage)

module.exports = route