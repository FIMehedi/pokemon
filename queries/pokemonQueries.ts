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
				dreamworld
				artwork
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

export const GET_POKEMON = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
			id
			name
			height
			weight
			types {
				type {
					name
				}
			}
			stats {
				stat {
					name
				}
				base_stat
			}
			base_experience
			abilities {
				ability {
					name
				}
			}
		}
	}
`;

export const GET_POKEMON_IMG = gql`
	query pokemons($limit: Int, $offset: Int) {
		pokemons(limit: $limit, offset: $offset) {
			results {
				dreamworld
				artwork
			}
		}
	}
`;
