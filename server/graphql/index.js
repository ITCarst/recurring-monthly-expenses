const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

const ExpensesMock = require('../persistence/expenses-mock.json');
const IncomeMock = require('../persistence/income-mock.json');

const { ExpenseType } = require('./expenses');
const { IncomeType } = require('./income');

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
            resolve: (root, args) => ExpensesMock.filter(expense => expense.id === args.id)
        },
        expenses: {
            type: new GraphQLList(ExpenseType),
            description: "A list of monthly expenses",
            resolve: () => ExpensesMock
        },
        income: {
            type: new GraphQLList(IncomeType),
            description: "User's monthly income",
            resolve: () => IncomeMock
        }
    }
});

const ExpensesMutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: "Add income and expenses.",
    fields: {
        createExpense: {
            type: ExpenseType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                ammount: { type: new GraphQLNonNull(GraphQLInt) },
                occuring: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (_, args) => {
                console.log(_, args)
                return {
                    "expense": "Added"
                }
            },
        },
        createIncome: {
            type: IncomeType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                ammount: { type: new GraphQLNonNull(GraphQLInt) },
                incomeDate: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (_, args) => {
                return {
                    income: "Added"
                }
            }
        }
    }
});


exports.ExpensesAppSchema = new GraphQLSchema({
    query: ExpensesQueryRootType,
    mutation: ExpensesMutationType
});
