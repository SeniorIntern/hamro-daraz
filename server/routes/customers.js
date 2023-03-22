const express = require('express');
const router = express.Router();
const customerModel = require('../models/customers');
const _ = require('lodash');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  const customers = await customerModel.find().select('-password');
  res.status(200).send(customers);
});

router.get('/:id', async (req, res) => {
  const customer = await customerModel.findById(req.params.id);
  res.status(200).send(_.pick(customer, ['_id', 'name', 'address', 'email']));
});

router.post('/', async (req, res) => {
  let customer = await customerModel.findOne(_.pick(req.body, ['email']));
  if (customer) return res.status(400).send('Customer Already Exist.');

  customer = new customerModel(
    _.pick(req.body, ['name', 'address', 'email', 'password'])
  );

  const salt = await bcrypt.genSalt(10);
  customer.password = await bcrypt.hash(customer.password, salt);

  await customer.save();
  res.status(200).send(_.pick(customer, ['_id', 'name', 'address', 'email']));
});

router.put('/:id', async (req, res) => {
  let customer = await customerModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: _.pick(req.body, ['name', 'address']),
    },
    { new: true }
  );
  res.status(200).send(_.pick(customer, ['_id', 'name', 'address', 'email']));
});

router.delete('/:id', async (req, res) => {
  let customer = await customerModel.findByIdAndDelete(req.param.id);
  if (!customer) return res.status(400).send('No Customer Found.');

  res.status(200).send(_.pick(customer, ['_id', 'name', 'address', 'email']));
});

module.exports = router;
