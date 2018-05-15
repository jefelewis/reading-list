// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


// Apollo: Query
const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`


// Component: BookList
class AddBook extends Component {

  render() {
    return (
      <div>
        <ul id="add-book">
          { this.displayBooks() }
        </ul>
      </div>
    );
  }
}




// Exports
export default graphql(AddBook);