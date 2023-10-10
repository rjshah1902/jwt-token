const express = require('express');

const db = require('./db');

const jwt = require('jsonwebtoken');

const authKey = require('./../middelware//auth-key');

const Admin = function () { };

Admin.getAdminList = (req, res, next) => {

    sql = `select * from admin`;

    db.query(sql, (error, result) => {

        if (error) {
            res({
                message: "Error Found Admin " + error.message,
                status: false,
                data: []
            }, null);
        } else {
            res(null, {
                message: "Admin Details Found Successfully",
                status: true,
                data: result
            });
        }

    });
};


Admin.getAdminLogin = (req, res, next) => {

    let email = req.email;
    let password = req.password;

    if (email != null && password != null) {

        sql = `select * from admin where email = '${email}' and password = '${password}' `;

        db.query(sql, (error, result) => {

            if (error) {
                res({
                    message: "Error Found Admin " + error.message,
                    status: false,
                    data: [],
                    token: "",
                }, null);
            } else {
                jwt.sign({ result }, authKey.key, { expiresIn: "30000s" }, (error, result2) => {
                    res(null, {
                        message: "Admin Details Found Successfully",
                        status: true,
                        data: result[0],
                        token: result2,
                    });
                });
            }

        });
    } else {
        res({
            message: "Please provide a valid email & password",
            status: false,
            data: [],
            token: "",
        }, null);
    }
};

module.exports = Admin;