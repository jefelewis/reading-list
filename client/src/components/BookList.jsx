// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql } from 'react-apollo';

// Imports: Apollo Queries
import { getBooksQuery } from '../queries/queries.js';

// Imports: Components
import BookDetails from './BookDetails.jsx';


// Component: BookList
class BookList extends Component {

  // Function: Display all books
  displayBooks() {
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
        <BookDetails />
      </div>
    );
  }
}


// Exports (Binding the getBooks query with the BookList component)
// graphql(Query)(Component)
export default graphql(getBooksQuery)(BookList);