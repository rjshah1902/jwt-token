const jwt = require('jsonwebtoken');

const AuthKey = require('./auth-key');

function verifyJWT(req, res, next) {

    const bearerToken = req.headers['authorization'];

    if (typeof bearerToken !== 'undefined') {

        const bearer = bearerToken.split(" ");

        const token = bearer[1];

        jwt.verify(token, AuthKey.key, (err, result) => {

            if (err) {
                res.status(400).send({
                    message: "Error Found " + err.message,
                    status: false,
                    data: []
                });
            } else {
                /* res.status(200).send({
                     message: "Admin Login Success",
                     status: true,
                     data: result
                 }); */
                next();
            }
        });

    } else {
        res.send({
            message: "Invalid bearer token",
        });
    }

}

module.exports = verifyJWT;