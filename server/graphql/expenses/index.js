let {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} = require('graphql');


exports.ExpenseType = new GraphQLObjectType({
    name: "expense",
    description: "This represents an expense item",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The id of the expense.',
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the expense.',
        },
        ammount: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'The ammount of the expense.',
        },
        occuring: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Payment due date.',
        }
    })
});

