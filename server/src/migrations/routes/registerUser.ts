import express from 'express';
import { registerUser } from '../../store';
const router = express.Router();

router.post('/', (req, res, next) => {
  registerUser({ email: req.body.email, password: req.body.password })
    .then(() => {
      res.status(200).send({
        response: `registered with ${req.body.email} and ${req.body.password}`,
      });
    });
});

export default router;
