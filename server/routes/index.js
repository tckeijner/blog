const express = require('express');
const routes = express.Router();
const registerUser = require('./registerUser');

routes.use('/registerUser', registerUser);

module.exports = routes;
