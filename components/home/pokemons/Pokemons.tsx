'use client';

import { GET_POKEMONS } from '@/queries/pokemonQueries';
import { useQuery } from '@apollo/client';
import PokemonCard, { IPokemon } from './PokemonCard';

export default function Pokemons() {
	const { loading, error, data } = useQuery(GET_POKEMONS, {
		variables: {
			limit: 10,
			offset: 0,
		},
	});

	if (loading) return <p className="text-center">Loading...</p>;

	return (
		<div className="container px-4 md:px-6 2xl:px-16 pt-4 pb-20 mx-auto hidden md:flex flex-wrap gap-6 justify-center">
			{!loading &&
				data.pokemons.results.length &&
				data.pokemons.results.map((pokemon: IPokemon) => (
					<PokemonCard key={`pokemon-${pokemon.id}`} pokemon={pokemon} />
				))}
		</div>
	);
}
