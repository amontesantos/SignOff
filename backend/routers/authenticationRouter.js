import express from 'express';
import authenticationController from '../controllers/authentication';

const authenticationRouter = express.Router();

authenticationRouter.post('/login', authenticationController.login);
authenticationRouter.post('/register', authenticationController.register);

export default authenticationRouter;