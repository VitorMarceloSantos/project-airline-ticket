import Joi from 'joi';

const messageError = {
	'string.min': 'Minímo de 6 caracteres.',
	'string.max': 'Máximo de 10 caracteres.',
	'string.empty': ' Campo obrigatório.',
};

const messageErrorPassword = {
	...messageError,
	'string.pattern.base': 'A senha deve conter letras minúscula, maiúscula e número.',
};

const messageErrorEmail = {
	'string.empty': ' Campo obrigatório',
	'string.pattern.base': 'Email inválido.',
};
const NUMBER_SIX = 6;
const NUMBER_TEN = 10;
const email = Joi.string()
	.pattern(new RegExp('^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$'))
	.required()
	.messages(messageErrorEmail);
const password = Joi.string()
	.min(NUMBER_SIX)
	.max(NUMBER_TEN)
	.pattern(new RegExp('^[a-zA-Z0-9]{6,10}$'))
	.required()
	.messages(messageErrorPassword);

export const createFormSchemaLogin = Joi.object({
	email,
	password,
}).required();
