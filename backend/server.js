import mongoose from 'mongoose';
import express from 'express';

import userRouter from './routers/userRouter';
import authenticationRouter from './routers/authenticationRouter';

const API_PORT = 3001;

const app = express();
app.use(express.json());
const mainRouter = express.Router();

app.use('/api', mainRouter);
mainRouter.use('/user', userRouter);
mainRouter.use('/auth', authenticationRouter);

const server = app.listen(API_PORT, () => console.log(`LISTENING ON PORT${API_PORT}`));

// TODO: Remove login credentials from DB link
const dbRoute = 'mongodb+srv://dona:blueberries@signoff-kuiz1.mongodb.net/AppDb?retryWrites=true&w=majority';
let db = null;
mongoose.connect(dbRoute, { useNewUrlParser: true }, function(err) {
    if (err) {
        console.log('Unable to connect to MongoDB, shutting down server...');
        process.exit(1);
    }
    db = mongoose.connection;
    db.once('open', () => console.log('Connected to the database'));
    db.on('error', () => console.error.bind(console, 'MongoDb connection error'));
});