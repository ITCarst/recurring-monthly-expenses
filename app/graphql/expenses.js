let {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull
} = require('graphql');


const ExpenseType = new GraphQLObjectType({
    name: "expense",
    description: "This represents an expense item",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLString),
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
            type: new GraphQLNonNull(GraphQLInt),
            description: 'Payment due date.',
        }
        
    })
});

module.exports = ExpenseType;
