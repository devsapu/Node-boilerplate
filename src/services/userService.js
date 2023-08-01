const User = require('../models/userModel');

exports.createUser = async (name, contactNumber, email, username, password) => {
  const user = await User.create({ name, contactNumber, email, username, password });
  return user;
};

exports.loginUser = async (username, password) => {
  const user = await User.findOne({ where: { username, password } });
  return user;
};
