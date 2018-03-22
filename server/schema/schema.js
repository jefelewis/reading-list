// Imports: GraphQL
const graphql = require('graphql');

// Imports: GraphQL Packages
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Imports: Lodash
const _ = require('lodash');

// GraphQL: Dummy Data
let books = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: 1},
  {name: 'The Final Empire', genre: 'Fantasy', id: 2},
  {name: 'The Long Earth', genre: 'Sci-Fi', id: 3}
]


// GraphQL: Schema
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
});


// GraphQL: Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLString}},
      resolve(parent, args){
        // Grab data from Database/API
        _.find()
      }
    }
  }
});


// Exports
module.exports = new GraphQLSchema({
  query: RootQuery
});