const { User } = require('../models');

const userdata =[
  {
    "name": "Dorian Grey",
    "email": "Dgrey@aol.com",
    "password": 'DontLookInTheAttic'
  },
  {
    "name": "Mr Darcy",
    "email": "Fritzdarcy@gmail.com",
    "password": 'JanePride1813'
  },
  {
    "name": "Jay Gatsby",
    "email": "GreatestGatsby@hotmail.com",
    "password": '#1Bootlegger'
  }
]



const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;