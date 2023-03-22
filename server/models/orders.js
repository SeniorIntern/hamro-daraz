const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 24,
      },
      email: {
        type: String,
        unique: true,
        required: true,
        min: 10,
        maxlength: 54,
      },
    }),
  },
  product: {
    type: new mongoose.Schema({
      name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 24,
      },
      price: {
        type: Number,
        required: true,
        min: 200,
      },
    }),
  },
  dateOrdered: {
    type: Date,
    default: Date.now,
    requierd: true,
  },
  orderTotal: {
    type: Number,
    min: 200,
    required: true,
  },
});

const orderModel = mongoose.model('orders', orderSchema);

exports.orderModel = orderModel;
