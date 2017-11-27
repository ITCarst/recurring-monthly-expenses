let {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} = require('graphql');


exports.IncomeType = new GraphQLObjectType({
    name: "income",
    description: "This represents an income item",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'The id of the income.',
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'The name of the income.',
        },
        ammount: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'Income ammount.',
        },
        incomeDate: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Income enter date.',
        }
    })
});

