const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
});

module.exports = mongoose.model("Customer",CustomerSchema)