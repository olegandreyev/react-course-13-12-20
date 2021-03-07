const { Router } = require('express');
const User = require('../models/UserModel');

const authRouter = Router();

authRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }, '+password');
  if (user) {
    const result = await user.signIn(password);
    if (result) {
      req.session.user = user;
    }
    return res.send({ success: result, user: result ? user.clientResponse() : null})
  }
  res.send({ success: false, user: null })
});

authRouter.get('/me', (req, res) => {
  res.send({ user: req.session.user })
});

authRouter.post('/logout', async (req, res) => {
  req.session.destroy();
  res.send({ user: null })
});

module.exports = authRouter;
