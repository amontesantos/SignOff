export default class UserClass {
    constructor(firstName, lastName, email, salt, passwordHash) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.salt = salt;
        this.passwordHash = passwordHash;
    }
}