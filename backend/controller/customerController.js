const Customer = require("../models/customerModel");

const getCustomerMessages = async (req, res) => {
    try {
        const messages = await Customer.find();
        res.status(200).json({ messages });

    } catch (err) {
        res.status(500).json({ err });
    }
};
const addCustomerMessage = async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        if (!name && !email && !subject && !message) {
            res.status(400).json({
                status: "error",
                message: "feilds are empty"
            });
        }
        console.log(req.body)
        const result = await Customer.create({ ...req.body });
        res.status(200).json({
            status: "success",
            message: "successfully sumbmitted"
        });
    } catch (err) {
        res.status(500).json({ err });
    }
};

const deleteCustomerMessage = async (req, res) => {
    const { _id } = req.params;

    if (!_id) {
        return res.status(400).json({ status: "error", message: "id required" });
    }
    try {
        const result = await Customer.findOneAndDelete({ _id });
        res.status(200).json({
            status: "success",
            message: `Message with ${_id} deleted successfully`
        });

    } catch (err) {
        res.status(500).json({ err });
    }
};

module.exports = { getCustomerMessages, addCustomerMessage, deleteCustomerMessage }