const User = require('../models/userModel');

exports.createUser = async (name, contactNumber, email, username, password) => {
  const user = await User.create({ name, contactNumber, email, username, password });
  return user;
};

exports.loginUser = async (username, password) => {
  const user = await User.findOne({ where: { username, password } });
  return user;
};
exports.getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('No user found');
    return user;
  } catch (err) {
    throw err;
  }
};