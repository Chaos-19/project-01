const Product = require("../models/productModel");

const productList = require("../test");

const getProducts = (req, res) => {
    console.log("reached here...");
    console.log(productList);
    setTimeout(function () {
        res.json({ products: productList });
    }, 10000);
};
const addProducts = (req, res) => {
    const { name } = req.body;
};
const updateProducts = (req, res) => {};
const deleteProducts = (req, res) => {};

module.exports = { getProducts };
