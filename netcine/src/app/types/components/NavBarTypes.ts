import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react';

export type handleSearchIconCloseType = {
	setIsActiveSearch: Dispatch<SetStateAction<boolean>>;
	setTextInputSearch: Dispatch<SetStateAction<string>>;
};
export type handleSearchIconOpenType = {
	setIsActiveSearch: Dispatch<SetStateAction<boolean>>;
	inputSearch: RefObject<HTMLInputElement>;
};
