const express = require('express');
const router = express.Router();
const { ProductModel } = require('../models/products');
const _ = require('lodash');
const { categoryModel } = require('../models/category');

router.get('/', async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).send(products);
});

router.get('/:id', async (req, res) => {
  let product = await ProductModel.findById(req.params.id);
  res.status(200).send(product);
});

router.post('/', async (req, res) => {
  const category = await categoryModel.findById(req.body.categoryId);
  if (!category) return res.status(400).send('Category not Found.');

  let product = new ProductModel({
    name: req.body.name,
    category: {
      _id: category._id,
      categoryName: category.categoryName,
    },
    price: req.body.price,
  });
  let result = await product.save();
  res.status(200).send(result);
});

router.put('/:id', async (req, res) => {
  let product = await ProductModel.findById(req.params.id);
  if (!product) return res.status(400).send('Product Not Found.');

  let category = await categoryModel.findById(req.body.categoryId);
  if (!category) return res.status(400).send('Category not Found.');

  product = await ProductModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        category: {
          _id: category._id,
          categoryName: category.categoryName,
        },
        price: req.body.price,
      },
    },
    { new: true }
  );
  res.status(200).send(product);
});

router.delete('/:id', async (req, res) => {
  const product = await ProductModel.findByIdAndDelete(req.param.id);
  if (!product) return res.status(400).send('Product Not Found.');

  res.status(200).send(product);
});

module.exports = router;
