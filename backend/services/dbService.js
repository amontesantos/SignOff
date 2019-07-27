import User from '../models/user';

export const createUser = (userClass) => {
    let error = null;
    const newUser = new User({
        firstName: userClass.firstName,
        lastName: userClass.lastName,
        email: userClass.email,
        password: userClass.password
    });
    newUser.save(err => {
        error = err;
    });
    return error;
}

export const deleteUser = (email) => {
    let success = false;
    User.findOneAndDelete({ email }, err => {
        if (!err) {
            success = true
        }
    });
    return success;
}