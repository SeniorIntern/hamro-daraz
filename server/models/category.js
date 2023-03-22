const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 24,
  },
});

const categoryModel = mongoose.model('categories', categorySchema);

exports.categoryModel = categoryModel;
exports.categorySchema = categorySchema;
