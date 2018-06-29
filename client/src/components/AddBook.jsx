// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import { graphql } from 'react-apollo';

// Imports: getAuthors Query
import { getAuthors } from '../queries/queries.js';


// Component: BookList
class AddBook extends Component {

  // Function: Display all authors
  displayAuthors(){
    let data = this.props.data;

    // Check to see if data is loading
    if(data.loading){
      return(<option disabled>Loading Authors...</option>)
    }
    // Map authors to options list
    else{
      return data.authors.map((author) => {
        return(<option key={author.id} value={author.id}>{ author.name }</option>)
      })
    }
  }

  // Render
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
            { this.displayAuthors() }
          </select>
        </div>  

        <button>Add Book</button>

      </form>
    );
  }
}




// Exports (Binding the getAuthors query with the AddBook component)
// graphql(Query)(Component)
export default graphql(getAuthors)(AddBook);