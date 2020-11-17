const { GraphQLSchema } = require('../../countryside-data/daos/node_modules/graphql');
const query = require('./queries');
const mutation = require('./mutations');

module.exports = new GraphQLSchema({
    query,
    mutation
});