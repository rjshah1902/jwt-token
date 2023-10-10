const express = require('express');

const db = require('./db');

const table_name = "category";

const Category = function () { }

Category.getAll = (req, res) => {

    sql = `select * from ${table_name}`;

    db.query(sql, (err, result) => {

        if (err) {
            res({
                message: "Found Error " + err.message,
                status: false,
                data: [],
            }, null);
        } else {
            res(null, {
                message: "Category get Successfully",
                status: true,
                data: result,
            });
        }

    });
};

module.exports = Category;