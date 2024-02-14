import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CardBackPeopleCardType } from '../types/components/CardBackPeopleBodyType';

// type VerifyAgePeopleType = {
// 	values: {
// 		birthday: string;
// 		deathday: null | string;
// 	};
// };

// const verifyAgePeople = ({ values }: VerifyAgePeopleType) => {
// 	const { birthday, deathday } = values;
// 	const date = new Date().getFullYear();
// 	if (deathday !== null) {
// 		const yearBirthday = Number(birthday.split('-')[0]);
// 		const yearDeath = Number(deathday.split('-')[0]);
// 		return yearDeath - yearBirthday;
// 	}
// 	return date - Number(birthday.split('-')[0]);
// };

// const participationsInMovieOrTV = (know_for: ResultsType[]) => {
// 	let quant_Movies = 0;
// 	let quant_TV = 0;
// 	know_for.forEach(({ media_type }) => {
// 		media_type === 'movie' ? (quant_Movies += 1) : (quant_TV += 1);
// 	});
// 	return { quant_Movies, quant_TV };
// };

export const CardBackPeopleBody = ({ values }: CardBackPeopleCardType) => {
	const {
		name,
		informations: { biography },
		knowFor,
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
