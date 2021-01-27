import { PrismicLink } from 'apollo-link-prismic'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import { apiEndpoint } from '../prismic-configuration'
import fragmentTypes from './fragmentTypes.json'

const fragmentMatcher = new IntrospectionFragmentMatcher(
  { introspectionQueryResultData: fragmentTypes },
);

// Client method to query documents from the Prismic repo
export const client = new ApolloClient({
  link: PrismicLink({ uri: apiEndpoint }),
  cache: new InMemoryCache({ fragmentMatcher }),
});
