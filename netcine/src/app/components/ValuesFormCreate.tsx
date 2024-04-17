'use client';

import { useState } from 'react';
import { FormValuesType } from '@/app/types/components/FormValuesType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { createFormSchemaCreate } from '@/app/validations/FormCreate';
import { useRouter } from 'next/navigation';
import { FormCreate } from './FormCreate';

export const ValuesFormCreate = () => {
	const INITIAL_FORMS_VALUES = { email: '', password: '', name: '' };
	const [isVisible, setIsVisible] = useState<string>('password');
	const [loadingForm, setLoadingForm] = useState<boolean>(false);
	const router = useRouter();
	const [formValues, setFormValues] = useState<FormValuesType>(INITIAL_FORMS_VALUES);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValuesType>({
		resolver: joiResolver(createFormSchemaCreate, { allowUnknown: true }), // https://github.com/hapijs/joi/blob/v15.0.3/API.md#validatevalue-schema-options-callback
		defaultValues: { ...formValues },
	});

	const onSubmit: SubmitHandler<FormValuesType> = async (data, event) => {
		event?.preventDefault();
		setLoadingForm(true);
		const request = await fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-type': 'aplication/json',
			},
			body: JSON.stringify(data),
		});
		await request.json();
		if (!request.ok) {
			console.log('Erro no Post-Users');
		} else {
			router.push('/login');
		}
		setLoadingForm(false);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormCreate
				values={{
					errors,
					formValues,
					isVisible,
					loadingForm,
					register,
					setFormValues,
					setIsVisible,
				}}
			/>
		</form>
	);
};
