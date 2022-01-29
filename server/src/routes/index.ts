import express from 'express';
import registerUser from './registerUser';
import login from './login';

const routes = express.Router();

routes.use('/registerUser', registerUser);
routes.use('/login', login);

export default routes;
