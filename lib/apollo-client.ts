import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export function getClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
      fetchOptions: { cache: "no-store" },
    }),
    cache: new InMemoryCache(),
  });
}
