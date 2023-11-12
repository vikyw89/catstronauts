import React from 'react';
import ReactDOM from 'react-dom';
import 'dotenv/config'
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
  uri: process.env.SERVER_URL,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
