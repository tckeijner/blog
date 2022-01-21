const express = require('express');
const router = express.Router('router');
const store = require('../store');

router.post('/', (req, res, next) => {
  store.registerUser({ email: req.body.email, password: req.body.password });
  res.status(200).send({
    response: `registered with ${req.body.email} and ${req.body.password}`,
  });
});

module.exports = router;
