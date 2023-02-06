import Logo from '@/components/shared/logo/Logo';
import Pokemons from '../pokemons/Pokemons';

export default function Hero() {
	return (
		<section className="bg-hero w-full overflow-x-hidden h-auto min-h-screen">
			<div className="bg-hero-texture">
				<Logo />
				<Pokemons />
			</div>
		</section>
	);
}
