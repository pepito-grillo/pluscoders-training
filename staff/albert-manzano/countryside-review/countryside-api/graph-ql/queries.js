const { GraphQLObjectType } = require('../../countryside-data/daos/node_modules/graphql')
const userQueries = require('./users/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: userQueries.user,
        users: userQueries.users
    }
})