require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const customerRoute = require("./routes/customerRoute")
const adminRoute = require("./routes/userRoute")

const credentials = require("./middleware/credentials")
const corsOptions = require("./config/corsOptions")

const connectDB = require("./config/dbConnection");

const { logger } = require("./middleware/logEvents")


const app = express();

const PORT = process.env.PORT_NO || 3500;

connectDB();

app.use(logger);

app.use(credentials)

app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

app.use("/product", productRoute);
app.use("/order", orderRoute);
app.use("/contact", customerRoute);
app.use("/auth", adminRoute);

app.use(require("./middleware/errorHandler"))

mongoose.connection.once("open", () => {
    console.log("CONNETED TO MONGODB...");
    app.listen(PORT, () => {
        console.log(`server runing on ${PORT}`)
    });
});


