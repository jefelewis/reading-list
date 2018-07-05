// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Imports: Components
import BookList from './components/BookList.jsx';
import AddBook from './components/AddBook.jsx';

// Imports: CSS
import './css/styles.css';

// Setup: Apollo
const CLIENT = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={CLIENT}>
        <div id="main">
          <h1>Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

// Exports
export default App;