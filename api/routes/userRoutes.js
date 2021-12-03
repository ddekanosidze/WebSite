const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlware/authMiddlware.js');
const {
    authUser,
    registerUser,
    getUserProfile,
    registerUserValidation
} = require('../controllers/userControllers');

router.post('/', registerUser);
router.post('/validate', registerUserValidation);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile)
    // .put(protect, updateUserProfile);

module.exports = router;
