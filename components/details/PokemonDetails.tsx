import Link from 'next/link';
import { AiTwotoneHome } from 'react-icons/ai';
import DetailsLeft from './DetailsLeft';
import DetailsRight from './DetailsRight';
import { IPokemon } from './IPokemon';

interface IProps {
	pokemon: IPokemon;
}

export default function PokemonDetails({ pokemon }: IProps) {
	const { id, name, height, weight, abilities, types, stats } = pokemon;

	return (
		<div className="px-5 mb-4">
			<div className="flex flex-col md:flex-row justify-between py-0 md:py-4">
				<DetailsLeft
					id={id}
					name={name}
					abilities={abilities}
					height={height}
					weight={weight}
				/>
				<DetailsRight types={types} stats={stats} />
			</div>
			<Link
				href="/"
				className="flex justify-between items-center text-white bg-[#FFCB05] border-[6px] border-[#2B73B9] rounded-lg w-fit px-4 py-2 mx-auto mb-4 mt-4"
			>
				<AiTwotoneHome className="text-xl" />
				<span className="text-md pl-3">Back to Home</span>
			</Link>
		</div>
	);
}
