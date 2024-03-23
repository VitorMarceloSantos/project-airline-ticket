import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../css/app.css';
import { Providers } from '../providers';
import { NavBar } from '../components/NavBar';
import { Suspense } from 'react';
import { ModalMovies } from '../components/ModalMovies';
import { SideMenu } from '../components/SideMenu';
import { AvatarNavBar } from '../components/AvatarNavBar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../lib/auth';
import { ModalPeoples } from '../components/ModalPeoples';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NetMovies',
	description: 'NetMovies - Movies and Series',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions);
	if (!session) redirect('/login');
	return (
		<html lang='pt-br'>
			<body className={inter.className}>
				<Providers>
					<Suspense>
						<ModalPeoples />
						<ModalMovies />
					</Suspense>
					<SideMenu>
						<NavBar children={<AvatarNavBar />} />
						{children}
					</SideMenu>
				</Providers>
			</body>
		</html>
	);
}
