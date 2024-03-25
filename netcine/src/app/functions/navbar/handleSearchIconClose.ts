import { handleSearchIconCloseType } from '@/app/types/components/NavBarTypes';

export const handleSearchIconClose = ({ setIsActiveSearch, setTextInputSearch }: handleSearchIconCloseType): void => {
	setTextInputSearch('');
	setIsActiveSearch(false);
};
