import { handleSearchIconCloseType } from '../../types/components/NavBarTypes';

export const handleSearchIconClose = ({ setIsActiveSearch, setTextInputSearch }: handleSearchIconCloseType) => {
	setTextInputSearch('');
	setIsActiveSearch(false);
};
