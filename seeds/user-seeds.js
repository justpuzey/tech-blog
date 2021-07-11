const { User } = require('../models');

const userdata = [
  {
    username: 'test1',
    email: 'test1@email.com',
    password: 'testpassword1'
  },
  {
    username: 'test2',
    email: 'test2@email.com',
    password: 'testpassword2'
  }

];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;