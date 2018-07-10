// Imports: GraphQL
const graphQL = require('graphql');

// Imports: GraphQL Packages
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphQL;

// Imports: MongoDB Schema
const BOOK = require('../mongoose-models/book.js');
const AUTHOR = require('../mongoose-models/author.js');




/****************************** GraphQL: Schemas ******************************/
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
        return AUTHOR.findById(parent.authorId);
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
        return BOOK.find({ authorId: parent.id});
      }
    }
  })
});
/****************************** GraphQL: Schemas ******************************/




/***************************** GraphQL: Root Query ****************************/
const ROOTQUERY = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    book: {
      type: BOOKTYPE,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        // Grab data from Database/API
        // return _.find(books, {id: args.id});
        return BOOK.findById(args.id);
      }
    },
    author: {
      type: AUTHORTYPE,
      args: { id: { type: GraphQLID }},
      resolve(parent, args) {
        // Grab data from Database/API
        // return _.find(authors, {id: args.id});
        return AUTHOR.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(BOOKTYPE),
      resolve(parent, args) {
        // Return ALL books
        return BOOK.find({});
      }
    },
    authors: {
      type: new GraphQLList(AUTHORTYPE),
      resolve(parent, args) {
        // Return ALL authors
        return AUTHOR.find({});
      }
    }
  })
});
/***************************** GraphQL: Root Query ****************************/




/***************************** GraphQL: Mutations *****************************/
const MUTATION = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({

    // Add Author
    addAuthor: {
      type: AUTHORTYPE,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        // Create new instance
        let author = new AUTHOR({
          name: args.name,
          age: args.age
        });

        // Save new instance
        return author.save();
      }
    },

    // Add Book
    addBook: {
      type: BOOKTYPE,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        // Create a new instance
        let book = new BOOK({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId
        });
        
        // Save new instance
        return book.save();
      }
    }

  })
});
/***************************** GraphQL: Mutations *****************************/




// Exports
module.exports = new GraphQLSchema({
  query: ROOTQUERY,
  mutation: MUTATION
});