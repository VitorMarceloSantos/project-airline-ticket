'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { FormValuesType } from '../types/components/FormValuesType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { createFormSchemaCreate } from '../validations/FormCreate';
import { IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const ValuesFormCreate = () => {
	const INITIAL_FORMS_VALUES = { email: '', password: '', name: '' };
	const [formValues, setFormValues] = useState<FormValuesType>(INITIAL_FORMS_VALUES);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValuesType>({
		resolver: joiResolver(createFormSchemaCreate, { allowUnknown: true }), // https://github.com/hapijs/joi/blob/v15.0.3/API.md#validatevalue-schema-options-callback
		defaultValues: { ...formValues },
	});
	const passwordRef = useRef<HTMLInputElement>(null);
	const [isVisible, setIsVisible] = useState<string>('password');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	};

	const onSubmit: SubmitHandler<FormValuesType> = (data) => {
		console.log(data);
	};

	const isVisibleFunction = () => {
		setIsVisible((prevState) => (prevState === 'password' ? 'text' : 'password'));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Cadastrar</h2>
			<section className='container-informations-buttons'>
				<input
					{...register('name')}
					type='text'
					placeholder='Nome'
					id='name'
					name='name'
					value={formValues.name}
					onChange={handleChange}
				/>
				{errors.name && <p>{errors.name?.message}</p>}
				<input
					{...register('email')}
					type='email'
					placeholder='Email'
					id='email'
					name='email'
					value={formValues.email}
					onChange={handleChange}
				/>
				{errors.email && <p>{errors.email?.message}</p>}
				<section className='container-informations-buttons-input-password'>
					<input
						{...register('password')}
						ref={passwordRef}
						type={isVisible}
						placeholder='Senha'
						id='password'
						name='password'
						value={formValues.password}
						onChange={handleChange}
					/>
					<IconButton
						className='container-informations-buttons-input-password-icon'
						aria-label='button-play'
						onClick={() => isVisibleFunction()}
					>
						{isVisible === 'password' ? (
							<VisibilityOffIcon className='carousel-card-back-body-buttons-btn-text-color' />
						) : (
							<VisibilityIcon className='carousel-card-back-body-buttons-btn-text-color' />
						)}
					</IconButton>
				</section>
				{errors.password && <p>{errors.password?.message}</p>}
				<button type='submit' className='button-submit'>
					Cadastrar
				</button>
			</section>
			<h3>
				<Link href='/login'>Login</Link>
			</h3>
		</form>
	);
};
