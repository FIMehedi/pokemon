'use client';

import PokemonDetails from '@/components/details/PokemonDetails';
import Logo from '@/components/shared/logo/Logo';
import { GET_POKEMON } from '@/queries/pokemonQueries';
import { useQuery } from '@apollo/client';

interface IProps {
	params: {
		slug: string;
	};
}

export default function DetailsPage({ params }: IProps) {
	const { loading, error, data } = useQuery(GET_POKEMON, {
		variables: {
			name: params.slug,
		},
	});

	return (
		<main className="flex h-fit justify-between">
			<div className="bg-side" />
			<div className="">
				<Logo />
				{!loading && data && <PokemonDetails pokemon={data?.pokemon} />}
			</div>
			<div className="bg-side" />
		</main>
	);
}
