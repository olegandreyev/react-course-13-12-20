const User = require('../models/UserModel');
const Router = require('express').Router;

const userRouter = Router();


userRouter.get('/', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

userRouter.post('/signup', async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send(result);
});

userRouter.delete('/:id', async (req, res) => {
  const result = await User.findByIdAndRemove(req.params.id);
  res.send(result);
});

userRouter.put('/:id', async (req, res) => {
  const result = await User.findByIdAndUpdate(req.body);
  res.send(result);
});

module.exports = userRouter;

