const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/user');
const Card = require('./models/card');

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
