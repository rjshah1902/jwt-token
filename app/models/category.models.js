const express = require('express');

const db = require('./db');

const table_name = "category";

const Category = function () { }

Category.getAll = async (data, res) => {

    sql = `select * from ${table_name} where admin_id = '${data.id}'`;

    // const result = await db.query(sql);

    // console.log(result.rows);

    // return result;

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