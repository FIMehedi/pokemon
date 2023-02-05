import Image from 'next/image';
import logoImg from '/assets/images/logo.png';

export default function Logo() {
	return (
		<div className="mx-auto w-fit py-8">
			<Image
				src={logoImg}
				alt="Pokemon"
				width="260"
				height="100"
				className="w-auto h-16 md:h-24"
			/>
		</div>
	);
}
