const route = require("express").Router()
const customerController = require("../controller/customerController")

route.get("/",customerController.getCustomerMessages)
route.post("/add",customerController.addCustomerMessage)

module.exports = route