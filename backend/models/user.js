import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    salt: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }
});

export default mongoose.model('user', userSchema);