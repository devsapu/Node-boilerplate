const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

exports.signin = async (req, res) => {
  const { name, contactNumber, email, username, password } = req.body;
  
  try {
    const newUser = await userService.createUser(name, contactNumber, email, username, password);
    
    const payload = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    };

    const secretKey = '1234'; // In production, store this securely, not in plain text
    const options = { expiresIn: '2h' };
    const token = jwt.sign(payload, secretKey, options);

    res.json({ newUser, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await userService.loginUser(username, password);
    if (!user) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };

    const secretKey = '1234'; // In production, store this securely, not in plain text
    const options = { expiresIn: '2h' };
    const token = jwt.sign(payload, secretKey, options);

    res.json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

