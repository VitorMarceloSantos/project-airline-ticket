import { CastType } from './CardBackBodyTypes';
import { CardGenresType } from './CardTypes';
import { ResultsType } from './CarouselMoviesTypes';

export type ModalMoviesInformationsType = {
	values: {
		english_name: string;
		movieOrTV: ResultsType;
		type: string;
		cast: CastType[];
		genres: CardGenresType[];
	};
};
