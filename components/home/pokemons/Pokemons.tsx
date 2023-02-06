'use client';

import { GET_POKEMONS } from '@/queries/pokemonQueries';
import { useQuery } from '@apollo/client';
import PokemonCard, { IPokemon } from './PokemonCard';
import ViewDeterminer from './view/ViewDeterminer';

export default function Pokemons() {
	const { loading, error, data } = useQuery(GET_POKEMONS, {
		variables: {
			limit: 10,
			offset: 0,
		},
	});

	if (loading) return <p className="text-center">Loading...</p>;

	if (error) return <p className="text-center">{error.message}</p>;

	return (
		<ViewDeterminer>
			{!loading &&
				data.pokemons.results.length &&
				data.pokemons.results.map((pokemon: IPokemon) => (
					<PokemonCard key={`pokemon-${pokemon.id}`} pokemon={pokemon} />
				))}
		</ViewDeterminer>
	);
}
