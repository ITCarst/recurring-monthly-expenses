const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString
} = require('graphql');

const ExpensesMock = require('../../persistence/expenses.js');
const ExpenseType = require('./expenses');

const ExpensesQueryRootType  = new GraphQLObjectType({
    name: "ExpensesAppSchema",
    description: "Expenses Application Query Root",
    fields: {
        expenses: {
            type: new GraphQLList(ExpenseType),
            description: "List of monthly expenses",
            resolve: (root, source, fieldASTs) => {
                console.log(root, source, fieldASTs, ExpensesMock)
                return ExpensesMock
            }
        }
    }
});

exports.ExpensesAppSchema = new GraphQLSchema({
    query: ExpensesQueryRootType
});

