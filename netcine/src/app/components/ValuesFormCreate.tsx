'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FormValuesType } from '../types/components/FormValuesType';

export const ValuesFormCreate = () => {
	const INITIAL_FORMS_VALUES = { email: '', password: '', name: '' };
	const [formValues, setFormValues] = useState<FormValuesType>(INITIAL_FORMS_VALUES);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
	};
	return (
		<form>
			<h2>Cadastrar</h2>
			<section className='container-informations-buttons'>
      <input
					type='text'
					placeholder='Nome'
					id='name'
					name='name'
					value={formValues.name}
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='Email'
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
				<button>Cadastrar</button>
			</section>
			<h3>
						<Link href='/login'>Login</Link>
					</h3>
		</form>
	);
};
