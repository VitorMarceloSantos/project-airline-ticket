import { PlayMovieOrTv } from '@/app/components/PlayMovieOrTv';

export default async function Page({ params }: { params: { idMovie: string } }) {
	const { idMovie } = params;

	return (
		<section>
			{/* <h1 style={{ color: 'white' }}>Funcionou</h1> */}
			<PlayMovieOrTv value={{ idMovie }} />
		</section>
	);
}
