import User from '../models/user';
import ResponseClass from '../classes/response';

export const getUser = async (email) =>  {
    let result, error = null;
    try {
        result = await User.findOne({ email }).exec();
    } catch (err) {
        error = err;
    }
    return new ResponseClass(result, error);
}

export const createUser = async (userClass) => {
    let result, error = null;
    const newUser = new User({
        firstName: userClass.firstName,
        lastName: userClass.lastName,
        email: userClass.email,
        password: userClass.password
    });
    try {
        result = await newUser.save();
    } catch (err) {
        error = err;
    }
    return new ResponseClass(result, error);
}

export const deleteUser = async (email) => {
    let result, error = null;
    try {
        result = await User.findOneAndDelete({ email }).exec();
    } catch (err) {
        error = err;
    }
    return new ResponseClass(result, error);
}