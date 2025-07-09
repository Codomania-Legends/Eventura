const mongoose = require('mongoose');
const { USER } = require('../Model/user');
const { generateToken } = require('../Authentication/auth');
const { CheckForDuplicateUser } = require('../Services/user');

const SignupReqRes = async (req, res) => {
    try {
        const { username, password, identity } = req.body;
        const isDuplicate = await CheckForDuplicateUser({ username, password });
        console.log(isDuplicate)
        if (!isDuplicate) {
            throw new Error("User already Exist");
        }
        const user = new USER({ username, password, identity });
        await user.save();
        const token = generateToken({username , password , identity})
        res.status(201).json({ message: 'User created successfully', user , token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const LoginReqRes = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await USER.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { SignupReqRes, LoginReqRes };
