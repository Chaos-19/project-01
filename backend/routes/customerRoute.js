const route = require("express").Router()
const customerController = require("../controller/customerController")



route.get("/", customerController.getCustomerMessages)
route.post("/add", customerController.addCustomerMessage)
route.delete("/dlete/:_id", customerController.deleteCustomerMessage)

module.exports = route