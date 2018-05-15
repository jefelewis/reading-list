// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
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

  // Function: Display all books
  displayBooks()  {
    let data = this.props.data;

    if(data.loading) {
      return(<div>Loading Books...</div>)
    }
    else {
      return data.books.map(book => {
        return(
          <li key={ book.id }>{ book.name }</li>
        );
      })
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          { this.displayBooks() }
        </ul>
      </div>
    );
  }
}


// Exports
export default graphql(getBooks)(BookList);