const express = require('express');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.json());
app.use('/api/categories', productsRouter);


module.exports = app;
