const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductModel = Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            original: {
                type: Number,
                required: true
            },
            discount: {
                type: Number,
                required: false
            }
        },
        image: {
            imgUrl: {
                type: String,
                required: true
            },
            imgId: {
                type: String,
                required: true
            }
        },
        tages: {
            isNew: {
                type: Boolean
            }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductModel);
