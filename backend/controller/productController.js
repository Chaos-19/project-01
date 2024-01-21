const cloudinary = require("cloudinary");

const Product = require("../models/productModel");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const getProducts = async (req, res) => {
    const productList = await Product.find();
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
                original: Number(price),
                discount: Number(discount) || 0
            },
            image: {
                imgUrl: imageUrl,
                imgId: imageId
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
const updateProduct = async (req, res) => {
    const id = req.params.id;
    const file = req?.file;
    const { price, discount, name } = req.body;
    try {
        console.log(id);
        console.log(req.body);

        const existProduct = await Product.findById(id);

        console.log(existProduct);

        if (!existProduct) {
            return res.status(400).json({
                status: "error",
                message: "product doesn't exist"
            });
        }
        if (file) {
            console.log("in cloudinary");
            await cloudinary.v2.uploader.destroy(existProduct.image.imgId);
            console.log(`Image ${id} deleted successfully!`);

            const result = await cloudinary.v2.uploader.upload(file.path);

            const imgUrl = result.secure_url;
            const imgId = result.public_id;

            existProduct.image = { ...imgUrl, imgId };
        }

        if (price) {
            existProduct.name = name;
        }
        if (price) {
            existProduct.price.original = Number(price);
        }
        if (discount) {
            existProduct.price.discount = Number(discount);
        }
        const resul = await existProduct.save();

        console.log(resul);

        res.status(200).json({
            status: "success",
            message: "product updated successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "error",
            massage: "internal server Error"
        });
    }
    //const update = await findOneAndUpdate({ _id: id }, {});
};
const deleteProducts = async (req, res) => {
    const pId = req.params.id;
    try {
        const existProduct = await Product.findById(pId);

        
        if (!existProduct) {
            console.log("existProduct....");
            res.status(400).json({
                status: "error",
                message: "product doesn't exist!"
            });
        }

        await cloudinary.v2.uploader.destroy(existProduct.image.imgId);

        const resuts = await Product.findOneAndDelete({ _id: pId });

        console.log(`Image ${pId} deleted successfully!`);

        res.status(200).json({
            status: "success",
            message: `product ${pId} deleted successfully!`
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({ err });
    }
};

module.exports = { getProducts, addProducts, deleteProducts, updateProduct };
