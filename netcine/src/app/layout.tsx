import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './css/app.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'NetMovies',
	description: 'NetMovies - Movies and Series',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-br'>
			<body className={inter.className}>
				{
					<>
					
						<script src='https://www.youtube.com/iframe_api'></script>
						<script src='script.js'></script>
						{children}
					</>
				}
			</body>
		</html>
	);
}
