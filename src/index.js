import { 
  ApolloClient, 
  ApolloLink, 
  ApolloProvider, 
  InMemoryCache, 
  from,
  HttpLink 
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { reducer, initialState } from './reducer';
import { StateProvider } from '@state';


const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = `Bearer ${token}`

  if(token) {
    operation.setContext({
      headers: {
        authorization
      }
    })
  }

  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if(networkError && networkError.result.code === 'invalid_token') {
    sessionStorage.removeItem('token')
    window.location = '/user'
  }

})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'http://localhost:3500/graphql',
    })
  ])
})

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StateProvider>
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
