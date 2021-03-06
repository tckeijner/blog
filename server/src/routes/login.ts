import express from 'express';
import { authenticate, generateAuthenticationToken } from '../store';
const router = express.Router();

router.post('/', (req, res, next) => {
  console.log('Email: ' + req.body.email);
  authenticate({ email: req.body.email, password: req.body.password })
    .then(async ({ success, id }) => {
      if (success) {
        const auth_token = await generateAuthenticationToken({ id });
        res.status(200).send({
          response: 'login successful',
          auth_token,
        });
      } else {
        res.status(401).send({
          response: 'denied',
        });
      }
    });
});

export default router;
