const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

// Check if model already exists before defining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
