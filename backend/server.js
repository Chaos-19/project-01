require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const productRoute = require("./routes/productRoute");

const app = express();

const PORT = process.env.PORT_NO || 3500;

app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.headers.origin}  ${req.url} ${req.path}`);
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

app.use("/product", productRoute);

app.listen(PORT, () => {
    console.log(`server runing on ${PORT}`);
});
