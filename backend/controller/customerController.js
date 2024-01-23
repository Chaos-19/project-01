const Customer = require("../models/customerModel");

const getCustomerMessages = (req, rea) => {
    try {
        const messages = Customer.find();

        res.status(200).json({ messages });
    } catch (err) {
        res.status(500).json({ err });
    }
};p
const addCustomerMessqge = async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        if (!name && !email && !subject && !message) {
            res.status(400).json({
                status: "error",
                message: "feilds are empty"
            });
        }
        const result = await Customer.create({ ...req.body });
        res.status(200).json({
            status: "success",
            message: "successfully sumbmitted"
        });
    } catch (err) {
        res.status(500).json({ err });
    }
};
