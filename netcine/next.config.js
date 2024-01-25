/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.tmdb.org',
			},
		],
	},
	experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
