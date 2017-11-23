const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const ExpensesMock = require('../persistence/expenses.js');
const ExpenseType = require('./expenses');

const ExpensesQueryRootType  = new GraphQLObjectType({
    name: "ExpensesAppSchema",
    description: "Expenses Application Query Root",
    fields: {
        expense: {
            type: new GraphQLList(ExpenseType),
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) }
            },
            description: "Single expense item",
            resolve: (root, args) => {
                return ExpensesMock.filter(expense => expense.id === args.id);
            }
        },
        expenses: {
            type: new GraphQLList(ExpenseType),
            description: "A list of monthly expenses",
            resolve: () => {return ExpensesMock}
        }
    }
});

exports.ExpensesAppSchema = new GraphQLSchema({
    query: ExpensesQueryRootType
});
