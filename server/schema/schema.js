// Imports: GraphQL
const GRAPHQL = require('graphql');

// Imports: GraphQL Packages
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} = GRAPHQL;

// Imports: Lodash
const _ = require('lodash');

// Imports: MongoDB Models
const BOOK = require('../models/book.js');
const AUTHOR = require('../models/author.js');


// GraphQL: Schema
const BOOKTYPE = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AUTHORTYPE,
      resolve(parent, args) {
        // return _.find(authors, {id: parent.authorId})
      }
    }
  })
});

const AUTHORTYPE = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BOOKTYPE),
      resolve(parent, args) {
        // return _.filter(books, {authorId: parent.id})
      }
    }
  })
});


// GraphQL: Root Query
const ROOTQUERY = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    book: {
      type: BOOKTYPE,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        // Grab data from Database/API
        // return _.find(books, {id: args.id});
      }
    },
    author: {
      type: AUTHORTYPE,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        // Grab data from Database/API
        // return _.find(authors, {id: args.id});
      }
    },
    books: {
      type: new GraphQLList(BOOKTYPE),
      resolve(parent, args) {
        // return books;
      }
    },
    authors: {
      type: new GraphQLList(AUTHORTYPE),
      resolve(parent, args) {
        // return authors;
      }
    }
  })
});


// GraphQL: Mutations
const MUTATION = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add Author
    addAuthor: {
      type: AUTHORTYPE,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(parent, args) {
        // Create new instance
        let author = new Author({
          name: args.name,
          age: args.age
        });

        // Save new instance
        return author.save();
      }
    }
  })
});


// Exports
module.exports = new GraphQLSchema({
  query: ROOTQUERY,
  mutation: MUTATION
});