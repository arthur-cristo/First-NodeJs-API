const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('', userController.findAll);
router.get('/:id', userController.findById);
router.post('', userController.createUser);
router.put('/:id', userController.updateUser);
router.patch('/:id', userController.patchUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;