/* eslint-disable no-new */
const express = require('express');
const TodoRoute = require('./TodoRoute');
const ValuesRoute = require('./ValuesRoute');

const apiRouter = express.Router();

new TodoRoute(apiRouter);
new ValuesRoute(apiRouter);

module.exports = apiRouter;
