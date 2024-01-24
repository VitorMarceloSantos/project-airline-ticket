import { note } from '../../constants/card';

export const handleChangeClassColor = (vote: number): string => {
	if (vote <= note.bad) {
		return 'carousel-card-back-body-informations-bad';
	} else if (vote <= note.good) {
		return 'carousel-card-back-body-informations-good';
	}
	return 'carousel-card-back-body-informations-excelent';
};
