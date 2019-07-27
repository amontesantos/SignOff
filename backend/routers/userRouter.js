import express from 'express';

import UserClass from '../classes/user';
import { createUser, deleteUser } from '../controllers/users';

const userRouter = express.Router();

userRouter.post('/', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new UserClass(firstName, lastName, email, password);
    const err = createUser(newUser);
    res.status(!!err ? 500 : 200);
    res.json(err);
});

userRouter.delete('/', (req, res) => {
    const { email } = req.body;
    const success = deleteUser(email);
    res.status(success ? 200 : 500);
    res.send(null);
});

export default userRouter;