const { User } = require('../models/userModels');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};

exports.updateUser = async (req, res) => {
    try {
        await User.update(req.body, { where: { id: req.params.id } });
        const updatedUser = await User.findByPk(req.params.id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.destroy({ where: { id: req.params.id } });
        res.status(200).json('User was deleted');
    } catch (error) {
        res.status(400).json({ success: false, error });
    }
};
