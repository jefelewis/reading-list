// Imports: GraphQL
const graphql = require('graphql');

// Imports: GraphQL Packages
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLID } = graphql;

// Imports: Lodash
const _ = require('lodash');

// GraphQL: Dummy Data
let books = [
  {name: 'Name of the Wind', genre: 'Fantasy', id: 1},
  {name: 'The Final Empire', genre: 'Fantasy', id: 2},
  {name: 'The Long Earth', genre: 'Sci-Fi', id: 3}
]

let authors = [
  {name: 'Patrick Rothfuss', age: '52', id: '1'},
  {name: 'Brandon Sanderson', age: '42', id: '2'},
  {name: 'Terry Pratchett', age: '66', id: '3'}
]


// GraphQL: Schema
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
});


// GraphQL: Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        // Grab data from Database/API
        return _.find(books, {id: args.id});
      }
    },
    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        // Grab data from Database/API
        return _.find(authors, {id: args.id});
      }
    }
  }
});


// Exports
module.exports = new GraphQLSchema({
  query: RootQuery
});