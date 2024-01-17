const cloudinary = require("cloudinary");

const Product = require("../models/productModel");
const productList = require("../test");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const getProducts = (req, res) => {
    console.log("reached here...");
    console.log(productList);

    res.json({ products: productList });
};

const addProducts = async (req, res) => {
    //  const { name, file, price, discount } = req.body;

    console.log(req.body);
    /*try {
        const result = await cloudinary.v2.uploader.upload(file.path);
        const imageUrl = result.secure_url;
        console.log(imageUrl);
    } catch (e) {
        console.log(e);
    }*/
};
const updateProducts = (req, res) => {};
const deleteProducts = (req, res) => {};

module.exports = { getProducts, addProducts };
