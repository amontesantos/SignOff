import mongoose from 'mongoose';
import express from 'express';

import userRouter from './routers/userRouter';
import authenticationRouter from './routers/authenticationRouter';

const API_PORT = 3001;

const app = express();
app.use(express.json());
const mainRouter = express.Router();

const dbRoute = 'mongodb+srv://dona:blueberries@signoff-kuiz1.mongodb.net/test?retryWrites=true&w=majority';
let db = null;
try {
    mongoose.connect(dbRoute, { useNewUrlParser: true });
    db = mongoose.connection;
    db.once('open', () => console.log('Connected to the database'));
    db.on('error', () => console.error.bind(console, 'MongoDb connection error'));
} catch (error) {
    console.error(error);
}

app.use('/api', mainRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/auth', authenticationRouter);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT${API_PORT}`));