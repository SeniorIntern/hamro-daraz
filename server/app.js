require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const app = express();
const serverStatus = require('debug')('app:serverStat');
const dbConnectionStatus = require('debug')('app:dbStat');
const products = require('./routes/products');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup routes
app.use('/api/products', products);

mongoose
  .connect('mongodb://localhost:27017/hamro-daraz')
  .then(() => dbConnectionStatus('Connected to MongoDB'))
  .catch((err) => console.log(err.message));

const port = process.env.PORT;
app.listen(port, () => {
  appServerStatus(`Server is listening on port ${port}`);
});
