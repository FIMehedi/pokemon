import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
	query pokemons($limit: Int, $offset: Int) {
		pokemons(limit: $limit, offset: $offset) {
			count
			next
			previous
			nextOffset
			prevOffset
			status
			message
			results {
				id
				name
				image
			}
		}
	}
`;

export const GET_POKEMON_TYPE = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
			types {
				type {
					name
				}
			}
		}
	}
`;
