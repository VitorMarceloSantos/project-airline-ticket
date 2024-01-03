// export async function GET() {
// 	const res = await fetch(
// 		'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200',
// 		{
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'API-Key': process.env.DATA_API_KEY as string,
// 			},
// 		},
// 	);
// 	const data = await res.json();

// 	return Response.json({ data });
// }
