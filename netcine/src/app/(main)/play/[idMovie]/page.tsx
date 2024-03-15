import { PlayMovieOrTv } from '@/app/components/PlayMovieOrTv';

export default async function Page({ params }: { params: { idMovie: string } }) {
	const { idMovie } = params;

	return (
		<section className='play_movie_or_tv'>
			<PlayMovieOrTv value={{ idMovie }} />
		</section>
	);
}
