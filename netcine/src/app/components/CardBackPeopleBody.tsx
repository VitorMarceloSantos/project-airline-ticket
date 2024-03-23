import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CardBackPeopleCardType } from '../types/components/CardBackPeopleBodyType';
import { IconButton } from '@mui/material';
import { useModalOpenClosePeoplesContext } from '../context';

export const CardBackPeopleBody = ({ values }: CardBackPeopleCardType) => {
	const { name } = values;
	const { handleModalOpenClosePeoples } = useModalOpenClosePeoplesContext();

	return (
		<section className='carousel-card-back-body'>
			<section className='carousel-card-back-body-buttons'>
				<section>
					<IconButton className='carousel-card-back-body-buttons-btn' aria-label='button-add'>
						<AddIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</IconButton>
					<IconButton className='carousel-card-back-body-buttons-btn' aria-label='button-like'>
						<ThumbUpOffAltIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</IconButton>
				</section>

				<IconButton
					className='carousel-card-back-body-buttons-btn'
					aria-label='button-arrow-down'
					onClick={() => handleModalOpenClosePeoples(true)}
				>
					<KeyboardArrowDownIcon className='carousel-card-back-body-buttons-btn-text-color' />
				</IconButton>
			</section>
			<section className='carousel-card-back-body-informations'>
				<p role='paragraph'>{name}</p>
			</section>
		</section>
	);
};
