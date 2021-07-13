const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { getSingleUser, createUser, login, saveBook, deleteBook } = require('../controllers/user-controller');

const resolvers = {
  Query: {
    
  },

  Mutation: {
    
  }
};
  
module.exports = resolvers;