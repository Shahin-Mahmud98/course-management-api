const express = require('express');
const {
  createPurchase,
  getUserPurchases
} = require('../controllers/purchaseController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .post(protect, createPurchase)
  .get(protect, getUserPurchases);

module.exports = router;