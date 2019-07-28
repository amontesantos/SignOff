import express from 'express';

import userController from '../controllers/users';

const userRouter = express.Router();

userRouter.get('/:email', userController.getUser);
userRouter.post('/', userController.createUser);
userRouter.delete('/', userController.deleteUser);

export default userRouter;