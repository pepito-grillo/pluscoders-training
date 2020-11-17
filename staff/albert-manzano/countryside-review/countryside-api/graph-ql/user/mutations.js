const {
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLFloat
} = require('../../../countryside-data/daos/node_modules/graphql')
const type = require('./type')
const User = require('../../../countryside-data/daos/user')

// Defines the mutations
module.exports = {
    addUser: {
        type,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            surname: { type: new GraphQLNonNull(GraphQLString) },
            rol: { type: GraphQLString, defaultValue: 'costumer' },
            password: { type: new GraphQLNonNull(GraphQLString) },
            age: { type: new GraphQLNonNull(GraphQLFloat) }
        },
        resolve: User.createEntry.bind(User)
    },
    updateUser: {
        type,
        args: {
            id: { type: GraphQLID },
            name: { type: new GraphQLNonNull(GraphQLString) },
            surname: { type: new GraphQLNonNull(GraphQLString) },
            rol: { type: GraphQLString, defaultValue: 'costumer' },
            password: { type: new GraphQLNonNull(GraphQLString) },
            age: { type: new GraphQLNonNull(GraphQLFloat) }
        },
        resolve: User.updateEntry.bind(User)
    }
}