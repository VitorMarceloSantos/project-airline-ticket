import { verifyQuantifyChar } from '@/app/functions/modal/verifyQuantifyChar';
import { ModalPeoplesInformationsType } from '@/app/types/components/ModalPeoplesInformationsType';

export const ModalPeoplesInformations = ({ values }: ModalPeoplesInformationsType) => {
	const {
		informationPeople: { biography, birthday, place_of_birth, imdb_id, homepage, name },
	} = values;
	const NUMBER_FIVE_HUNDRED_FIFTY = 550;

	return (
		<section className='informations-modal-text'>
			<section className='informations-modal-text-container-1'>
				<p className='informations-modal-text-container-1-overview'>
					{verifyQuantifyChar(biography, NUMBER_FIVE_HUNDRED_FIFTY)}
				</p>
			</section>
			<section className='informations-modal-text-container-2'>
				<section className='informations-modal-text-container-2-peoples'>
					<h3>
						{' '}
						<span className='informations-modal-text-container-2-peoples-text'>Nome:</span>{' '}
						<span>{name === null ? '-' : name}</span>
					</h3>
					<h3>
						{' '}
						<span className='informations-modal-text-container-2-peoples-text'>Data Nascimento:</span>{' '}
						<span>{birthday === null ? '-' : birthday.split('-').reverse().join('/')}</span>
					</h3>
					<h3>
						{' '}
						<span className='informations-modal-text-container-2-peoples-text'>Local Nascimento:</span>{' '}
						<span>{place_of_birth === null ? '-' : place_of_birth}</span>
					</h3>
					<h3>
						{' '}
						<span className='informations-modal-text-container-2-peoples-text'>ID IMDB:</span>{' '}
						<span>{imdb_id === null ? '-' : imdb_id}</span>
					</h3>
					<h3>
						{' '}
						<span className='informations-modal-text-container-2-peoples-text'>HomePage:</span>{' '}
						<span>{homepage === null ? '-' : homepage}</span>
					</h3>
				</section>
			</section>
		</section>
	);
};
