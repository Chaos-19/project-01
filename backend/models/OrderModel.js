const mongooses = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    userInfo: {
        name: {
            type: String,
            required: true
        },
        email: { type: String },
        phone: {
            type: String,
            required: true
        },
        kifleKetema: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model("Order", OrderSchema);
