import { Dispatch, SetStateAction } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type FormValuesType = {
	email: string;
	password: string;
	name?: string;
};

export type FormCreateType = {
	values: {
		register: UseFormRegister<FormValuesType>;
		formValues: FormValuesType;
		setFormValues: Dispatch<SetStateAction<FormValuesType>>;
		loadingForm: boolean;
		errors: FieldErrors<FormValuesType>;
		isVisible: string;
		setIsVisible: Dispatch<SetStateAction<string>>;
	};
};

export type FormLoginType = {
	values: {
		register: UseFormRegister<FormValuesType>;
		formValues: FormValuesType;
		setFormValues: Dispatch<SetStateAction<FormValuesType>>;
		loadingForm: boolean;
		errors: FieldErrors<FormValuesType>;
		isVisible: string;
		setIsVisible: Dispatch<SetStateAction<string>>;
		isVisibleText: string;
	};
};
