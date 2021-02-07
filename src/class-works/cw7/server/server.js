const express = require('express');
const bodyParser = require('body-parser');
const API_PORT = 3001;

const jsonParser = bodyParser.json();
const app = express();

app.use(jsonParser);

app.get('/', (req, res) => {
  res.send('Hello User!')
});

app.get('/echo', (req, res) => {
  const text = req.query.q;
  res.send(text)
});

let count = 0;

app.get('/count', (req, res) => {
  res.send(`Page views: ${++count}`)
});

let users = [];

app.post('/signup', (req, res) => {
  const newUser = req.body;
  newUser.email = newUser.email.toLowerCase();
  newUser.id = Date.now();
  const isUserExists = users.some(user => user.email === newUser.email);
  if (isUserExists) {
    return res.status(400).send({ success: false, message: 'User already exists!' })
  }
  users.push(newUser);
  res.send({ success: true })
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedArray = users.filter(u => u.id !== +userId);
  const deletedCount = users.length - updatedArray.length;
  users = updatedArray.slice();
  res.send({ deletedCount })
});

app.put('/users/:id', (req, res) => {
  const userId = +req.params.id;
  let count = 0;
  const updatedArray = users.map(u => {
    if (u.id === userId) {
      count++;
      return Object.assign({}, u, req.body)
    }
    return u;
  });
  users = updatedArray.slice();
  res.send({ updatedCount: count })
});

app.listen(API_PORT, () => {
  console.log(`Server is running on ${API_PORT} port`)
});
