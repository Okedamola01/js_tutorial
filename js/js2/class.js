export default class user
{
    constructor(email, name){
        this._name = name;
        this._id = email;
    }

    greeting()
    {
        return `Hi, my name is ${this._name}`;
    }
}