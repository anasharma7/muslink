const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
    res.json({ products: ['Product 1', 'Product 2'] });
});

module.exports = router;
