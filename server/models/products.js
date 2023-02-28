const mongoose = require('mongoose');

// model
const ProductModel = mongoose.model(
  'products',
  new mongoose.Schema({
    name: {
      type: String,
      require: true,
      minlength: 3,
      maxlength: 24,
    },
    price: {
      type: String,
      require: true,
      min: 200,
    },
  })
);
