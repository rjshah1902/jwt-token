const express = require('express');

const category = require('./../models/category.models');

exports.getAllCategory = (req, res) => {

    category.getAll(null, (err, result) => {

        if (err) {
            res.status(400).send({
                message: err.message,
                status: err.status,
                data: err.data
            });
        } else {
            res.status(400).send({
                message: result.message,
                status: result.status,
                data: result.data
            });
        }

    });
};