const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACESS_TOKEN_SECRETE, (err, decoded) => {
        if (err) return res.sendStatus(403); //invalid toke
        next();
    });
};

module.exports = verifyJWT;
