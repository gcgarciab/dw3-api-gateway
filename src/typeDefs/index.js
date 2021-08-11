const accountsTypeDefs = require('./accountsTypeDef');
const transactionsTypeDefs = require('./transactionsTypeDef');
const usersTypeDefs = require('./usersTypeDef');

const schemasArray = [
  accountsTypeDefs,
  transactionsTypeDefs,
  usersTypeDefs
];

module.exports = schemasArray;