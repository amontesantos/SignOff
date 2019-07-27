import dbService from '../services/dbService';
import UserClass from '../classes/user';

exports.getUser = async (req, res) => {
    const { result, error } = await dbService.getUser(req.params.email);
    res.status(!!error ? 500 : 200);
    res.json(!!error ? error : result);
}

exports.createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new UserClass(firstName, lastName, email, password);
    const { result, error } = await dbService.createUser(newUser);
    res.status(!!error ? 500 : 200);
    res.json(result);
}

exports.deleteUser = async (req, res) => {
    const { email } = req.body;
    const { result, error } = await dbService.deleteUser(email);
    res.status(!!error ? 500 : 200);
    res.json(result);
}