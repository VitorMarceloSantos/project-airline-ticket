import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './db';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db as any),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENTID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
		CredentialProvider({
			name: 'credencials',
			credentials: {
				email: { label: 'Email', type: 'text', placeholder: 'email@email.com' },
				password: { label: 'Password', type: 'password' },
				username: { label: 'Name', type: 'text', placeholder: 'Vitor Marcelo' },
			},
			async authorize(credentials, req): Promise<any> {
        console.log("Authorize method", credentials)
				const user = { email: 'teste@teste.com', password: '123456', name: 'Vitor Teste' };

				return user;
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	debug: process.env.NODE_ENV === 'development',
	secret: process.env.SECRET,
};
