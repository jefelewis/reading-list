// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { format } from 'url';


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
      <form id="add-book">

        <div className="field">
          <label>Book Title:</label>
          <input type="text"/>
        </div>
        
        <div className="field">
          <label>Genre:</label>
          <input type="text"/>
        </div>      
        
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author</option>
          </select>
        </div>  

        <button>Add Book</button>

      </form>
    );
  }
}




// Exports (Binding the getAuthors query with the AddBook component)
export default graphql(getAuthors)(AddBook);