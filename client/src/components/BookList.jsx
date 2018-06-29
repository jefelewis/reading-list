// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql } from 'react-apollo';

// Imports: getBooks Query
import { getBooks } from '../queries/queries.js';


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

  // Render
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


// Exports (Binding the getBooks query with the BookList component)
// graphql(Query)(Component)
export default graphql(getBooks)(BookList);