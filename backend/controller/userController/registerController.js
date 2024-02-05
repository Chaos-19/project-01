const bcrypt = require("bcrypt");
const validator = require("validator");

const User = require("../../models/userModel");

const handleRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            res.status(400).json({ message: "all feild required" });
        }

        if (!validator.isEmail(email)) {
            res.status(400).json({ message: "Email is not valid" });
        }

        //check for duplicate usernames in the db
        let duplicate = await User.findOne({ email });

        if (duplicate) res.status(409).json({ message: "Email exists" });

        duplicate = await User.findOne({ username });

        if (duplicate)
            res.status(409).json({
                message: "username taken by another user"
            });

        const hash = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hash
        });

        res.status(201).json({ success: `New user ${username} created!` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = handleRegister;
