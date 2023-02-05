import { ApolloClient, InMemoryCache } from '@apollo/client';

export const pokemonClient = new ApolloClient({
	uri: 'https://graphql-pokeapi.graphcdn.app/',
	cache: new InMemoryCache(),
});
