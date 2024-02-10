const express = require("express");
const route = express.Router();

const userController = require("../controller/userController/userController");

route
    .post("/login", userController.handleLogin)
    .get("/refresh", userController.handleRefreshToken);

module.exports = route;
