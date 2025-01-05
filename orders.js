const express = require('express');
const router = express.Router();

// Get all orders
router.get('/', (req, res) => {
    res.json({ orders: ['Order 1', 'Order 2'] });
});

module.exports = router;
