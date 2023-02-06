import { isArray } from '@apollo/client/cache/inmemory/helpers';
import { AbilityElement } from './IPokemon';

export default function GridItem({
	title,
	value,
	unit,
}: {
	title: string;
	value: number | string | AbilityElement[];
	unit?: string;
}) {
	return (
		<div className="">
			<h4 className="text-lg font-medium pb-1">{title}</h4>
			{isArray(value) ? (
				<ul>
					{value.map((ability: AbilityElement) => (
						<li key={ability.ability.name}>{ability.ability.name}</li>
					))}
				</ul>
			) : (
				<p>
					{value} {unit}
				</p>
			)}
		</div>
	);
}
