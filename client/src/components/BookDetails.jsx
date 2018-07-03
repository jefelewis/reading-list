// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql } from 'react-apollo';

// Imports: Apollo Queries
import { getBookQuery } from '../queries/queries.js';


// Component: BookDetails
class BookDetails extends Component {

    // Render
    render() {
      return (
        <div id="book-details">
            <p>Output Book Details Here</p>
        </div>
      );
    }
  }


// Exports (Binding the getBooks query with the BookList component)
// graphql(Query)(Component)
export default graphql(getBookQuery)(BookDetails);