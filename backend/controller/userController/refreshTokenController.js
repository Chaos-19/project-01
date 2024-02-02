const jwt = require("jsonwebtoken");

const User = require("../../models/userModel");

const handleRefreshToken = async (req, res) => {
    const cookie = req.cookie;

    //unauthorized
    if (cookie?.jwt) return res.sendStatus(401);

    const refreshToken = cookie.jwt;

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });

    const foundUser = await User.findOne({ refreshTokens: refreshToken });
    //Detact refreshToken reuse
    if (!foundUser) {
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRETE,
            async (err, decode) => {
                if (err) return res.sendStatus(403); //Forbidden

                const email = decode.userInfo.email;
                const hackedUser = User.findOne({ email });
                hackedUser.refreshTokens = [];
                const result = await hackedUser.save();
            }
        );
        return res.sendStatus(403); //Forbidden
    }
    const newRefreshTokenArray = foundUser.refreshTokens.filter(
        rt => rt != refreshToken
    );
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRETE,
        async (err, decode) => {
            if (err) {
                foundUser.refreshTokens.concat(newRefreshTokenArray);
                const result = await foundUser.save();
            }
            if (err || foundUser.username !== decoded.username)
                return res.sendStatus(403);

            // Refresh token was still valid
            const email = Object.values(foundUser.email);
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        username: decoded.username,
                        email
                    }
                },
                process.env.ACESS_TOKEN_SECRETE,
                { expiresIn: "10s" }
            );

            const newRefreshToken = jwt.sign(
                { username: foundUser.username },
                process.env.REFRESH_TOKEN_SECRETE,
                { expiresIn: "15s" }
            );
            // Saving refreshToken with current user
            foundUser.refreshTokens = [
                ...newRefreshTokenArray,
                newRefreshToken
            ];
            const result = await foundUser.save();

            // Creates Secure Cookie with refresh token
            res.cookie("jwt", newRefreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                maxAge: 24 * 60 * 60 * 1000
            });

            res.json({ accessToken });
        }
    );
};

module.exports = handleRefreshToken;
