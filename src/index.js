import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Context from './Context';

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('app'))

/**
 * Old way to do with apollo-boost and react-apollo
 * 
 * import ApolloClient from 'apollo-boost'
   import { ApolloProvider } from 'react-apollo'

  const client = new ApolloClient({
    uri: 'http://localhost:3500/graphql'
  })
  
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    , document.getElementById('app'))
 */
