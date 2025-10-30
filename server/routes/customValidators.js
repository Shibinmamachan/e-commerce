// server/routes/customValidators.js

const { body } = require('express-validator');

const validateEmail = body('email')
  .isEmail()
  .withMessage('Invalid email format');

const validatePassword = body('password')
  .isLength({ min: 6 })
  .withMessage('Password must be at least 6 characters long');

module.exports = {
  validateEmail,
  validatePassword,
};
