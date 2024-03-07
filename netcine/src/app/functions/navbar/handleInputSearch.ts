import { handleInputSearchType } from '../../types/components/NavBarTypes';

export const handleInputSearch = ({ event, setTextInputSearch, router }: handleInputSearchType) => {
	const {
		target: { value },
	} = event;
	setTextInputSearch(value);
	if (value.length >= 3) {
		router.push(`/search/others/${value}`);
	}
};
