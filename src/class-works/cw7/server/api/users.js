const User = require('../models/UserModel');
const Router = require('express').Router;

const userRouter = Router();


userRouter.get('/', async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

userRouter.get('/is-exist', async (req, res) => {
  const isExist = await User.exists({ email: req.query.email });
  res.send(isExist);
});

userRouter.post('/signup', async (req, res) => {
  const user = new User(req.body);
  const result = await user.save();
  res.send(result.clientResponse());
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

