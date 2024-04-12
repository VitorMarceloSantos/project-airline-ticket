import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/css/app.css';
import { Providers } from '@/app/providers';
import { NavBar } from '@/app/components/NavBar';
import { Suspense } from 'react';
import { ModalMovies } from '@/app/components/ModalMovies';
import { SideMenu } from '@/app/components/SideMenu';
import { AvatarNavBar } from '@/app/components/AvatarNavBar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/lib/auth';
import { ModalPeoples } from '@/app/components/ModalPeoples';
import { GlobalFooter } from '../components/GlobalFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NetCine',
	description: 'NetCine - Movies and Series',
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
				<footer className='footer-play-movie footer-main'>
					<GlobalFooter />
				</footer>
			</body>
		</html>
	);
}
