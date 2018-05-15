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