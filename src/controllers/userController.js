const userService = require('../services/userService');

exports.signin = async (req, res) => {
    console.log('herer')
  const { name, contactNumber, email, username, password } = req.body;
  
  try {
    const newUser = await userService.createUser(name, contactNumber, email, username, password);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await userService.loginUser(username, password);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
