'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import google from '/public/images/google.png';
import { FormValuesType } from '../types/components/FormValuesType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { createFormSchemaLogin } from '../validations/FormLogin';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';

export const ValuesFormLogin = () => {
	const INITIAL_FORMS_VALUES = { email: '', password: '' };
	const [formValues, setFormValues] = useState<FormValuesType>(INITIAL_FORMS_VALUES);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValuesType>({
		resolver: joiResolver(createFormSchemaLogin, { allowUnknown: true }), // https://github.com/hapijs/joi/blob/v15.0.3/API.md#validatevalue-schema-options-callback
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
			<h2>Entrar</h2>
			<section className='container-informations-buttons'>
				<input
					{...register('email')}
					type='email'
					placeholder='Email Cadastrado'
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
					{' '}
					Entrar
				</button>
			</section>
			<section className='container-informations-google'>
				<Image src={google} width={50} height={50} alt='Logo Google' />
				<Link href='/'>Conecte com Google</Link>
			</section>
			<h3>
				Novo por aqui?
				<Link href='/create'> Cadastre agora</Link>
			</h3>
		</form>
	);
};
