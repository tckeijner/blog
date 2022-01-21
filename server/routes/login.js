const express = require('express');
const router = express.Router('router');
const store = require('../store');

router.post('/', (req, res, next) => {
  console.log('Email: ' + req.body.email);
  store
    .authenticate({ email: req.body.email, password: req.body.password })
    .then(({ success }) => {
      if (success) {
        res.status(200).send({
          response: 'login successful',
        });
      } else {
        res.status(401).send({
          response: 'denied',
        });
      }
    });
});

module.exports = router;
