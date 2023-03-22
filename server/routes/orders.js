const express = require('express');
const router = express.Router();
const { orderModel } = require('../models/orders');
const { customerModel } = require('../models/customers');
const { ProductModel } = require('../models/products');

router.get('/', async (req, res) => {
  const orders = await orderModel.find();
  res.status(200).send(orders);
});

router.get('/:id', async (req, res) => {
  const order = await orderModel.findById(req.params.id);
  if (!order) return res.status(400).send('Invalid Order Id.');

  res.status(200).send(order);
});

router.post('/', async (req, res) => {
  let customer = await customerModel.findById(req.params.customerId);
  if (!customer) return res.status(400).send('Invalid Customer Id.');

  let product = await ProductModel.findById(req.params.productId);
  if (!product) return res.status(400).send('Invalid Product Id.');

  const order = new orderModel({
    customer: {
      name: customer.name,
      email: customer.email,
    },
    product: {
      name: product.name,
      price: product.price,
    },
    dateOrdered: req.body.dateOrdered,
    orderTotal: req.body.orderTotal,
  });
  res.status(200).send(order);
});

module.exports = router;
