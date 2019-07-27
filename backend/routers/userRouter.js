import express from 'express';

import UserClass from '../classes/user';
import { getUser, createUser, deleteUser } from '../controllers/users';

const userRouter = express.Router();

userRouter.get('/:email', async (req, res) => {
    const email = req.params.email;
    const { result, error } = await getUser(email);
    res.status(!!error ? 500 : 200);
    res.json(!!error ? error : result);
});

userRouter.post('/', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new UserClass(firstName, lastName, email, password);
    const { result, error } = await createUser(newUser);
    res.status(!!error ? 500 : 200);
    res.json(result);
});

userRouter.delete('/', async (req, res) => {
    const { email } = req.body;
    const { result, error } = await deleteUser(email);
    res.status(!!error ? 500 : 200);
    res.json(result);
});

export default userRouter;