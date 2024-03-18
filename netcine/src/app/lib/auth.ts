import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db as prisma } from './db';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma as any),
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
				if (!credentials?.email || !credentials?.password) throw new Error('Dados de Login necessários.');
				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				});

				if (!user || !user.hashedPassword) {
					throw new Error('Usuário não registrado atráves de email/senha.');
				}
				const matchPassword = await bcrypt.compare(credentials.password, user.hashedPassword);
				if (!matchPassword) throw new Error('Senha Incorreta.');
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
