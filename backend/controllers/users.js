import { getUser, createUser, deleteUser } from '../services/dbService';

exports.getUser = async (email) => {
    const result = await getUser(email);
    return result;
}

exports.createUser = async (newUser) => {
    const result = await createUser(newUser);
    return result;
}

exports.deleteUser = async (email) => {
    const result = await deleteUser(email);
    return result;
}