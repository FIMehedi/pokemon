import { Progress } from '@material-tailwind/react';
import { Stat, TypeElement } from './IPokemon';

interface IProps {
	types: TypeElement[];
	stats: Stat[];
}

function Widget({ title, values }: { title: string; values: TypeElement[] }) {
	return (
		<div className="mb-6">
			<h4 className="pb-2 text-lg">{title}</h4>
			<ul className="flex flex-wrap gap-2">
				{values?.map((type: TypeElement) => (
					<li
						key={type.type.name}
						className={`bg-${type.type.name} type-button`}
					>
						{type.type.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default function DetailsRight({ types, stats }: IProps) {
	const fakeWeakness = [...types, ...types]; // weakness is not provided by API

	return (
		<div className="w-full md:w-1/3 px-0 md:px-4">
			<Widget title="Type" values={types} />
			<Widget title="Weakness" values={fakeWeakness} />
			<div className="">
				<h4 className="pb-2 text-lg">Stats</h4>
				<div className="flex w-full flex-col gap-2 mb-4">
					{stats?.map((stat: Stat) => (
						<div key={stat.stat.name}>
							<p className="pb-1 text-[#413f3f]">{stat.stat.name}</p>
							<Progress
								className=""
								value={stat.base_stat}
								variant="gradient"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
