import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import userRouter from './routers/userRouter';

const API_PORT = 3001;

const app = express();
app.use(express.json());
const mainRouter = express.Router();

const dbRoute = 'mongodb+srv://dona:blueberries@signoff-kuiz1.mongodb.net/AppDb?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => console.log('Connected to the database'));
db.on('error', () => console.error.bind(console, 'MongoDb connection error:'));

app.use('/api', mainRouter);
mainRouter.use('/user', userRouter);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT${API_PORT}`));