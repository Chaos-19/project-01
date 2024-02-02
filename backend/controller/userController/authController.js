const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../../models/userModel");

const handleLogin = async (req, res) => {
    try {
        const cookies = req.cookies;

        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "all feild required" });
        }
        const foundUser = await User.findOne({ email });

        //Unauthorized
        if (!foundUser) return res.sendStatus(401);

        // evaluate password
        const match = await bcrypt.compare(password, foundUser.password);

        if (match) {
            const accessToken = jwt.sign(
                {
                    userInfo: {
                        username: foundUser.user,
                        email
                    }
                },
                process.env.ACESS_TOKEN_SECRETE,
                { expiresIn: "10s" }
            );

            const newRefreshToken = jwt.sign(
                {
                    userInfo: {
                        username: foundUser.user,
                        email
                    }
                },
                process.env.REFRESH_TOKEN_SECRETE,
                { expiresIn: "15s" }
            );

            let newRefreshTokenArray = !cookies?.jwt
                ? foundUser.refreshTokens
                : foundUser.refreshTokens.filter(rt => rt !== cookies.jwt);

            if (cookies?.jwt) {
                const refreshToken = cookies.jwt;
                const foundToken = await User.findOne({
                    refreshTokens: refreshToken
                });

                // Detected refresh token reuse!
                if (!foundToken) {
                    // clear out ALL previous refresh tokens
                    newRefreshTokenArray = [];
                }

                res.clearCookie("jwt", {
                    httpOnly: true,
                    sameSite: "None",
                    secure: true
                });
            }

            // Saving refreshToken with current user
            foundUser.refreshTokens = [
                ...newRefreshTokenArray,
                newRefreshToken
            ];
            const result = await foundUser.save();

            console.log(result);
            // Creates Secure Cookie with refresh token
            res.cookie("jwt", newRefreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                maxAge: 24 * 60 * 60 * 1000
            });

            // Send authorization roles and access token to user
            res.json({ token: accessToken });
        } else {
            res.sendStatus(401);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = handleLogin;
