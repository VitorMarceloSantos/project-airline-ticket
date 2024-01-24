import { dataLanguages } from '../data/dataLanguages';
import { CardLanguagesType } from '../types/CardTypes';

export const filterLanguage = (language: string) => {
	return dataLanguages.find((languageData) => languageData.iso_639_1 === language) as CardLanguagesType;
};
