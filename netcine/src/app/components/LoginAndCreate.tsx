import Image from 'next/image';
import netCine from '/public/images/netCine.png';

export default function LoginAndCreate({ children }: { children: React.ReactNode }) {
	
	return (
		<section className='background-initial'>
			<section className='container-informations'>
				<section className='container-informations-logo'>
					<Image src={netCine} width={190} height={50} alt='Logo NetCine' priority={true} />
				</section>
				{children}
			</section>
		</section>
	);
}