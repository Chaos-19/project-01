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
    const { name, price, discount } = req.body;
    const file = req?.file;

    console.log(req.body);
    console.log(file);

    try {
        // Upload to Cloudinary
        const result = await cloudinary.v2.uploader.upload(file.path);
        const imageUrl = result.secure_url;
        // Save product information to database (replace with your database logic):
        const newProduct = await Product({
            name,
            price: {
                original: price,
                discount: discount || 0
            },
            imgUrl: imageUrl
        }).exec();

        res.send({ message: "Product added successfully!" });
    } catch (e) {
        console.log(e);
    }
};
const updateProducts = async (req, res) => {
    const { id } = req.body;

    const existProdcut = await Product.findOne({ _id: id });

    if (!existProdcut)
        res.status(404).json({
            status: "error",
            message: "product doesn't exist"
        });

    const update = await findOneAndUpdate({ _id: id }, {});
};
const deleteProducts = (req, res) => {};

module.exports = { getProducts, addProducts };
