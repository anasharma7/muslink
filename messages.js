const express = require('express');
const router = express.Router();

// Get all messages
router.get('/', (req, res) => {
    res.json({ messages: ['Message 1', 'Message 2'] });
});

module.exports = router;
