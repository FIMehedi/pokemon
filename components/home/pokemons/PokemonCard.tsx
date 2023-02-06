import { GET_POKEMON_TYPE } from '@/queries/pokemonQueries';
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';

export interface IPokemon {
	id: number;
	name: string;
	artwork: string;
	dreamworld: string;
}

interface IPokemonType {
	type: {
		name: string;
	};
}

export default function PokemonCard({ pokemon }: { pokemon: IPokemon }) {
	const { loading, error, data } = useQuery(GET_POKEMON_TYPE, {
		variables: {
			name: pokemon.name,
		},
	});

	return (
		<Link href={`/pokemon/${pokemon.name}`} className="">
			<div className="character-card bg-white p-4 rounded-lg w-fit mx-2 md:mx-0">
				<div className="h-52 md:h-40 lg:h-44 xl:h-48 2xl:h-52 w-52 md:w-40 lg:w-44 xl:w-48 2xl:w-52 bg-[#f2f2f2] rounded-lg overflow-hidden relative p-8">
					<Image
						src={pokemon.artwork || pokemon.dreamworld}
						alt={pokemon.name}
						width="100"
						height="100"
						className="w-full h-auto"
					/>
					<span className="absolute left-4 top-4 text-sm">#{pokemon.id}</span>
				</div>
				<h2 className="text-lg font-medium py-2">{pokemon.name}</h2>
				<ul className="flex gap-2">
					<span className="hidden bg-poison bg-grass bg-water bg-bug bg-fire bg-water bg-flying" />
					{!loading &&
						data.pokemon.types.length &&
						data.pokemon.types.map((type: IPokemonType) => (
							<li
								key={type.type.name}
								className={`bg-${type.type.name} type-button`}
							>
								{type.type.name}
							</li>
						))}
				</ul>
			</div>
		</Link>
	);
}
