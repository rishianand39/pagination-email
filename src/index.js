const express = require('express');
const usercontroller = require('./controllers/user.controller');

const app = express();

app.use(express.json());
app.use('/users', usercontroller);
app.use('/registers', usercontroller);



module.exports = app;