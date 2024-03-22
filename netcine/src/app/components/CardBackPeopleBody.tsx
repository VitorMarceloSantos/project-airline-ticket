import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CardBackPeopleCardType } from '../types/components/CardBackPeopleBodyType';

export const CardBackPeopleBody = ({ values }: CardBackPeopleCardType) => {
	const {
		name,
	} = values;

	return (
		<section className='carousel-card-back-body'>
			<section className='carousel-card-back-body-buttons'>
				<section>
					<button className='carousel-card-back-body-buttons-btn' aria-label='button-add'>
						<AddIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</button>
					<button className='carousel-card-back-body-buttons-btn' aria-label='button-like'>
						<ThumbUpOffAltIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</button>
				</section>
				<button className='carousel-card-back-body-buttons-btn' aria-label='button-arrow-down'>
					<KeyboardArrowDownIcon className='carousel-card-back-body-buttons-btn-text-color' />
				</button>
			</section>
			<section className='carousel-card-back-body-informations'>
				<p role='paragraph'>{name}</p>
			</section>
		</section>
	);
};
