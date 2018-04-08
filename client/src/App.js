// Imports: React
import React, { Component } from 'react';

// Imports: Components
import BookList from './components/BookList.jsx';

class App extends Component {
  render() {
    return (
        <div id="main">
          <h1>Reading List</h1>
          <BookList />
      </div>
    );
  }
}
export default App;