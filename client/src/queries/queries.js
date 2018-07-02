// Imports: Apollo
import { gql } from 'apollo-boost';

// Query: Retrieve all Books
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

// Query: Retrieve all Authors
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

// Mutation: Add Book
const addBookMutation = gql`
  mutation {
      addBook(name: $name, genre: $genre, authorId: $authorId) {
          name
          id
      }
  }
`

// Exports
export { 
    getBooksQuery,
    getAuthorsQuery,
    addBookMutation
 };