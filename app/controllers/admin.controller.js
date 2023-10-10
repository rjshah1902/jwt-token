const express = require('express');

const AdminModels = require('./../models/admin.models');

exports.adminList = (req, res, next) => {

    AdminModels.getAdminList(null, (error, result) => {

        if (error) {
            res.status(400).send({
                message: error.message,
                status: error.status,
                data: error.data,
            });
        } else {
            res.status(200).send({
                message: result.message,
                status: result.status,
                data: result.data,
            });
        }
    });
}


exports.adminLogin = (req, res) => {

    const data = req.body;

    if (data.email && data.password) {

        AdminModels.getAdminLogin(data, (error, result) => {

            if (error) {
                res.status(400).send({
                    message: error.message,
                    status: error.status,
                    data: error.data,
                    token: result.token
                });
            } else {
                res.status(200).send({
                    message: result.message,
                    status: result.status,
                    data: result.data,
                    token: result.token
                });
            }
        });

    } else {

        res.status(400).send({
            message: "Please Enter a valid email & password",
            status: false,
            data: [],
            token: ""
        });

    }
}