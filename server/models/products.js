const mongoose = require('mongoose');
const { categorySchema } = require('../models/category');

// model
const ProductModel = mongoose.model(
  'products',
  new mongoose.Schema({
    name: {
      type: String,
      require: true,
      minlength: 3,
      maxlength: 164,
    },
    category: {
      type: categorySchema,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 10,
    },
  })
);

exports.ProductModel = ProductModel;
