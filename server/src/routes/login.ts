import express from 'express';
import { authenticate } from '../store';
const router = express.Router();

router.post('/', (req, res, next) => {
  console.log('Email: ' + req.body.email);
  authenticate({ email: req.body.email, password: req.body.password })
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

export default router;
