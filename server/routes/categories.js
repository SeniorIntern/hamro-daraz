const express = require('express');
const router = express.Router();
const { categoryModel } = require('../models/category');
const _ = require('lodash');

router.get('/', async (req, res) => {
  const categories = await categoryModel.find();
  res.status(200).send(categories);
});

router.get('/:id', async (req, res) => {
  const category = await categoryModel.findById(req.params.id);
  if (!category) return res.status(400).send('No Category Found.');

  res.status(200).send(category);
});

router.post('/', async (req, res) => {
  let category = await categoryModel.findOne(
    _.pick(req.body, ['categoryName'])
  );
  // let category = await categoryModel.find({
  //   categoryName: req.body.categoryName,
  // });
  if (category) return res.status(400).send('Category Already Exist.');

  category = new categoryModel(_.pick(req.body, ['categoryName']));
  category.save();
  res.status(200).send(category);
});

module.exports = router;
