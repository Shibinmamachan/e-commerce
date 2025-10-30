var express = require('express');
var router = express.Router();
const User = require('../models/user');
const { validationResult } = require('express-validator');
const { validateEmail, validatePassword } = require('./customValidators');

// GET route
router.get('/', function (req, res) {
  res.render("hello", { errors: [] });
});

// POST route to create user
router.post('/createUser', [validateEmail, validatePassword], async function (req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render('hello', {
      errors: errors.array(),
      email: req.body.email
    });
  }

  const { email, password } = req.body;

  const newUser = new User({ email, password });

  try {
    await newUser.save();
    res.render('form-data', { message: "Data saved to DB" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
