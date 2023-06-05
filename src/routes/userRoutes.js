const express = require('express');
const userController = require('../controllers/userControllers');
const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
