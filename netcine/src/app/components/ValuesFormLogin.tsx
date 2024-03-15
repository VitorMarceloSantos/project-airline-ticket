'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import google from '/public/images/google.png';
import { FormValuesType } from '../types/components/FormValuesType';

export const ValuesFormLogin = () => {
	const INITIAL_FORMS_VALUES = { email: '', password: '' };
	const [formValues, setFormValues] = useState<FormValuesType>(INITIAL_FORMS_VALUES);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	};
	return (
		<form>
			<h2>Entrar</h2>
			<section className='container-informations-buttons'>
				<input
					type='text'
					placeholder='Email Cadastrado'
					id='email'
					name='email'
					value={formValues.email}
					onChange={handleChange}
				/>
				<input
					type='password'
					placeholder='Senha'
					id='password'
					name='password'
					value={formValues.password}
					onChange={handleChange}
				/>
				<button> Entrar</button>
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
