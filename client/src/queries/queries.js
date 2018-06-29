// Imports: Apollo
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';



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
export { 
    getBooks,
    getAuthors
 };