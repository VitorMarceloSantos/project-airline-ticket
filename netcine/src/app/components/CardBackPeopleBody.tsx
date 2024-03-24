import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CardBackPeopleCardType } from '../types/components/CardBackPeopleBodyType';
import { IconButton } from '@mui/material';
import { useModalOpenClosePeoplesContext } from '../context';

export const CardBackPeopleBody = ({ values }: CardBackPeopleCardType) => {
	const { name, knowFor } = values;
	const { handleModalOpenClosePeoples } = useModalOpenClosePeoplesContext();

	return (
		<section className='carousel-card-back-body'>
			<section className='carousel-card-back-body-buttons'>
				<section className='carousel-card-back-body-informations-people'>
					<p role='paragraph'>{name}</p>
					<IconButton
						className='carousel-card-back-body-buttons-btn'
						aria-label='button-arrow-down'
						onClick={() => handleModalOpenClosePeoples(true)}
					>
						<KeyboardArrowDownIcon className='carousel-card-back-body-buttons-btn-text-color' />
					</IconButton>
				</section>
			</section>
			<section className='carousel-card-back-body-informations-know'>
				{/* <p role='paragraph'>{name}</p> */}
				<p role='paragraph'>Conhecido(a) por:</p>
				<ul>
					{knowFor.map((movie, index) => {
						return <li key={index}>{movie.media_type === 'movie' ? movie.title : movie.name}</li>;
					})}
				</ul>
			</section>
		</section>
	);
};
