require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const customerRoute = require("./routes/customerRoute")
const connectDB = require("./config/dbConnection");

const app = express();

const PORT = process.env.PORT_NO || 3500;

connectDB();

app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.headers.origin}  ${req.url} ${req.path}`);
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

app.use("/product", productRoute);
app.use("/order", orderRoute);
app.use("/contact", customerRoute);

mongoose.connection.once("open", () => {
    console.log("CONNETED TO MONGODB...");
    app.listen(PORT, () => {
        console.log(`server runing on ${PORT}`);
    });
});
