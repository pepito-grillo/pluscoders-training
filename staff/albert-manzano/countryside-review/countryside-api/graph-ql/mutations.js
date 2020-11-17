const { GraphQLObjectType } = require('../../countryside-data/daos/node_modules/graphql')
const UserMutations = require('./users/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        addUser: UserMutations.addUser,
        updateUser: UserMutations.updateUser
    }
})