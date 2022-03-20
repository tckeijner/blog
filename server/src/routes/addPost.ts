import express from 'express';
import { getUserIdByAuthenticationToken, insertPost } from '../store';
const router = express.Router();

router.post('/', async (req, res, next) => {
  const user_id = await getUserIdByAuthenticationToken(req.body.authenticationToken);
  await insertPost({ ...req.body.blogPost, user_id, date_created: Date.now() });
  res.status(200).send({
    response: 'Blog successfully stored on server'
  });
});

export default router;