const express = require('express');
const routes = express.Router();
const registerUser = require('./registerUser');
const login = require('./login');

routes.use('/registerUser', registerUser);
routes.use('/login', login);

module.exports = routes;
