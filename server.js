const express = require('express');

const app = express();


const admin = require('./app/routes/index');

const erro_page = require('./app/middelware/not-found');

app.use(express.json());

app.use('/api', admin);

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to the Project"
    });
});

app.use(erro_page);

app.get('*', (req, res) => {
    res.status(404).send({
        message: "API Not Found"
    });
});

const port = process.env.PORT || 3000;

app.listen(port, (err, res) => {
    console.log("API listening on port " + port);
});