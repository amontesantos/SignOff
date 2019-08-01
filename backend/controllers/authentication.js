import bcrypt from 'bcrypt';

import dbService from '../services/dbService';
import UserClass from '../classes/user';
import ResponseClass from '../classes/response';
import { PASSWORD_SALT_ROUNDS } from '../constants';

exports.login = async (req, res) => {
    const { email, password } = req;
    const userQueryResponse = await dbService.getUser(email);
    if (!!userQueryResponse.error) {
        res.status(500);
        res.json(new ResponseClass(null, error));
        return;
    }
    const user = userQueryResponse.result;

    if (!!user) {
        res.status(200);
        res.json(new ResponseClass(false, null));
        return;
    }

    let saltedPasswordHashMatches = false;
    bcrypt.compare(password, user.hash, (err, res) => {
        if (!!err) {
            res.status(500);
            res.json(new ResponseClass(null, error));
            return;
        }
        saltedPasswordHashMatches = res;
    });
    
    if (!saltedPasswordHashMatches) {
        res.status(200);
        res.json(new ResponseClass(false, null));
        return;
    }

    res.status(200);
    return (new ResponseClass(true, null));
}

exports.register = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    let salt, hash = null;

    // pretending there's validation here for now

    bcrypt.genSalt(PASSWORD_SALT_ROUNDS, (err, _salt) => {
        // handle error
        salt = null;
        bcrypt.hash(password, salt, (err, _hash) => {
            // handle error
            hash = _hash;
        });
    });

    const newUser = new UserClass(firstName, lastName, email, salt, hash);
    const createResponse = dbService.createUser(newUser);

    res.status(!!createResponse.error ? 500 : 200);
    res.json(!!createResponse.error
        ? new ResponseClass(null, createResponse.error)
        : new ResponseClass({}, null)
    );
}