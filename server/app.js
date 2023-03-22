require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const config = require('config');
const serverStatus = require('debug')('app:serverStat');
const dbConnectionStatus = require('debug')('app:dbStat');
const products = require('./routes/products');
const customers = require('./routes/customers');
const categories = require('./routes/categories');
const orders = require('./routes/orders');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setup routes
app.use('/api/products', products);
app.use('/api/customers', customers);
app.use('/api/categories', categories);
app.use('/api/orders', orders);

mongoose
  .connect('mongodb://localhost:27017/hamro-daraz')
  .then(() => dbConnectionStatus('Connected to MongoDB'))
  .catch((err) => console.log(err.message));

if (!config.get('jwtPrivateKey')) {
  console.log('Environment variable for jwt secret key not set.');
  process.exit(1);
}

const port = process.env.PORT;
app.listen(port, () => {
  serverStatus(`Server is listening on port ${port}...`);
});
