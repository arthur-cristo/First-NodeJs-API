const User = require('../models/userModel');

const findAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({title: 'Failed to retrieve users', description: err.message});
    }
};

const findById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByPk(id);
        user ? res.status(200).json(user)
            : res.status(404).json({title: 'User not found', description: `The user of id ${id} was not found.`});
    } catch (err) {
        res.status(500).json({title: 'Failed to retrieve user', description: err.message});
    }
};

const createUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const user = await User.create({ first_name, last_name, email, password });
        return res.status(201).json(user);
    } catch (err) {
        res.status(500).json({title: 'Failed to create user', description: err.message});
    }
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const {first_name, last_name, email, password} = req.body;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({title: 'User not found', description: `The user of id ${id} was not found.`})
            return;
        }
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.password = password;
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({title: 'Failed to update user', description: err.message});
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({title: 'User not found', description: `The user of id ${id} was not found.`})
            return;
        }
        await user.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({title: 'Failed to update user', description: err.message});
    }
};

module.exports = {
    findAll,
    findById,
    createUser,
    updateUser,
    deleteUser,
};