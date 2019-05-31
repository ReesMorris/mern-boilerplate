const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Returns users from JSON Placeholder's website
// @access  Public
router.get('/', (req, res) => {
  const request = require('request');
  request.get(
    'https://jsonplaceholder.typicode.com/users',
    (error, response, body) => {
      res.json(JSON.parse(body));
    }
  );
});

module.exports = router;
