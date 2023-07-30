const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const auth = require('./middlewares/auth');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '64b5b69ffba49d59652a5e9e',
  };
  next();
});
app.use('/', auth, require('./routes/users'));
app.use('/', auth, require('./routes/cards'));

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Такого пути не существует.' });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });
  next();
});

app.listen(PORT);
