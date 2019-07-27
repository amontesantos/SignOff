import { createUser, deleteUser } from '../services/dbService';

exports.createUser = (newUser) => {
    const err = createUser(newUser);
    return err;
}

exports.deleteUser = (email) => {
    const success = deleteUser(email);
    return success;
}