const User = require('../models/user');

module.exports.createUser = (req, res) => {
  console.log(`1 ${req.body}`);
  const { name, about, avatar } = req.body;
  console.log(name, about, avatar);
  User.create({ name, about, avatar })
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.name}` }));
};

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(201).send({ data: users }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.name}` }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка ${err.name}` }));
};
