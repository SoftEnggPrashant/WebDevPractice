const express = require('express');
const todoRouter = require('./routes/todoRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1',todoRouter);

module.exports = app;