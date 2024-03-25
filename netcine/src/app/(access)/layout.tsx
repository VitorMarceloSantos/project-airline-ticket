import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../css/app.css';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../lib/auth';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NetMovies',
	description: 'NetMovies - Login and Create New User',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions);
	if (session) redirect('/');
	return (
		<html lang='pt-br'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
