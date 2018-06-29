// Imports: Apollo
import { gql } from 'apollo-boost';


// Query: Retrieve all Books
const getBooks = gql`
  {
    books {
      name
      id
    }
  }
`

// Query: Retrieve all Authors
const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`


// Exports
export default { 
    getBooks,
    getAuthors
 };