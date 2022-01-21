const express = require('express');
const Router = express.Router();

//Rutas
const User = require('./User');

User(Router)

module.exports = Router;