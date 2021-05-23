const { User } = require('../models');

const userData = [{
  username: 'Justin',
  password: 'justin1'

},
{
  username: 'Jake',
  password: 'jake1'
},
{
  username: 'Leslie',
  password: 'Leslie1'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;