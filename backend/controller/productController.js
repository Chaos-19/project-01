const cloudinary = require("cloudinary");

const Product = require("../models/productModel");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const getProducts = async (req, res) => {
    const productList = await Product.find();
    console.log(productList);
    res.json({ products: productList });
};

const addProducts = async (req, res) => {
    const { name, price, discount } = req.body;
    const file = req?.file;

    try {
        //Upload to Cloudinary
        const result = await cloudinary.v2.uploader.upload(file.path);

        const imageUrl = result.secure_url;
        const imageId = result.public_id;
        console.log(result);

        const newProduct = await Product.create({
            name,
            price: {
                original: price,
                discount: discount || 0
            },
            image: {
                imgUrl: imageUrl,
                imgId: result.public_id
            }
        });

        console.log(newProduct);

        res.send({ message: "Product added successfully!" });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            status: "error",
            massage: "internal server Error"
        });
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
