const Order = require("../models/OrderModel");

const addOrder = async (req, res) => {
    try {
        const {
            productId,
            userInfo: {
                userName: name,
                email,
                phone,
                kifleKetema,
                location,
                city
            }
        } = req.body;
        console.log(req.body);

        console.log(name, email, phone, kifleKetema, location, city);

        const result = await Order.create({
            productId,
            userInfo: {
                name,
                phone,
                email,
                kifleKetema,
                location,
                city
            }
        });

        console.log(result);

        res.status(200).json({
            status: "success",
            message: `order placed successfully`
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
};
const getOrder = async (req, res) => {
    try {
        console.log(req.cookies)
        const orderList = await Order.find();

        console.log(orderList)
        res.status(200).json({ orderList: orderList });

    } catch (err) {
        console.log("error")
        res.status(500).json({ err });
    }
};
const updateOrder = async (req, res) => {
    const { orderId: id } = req.params;
    console.log("in update ... ")
    console.log(req.body)

    if (!id) {
        res.status(400).json({ status: "error", message: "id required" });
    }
    try {
        const result = await Order.findById(id);
        console.log(req.status)
        result.status = req.body.status;
        await result.save();

        res.status(200).json({
            status: "success",
            message: `order with ${id} updated successfully`
        })
    } catch (err) {
        console.log("error")
        res.status(500).json({ err });
    }
};
const deleteOrder = async (req, res) => {
    const { orderId: id } = req.params;

    if (!id) {
        return res.status(400).json({ status: "error", message: "id required" });
    }
    try {
        const result = await Order.findOneAndDelete({ _id: id });
        res.status(200).json({
            status: "success",
            message: `order with ${id} deleted successfully`
        });

    } catch (err) {
        res.status(500).json({ err });
    }
};

module.exports = { getOrder, addOrder, updateOrder, deleteOrder };
