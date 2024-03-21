import { MovieOrTVValuesType } from "../context/MovieOrTVAddedType";
import { ResultsType } from "./CarouselMoviesTypes";

export type CardsGroupResultType = {
	values: {
		verifyExistedPerson: ResultsType[];
		type: string;
	};
};
