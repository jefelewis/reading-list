// Imports: Dependencies
import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// Imports: Apollo Queries
import { getBooksQuery } from '../queries/queries';

// Imports: Components
import BookDetails from './BookDetails.jsx';

// Component: Book List
class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBook: null
    }; 
  }

  // Function: Display all books
  displayBooks() {
    let data = this.props.data;

    if(data.loading) {
      return(<div>Loading Books...</div>)
    }
    else {
      return data.books.map((book) => {
        return(
          <li
            key={ book.id }
            onClick={ (e) => {this.setState( {selectedBook: book.id })}}
          >{ book.name }</li>
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
        <BookDetails bookId={ this.state.selectedBook }/>
      </div>
    );
  }
}

// Exports (Binding the getBooks query with the BookList component)
// graphql(Query)(Component)
export default graphql(getBooksQuery)(BookList);