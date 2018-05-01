// Imports
import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


// Apollo: Query
const getBooks = gql`
  {
    books {
      name
      id
    }
  }
`


// Component: BookList
class BookList extends Component {
  render() {
    return (
      <div>
        <ul id="book-list">
          <li>Book Name</li>
        </ul>
      </div>
    );
  }
}


// Exports
export default graphql(getBooks)(BookList);