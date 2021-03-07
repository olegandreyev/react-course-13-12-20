const express = require('express');
const path = require('path');
require('express-async-errors');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
require('./connect-db');

// API routers
const userRouter = require('./api/users');
const authRouter = require('./api/auth');

const API_PORT = 3001;

const jsonParser = bodyParser.json();
const app = express();

app.use(express.static('public'));

app.use(session({
  name : 'app.sid',
  secret: "1234567890QWERTY",
  resave: true,
  saveUninitialized: true
}));

app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

app.use(jsonParser);

app.get('/', (req, res) => {
  res.send('Hello User!')
});

app.use('/users', userRouter);
app.use('/auth', authRouter);

app.use((req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

app.listen(API_PORT, () => {
  console.log(`Server is running on ${API_PORT} port`)
});
