const mongoose = require('mongoose');

// model
const customerModel = mongoose.model(
  'customers',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 24,
      trim: true,
    },
    address: {
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
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      maxlegth: 1024,
      trim: true,
    },
    isAdmin: {
      type: Boolean,
    },
  })
);

// method - to genereate auth token

module.exports = customerModel;
