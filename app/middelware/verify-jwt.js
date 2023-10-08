const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {

    const bearerToken = req.headers['authorization'];

    if (typeof bearerToken !== 'undefined') {

        const bearer = bearerToken.split(" ");

        const token = bearer[1];

        req.token = token;

        next();

    } else {
        res.send({
            message: "Invalid bearer token",
        });
    }
}

module.exports = verifyJWT;