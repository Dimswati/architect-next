'server-only'

import { HttpLink } from "@apollo/client";
import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
  } from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: new HttpLink({
        uri: 'https://architect.paulmbatia.com/graphql',
      }),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only',
          context: {
            fetchOptions: {
              next: {
                revalidate: 5
              }
            }
          },
          nextFetchPolicy: 'cache-first'
        }
      }
    });
});