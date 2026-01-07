import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${import.meta.env.VITE_API_DOMAIN}/graphql`,
    // credentials: "include",
  }),
  cache: new InMemoryCache(), // cache query results after fetching them
});
