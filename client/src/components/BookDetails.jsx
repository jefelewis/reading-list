// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql } from 'react-apollo';

// Imports: Apollo Queries
import { getBookQuery } from '../queries/queries.js';


// Component: BookDetails
class BookDetails extends Component {

  // Function: Display details from a given book
  displayBookDetails() {
    const { book } = this.props.data;

    // If Book exists
    if(book) {
      return(
        <div>
          <h2>{ book.name }</h2>
          <p>{ book.genre }</p>
          <p>{ book.author.name }</p>
          <p>All books by { book.author.name }</p>
          <ul className="other-books">
            { book.author.books.map((book) => {
              return <li key={ book.id }>{ book.name }</li>
            })}
          </ul>
        </div>
      )
    }
    // If book doesn't exist
    else {
      <div>No book selected</div>
    }
  }

  // Render
  render() {
    return (
      <div id="book-details">
        {this.displayBookDetails()}
      </div>
    )
  }
}


// Exports (Binding the getBooks query with the BookList component)
// graphql(Query)(Component)
export default graphql(
  getBookQuery,
  {options: (props) => {
  return {
    variables: {
      id: props.bookId
    }
  }
}})(BookDetails);